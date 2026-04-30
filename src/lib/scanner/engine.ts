import Anthropic from "@anthropic-ai/sdk";
import { scannerTools } from "./tools";
import { executeFetchHeaders, executeFetchPage, executeCheckPathExposure, executeCheckDnsRecords } from "./tool-executors";
import type { ScanResult, Finding, ScanProgress } from "./types";

const client = new Anthropic({ apiKey: process.env.SCANNER_API_KEY });

const SYSTEM_PROMPT = `あなたはWebセキュリティの専門家です。与えられたドメインに対して、外部から観察可能なセキュリティ上の問題を診断します。

以下の順序でツールを使い、網羅的に診断してください：
1. fetch_headers でHTTPヘッダーを確認（HSTS, CSP, X-Frame-Options等）
2. check_path_exposure で管理パスの露出確認（/admin, /api, /.env, /.git 等）
3. fetch_page で robots.txt と主要ページのコンテンツ確認
4. 管理系APIが見つかれば check_rate_limit でブルートフォース耐性確認
5. check_dns_records で SPF/DMARC 確認
6. 全診断完了後、必ず report_finding で結果をまとめる

severity基準: critical=即悪用可能, high=容易に悪用可能, medium=条件次第, low=改善推奨, good=適切に設定済み
スコア: 100点から critical-25, high-15, medium-8, low-3 で減点`;

async function executeTool(name: string, input: unknown): Promise<string> {
  const i = input as Record<string, unknown>;
  switch (name) {
    case "fetch_headers": return executeFetchHeaders(i as { url: string; method?: string });
    case "fetch_page": return executeFetchPage(i as { url: string });
    case "check_path_exposure": return executeCheckPathExposure(i as { baseUrl: string; paths: string[] });
    case "check_rate_limit": return executeCheckRateLimit(i as { url: string; attempts: number });
    case "check_dns_records": return executeCheckDnsRecords(i as { domain: string; recordType: string });
    case "report_finding": return JSON.stringify({ status: "received" });
    default: return JSON.stringify({ error: `Unknown tool: ${name}` });
  }
}

export async function runScan(domain: string, options: { onProgress?: (p: ScanProgress) => void } = {}): Promise<ScanResult> {
  const { onProgress } = options;
  const cleanDomain = domain.replace(/^https?:\/\//, "").replace(/\/$/, "").toLowerCase();
  const baseUrl = `https://${cleanDomain}`;
  const progress: ScanProgress[] = [];
  let finalFindings: Finding[] = [];
  let finalTechStack: string[] = [];
  let finalSummary = "";
  let finalScore = 100;

  const report = (step: string, detail: string, completed = false) => {
    const item = { step, detail, completed };
    progress.push(item);
    onProgress?.(item);
  };

  report("初期化", `${cleanDomain} の診断を開始します...`);

  const messages: Anthropic.MessageParam[] = [{
    role: "user",
    content: `診断対象: ${cleanDomain}\nベースURL: ${baseUrl}\n\n外部から観察可能なセキュリティ設定を網羅的に確認し、report_finding ツールで結果をまとめてください。`,
  }];

  for (let i = 0; i < 20; i++) {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      tools: scannerTools,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason === "end_turn") { report("完了", "診断が完了しました", true); break; }
    if (response.stop_reason !== "tool_use") break;

    const toolUseBlocks = response.content.filter((b): b is Anthropic.ToolUseBlock => b.type === "tool_use");
    if (!toolUseBlocks.length) break;

    const toolResults: Anthropic.ToolResultBlockParam[] = [];

    for (const tu of toolUseBlocks) {
      report("診断中", `${tu.name}: ${JSON.stringify(tu.input).slice(0, 80)}`);

      if (tu.name === "report_finding") {
        const inp = tu.input as { findings: Finding[]; techStack: string[]; summary: string; score: number };
        finalFindings = inp.findings;
        finalTechStack = inp.techStack;
        finalSummary = inp.summary;
        finalScore = Math.max(0, Math.min(100, inp.score));
        report("レポート生成", "診断結果をまとめています...", true);
      }

      toolResults.push({ type: "tool_result", tool_use_id: tu.id, content: await executeTool(tu.name, tu.input) });
    }

    messages.push({ role: "user", content: toolResults });
  }

  return { domain: cleanDomain, scannedAt: new Date().toISOString(), techStack: finalTechStack, findings: finalFindings, score: finalScore, summary: finalSummary, progress };
}
