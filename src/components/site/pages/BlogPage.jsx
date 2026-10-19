import PageShell from "../PageShell";
import SectionHeading from "../SectionHeading";
import PostFilterGrid from "../PostFilterGrid";
import { blogArticles } from "../../../lib/blog-data";
import { BLOG_PAGE, BANNERS } from "../../../lib/pages-content";

export default function BlogPage() {
  // Only the fields the cards need are sent to the client filter
  const posts = blogArticles.map(({ slug, title, excerpt, image, date, author, category, categoryLabel }) => ({
    slug, title, excerpt, image, date, author, category, categoryLabel,
  }));

  return (
    <PageShell title="Journal" crumbs={[{ label: "Journal" }]} image={BANNERS.blog}>
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={BLOG_PAGE.eyebrow} title={BLOG_PAGE.title} />
          <PostFilterGrid posts={posts} />
        </div>
      </section>
    </PageShell>
  );
}
