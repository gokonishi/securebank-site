import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const info = [
  { label: "商号", value: <><p className="font-bold text-brand-text">セキュア・バンク株式会社</p><p className="text-brand-sub text-[14px] mt-0.5">SECUREBANK Co., Ltd.</p></> },
  { label: "設立", value: <p className="text-brand-text">2026年4月1日</p> },
  { label: "資本金", value: <><p className="text-brand-text">12,750,000円</p><p className="text-brand-sub text-[14px] mt-0.5">（資本準備金：12,750,000円）</p></> },
  { label: "代表者", value: <p className="text-brand-text">代表取締役　小西 剛</p> },
  { label: "所在地", value: <><p className="text-brand-text">〒150-0002</p><p className="text-brand-text">東京都渋谷区渋谷1-17-8</p><p className="text-brand-sub text-[14px] mt-0.5">松岡渋谷ビル</p></> },
  { label: "決算期", value: <p className="text-brand-text">5月31日</p> },
  { label: "主要株主", value: <p className="text-brand-text">日本エンタープライズ株式会社</p> },
];

const business = [
  "サイバーセキュリティ診断（脆弱性診断 / ペネトレーションテスト）",
  "セキュリティ運用・監視（SOC / MDR）",
  "攻撃シミュレーション（AIレッドチーム）",
  "セキュリティ対策ソリューション（ASM / WAF）",
  "セキュリティプロダクトの開発・提供",
  "セキュリティコンサルティング・教育",
];

const values = [
  { icon: "🎯", title: "攻撃者視点の徹底", desc: "「守る側の都合」ではなく、「攻撃者が実際に何をするか」を起点にセキュリティを設計します。" },
  { icon: "✅", title: "現実的な対策の実現", desc: "中堅中小企業の制約（予算・人員・時間）の中で実際に機能する対策を提供します。" },
  { icon: "🔄", title: "継続的な改善支援", desc: "一度の診断で終わらず、継続的にリスクを把握・改善するサイクルを企業と共に作ります。" },
];

export const metadata: Metadata = {
  alternates: {
    canonical: "https://securebank.co.jp/company",
  },
};

export default function CompanyPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Header */}
      <div className="section-gray border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <span className="tag mb-6">Company</span>
            <h1 className="font-display font-extrabold text-[52px] tracking-tight text-brand-text mt-5 mb-6">
              会社概要
            </h1>
            <p className="text-[18px] text-brand-sub max-w-2xl leading-[1.8]">
              技術・事業・ガバナンスを備えた体制で、企業のセキュリティ対策を支援します。
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info table */}
          <FadeIn>
            <h2 className="font-display font-bold text-[26px] text-brand-text mb-8">基本情報</h2>
            <div className="divide-y divide-brand-border">
              {info.map((item) => (
                <div key={item.label} className="grid grid-cols-[100px_1fr] gap-6 py-5">
                  <dt className="text-[14px] text-brand-sub pt-0.5">{item.label}</dt>
                  <dd className="text-[15px]">{item.value}</dd>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Business + group */}
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-[26px] text-brand-text mb-8">事業内容</h2>
            <ul className="space-y-3 mb-10">
              {business.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-blue mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-[15px] text-brand-sub">{b}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-brand-blue shrink-0 text-xl">
                  🏢
                </div>
                <div>
                  <p className="font-bold text-brand-text mb-2">日本エンタープライズ株式会社グループ</p>
                  <p className="text-[14px] text-brand-sub leading-relaxed">
                    上場企業グループとして、ガバナンス・透明性・事業継続性を備えた体制で運営しています。
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Values */}
        <div className="mt-24 pt-16 border-t border-brand-border">
          <FadeIn className="text-center mb-14">
            <h2 className="font-display font-bold text-[36px] text-brand-text">私たちの考え方</h2>
          </FadeIn>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card p-8 text-center">
                  <div className="text-4xl mb-5">{v.icon}</div>
                  <h3 className="font-display font-bold text-[18px] text-brand-text mb-3">{v.title}</h3>
                  <p className="text-[15px] text-brand-sub leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>

        <FadeIn className="mt-16 text-center">
          <Link href="/contact" className="btn-grad btn-pulse">
            お問い合わせ・無料相談
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
