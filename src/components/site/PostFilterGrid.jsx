"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import PostCard from "./PostCard";

const ALL = "all";

// Category chips + article grid. Every article is in the server HTML; filtering only hides cards.
export default function PostFilterGrid({ posts }) {
  const categories = useMemo(() => {
    const seen = new Map();
    posts.forEach((a) => seen.set(a.category, a.categoryLabel));
    return [[ALL, "All Articles"], ...seen];
  }, [posts]);
  const [active, setActive] = useState(ALL);

  // Category links from article pages arrive as /blog?category=...
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("category");
    if (fromUrl && categories.some(([key]) => key === fromUrl)) setActive(fromUrl);
  }, [categories]);

  return (
    <>
      <div role="group" aria-label="Filter articles by category" className="mb-12 flex flex-wrap gap-2.5">
        {categories.map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === key}
            onClick={() => setActive(key)}
            className={`rounded-full border px-5 py-2.5 font-heading text-base transition-colors duration-300 ${
              active === key ? "border-primary bg-primary text-white" : "border-line/40 text-ink hover:border-primary hover:text-primary"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.slug} delay={(i % 3) * 0.08} duration={1} hidden={active !== ALL && post.category !== active}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </ul>
    </>
  );
}
