import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const pains = [
  { title: "セキュリティ担当がいない", desc: "情報システム部門がない、またはIT担当者が兼任で手一杯という企業がほとんどです。" },
  { title: "何をやればいいかわからない", desc: "「対策が必要」とはわかっていても、何から手をつければよいかが不明確なままです。" },
  { title: "予算が限られている", desc: "大企業向けのSOCや診断サービスは高額で、中堅中小には現実的な選択肢ではありません。" },
  { title: "日々の業務で手一杯", desc: "本業を回しながらセキュリティ対策まで手が回らず、後回しになりがちです。" },
  { title: "事故が起きれば事業継続に打撃", desc: "情報漏洩・サービス停止・取引先への影響など、一度の被害が経営に直結します。" },
];

export default function SMBReality() {
  return (
    <section className="section-gray py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="tag mb-6">中堅中小企業の実情</span>
            <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-6">
              守りたくても、<br />守れない
            </h2>
            <p className="text-[17px] text-brand-sub leading-[1.8] mb-5">
              大企業はセキュリティ専門部門を持ち、多額の予算で対策できます。
              しかし中堅中小企業の多くは、それができないのが現実です。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.8]">
              専門家がいなくても導入でき、継続できる現実的な仕組みが必要です。
              セキュアバンクは、そこに特化しています。
            </p>
          </FadeIn>

          <StaggerGrid className="space-y-3">
            {pains.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="card p-5 flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-brand-sub">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-brand-text text-[15px] mb-0.5">{item.title}</p>
                    <p className="text-brand-sub text-[14px] leading-relaxed">{item.desc}</p>
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
