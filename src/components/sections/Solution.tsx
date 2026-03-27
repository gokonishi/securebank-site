import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const points = [
  { num: "01", title: "攻撃視点で検証する", desc: "実際の攻撃者が取りうる手順・手法で侵入可能性を検証します。" },
  { num: "02", title: "侵入経路を可視化する", desc: "「どこから、どうやって侵入されるか」を具体的なシナリオで明示します。" },
  { num: "03", title: "経営リスクを把握する", desc: "情報漏洩・停止・ランサムウェアなど、経営に直結するリスクを優先順位付きで整理します。" },
  { num: "04", title: "対策と継続運用までつなげる", desc: "診断で終わらず、対策実施・継続監視・インシデント対応まで一体でサポートします。" },
];

export default function Solution() {
  return (
    <section className="section-dark py-28 relative overflow-hidden">
      {/* Subtle dot overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6 text-white text-[11px] font-bold tracking-widest uppercase">
            セキュアバンクのアプローチ
          </div>
          <h2 className="font-display font-bold text-[44px] tracking-tight text-white mb-5">
            AIで攻撃を再現し、<br />防御までつなげる
          </h2>
          <p className="text-[17px] text-blue-100 leading-[1.8]">
            単なる脆弱性の洗い出しではありません。攻撃者視点で侵入可能性を検証し、
            その結果に基づいて対策・運用まで一体で支援します。
          </p>
        </FadeIn>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {points.map((item) => (
            <StaggerItem key={item.num}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-200">
                <p className="text-[52px] font-extrabold font-display text-white/15 mb-4 leading-none">
                  {item.num}
                </p>
                <h3 className="font-display font-bold text-[18px] text-white mb-2">{item.title}</h3>
                <p className="text-[15px] text-blue-100 leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
