import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { company, name, email, phone, message } = await req.json();

    if (!company || !name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "必須項目が不足しています。" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `【お問い合わせ】${company} / ${name}様`,
      text: `
会社名: ${company}
お名前: ${name}
メール: ${email}
電話番号: ${phone || ""}
お問い合わせ内容:
${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact api error:", error);
    return NextResponse.json(
      { ok: false, error: "送信に失敗しました。" },
      { status: 500 }
    );
  }
}