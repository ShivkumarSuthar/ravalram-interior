import Eyebrow from "../Eyebrow";
import ArrowButton from "../ArrowButton";
import TitleParts from "../TitleParts";
import HeroReveal from "./HeroReveal";
import { HERO } from "../../../lib/home-content";

// Server-rendered hero; HeroReveal only adds the entrance animation
export default function HeroSection() {
  const [first, second] = HERO.title;

  return (
    <section className="relative isolate overflow-hidden bg-bg-soft pt-24.5">
      {/* Soft architectural circles behind the headline */}
      <div aria-hidden className="absolute -left-40 -top-56 -z-10 size-160 rounded-full bg-bg-base/70" />
      <div aria-hidden className="absolute -left-96 top-24 -z-10 size-150 rounded-full bg-bg-base/50" />

      <div className="mx-auto max-w-site px-3 lg:px-5">
        <div className="grid gap-10 pt-8 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pt-8">
          <HeroReveal from="left">
            <Eyebrow>{HERO.eyebrow}</Eyebrow>
            <h1 data-cursor="lg" className="mt-8 font-heading text-hero capitalize text-ink">
              <span className="block">{first}</span>
              <span className="block">
                <TitleParts parts={[second]} />
              </span>
            </h1>
            <ArrowButton href={HERO.cta.href} className="mt-12">
              {HERO.cta.label}
            </ArrowButton>
          </HeroReveal>

          <HeroReveal from="right" className="lg:w-112.5 lg:pt-6">
            <div className="h-66.75 overflow-hidden rounded-3xl">
              <img src={HERO.smallImage.src} alt={HERO.smallImage.alt} fetchPriority="high" className="size-full object-cover" />
            </div>
            <p className="mt-10 text-lead font-medium text-text-muted">{HERO.text}</p>
          </HeroReveal>
        </div>

        <HeroReveal from="bottom" className="mt-14 h-75 overflow-hidden rounded-3xl sm:h-125 lg:mt-20 lg:h-200">
          <img src={HERO.largeImage.src} alt={HERO.largeImage.alt} fetchPriority="high" className="size-full object-cover" />
        </HeroReveal>
      </div>
    </section>
  );
}
