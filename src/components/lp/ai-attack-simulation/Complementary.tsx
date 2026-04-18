"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    label: "内部脆弱性診断（VDP）",
    headline: "社内ネットワークの穴を、定期的にチェック",
    desc: "外部からの検査では見つからない、社内の弱点を継続的に把握します。",
  },
  {
    label: "ランサムウェア対策バックアップ（CRA）",
    headline: "攻撃を受けても、業務を止めない",
    desc: "万が一の侵害時に、事業継続に必要なデータを素早く戻せる体制を整えます。",
  },
];

export default function Complementary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-extrabold text-[28px] md:text-[40px] leading-tight tracking-tight text-white mb-4"
        >
          AI攻撃シミュレーションを、
          <br className="hidden md:block" />
          <span className="text-red-500">さらに補強する2つの仕組み</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-slate-400 mb-16 text-[15px]"
        >
          侵入前だけでなく、侵入後・復旧までをトータルでカバーします。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="border border-white/10 rounded-xl p-8 bg-black"
            >
              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 block">
                {s.label}
              </span>
              <h3 className="text-white font-bold text-xl mb-3 leading-snug">
                {s.headline}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:bg-white/5 text-white font-semibold text-sm rounded transition-colors duration-150"
          >
            まとめて無料相談する →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
