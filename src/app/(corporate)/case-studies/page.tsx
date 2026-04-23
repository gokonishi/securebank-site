import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "導入事例｜AI攻撃シミュレーションで「破られなかった」を証明",
  description:
    "製造業・流通・SaaSなど、AI攻撃シミュレーションを活用して経営リスクを可視化・低減した企業の事例をご紹介します。",
  alternates: {
    canonical: "https://securebank.co.jp/case-studies",
  },
};

type CaseStudy = {
  id: string;
  industry: string;
  employees: string;
  company: string;
  tag: string;
  before: string;
  after: string;
  rounds: string;
  layers: string[];
  period: string;
  voice?: string;
};

const cases: CaseStudy[] = [
  {
    id: "1",
    industry: "製造業",
    employees: "約300名",
    company: "精密機器メーカーA社",
    tag: "AI攻撃シミュレーション",
    before:
      "海外拠点とのVPN接続点を「年1回の脆弱性診断で問題なし」としていたが、実侵入の検証はゼロ。サプライチェーン要件で取引先から監査を求められ、「破られない証拠」が出せない状態だった。",
    after:
      "20ラウンドの攻撃で侵入経路を特定し、対策後に再検証。2サイクル目以降は侵入失敗を確認。取引先監査に提出可能な証拠付きレポートを取得。",
    rounds: "20ラウンド",
    layers: ["Layer 2", "Layer 3", "Layer 4"],
    period: "3ヶ月",
    voice:
      "「対策しています」と言うのと、「破られませんでした」と言うのでは、取締役会での説得力が全く違いました。（情シス部長）",
  },
  {
    id: "2",
    industry: "流通・小売",
    employees: "約500名",
    company: "EC事業者B社",
    tag: "AI攻撃シミュレーション + ASM",
    before:
      "ECサイトへのクレデンシャルスタッフィングが月数百件。WAFで遮断はしているが、認証・認可レイヤーが本当に堅牢かは検証されていなかった。",
    after:
      "AI攻撃シミュレーションで、MFAバイパスとセッション奪取の経路を特定。MFA強制と異常検知ルールを追加し、再検証で侵入成功率0件を確認。",
    rounds: "20ラウンド",
    layers: ["Layer 3", "Layer 4"],
    period: "2ヶ月",
    voice:
      "WAFのアラートだけ見ていた頃と比べて、「どこまで守れているか」が初めて言語化できました。（CTO）",
  },
  {
    id: "3",
    industry: "ITサービス",
    employees: "約120名",
    company: "SaaS企業C社",
    tag: "AI攻撃シミュレーション + 継続監視",
    before:
      "セキュリティ専門人材が不在。エンタープライズ顧客との契約で求められるセキュリティ証跡を、自社単独では整備できなかった。",
    after:
      "四半期ごとのAI攻撃シミュレーションを継続実施。証拠付きレポートを顧客提出資料として活用し、エンタープライズ案件の受注率が向上。",
    rounds: "四半期×20ラウンド",
    layers: ["Layer 3", "Layer 4", "Layer 5"],
    period: "継続契約",
    voice:
      "セキュリティが営業の武器になりました。「外部監査の代わりに使える証跡」として顧客に評価されています。（代表取締役）",
  },
];

