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
  alternates: {
    canonical: "https://securebank.co.jp/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WaveDivider topColor="#ffffff" bottomColor="#F7F8FC" />
      <TrustBand />
      <WaveDivider topColor="#F7F8FC" bottomColor="#ffffff" flip />
      <ProblemAI />
      <WaveDivider topColor="#ffffff" bottomColor="#F7F8FC" />
      <SMBReality />
      <WaveDivider topColor="#F7F8FC" bottomColor="#ffffff" flip />
      <LegacyLimit />
      {/* Wave into dark gradient section */}
      <WaveDivider topColor="#ffffff" bottomColor="#1e3a8a" />
      <Solution />
      {/* Wave out of dark gradient section */}
      <WaveDivider topColor="#7c3aed" bottomColor="#F7F8FC" />
      <Strength />
      <WaveDivider topColor="#F7F8FC" bottomColor="#ffffff" flip />
      <AIAdvantage />
      <WaveDivider topColor="#ffffff" bottomColor="#F7F8FC" />
      <Steps />
      <WaveDivider topColor="#F7F8FC" bottomColor="#ffffff" flip />
      <ClosingCTA />
    </>
  );
}
