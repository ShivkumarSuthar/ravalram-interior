import Link from "next/link";
import Reveal from "./Reveal";

// Dark photo banner with a centered title and breadcrumb, used at the top of every inner page
export default function PageBanner({ title, crumbs = [], image }) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs];

  return (
    <section className="relative isolate overflow-hidden bg-bg-dark pb-20 pt-40 text-center lg:pb-29 lg:pt-44">
      {image && (
        <img src={image} alt="" fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover" />
      )}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />

      <Reveal delay={0.1} duration={1} className="mx-auto max-w-site px-5">
        <h1 data-cursor="lg" className="font-heading text-section-lg capitalize text-white">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="mt-8">
          <ol className="flex flex-wrap items-center justify-center gap-2 font-heading text-sm uppercase">
            {trail.map((crumb, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-white">-</span>}
                  {last ? (
                    <span aria-current="page" className="text-primary">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="text-white transition-colors duration-300 hover:text-primary">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Reveal>
    </section>
  );
}
