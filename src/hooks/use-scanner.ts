"use client";
import { useState, useCallback } from "react";
import type { ScanResult, ScanProgress } from "@/lib/scanner/types";

export function useScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState<ScanProgress[]>([]);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setIsScanning(false);
    setProgress([]);
    setResult(null);
    setError(null);
  }, []);

  const startScan = useCallback(async (domain: string, email: string, agreedMarketing: boolean = false) => {
    reset();
    setIsScanning(true);
    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain, email, agreedMarketing }),
      });
      if (!response.ok) {
        const d = await response.json();
        throw new Error(d.error || "診断の開始に失敗しました");
      }
      const reader = response.body?.getReader();
      if (!reader) throw new Error("ストリームの読み込みに失敗しました");
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";
        for (const chunk of lines) {
          const eventMatch = chunk.match(/^event: (.+)$/m);
          const dataMatch = chunk.match(/^data: (.+)$/m);
          if (!eventMatch || !dataMatch) continue;
          const data = JSON.parse(dataMatch[1]);
          if (eventMatch[1] === "progress") setProgress((prev) => [...prev, data]);
          if (eventMatch[1] === "complete") { setResult(data); setIsScanning(false); }
          if (eventMatch[1] === "error") { setError(data.message); setIsScanning(false); }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "予期しないエラーが発生しました");
      setIsScanning(false);
    }
  }, [reset]);

  return { isScanning, progress, result, error, startScan, reset };
}
