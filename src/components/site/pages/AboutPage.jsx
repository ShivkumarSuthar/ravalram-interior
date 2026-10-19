import Link from "next/link";
import { Check, Compass, Hammer, Heart, Layers, ShieldCheck, Sparkles } from "lucide-react";
import PageShell from "../PageShell";
import Reveal from "../Reveal";
import Eyebrow from "../Eyebrow";
import TitleParts from "../TitleParts";
import ArrowButton from "../ArrowButton";
import SectionHeading from "../SectionHeading";
import ProcessSection from "../home/ProcessSection";
import GallerySection from "../home/GallerySection";
import { ABOUT_PAGE, BANNERS } from "../../../lib/pages-content";

const VALUE_ICONS = { Compass, Hammer, Heart, Layers, ShieldCheck, Sparkles };
const CITY_PAGES ={ Mumbai: "/mumbai", Pune: "/pune", Goa: "/goa", Bengaluru: "/bangalore", Hyderabad: "/hyderabad", Hubballi: "/hubli", Kumta: "/kumta", Honnavar: "/honnavar" };

export default function AboutPage() {
  const { intro, band, history, values, team, cities } = ABOUT_PAGE;

  return (
    <PageShell title="About Us" crumbs={[{ label: "About Us" }]} image={BANNERS.about}>
      {/* Story */}
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <Reveal direction="left" className="max-w-215">
              <Eyebrow>{intro.eyebrow}</Eyebrow>
              <h2 data-cursor="lg" className="mt-5 font-heading text-section capitalize text-ink">
                <TitleParts parts={intro.title} />
              </h2>
            </Reveal>
            <Reveal direction="right" className="h-80 overflow-hidden rounded-3xl lg:row-span-2 lg:h-155 lg:w-112.5">
              <img src={intro.image.src} alt={intro.image.alt} loading="lazy" decoding="async" className="size-full object-cover" />
            </Reveal>

            <Reveal direction="bottom" className="grid items-center gap-10 md:grid-cols-[auto_1fr] lg:gap-14">
              <div>
                <p className="font-heading text-watermark leading-none text-primary">{intro.years}</p>
                <p className="mt-2 font-heading text-lead-lg text-ink">{intro.yearsLabel}</p>
              </div>
              <div className="max-w-150 space-y-4">
                {intro.paragraphs.map((p) => (
                  <p key={p} className="text-base leading-7 text-text-muted">{p}</p>
                ))}
                <ArrowButton href={intro.cta.href} className="mt-4">{intro.cta.label}</ArrowButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full-width photo band */}
      <Reveal delay={0} className="mx-auto h-80 max-w-site overflow-hidden px-5 sm:h-125 lg:h-175">
        <img src={band.src} alt={band.alt} loading="lazy" decoding="async" className="size-full rounded-3xl object-cover" />
      </Reveal>

      {/* History timeline */}
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={history.eyebrow} title={history.title} />
          <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {history.events.map((event, i) => (
              <Reveal as="li" key={event.year} delay={i * 0.08} duration={1} className="relative border-t border-line/30 pt-8">
                <span aria-hidden className="absolute -top-1.5 left-0 size-3 rounded-full bg-primary" />
                <p className="font-heading text-card-lg text-ink">{event.year}</p>
                <h3 className="mt-3 font-heading text-lead-lg text-primary">{event.title}</h3>
                <p className="mt-2 text-base leading-7 text-text-muted">{event.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-dark py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <Reveal delay={0} duration={1} className="max-w-180">
            <Eyebrow tone="light">{values.eyebrow}</Eyebrow>
            <h2 data-cursor="lg" className="mt-5 font-heading text-section capitalize text-white">
              <TitleParts parts={values.title} />
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.items.map((value, i) => {
              const Icon = VALUE_ICONS[value.iconName] || Check;
              return (
                <Reveal as="li" key={value.title} delay={i * 0.08} duration={1} className="rounded-3xl border border-white/10 bg-surface-dark p-8 transition-colors duration-300 hover:border-primary">
                  <span className="grid size-14 place-items-center rounded-full bg-primary text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 font-heading text-card text-white">{value.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/75">{value.desc}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <ProcessSection />

      {/* Leadership */}
      <section className="pb-24 lg:pb-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={team.eyebrow} title={team.title} />
          <ul className="grid gap-6 md:grid-cols-3">
            {team.people.map((person, i) => (
              <Reveal as="li" key={person.id} delay={i * 0.08} duration={1} className="rounded-3xl bg-bg-base p-8">
                <p className="font-heading text-eyebrow uppercase text-primary">{person.role}</p>
                <h3 className="mt-3 font-heading text-card-lg text-ink">{person.name}</h3>
                <p className="mt-4 text-base leading-7 text-text-muted">{person.bio}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <GallerySection />

      {/* Cities */}
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={cities.eyebrow} title={cities.title} />
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {cities.items.map((city) => {
              const href = CITY_PAGES[city.name];
              const body = (
                <>
                  <span className="font-heading text-card text-ink transition-colors group-hover:text-primary">{city.name}</span>
                  <span className="mt-1 block text-base leading-7 text-text-muted">{city.detail}</span>
                </>
              );
              return (
                <li key={city.name} className="border-b border-line/30 py-6">
                  {href ? (
                    <Link href={href} className="group block">{body}</Link>
                  ) : (
                    <div className="group">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
