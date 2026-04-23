"use client";

import { useState } from "react";

const demoFeatures = [
  "AI攻撃シミュレーションのライブデモ",
  "実際の攻撃シナリオと証拠付きレポートのサンプル",
  "貴社の公開資産から見える侵入経路の仮説",
  "Layer 0〜5 の多層防御の検証ポイント",
];

export default function DemoPage() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    employees: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-section border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
            Demo
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-brand-text leading-[1.15] mb-5">
            オンラインで、<br />攻撃再現デモを見る。
          </h1>
          <p className="text-brand-sub text-[17px] max-w-xl leading-[1.85]">
            AIが実際に侵入を試行する様子と、経営層向けレポートのサンプルをオンラインでご覧いただきます。
            ご視聴後、貴社向けの仮説もその場でお伝えします。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-brand-text mb-6">
              デモで得られるもの
            </h2>
            <ul className="space-y-4">
              {demoFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-brand-sub leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-brand-section rounded-2xl border border-brand-border">
              <p className="text-sm font-semibold text-brand-text mb-1">秘密厳守・事前準備不要</p>
              <p className="text-sm text-brand-sub leading-relaxed">
                いただいた情報はデモ準備と当日のご説明にのみ使用します。
                技術的な事前準備は不要です。
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">申し込みを受け付けました</h3>
                <p className="text-brand-sub text-sm">担当者より2営業日以内にご連絡いたします。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-1">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="例：株式会社〇〇"
                    className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="例：山田 太郎"
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
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="例：yamada@example.com"
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
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="例：03-0000-0000"
                    className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-1">
                    従業員規模
                  </label>
                  <select
                    name="employees"
                    value={form.employees}
                    onChange={handleChange}
                    className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition bg-white"
                  >
                    <option value="">選択してください</option>
                    <option value="1-30">1〜30名</option>
                    <option value="31-100">31〜100名</option>
                    <option value="101-300">101〜300名</option>
                    <option value="301-1000">301〜1,000名</option>
                    <option value="1001+">1,001名以上</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-grad btn-pulse w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "送信中..." : "デモを申し込む"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
