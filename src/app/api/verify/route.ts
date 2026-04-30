import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// メモリ上に確認コードを保存（有効期限10分）
const verificationCodes = new Map<string, { code: string; expires: number }>();

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ error: "リクエストの形式が正しくありません" }), { status: 400 });

  const { action, email, code } = body;

  // 確認コードを送信
  if (action === "send") {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "有効なメールアドレスを入力してください" }), { status: 400 });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    verificationCodes.set(email, { code: verifyCode, expires: Date.now() + 10 * 60 * 1000 });

    await resend.emails.send({
      from: "SecureBank Scanner <scan@securebank.co.jp>",
      to: email,
      subject: "【SecureBank】メールアドレス確認コード",
      html: `
<!DOCTYPE html>
<html>
<body style="background:#080808;color:#fff;font-family:sans-serif;padding:40px 24px;max-width:600px;margin:0 auto;">
  <div style="margin-bottom:24px;">
    <span style="background:#ff8c00;color:#000;font-weight:700;padding:4px 10px;border-radius:4px;font-size:13px;">SecureBank</span>
  </div>
  <h1 style="font-size:20px;font-weight:700;margin:0 0 16px;">メールアドレスの確認</h1>
  <p style="color:#888;font-size:14px;margin:0 0 24px;">以下の確認コードを入力してください。有効期限は10分です。</p>
  <div style="background:#111;border:1px solid #333;border-radius:8px;padding:32px;text-align:center;margin-bottom:24px;">
    <div style="font-size:48px;font-weight:700;color:#ff8c00;letter-spacing:8px;font-family:monospace;">${verifyCode}</div>
  </div>
  <p style="color:#555;font-size:12px;">このメールに心当たりがない場合は無視してください。</p>
</body>
</html>`,
    });

    return new Response(JSON.stringify({ success: true, message: "確認コードを送信しました" }), { status: 200 });
  }

  // 確認コードを検証
  if (action === "verify") {
    if (!email || !code) {
      return new Response(JSON.stringify({ error: "メールアドレスとコードを入力してください" }), { status: 400 });
    }

    const stored = verificationCodes.get(email);
    if (!stored) return new Response(JSON.stringify({ error: "確認コードが見つかりません。再送信してください" }), { status: 400 });
    if (Date.now() > stored.expires) {
      verificationCodes.delete(email);
      return new Response(JSON.stringify({ error: "確認コードの有効期限が切れました。再送信してください" }), { status: 400 });
    }
    if (stored.code !== code) return new Response(JSON.stringify({ error: "確認コードが正しくありません" }), { status: 400 });

    verificationCodes.delete(email);
    return new Response(JSON.stringify({ success: true, message: "メールアドレスを確認しました" }), { status: 200 });
  }

  return new Response(JSON.stringify({ error: "不正なリクエストです" }), { status: 400 });
}