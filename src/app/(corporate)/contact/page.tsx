"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLpSource } from "@/app/lp/lp-analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "contact_form_view", { source: getLpSource() });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.ok) {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "contact_form_submit", {
            source: getLpSource(),
          });
        }
        router.push("/contact/thanks");
      } else {
        setError("送信に失敗しました。しばらく経ってから再度お試しください。");
      }
    } catch {
      setError("エラーが発生しました。しばらく経ってから再度お試しください。");
    }

    setLoading(false);
  };

  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-3xl font-bold mb-2 text-brand-text">お問い合わせ</h1>
      <p className="text-brand-sub mb-8">
        初回相談は無料です。担当者より2営業日以内にご連絡いたします。<br />
        メールでのお問い合わせは{" "}
        <a href="mailto:sb-info@securebank.co.jp" className="text-brand-blue hover:underline">
          sb-info@securebank.co.jp
        </a>{" "}
        へどうぞ。
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            会社名 <span className="text-red-500">*</span>
          </label>
          <input
            name="company"
            placeholder="例：株式会社〇〇"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            placeholder="例：山田 太郎"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="例：yamada@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            電話番号
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="例：03-0000-0000"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            placeholder="ご質問・ご要望をご記入ください"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition h-36 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-grad btn-pulse w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "送信中..." : "送信する"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}
    </main>
  );
}
