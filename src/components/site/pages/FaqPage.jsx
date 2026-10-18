"use client";

import PageShell from "../PageShell";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Accordion from "../Accordion";
import ArrowButton from "../ArrowButton";
import { FAQ_PAGE, BANNERS } from "../../../lib/pages-content";

export default function FaqPage() {
  const { help } = FAQ_PAGE;

  return (
    <PageShell seoView="faqs" title="FAQs" crumbs={[{ label: "FAQs" }]} image={BANNERS.faqs}>
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={FAQ_PAGE.eyebrow} title={FAQ_PAGE.title} />
          <div className="grid items-start gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <Reveal direction="left">
              <Accordion items={FAQ_PAGE.items} />
            </Reveal>
            <Reveal direction="right" className="lg:sticky lg:top-32">
              <div className="h-60 overflow-hidden rounded-3xl">
                <img src={help.image.src} alt={help.image.alt} loading="lazy" decoding="async" className="size-full object-cover" />
              </div>
              <h2 className="mt-7 font-heading text-card-lg text-surface-dark">{help.title}</h2>
              <p className="mt-3 text-base leading-7 text-text-muted">{help.text}</p>
              <ArrowButton href="/contact" className="mt-8">Ask Our Team</ArrowButton>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
