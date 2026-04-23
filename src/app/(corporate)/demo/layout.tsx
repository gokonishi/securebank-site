import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15分デモ｜攻撃再現とレポート形式をご覧いただく",
  description:
    "AI攻撃シミュレーションのライブデモ（15分）。攻撃再現、証拠付きレポートのサンプル、Layer 0〜5 の検証ポイントをオンラインでご紹介します。",
  alternates: { canonical: "https://securebank.co.jp/demo" },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
