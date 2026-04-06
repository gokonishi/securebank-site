"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LpProblem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" className="bg-[#0a0a0a] py-28 relative overflow-hidden">
      {/* Vertical red line accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-[40px] md:text-[52px] leading-[1.1] tracking-tight text-white mb-6">
            AIが武器になった時代、
            <br />
            <span className="text-red-500">従来のセキュリティ診断はもう限界です。</span>
          </h2>
          <p className="text-slate-400 text-[17px] leading-[1.9] max-w-2xl mx-auto">
            AIによって開発スピードが指数的に加速する一方で、攻撃者も同じくAIを活用し、
            24時間・365日の継続的な攻撃を仕掛けています。
            現代のセキュリティ領域では、「リリースされたコード」と
            「実際に悪用される脆弱性」の間にある巨大な盲点を、いち早く発見することが求められます。
          </p>
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded transition-colors duration-150"
          >
            自律型エンジンで診断を始める →
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white font-semibold text-sm rounded hover:bg-white/5 transition-colors duration-150"
          >
            診断レポートのサンプルを見る
          </a>
        </motion.div>
      </div>
    </section>
  );
}
