import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "セキュリティ人材支援｜AI・セキュリティ領域のパートナー支援",
  description:
    "SOC・CSIRT・脆弱性診断・セキュリティPMO・情シス支援・AI導入・クラウドセキュリティ領域における、案件／人材のマッチング支援とパートナー連携窓口。",
  alternates: {
    canonical: "https://securebank.co.jp/security-talent",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ── 対応領域 ──
const domains = [
  {
    tag: "SOC / MDR",
    title: "セキュリティ監視運用",
    desc: "24/365 監視チーム／SOCアナリスト／MDR運用支援領域での案件・人材連携に対応します。",
  },
  {
    tag: "CSIRT",
    title: "インシデント対応",
    desc: "CSIRT構築・フォレンジック・インシデント一次対応のポジション／案件に広く対応します。",
  },
  {
    tag: "Assessment",
    title: "脆弱性診断・ペネトレーション",
    desc: "Web／ネットワーク／クラウド／モバイルの診断案件、ペネトレーションテスター人材の連携。",
  },
  {
    tag: "Security PMO",
    title: "セキュリティPMO",
    desc: "セキュリティ強化プロジェクトの推進・規程整備・監査対応を担うPMO人材の連携に対応します。",
  },
  {
    tag: "Corporate IT",
    title: "情シス支援",
    desc: "ひとり情シスや情シス体制構築の補完、ヘルプデスク／IT運用まで幅広く支援します。",
  },
  {
    tag: "AI Enablement",
    title: "AI導入支援",
    desc: "生成AI導入・AIガバナンス・AIセキュリティ評価を進める企業の、実装人材・PM人材の連携。",
  },
  {
    tag: "Cloud Security",
    title: "クラウドセキュリティ",
    desc: "AWS／Azure／GCP のセキュアアーキテクチャ設計・CSPM／CNAPP 運用領域の案件・人材連携。",
  },
  {
    tag: "Advisory",
    title: "セキュリティアドバイザリ",
    desc: "CISO代行・セキュリティ顧問・ISMS／SOC2対応アドバイザなど、上流ポジションの連携に対応します。",
  },
];

// ── なぜ当社か ──
const strengths = [
  {
    no: "01",
    title: "AI・セキュリティ領域に特化",
    detail:
      "AI攻撃シミュレーションを自社で提供する事業者だからこそ、要件の解像度が違います。技術要件の翻訳を代行します。",
  },
  {
    no: "02",
    title: "案件・人材の両サイドを理解",
    detail:
      "発注側のプロジェクト構造と、エンジニア側のキャリア志向の両面を踏まえたマッチングを提案します。",
  },
  {
    no: "03",
    title: "パートナー企業との共同提案",
    detail:
      "単独で難しい大型案件・複合案件は、信頼できるパートナー企業と共同でチームを編成してご提案します。",
  },
];

// ── 連携イメージ ──
const flows = [
  {
    step: "STEP 1",
    title: "ご相談受付",
    desc: "案件情報・人材情報・パートナー相談のいずれかで、メールにてご連絡ください。",
  },
  {
    step: "STEP 2",
    title: "要件すり合わせ",
    desc: "必要スキル・体制・時期・稼働条件などを短時間のオンラインミーティングで確認します。",
  },
  {
    step: "STEP 3",
    title: "ご提案・ご紹介",
    desc: "マッチする案件／人材／パートナー候補を提示。秘密保持を前提に、具体的な条件を調整します。",
  },
];

export default function SecurityTalentPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative bg-[#0B1220] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, #2563EB 0%, transparent 40%), radial-gradient(circle at 80% 60%, #7C3AED 0%, transparent 45%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[12px] font-medium text-white/80 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-pulse" />
              Security Talent &amp; Partners
            </span>
            <h1 className="font-display font-extrabold text-[42px] md:text-[58px] tracking-tight leading-[1.12] mb-8">
              セキュリティ人材を、<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI時代の現場につなぐ。
              </span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/80 leading-[1.9] max-w-2xl mb-10">
              AI・セキュリティ領域の案件と人材のマッチング支援、ならびにパートナー企業との連携窓口です。
              SOC・CSIRT・脆弱性診断・セキュリティPMO・情シス支援・AI導入支援・クラウドセキュリティを中心に、
              体制強化と専門人材の確保をご支援します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:project@securebank.co.jp?subject=%E6%A1%88%E4%BB%B6%E6%83%85%E5%A0%B1%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85"
                className="inline-flex items-center justify-center px-7 py-4 bg-white text-brand-text font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-[15px]"
              >
                案件情報を送る
              </a>
              <a
                href="mailto:talent@securebank.co.jp?subject=%E4%BA%BA%E6%9D%90%E6%83%85%E5%A0%B1%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85"
                className="inline-flex items-center justify-center px-7 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-[15px]"
              >
                人材情報を送る
              </a>
            </div>
            <p className="text-[13px] text-white/60 mt-5">
              パートナー企業様からのご相談は <a href="mailto:partner@securebank.co.jp" className="underline hover:text-white">partner@securebank.co.jp</a> までどうぞ。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: 対応領域 ── */}
      <section className="section-gray">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="tag mb-5">01 / Domains</span>
            <h2 className="font-display font-bold text-[34px] md:text-[42px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              対応領域
            </h2>
            <p className="text-[16px] text-brand-sub max-w-2xl mx-auto leading-[1.85]">
              セキュリティとAIを中心に、攻撃・防御・ガバナンス・運用の各レイヤーで
              案件と人材の連携をご支援します。
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((d) => (
              <StaggerItem key={d.tag}>
                <div className="card p-7 h-full">
                  <span className="inline-block text-[11px] font-bold tracking-widest text-brand-blue uppercase mb-4">
                    {d.tag}
                  </span>
                  <h3 className="font-display font-bold text-[17px] text-brand-text mb-3 leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-[14px] text-brand-sub leading-[1.85]">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── SECTION 3: Why Us ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="tag mb-5">02 / Why</span>
            <h2 className="font-display font-bold text-[34px] md:text-[42px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              AI・セキュリティ領域だから、<br />語れる要件がある。
            </h2>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((s) => (
              <StaggerItem key={s.no}>
                <div className="card p-8 h-full">
                  <p className="font-display font-extrabold text-[32px] bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-3">
                    {s.no}
                  </p>
                  <h3 className="font-display font-bold text-[19px] text-brand-text mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-brand-sub leading-[1.9]">{s.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── SECTION 4: 連携の流れ ── */}
      <section className="section-gray">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-16">
            <span className="tag mb-5">03 / Flow</span>
            <h2 className="font-display font-bold text-[34px] md:text-[42px] tracking-tight text-brand-text mt-4 mb-5 leading-tight">
              連携の流れ
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ol className="relative border-l-2 border-brand-border pl-8 space-y-10">
              {flows.map((f) => (
                <li key={f.step} className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-gradient-brand shadow-glow" />
                  <p className="text-[11px] font-bold tracking-widest text-brand-blue uppercase mb-1">
                    {f.step}
                  </p>
                  <h3 className="font-display font-bold text-[19px] text-brand-text mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[15px] text-brand-sub leading-[1.9]">{f.desc}</p>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 5: 3択CTA ── */}
      <section className="bg-[#0B1220] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #2563EB 0%, transparent 45%), radial-gradient(circle at 70% 70%, #7C3AED 0%, transparent 45%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <FadeIn className="text-center mb-14">
            <h2 className="font-display font-bold text-[34px] md:text-[44px] tracking-tight mb-5 leading-tight">
              ご連絡先を選んでください。
            </h2>
            <p className="text-[16px] text-white/80 max-w-2xl mx-auto leading-[1.85]">
              秘密保持を前提に、案件・人材・パートナーの各情報を受け付けています。
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                badge: "案件情報",
                title: "案件情報を送る",
                detail:
                  "お客様先の体制強化、プロジェクト推進人材のご相談はこちらから。要件・期間・想定体制をお送りください。",
                cta: "project@securebank.co.jp",
                href:
                  "mailto:project@securebank.co.jp?subject=%E6%A1%88%E4%BB%B6%E6%83%85%E5%A0%B1%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85",
                primary: true,
              },
              {
                badge: "人材情報",
                title: "人材情報を送る",
                detail:
                  "セキュリティ／AI領域のエンジニア・PM・アドバイザなど、ご提案可能な人材情報をお待ちしています。",
                cta: "talent@securebank.co.jp",
                href:
                  "mailto:talent@securebank.co.jp?subject=%E4%BA%BA%E6%9D%90%E6%83%85%E5%A0%B1%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85",
                primary: false,
              },
              {
                badge: "パートナー",
                title: "パートナー相談",
                detail:
                  "共同提案・協業・再委託関係の新規構築に関するご相談は、こちらの窓口までお寄せください。",
                cta: "partner@securebank.co.jp",
                href:
                  "mailto:partner@securebank.co.jp?subject=%E3%83%91%E3%83%BC%E3%83%88%E3%83%8A%E3%83%BC%E9%80%A3%E6%90%BA%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87",
                primary: false,
              },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div
                  className={
                    c.primary
                      ? "rounded-2xl bg-gradient-brand p-8 h-full shadow-glow border border-white/20"
                      : "rounded-2xl bg-white/5 backdrop-blur p-8 h-full border border-white/10"
                  }
                >
                  <span className="inline-block text-[11px] font-bold tracking-widest text-white/80 uppercase mb-4">
                    {c.badge}
                  </span>
                  <h3 className="font-display font-bold text-[22px] text-white mb-3">
                    {c.title}
                  </h3>
                  <p className="text-[14px] text-white/80 leading-[1.9] mb-6">{c.detail}</p>
                  <a
                    href={c.href}
                    className={
                      c.primary
                        ? "inline-flex items-center justify-center w-full px-5 py-3.5 bg-white text-brand-text font-bold rounded-xl hover:bg-blue-50 transition-colors text-[13px] break-all"
                        : "inline-flex items-center justify-center w-full px-5 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-[13px] break-all"
                    }
                  >
                    {c.cta}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeIn delay={0.2} className="text-center mt-12">
            <p className="text-[13px] text-white/60">
              AI攻撃シミュレーションなど、当社サービスに関するお問い合わせは{" "}
              <Link href="/contact" className="underline hover:text-white">
                こちらのフォーム
              </Link>{" "}
              をご利用ください。
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
