import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const steps = [
  { tag: "STEP 01", title: "無料診断", badge: "無料", badgeCls: "bg-emerald-100 text-emerald-700", desc: "外部公開情報をもとに現状リスクを把握。費用・準備ゼロで始められる入口です。" },
  { tag: "STEP 02", title: "ASMによる公開資産の可視化・監視", badge: "月次", badgeCls: "bg-blue-100 text-blue-700", desc: "公開資産を継続的に監視。変化や新たなリスクを早期に検知します。" },
  { tag: "STEP 03", title: "AI攻撃シミュレーション / 診断", badge: "単発・定期", badgeCls: "bg-violet-100 text-violet-700", desc: "AIで攻撃者視点の侵入シナリオを再現。必要に応じた従来型診断も組み合わせます。" },
  { tag: "STEP 04", title: "継続防御・運用", badge: "年次〜", badgeCls: "bg-slate-100 text-slate-700", desc: "SOC・セキュアバックアップ・サイバー保険を含めた継続的な防御体制を構築します。" },
];

export default function Steps() {
  return (
    <section className="section-gray py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <span className="tag mb-5">導入ステップ</span>
          <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-5">
            段階的に<br />導入できます
          </h2>
          <p className="text-[17px] text-brand-sub leading-[1.8]">
            無料診断からはじめて段階的に強化できる設計。何から始めればよいかが明確です。
          </p>
        </FadeIn>

        <div className="relative max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-[22px] top-11 bottom-11 w-px bg-gradient-to-b from-brand-blue to-brand-purple hidden md:block" />

          <StaggerGrid className="space-y-5">
            {steps.map((step, i) => (
              <StaggerItem key={step.tag}>
                <div className="flex gap-6">
                  <div className="shrink-0 z-10">
                    <div className="w-11 h-11 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold shadow-glow">
                      {i + 1}
                    </div>
                  </div>
                  <div className="card flex-1 p-7">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[11px] font-bold text-brand-blue tracking-widest uppercase">{step.tag}</span>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${step.badgeCls}`}>{step.badge}</span>
                    </div>
                    <h3 className="font-display font-bold text-[18px] text-brand-text mb-2">{step.title}</h3>
                    <p className="text-[15px] text-brand-sub leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
