import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const items = [
  { title: "スピード", metric: "数時間〜", label: "診断開始", desc: "AIが調整・準備を短縮。迅速に現状把握を開始できます。", accent: "from-blue-500 to-blue-600" },
  { title: "深さ", metric: "網羅的", label: "カバレッジ", desc: "人手では見落としがちなパターンも体系的に検証します。", accent: "from-indigo-500 to-indigo-600" },
  { title: "価格", metric: "大幅", label: "コスト削減", desc: "人件費に依存しないAI検証で、継続実施が現実的な価格帯に。", accent: "from-violet-500 to-violet-600" },
  { title: "継続性", metric: "月次〜", label: "定期実施", desc: "単発で終わらず、継続的にリスクを把握・改善するサイクルを。", accent: "from-purple-500 to-purple-600" },
  { title: "拡張性", metric: "事業成長", label: "に追従", desc: "システム構成の変化に柔軟に対応。成長に合わせて強化できます。", accent: "from-fuchsia-500 to-fuchsia-600" },
];

export default function AIAdvantage() {
  return (
    <section className="section-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <span className="tag mb-5">AIの優位性</span>
          <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-5">
            人手よりも、<br />
            <span className="text-gradient">早い・深い・安い</span>
          </h2>
          <p className="text-[17px] text-brand-sub leading-[1.8]">
            AIにより、人手中心では難しかった継続的で現実的なセキュリティ対策を可能にします。
          </p>
        </FadeIn>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card p-8">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} mb-5`}>
                  <span className="text-white text-[11px] font-bold">{item.title[0]}</span>
                </div>
                <p className="text-[11px] font-bold text-brand-sub uppercase tracking-widest mb-2">{item.title}</p>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="font-display font-bold text-[22px] text-brand-text">{item.metric}</span>
                  <span className="text-brand-sub text-[14px]">{item.label}</span>
                </div>
                <p className="text-[14px] text-brand-sub leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
          {/* spacer for odd count */}
          <div className="hidden lg:block" />
        </StaggerGrid>
      </div>
    </section>
  );
}
