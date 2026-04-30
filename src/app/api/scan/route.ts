import { NextRequest } from "next/server";
import { runScan } from "@/lib/scanner/engine";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const maxDuration = 60;

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const recentScans = new Map<string, number>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const last = recentScans.get(ip);
  if (last && now - last < 60 * 60 * 1000) return false;
  recentScans.set(ip, now);
  return true;
}

function validateDomain(domain: string): { valid: boolean; message?: string } {
  const cleaned = domain.replace(/^https?:\/\//, "").replace(/\/$/, "");
  if (!cleaned || cleaned.length < 3) return { valid: false, message: "ドメインを入力してください" };
  if (["localhost", "127.0.0.1"].some((b) => cleaned.includes(b))) return { valid: false, message: "このドメインは診断できません" };
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}$/.test(cleaned)) return { valid: false, message: "有効なドメイン名を入力してください（例: example.com）" };
  return { valid: true };
}

async function saveLead(email: string, domain: string, score: number, findingsCount: number, criticalCount: number, highCount: number, techStack: string[], summary: string, agreedMarketing: boolean) {
  await supabase.from("scan_leads").insert({
    email, domain, score,
    findings_count: findingsCount,
    critical_count: criticalCount,
    high_count: highCount,
    tech_stack: techStack,
    summary,
    agreed_marketing: agreedMarketing,
    scanned_at: new Date().toISOString(),
  });
}

async function sendResultEmail(email: string, domain: string, score: number, findingsCount: number) {
  const scoreColor = score >= 80 ? "#00e676" : score >= 50 ? "#ffd700" : "#ff3b3b";
  const reportUrl = "https://securebank.co.jp/scan";
  await resend.emails.send({
    from: "SecureBank Scanner <scan@securebank.co.jp>",
    to: email,
    subject: `【診断完了】${domain} のセキュリティ診断結果`,
    html: `
<!DOCTYPE html>
<html>
<body style="background:#080808;color:#fff;font-family:sans-serif;padding:40px 24px;max-width:600px;margin:0 auto;">
  <div style="margin-bottom:32px;">
    <span style="background:#ff8c00;color:#000;font-weight:700;padding:4px 10px;border-radius:4px;font-size:13px;">SecureBank</span>
  </div>
  <h1 style="font-size:22px;font-weight:700;margin:0 0 8px;">セキュリティ診断が完了しました</h1>
  <p style="color:#888;font-size:14px;margin:0 0 32px;">${domain} の診断結果をお届けします。</p>
  <div style="background:#111;border:1px solid #222;border-radius:8px;padding:24px;margin-bottom:24px;text-align:center;">
    <div style="font-size:64px;font-weight:700;color:${scoreColor};font-family:monospace;">${score}</div>
    <div style="font-size:12px;color:#666;letter-spacing:2px;">SECURITY SCORE</div>
    <div style="font-size:14px;color:#888;margin-top:12px;">${findingsCount}件の項目を確認しました</div>
  </div>
  <div style="margin-bottom:32px;">
    <a href="${reportUrl}" style="display:block;background:#ff8c00;color:#000;text-align:center;padding:14px;border-radius:4px;font-weight:700;font-size:14px;text-decoration:none;">詳細レポートを確認する →</a>
  </div>
  <div style="background:#0d0800;border:1px solid #ff8c0033;border-radius:8px;padding:20px;text-align:center;">
    <p style="color:#888;font-size:13px;margin:0 0 12px;">より深い診断が必要ですか？</p>
    <a href="https://securebank.co.jp/contact" style="color:#ff8c00;font-size:13px;font-weight:700;">攻撃シミュレーションを相談する →</a>
  </div>
  <p style="color:#333;font-size:11px;margin-top:32px;text-align:center;">このメールは SecureBank 無料診断ツールから自動送信されています。<br>securebank.co.jp</p>
</body>
</html>`,
  });
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) return new Response(JSON.stringify({ error: "1時間に3回までです。しばらくお待ちください。" }), { status: 429 });

  const body = await request.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ error: "リクエストの形式が正しくありません" }), { status: 400 });

  const { domain, email, agreedMarketing = false } = body;
  const domainCheck = validateDomain(domain);
  if (!domainCheck.valid) return new Response(JSON.stringify({ error: domainCheck.message }), { status: 400 });
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return new Response(JSON.stringify({ error: "有効なメールアドレスを入力してください" }), { status: 400 });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: string, data: unknown) => controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      try {
        send("start", { domain, message: "診断を開始しました" });
        const result = await runScan(domain, { onProgress: (p) => send("progress", p) });
        send("complete", result);
        const criticalCount = result.findings.filter(f => f.severity === "critical").length;
        const highCount = result.findings.filter(f => f.severity === "high").length;
        saveLead(email, domain, result.score, result.findings.length, criticalCount, highCount, result.techStack, result.summary, agreedMarketing).catch(console.error);
        sendResultEmail(email, domain, result.score, result.findings.length).catch(console.error);
      } catch (err) {
        send("error", { message: err instanceof Error ? err.message : "エラーが発生しました" });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", "Connection": "keep-alive" },
  });
}

export async function GET() {
  return new Response(JSON.stringify({ status: "ok", service: "SecureBank Scanner API" }), { headers: { "Content-Type": "application/json" } });
}