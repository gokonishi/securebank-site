import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const items = [
  {
    title: "個人依存ではなく集合知",
    desc: "80,000人規模のホワイトハッカーが蓄積した攻撃手法・侵入パターンをデータ化。特定人材に依存しない品質を実現します。",
    icon: "👥",
  },
  {
    title: "攻撃者視点で設計",
    desc: "守る側の都合ではなく、攻撃者が実際に何をするかを起点に検証項目を組み立てます。発想の順序が根本から違います。",
    icon: "🎯",
  },
  {
    title: "最新脅威を常時反映",
    desc: "新規脆弱性・新攻撃手法・新種マルウェアを継続的にAIへ取り込み。検証内容は常に今日の脅威に追随します。",
    icon: "📡",
  },
  {
    title: "経営の言葉に翻訳",
    desc: "技術所見で終わらせず、経営層が意思決定できる形式（影響・優先度・必要投資）へ常にトランスレートして提出します。",
    icon: "🏛",
  },
];

export default function Strength() {
  return (
    <section className="section-gray py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <span className="tag mb-6">07 / Strength</span>
            <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-6 leading-tight">
              80,000人の攻撃知見を、<br />
              <span className="text-gradient">AIが再現する。</span>
            </h2>
            <p className="text-[17px] text-brand-sub leading-[1.8] mb-5">
              属人性の高かったレッドチーム業務を、集合知としてデータ化・AI化。
              攻撃手法・検証観点・侵入パターンを、中堅・中小企業にも等しく届けます。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.8]">
              上場グループ（日本エンタープライズ）のガバナンスを基盤に、
              ベンダー依存ではなく経営パートナーとして並走します。
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
