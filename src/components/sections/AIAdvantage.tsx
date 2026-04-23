import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const items = [
  {
    title: "スピード",
    metric: "短サイクル",
    label: "で検証を回せる",
    desc: "従来は長期化しがちな実侵入の検証を、仮説→試行→再検証の短いサイクルで回せる設計に。意思決定を遅らせません。",
    accent: "from-blue-500 to-blue-600",
  },
  {
    title: "網羅性",
    metric: "AI自律",
    label: "で攻撃連鎖を再現",
    desc: "人間のレッドチームでは到達しにくい組み合わせ攻撃まで、AIが仮説を立てて検証。前の結果を踏まえて次の手を自律的に選びます。",
    accent: "from-indigo-500 to-indigo-600",
  },
  {
    title: "再現性",
    metric: "毎回同品質",
    label: "の検証",
    desc: "担当者の経験値に品質が左右されません。検証観点はAIで体系化され、再実行も即可能です。",
    accent: "from-violet-500 to-violet-600",
  },
  {
    title: "継続性",
    metric: "オンデマンド",
    label: "で再検証",
    desc: "新しい資産・変更・脅威が出るたびに再検証。「一度やって終わり」のセキュリティから卒業します。",
    accent: "from-purple-500 to-purple-600",
  },
  {
    title: "証拠",
    metric: "リクエスト〜ログ",
    label: "まで記録",
    desc: "「対策した」ではなく「破られなかった」証拠を、経営会議で提出可能なレポート形式で提供します。",
    accent: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    title: "多層対応",
    metric: "Layer 0〜5",
    label: "を横断検証",
    desc: "物理・人・NW・ID・アプリ・データ。レイヤーを横断する攻撃連鎖を、連鎖のまま再現します。",
    accent: "from-pink-500 to-pink-600",
  },
];

export default function AIAdvantage() {
  return (
    <section className="section-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <span className="tag mb-5">05 / Advantage</span>
          <h2 className="font-display font-bold text-[44px] tracking-tight text-brand-text mt-5 mb-5 leading-tight">
            人間のレッドチームでは、<br />
            <span className="text-gradient">もう追いつけない。</span>
          </h2>
          <p className="text-[17px] text-brand-sub leading-[1.8]">
            AI攻撃を人間の手で再現しようとしても、速度・網羅性・再現性のすべてで構造的に不利です。
            攻撃側のAIに対しては、防御側もAIで検証するしかありません。
          </p>
        </FadeIn>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card p-8 h-full">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} mb-5`}>
                  <span className="text-white text-[11px] font-bold">{item.title[0]}</span>
                </div>
                <p className="text-[11px] font-bold text-brand-sub uppercase tracking-widest mb-2">{item.title}</p>
                <div className="flex items-baseline gap-1.5 mb-3 flex-wrap">
                  <span className="font-display font-bold text-[22px] text-brand-text">{item.metric}</span>
                  <span className="text-brand-sub text-[14px]">{item.label}</span>
                </div>
                <p className="text-[14px] text-brand-sub leading-[1.9]">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
