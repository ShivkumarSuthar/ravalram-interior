"use client";

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
import { SERVICES_PAGE, BANNERS } from "../../../lib/pages-content";

export default function ServicesPage() {
  const { core, models, steps, faq } = SERVICES_PAGE;

  return (
    <PageShell seoView="services" title="Services" crumbs={[{ label: "Services" }]} image={BANNERS.services}>
      <ServicesSection />

      {/* Each service in detail, alternating image side */}
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={core.eyebrow} title={core.title} />
          <div className="space-y-20 lg:space-y-28">
            {core.items.map((service, i) => (
              <article key={service.id} id={service.id} className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal direction={i % 2 ? "right" : "left"} className={`h-80 overflow-hidden rounded-3xl sm:h-115 ${i % 2 ? "lg:order-2" : ""}`}>
                  <img src={service.image} alt={`Suthar ${service.title.toLowerCase()}`} loading="lazy" decoding="async" className="size-full object-cover" />
                </Reveal>
                <Reveal direction={i % 2 ? "left" : "right"}>
                  <p className="font-heading text-eyebrow uppercase text-primary">{String(i + 1).padStart(2, "0")} / {service.accent}</p>
                  <h3 className="mt-4 font-heading text-section text-surface-dark">{service.title}</h3>
                  <p className="mt-5 text-base leading-7 text-text-muted">{service.description}</p>
                  <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 font-heading text-lead text-surface-dark">
                        <Check className="size-4.5 shrink-0 text-primary" strokeWidth={2.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ArrowButton href="/contact" className="mt-10">Discuss This Service</ArrowButton>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to work with us: numbered tiles over a dark photo */}
      <section className="relative isolate overflow-hidden py-24 lg:py-32.5">
        <img src={models.image.src} alt={models.image.alt} loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/70" />
        <div className="mx-auto max-w-site px-5">
          <Reveal delay={0} duration={1} className="max-w-180">
            <Eyebrow tone="light">{models.eyebrow}</Eyebrow>
            <h2 data-cursor="lg" className="mt-5 font-heading text-section capitalize text-white">
              <TitleParts parts={models.title} />
            </h2>
          </Reveal>
          <ul className="mt-14 grid border-white/15 sm:grid-cols-2 lg:grid-cols-3 lg:border-l">
            {models.items.map((model, i) => (
              <Reveal as="li" key={model.title} delay={i * 0.08} duration={1} className="border-b border-white/15 py-8 sm:px-8 lg:border-r">
                <p className="font-heading text-base text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-heading text-card-lg text-white">{model.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/75">{model.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Step by step */}
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={steps.eyebrow} title={steps.title} />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.items.map((step, i) => (
              <Reveal as="li" key={step.num} delay={(i % 4) * 0.08} duration={1} className="rounded-3xl bg-bg-base p-8">
                <span className="grid size-16 place-items-center rounded-full bg-bg-soft font-heading text-card text-surface-dark">{step.num}</span>
                <h3 className="mt-6 font-heading text-card text-surface-dark">{step.name}</h3>
                <p className="mt-2 text-base leading-7 text-text-muted">{step.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Questions */}
      <section className="pb-24 lg:pb-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
          <div className="grid items-start gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <Reveal direction="left">
              <Accordion items={faq.items} />
            </Reveal>
            <Reveal direction="right">
              <HelpCard text="Talk to our team about your space, budget and timeline." image={BANNERS.services} />
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
