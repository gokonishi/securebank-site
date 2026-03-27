import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const items = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "上場企業グループの信頼性",
    desc: "日本エンタープライズ株式会社グループとして、ガバナンス・透明性・事業継続性を備えた体制で支援します。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AIを活用した先進的アプローチ",
    desc: "8万人のホワイトハッカーの知見をAI化し、攻撃者視点で継続的かつ再現性のある検証を実現します。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "技術・事業・ガバナンスの三位一体",
    desc: "セキュリティ技術力だけでなく、事業運営の安定性と適切なガバナンスを兼ね備えたパートナーです。",
  },
];

export default function TrustBand() {
  return (
    <section className="section-gray py-20">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-blue shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[15px] text-brand-text mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-brand-sub leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
