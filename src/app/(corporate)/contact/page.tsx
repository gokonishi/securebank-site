"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getLpSource } from "@/app/lp/lp-analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Purpose = "diagnosis" | "demo" | "consult";

const purposeOptions: {
  id: Purpose;
  badge: string;
  title: string;
  desc: string;
}[] = [
  {
    id: "diagnosis",
    badge: "最も踏みやすい",
    title: "現状のリスクを相談する",
    desc: "公開資産や想定される侵入経路をヒアリングし、優先度を整理してお伝えします。",
  },
  {
    id: "demo",
    badge: "比較検討層",
    title: "攻撃再現デモを見る",
    desc: "AI攻撃シミュレーションのライブとレポート形式をオンラインで紹介します。",
  },
  {
    id: "consult",
    badge: "決裁者層",
    title: "個別相談を申し込む",
    desc: "経営課題と社内体制を踏まえ、最適な導入プランをご提案します。",
  },
];

const trustPoints = [
  { label: "上場企業グループ", sub: "日本エンタープライズ" },
  { label: "オンラインで完結", sub: "初回ヒアリング" },
  { label: "秘密厳守", sub: "NDA即時対応可" },
  { label: "2営業日以内", sub: "担当者よりご連絡" },
];

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactPageInner />
    </Suspense>
  );
}

function ContactFallback() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <section className="bg-[#0B1220] text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="h-6 w-24 bg-white/10 rounded-full mb-6" />
          <div className="h-12 w-3/4 bg-white/10 rounded mb-4" />
          <div className="h-12 w-1/2 bg-white/10 rounded" />
        </div>
      </section>
    </div>
  );
}

function ContactPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [purpose, setPurpose] = useState<Purpose>("diagnosis");
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
    const p = searchParams.get("purpose");
    if (p === "demo" || p === "consult" || p === "diagnosis") {
      setPurpose(p);
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "contact_form_view", { source: getLpSource() });
    }
  }, [searchParams]);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, purpose }),
      });
      const data = await res.json();
      if (data.ok) {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "contact_form_submit", {
            source: getLpSource(),
            purpose,
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

  const selected = purposeOptions.find((o) => o.id === purpose)!;

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#0B1220] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, #2563EB 0%, transparent 45%), radial-gradient(circle at 80% 60%, #7C3AED 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[12px] font-medium text-white/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-pulse" />
            Contact
          </span>
          <h1 className="font-display font-extrabold text-[40px] md:text-[52px] tracking-tight leading-[1.15] mb-5">
            オンラインで、<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              現状リスクを可視化する。
            </span>
          </h1>
          <p className="text-[16px] text-white/80 leading-[1.85] max-w-2xl">
            目的に合った入口を選び、フォームをご記入ください。担当者より2営業日以内にご連絡いたします。
            メールでのお問い合わせは{" "}
            <a href="mailto:sb-info@securebank.co.jp" className="underline hover:opacity-80">
              sb-info@securebank.co.jp
            </a>{" "}
            まで。
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Left: purpose selector + trust */}
          <div>
            <p className="text-[11px] font-bold tracking-widest text-brand-sub uppercase mb-4">
              01 / お問い合わせ目的
            </p>
            <div className="space-y-3 mb-10">
              {purposeOptions.map((opt) => {
                const active = purpose === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPurpose(opt.id)}
                    className={
                      active
                        ? "w-full text-left rounded-2xl border-2 border-brand-blue bg-blue-50/40 p-5 transition-colors"
                        : "w-full text-left rounded-2xl border-2 border-brand-border bg-white p-5 hover:border-brand-blue/50 transition-colors"
                    }
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <p className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">
                        {opt.badge}
                      </p>
                      <span
                        className={
                          active
                            ? "w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center shrink-0"
                            : "w-5 h-5 rounded-full border-2 border-brand-border shrink-0"
                        }
                      >
                        {active && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </div>
                    <p className="font-display font-bold text-[16px] text-brand-text mb-1">
                      {opt.title}
                    </p>
                    <p className="text-[13px] text-brand-sub leading-[1.85]">{opt.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Trust */}
            <div className="rounded-2xl border border-brand-border bg-slate-50 p-5">
              <p className="text-[11px] font-bold tracking-widest text-brand-sub uppercase mb-4">
                ご相談にあたって
              </p>
              <div className="grid grid-cols-2 gap-4">
                {trustPoints.map((t) => (
                  <div key={t.label}>
                    <p className="font-display font-bold text-[14px] text-brand-text">{t.label}</p>
                    <p className="text-[11px] text-brand-sub mt-0.5">{t.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <p className="text-[11px] font-bold tracking-widest text-brand-sub uppercase mb-4">
              02 / お客様情報
            </p>

            <div className="rounded-2xl border border-brand-border bg-white p-7">
              <p className="text-[13px] text-brand-sub mb-5">
                ご選択中：
                <span className="font-display font-bold text-brand-text ml-2">{selected.title}</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-1">
                    お問い合わせ内容
                  </label>
                  <textarea
                    name="message"
                    placeholder="ご質問・ご状況・気になる点などをご記入ください（任意）"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition h-32 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-grad btn-pulse w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "送信中..." : `${selected.title} ─ 送信する`}
                </button>

                <p className="text-[11px] text-brand-sub text-center leading-relaxed">
                  送信いただいた情報は、ご相談対応の目的のみに利用します。
                </p>
              </form>

              {error && (
                <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
