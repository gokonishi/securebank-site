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
                次のアクションを選ぶ
              </div>

              <h2 className="font-display font-extrabold text-[44px] md:text-[52px] tracking-tight text-white mb-6 leading-tight">
                次の取締役会で、<br />
                &quot;破られませんでした&quot;と<br className="md:hidden" />報告できますか。
              </h2>

              <p className="text-[17px] text-blue-100 leading-[1.8] mb-12 max-w-2xl mx-auto">
                検証なき対策は、経営判断ではなく願望です。検討フェーズに合わせて3つの入口を用意しています。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <Link
                  href="/contact"
                  className="group rounded-2xl bg-white p-6 hover:shadow-2xl transition-shadow"
                >
                  <p className="text-[11px] font-bold tracking-widest text-brand-blue uppercase mb-2">
                    最も踏みやすい
                  </p>
                  <p className="font-display font-bold text-[18px] text-brand-text mb-2">
                    現状のリスクを相談する
                  </p>
                  <p className="text-[13px] text-brand-sub leading-relaxed mb-4">
                    公開資産と侵入仮説をヒアリングし、優先度をご提示します。
                  </p>
                  <span className="text-brand-blue font-bold text-[13px] group-hover:translate-x-0.5 inline-block transition-transform">
                    お問い合わせ →
                  </span>
                </Link>

                <Link
                  href="/demo"
                  className="group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 hover:bg-white/15 transition-colors"
                >
                  <p className="text-[11px] font-bold tracking-widest text-blue-200 uppercase mb-2">
                    比較検討層
                  </p>
                  <p className="font-display font-bold text-[18px] text-white mb-2">
                    攻撃再現デモを見る
                  </p>
                  <p className="text-[13px] text-blue-100 leading-relaxed mb-4">
                    実際の攻撃シナリオとレポート形式をオンラインでご紹介します。
                  </p>
                  <span className="text-white font-bold text-[13px] group-hover:translate-x-0.5 inline-block transition-transform">
                    デモを見る →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 hover:bg-white/15 transition-colors"
                >
                  <p className="text-[11px] font-bold tracking-widest text-blue-200 uppercase mb-2">
                    決裁者層
                  </p>
                  <p className="font-display font-bold text-[18px] text-white mb-2">
                    経営会議用レポートを受け取る
                  </p>
                  <p className="text-[13px] text-blue-100 leading-relaxed mb-4">
                    経営層・稟議に使える形でリスクと必要投資を翻訳します。
                  </p>
                  <span className="text-white font-bold text-[13px] group-hover:translate-x-0.5 inline-block transition-transform">
                    個別相談へ →
                  </span>
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
