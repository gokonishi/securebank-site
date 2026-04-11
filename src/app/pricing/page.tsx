import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金プラン | セキュア・バンク株式会社",
  description:
    "セキュア・バンクのAIサイバーセキュリティサービス料金プラン。スタータープラン・スタンダードプラン・エンタープライズプランをご用意しています。",
};

const plans = [
  {
    name: "スターター",
    price: "要相談",
    description: "セキュリティ診断を初めて導入する中小企業向け",
    features: [
      "ASMによる外部公開資産スキャン（年1回）",
      "脆弱性診断レポート提供",
      "是正アドバイス（書面）",
      "メールサポート",
    ],
    cta: "まずは相談する",
    href: "/contact",
    highlight: false,
  },
  {
    name: "スタンダード",
    price: "要相談",
    description: "継続的なセキュリティ強化を目指す中堅企業向け",
    features: [
      "ASMによる外部公開資産スキャン（月次）",
      "AIペネトレーションテスト（年2回）",
      "脆弱性トリアージ支援",
      "インシデント時の緊急対応サポート",
      "専任担当者によるオンラインMTG（月1回）",
    ],
    cta: "無料デモを申し込む",
    href: "/demo",
    highlight: true,
  },
  {
    name: "エンタープライズ",
    price: "個別見積",
    description: "高度なセキュリティ体制を求める企業・グループ向け",
    features: [
      "スタンダードの全機能",
      "カスタムAI攻撃シミュレーション",
      "CSIRT構築支援",
      "社員向けセキュリティ教育プログラム",
      "24時間365日 SOC監視オプション",
      "SLA保証",
    ],
    cta: "お問い合わせ",
    href: "/contact",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-section border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-brand-text leading-tight mb-4">
            料金プラン
          </h1>
          <p className="text-brand-sub text-[17px] max-w-xl mx-auto leading-relaxed">
            貴社の規模・ニーズに合わせた3つのプランをご用意しています。
            まずはお気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-brand-blue shadow-glow bg-white ring-2 ring-brand-blue/20"
                  : "border-brand-border bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="inline-block mb-4">
                  <span className="bg-gradient-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                    おすすめ
                  </span>
                </div>
              )}
              <h2 className="text-2xl font-bold text-brand-text mb-1">{plan.name}</h2>
              <p className="text-3xl font-extrabold font-display text-brand-text mb-2">
                {plan.price}
              </p>
              <p className="text-sm text-brand-sub mb-6 leading-relaxed">{plan.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-brand-sub">
                    <svg className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={plan.highlight ? "btn-grad btn-pulse text-center" : "btn-outline text-center"}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-brand-sub mt-10">
          * 料金は企業規模・対象システムにより異なります。詳細はお問い合わせください。
        </p>
      </section>
    </main>
  );
}
