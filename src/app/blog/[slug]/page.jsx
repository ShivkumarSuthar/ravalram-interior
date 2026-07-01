import { getBlogArticleBySlug, blogArticles } from "../../../lib/blog-data";
import { getPageMetadata, generateSchema } from "../../../lib/seo";
import BlogDetailsClient from "./BlogDetailsClient";

export async function generateStaticParams() {
  return blogArticles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const article = getBlogArticleBySlug(params.slug);

  if (!article) {
    return getPageMetadata({
      title: "Article Not Found",
      description: "The requested blog article could not be located on Suthar Interior Studio.",
    });
  }

  return getPageMetadata({
    title: `${article.title} | Suthar Interior Studio`,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    keywords: [article.categoryLabel, "Interior Design Blog", "Woodworking Article", "Suthar Insights"],
    ogImage: article.image,
    ogType: "article",
    authors: [{ name: article.author }],
  });
}

export default async function BlogDetailsPage(props) {
  const params = await props.params;
  const article = getBlogArticleBySlug(params.slug);

  if (!article) {
    return <BlogDetailsClient article={null} />;
  }

  // Create article schema
  const articleSchema = generateSchema("Article", {
    title: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: "2026-06-28",
    author: article.author,
    slug: article.slug,
  });

  const breadcrumbSchema = generateSchema("Breadcrumb", {
    items: [
      { name: "Home", path: "/" },
      { name: "Journal", path: "/blog" },
      { name: article.title, path: `/blog/${article.slug}` },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogDetailsClient article={article} />
    </>
  );
}
