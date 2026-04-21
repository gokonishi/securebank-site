"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import PhaseVisual from "./PhaseVisual";

interface PhaseSectionProps {
  phase: 1 | 2 | 3;
  title: string;
  body: string[];
  reverse?: boolean; // true = visual left, text right
}

export default function PhaseSection({ phase, title, body, reverse = false }: PhaseSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const phaseLabel = `PHASE 0${phase}`;
  const phaseSubLabel = [
    "Asset Discovery",
    "Attack Simulation",
    "Evidence & Report",
  ][phase - 1];

  const textContent = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 24 : -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center"
    >
      {/* Phase badge */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs font-bold text-red-500 tracking-widest">{phaseLabel}</span>
        <span className="w-8 h-px bg-red-500/40" />
        <span className="font-mono text-xs text-slate-500 tracking-wider">{phaseSubLabel}</span>
      </div>

      <h2 className="font-display font-extrabold text-[28px] md:text-[36px] leading-[1.2] tracking-tight text-white mb-6">
        {title}
      </h2>

      <div className="space-y-2">
        {body.map((line, i) => (
          <p key={i} className={`text-[16px] leading-[1.8] ${line === "" ? "mt-2" : "text-slate-400"}`}>
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );

  const visualContent = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <PhaseVisual phase={phase} />
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className="bg-black py-20 relative overflow-hidden border-t border-white/5"
    >
      {/* Phase number watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-mono font-extrabold text-[160px] leading-none text-white/[0.02] pointer-events-none select-none"
      >
        0{phase}
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
          {textContent}
          {visualContent}
        </div>
      </div>
    </section>
  );
}
