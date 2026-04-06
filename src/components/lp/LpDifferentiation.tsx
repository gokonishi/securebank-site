"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LpDifferentiation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="differentiation" className="bg-black py-28 relative overflow-hidden" ref={ref}>
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-extrabold text-[36px] md:text-[48px] leading-[1.15] tracking-tight text-white mb-5">
            なぜ、汎用AIだけでは
            <br />
            <span className="text-cyan-400">脆弱性を見つけられないのか？</span>
          </h2>
          <p className="text-slate-400 text-[16px] max-w-xl mx-auto leading-relaxed">
            汎用の大規模言語モデル（LLM）と実戦向けのAIペネトレーションエンジンでは、
            解くべき問題が根本的に異なります。
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Center badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
            <span className="bg-[#1a1a1a] border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap">
              次元の違い
            </span>
          </div>

          {/* LLM card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-[#111] border border-white/10 rounded-xl p-8"
          >
            <div className="font-mono text-3xl font-bold text-slate-300 mb-6 tracking-tight">
              P(text | context)
            </div>
            <h3 className="text-white font-bold text-lg mb-1">LLMの処理モデル：<span className="text-cyan-400">確率的生成</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed mt-3">
              コンテキストに基づき、次に続くトークンを予測します。
              これは本質的に「自然な文章の続き」を求める確率分布の計算であり、
              ターゲットのセキュリティ状態に対する論理的な検証は行いません。
            </p>
          </motion.div>

          {/* RedTeam card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="bg-[#111] border border-red-500/30 rounded-xl p-8"
          >
            <div className="font-mono text-2xl font-bold text-red-400 mb-6 tracking-tight">
              ∃I : F<sup>k</sup>(S₀, I) ∈ S<sub>bad</sub>
            </div>
            <h3 className="text-white font-bold text-lg mb-1">自律型Exploitの要求：<span className="text-red-400">論理的証明</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed mt-3">
              ターゲットのシステム状態において、k回の操作後にシステムを確実に危険な状態
              S<sub>bad</sub> へ遷移させる命令シーケンス I を算出します。
              確率的な推測ではなく、論理検証です。
            </p>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="border-l-2 border-red-500 pl-6"
        >
          <p className="text-slate-300 font-bold text-lg mb-2">根本的に異なるアプローチ</p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
            言語モデルの知識だけでは、複雑な状態遷移を伴うロジック脆弱性は検出できません。
            真の自律的な脆弱性攻撃（Exploit）には、
            <strong className="text-slate-300">静的解析・動的計装・探索的テスト・シンボリック実行</strong>を統合した
            深い検証エンジンが不可欠です。これが BUGBANK RedTeam AI の設計思想です。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
