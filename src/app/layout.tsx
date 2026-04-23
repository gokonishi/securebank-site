import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://securebank.co.jp";
const SITE_NAME = "セキュア・バンク株式会社";
const DEFAULT_TITLE = "セキュア・バンク株式会社 | AIサイバーセキュリティ";
const DEFAULT_DESCRIPTION =
  "「攻撃される前提で、守れているか。」AI攻撃シミュレーションで、\"対策した\"ではなく\"破られなかった\"証拠を手に入れる。中堅・中小企業のためのAIセキュリティ。";

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: "%s｜セキュア・バンク株式会社",
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/logo.png", width: 1536, height: 1024, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "セキュア・バンク株式会社",
  alternateName: "SECUREBANK Co., Ltd.",
  url: "https://securebank.co.jp",
  logo: "https://securebank.co.jp/logo.png",
  email: "sb-info@securebank.co.jp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "渋谷1-17-8 松岡渋谷ビル",
    addressLocality: "渋谷区",
    addressRegion: "東京都",
    postalCode: "150-0002",
    addressCountry: "JP",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "日本エンタープライズ株式会社",
  },
  sameAs: ["https://securebank.co.jp"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${dmSans.variable} ${inter.variable} bg-white text-brand-text antialiased`}
      >
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1KXW5GGL3X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1KXW5GGL3X');
          `}
        </Script>
      </body>
    </html>
  );
}
