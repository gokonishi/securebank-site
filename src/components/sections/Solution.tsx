import Link from "next/link";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const points = [
  { num: "01", title: "資産をAIが自動で把握する", desc: "IP・ドメイン・URL・APIまで、攻撃者から見える侵入口候補をAIが自動列挙します。" },
  { num: "02", title: "AIが実際に侵入を試行する", desc: "コードレベルで侵入を試行。「悪用可能か」まで検証し、机上ではなく実体で確認します。" },
  { num: "03", title: "AIが自律的に検証を深掘りする", desc: "AIが仮説を立てて試し、前の結果を踏まえて次に調べるべきアクションを自律的に判断しながら、検証を進めます。" },
  { num: "04", title: "攻撃の事実を、経営判断に使える形で可視化する", desc: "攻撃ログ・侵入経路・影響範囲を整理し、取締役会でそのまま使えるレポートとして提供します。" },
];

export default function Solution() {
  return (
    <section className="section-dark py-28 relative overflow-hidden">
      {/* Subtle dot overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6 text-white text-[11px] font-bold tracking-widest uppercase">
            04 / Solution
          </div>
          <h2 className="font-display font-bold text-[44px] md:text-[52px] tracking-tight text-white mb-6 leading-[1.1]">
            攻撃者のAIには、<br />
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              防御側のAIで検証する。
            </span>
          </h2>
          <p className="text-[17px] text-blue-100 leading-[1.85]">
            チェックリストや机上診断では、もう追いつけません。
            セキュア・バンクのAI攻撃シミュレーションは、実侵入の再現を通じて「破られなかった証拠」を手に入れるための仕組みです。
          </p>
        </FadeIn>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {points.map((item) => (
            <StaggerItem key={item.num}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-200">
                <p className="text-[52px] font-extrabold font-display text-white/15 mb-4 leading-none">
                  {item.num}
                </p>
                <h3 className="font-display font-bold text-[18px] text-white mb-2">{item.title}</h3>
                <p className="text-[15px] text-blue-100 leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeIn delay={0.2} className="mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/lp/ai-attack-simulation"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-text font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-[15px]"
          >
            AI攻撃シミュレーションの詳細を見る →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-[15px]"
          >
            サービス全体像
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
