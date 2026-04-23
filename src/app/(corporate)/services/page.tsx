import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "サービス｜AI攻撃シミュレーション",
  description:
    "「対策した」ではなく「破られなかった」証拠を。20ラウンドの攻撃検証と Layer 0〜5 の多層防御で、AI時代のセキュリティを再定義します。",
  alternates: {
    canonical: "https://securebank.co.jp/services",
  },
};

// ── AI攻撃の現実 ──
const realities = [
  {
    badge: "無差別化",
    title: "業種・規模を問わず、全企業が標的に",
    desc: "「うちは狙われない」は通用しません。AIは業界も規模も選ばずに侵入を試みます。",
  },
  {
    badge: "自動化",
    title: "攻撃シナリオは、AIが生成する",
    desc: "人間のハッカーがゼロから組み立てていた攻撃は、いまAIが数秒で生成します。",
  },
  {
    badge: "高速化",
    title: "脆弱性公開から侵入まで、24時間以内",
    desc: "パッチ適用が間に合う前に、攻撃はすでに到達している前提で設計が必要です。",
  },
  {
    badge: "多層化",
    title: "Layer 0〜5 を横断する攻撃連鎖",
    desc: "単一レイヤーの防御では防げない。物理・人・NW・ID・アプリ・データを横断します。",
  },
];

// ── 従来 vs AI攻撃シミュレーション ──
const compareRows = [
  { axis: "頻度", legacy: "年1〜2回", next: "継続・オンデマンド" },
  { axis: "網羅性", legacy: "事前合意の範囲のみ", next: "公開資産を自動列挙し全面検証" },
  { axis: "再現度", legacy: "脆弱性の有無チェック", next: "実際の侵入を再現" },
  { axis: "速度", legacy: "数週間〜数ヶ月", next: "ラウンド単位で高速実行" },
  { axis: "アウトプット", legacy: "所見リスト", next: "経営会議で使える証拠付きレポート" },
];

// ── Phase ──
const phases = [
  {
    no: "Phase 01",
    title: "資産の自動把握",
    desc: "IP・ドメイン・URL・APIをAIが自動で列挙。攻撃者の視点で「侵入口」を洗い出します。",
  },
  {
    no: "Phase 02",
    title: "AIによる実侵入の試行",
    desc: "AIが攻撃シナリオを自動生成し、コードレベルで侵入を試行。悪用可否まで検証します。",
  },
  {
    no: "Phase 03",
    title: "証拠付きレポート",
    desc: "リクエスト・レスポンス・攻撃ログまで記録。経営層にそのまま提出できる形式で出力。",
  },
];

// ── 20ラウンド ──
const rounds = [
  {
    range: "Round 1–5",
    title: "外周の脆弱性",
    detail: "公開資産の基礎的な設定不備・既知脆弱性を機械的に突破。",
  },
  {
    range: "Round 6–10",
    title: "認証・認可の突破",
    detail: "パスワードスプレー、セッション奪取、認可バイパスを試行。",
  },
  {
    range: "Round 11–15",
    title: "内部侵入・横移動",
    detail: "侵入後のラテラルムーブメントで内部ネットワークを踏破。",
  },
  {
    range: "Round 16–20",
    title: "特権昇格・データ窃取",
    detail: "ドメイン特権の奪取と、重要データの実際の持ち出し可否を検証。",
  },
];

// ── Layer 0–5 ──
const layers = [
  {
    no: "Layer 5",
    name: "データ / 機密情報",
    impact: "事業継続停止・損害賠償・社会的信用失墜",
    check: "暗号化・アクセス制御・持ち出し経路",
  },
  {
    no: "Layer 4",
    name: "アプリケーション",
    impact: "情報漏えい・改ざん・なりすまし",
    check: "OWASP準拠の実攻撃・API認可バイパス",
  },
  {
    no: "Layer 3",
    name: "認証 / ID",
    impact: "成りすましログイン・特権アカウント奪取",
    check: "MFAバイパス・セッションハイジャック",
  },
  {
    no: "Layer 2",
    name: "ネットワーク",
    impact: "横移動・通信傍受・内部拠点踏破",
    check: "セグメンテーション・ラテラルムーブ再現",
  },
  {
    no: "Layer 1",
    name: "エンドポイント",
    impact: "マルウェア感染・ランサムウェア被害",
    check: "EDR回避・永続化・権限昇格",
  },
  {
    no: "Layer 0",
    name: "物理 / 人的",
    impact: "ソーシャルエンジニアリング・内部不正",
    check: "フィッシング耐性・物理侵入・教育水準",
  },
];

