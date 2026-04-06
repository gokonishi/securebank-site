"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LpCta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="bg-[#0a0a0a] py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      {/* Red glow */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(239,68,68,0.2) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-[36px] md:text-[52px] leading-[1.1] tracking-tight text-white mb-6">
            マシンの速度で。
            <br />
            <span className="text-red-500">人の限界を超えた解析を。</span>
          </h2>
          <p className="text-slate-400 text-[16px] leading-relaxed mb-10">
            デモンストレーション環境でRedTeam AIの実力をご体験ください。
            貴社のセキュリティ担当者・CISO向けの技術説明会も承っています。
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-base rounded transition-colors duration-150 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
          >
            法人向けデモを申し込む →
          </a>

          <p className="mt-6 text-xs text-slate-600">
            Powered by{" "}
            <a href="/" className="text-slate-500 hover:text-slate-300 transition-colors">
              SECUREBANK
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
