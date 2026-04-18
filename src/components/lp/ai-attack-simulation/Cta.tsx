"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LpCtaLink from "@/components/lp/blocks/LpCtaLink";

export default function Cta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cta"
      className="bg-[#0a0a0a] py-28 relative overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(239,68,68,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-[30px] md:text-[44px] leading-[1.2] tracking-tight text-white mb-6">
            貴社の<span className="text-red-500">「見えていない攻撃経路」</span>
            を
            <br />
            まず確認しませんか？
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10">
            30分の無料相談で、現状と優先度をご提示します。
            <br />
            導入の強制は一切ありません。
          </p>

          <LpCtaLink
            event="bottom_cta_click"
            section="bottom"
            label="無料相談を予約する"
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-red-500 hover:bg-red-600 text-white font-bold text-base rounded transition-colors duration-150 shadow-[0_0_40px_rgba(239,68,68,0.5)]"
          >
            無料相談を予約する →
          </LpCtaLink>

          <div className="mt-8 flex flex-col sm:flex-row gap-2 justify-center items-center text-xs text-slate-500">
            <span>✓ 費用は一切かかりません</span>
            <span className="hidden sm:inline">・</span>
            <span>✓ 無理な営業はいたしません</span>
            <span className="hidden sm:inline">・</span>
            <span>✓ セキュリティ初心者歓迎</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