const summary = [
  { metric: "20", label: "ラウンド連続", sub: "全事例で実施" },
  { metric: "Layer 0–5", label: "多層検証", sub: "横断的に網羅" },
  { metric: "2–3ヶ月", label: "初回サイクル", sub: "意思決定に間に合う" },
  { metric: "上場G", label: "ガバナンス", sub: "日本エンタープライズ" },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#0B1220] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 25% 25%, #2563EB 0%, transparent 45%), radial-gradient(circle at 75% 75%, #7C3AED 0%, transparent 45%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[12px] font-medium text-white/80 mb-6">
              Case Studies
            </span>
            <h1 className="font-display font-extrabold text-[42px] md:text-[56px] tracking-tight leading-[1.1] mb-7">
              「対策した」から、<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                「破られなかった」へ。
              </span>
            </h1>
            <p className="text-[17px] text-white/80 leading-[1.85] max-w-2xl mb-10">
              AI攻撃シミュレーションを活用して、経営に説明可能な「証拠」を手に入れた企業の実例をご紹介します。
              業種・規模は異なっても、判断軸は共通です。
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/15">
            {summary.map((s) => (
              <StaggerItem key={s.label}>
                <p className="font-display font-extrabold text-[28px] md:text-[32px] bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  {s.metric}
                </p>
                <p className="text-[14px] font-semibold text-white mt-1">{s.label}</p>
                <p className="text-[12px] text-white/60 mt-0.5">{s.sub}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Cases */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn className="mb-12 text-center">
          <span className="tag mb-5">Case Library</span>
          <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
            業種別・課題別の実例
          </h2>
          <p className="text-[16px] text-brand-sub max-w-2xl mx-auto leading-[1.85]">
            各事例で「Before / After」「対象レイヤー」「導入後の声」を構造化して掲載しています。
            ※ 企業名はNDAに基づき仮名表記。実例ベースで構成しています。
          </p>
        </FadeIn>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <FadeIn key={c.id} delay={i * 0.05}>
              <article className="rounded-3xl border border-brand-border overflow-hidden hover:border-brand-blue/40 transition-colors">
                {/* Header */}
                <div className="bg-slate-50 border-b border-brand-border px-8 py-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                      {c.industry}
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {c.employees}
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[22px] text-brand-text">
                    {c.company}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="rounded-2xl border border-red-100 bg-red-50/40 p-6">
                      <p className="text-[10px] font-bold tracking-widest text-red-600 uppercase mb-3">
                        Before / 課題
                      </p>
                      <p className="text-[14px] text-brand-text leading-[1.95]">{c.before}</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
                      <p className="text-[10px] font-bold tracking-widest text-emerald-700 uppercase mb-3">
                        After / 成果
                      </p>
                      <p className="text-[14px] text-brand-text leading-[1.95] font-medium">{c.after}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 pt-6 border-t border-brand-border">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-brand-sub uppercase mb-1.5">
                        実施ラウンド
                      </p>
                      <p className="text-[14px] font-semibold text-brand-text">{c.rounds}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-brand-sub uppercase mb-1.5">
                        対象レイヤー
                      </p>
                      <p className="text-[14px] font-semibold text-brand-text">
                        {c.layers.join(" / ")}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-brand-sub uppercase mb-1.5">
                        支援期間
                      </p>
                      <p className="text-[14px] font-semibold text-brand-text">{c.period}</p>
                    </div>
                  </div>

                  {/* Voice */}
                  {c.voice && (
                    <blockquote className="border-l-4 border-brand-blue pl-5 py-1 text-[14px] text-brand-sub leading-[1.95] italic">
                      {c.voice}
                    </blockquote>
                  )}

                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t border-brand-border flex justify-end">
                    <Link
                      href="/contact?purpose=consult"
                      className="text-sm font-semibold text-brand-blue hover:underline"
                    >
                      同様の課題を相談する →
                    </Link>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Closing CTA */}
        <FadeIn delay={0.2} className="mt-20">
          <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #7c3aed 100%)" }}>
            <div className="px-10 py-14 text-center">
              <h2 className="font-display font-bold text-[28px] md:text-[34px] text-white mb-4 leading-tight">
                貴社の事例を、次に作りませんか。
              </h2>
              <p className="text-blue-100 text-[15px] mb-8 max-w-xl mx-auto leading-[1.85]">
                30分の無料相談で、貴社向けの侵入仮説と、想定される導入シナリオをお伝えします。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact?purpose=diagnosis"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-[15px]"
                >
                  無料診断を試す
                </Link>
                <Link
                  href="/lp/ai-attack-simulation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-[15px]"
                >
                  AI攻撃シミュレーションを見る
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
