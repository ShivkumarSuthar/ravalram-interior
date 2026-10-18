"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageShell from "../PageShell";
import Reveal from "../Reveal";
import ArticleBody from "../ArticleBody";
import HelpCard from "../HelpCard";
import NotFoundContent from "./NotFoundContent";
import { blogArticles } from "../../../lib/blog-data";
import { BANNERS } from "../../../lib/pages-content";

function SidebarBlock({ title, children }) {
  return (
    <div className="rounded-3xl bg-bg-base p-8">
      <h2 className="font-heading text-card text-surface-dark">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function BlogDetailPage({ article }) {
  if (!article) {
    return (
      <PageShell title="Article Not Found" crumbs={[{ label: "Journal", href: "/blog" }, { label: "Not Found" }]} image={BANNERS.blog} newsletter={false}>
        <NotFoundContent />
      </PageShell>
    );
  }

  const index = blogArticles.findIndex((a) => a.slug === article.slug);
  const prev = blogArticles[index - 1];
  const next = blogArticles[index + 1];
  const recent = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const categories = [...new Map(blogArticles.map((a) => [a.category, a.categoryLabel]))].map(([key, label]) => ({
    key,
    label,
    count: blogArticles.filter((a) => a.category === key).length,
  }));

  return (
    <PageShell title="Journal" crumbs={[{ label: "Journal", href: "/blog" }, { label: article.categoryLabel }]} image={article.image}>
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto grid max-w-site items-start gap-12 px-5 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <Reveal as="article" delay={0} duration={1}>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted">
              <span className="rounded-full bg-primary px-3.25 py-1.25 font-heading text-white">{article.categoryLabel}</span>
              <time>{article.date}</time>
              <span>
                By <span className="text-primary">{article.author}</span>
              </span>
              {article.readTime && <span>{article.readTime}</span>}
            </p>
            <h2 data-cursor="lg" className="mt-5 font-heading text-section text-surface-dark">{article.title}</h2>
            <div className="mt-10 h-75 overflow-hidden rounded-3xl sm:h-125">
              <img src={article.image} alt={article.title} fetchPriority="high" className="size-full object-cover" />
            </div>
            <p className="mt-10 font-heading text-card text-surface-dark">{article.excerpt}</p>
            <div className="mt-8">
              <ArticleBody source={article.content} />
            </div>

            <nav aria-label="More articles" className="mt-16 grid gap-6 border-t border-line/30 pt-10 sm:grid-cols-2">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="group">
                  <span className="flex items-center gap-2 text-sm uppercase text-text-muted"><ArrowLeft className="size-4" /> Previous</span>
                  <span className="mt-2 block font-heading text-lead-lg text-surface-dark transition-colors group-hover:text-primary">{prev.title}</span>
                </Link>
              ) : <span />}
              {next && (
                <Link href={`/blog/${next.slug}`} className="group sm:text-right">
                  <span className="flex items-center gap-2 text-sm uppercase text-text-muted sm:justify-end">Next <ArrowRight className="size-4" /></span>
                  <span className="mt-2 block font-heading text-lead-lg text-surface-dark transition-colors group-hover:text-primary">{next.title}</span>
                </Link>
              )}
            </nav>
          </Reveal>

          <Reveal as="aside" direction="right" className="space-y-6 lg:sticky lg:top-32">
            <SidebarBlock title="Categories">
              <ul className="divide-y divide-line/30">
                {categories.map((c) => (
                  <li key={c.key}>
                    <Link href={`/blog?category=${c.key}`} className="flex justify-between py-3 text-base text-text-muted transition-colors hover:text-primary">
                      {c.label}
                      <span>({c.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SidebarBlock>
            <SidebarBlock title="Recent Articles">
              <ul className="space-y-5">
                {recent.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group flex gap-4">
                      <span className="size-20 shrink-0 overflow-hidden rounded-xl">
                        <img src={post.image} alt="" loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </span>
                      <span>
                        <time className="block text-sm text-text-muted">{post.date}</time>
                        <span className="mt-1 block font-heading text-base text-surface-dark transition-colors group-hover:text-primary">{post.title}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SidebarBlock>
            <HelpCard text="Have a question about your own project? Our team is happy to help." />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
