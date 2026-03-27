"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { end: 80000, suffix: "+", label: "ホワイトハッカーの知見" },
  { end: 99, suffix: "%", label: "AI攻撃シミュレーション精度" },
  { end: 3, suffix: "段階", label: "段階的導入ステップ" },
  { end: 24, suffix: "h", label: "継続監視体制" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Top-right color blob */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, #7C3AED 0%, #2563EB 50%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="tag mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              上場企業グループ ・ AI活用セキュリティ
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[52px] md:text-[64px] lg:text-[68px] font-extrabold tracking-[-0.02em] text-brand-text leading-[1.05] mb-7"
            >
              あなたの会社も、<br />
              すでに<span className="text-gradient">サイバー攻撃</span>の<br />
              対象です。
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-[19px] font-semibold text-brand-blue mb-4"
            >
              AIによる自動攻撃から守る、新しいセキュリティ
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="text-[17px] text-brand-sub leading-[1.8] mb-10 max-w-lg"
            >
              攻撃がAI化する時代に、中堅中小企業でも現実的に導入できる防御を。
              専門部門を持てない企業こそ、攻撃者視点の継続的な対策が必要です。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-grad btn-pulse">
                まずは現状把握から始める
              </Link>
              <Link href="/services" className="btn-outline">
                サービスを見る →
              </Link>
            </motion.div>
          </div>

          {/* ── Right mock UI ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 shadow-[0_32px_80px_rgba(0,0,0,0.12)] overflow-hidden">
                {/* Window bar */}
                <div className="bg-[#1e293b] px-5 py-3.5 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-slate-400 font-mono">
                    securebank — ai-scan v2.0
                  </span>
                </div>
                {/* Terminal body */}
                <div className="bg-[#0f172a] p-6 font-mono text-sm space-y-2.5 min-h-[260px]">
                  <p className="text-slate-500">$ initializing attack simulation...</p>
                  <p className="text-green-400">✓ ASM scan: <span className="text-white">47 assets discovered</span></p>
                  <p className="text-yellow-400">⚠ Critical: <span className="text-white">3 exposed endpoints</span></p>
                  <p className="text-blue-400">→ Simulating intrusion vector...</p>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">  progress</span>
                    <div className="flex-1 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                      />
                    </div>
                    <span className="text-slate-400 text-xs">78%</span>
                  </div>
                  <p className="text-green-400">✓ Entry vector: <span className="text-white">port 443 / SSL</span></p>
                  <p className="text-red-400">! Lateral movement: <span className="text-white">possible</span></p>
                  <p className="text-slate-400">→ Generating remediation report...</p>
                </div>
              </div>

              {/* Floating badge: scan complete */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl border border-slate-200 shadow-card px-5 py-3.5 flex items-center gap-3">
                <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">診断完了</p>
                  <p className="text-[11px] text-slate-500">レポート生成済み</p>
                </div>
              </div>

              {/* Floating badge: AI */}
              <div className="absolute -top-4 -right-4 bg-gradient-brand text-white text-xs font-bold px-4 py-2 rounded-full shadow-glow">
                AI解析中
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-24 pt-10 border-t border-brand-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold font-display text-brand-text mb-1">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-sm text-brand-sub">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
