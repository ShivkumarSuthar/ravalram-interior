import Link from "next/link";

// Journal grid card: image with category pill, date and author, title, excerpt
export default function PostCard({ post }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="group">
      <Link href={href} className="relative block h-60 overflow-hidden rounded-3xl lg:h-75">
        <span className="absolute left-5 top-5 z-10 rounded-full bg-primary px-3.25 py-1.25 font-heading text-sm text-white">
          {post.categoryLabel}
        </span>
        <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <p className="mt-5 flex flex-wrap gap-x-4 text-sm text-text-muted">
        <time>{post.date}</time>
        <span>
          By <span className="text-primary">{post.author}</span>
        </span>
      </p>
      <h3 className="mt-3 font-heading text-card text-ink">
        <Link href={href} className="transition-colors duration-300 hover:text-primary">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 text-base leading-7 text-text-muted">{post.excerpt}</p>
    </article>
  );
}
