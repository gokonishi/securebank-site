"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function LpViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const slug = pathname.replace(/^\/lp\//, "");
    if (typeof window.gtag === "function") {
      window.gtag("event", "lp_view", { page: slug });
    }
  }, [pathname]);

  return null;
}
