import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://securebank.co.jp/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
