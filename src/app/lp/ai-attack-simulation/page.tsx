import type { Metadata } from "next";
import LpShellHeader from "@/components/lp/shell/LpShellHeader";
import Hero from "@/components/lp/ai-attack-simulation/Hero";
import Stats from "@/components/lp/ai-attack-simulation/Stats";
import PhaseSection from "@/components/lp/phase/PhaseSection";
import ReportSample from "@/components/lp/report/ReportSample";
import Cta from "@/components/lp/ai-attack-simulation/Cta";

const LP_URL = "https://securebank.co.jp/lp/ai-attack-simulation";
const LP_TITLE = "AI攻撃シミュレーション｜年1回の診断では、もう守れません";
const LP_DESCRIPTION =
  "攻撃者はすでにAIを使っています。年1回の脆弱性診断では守れない時代に、攻撃者視点で「本当に侵入できるか」を再現するAI攻撃シミュレーション。中堅中小企業の経営リスクを低減。30分の無料相談受付中。";

export const metadata: Metadata = {
  title: LP_TITLE,
  description: LP_DESCRIPTION,
  keywords: [
    "AI攻撃シミュレーション",
    "ペネトレーションテスト",
    "脆弱性診断",
    "レッドチーム",
    "中小企業 セキュリティ対策",
    "ランサムウェア対策",
    "サイバーセキュリティ",
    "AIサイバー攻撃",
  ],
  alternates: { canonical: LP_URL },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "セキュア・バンク株式会社",
    title: LP_TITLE,
    description: LP_DESCRIPTION,
    url: LP_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: LP_TITLE,
    description: LP_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── Phase content ── */
const phase01 = {
  title: "すべての資産を、AIが自動で把握する",
  body: [
    "IP、ドメイン、URL、API。",
    "あらゆる資産を自動認識し、攻撃者の視点で「侵入口」を洗い出す。",
    "",
    "さらにAIが仮説を生成し、最も突破されやすい経路から検証を開始。",
  ],
};

const phase02 = {
  title: "AIが実際に侵入を試みる",
  body: [
    "攻撃シナリオをAIが自動生成。",
    "コードレベルで侵入を試行し、「実際に悪用できるか」まで検証する。",
    "",
    "単なるスキャンではなく、リアルな攻撃の再現。",
  ],
};

const phase03 = {
  title: "証拠付きで、リスクを可視化する",
  body: [
    "すべての結果は証拠付き。",
    "リクエスト・レスポンス・攻撃ログまで記録。",
    "",
    "経営層にそのまま提出できるレポートとして出力。",
  ],
};

export default function AiAttackSimulationLpPage() {
  return (
    <div className="bg-black min-h-screen">
      <LpShellHeader />

      {/* H1: AI攻撃シミュレーション */}
      <Hero />

      {/* 数字が語る、今の現実 */}
      <Stats />

      {/* Phase 01: Asset Discovery */}
      <PhaseSection
        phase={1}
        title={phase01.title}
        body={phase01.body}
      />

      {/* Phase 02: Attack Simulation */}
      <PhaseSection
        phase={2}
        title={phase02.title}
        body={phase02.body}
        reverse
      />

      {/* Phase 03: Evidence & Report */}
      <PhaseSection
        phase={3}
        title={phase03.title}
        body={phase03.body}
      />

      {/* Report Sample */}
      <ReportSample />

      {/* CTA */}
      <Cta />
    </div>
  );
}
