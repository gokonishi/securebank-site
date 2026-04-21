"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const attackChain = [
  { step: "偵察", detail: "公開資産スキャン", color: "border-cyan-500/50 text-cyan-400" },
  { step: "侵入口",detail: "SQLi / IDOR検証",  color: "border-yellow-500/50 text-yellow-400" },
  { step: "侵害",  detail: "認証バイパス成功",  color: "border-orange-500/50 text-orange-400" },
  { step: "横展開",detail: "内部NWへの到達",    color: "border-red-500/50 text-red-400" },
  { step: "証拠",  detail: "全ログ記録・出力",   color: "border-green-500/50 text-green-400" },
];

const remediations = [
  { id: "SB-001", title: "SQLインジェクション",   action: "プリペアドステートメント実装", priority: "即対応", color: "text-red-400" },
  { id: "SB-002", title: "機密ファイル露出",       action: ".htaccess / nginx設定修正",   priority: "即対応", color: "text-red-400" },
  { id: "SB-003", title: "セッション固定攻撃",     action: "OAuthフロー再実装",           priority: "1週間", color: "text-orange-400" },
  { id: "SB-004", title: "XSS（管理画面）",       action: "入力値サニタイズ追加",         priority: "2週間", color: "text-yellow-400" },
];

export default function ReportSample() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#080808] py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs text-red-500 tracking-widest uppercase mb-4">REPORT SAMPLE</p>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] leading-[1.15] tracking-tight text-white mb-5">
            机上の診断ではなく、
            <br />
            <span className="text-red-500">"実際に侵入できる証拠"</span>
          </h2>
          <p className="text-slate-400 text-[16px] max-w-xl mx-auto leading-relaxed">
            仮説ではなく、実証。再現可能な攻撃だけをレポートします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Executive Summary + Severity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Executive Summary */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-[10px] text-slate-500 tracking-widest">EXECUTIVE SUMMARY</p>
                <span className="px-2 py-0.5 bg-red-500/15 border border-red-500/30 text-red-400 text-[10px] font-bold rounded font-mono">
                  CRITICAL RISK
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                対象システムに対し27の攻撃シナリオを実行。
                うち<strong className="text-white">7件のExploitに成功</strong>し、顧客データへの不正アクセスおよび
                内部ネットワークへの侵入経路を確認しました。
              </p>
              {/* Severity breakdown */}
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-white/10">
                {[
                  { label: "Critical", count: 2, color: "text-red-400" },
                  { label: "High",     count: 5, color: "text-orange-400" },
                  { label: "Medium",   count: 12, color: "text-yellow-400" },
                  { label: "Low",      count: 8, color: "text-slate-400" },
                ].map(({ label, count, color }) => (
                  <div key={label} className="text-center">
                    <p className={`text-2xl font-extrabold font-mono ${color}`}>{count}</p>
                    <p className="text-[9px] text-slate-600 font-mono mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Attack Chain */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-6">
              <p className="font-mono text-[10px] text-slate-500 tracking-widest mb-4">ATTACK CHAIN</p>
              <div className="flex items-center gap-1 flex-wrap">
                {attackChain.map((item, i) => (
                  <div key={item.step} className="flex items-center gap-1">
                    <div className={`border rounded px-2 py-1.5 text-center ${item.color}`}>
                      <p className="text-[9px] font-mono font-bold">{item.step}</p>
                      <p className="text-[8px] text-slate-500 mt-0.5 leading-none">{item.detail}</p>
                    </div>
                    {i < attackChain.length - 1 && (
                      <span className="text-slate-700 text-xs font-mono">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Vulnerability list + Remediation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Vulnerability list */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-6">
              <p className="font-mono text-[10px] text-slate-500 tracking-widest mb-4">VULNERABILITY LIST</p>
              <div className="space-y-2">
                {remediations.map((r) => (
                  <div key={r.id} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                    <span className="font-mono text-[9px] text-slate-600 shrink-0 w-14">{r.id}</span>
                    <span className="text-slate-300 text-[12px] flex-1">{r.title}</span>
                    <span className={`text-[9px] font-bold font-mono shrink-0 ${r.color}`}>{r.priority}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Remediation / Evidence note */}
            <div className="bg-[#111] border border-white/10 rounded-xl p-6">
              <p className="font-mono text-[10px] text-slate-500 tracking-widest mb-4">EVIDENCE & REMEDIATION</p>
              <div className="space-y-3">
                {[
                  "HTTPリクエスト / レスポンス全ログ添付",
                  "攻撃再現スクリプト（PoC）提供",
                  "CVSS v3.1 スコアリング済み",
                  "対応策を優先度順に整理",
                  "経営層向けエグゼクティブPDF出力",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-4 h-4 border border-red-500/50 rounded flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-[13px]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
