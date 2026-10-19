import PageShell from "../PageShell";
import Reveal from "../Reveal";
import ArticleBody from "../ArticleBody";
import ArrowButton from "../ArrowButton";
import HelpCard from "../HelpCard";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import NotFoundContent from "./NotFoundContent";
import { projects } from "../../../lib/project-data";
import { BANNERS } from "../../../lib/pages-content";

export default function ProjectDetailPage({ project }) {
  if (!project) {
    return (
      <PageShell title="Project Not Found" crumbs={[{ label: "Projects", href: "/gallery" }, { label: "Not Found" }]} image={BANNERS.gallery} newsletter={false}>
        <NotFoundContent />
      </PageShell>
    );
  }

  const facts = [
    { label: "Project Type", value: project.category },
    { label: "Category", value: project.filterKey },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
  ];
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <PageShell
      title="Project Details"
      crumbs={[{ label: "Projects", href: "/gallery" }, { label: project.title }]}
      image={project.image}
    >
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <Reveal delay={0} duration={1}>
            <h2 data-cursor="lg" className="font-heading text-section text-ink">{project.title}</h2>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line/30 py-7 lg:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm text-text-muted">{fact.label}:</dt>
                  <dd className="mt-1 font-heading text-lead text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 h-80 overflow-hidden rounded-3xl sm:h-125 lg:h-175">
            <img src={project.image} alt={`${project.title}, ${project.location}`} fetchPriority="high" className="size-full object-cover" />
          </Reveal>

          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <Reveal direction="left">
              <p className="font-heading text-card-lg text-ink">{project.description}</p>
              <div className="mt-8">
                <ArticleBody source={project.content} />
              </div>
            </Reveal>
            <Reveal direction="right" className="space-y-6 lg:sticky lg:top-32">
              <div className="rounded-3xl bg-bg-base p-8">
                <h3 className="font-heading text-card text-ink">Project Scope</h3>
                <p className="mt-3 text-base leading-7 text-text-muted">{project.scope}</p>
                <ArrowButton href="/contact" className="mt-7">Start A Similar Project</ArrowButton>
              </div>
              <HelpCard text="Planning something like this? Talk to the team that built it." />
            </Reveal>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="pb-24 lg:pb-32.5">
          <div className="mx-auto max-w-site px-5">
            <SectionHeading eyebrow="More Projects" title={["Explore ", { gold: "More" }, " Of Our Work"]} />
            <ul className="grid gap-x-6 gap-y-14 md:grid-cols-2">
              {others.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={i * 0.1} duration={1}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}
    </PageShell>
  );
}
