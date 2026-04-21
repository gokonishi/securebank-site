"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ─── Phase 01: Asset Discovery ─── */
const assetNodes = [
  { id: "ip1",  label: "203.0.113.1",     type: "IP",     x: 20,  y: 15 },
  { id: "ip2",  label: "198.51.100.42",   type: "IP",     x: 75,  y: 10 },
  { id: "dom1", label: "api.example.com", type: "Domain", x: 50,  y: 35 },
  { id: "dom2", label: "admin.example.com",type:"Domain", x: 15,  y: 55 },
  { id: "url1", label: "/api/v1/users",   type: "URL",    x: 80,  y: 55 },
  { id: "api1", label: "GraphQL Endpoint",type: "API",    x: 45,  y: 70 },
  { id: "api2", label: "OAuth2 Token",    type: "API",    x: 20,  y: 82 },
  { id: "url2", label: "/.env (exposed)", type: "VULN",   x: 72,  y: 80 },
];
const edges = [
  ["ip1","dom1"],["ip2","dom1"],["dom1","url1"],
  ["dom1","dom2"],["dom2","api2"],["url1","api1"],
  ["api1","url2"],["dom1","api1"],
];
const typeColors: Record<string,string> = {
  IP:"#06b6d4", Domain:"#8b5cf6", URL:"#f59e0b", API:"#22c55e", VULN:"#ef4444"
};

