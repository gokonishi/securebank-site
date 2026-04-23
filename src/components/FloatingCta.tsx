"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HIDDEN_PATHS = ["/contact", "/contact/thanks", "/demo"];

export default function FloatingCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return null;
  }
  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="hidden md:flex items-stretch gap-0 rounded-2xl shadow-2xl overflow-hidden border border-white/30 backdrop-blur bg-white/95">
        <Link
          href="/contact?purpose=diagnosis"
          className="flex items-center gap-3 px-5 py-4 hover:bg-blue-50 transition-colors"
        >
          <span className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center shrink-0 shadow-glow">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div className="text-left">
            <p className="text-[10px] font-bold tracking-widest text-brand-blue uppercase">
              オンラインで相談
            </p>
            <p className="font-display font-bold text-[14px] text-brand-text">
              お問い合わせ
            </p>
          </div>
        </Link>
        <div className="w-px bg-brand-border" />
        <Link
          href="/lp/ai-attack-simulation"
          className="flex items-center px-5 py-4 hover:bg-slate-50 transition-colors"
        >
          <p className="text-[12px] font-semibold text-brand-sub">
            LPを見る →
          </p>
        </Link>
        <button
          type="button"
          aria-label="閉じる"
          onClick={() => setDismissed(true)}
          className="px-3 hover:bg-slate-100 text-brand-sub transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile: compact */}
      <Link
        href="/contact?purpose=diagnosis"
        className="md:hidden flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-brand text-white font-bold text-[13px] shadow-2xl"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
        お問い合わせ
      </Link>
    </div>
  );
}
