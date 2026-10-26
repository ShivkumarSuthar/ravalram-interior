import { Check } from "lucide-react";
import PageShell from "../PageShell";
import Reveal from "../Reveal";
import Eyebrow from "../Eyebrow";
import TitleParts from "../TitleParts";
import ArrowButton from "../ArrowButton";
import SectionHeading from "../SectionHeading";
import Accordion from "../Accordion";
import HelpCard from "../HelpCard";
import ServicesSection from "../home/ServicesSection";
import ProjectsSection from "../home/ProjectsSection";
import ProcessSection from "../home/ProcessSection";
import { getCity, CITY_FAQ, BANNERS } from "../../../lib/pages-content";
import Image from "next/image";

export default function CityPage({ slug }) {
  const city = getCity(slug);

  return (
    <PageShell title={`Interior Designer In ${city.name}`} crumbs={[{ label: "Locations", href: "/about-us" }, { label: city.name }]} image={BANNERS.city}>
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto grid max-w-site items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <Eyebrow>{city.eyebrow}</Eyebrow>
            <h2 data-cursor="lg" className="mt-5 font-heading text-section capitalize text-ink">
              <TitleParts parts={city.title} />
            </h2>
            <p className="mt-6 text-base leading-7 text-text-muted">{city.text}</p>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {city.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 font-heading text-lead text-ink">
                  <Check className="size-4.5 shrink-0 text-primary" strokeWidth={2.5} />
                  {point}
                </li>
              ))}
            </ul>
            <ArrowButton href="/contact" className="mt-10">Book A Consultation</ArrowButton>
          </Reveal>
          <Reveal direction="right" className="relative h-80 overflow-hidden rounded-3xl sm:h-125">
            <Image src={city.image.src} alt={city.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />

      <section className="pb-24 lg:pb-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow="Common Questions" title={["What Clients In ", { gold: city.name }, " Ask Us"]} />
          <div className="grid items-start gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <Reveal direction="left">
              <Accordion items={CITY_FAQ} />
            </Reveal>
            <Reveal direction="right">
              <HelpCard text={`Planning a project in ${city.name}? Talk to our team.`} image={BANNERS.city} />
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
