import type { Metadata } from "next";
import LpShellHeader from "@/components/lp/shell/LpShellHeader";
import Hero from "@/components/lp/ai-attack-simulation/Hero";
import Stats from "@/components/lp/ai-attack-simulation/Stats";
import LegacyLimits from "@/components/lp/ai-attack-simulation/LegacyLimits";
import Value from "@/components/lp/ai-attack-simulation/Value";
import Process from "@/components/lp/ai-attack-simulation/Process";
import Complementary from "@/components/lp/ai-attack-simulation/Complementary";
import Faq from "@/components/lp/ai-attack-simulation/Faq";
import Cta from "@/components/lp/ai-attack-simulation/Cta";

export const metadata: Metadata = {
  title: "AI攻撃シミュレーション | 年1回の診断では、もう守れません | セキュア・バンク",
  description:
    "攻撃者はすでにAIを使っています。年1回の脆弱性診断では守れない時代に、攻撃者視点で「本当に侵入できるか」を再現するAI攻撃シミュレーション。30分の無料相談受付中。",
  alternates: {
    canonical: "https://securebank.co.jp/lp/ai-attack-simulation",
  },
};

export default function AiAttackSimulationLpPage() {
  return (
    <div className="bg-black min-h-screen">
      <LpShellHeader />
      <Hero />
      <Stats />
      <LegacyLimits />
      <Value />
      <Process />
      <Complementary />
      <Faq />
      <Cta />
    </div>
  );
}
