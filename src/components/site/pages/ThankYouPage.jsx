"use client";

import { CheckCircle2 } from "lucide-react";
import PageShell from "../PageShell";
import Reveal from "../Reveal";
import TitleParts from "../TitleParts";
import ArrowButton from "../ArrowButton";
import { THANK_YOU_PAGE, BANNERS } from "../../../lib/pages-content";
import { CONTACT } from "../../../lib/home-content";

export default function ThankYouPage() {
  return (
    <PageShell seoView="thank-you" title={THANK_YOU_PAGE.title} crumbs={[{ label: THANK_YOU_PAGE.title }]} image={BANNERS.utility} newsletter={false}>
      <section className="py-24 lg:py-32.5">
        <Reveal delay={0} duration={1} className="mx-auto max-w-heading px-5 text-center">
          <CheckCircle2 className="mx-auto size-16 text-primary" strokeWidth={1.5} />
          <h2 data-cursor="lg" className="mt-6 font-heading text-section capitalize text-surface-dark">
            <TitleParts parts={THANK_YOU_PAGE.heading} />
          </h2>
          <p className="mx-auto mt-5 max-w-150 text-base leading-7 text-text-muted">{THANK_YOU_PAGE.text}</p>
          <p className="mt-3 text-base text-text-muted">
            Need us sooner? Call <a href={CONTACT.phoneHref} className="text-primary underline">{CONTACT.phone}</a>.
          </p>

          <ol className="mt-14 grid gap-6 text-left md:grid-cols-3">
            {THANK_YOU_PAGE.steps.map((step, i) => (
              <li key={step.title} className="rounded-3xl bg-bg-base p-8">
                <span className="grid size-14 place-items-center rounded-full bg-bg-soft font-heading text-card text-surface-dark">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-heading text-card text-surface-dark">{step.title}</h3>
                <p className="mt-2 text-base leading-7 text-text-muted">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ArrowButton href="/">Back To Home</ArrowButton>
            <ArrowButton href="/gallery">View Our Projects</ArrowButton>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
