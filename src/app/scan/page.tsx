"use client";

import { useState } from "react";
import { useScanner } from "@/hooks/use-scanner";
import type { Finding, ScanResult } from "@/lib/scanner/types";

const severityConfig = {
  critical: { label: "重大", color: "#ff3b3b", bg: "#1a0000", border: "#ff3b3b" },
  high:     { label: "高",   color: "#ff8c00", bg: "#1a0a00", border: "#ff8c00" },
  medium:   { label: "中",   color: "#ffd700", bg: "#1a1600", border: "#ffd700" },
  low:      { label: "低",   color: "#6bb5ff", bg: "#00101a", border: "#6bb5ff" },
  info:     { label: "情報", color: "#888",    bg: "#111",    border: "#333"    },
  good:     { label: "良好", color: "#00e676", bg: "#001a0a", border: "#00e676" },
};

function ScoreRing({ score }: { score: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 80 ? "#00e676" : score >= 50 ? "#ffd700" : "#ff3b3b";
  return (
    <div style={{ position: "relative", width: 140, height: 140 }}>
      <svg width="140" height="140" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="70" cy="70" r={r} fill="none" stroke="#1a1a1a" strokeWidth="10" />
        <circle cx="70" cy="70" r={r} fill="none" stroke={color} strokeWidth="10" strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: "stroke-dashoffset 1.2s ease" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 36, fontWeight: 700, color, fontFamily: "'DM Mono', monospace" }}>{score}</span>
        <span style={{ fontSize: 11, color: "#666", letterSpacing: 2 }}>SCORE</span>
      </div>
    </div>
  );
}

