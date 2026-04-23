import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const limits = [
  { label: "脆弱性診断", issue: "指摘で止まる", color: "bg-yellow-400", detail: "「どこが危ないか」はわかる。しかし「実際に侵入できるか」までは検証されない。結果、対応優先度が判断できません。" },
  { label: "ペネトレーションテスト（従来型）", issue: "単発・属人的", color: "bg-orange-400", detail: "年1〜2回の単発実施が精一杯。担当者の経験値で品質が変わり、継続的な再検証サイクルが回りません。" },
  { label: "SOC（従来型）", issue: "検知はするが検証しない", color: "bg-red-400", detail: "アラートは出ても、「防御壁が実際に機能しているか」を攻撃側視点で確かめる手段がありません。" },
  { label: "共通課題", issue: "「破られない証拠」が出ない", color: "bg-slate-300", detail: "どの施策も単体では「対策した」までしか言えません。経営会議で求められる「破られなかった証拠」までは届かないのです。" },
];

export default function LegacyLimit() {
  return (
    <section className="section-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <span className="tag mb-5">03 / Gap</span>
          <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-5 leading-tight">
            「やっている」と<br />
            <span className="text-gradient">「守れている」は、違う。</span>
          </h2>
          <p className="text-[17px] text-brand-sub leading-[1.8]">
            既存のセキュリティサービスにはそれぞれ価値があります。
            ただ、単体ではAI攻撃の速度と網羅性に追いつけなくなりました。&quot;検証&quot;のレイヤーが、決定的に欠けているのです。
          </p>
        </FadeIn>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {limits.map((item) => (
            <StaggerItem key={item.label}>
              <div className="card overflow-hidden">
                <div className={`h-1 ${item.color}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <p className="font-display font-bold text-brand-text text-[16px]">{item.label}</p>
                    <span className="shrink-0 text-[12px] text-brand-sub bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.issue}
                    </span>
                  </div>
                  <p className="text-[15px] text-brand-sub leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
