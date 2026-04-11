import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIサイバー攻撃ニュース | セキュア・バンク株式会社",
  description:
    "国内外の最新AIサイバー攻撃インシデント・脅威情報をキュレーション。IPA・JPCERT/CC・警察庁・海外メディアの情報をSecureBankが解説します。",
};

type Source = "IPA" | "JPCERT/CC" | "警察庁" | "海外メディア" | "SecureBank独自解説";

interface CyberNewsArticle {
  id: string;
  date: string;
  source: Source;
  title: string;
  summary: string;
  href: string;
  isExternal: boolean;
}

const sourceColors: Record<Source, string> = {
  "IPA": "bg-blue-100 text-blue-700",
  "JPCERT/CC": "bg-indigo-100 text-indigo-700",
  "警察庁": "bg-red-100 text-red-700",
  "海外メディア": "bg-amber-100 text-amber-700",
  "SecureBank独自解説": "bg-purple-100 text-purple-700",
};

const articles: CyberNewsArticle[] = [
  {
    id: "1",
    date: "2026年4月8日",
    source: "SecureBank独自解説",
    title: "GPT-5ベースのスピアフィッシング攻撃が国内中小企業に急増——SecureBank分析レポート",
    summary:
      "2026年第1四半期、生成AIを活用したスピアフィッシングメールの検知数が前四半期比で340%増加しました。攻撃者はLinkedInやXから収集した個人情報をLLMに学習させ、役員や取引先になりすました高精度な日本語メールを自動生成しています。SecureBankの顧客企業でも月平均12件の標的型メールが確認されており、従来のメールフィルタでは検知が困難な事例が増加しています。",
    href: "#",
    isExternal: false,
  },
  {
    id: "2",
    date: "2026年4月3日",
    source: "JPCERT/CC",
    title: "JPCERT/CC注意喚起：VPN機器の脆弱性を悪用したランサムウェア攻撃の増加",
    summary:
      "JPCERT/CCは、国内企業で使用されるVPN機器の未パッチ脆弱性を起点としたランサムウェア攻撃が増加していると警告しています。特にFortiGate・Cisco ASA系の旧バージョンが標的となっており、初期侵入後はAI支援のラテラルムーブメントにより社内ネットワーク全域への感染拡大が確認されています。",
    href: "https://www.jpcert.or.jp/",
    isExternal: true,
  },
  {
    id: "3",
    date: "2026年3月28日",
    source: "IPA",
    title: "IPA「情報セキュリティ10大脅威 2026」：AI活用攻撃が初の1位に",
    summary:
      "IPAが発表した「情報セキュリティ10大脅威 2026（組織編）」において、「AIを悪用した攻撃手法の巧妙化」が初めて1位を獲得しました。フィッシング自動化・マルウェア生成・ディープフェイクを組み合わせた複合型攻撃への対策が急務とされています。",
    href: "https://www.ipa.go.jp/",
    isExternal: true,
  },
  {
    id: "4",
    date: "2026年3月20日",
    source: "海外メディア",
    title: "米国CISA・FBIが共同勧告：AIエージェントを悪用したサプライチェーン攻撃",
    summary:
      "米国CISAとFBIは、AIエージェントを悪用したソフトウェアサプライチェーン攻撃に関する共同勧告を発出しました。攻撃者はオープンソースリポジトリにAI生成の悪意あるコードを混入させるだけでなく、CI/CDパイプライン上でコード修正を自律的に行うAIエージェントへの不正アクセスも確認されています。日本企業も影響を受ける可能性があります。",
    href: "https://www.cisa.gov/",
    isExternal: true,
  },
];

export default function CyberNewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-section border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
            Cyber Threat Intelligence
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-brand-text leading-tight">
            AIサイバー攻撃ニュース
          </h1>
          <p className="mt-4 text-brand-sub text-[17px] max-w-xl leading-relaxed">
            国内外の最新サイバー攻撃インシデント・脅威情報をキュレーション。
            IPA・JPCERT/CC・警察庁・海外メディアの情報をSecureBankが解説します。
          </p>
        </div>
      </section>

      {/* Why AI Cyber Attacks are Increasing */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-brand-border rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-brand-text mb-5">
            なぜAIサイバー攻撃が増えているのか
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-text mb-2">攻撃コストの劇的低下</h3>
              <p className="text-sm text-brand-sub leading-relaxed">
                生成AIにより、高度な攻撃メールや偽サイト・マルウェアを数秒で自動生成できるようになり、専門知識不要で攻撃が実行できます。
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-text mb-2">日本語攻撃の精度向上</h3>
              <p className="text-sm text-brand-sub leading-relaxed">
                LLMの日本語能力の向上により、不自然さのない完璧な日本語のフィッシングメールや偽SNSアカウントが大量生成されます。
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-brand-text mb-2">中小企業が主要標的に</h3>
              <p className="text-sm text-brand-sub leading-relaxed">
                大企業と比較してセキュリティ体制が脆弱な中堅中小企業が、AIを活用した大規模自動攻撃の主要ターゲットになっています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-brand-text mb-8">最新インシデント・脅威情報</h2>
        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="border border-brand-border rounded-2xl p-8 hover:shadow-card-hover transition-shadow bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <time className="text-sm text-brand-sub">{article.date}</time>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${sourceColors[article.source]}`}
                >
                  {article.source}
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3 leading-snug">
                {article.title}
              </h3>
              <p className="text-brand-sub text-sm leading-relaxed mb-5">
                {article.summary}
              </p>
              {article.isExternal ? (
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                >
                  出典を確認する
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <Link
                  href={article.href}
                  className="text-sm font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                >
                  続きを読む →
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-brand-border text-center">
          <p className="text-brand-sub text-sm mb-6">
            自社のセキュリティリスクを確認したい方は、無料診断をご利用ください。
          </p>
          <Link href="/contact" className="btn-grad btn-pulse inline-flex">
            無料セキュリティ相談を申し込む
          </Link>
        </div>
      </section>
    </main>
  );
}