function FindingCard({ f }: { f: Finding }) {
  const [open, setOpen] = useState(false);
  const cfg = severityConfig[f.severity];
  return (
    <div onClick={() => setOpen(!open)} style={{ border: `1px solid ${open ? cfg.border : "#222"}`, borderLeft: `3px solid ${cfg.border}`, borderRadius: 6, padding: "14px 16px", cursor: "pointer", background: open ? cfg.bg : "transparent", transition: "all 0.2s", marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`, padding: "2px 8px", borderRadius: 3, fontFamily: "'DM Mono', monospace", minWidth: 44, textAlign: "center" }}>{cfg.label}</span>
        <span style={{ color: "#ddd", fontSize: 14, flex: 1 }}>{f.title}</span>
        <span style={{ color: "#444", fontSize: 12 }}>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #222" }}>
          <p style={{ color: "#aaa", fontSize: 13, lineHeight: 1.7, margin: "0 0 12px" }}>{f.description}</p>
          {f.evidence && (
            <div style={{ background: "#0a0a0a", border: "1px solid #222", borderRadius: 4, padding: "8px 12px", marginBottom: 12, fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#888" }}>{f.evidence}</div>
          )}
          <div style={{ background: "#001a08", border: "1px solid #00e67633", borderRadius: 4, padding: "10px 14px" }}>
            <span style={{ fontSize: 11, color: "#00e676", letterSpacing: 1, display: "block", marginBottom: 4 }}>対策</span>
            <p style={{ color: "#8de8b0", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{f.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ResultView({ result }: { result: ScanResult }) {
  const criticalCount = result.findings.filter(f => f.severity === "critical").length;
  const highCount = result.findings.filter(f => f.severity === "high").length;
  const goodCount = result.findings.filter(f => f.severity === "good").length;
  const order: Finding["severity"][] = ["critical", "high", "medium", "low", "info", "good"];
  const sorted = [...result.findings].sort((a, b) => order.indexOf(a.severity) - order.indexOf(b.severity));
  return (
    <div style={{ animation: "fadeIn 0.5s ease" }}>
      <div style={{ border: "1px solid #222", borderRadius: 8, padding: "24px 28px", marginBottom: 20, background: "linear-gradient(135deg, #0d0d0d 0%, #111 100%)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <ScoreRing score={result.score} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: "#555", letterSpacing: 2, marginBottom: 6, fontFamily: "'DM Mono', monospace" }}>SCAN COMPLETE · {new Date(result.scannedAt).toLocaleString("ja-JP")}</div>
            <div style={{ fontSize: 20, color: "#fff", fontWeight: 600, marginBottom: 8 }}>{result.domain}</div>
            <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6, margin: "0 0 14px" }}>{result.summary}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {result.techStack.map((t, i) => (
                <span key={i} style={{ fontSize: 11, color: "#666", border: "1px solid #222", borderRadius: 3, padding: "2px 8px", fontFamily: "'DM Mono', monospace" }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {criticalCount > 0 && <div style={{ textAlign: "center" }}><div style={{ fontSize: 28, fontWeight: 700, color: "#ff3b3b", fontFamily: "'DM Mono', monospace" }}>{criticalCount}</div><div style={{ fontSize: 10, color: "#666", letterSpacing: 1 }}>重大</div></div>}
            {highCount > 0 && <div style={{ textAlign: "center" }}><div style={{ fontSize: 28, fontWeight: 700, color: "#ff8c00", fontFamily: "'DM Mono', monospace" }}>{highCount}</div><div style={{ fontSize: 10, color: "#666", letterSpacing: 1 }}>高リスク</div></div>}
            <div style={{ textAlign: "center" }}><div style={{ fontSize: 28, fontWeight: 700, color: "#00e676", fontFamily: "'DM Mono', monospace" }}>{goodCount}</div><div style={{ fontSize: 10, color: "#666", letterSpacing: 1 }}>良好</div></div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, color: "#555", letterSpacing: 2, marginBottom: 14, fontFamily: "'DM Mono', monospace" }}>FINDINGS · {result.findings.length}件</div>
        {sorted.map(f => <FindingCard key={f.id} f={f} />)}
      </div>
      <div style={{ border: "1px solid #ff8c0044", borderRadius: 8, padding: "24px 28px", background: "linear-gradient(135deg, #0d0800 0%, #1a0f00 100%)", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#ff8c00", letterSpacing: 2, marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>NEXT STEP</div>
        <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 600, margin: "0 0 10px" }}>より深い診断が必要ですか？</h3>
        <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, margin: "0 0 20px" }}>本診断は外部から観察可能な設定のみを確認しています。<br />セキュアバンクの攻撃シミュレーションでは、実際の攻撃手法を用いた<br />より詳細なペネトレーションテストが可能です。</p>
        <a href="https://securebank.co.jp/contact" style={{ display: "inline-block", background: "#ff8c00", color: "#000", fontWeight: 700, fontSize: 14, padding: "12px 32px", borderRadius: 4, textDecoration: "none", letterSpacing: 1 }}>攻撃シミュレーションを相談する →</a>
      </div>
    </div>
  );
}

export default function ScanPage() {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const { isScanning, progress, result, error, startScan, reset } = useScanner();
  const handleSubmit = () => { if (!domain || !email || !agreed) return; startScan(domain, email); };
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #fff; font-family: 'Syne', sans-serif; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(400%); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        input { outline: none; } input::placeholder { color: #333; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0d0d0d; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
      `}</style>
      <div style={{ minHeight: "100vh", padding: "48px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, display: "flex", alignItems: "center", gap: 16 }}>
            <img src="/logo.png" alt="SecureBank" style={{ height: 44, width: "auto" }} />
            <div style={{ fontSize: 10, color: "#555", letterSpacing: 2, fontFamily: "'DM Mono', monospace" }}>FREE SECURITY SCAN</div>
          </div>
          {!result && !isScanning && (
            <div style={{ animation: "fadeIn 0.5s ease" }}>
              <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>あなたのサイトの<br /><span style={{ color: "#ff8c00" }}>脆弱性</span>を無料診断</h1>
              <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7, marginBottom: 40 }}>ドメインを入力するだけで、外部から観察可能なセキュリティ設定を<br />AIが自動診断します。診断結果はメールでもお送りします。</p>
              <div style={{ border: "1px solid #1a1a1a", borderRadius: 8, padding: "32px", background: "#0d0d0d" }}>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 11, color: "#555", letterSpacing: 2, display: "block", marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>DOMAIN</label>
                  <input value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" style={{ width: "100%", background: "#080808", border: "1px solid #222", borderRadius: 4, padding: "12px 16px", color: "#fff", fontSize: 16, fontFamily: "'DM Mono', monospace" }} />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 11, color: "#555", letterSpacing: 2, display: "block", marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>EMAIL</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email" style={{ width: "100%", background: "#080808", border: "1px solid #222", borderRadius: 4, padding: "12px 16px", color: "#fff", fontSize: 14, fontFamily: "'DM Mono', monospace" }} />
                </div>
                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 24, cursor: "pointer" }}>
                  <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ marginTop: 2, accentColor: "#ff8c00" }} />
                  <span style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>診断対象のドメインを自分が所有・管理していることを確認しました。第三者のサイトへの無断診断は禁止します。</span>
                </label>
                <button onClick={handleSubmit} disabled={!domain || !email || !agreed} style={{ width: "100%", padding: "14px", background: domain && email && agreed ? "#ff8c00" : "#1a1a1a", color: domain && email && agreed ? "#000" : "#444", border: "none", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: domain && email && agreed ? "pointer" : "not-allowed", letterSpacing: 1, transition: "all 0.2s" }}>無料診断を開始する →</button>
              </div>
              <p style={{ textAlign: "center", fontSize: 11, color: "#333", marginTop: 20, fontFamily: "'DM Mono', monospace" }}>診断所要時間: 約1〜2分 · 完全無料 · クレジットカード不要</p>
            </div>
          )}
          {isScanning && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <div style={{ border: "1px solid #1a1a1a", borderRadius: 8, padding: "40px 32px", background: "#0d0d0d", marginBottom: 24, textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", border: "1px solid #222", position: "relative", margin: "0 auto 28px", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #ff8c00, transparent)", animation: "scan 1.5s ease-in-out infinite" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🔍</div>
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{domain} を診断中</div>
                <div style={{ fontSize: 12, color: "#555", fontFamily: "'DM Mono', monospace", animation: "blink 1s infinite" }}>{progress[progress.length - 1]?.detail || "初期化中..."}</div>
              </div>
              <div style={{ border: "1px solid #1a1a1a", borderRadius: 8, padding: "16px 20px", background: "#080808", fontFamily: "'DM Mono', monospace", fontSize: 11, maxHeight: 200, overflowY: "auto" }}>
                {progress.map((p, i) => (
                  <div key={i} style={{ color: p.completed ? "#00e676" : "#555", padding: "3px 0", display: "flex", alignItems: "center", gap: 8 }}>
                    <span>{p.completed ? "✓" : "·"}</span>
                    <span>{p.step}</span>
                    <span style={{ color: "#333" }}>·</span>
                    <span style={{ color: "#444", fontSize: 10 }}>{p.detail.slice(0, 60)}{p.detail.length > 60 ? "..." : ""}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {error && (
            <div style={{ border: "1px solid #ff3b3b44", borderRadius: 8, padding: "20px 24px", background: "#1a0000", marginBottom: 24 }}>
              <div style={{ color: "#ff3b3b", fontSize: 13, marginBottom: 12 }}>{error}</div>
              <button onClick={reset} style={{ background: "transparent", border: "1px solid #333", color: "#888", padding: "8px 16px", borderRadius: 4, cursor: "pointer", fontSize: 12 }}>やり直す</button>
            </div>
          )}
          {result && (
            <>
              <ResultView result={result} />
              <div style={{ textAlign: "center", marginTop: 24 }}>
                <button onClick={reset} style={{ background: "transparent", border: "1px solid #222", color: "#555", padding: "10px 24px", borderRadius: 4, cursor: "pointer", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>別のドメインを診断する</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}