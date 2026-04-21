"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { faqs } from "./faq.data";

function FaqItem({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left gap-4"
      >
        <span className="text-white font-bold text-base md:text-lg">{q}</span>
        <span
          className={`text-red-500 text-2xl transition-transform duration-200 shrink-0 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-6 text-slate-400 leading-relaxed text-sm md:text-base">
          {a}
        </p>
      )}
    </div>
  );
}

export default function Faq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="bg-black py-24" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-display font-extrabold text-[28px] md:text-[40px] leading-tight tracking-tight text-white mb-12"
        >
          よくあるご質問
        </motion.h2>
        <div>
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
