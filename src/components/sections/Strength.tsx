import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const items = [
  {
    title: "個人依存ではなく集合知",
    desc: "8万人のホワイトハッカーが蓄積した攻撃手法・侵入パターンをデータ化。特定の人材に依存しない再現性のある品質。",
    icon: "👥",
  },
  {
    title: "再現性のある検証",
    desc: "AIが攻撃手順を体系化し、同じ品質・観点で繰り返し検証可能。定期実施しても担当者による品質差がありません。",
    icon: "🔄",
  },
  {
    title: "継続的な知見反映",
    desc: "最新の攻撃手法・脆弱性情報を継続的にAIへ反映。常に現在の脅威状況に即した検証が行われます。",
    icon: "📡",
  },
  {
    title: "人手に依存しない自動化",
    desc: "人手中心では難しかったスピードとコストの課題を解決。継続的・低コストでの実施が現実的になります。",
    icon: "⚙️",
  },
];

export default function Strength() {
  return (
    <section className="section-gray py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <span className="tag mb-6">セキュアバンクの強み</span>
            <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-6">
              8万人の知見を<br />
              <span className="text-gradient">AIが再現する</span>
            </h2>
            <p className="text-[17px] text-brand-sub leading-[1.8] mb-5">
              多数のホワイトハッカーによる知見・経験をデータ化し、
              攻撃手法・検証観点・侵入パターンをAIで活用します。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.8]">
              人手だけでは届かなかった網羅性と継続性を実現し、
              中堅中小企業でも大企業水準の検証が可能になります。
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card p-7">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-[16px] text-brand-text mb-2">{item.title}</h3>
                  <p className="text-[14px] text-brand-sub leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
