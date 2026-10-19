import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import ProjectsCarousel from "./ProjectsCarousel";
import { PROJECTS } from "../../../lib/home-content";

// Server-rendered section; the carousel is the only client component
export default function ProjectsSection() {
  return (
    <section className="overflow-hidden bg-bg-soft py-24 lg:py-32.5">
      <div className="mx-auto max-w-site px-5">
        <SectionHeading eyebrow={PROJECTS.eyebrow} title={PROJECTS.title} className="lg:ml-0" />
        <Reveal delay={0} duration={1}>
          <ProjectsCarousel items={PROJECTS.items} />
        </Reveal>
      </div>
    </section>
  );
}
