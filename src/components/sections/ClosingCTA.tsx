import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";

export default function ClosingCTA() {
  return (
    <section className="section-white py-28">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div
            className="relative rounded-3xl overflow-hidden py-20 px-8 md:px-20 text-center"
            style={{
              background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 45%, #7c3aed 100%)",
            }}
          >
            {/* dot overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/25 rounded-full mb-8 text-white text-[11px] font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                まずは現状把握から
              </div>

              <h2 className="font-display font-extrabold text-[44px] md:text-[52px] tracking-tight text-white mb-6">
                今のままで<br />大丈夫ですか？
              </h2>

              <p className="text-[18px] text-blue-100 leading-[1.8] mb-3 max-w-2xl mx-auto">
                セキュアバンクは、AI時代に合わせた新しいセキュリティ基盤として、
                攻撃の再現から防御・運用まで支援します。
              </p>
              <p className="text-[16px] text-blue-200 leading-[1.8] mb-12 max-w-xl mx-auto">
                専門担当者がいなくても、限られた予算でも、段階的に始められます。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-[16px]"
                >
                  無料相談を申し込む
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-[16px]"
                >
                  サービスを見る →
                </Link>
              </div>

              <div className="mt-14 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[14px] text-blue-200">
                <span>上場企業グループ傘下</span>
                <span className="text-blue-400">·</span>
                <span>80,000+ ホワイトハッカーの知見</span>
                <span className="text-blue-400">·</span>
                <span>AI攻撃シミュレーション</span>
                <span className="text-blue-400">·</span>
                <span>継続的な運用支援</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
