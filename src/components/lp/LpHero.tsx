"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const terminalLines = [
  { delay: 0,    color: "text-slate-500", text: "[+] SECUREBANK Neural Network を初期化中..." },
  { delay: 0.6,  color: "text-green-400", text: "[+] セキュアな C2 接続を確立... [OK]" },
  { delay: 1.2,  color: "text-yellow-400", text: "[!] RedTeam AI Engine v2.0 を起動中" },
  { delay: 1.8,  color: "text-cyan-400",  text: "[>] 攻撃対象の外部公開資産を列挙中..." },
  { delay: 2.4,  color: "text-white",     text: "[>] アクティブなサブドメイン 1,204 件を検出" },
  { delay: 3.0,  color: "text-cyan-400",  text: "[>] LLM 経由でロジック脆弱性を解析中..." },
  { delay: 3.6,  color: "text-red-400",   text: "[!] 警告: RCE 脆弱性を検出 (CVE-2023-XXXX)" },
  { delay: 4.2,  color: "text-yellow-400", text: "[+] Exploit ペイロードを自動生成中..." },
  { delay: 4.8,  color: "text-green-400", text: "[*] Exploit 成功。初期侵入を確立" },
  { delay: 5.4,  color: "text-green-400", text: "[*] メモリ常駐型インプラントを注入中..." },
  { delay: 6.0,  color: "text-red-500 font-bold", text: "[>] システムを掌握。コマンド待機中..." },
];

function TerminalLine({ line, show }: { line: typeof terminalLines[0]; show: boolean }) {
  if (!show) return null;
  return (
    <motion.p
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`font-mono text-sm leading-6 ${line.color}`}
    >
      {line.text}
    </motion.p>
  );
}

export default function LpHero() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      const timer = setTimeout(() => {
        setVisibleCount(i + 1);
      }, line.delay * 1000);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden pt-16">
      {/* Particle dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Red glow top-left */}
      <div
        className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        {/* Mission tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-red-500/50 rounded-full text-red-400 text-xs font-bold tracking-widest uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          MISSION: AUTONOMOUS OFFENSIVE SECURITY
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-4"
            >
              天才ハッカーの思考回路を、
              <br />
              <span className="text-red-500">AIがマシンの速度で実行する。</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-slate-400 text-[17px] leading-[1.8] mb-10 max-w-lg"
            >
              SECUREBANK RedTeam AI は、次世代の完全自律型・攻撃的セキュリティエンジンです。
              従来のペネトレーションテストが数週間かける工程を、
              わずかな時間とコストで実現します。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded transition-colors duration-150"
              >
                診断を今すぐ始める →
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white font-semibold text-sm rounded hover:bg-white/5 transition-colors duration-150"
              >
                診断レポートのサンプルを見る
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <p className="text-xs text-slate-500 mb-4 tracking-widest uppercase">
                世界の脆弱性報告プログラムで有効性を実証済み
              </p>
              <div className="flex gap-3 flex-wrap">
                {["HACKERONE VALIDATED", "SECUREBANK SRC PROVEN"].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 border border-white/20 text-xs font-bold text-slate-300 tracking-widest"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(239,68,68,0.15)]">
              {/* Window bar */}
              <div className="bg-[#1a1a1a] px-5 py-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-slate-400 font-mono">
                  bash — redteam_agent
                </span>
              </div>
              {/* Terminal body */}
              <div className="bg-[#0d0d0d] p-6 min-h-[320px] space-y-1.5">
                {terminalLines.map((line, i) => (
                  <TerminalLine key={i} line={line} show={i < visibleCount} />
                ))}
                {visibleCount >= terminalLines.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-green-400 ml-1"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
