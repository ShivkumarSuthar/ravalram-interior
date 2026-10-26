import { Check } from "lucide-react";
import Reveal from "../Reveal";
import Eyebrow from "../Eyebrow";
import TitleParts from "../TitleParts";
import ArrowButton from "../ArrowButton";
import { ABOUT } from "../../../lib/home-content";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative isolate overflow-hidden bg-bg-dark py-24 lg:py-32.5">
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-[at_80%_20%] from-surface-dark to-bg-dark" />
      {/* Fades the top edge into plain dark so it meets the before/after section's dark band without a seam */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-48 bg-linear-to-b from-bg-dark to-transparent" />

      <div className="mx-auto max-w-site px-5">
        <Reveal delay={0} duration={1} className="max-w-180">
          <Eyebrow tone="light">{ABOUT.eyebrow}</Eyebrow>
          <h2 data-cursor="lg" className="mt-5 font-heading text-section capitalize text-white">
            <TitleParts parts={ABOUT.title} />
          </h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:mt-15 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left" className="relative h-80 overflow-hidden rounded-3xl sm:h-115">
            <Image src={ABOUT.image.src} alt={ABOUT.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>

          <Reveal direction="right">
            <p className="text-lead-lg font-medium text-white">{ABOUT.lead}</p>
            <ul className="mt-9 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {ABOUT.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 font-heading text-lead-lg text-white">
                  <Check className="size-5 shrink-0 text-primary" strokeWidth={2.5} />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-9 text-base leading-7 text-white">{ABOUT.text}</p>
            <ArrowButton href={ABOUT.cta.href} tone="light" className="mt-12">
              {ABOUT.cta.label}
            </ArrowButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
