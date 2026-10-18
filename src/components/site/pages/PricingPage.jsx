"use client";

import PageShell from "../PageShell";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Accordion from "../Accordion";
import HelpCard from "../HelpCard";
import PricingSection from "../PricingSection";
import { PRICING, BANNERS } from "../../../lib/pages-content";

export default function PricingPage() {
  return (
    <PageShell title="Pricing" crumbs={[{ label: "Pricing" }]} image={BANNERS.services}>
      <PricingSection detailed />

      <section className="pb-24 lg:pb-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={PRICING.faq.eyebrow} title={PRICING.faq.title} />
          <div className="grid items-start gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <Reveal direction="left">
              <Accordion items={PRICING.faq.items} />
            </Reveal>
            <Reveal direction="right">
              <HelpCard text="Want a quote for your exact space? Our team will visit and measure." image={BANNERS.services} />
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
