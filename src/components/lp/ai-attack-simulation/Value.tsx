"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LpCtaLink from "@/components/lp/blocks/LpCtaLink";

const values = [
  {
    headline: "どこから破られるかを、可視化する",
    body: "机上の理論ではなく、実際の攻撃手順で、最初に突破される1ヶ所を特定します。",
  },
  {
    headline: "侵入後、どこまで被害が及ぶかを見せる",
    body: "1つの穴から、顧客データや基幹システムまで、どう繋がっているかを追跡します。",
  },
  {
    headline: "「対応すべき脆弱性」を、実証で決める",
    body: "確認が取れた脆弱性だけを報告。理論上のリスクに振り回されることがなくなります。",
  },
];

export default function Value() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="value"
      className="bg-[#0a0a0a] py-24 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-red-500/60" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest uppercase text-red-400 border border-red-500/40 rounded-full mb-6">
            解決策：AI攻撃シミュレーション
          </span>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] leading-tight tracking-tight text-white mb-4">
            攻撃者と同じ手口で、
            <br className="hidden md:block" />
            <span className="text-red-500">本当に侵入できるか</span>を再現します
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-[15px] leading-relaxed">
            「検査した」ではなく「実際に攻撃してみた」結果だけを報告します。
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {values.map((v, i) => (
            <motion.div
              key={v.headline}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 border border-red-500 flex items-center justify-center mt-1">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg md:text-xl mb-2 leading-snug">
                  {v.headline}
                </h3>
                <p className="text-slate-400 leading-relaxed">{v.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <LpCtaLink
            event="mid_cta_click"
            section="value"
            label="AI攻撃シミュレーションを相談する"
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded transition-colors duration-150 shadow-[0_0_30px_rgba(239,68,68,0.3)]"
          >
            AI攻撃シミュレーションを相談する →
          </LpCtaLink>
          <p className="text-xs text-slate-500 mt-4">初回相談は無料です</p>
        </motion.div>
      </div>
    </section>
  );
}