// ── メリット ──
const merits = [
  {
    title: "スピード",
    detail: "数ヶ月かかる従来診断を、数日に短縮。意思決定の遅れを生みません。",
  },
  {
    title: "網羅性",
    detail: "人手では見つけられない組み合わせ攻撃まで、機械的に網羅します。",
  },
  {
    title: "実効性",
    detail: "「対策した」ではなく「破られなかった」証拠を、毎回手に入れます。",
  },
];

// ── 導入後タイムライン ──
const timeline = [
  { when: "Day 0", title: "キックオフ・資産棚卸", detail: "対象範囲の合意と、AIによる公開資産の自動列挙を実施。" },
  { when: "Week 2", title: "初回ラウンド結果共有", detail: "初回の侵入試行結果とリスクを、経営向けサマリーで報告。" },
  { when: "Month 1", title: "改善アクションと再検証", detail: "優先度順に対策を実施し、該当経路の再検証で効果を確認。" },
  { when: "Month 3", title: "取締役会で報告", detail: "20ラウンドの結果を、「破られなかった」証拠として経営報告。" },
];

// ── 補完サービス ──
const supports = [
  { title: "ASM（公開資産監視）", desc: "新規資産・変化をリアルタイムで検知し、シミュレーションに連動。" },
  { title: "SOC / MDR", desc: "24/365 の監視と一次対応。検知即初動の体制を外部で構築。" },
  { title: "セキュアバックアップ", desc: "ランサムウェア前提のオフライン保全と、復元テストの実施。" },
  { title: "サイバー保険", desc: "インシデント時の調査・賠償・事業中断損失を経済的に補完。" },
];

