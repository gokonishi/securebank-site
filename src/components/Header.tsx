"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/services", label: "サービス" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="セキュア・バンク株式会社"
            width={1536}
            height={1024}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-sub hover:text-brand-text transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden md:inline-flex btn-grad btn-pulse !py-2 !px-5 !text-sm">
          無料相談はこちら
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-brand-sub"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span className={`block w-5 h-0.5 bg-current mb-1.5 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current mb-1.5 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-brand-border shadow-lg">
          <nav className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-brand-sub hover:text-brand-blue py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-grad mt-2 !text-sm !py-2.5" onClick={() => setOpen(false)}>
              無料相談はこちら
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