function Phase01Visual() {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setVisible(v => Math.min(v + 1, assetNodes.length)), 350);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] bg-[#0d0d0d] rounded-xl border border-white/10 overflow-hidden p-4">
      <div className="absolute top-3 left-4 text-[10px] font-mono text-slate-500 tracking-widest">ASSET MAP — LIVE SCAN</div>
      <svg viewBox="0 0 100 100" className="w-full h-full mt-4">
        {/* Edges */}
        {edges.map(([a, b], i) => {
          const na = assetNodes.find(n => n.id === a)!;
          const nb = assetNodes.find(n => n.id === b)!;
          const aIdx = assetNodes.findIndex(n => n.id === a);
          const bIdx = assetNodes.findIndex(n => n.id === b);
          if (aIdx >= visible || bIdx >= visible) return null;
          return (
            <motion.line
              key={i}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke={na.type === "VULN" || nb.type === "VULN" ? "#ef4444" : "rgba(255,255,255,0.12)"}
              strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          );
        })}
        {/* Nodes */}
        {assetNodes.map((node, i) => {
          if (i >= visible) return null;
          const color = typeColors[node.type];
          const isVuln = node.type === "VULN";
          return (
            <g key={node.id}>
              {isVuln && (
                <motion.circle
                  cx={node.x} cy={node.y} r={4}
                  fill="rgba(239,68,68,0.2)"
                  animate={{ r: [3, 6, 3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
              <motion.circle
                cx={node.x} cy={node.y} r={isVuln ? 2 : 1.5}
                fill={color}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.text
                x={node.x + 2.5} y={node.y + 1}
                fontSize="3.5" fill={color}
                className="font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {node.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
      {/* Legend */}
      <div className="absolute bottom-3 left-4 flex gap-3 flex-wrap">
        {Object.entries(typeColors).map(([type, color]) => (
          <span key={type} className="flex items-center gap-1 text-[9px] font-mono" style={{ color }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: color }} />
            {type}
          </span>
        ))}
      </div>
      {/* Counter */}
      {visible > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-3 right-4 text-[10px] font-mono text-cyan-400"
        >
          {visible} assets detected
        </motion.div>
      )}
    </div>
  );
}

/* ─── Phase 02: Attack Simulation ─── */
const attackSteps = [
  { tag: "RECON",   color: "text-cyan-400",   text: "Target: api.example.com — fingerprinting..." },
  { tag: "SCAN",    color: "text-yellow-400",  text: "Open ports: 80, 443, 8080, 3306 detected" },
  { tag: "FUZZ",    color: "text-purple-400",  text: "Injecting payloads → /api/v1/users?id=*" },
  { tag: "EXPLOIT", color: "text-red-400",     text: "SQLi confirmed → CVE-2023-1234 triggered" },
  { tag: "VERIFY",  color: "text-red-400",     text: "Data extracted: 12,847 user records" },
  { tag: "CHAIN",   color: "text-orange-400",  text: "Pivoting to internal network (10.0.0.0/8)" },
  { tag: "PWNED",   color: "text-green-400",   text: "Initial foothold established ✓ Evidence saved" },
];

function Phase02Visual() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCount(v => Math.min(v + 1, attackSteps.length)), 800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full bg-[#0d0d0d] rounded-xl border border-white/10 overflow-hidden">
      <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-[11px] font-mono text-slate-400">attack_simulation — agent_v2</span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] text-red-400 font-mono">LIVE</span>
        </span>
      </div>
      <div className="p-5 space-y-3 min-h-[220px]">
        {attackSteps.slice(0, count).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3 items-start font-mono text-[12px]"
          >
            <span className={`shrink-0 px-1.5 py-0.5 text-[9px] font-bold border rounded ${step.color} border-current`}>
              {step.tag}
            </span>
            <span className="text-slate-300">{step.text}</span>
          </motion.div>
        ))}
        {count > 0 && count < attackSteps.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block w-2 h-3.5 bg-red-400 ml-1"
          />
        )}
      </div>
      {count >= attackSteps.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-5 pb-4 pt-0"
        >
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2.5 text-[12px] font-mono text-red-400">
            ⚠ 7 vulnerabilities confirmed · Attack chain documented · Report ready
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ─── Phase 03: Evidence & Report ─── */
const findings = [
  { id: "SB-001", severity: "Critical", title: "SQLインジェクション (認証バイパス)", cvss: "9.8" },
  { id: "SB-002", severity: "High",     title: "機密ファイル露出 (.env, config.yml)", cvss: "8.2" },
  { id: "SB-003", severity: "High",     title: "セッション固定攻撃 (OAuth2)", cvss: "7.5" },
  { id: "SB-004", severity: "Medium",   title: "XSS — 管理画面コメント欄", cvss: "6.1" },
];
const severityColor: Record<string,string> = {
  Critical:"text-red-400 border-red-500/40 bg-red-500/10",
  High:"text-orange-400 border-orange-500/40 bg-orange-500/10",
  Medium:"text-yellow-400 border-yellow-500/40 bg-yellow-500/10",
  Low:"text-slate-400 border-slate-500/40 bg-slate-500/10",
};

function Phase03Visual() {
  const ref = { current: null };
  return (
    <div className="w-full bg-[#0d0d0d] rounded-xl border border-white/10 overflow-hidden">
      {/* Report header */}
      <div className="bg-[#111] px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-mono text-slate-500 tracking-widest mb-0.5">SECUREBANK REDTEAM AI</p>
          <p className="text-white font-bold text-sm">セキュリティ診断レポート</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-slate-500 font-mono">RISK SCORE</p>
          <p className="text-2xl font-extrabold text-red-400 font-mono leading-none">78</p>
          <p className="text-[9px] text-red-400/60 font-mono">CRITICAL</p>
        </div>
      </div>

      {/* Severity bar */}
      <div className="px-5 py-3 border-b border-white/10">
        <div className="flex gap-4 text-[11px] font-mono">
          {[["Critical","2","text-red-400"],["High","5","text-orange-400"],["Medium","12","text-yellow-400"],["Low","8","text-slate-400"]].map(([label, count, color]) => (
            <div key={label} className="text-center">
              <p className={`text-lg font-extrabold ${color}`}>{count}</p>
              <p className="text-slate-600 text-[9px]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Findings */}
      <div className="p-3 space-y-2">
        {findings.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 bg-[#111] rounded-lg px-3 py-2"
          >
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border font-mono ${severityColor[f.severity]}`}>
              {f.severity}
            </span>
            <span className="text-[11px] text-slate-300 flex-1 truncate">{f.title}</span>
            <span className="text-[10px] font-mono text-slate-500 shrink-0">CVSS {f.cvss}</span>
          </motion.div>
        ))}
      </div>
      <div className="px-5 pb-4 pt-1">
        <p className="text-[10px] text-slate-600 font-mono text-center">
          全証拠 (リクエスト/レスポンス/攻撃ログ) 添付済み · 経営層提出用PDF出力対応
        </p>
      </div>
    </div>
  );
}

/* ─── Export ─── */
export default function PhaseVisual({ phase }: { phase: 1 | 2 | 3 }) {
  if (phase === 1) return <Phase01Visual />;
  if (phase === 2) return <Phase02Visual />;
  return <Phase03Visual />;
}
