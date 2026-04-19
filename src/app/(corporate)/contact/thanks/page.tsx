import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせありがとうございます | セキュア・バンク株式会社",
  description: "お問い合わせを受け付けました。担当者より2営業日以内にご連絡いたします。",
};

export default function ContactThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-32 bg-white">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-brand-text mb-4">
          お問い合わせ<br />ありがとうございます
        </h1>

        <p className="text-brand-sub text-[17px] leading-[1.8] mb-10">
          お問い合わせを受け付けました。<br />
          担当者より<strong className="text-brand-text">2営業日以内</strong>にご連絡いたします。
        </p>

        <div className="bg-brand-section rounded-2xl px-8 py-6 mb-10 text-left space-y-3">
          <p className="text-sm font-semibold text-brand-text">お急ぎの場合はこちらへ</p>
          <p className="text-sm text-brand-sub">
            メール：
            <a
              href="mailto:sb-info@securebank.co.jp"
              className="text-brand-blue hover:underline font-medium"
            >
              sb-info@securebank.co.jp
            </a>
          </p>
        </div>

        <Link href="/" className="btn-grad btn-pulse inline-flex">
          トップページへ戻る
        </Link>
      </div>
    </main>
  );
}
