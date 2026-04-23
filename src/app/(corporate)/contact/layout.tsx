import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ｜30分で、現状リスクを可視化する",
  description:
    "無料診断・15分デモ・個別相談の3つの入口からご相談いただけます。担当者より2営業日以内にご連絡いたします。",
  alternates: {
    canonical: "https://securebank.co.jp/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
