import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const attacks = [
  { num: "01", title: "無差別化", desc: "業種・規模を問わず、AIはすべての公開資産を機械的に探索します。「うちは狙われない」は通用しません。" },
  { num: "02", title: "自動化", desc: "攻撃シナリオはAIが生成。人間のハッカーがゼロから組み立てていた侵入工程が、数秒で構築されます。" },
  { num: "03", title: "高速化", desc: "脆弱性が公開されてから24時間以内に、AIが悪用コードを生成し侵入を試みます。パッチ適用が間に合いません。" },
  { num: "04", title: "多層化", desc: "物理・人・NW・ID・アプリ・データを横断する攻撃連鎖。Layer 0〜5 を同時並行で狙ってきます。" },
];

export default function ProblemAI() {
  return (
    <section className="section-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <span className="tag mb-5">01 / Reality</span>
          <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-5 leading-tight">
            攻撃はもう、<br />
            <span className="text-gradient">人間の手を離れた。</span>
          </h2>
          <p className="text-[17px] text-brand-sub leading-[1.8]">
            AIは疲れず、ミスをせず、24時間365日、あらゆる企業を同時に狙います。
            無差別・自動・高速・多層で進行するこの攻撃に、年1回の診断では構造的に間に合いません。
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
            <p className="text-[15px] text-red-700 leading-[1.85]">
              <strong>警告：</strong>
              大企業の防御が固くなるほど、AIは「対策の薄い中堅・中小」に標的をシフトさせています。
              「うちは狙われない」と考えている企業ほど、実は最も突破されやすい状態にあります。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
