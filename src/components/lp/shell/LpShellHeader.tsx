"use client";

import Link from "next/link";
import { useState } from "react";
import LpCtaLink from "@/components/lp/blocks/LpCtaLink";

const navItems = [
  { label: "AI時代の脅威", href: "#limits" },
  { label: "解決策", href: "#value" },
  { label: "よくある質問", href: "#faq" },
];

export default function LpShellHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/lp/ai-attack-simulation" className="flex items-center gap-2">
          <span className="font-display font-extrabold text-lg tracking-tight text-white">
            SECUREBANK{" "}
          </span>
          <span className="font-display font-extrabold text-lg tracking-tight text-red-500">
            RedTeam AI
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden md:inline-flex text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            ← SecureBankについて
          </Link>
          <LpCtaLink
            event="header_cta_click"
            section="header"
            label="お問い合わせ"
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-red-500 rounded hover:bg-red-600 transition-colors duration-150"
          >
            お問い合わせ →
          </LpCtaLink>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link href="/" className="text-xs text-slate-500">
            ← SecureBankについて
          </Link>
        </div>
      )}
    </header>
  );
}
