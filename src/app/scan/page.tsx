"use client";
import { useState } from "react";

export default function ScanPage() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>テスト: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>クリック</button>
    </div>
  );
}