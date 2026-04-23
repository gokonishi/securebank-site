import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const steps = [
  { tag: "STEP 01", title: "無料診断 ─ 現状の侵入口を可視化", badge: "無料", badgeCls: "bg-emerald-100 text-emerald-700", desc: "公開資産をAIが自動列挙し、攻撃者から見える「侵入口候補」を簡易レポートで提示します。準備・費用ともに不要です。" },
  { tag: "STEP 02", title: "AI攻撃シミュレーション ─ 20ラウンドで実侵入試行", badge: "主軸", badgeCls: "bg-violet-100 text-violet-700", desc: "AIが攻撃シナリオを自動生成し、20ラウンド連続で侵入を試行。「破られなかった」証拠を、経営向けレポートとしてお渡しします。" },
  { tag: "STEP 03", title: "ASM ─ 変化を継続監視", badge: "月次", badgeCls: "bg-blue-100 text-blue-700", desc: "新規資産・変更・新たな脆弱性を自動検知。再検証が必要なタイミングを逃さない体制に移行します。" },
  { tag: "STEP 04", title: "継続防御・運用 ─ SOC／バックアップ／保険", badge: "運用", badgeCls: "bg-slate-100 text-slate-700", desc: "検証後の運用を支えるレイヤー。検知・復旧・補償までを、AI攻撃シミュレーションの周辺軌道として提供します。" },
];

export default function Steps() {
  return (
    <section className="section-gray py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <span className="tag mb-5">06 / Steps</span>
          <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-5 leading-tight">
            無料診断から、<br />
            <span className="text-gradient">検証→運用まで一直線。</span>
          </h2>
          <p className="text-[17px] text-brand-sub leading-[1.8]">
            最初から重装備は要りません。侵入口の可視化 → 実侵入検証 → 継続監視 → 運用補完の順で、無理なく段階導入できます。
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
