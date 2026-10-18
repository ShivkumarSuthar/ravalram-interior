"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Eyebrow from "../Eyebrow";
import ArrowButton from "../ArrowButton";
import TitleParts from "../TitleParts";
import { EASE_OUT } from "../Reveal";
import { HERO } from "../../../lib/home-content";

// Hero blocks slide in once the intro curtain (first visit only) has lifted
function useHeroDelay() {
  const [delay, setDelay] = useState(null);
  useEffect(() => {
    setDelay(window.__sutharPreloading ? 1.5 : 0.3);
  }, []);
  return delay;
}

function HeroReveal({ from, delay, className, children }) {
  const reduceMotion = useReducedMotion();
  const offset = { left: { x: -100 }, right: { x: 100 }, bottom: { y: 100 } }[from];
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      animate={delay === null ? undefined : { opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.15, delay: delay ?? 0, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const delay = useHeroDelay();
  const [first, second] = HERO.title;

  return (
    <section className="relative isolate overflow-hidden bg-bg-soft pt-24.5">
      {/* Soft architectural circles behind the headline */}
      <div aria-hidden className="absolute -left-40 -top-56 -z-10 size-160 rounded-full bg-bg-base/70" />
      <div aria-hidden className="absolute -left-96 top-24 -z-10 size-150 rounded-full bg-bg-base/50" />

      <div className="mx-auto max-w-site px-3 lg:px-5">
        <div className="grid gap-10 pt-8 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pt-8">
          <HeroReveal from="left" delay={delay}>
            <Eyebrow>{HERO.eyebrow}</Eyebrow>
            <h1 data-cursor="lg" className="mt-8 font-heading text-hero capitalize text-surface-dark">
              <span className="block">{first}</span>
              <span className="block">
                <TitleParts parts={[second]} />
              </span>
            </h1>
            <ArrowButton href={HERO.cta.href} className="mt-12">
              {HERO.cta.label}
            </ArrowButton>
          </HeroReveal>

          <HeroReveal from="right" delay={delay} className="lg:w-112.5 lg:pt-6">
            <div className="h-66.75 overflow-hidden rounded-3xl">
              <img src={HERO.smallImage.src} alt={HERO.smallImage.alt} fetchPriority="high" className="size-full object-cover" />
            </div>
            <p className="mt-10 text-lead font-medium text-text-muted">{HERO.text}</p>
          </HeroReveal>
        </div>

        <HeroReveal from="bottom" delay={delay} className="mt-14 h-75 overflow-hidden rounded-3xl sm:h-125 lg:mt-20 lg:h-200">
          <img src={HERO.largeImage.src} alt={HERO.largeImage.alt} fetchPriority="high" className="size-full object-cover" />
        </HeroReveal>
      </div>
    </section>
  );
}
