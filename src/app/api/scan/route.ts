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

function validateDomain(domain: string): { valid: boolean; message?: string } {
  const cleaned = domain.replace(/^https?:\/\//, "").replace(/\/$/, "");
  if (!cleaned || cleaned.length < 3) return { valid: false, message: "ドメインを入力してください" };
  if (["localhost", "127.0.0.1"].some((b) => cleaned.includes(b))) return { valid: false, message: "このドメインは診断できません" };
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}$/.test(cleaned)) return { valid: false, message: "有効なドメイン名を入力してください（例: example.com）" };
  return { valid: true };
}

async function sendResultEmail(email: string, domain: string, score: number, findingsCount: number) {
  const scoreColor = score >= 80 ? "#00e676" : score >= 50 ? "#ffd700" : "#ff3b3b";
  await resend.emails.send({
    from: "SecureBank Scanner <scan@securebank.co.jp>",
    to: email,
    subject: `【診断完了】${domain} のセキュリティ診断結果`,
    html: `<!DOCTYPE html><html><body style="background:#080808;color:#fff;font-family:sans-serif;padding:40px 24px;max-width:600px;margin:0 auto;">
  <div style="margin-bottom:32px;"><span style="background:#ff8c00;color:#000;font-weight:700;padding:4px 10px;border-radius:4px;font-size:13px;">SecureBank</span></div>
  <h1 style="font-size:22px;font-weight:700;margin:0 0 8px;">セキュリティ診断が完了しました</h1>
  <p style="color:#888;font-size:14px;margin:0 0 32px;">${domain} の診断結果をお届けします。</p>
  <div style="background:#111;border:1px solid #222;border-radius:8px;padding:24px;margin-bottom:24px;text-align:center;">
    <div style="font-size:64px;font-weight:700;color:${scoreColor};font-family:monospace;">${score}</div>
    <div style="font-size:12px;color:#666;letter-spacing:2px;">SECURITY SCORE</div>
    <div style="font-size:14px;color:#888;margin-top:12px;">${findingsCount}件の項目を確認しました</div>
  </div>
  <div style="margin-bottom:32px;"><a href="https://securebank.co.jp/scan" style="display:block;background:#ff8c00;color:#000;text-align:center;padding:14px;border-radius:4px;font-weight:700;font-size:14px;text-decoration:none;">詳細レポートを確認する →</a></div>
  <div style="background:#0d0800;border:1px solid #ff8c0033;border-radius:8px;padding:20px;text-align:center;">
    <p style="color:#888;font-size:13px;margin:0 0 12px;">より深い診断が必要ですか？</p>
    <a href="https://securebank.co.jp/contact" style="color:#ff8c00;font-size:13px;font-weight:700;">攻撃シミュレーションを相談する →</a>
  </div>
  <p style="color:#333;font-size:11px;margin-top:32px;text-align:center;">このメールは SecureBank 無料診断ツールから自動送信されています。<br>securebank.co.jp</p>
</body></html>`,
  });
}

// POST: 診断開始
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ error: "リクエストの形式が正しくありません" }), { status: 400 });

  const { domain, email, agreedMarketing = false } = body;
  const domainCheck = validateDomain(domain);
  if (!domainCheck.valid) return new Response(JSON.stringify({ error: domainCheck.message }), { status: 400 });
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return new Response(JSON.stringify({ error: "有効なメールアドレスを入力してください" }), { status: 400 });

  // ジョブを作成
  console.log("POST /api/scan called", { domain, email });
  const { data: job, error } = await supabase
    .from("scan_jobs")
    .insert({ domain, email, status: "running" })
    .select()
    .single();

  if (error || !job) { console.error("DB Error:", error); return new Response(JSON.stringify({ error: "DB error: " + JSON.stringify(error) }), { status: 500 }); } if (false) return new Response(JSON.stringify({ error: "診断の開始に失敗しました" }), { status: 500 });

  // バックグラウンドで診断実行
  (async () => {
    try {
      const result = await runScan(domain);
      const criticalCount = result.findings.filter((f: { severity: string }) => f.severity === "critical").length;
      const highCount = result.findings.filter((f: { severity: string }) => f.severity === "high").length;

      await supabase.from("scan_jobs").update({ status: "complete", result }).eq("id", job.id);

      await supabase.from("scan_leads").insert({
        email, domain,
        score: result.score,
        findings_count: result.findings.length,
        critical_count: criticalCount,
        high_count: highCount,
        tech_stack: result.techStack,
        summary: result.summary,
        agreed_marketing: agreedMarketing,
        scanned_at: new Date().toISOString(),
      });

      sendResultEmail(email, domain, result.score, result.findings.length).catch(console.error);
    } catch (err) {
      await supabase.from("scan_jobs").update({ status: "error", result: { error: String(err) } }).eq("id", job.id);
    }
  })();

  return new Response(JSON.stringify({ jobId: job.id }), { status: 200 });
}

// GET: 診断結果確認
export async function GET(request: NextRequest) {
  const jobId = request.nextUrl.searchParams.get("jobId");
  if (!jobId) return new Response(JSON.stringify({ error: "jobIdが必要です" }), { status: 400 });

  const { data: job } = await supabase.from("scan_jobs").select("*").eq("id", jobId).single();
  if (!job) return new Response(JSON.stringify({ error: "ジョブが見つかりません" }), { status: 404 });

  return new Response(JSON.stringify({ status: job.status, result: job.result }), { status: 200 });
}