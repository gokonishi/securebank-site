import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "導入事例",
  description: "導入事例は現在準備中です。",
  robots: { index: false, follow: false },
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <FadeIn>
          <span className="tag mb-6">Case Studies</span>
          <h1 className="font-display font-extrabold text-[36px] md:text-[46px] tracking-tight text-brand-text mt-5 mb-6 leading-[1.2]">
            導入事例は<br />現在準備中です。
          </h1>
          <p className="text-[16px] text-brand-sub leading-[1.9] mb-10">
            公開可能な実例が揃い次第、こちらに掲載いたします。
            具体的な活用イメージは、個別のご相談でお伝えします。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-grad btn-pulse">
              お問い合わせ
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-border text-brand-text font-semibold rounded-xl hover:bg-slate-50 transition-colors text-[15px]"
            >
              サービス概要を見る
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
