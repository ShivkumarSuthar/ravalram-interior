import Link from "next/link";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { JOURNAL } from "../../../lib/home-content";
import Image from "next/image";

function Meta({ post }) {
  return (
    <p className="flex flex-wrap gap-x-4 text-sm text-text-muted">
      <time>{post.date}</time>
      <span>
        By <span className="text-primary">{post.author}</span>
      </span>
    </p>
  );
}

function CategoryPill({ children }) {
  return (
    <span className="absolute left-5 top-5 z-10 rounded-full bg-primary px-3.25 py-1.25 font-heading text-sm text-white">
      {children}
    </span>
  );
}

export default function JournalSection() {
  const [featured, ...rest] = JOURNAL.posts;

  return (
    <section className="bg-bg-soft pt-24 lg:pt-32.5">
      <div className="mx-auto max-w-site px-5">
        <SectionHeading eyebrow={JOURNAL.eyebrow} title={JOURNAL.title} />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal as="article" delay={0} duration={1} className="group">
            <Link href={featured.href} className="relative block h-75 overflow-hidden rounded-3xl sm:h-125">
              <CategoryPill>{featured.category}</CategoryPill>
              <Image src={featured.image} alt={featured.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </Link>
            <div className="mt-6">
              <Meta post={featured} />
              <h3 className="mt-3 font-heading text-card-lg leading-[1.3] text-ink">
                <Link href={featured.href} className="transition-colors duration-300 hover:text-primary">
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-4 text-base leading-7 text-text-muted">{featured.excerpt}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} duration={1} className="divide-y divide-line/30">
            {rest.map((post) => (
              <article key={post.href} className="group grid gap-6 py-8 first:pt-0 sm:grid-cols-[17.5rem_1fr] sm:gap-7.5">
                <Link href={post.href} className="relative block h-50 overflow-hidden rounded-3xl">
                  <CategoryPill>{post.category}</CategoryPill>
                  <Image src={post.image} alt={post.title} fill sizes="(min-width: 640px) 280px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </Link>
                <div>
                  <Meta post={post} />
                  <h3 className="mt-3 font-heading text-card text-ink">
                    <Link href={post.href} className="transition-colors duration-300 hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-base leading-7 text-text-muted">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
