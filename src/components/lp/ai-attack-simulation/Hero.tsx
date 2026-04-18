"use client";

import { motion } from "framer-motion";
import LpCtaLink from "@/components/lp/blocks/LpCtaLink";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden pt-16">
      {/* Red glow */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(239,68,68,0.18) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(239,68,68,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-red-500/50 rounded-full text-red-400 text-xs font-bold tracking-widest uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          警告：AI時代のサイバー攻撃
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-[44px] md:text-[72px] leading-[1.1] tracking-[-0.02em] text-white mb-8"
        >
          年1回の診断では、
          <br />
          <span className="text-red-500">もう守れません。</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="text-slate-300 text-lg md:text-xl leading-[1.9] mb-12 max-w-2xl space-y-1"
        >
          <p>攻撃者はすでにAIを使っています。</p>
          <p>24時間、自動で、貴社を狙っています。</p>
          <p className="text-slate-400">中小企業も、例外ではありません。</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <LpCtaLink
            event="hero_cta_click"
            section="hero_primary"
            label="無料で状況を確認する"
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-base rounded transition-colors duration-150 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
          >
            無料で状況を確認する →
          </LpCtaLink>
          <a
            href="#limits"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold text-base rounded hover:bg-white/5 transition-colors duration-150"
          >
            まず現実を知る
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-xs text-slate-500"
        >
          上場企業グループ・セキュア・バンク株式会社が提供
        </motion.p>
      </div>
    </section>
  );
}
