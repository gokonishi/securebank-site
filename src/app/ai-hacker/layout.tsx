import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SECUREBANK RedTeam AI | 自律型ペネトレーションテストエンジン",
  description:
    "天才ハッカーの思考回路をAIがマシンの速度で実行。従来のペネトレーションテストが数週間かける工程を、わずかな時間とコストで実現する自律型セキュリティエンジン。",
};

export default function AiHackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="lp-root">{children}</div>
      <Script id="lp-ga-event" strategy="afterInteractive">
        {`
          // LPページビューを独自イベントとして送信
          if (typeof gtag !== 'undefined') {
            gtag('event', 'lp_view', { page: 'ai-hacker' });
          }
        `}
      </Script>
    </>
  );
}
