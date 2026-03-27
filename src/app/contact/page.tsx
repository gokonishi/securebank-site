"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "送信に失敗しました。");
      }

      setStatus("お問い合わせを送信しました。");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus(err.message || "送信に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-brand-text mb-4">お問い合わせ</h1>
        <p className="text-brand-sub mb-10">
          サービスに関するご相談・ご質問は、以下のフォームよりお問い合わせください。
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1" htmlFor="name">
              お名前
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="山田 太郎"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-text mb-1" htmlFor="email">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="example@company.co.jp"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-text mb-1" htmlFor="message">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
              placeholder="ご相談内容をご記入ください"
              required
            />
          </div>

          <button type="submit" className="btn-grad !py-3" disabled={loading}>
            {loading ? "送信中..." : "送信する"}
          </button>

          {status && <p className="text-sm text-brand-text">{status}</p>}
        </form>
      </div>
    </div>
  );
}