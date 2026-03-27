import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | セキュア・バンク株式会社",
  description: "セキュア・バンク株式会社へのお問い合わせはこちらです。初回相談は無料です。",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-brand-text mb-4">お問い合わせ</h1>
        <p className="text-brand-sub mb-10">初回相談は無料です。現状のリスクを一緒に確認しましょう。</p>
        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1" htmlFor="name">
              お名前
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1" htmlFor="email">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="example@company.co.jp"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1" htmlFor="message">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
              placeholder="ご相談内容をご記入ください"
            />
          </div>
          <button
            type="submit"
            className="btn-grad !py-3"
          >
            送信する
          </button>
        </form>
      </div>
    </div>
  );
}
