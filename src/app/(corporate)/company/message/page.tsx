import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "代表挨拶",
  description:
    "「攻撃される前提で、事業を守る」。セキュア・バンク株式会社 代表取締役 小西 剛からのメッセージ。AI時代のセキュリティ、中堅・中小企業への想い、私たちの約束。",
  alternates: {
    canonical: "https://securebank.co.jp/company/message",
  },
};

export default function MessagePage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Header */}
      <div className="section-gray border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <span className="tag mb-6">Message</span>
            <h1 className="font-display font-extrabold text-[52px] tracking-tight text-brand-text mt-5 mb-6 leading-[1.15]">
              攻撃される前提で、<br />事業を守る。
            </h1>
            <p className="text-[16px] text-brand-sub">代表取締役　小西 剛</p>
          </FadeIn>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <FadeIn>
          <article className="prose-like">
            <h2 className="font-display font-bold text-[28px] text-brand-text mt-0 mb-6">
              なぜ今、このブランドを立ち上げたのか
            </h2>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-5">
              サイバー攻撃は、もはや「誰が狙われるか」ではなく、
              「いつ狙われるか」の問題になりました。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-5">
              攻撃者はすでにAIを使い、業種も規模も問わず、
              24時間365日、自動で侵入を試みています。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-12">
              一方で、企業側の対策は、いまだに「年に1回の診断」「担当者の勘」「製品の導入」で止まっている。
              この非対称性こそが、私たちが解こうとしている課題です。
            </p>

            <h2 className="font-display font-bold text-[28px] text-brand-text mt-16 mb-6">
              &quot;守れているつもり&quot;を、終わらせる
            </h2>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-5">
              私は長年、セキュリティ業界で、
              「対策をしたはずなのに突破された」現場を数多く見てきました。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-5">
              問題は常に同じでした。<br />
              <span className="text-brand-text font-semibold">
                ──「実際に破られるかを、検証していなかった」。
              </span>
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-5">
              チェックリストではなく、実際の侵入試行を。<br />
              人間のレッドチームではなく、AIによる網羅的な攻撃再現を。<br />
              &quot;守れているはず&quot;ではなく、&quot;破られなかった証拠&quot;を。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-12">
              セキュア・バンクは、この思想を事業の中核に据えています。
            </p>

            <h2 className="font-display font-bold text-[28px] text-brand-text mt-16 mb-6">
              中堅・中小企業にこそ、AI防御を
            </h2>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-5">
              大企業だけがセキュリティ投資の恩恵を受ける時代は、
              もう終わらせなければなりません。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-5">
              AI攻撃が無差別化した今、
              限られた予算・人員の中でも
              「本当に守れているか」を検証できる手段が必要です。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-12">
              私たちは、上場企業グループ（日本エンタープライズ）の
              ガバナンスと事業継続性を基盤にしながら、
              中堅・中小企業の経営者の隣に立ち、
              現実的で、実効性のあるセキュリティを届けます。
            </p>

            <h2 className="font-display font-bold text-[28px] text-brand-text mt-16 mb-6">
              約束
            </h2>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-8">
              私たちは、次の3つを約束します。
            </p>

            <ol className="space-y-6 mb-12 not-prose">
              <li className="flex gap-5">
                <span className="shrink-0 w-10 h-10 rounded-full bg-gradient-brand text-white font-display font-bold flex items-center justify-center shadow-glow">
                  1
                </span>
                <div>
                  <p className="font-display font-bold text-[18px] text-brand-text mb-1.5">
                    攻撃者の視点で検証する
                  </p>
                  <p className="text-[15px] text-brand-sub leading-[1.9]">
                    守る側の都合ではなく、攻撃者が実際に何をするかを起点にします。
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="shrink-0 w-10 h-10 rounded-full bg-gradient-brand text-white font-display font-bold flex items-center justify-center shadow-glow">
                  2
                </span>
                <div>
                  <p className="font-display font-bold text-[18px] text-brand-text mb-1.5">
                    証拠で語る
                  </p>
                  <p className="text-[15px] text-brand-sub leading-[1.9]">
                    「対策しました」ではなく、「破られませんでした」と報告できる材料を提供します。
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="shrink-0 w-10 h-10 rounded-full bg-gradient-brand text-white font-display font-bold flex items-center justify-center shadow-glow">
                  3
                </span>
                <div>
                  <p className="font-display font-bold text-[18px] text-brand-text mb-1.5">
                    経営と並走する
                  </p>
                  <p className="text-[15px] text-brand-sub leading-[1.9]">
                    情シス任せにせず、経営会議で判断できる言葉でリスクを翻訳します。
                  </p>
                </div>
              </li>
            </ol>

            <p className="text-[18px] font-semibold text-brand-text leading-[1.9] mb-3">
              攻撃される前提で、事業を守る。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.95] mb-12">
              その最前線で、皆様と共に戦わせてください。
            </p>

            <div className="border-t border-brand-border pt-8 text-right">
              <p className="text-[15px] text-brand-sub">セキュア・バンク株式会社</p>
              <p className="text-[17px] font-display font-bold text-brand-text mt-1">
                代表取締役　小西 剛
              </p>
            </div>
          </article>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2} className="mt-20">
          <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #7c3aed 100%)" }}>
            <div className="px-10 py-14 text-center">
              <h2 className="font-display font-bold text-[28px] text-white mb-4 leading-tight">
                現状のリスクを、一緒に可視化しませんか。
              </h2>
              <p className="text-blue-100 text-[15px] mb-8 max-w-xl mx-auto leading-relaxed">
                初回ヒアリングで、貴社の公開資産と侵入経路の仮説をお伝えします。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-[15px]"
                >
                  お問い合わせ
                </Link>
                <Link
                  href="/lp/ai-attack-simulation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-[15px]"
                >
                  AI攻撃シミュレーションを見る
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
