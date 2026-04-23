"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavChild = { href: string; label: string; description?: string };
type NavItem = { href?: string; label: string; children?: NavChild[]; highlight?: boolean };

const navItems: NavItem[] = [
  {
    href: "/lp/ai-attack-simulation",
    label: "AI攻撃シミュレーション",
    highlight: true,
  },
  { href: "/services", label: "サービス" },
  { href: "/case-studies", label: "導入事例" },
  {
    label: "インサイト",
    children: [
      { href: "/cyber-news", label: "サイバー攻撃ニュース", description: "攻撃動向の解説" },
      { href: "/news", label: "お知らせ", description: "プレスリリース等" },
    ],
  },
  {
    label: "会社概要",
    children: [
      { href: "/company", label: "会社情報", description: "基本情報・事業内容" },
      { href: "/company/message", label: "代表挨拶", description: "代表取締役 小西 剛" },
    ],
  },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="text-sm font-medium text-brand-sub hover:text-brand-text transition-colors flex items-center gap-1"
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                    <div className="min-w-[260px] bg-white border border-brand-border rounded-xl shadow-xl py-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-3 hover:bg-slate-50 transition-colors"
                        >
                          <p className="text-sm font-semibold text-brand-text">{c.label}</p>
                          {c.description && (
                            <p className="text-[12px] text-brand-sub mt-0.5">{c.description}</p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={
                  item.highlight
                    ? "text-sm font-bold text-brand-blue hover:opacity-80 transition-opacity flex items-center gap-1.5"
                    : "text-sm font-medium text-brand-sub hover:text-brand-text transition-colors"
                }
              >
                {item.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse" />
                )}
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex btn-grad btn-pulse !py-2 !px-5 !text-sm"
        >
          無料診断を試す
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
          <nav className="px-6 py-5 flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <details key={item.label} className="group">
                  <summary className="flex items-center justify-between py-2.5 text-sm font-medium text-brand-sub cursor-pointer list-none">
                    {item.label}
                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pl-4 pb-2 flex flex-col gap-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="text-[13px] text-brand-sub hover:text-brand-blue py-1"
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={
                    item.highlight
                      ? "py-2.5 text-sm font-bold text-brand-blue"
                      : "py-2.5 text-sm font-medium text-brand-sub hover:text-brand-blue"
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="btn-grad mt-3 !text-sm !py-2.5"
              onClick={() => setOpen(false)}
            >
              無料診断を試す
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
