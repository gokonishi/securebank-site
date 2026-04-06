"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const roiPoints = [
  {
    title: "本当に危ない脆弱性だけに集中できる",
    desc: "アラート疲れを解消します。組織に実害をもたらす脆弱性のみにエンジニアリングリソースを集中し、確実な修正へ導きます。",
  },
  {
    title: "修復までの時間を大幅に短縮する（MTTR削減）",
    desc: "AIの並列処理能力で検査サイクルを圧縮。すぐに実行できる再現スクリプトを提供することで、脆弱性が放置される「危険な空白期間」を桁違いに短くします。",
  },
  {
    title: "開発の速度を落とさずにセキュリティを強化する",
    desc: "既存のCI/CDパイプラインへ深く統合し、リリース速度を損なうことなく、Exploitによる確実な検証を伴うアジャイルなセキュリティ体制を実現します。",
  },
  {
    title: "「年一回の点検」から「継続的な防御」へ",
    desc: "年一度のコンプライアンス監査だけに頼る体制から脱却し、ビジネスを守り続ける強固で継続的な攻撃的セキュリティの運用基盤へ進化させます。",
  },
];

export default function LpRoi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="roi" className="bg-black py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display font-extrabold text-[36px] md:text-[48px] leading-[1.15] tracking-tight text-white mb-6">
              経営判断に直結する、
              <br />
              <span className="text-red-500">セキュリティ投資の成果</span>
            </h2>
            <p className="text-slate-400 text-[16px] leading-relaxed mb-10">
              コストセンターとしてのセキュリティではなく、
              ビジネスリスクを定量的に削減する戦略的な投資として位置づけます。
            </p>

            {/* Radar chart placeholder */}
            <div className="relative w-full max-w-xs mx-auto lg:mx-0">
              <svg viewBox="0 0 200 200" className="w-full opacity-60">
                <polygon
                  points="100,20 180,80 155,170 45,170 20,80"
                  fill="none"
                  stroke="rgba(239,68,68,0.3)"
                  strokeWidth="1"
                />
                <polygon
                  points="100,50 155,95 135,155 65,155 45,95"
                  fill="none"
                  stroke="rgba(239,68,68,0.2)"
                  strokeWidth="1"
                />
                <polygon
                  points="100,30 170,85 148,165 52,165 30,85"
                  fill="rgba(239,68,68,0.15)"
                  stroke="rgba(239,68,68,0.6)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right: checklist */}
          <div className="space-y-6">
            {roiPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-0.5 w-6 h-6 border border-red-500 rounded flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-[15px] mb-1">{point.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
