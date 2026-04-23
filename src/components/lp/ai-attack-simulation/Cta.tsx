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
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(239,68,68,0.22) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Urgency message */}
          <div className="inline-flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4 mb-10 text-left max-w-lg mx-auto">
            <span className="text-red-400 text-xl leading-none shrink-0 mt-0.5">⚠</span>
            <p className="text-red-300 text-[14px] leading-relaxed">
              攻撃はすでにAI化しています。<br />
              <span className="text-red-400 font-bold">対策していない企業から、順番に狙われます。</span>
            </p>
          </div>

          <h2 className="font-display font-extrabold text-[30px] md:text-[44px] leading-[1.2] tracking-tight text-white mb-6">
            貴社の<span className="text-red-500">「見えていない攻撃経路」</span>を
            <br />
            まず確認しませんか？
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10">
            30分の無料相談で、現状と優先度をご提示します。<br />
            導入の強制は一切ありません。
          </p>

          {/* 2 CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://8.219.75.117/login.html"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-base rounded transition-colors duration-150 shadow-[0_0_40px_rgba(239,68,68,0.4)]"
            >
              デモを予約する →
            </a>
            <LpCtaLink
              event="bottom_cta_click"
              section="bottom_secondary"
              label="個別に相談する"
              href="/contact?purpose=consult"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold text-base rounded hover:bg-white/5 transition-colors duration-150"
            >
              個別に相談する
            </LpCtaLink>
          </div>

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
