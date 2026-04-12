import type { Metadata } from "next";
import LpHeader from "@/components/lp/LpHeader";
import LpHero from "@/components/lp/LpHero";
import LpProblem from "@/components/lp/LpProblem";
import LpDifferentiation from "@/components/lp/LpDifferentiation";
import LpFeatures from "@/components/lp/LpFeatures";
import LpRoi from "@/components/lp/LpRoi";
import LpCta from "@/components/lp/LpCta";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://securebank.co.jp/ai-hacker",
  },
};

export default function AiHackerPage() {
  return (
    <div className="bg-black min-h-screen">
      <LpHeader />
      <LpHero />
      <LpProblem />
      <LpDifferentiation />
      <LpFeatures />
      <LpRoi />
      <LpCta />
    </div>
  );
}
