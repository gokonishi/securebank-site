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
    date: "2026年4月1日",
    category: "プレスリリース",
    title: "セキュア・バンク株式会社を設立しました",
    summary:
      "2026年4月1日、セキュア・バンク株式会社を設立いたしました。AIによる攻撃を再現し、中堅中小企業のセキュリティ対策を一体支援するサービスを提供してまいります。今後とも何卒よろしくお願いいたします。",
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