// ── FAQ ──
const faqs = [
  {
    q: "本番環境で実施して、業務に影響は出ませんか？",
    a: "影響範囲を事前に合意し、破壊的操作を行わないセーフモードから段階的に開始します。対象・時間帯・試行強度を、業務影響を回避する形で設計します。",
  },
  {
    q: "既存のSOC・セキュリティ製品と競合しませんか？",
    a: "競合しません。AI攻撃シミュレーションは「検証」レイヤーであり、既存の監視・防御がどこまで検知・阻止できたかを可視化する役割です。むしろ既存投資のROIを証明する材料になります。",
  },
  {
    q: "情シス部門の負荷はどのくらいですか？",
    a: "初期ヒアリングと対象合意で計4〜6時間程度。実行・レポーティングは当社が担います。情シス部門がいない企業でも導入可能な設計です。",
  },
  {
    q: "社内稟議や取締役会に使えるレポートは出ますか？",
    a: "出ます。技術者向けの詳細レポートとは別に、経営層向けサマリー（2〜4ページ）を必ずお渡しします。リスク・影響・必要投資を、経営の言葉で翻訳しています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI攻撃シミュレーション",
  serviceType: "AI-powered Attack Simulation",
  provider: {
    "@type": "Organization",
    name: "セキュア・バンク株式会社",
    url: "https://securebank.co.jp",
  },
  areaServed: { "@type": "Country", name: "JP" },
  description:
    "AIが攻撃シナリオを自動生成し、20ラウンド連続で実侵入を試行。Layer 0〜5を横断検証し、経営会議で使える証拠付きレポートを提供します。",
};

export default function ServicesPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative bg-[#0B1220] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, #2563EB 0%, transparent 40%), radial-gradient(circle at 80% 60%, #7C3AED 0%, transparent 45%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[12px] font-medium text-white/80 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-pulse" />
              Services
            </span>
            <h1 className="font-display font-extrabold text-[46px] md:text-[64px] tracking-tight leading-[1.1] mb-8">
              攻撃される前提で、<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                守れているか。
              </span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-white/80 leading-[1.85] max-w-2xl mb-12">
              AIが攻撃を自動化する時代に、年1回の診断で守れる企業は存在しません。
              セキュア・バンクは、&quot;対策した&quot;ではなく&quot;破られなかった&quot;証拠を、
              AI攻撃シミュレーションで提供します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?purpose=diagnosis"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-text font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-[15px]"
              >
                無料診断を申し込む
              </Link>
              <Link
                href="/lp/ai-attack-simulation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-[15px]"
              >
                AI攻撃シミュレーション詳細
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: AI攻撃の現実 ── */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="tag mb-5">01 / Reality</span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              攻撃はもう、人間の手を離れた。
            </h2>
            <p className="text-[16px] text-brand-sub max-w-2xl mx-auto leading-[1.85]">
              AIによる攻撃は、無差別・自動・高速・多層で進行します。
              これが、今日の企業が直面している現実です。
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realities.map((r) => (
              <StaggerItem key={r.badge}>
                <div className="card p-7 h-full">
                  <span className="inline-block text-[11px] font-bold tracking-widest text-brand-blue uppercase mb-4">
                    {r.badge}
                  </span>
                  <h3 className="font-display font-bold text-[17px] text-brand-text mb-3 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-[14px] text-brand-sub leading-[1.85]">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── SECTION 3: 従来対策の限界 ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-14">
            <span className="tag mb-5">02 / Gap</span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              「やっている」と「守れている」は、違う。
            </h2>
            <p className="text-[16px] text-brand-sub max-w-2xl mx-auto leading-[1.85]">
              従来型の脆弱性診断・ペネトレーションテストが無意味なのではありません。
              ただ、AI攻撃の速度と網羅性に、単体では追いつけなくなりました。
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-brand-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left px-6 py-4 text-[13px] font-bold text-brand-sub w-[120px]">観点</th>
                    <th className="text-left px-6 py-4 text-[13px] font-bold text-brand-sub">従来型診断</th>
                    <th className="text-left px-6 py-4 text-[13px] font-bold text-white bg-gradient-brand">
                      AI攻撃シミュレーション
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.axis} className="border-t border-brand-border">
                      <td className="px-6 py-5 text-[14px] font-semibold text-brand-text">{row.axis}</td>
                      <td className="px-6 py-5 text-[14px] text-brand-sub">{row.legacy}</td>
                      <td className="px-6 py-5 text-[14px] font-semibold text-brand-text bg-blue-50/40">
                        {row.next}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 4: AI攻撃シミュレーションとは ── */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="tag mb-5">03 / Solution</span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              攻撃者のAIには、防御側のAIで検証する。
            </h2>
            <p className="text-[16px] text-brand-sub max-w-2xl mx-auto leading-[1.85]">
              セキュア・バンクのAI攻撃シミュレーションは、3フェーズで完結します。
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((p) => (
              <StaggerItem key={p.no}>
                <div className="card p-8 h-full">
                  <p className="text-[11px] font-bold tracking-widest text-brand-blue uppercase mb-3">
                    {p.no}
                  </p>
                  <h3 className="font-display font-bold text-[20px] text-brand-text mb-4 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-brand-sub leading-[1.9]">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── SECTION 5: 20 Rounds ── */}
      <section className="bg-[#0B1220] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, #7C3AED 0%, transparent 45%), radial-gradient(circle at 30% 80%, #2563EB 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[12px] font-medium text-white/80 mb-5">
              04 / 20 Rounds
            </span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight mt-4 mb-5 leading-tight">
              1回では足りない。<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                20ラウンドで、殴り続ける。
              </span>
            </h2>
            <p className="text-[16px] text-white/75 max-w-2xl mx-auto leading-[1.85]">
              攻撃者は一度で諦めません。私たちも、一度では終わらせません。
              段階的に強度を上げながら、20ラウンドの攻撃を連続で再現します。
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rounds.map((r, i) => (
              <StaggerItem key={r.range}>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display font-extrabold text-[32px] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[12px] font-bold tracking-widest text-white/60 uppercase">
                      {r.range}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[19px] text-white mb-3 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-[14px] text-white/75 leading-[1.9]">{r.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── SECTION 6: Layer 0–5 ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="tag mb-5">05 / Defense in Depth</span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              どの層で止められるかを、可視化する。
            </h2>
            <p className="text-[16px] text-brand-sub max-w-2xl mx-auto leading-[1.85]">
              攻撃はレイヤーを横断します。Layer 0 から Layer 5 まで、
              各層の「突破されたときのビジネス影響」と「検証項目」を提示します。
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-3">
              {layers.map((layer, i) => (
                <div
                  key={layer.no}
                  className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr] gap-4 md:gap-6 items-start rounded-2xl border border-brand-border hover:border-brand-blue/50 transition-colors p-6 md:p-7"
                  style={{
                    background: `linear-gradient(90deg, rgba(37, 99, 235, ${0.02 + i * 0.012}) 0%, transparent 100%)`,
                  }}
                >
                  <div>
                    <p className="font-display font-extrabold text-[22px] text-brand-blue">
                      {layer.no}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-sub uppercase tracking-widest mb-1">Layer</p>
                    <p className="font-display font-bold text-[17px] text-brand-text">{layer.name}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-sub uppercase tracking-widest mb-1">
                      突破時の影響
                    </p>
                    <p className="text-[14px] text-brand-text leading-[1.85]">{layer.impact}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-sub uppercase tracking-widest mb-1">
                      検証項目
                    </p>
                    <p className="text-[14px] text-brand-sub leading-[1.85]">{layer.check}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 7: 導入メリット ── */}
      <section className="section-gray">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="tag mb-5">06 / Benefits</span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              検証 → 改善 → 再検証が、<br />1サイクルで回る。
            </h2>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {merits.map((m, i) => (
              <StaggerItem key={m.title}>
                <div className="card p-8 text-center h-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-brand text-white font-display font-bold text-xl flex items-center justify-center mb-5 shadow-glow">
                    0{i + 1}
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-brand-text mb-3">{m.title}</h3>
                  <p className="text-[15px] text-brand-sub leading-[1.9]">{m.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── SECTION 8: 導入後イメージ ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="tag mb-5">07 / Journey</span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              3ヶ月後、経営会議で<br />
              「破られなかった」と報告できる。
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ol className="relative border-l-2 border-brand-border pl-8 space-y-10">
              {timeline.map((t) => (
                <li key={t.when} className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-gradient-brand shadow-glow" />
                  <p className="text-[11px] font-bold tracking-widest text-brand-blue uppercase mb-1">
                    {t.when}
                  </p>
                  <h3 className="font-display font-bold text-[19px] text-brand-text mb-2">{t.title}</h3>
                  <p className="text-[15px] text-brand-sub leading-[1.9]">{t.detail}</p>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 9: 補完サービス ── */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="tag mb-5">08 / Surrounding</span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              検証の次は、運用で支える。
            </h2>
            <p className="text-[16px] text-brand-sub max-w-2xl mx-auto leading-[1.85]">
              AI攻撃シミュレーションを中核に、前後の運用・復旧・補償まで周回軌道で支援します。
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {supports.map((s) => (
              <StaggerItem key={s.title}>
                <div className="card p-7 h-full">
                  <h3 className="font-display font-bold text-[17px] text-brand-text mb-3">{s.title}</h3>
                  <p className="text-[14px] text-brand-sub leading-[1.85]">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── SECTION 10: FAQ ── */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-14">
            <span className="tag mb-5">09 / FAQ</span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              経営層・情シスからよくいただく質問
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-brand-border hover:border-brand-blue/50 transition-colors"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-display font-bold text-[16px] text-brand-text pr-4">{f.q}</h3>
                    <svg
                      className="w-5 h-5 text-brand-blue shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-[14px] text-brand-sub leading-[1.9]">{f.a}</div>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 11: CTA (3択) ── */}
      <section className="bg-[#0B1220] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #2563EB 0%, transparent 45%), radial-gradient(circle at 70% 70%, #7C3AED 0%, transparent 45%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-14">
            <h2 className="font-display font-bold text-[36px] md:text-[46px] tracking-tight mb-5 leading-tight">
              次のアクションを、選んでください。
            </h2>
            <p className="text-[16px] text-white/80 max-w-2xl mx-auto leading-[1.85]">
              検討フェーズに合わせた3つの入口を用意しています。どれも、意思決定の材料になる成果物をお渡しします。
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                badge: "最も踏みやすい",
                title: "無料診断",
                detail: "公開資産を自動列挙し、侵入経路の仮説を含む簡易レポートを無償提供。",
                cta: "無料診断を申し込む",
                href: "/contact?purpose=diagnosis",
                primary: true,
              },
              {
                badge: "比較検討層",
                title: "15分デモ",
                detail: "実際の攻撃再現と、レポートのサンプルをオンラインでご覧いただきます。",
                cta: "デモを見る",
                href: "/demo",
                primary: false,
              },
              {
                badge: "決裁者層",
                title: "個別相談",
                detail: "経営課題・社内体制・導入時期を踏まえ、最適な導入プランをご提案します。",
                cta: "相談を申し込む",
                href: "/contact?purpose=consult",
                primary: false,
              },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div
                  className={
                    c.primary
                      ? "rounded-2xl bg-gradient-brand p-8 h-full shadow-glow border border-white/20"
                      : "rounded-2xl bg-white/5 backdrop-blur p-8 h-full border border-white/10"
                  }
                >
                  <span className="inline-block text-[11px] font-bold tracking-widest text-white/80 uppercase mb-4">
                    {c.badge}
                  </span>
                  <h3 className="font-display font-bold text-[22px] text-white mb-3">{c.title}</h3>
                  <p className="text-[14px] text-white/80 leading-[1.9] mb-6">{c.detail}</p>
                  <Link
                    href={c.href}
                    className={
                      c.primary
                        ? "inline-flex items-center justify-center w-full px-5 py-3.5 bg-white text-brand-text font-bold rounded-xl hover:bg-blue-50 transition-colors text-[14px]"
                        : "inline-flex items-center justify-center w-full px-5 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-[14px]"
                    }
                  >
                    {c.cta} →
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </div>
  );
}
