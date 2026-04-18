"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type LpCtaEvent =
  | "header_cta_click"
  | "hero_cta_click"
  | "mid_cta_click"
  | "bottom_cta_click";

export type LpCtaParams = {
  lp: string;
  section: string;
  label: string;
};

const LP_SOURCE_KEY = "lp_source";

export function trackLpCta(event: LpCtaEvent, params: LpCtaParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
  try {
    window.sessionStorage.setItem(LP_SOURCE_KEY, params.lp);
  } catch {
    // sessionStorage unavailable (private mode etc) — silently skip
  }
}

export function getLpSource(): string {
  if (typeof window === "undefined") return "direct";
  try {
    return window.sessionStorage.getItem(LP_SOURCE_KEY) ?? "direct";
  } catch {
    return "direct";
  }
}
