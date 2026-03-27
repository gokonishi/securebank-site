import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="セキュア・バンク株式会社"
                width={1536}
                height={1024}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              AIによる攻撃を再現し、<br />
              企業のセキュリティ対策を一体支援します。
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              〒150-0002 東京都渋谷区渋谷1-17-8<br />松岡渋谷ビル
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-5">
              サイトマップ
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "トップ" },
                { href: "/services", label: "サービス" },
                { href: "/company", label: "会社概要" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-5">
              まずはご相談を
            </p>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              初回相談は無料です。<br />現状のリスクを一緒に確認しましょう。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-brand text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-glow"
            >
              無料相談はこちら
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-slate-600">
            © 2026 セキュア・バンク株式会社 All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            日本エンタープライズ株式会社グループ
          </p>
        </div>
      </div>
    </footer>
  );
}
