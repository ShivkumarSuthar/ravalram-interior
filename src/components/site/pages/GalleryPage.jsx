"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import PageShell from "../PageShell";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import Lightbox from "../Lightbox";
import { projects } from "../../../lib/project-data";
import { GALLERY_PAGE, BANNERS } from "../../../lib/pages-content";

export default function GalleryPage() {
  const [viewing, setViewing] = useState(null);
  const images = GALLERY_PAGE.images.items;

  return (
    <PageShell seoView="gallery" title="Our Projects" crumbs={[{ label: "Projects" }]} image={BANNERS.gallery}>
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={GALLERY_PAGE.projects.eyebrow} title={GALLERY_PAGE.projects.title} />
          <ul className="grid gap-x-6 gap-y-14 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal as="li" key={project.slug} delay={(i % 2) * 0.1} duration={1}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-24 lg:pb-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={GALLERY_PAGE.images.eyebrow} title={GALLERY_PAGE.images.title} />
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {images.map((img, i) => (
              <Reveal as="li" key={img.src} delay={(i % 4) * 0.08} duration={1} className={i % 5 === 0 ? "col-span-2 row-span-2" : ""}>
                <button
                  type="button"
                  onClick={() => setViewing(i)}
                  aria-label={`View larger: ${img.alt}`}
                  className={`group relative block w-full overflow-hidden rounded-3xl ${i % 5 === 0 ? "h-full min-h-75" : "h-45 sm:h-75"}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span aria-hidden className="absolute inset-0 grid place-items-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                    <span className="grid size-14 place-items-center rounded-full bg-primary">
                      <Expand className="size-5" />
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Lightbox images={images} index={viewing} onChange={setViewing} onClose={() => setViewing(null)} />
    </PageShell>
  );
}
