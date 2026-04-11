import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "導入事例 | セキュア・バンク株式会社",
  description:
    "セキュア・バンクのAIサイバーセキュリティサービス導入事例。製造業・流通業・ITサービスなど様々な業種の成果をご紹介します。",
};

const cases = [
  {
    id: "1",
    industry: "製造業",
    employees: "約300名",
    company: "精密機器メーカーA社",
    challenge: "海外拠点との接続ポイントに潜む脆弱性を把握できていなかった",
    result: "87件の脆弱性を特定・修正。サプライチェーン攻撃リスクを大幅低減。",
    period: "3ヶ月",
    tag: "ASM＋ペネトレーションテスト",
  },
  {
    id: "2",
    industry: "流通・小売",
    employees: "約500名",
    company: "EC事業者B社",
    challenge: "ECサイトへのクレデンシャルスタッフィング攻撃が月数百件発生していた",
    result: "AI攻撃シミュレーションで侵入経路を特定。多要素認証導入後、攻撃成功率0件。",
    period: "2ヶ月",
    tag: "AI攻撃シミュレーション",
  },
  {
    id: "3",
    industry: "ITサービス",
    employees: "約120名",
    company: "SaaS企業C社",
    challenge: "セキュリティ専門人材が不在で、顧客への説明責任を果たせていなかった",
    result: "継続監視体制の構築と診断レポートにより、顧客向けセキュリティ証跡を整備。",
    period: "継続契約",
    tag: "継続監視＋レポーティング",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-section border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-brand-text leading-tight mb-4">
            導入事例
          </h1>
          <p className="text-brand-sub text-[17px] max-w-xl leading-relaxed">
            様々な業種・規模の企業でセキュリティ課題を解決した事例をご紹介します。
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {cases.map((c) => (
            <div
              key={c.id}
              className="border border-brand-border rounded-2xl p-8 bg-white hover:shadow-card-hover transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  {c.industry}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  {c.employees}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                  {c.tag}
                </span>
              </div>
              <h2 className="text-xl font-bold text-brand-text mb-5">{c.company}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-sub mb-2">
                    課題
                  </p>
                  <p className="text-sm text-brand-sub leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2">
                    成果
                  </p>
                  <p className="text-sm text-brand-text font-medium leading-relaxed">{c.result}</p>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-brand-border flex items-center justify-between">
                <span className="text-xs text-brand-sub">支援期間：{c.period}</span>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-brand-blue hover:underline"
                >
                  同様の課題を相談する →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-brand-border text-center">
          <p className="text-brand-sub text-sm mb-6">
            貴社の課題についても、まずはお気軽にご相談ください。
          </p>
          <Link href="/contact" className="btn-grad btn-pulse inline-flex">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </main>
  );
}
