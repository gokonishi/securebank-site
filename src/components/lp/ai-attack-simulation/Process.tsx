"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    phase: "侵入前",
    title: "攻撃される前に、攻撃する",
    desc: "AI攻撃シミュレーションで、侵入される前に穴を見つけて塞ぎます。",
  },
  {
    phase: "侵入後",
    title: "被害範囲を、最小化する",
    desc: "万が一の侵害でも、重要データや基幹業務に到達させない多層設計。",
  },
  {
    phase: "復旧",
    title: "業務を、止めずに戻す",
    desc: "被害後の復旧時間を短くし、事業継続への影響を最小化します。",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-black py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-extrabold text-[28px] md:text-[40px] leading-tight tracking-tight text-white mb-4"
        >
          侵入前・侵入後・復旧、
          <br className="hidden md:block" />
          <span className="text-red-500">3層で守る</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-slate-400 mb-16 text-[15px]"
        >
          一点突破では守れない時代。段階ごとに防御を用意します。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((s, i) => (
            <motion.div
              key={s.phase}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-[#111] border border-white/10 rounded-xl p-8"
            >
              <span className="text-xs font-bold text-red-400 tracking-widest uppercase mb-4 block">
                PHASE {i + 1} — {s.phase}
              </span>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
