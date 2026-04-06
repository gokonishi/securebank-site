"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🔥",
    title: "1万件超の実証済み攻撃手法",
    desc: "最新のExploitペイロードを1万件以上収録。グローバルの脅威情報とリアルタイムで同期し、ゼロデイ・Nデイの脅威にも対応します。",
  },
  {
    icon: "🎯",
    title: "確実に再現できる脆弱性のみを報告",
    desc: "理論上のリスクや誤検知（フォールスポジティブ）を排除。実際のExploitコードで検証済みの脆弱性のみを報告するため、対応優先度が明確になります。",
  },
  {
    icon: "🔬",
    title: "診断範囲の壁を取り払う",
    desc: "従来の診断は限られた時間とスコープがボトルネックでした。自律型エンジンはその制約を超え、隠れたインターフェース群まで網羅的に検査します。",
  },
  {
    icon: "🕸️",
    title: "想定外の侵入経路まで可視化",
    desc: "一般的なアプリケーションテストをはるかに超える深度で検査し、複雑なロジックの連鎖や稀なエッジケースを炙り出します。ビジネスに致命的な損害をもたらすリスクだけに焦点を当てます。",
  },
  {
    icon: "🤝",
    title: "セキュリティ担当者の力を最大化する",
    desc: "エキスパートを置き換えるのではなく、大規模な調査作業とExploit検証を自動化することで、専門家をより高度なアーキテクチャ設計に集中させます。",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LpFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="bg-[#0a0a0a] py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <h2 className="font-display font-extrabold text-[36px] md:text-[48px] leading-[1.15] tracking-tight text-white mb-4 text-center">
            <span className="text-red-500">深さ・確実性・スケール</span>を極めた
            <br />
            自律型エンジン
          </h2>
          <p className="text-slate-400 text-center text-[16px] max-w-2xl mx-auto leading-relaxed">
            ペネトレーションテストをマシンスケールの自動診断へと進化させ、
            人手では見落とされがちな深層の攻撃経路を明らかにします。
          </p>
        </motion.div>

        {/* 3 + 2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5"
        >
          {features.slice(0, 3).map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="bg-[#111] border border-white/10 rounded-xl p-7 hover:border-red-500/40 transition-colors duration-200"
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-white font-bold text-[15px] mb-3 leading-snug">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {features.slice(3).map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="bg-[#111] border border-white/10 rounded-xl p-7 hover:border-red-500/40 transition-colors duration-200"
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-white font-bold text-[15px] mb-3 leading-snug">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
