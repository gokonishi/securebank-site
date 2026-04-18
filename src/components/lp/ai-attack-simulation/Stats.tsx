"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "./stats.data";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-extrabold text-[28px] md:text-[40px] leading-tight tracking-tight text-white mb-16"
        >
          数字が語る、<span className="text-red-500">今の現実</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col text-center border border-white/10 rounded-xl p-8 bg-black"
            >
              <div className="font-display font-extrabold text-5xl md:text-6xl text-red-500 mb-4 tracking-tight">
                {s.number}
              </div>
              <p className="text-white text-base leading-relaxed mb-5 flex-1">
                {s.label}
              </p>
              <p className="text-slate-600 text-[11px] leading-snug">
                <a
                  href={s.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-400 underline underline-offset-4 decoration-slate-700"
                >
                  出典：{s.source.name}
                </a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
