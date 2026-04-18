"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "うちは小さい会社ですが、本当に攻撃対象になるのですか？",
    a: "攻撃はAIで自動化されており、企業規模を問わず標的になります。対策が手薄な中小企業はむしろ狙われやすくなっています。",
  },
  {
    q: "いきなり契約が必要ですか？",
    a: "いいえ。まずは30分の無料相談から開始し、現状の把握とご提案を行います。その後の検討はご自由にしていただけます。",
  },
  {
    q: "専門知識がなくても相談できますか？",
    a: "はい。経営者の方や情報システム担当者の方にも分かる言葉でご説明します。専門用語は必要最小限に抑えます。",
  },
  {
    q: "すでに他社のセキュリティサービスを使っていますが、意味はありますか？",
    a: "従来の診断は「既知の脆弱性」を前提にしています。AI攻撃シミュレーションは「実際に侵入できるか」を検証するため、既存対策の盲点を補完できます。",
  },
];

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
