"use client";
import { useState } from "react";

export default function ScanPage() {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ minHeight: "100vh", padding: "48px 24px", background: "#080808", color: "#fff" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <img src="/logo.png" alt="SecureBank" style={{ height: 44, width: "auto", marginBottom: 32 }} />
        <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 16 }}>
          あなたのサイトの<br />
          <span style={{ color: "#ff8c00" }}>脆弱性</span>を無料診断
        </h1>
        <div style={{ border: "1px solid #222", borderRadius: 8, padding: 32, background: "#0d0d0d", marginTop: 40 }}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 11, color: "#aaa", letterSpacing: 2, display: "block", marginBottom: 8 }}>DOMAIN</label>
            <input value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com"
              style={{ width: "100%", background: "#080808", border: "1px solid #222", borderRadius: 4, padding: "12px 16px", color: "#fff", fontSize: 16 }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 11, color: "#aaa", letterSpacing: 2, display: "block", marginBottom: 8 }}>EMAIL</label>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email"
              style={{ width: "100%", background: "#080808", border: "1px solid #222", borderRadius: 4, padding: "12px 16px", color: "#fff", fontSize: 14 }} />
          </div>
          <button style={{ width: "100%", padding: 14, background: "#ff8c00", color: "#000", border: "none", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            確認コードを送信する →
          </button>
        </div>
      </div>
    </div>
  );
}