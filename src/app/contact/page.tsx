import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | セキュアバンク株式会社",
  description: "セキュアバンク株式会社へのお問い合わせページです。",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">お問い合わせ</h1>
      <p className="mt-4">お問い合わせフォームは現在調整中です。</p>
    </main>
  );
}