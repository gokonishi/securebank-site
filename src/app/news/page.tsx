import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SecureBankからのお知らせ | セキュア・バンク株式会社",
  description:
    "セキュア・バンク株式会社からのサービスアップデート、新機能リリース、導入事例などの最新情報をお届けします。",
};

type Category = "サービス情報" | "導入事例" | "プレスリリース" | "お知らせ";

interface NewsArticle {
  id: string;
  date: string;
  category: Category;
  title: string;
  summary: string;
  href: string;
}

const categoryColors: Record<Category, string> = {
  "サービス情報": "bg-blue-100 text-blue-700",
  "導入事例": "bg-purple-100 text-purple-700",
  "プレスリリース": "bg-emerald-100 text-emerald-700",
  "お知らせ": "bg-slate-100 text-slate-600",
};

const articles: NewsArticle[] = [
  {
    id: "1",
    date: "2026年4月10日",
    category: "サービス情報",
    title: "AIサイバー攻撃シミュレーション v3.0 をリリース",
    summary:
      "最新のLLMベースの攻撃手法に対応した新バージョンをリリースしました。フィッシング自動生成・ソーシャルエンジニアリング診断など5つの新機能を追加。従来比でシミュレーション精度が23%向上しています。",
    href: "#",
  },
  {
    id: "2",
    date: "2026年3月25日",
    category: "導入事例",
    title: "製造業A社：AIサイバー診断で87件の脆弱性を発見・是正",
    summary:
      "従業員300名の製造業A社にて、SecureBankのAI診断サービスを導入いただきました。3ヶ月の継続支援を通じて、サプライチェーン攻撃に繋がる87件の脆弱性を特定・修正し、セキュリティスコアが大幅に改善しました。",
    href: "#",
  },
  {
    id: "3",
    date: "2026年3月1日",
    category: "プレスリリース",
    title: "セキュア・バンク株式会社、シリーズAラウンドにて5億円の資金調達を実施",
    summary:
      "AIサイバーセキュリティ事業の更なる拡大に向け、シリーズAラウンドにて5億円の資金調達を完了しました。調達資金はエンジニアリング体制の強化および中小企業向けプランの拡充に充当します。",
    href: "#",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-section border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
            News &amp; Updates
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-brand-text leading-tight">
            SecureBankからの<br />お知らせ
          </h1>
          <p className="mt-4 text-brand-sub text-[17px] max-w-xl leading-relaxed">
            サービスアップデート・導入事例・プレスリリースなど最新情報をお届けします。
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="border border-brand-border rounded-2xl p-8 hover:shadow-card-hover transition-shadow bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <time className="text-sm text-brand-sub">{article.date}</time>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category]}`}
                >
                  {article.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-brand-text mb-3 leading-snug">
                {article.title}
              </h2>
              <p className="text-brand-sub text-sm leading-relaxed mb-5">
                {article.summary}
              </p>
              <Link
                href={article.href}
                className="text-sm font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
              >
                続きを読む →
              </Link>
            </article>
          ))}
        </div>

        {/* Empty state hint */}
        <div className="mt-16 pt-10 border-t border-brand-border text-center">
          <p className="text-brand-sub text-sm">
            過去のお知らせはこちらに順次掲載されます。
          </p>
        </div>
      </section>
    </main>
  );
}
