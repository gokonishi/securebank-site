"use client";
import { useState, useCallback, useRef } from "react";
import type { ScanResult, ScanProgress } from "@/lib/scanner/types";

export function useScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState<ScanProgress[]>([]);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const reset = useCallback(() => {
    setIsScanning(false);
    setProgress([]);
    setResult(null);
    setError(null);
    if (pollingRef.current) clearInterval(pollingRef.current);
  }, []);

  const startScan = useCallback(async (domain: string, email: string, agreedMarketing: boolean = false) => {
    reset();
    setIsScanning(true);

    const progressMessages = [
      { step: "初期化", detail: `${domain} の診断を開始します...` },
      { step: "診断中", detail: "HTTPヘッダーを確認しています..." },
      { step: "診断中", detail: "管理パスを確認しています..." },
      { step: "診断中", detail: "サブドメインを確認しています..." },
      { step: "診断中", detail: "DNSレコードを確認しています..." },
      { step: "診断中", detail: "Cookieセキュリティを確認しています..." },
      { step: "診断中", detail: "レポートを生成しています..." },
    ];

    let msgIndex = 0;
    setProgress([{ ...progressMessages[0], completed: false }]);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain, email, agreedMarketing }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "診断の開始に失敗しました");
      }

      const { jobId } = await res.json();

      // プログレスメッセージを定期的に更新
      const msgTimer = setInterval(() => {
        msgIndex = Math.min(msgIndex + 1, progressMessages.length - 1);
        setProgress(prev => [...prev, { ...progressMessages[msgIndex], completed: false }]);
      }, 8000);

      // ポーリングで結果確認
      pollingRef.current = setInterval(async () => {
        try {
          const pollRes = await fetch(`/api/scan?jobId=${jobId}`);
          const data = await pollRes.json();

          if (data.status === "complete") {
            clearInterval(pollingRef.current!);
            clearInterval(msgTimer);
            setProgress(prev => [...prev, { step: "完了", detail: "診断が完了しました", completed: true }]);
            setResult(data.result);
            setIsScanning(false);
          } else if (data.status === "error") {
            clearInterval(pollingRef.current!);
            clearInterval(msgTimer);
            throw new Error(data.result?.error || "診断中にエラーが発生しました");
          }
        } catch (err) {
          clearInterval(pollingRef.current!);
          setError(err instanceof Error ? err.message : "エラーが発生しました");
          setIsScanning(false);
        }
      }, 3000);

    } catch (err) {
      setError(err instanceof Error ? err.message : "予期しないエラーが発生しました");
      setIsScanning(false);
    }
  }, [reset]);

  return { isScanning, progress, result, error, startScan, reset };
}