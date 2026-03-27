import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const attacks = [
  { num: "01", title: "自動スキャン", desc: "AIが企業システムをインターネット上で探索し、脆弱箇所を短時間で特定します。" },
  { num: "02", title: "自動侵入", desc: "脆弱性を発見すると、即座に侵入を試みる攻撃手順を自動実行します。" },
  { num: "03", title: "自動横展開", desc: "一か所への侵入成功後、社内ネットワーク全体へ感染を広げます。" },
  { num: "04", title: "24時間無限試行", desc: "AIは疲れません。昼夜問わず、執拗に攻撃を繰り返し続けます。" },
];

export default function ProblemAI() {
  return (
    <section className="section-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <span className="tag mb-5">脅威の現状</span>
          <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-5">
            攻撃は、すでに<br />
            <span className="text-gradient">AI化</span>しています
          </h2>
          <p className="text-[17px] text-brand-sub leading-[1.8]">
            熟練した攻撃者が何日もかけて行っていた侵入工程がAIによって高速化・自動化。
            「短時間・大量・執拗・低コスト」で攻撃が繰り返される時代、中小企業も例外ではありません。
          </p>
        </FadeIn>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attacks.map((item) => (
            <StaggerItem key={item.num}>
              <div className="card p-8 h-full">
                <p className="text-[52px] font-extrabold font-display text-slate-100 mb-4 leading-none select-none">
                  {item.num}
                </p>
                <h3 className="font-display font-bold text-[18px] text-brand-text mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-brand-sub leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeIn delay={0.2} className="mt-10">
          <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-100 rounded-2xl">
            <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-[15px] text-red-700 leading-relaxed">
              <strong>注意：</strong>
              規模の小さい企業ほど、セキュリティ対策の遅れを狙われやすい傾向があります。
              AIによる自動攻撃はターゲットを選びません。「うちは関係ない」という認識が最大のリスクです。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
