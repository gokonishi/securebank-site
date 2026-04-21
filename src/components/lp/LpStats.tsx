"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "287",
    unit: "日",
    label: "侵害の発覚まで平均かかる日数",
    note: "IBM Cost of a Data Breach 2023",
  },
  {
    value: "1/2",
    unit: "",
    label: "企業のうちサイバー攻撃を受けている割合",
    note: "IPA 情報セキュリティ白書 2023",
  },
  {
    value: "3×",
    unit: "",
    label: "AI活用型攻撃の前年比増加率",
    note: "CrowdStrike Global Threat Report 2024",
  },
  {
    value: "2.8",
    unit: "億円",
    label: "1件あたりの平均被害額（日本）",
    note: "ランサムウェア被害を含む",
  },
];

export default function LpStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center font-mono text-[11px] text-slate-500 tracking-widest uppercase mb-10"
        >
          数字が語る、今の現実
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display font-extrabold text-[40px] text-white leading-none mb-1">
                {s.value}
                <span className="text-red-500 text-[28px]">{s.unit}</span>
              </p>
              <p className="text-slate-400 text-[13px] leading-snug mb-2">{s.label}</p>
              <p className="text-slate-600 text-[10px] font-mono">{s.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
