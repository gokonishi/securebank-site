import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const limits = [
  { label: "脆弱性診断", issue: "指摘が中心", color: "bg-yellow-400", detail: "「どこが危ないか」はわかっても、実際に侵入できるかの検証には至らない。指摘への対応も自社任せになりがちです。" },
  { label: "ペネトレーションテスト（従来型）", issue: "高額・単発・属人的", color: "bg-orange-400", detail: "専門家の工数ベースで費用が高く、年一度が精一杯。担当エンジニアの経験値によって品質が変わります。" },
  { label: "SOC（セキュリティ運用）", issue: "導入ハードルが高い", color: "bg-red-400", detail: "導入・運用費用ともに大企業向けの水準で、中堅中小が本格運用するのは現実的ではないケースがほとんど。" },
  { label: "共通課題", issue: "点在・継続困難", color: "bg-slate-300", detail: "一度きりで終わりやすく、担当者が変わると引き継がれない。侵入されやすい経路が可視化されないまま残ります。" },
];

export default function LegacyLimit() {
  return (
    <section className="section-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <span className="tag mb-5">従来型の課題</span>
          <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-5">
            従来型の対策だけでは<br />足りない
          </h2>
          <p className="text-[17px] text-brand-sub leading-[1.8]">
            既存のセキュリティサービスにはそれぞれ価値がある一方で、
            中堅中小企業が継続的に活用するには乗り越えにくい壁があります。
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
