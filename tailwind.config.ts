import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          purple: "#7C3AED",
          text: "#0F172A",
          sub: "#64748B",
          border: "#E2E8F0",
          section: "#F7F8FC",
        },
      },
      fontFamily: {
        display: ["var(--font-dm-sans)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        display: [
          "4.25rem",
          { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
        h2: ["2.75rem", { lineHeight: "1.2", fontWeight: "700" }],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.14)",
        glow: "0 8px 32px rgba(37,99,235,0.35)",
        "glow-lg": "0 12px 48px rgba(37,99,235,0.45)",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "gradient-brand-hover":
          "linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
