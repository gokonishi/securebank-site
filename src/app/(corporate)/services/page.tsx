import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const services = [
  { category: "入口", badge: "FREE", badgeCls: "bg-emerald-100 text-emerald-700", accent: "from-emerald-400 to-emerald-500", title: "無料診断", subtitle: "公開リスク簡易チェック", desc: "外部公開情報をもとに現状のセキュリティリスクを把握します。費用・準備なしで始められる入口サービスです。", points: ["外部公開情報の自動スキャン", "リスク箇所のレポート出力", "対策の優先順位を提示"] },
  { category: "可視化", badge: "月次", badgeCls: "bg-blue-100 text-blue-700", accent: "from-blue-400 to-blue-500", title: "ASM（公開資産監視）", subtitle: "Attack Surface Management", desc: "外部公開資産を継続的に可視化・監視。変化や新たなリスクを自動検知します。", points: ["公開資産の自動列挙・管理", "リスク変化のリアルタイム検知", "定期レポート・ダッシュボード"] },
  { category: "診断", badge: "単発", badgeCls: "bg-slate-100 text-slate-600", accent: "from-slate-400 to-slate-500", title: "脆弱性診断（従来型）", subtitle: "Vulnerability Assessment", desc: "WebアプリケーションやシステムのSecurity漏洩を体系的に洗い出し、改善につなげます。", points: ["Webアプリ・インフラ診断", "OWASP準拠の体系的チェック", "改善提案レポート付き"] },
  { category: "診断", badge: "単発", badgeCls: "bg-slate-100 text-slate-600", accent: "from-orange-400 to-orange-500", title: "ペネトレーションテスト（従来型）", subtitle: "Penetration Testing", desc: "実際の攻撃者と同じ手法でシステムへの侵入を試み、リスクの高い経路を特定します。", points: ["実際の侵入シナリオ検証", "侵入経路の証跡付きレポート", "経営者向けサマリー"] },
  { category: "AI攻撃再現", badge: "単発・定期", badgeCls: "bg-violet-100 text-violet-700", accent: "from-violet-400 to-violet-600", title: "AI攻撃シミュレーション", subtitle: "AI-powered Attack Simulation", desc: "AIを活用し、攻撃者視点で侵入シナリオを自動生成・再現。網羅的な攻撃パターンを検証します。", points: ["AI自動攻撃シナリオ生成", "複数パターンの侵入経路検証", "リスクスコアリングと優先対策"] },
  { category: "AI攻撃再現", badge: "単発・定期", badgeCls: "bg-purple-100 text-purple-700", accent: "from-purple-400 to-purple-600", title: "AIレッドチーム", subtitle: "AI Red Team", desc: "実践的な攻撃者視点で、組織の防御体制・対応力・セキュリティ意識全体を検証します。", points: ["組織・人的リスクの検証", "防御体制・対応フローの評価", "実戦的な演習・改善提案"] },
  { category: "継続運用", badge: "月次", badgeCls: "bg-blue-100 text-blue-700", accent: "from-blue-500 to-indigo-600", title: "SOC（MDR / XDR）", subtitle: "Security Operations Center", desc: "セキュリティの監視・検知・対応を継続的に支援。社内専任担当者がいなくてもプロが対応します。", points: ["24時間365日の継続監視", "インシデント検知・初動対応", "定期レポートと改善提案"] },
  { category: "復旧・補完", badge: "年次", badgeCls: "bg-amber-100 text-amber-700", accent: "from-amber-400 to-amber-500", title: "セキュアバックアップ", subtitle: "Secure Backup", desc: "ランサムウェアや誤操作など、万一の際に迅速に業務を復旧できる体制を構築します。", points: ["オフライン・エアギャップバックアップ", "ランサムウェア対策専用設計", "定期復元テストで実効性確保"] },
  { category: "復旧・補完", badge: "年次", badgeCls: "bg-amber-100 text-amber-700", accent: "from-yellow-400 to-amber-500", title: "サイバー保険", subtitle: "Cyber Insurance", desc: "万一のインシデント時に、調査費用・損害賠償などの経済的リスクを補完します。", points: ["事故対応・調査費用カバー", "損害賠償・事業中断損失補填", "セキュリティ対策との連動優遇"] },
];

const flow = [
  { label: "入口", color: "bg-emerald-400" },
  { label: "可視化", color: "bg-blue-400" },
  { label: "診断", color: "bg-slate-400" },
  { label: "AI攻撃再現", color: "bg-violet-500" },
  { label: "継続運用", color: "bg-blue-600" },
  { label: "復旧・補完", color: "bg-amber-400" },
];

export const metadata: Metadata = {
  alternates: {
    canonical: "https://securebank.co.jp/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Header */}
      <div className="section-gray border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <span className="tag mb-6">Services</span>
            <h1 className="font-display font-extrabold text-[52px] tracking-tight text-brand-text mt-5 mb-6">
              サービス
            </h1>
            <p className="text-[18px] text-brand-sub max-w-2xl leading-[1.8]">
              入口から継続運用まで、企業の状況に合わせて段階的に導入できるサービスを提供します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              {flow.map((s, i) => (
                <div key={s.label} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${s.color}`} />
                  <span className="text-[14px] text-brand-sub">{s.label}</span>
                  {i < flow.length - 1 && <span className="text-slate-300 ml-1 text-xs">→</span>}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((svc) => (
            <StaggerItem key={svc.title}>
              <div className="card flex flex-col h-full overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${svc.accent}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-[12px] text-brand-sub">{svc.category}</span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${svc.badgeCls}`}>{svc.badge}</span>
                  </div>
                  <h3 className="font-display font-bold text-[19px] text-brand-text mb-1">{svc.title}</h3>
                  <p className="text-brand-blue text-[12px] font-semibold tracking-wide mb-4">{svc.subtitle}</p>
                  <p className="text-[15px] text-brand-sub leading-relaxed mb-6 flex-1">{svc.desc}</p>
                  <ul className="space-y-2 border-t border-brand-border pt-5">
                    {svc.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[14px] text-brand-sub">
                        <svg className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* CTA */}
        <FadeIn delay={0.2} className="mt-24">
          <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #7c3aed 100%)" }}>
            <div className="px-10 py-16 text-center">
              <h2 className="font-display font-bold text-[32px] text-white mb-4">
                どのサービスから始めればよいかわからない方へ
              </h2>
              <p className="text-blue-100 text-[16px] mb-8 max-w-xl mx-auto">
                まずは無料診断から。現状のリスクを把握した上で、最適なサービスをご提案します。
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-[16px]">
                無料相談・お問い合わせ
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
