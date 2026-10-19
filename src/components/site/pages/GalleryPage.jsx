import PageShell from "../PageShell";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import GalleryGrid from "../GalleryGrid";
import { projects } from "../../../lib/project-data";
import { GALLERY_PAGE, BANNERS } from "../../../lib/pages-content";

export default function GalleryPage() {
  return (
    <PageShell title="Our Projects" crumbs={[{ label: "Projects" }]} image={BANNERS.gallery}>
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
          <GalleryGrid images={GALLERY_PAGE.images.items} />
        </div>
      </section>
    </PageShell>
  );
}
