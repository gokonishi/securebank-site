import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBand from "@/components/sections/TrustBand";
import ProblemAI from "@/components/sections/ProblemAI";
import SMBReality from "@/components/sections/SMBReality";
import LegacyLimit from "@/components/sections/LegacyLimit";
import Solution from "@/components/sections/Solution";
import Strength from "@/components/sections/Strength";
import AIAdvantage from "@/components/sections/AIAdvantage";
import Steps from "@/components/sections/Steps";
import ClosingCTA from "@/components/sections/ClosingCTA";
import WaveDivider from "@/components/ui/WaveDivider";

export const metadata: Metadata = {
  title: {
    absolute: "セキュア・バンク株式会社｜攻撃される前提で、守れているか。",
  },
  description:
    "AI vs AI の時代に、年1回の診断ではもう守れない。AI攻撃シミュレーションで、\"対策した\"ではなく\"破られなかった\"証拠を手に入れる。中堅・中小企業向けのセキュリティ。",
  alternates: {
    canonical: "https://securebank.co.jp/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ① HERO */}
      <Hero />

      {/* ② 問題提起：AI攻撃の現実 */}
      <WaveDivider topColor="#ffffff" bottomColor="#F7F8FC" />
      <ProblemAI />

      {/* ③ なぜ中堅中小が狙われるか */}
      <WaveDivider topColor="#F7F8FC" bottomColor="#ffffff" flip />
      <SMBReality />

      {/* ④ 従来対策の限界 */}
      <WaveDivider topColor="#ffffff" bottomColor="#F7F8FC" />
      <LegacyLimit />

      {/* ⑤ 解決策：AI攻撃シミュレーション（LPへ強誘導） */}
      <WaveDivider topColor="#F7F8FC" bottomColor="#1e3a8a" />
      <Solution />

      {/* ⑥ AIだからできること */}
      <WaveDivider topColor="#7c3aed" bottomColor="#ffffff" />
      <AIAdvantage />

      {/* ⑦ 3ステップ */}
      <WaveDivider topColor="#ffffff" bottomColor="#F7F8FC" />
      <Steps />

      {/* ⑧ 信頼 */}
      <WaveDivider topColor="#F7F8FC" bottomColor="#ffffff" flip />
      <Strength />
      <WaveDivider topColor="#ffffff" bottomColor="#F7F8FC" />
      <TrustBand />

      {/* ⑨ 最終CTA */}
      <WaveDivider topColor="#F7F8FC" bottomColor="#ffffff" flip />
      <ClosingCTA />
    </>
  );
}
