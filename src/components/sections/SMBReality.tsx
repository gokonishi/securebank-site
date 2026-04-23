import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const pains = [
  { title: "セキュリティ担当がいない", desc: "情シス部門がない、または兼任で手一杯。対策の必要性は感じつつも、動ける人が社内にいません。" },
  { title: "何から始めるべきか判断できない", desc: "製品カタログを並べられても、自社にとって本当に必要なものが何かが見えない状態が続きます。" },
  { title: "「やっている風」で止まっている", desc: "ウイルス対策・バックアップ・一度の診断で「対策済」としてしまい、実際に破られるかは検証されていません。" },
  { title: "取引先・顧客からの要求は増える一方", desc: "サプライチェーン要件・ISMS・個人情報保護。監査や取引条件でセキュリティ水準が問われる場面が急増しています。" },
  { title: "一度の被害が、事業継続に直結する", desc: "大企業と違い、1回のランサム被害・情報漏えいで資金繰り・信用・取引が同時に崩れます。" },
];

export default function SMBReality() {
  return (
    <section className="section-gray py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="tag mb-6">02 / SMB</span>
            <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-6 leading-tight">
              狙われやすく、<br />
              <span className="text-gradient">守りづらい</span>
            </h2>
            <p className="text-[17px] text-brand-sub leading-[1.8] mb-5">
              大企業はセキュリティ専門部門と多額の予算を持ちます。
              中堅・中小企業は、同じ脅威を、限られた体制で受け止めねばなりません。
            </p>
            <p className="text-[17px] text-brand-sub leading-[1.8]">
              専門家がいなくても導入でき、経営が意思決定できる材料として機能する仕組みが必要です。
              セキュア・バンクは、そこに特化しています。
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
