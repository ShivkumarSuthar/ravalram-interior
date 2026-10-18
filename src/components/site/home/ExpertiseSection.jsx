import { ChevronRight } from "lucide-react";
import Reveal from "../Reveal";
import Eyebrow from "../Eyebrow";
import TitleParts from "../TitleParts";
import ArrowButton from "../ArrowButton";
import { EXPERTISE } from "../../../lib/home-content";

export default function ExpertiseSection() {
  const [back, front] = EXPERTISE.images;

  return (
    <section className="overflow-hidden bg-bg-soft pb-24 lg:pb-32.5">
      <div className="mx-auto grid max-w-site items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <Eyebrow>{EXPERTISE.eyebrow}</Eyebrow>
          <h2 data-cursor="lg" className="mt-5 max-w-172.5 font-heading text-section capitalize text-surface-dark">
            <TitleParts parts={EXPERTISE.title} />
          </h2>
          <ul className="mt-8 max-w-172.5 border-t border-line/30">
            {EXPERTISE.points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 border-b border-line/30 py-5 font-heading text-lead-lg text-surface-dark">
                <span aria-hidden className="grid size-4.5 place-items-center rounded-full bg-primary text-white">
                  <ChevronRight className="size-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-172.5 text-base leading-7 text-text-muted">{EXPERTISE.text}</p>
          <ArrowButton href={EXPERTISE.cta.href} className="mt-14">
            {EXPERTISE.cta.label}
          </ArrowButton>
        </Reveal>

        <Reveal direction="right" className="relative h-110 sm:h-154">
          <div className="absolute right-0 top-0 h-60 w-3/4 overflow-hidden rounded-3xl sm:h-90 sm:w-105">
            <img src={back.src} alt={back.alt} loading="lazy" decoding="async" className="size-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 z-10 h-64 w-4/5 overflow-hidden rounded-3xl sm:h-105 sm:w-110">
            <img src={front.src} alt={front.alt} loading="lazy" decoding="async" className="size-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
