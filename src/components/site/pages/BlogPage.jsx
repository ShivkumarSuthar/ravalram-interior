"use client";

import { useEffect, useMemo, useState } from "react";
import PageShell from "../PageShell";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import PostCard from "../PostCard";
import { blogArticles } from "../../../lib/blog-data";
import { BLOG_PAGE, BANNERS } from "../../../lib/pages-content";

const ALL = "all";

export default function BlogPage() {
  const categories = useMemo(() => {
    const seen = new Map();
    blogArticles.forEach((a) => seen.set(a.category, a.categoryLabel));
    return [[ALL, "All Articles"], ...seen];
  }, []);
  const [active, setActive] = useState(ALL);

  // Category links from article pages arrive as /blog?category=...
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("category");
    if (fromUrl && categories.some(([key]) => key === fromUrl)) setActive(fromUrl);
  }, [categories]);

  const posts = active === ALL ? blogArticles : blogArticles.filter((a) => a.category === active);

  return (
    <PageShell seoView="blog" title="Journal" crumbs={[{ label: "Journal" }]} image={BANNERS.blog}>
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={BLOG_PAGE.eyebrow} title={BLOG_PAGE.title} />

          <div role="group" aria-label="Filter articles by category" className="mb-12 flex flex-wrap gap-2.5">
            {categories.map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={active === key}
                onClick={() => setActive(key)}
                className={`rounded-full border px-5 py-2.5 font-heading text-base transition-colors duration-300 ${
                  active === key ? "border-primary bg-primary text-white" : "border-line/40 text-surface-dark hover:border-primary hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <ul className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={(i % 3) * 0.08} duration={1}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
