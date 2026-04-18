"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const limits = [
  {
    title: "年1回の診断では、365日の隙間を守れない",
    desc: "攻撃者は毎日進化します。点の検査で、線で来る攻撃に追いつくことはできません。",
  },
  {
    title: "人手では、AIのスピードに勝てない",
    desc: "AIは夜間も週末も休まず脆弱性を探し続けます。担当者1人では物理的に対処しきれません。",
  },
  {
    title: "「既知の脆弱性リスト」の外側から破られている",
    desc: "従来のスキャナは報告済みの穴しか見ません。AIが作る未知の攻撃経路は見えていません。",
  },
];

export default function LegacyLimits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="limits" className="bg-black py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-[28px] md:text-[40px] leading-tight tracking-tight text-white mb-4 text-center"
        >
          「対策してるから大丈夫」は、
          <br className="hidden md:block" />
          <span className="text-red-500">もう通用しません</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-slate-400 mb-16 text-[15px]"
        >
          従来のセキュリティが、AI時代に追いつけない3つの理由。
        </motion.p>

        <div className="space-y-6">
          {limits.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="border-l-4 border-red-500 bg-[#111] rounded-r-xl px-8 py-6"
            >
              <div className="flex items-start gap-5">
                <span className="font-display font-extrabold text-4xl md:text-5xl text-red-500/40 shrink-0 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl mb-2 leading-snug">
                    {l.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{l.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded transition-colors duration-150"
          >
            自社の状況を確認する →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
