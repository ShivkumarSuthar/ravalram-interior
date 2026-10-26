"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Clock } from "lucide-react";
import Reveal from "./Reveal";
import TitleParts from "./TitleParts";
import { PRICING } from "../../lib/pages-content";
import Image from "next/image";

const TIERS = ["curated", "signature", "masterpiece"];
const rupees = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;
// Totals read better in Indian units: lakh (1,00,000) and crore (1,00,00,000)
const inWords = (n) =>
  n >= 1e7 ? `₹${(n / 1e7).toFixed(2)} crore` : n >= 1e5 ? `₹${(n / 1e5).toFixed(1)} lakh` : rupees(n);

const openQuote = (topic) => window.dispatchEvent(new CustomEvent("open-quotation", { detail: { topic } }));

// Interactive pricing: project-type tabs, three plan cards, and (detailed) area estimate,
// budget split and scope. Reads PRICING itself because the data holds icon components.
export default function PricingPlans({ categoryIds, detailed = false }) {
  const categories = categoryIds ? PRICING.categories.filter((c) => categoryIds.includes(c.id)) : PRICING.categories;
  const [activeId, setActiveId] = useState(categories[0].id);
  const category = categories.find((c) => c.id === activeId);
  const [area, setArea] = useState(category.defaultAreaSqFt);

  const choose = (c) => {
    setActiveId(c.id);
    setArea(c.defaultAreaSqFt);
  };

  return (
    <>
    <div role="tablist" aria-label="Project type" className="mb-10 flex flex-wrap gap-2.5">
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          role="tab"
          aria-selected={c.id === activeId}
          onClick={() => choose(c)}
          className={`rounded-full border px-5 py-2.5 font-heading text-base transition-colors duration-300 ${
            c.id === activeId ? "border-primary bg-primary text-white" : "border-line/40 text-ink hover:border-primary hover:text-primary"
          }`}
        >
          {c.title}
        </button>
      ))}
    </div>

    {detailed && (
      <div className="mb-10 flex flex-wrap items-end gap-x-6 gap-y-4 rounded-3xl bg-bg-base p-6 lg:p-8">
        <div>
          <label htmlFor="pricing-area" className="block font-heading text-base text-ink">
            {category.unitName}
          </label>
          <input
            id="pricing-area"
            type="number"
            min="50"
            step="50"
            value={area}
            onChange={(e) => setArea(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-44 rounded-full border border-line/30 bg-bg-soft px-6 py-3 font-heading text-lead text-ink outline-none focus:border-primary focus-visible:outline-none!"
          />
        </div>
        {category.presets?.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            {category.presets.map((p) => (
              <button
                key={p.label}
                type="button"
                aria-pressed={area === p.area}
                onClick={() => setArea(p.area)}
                className={`rounded-full border px-4 py-2.5 text-sm transition-colors ${
                  area === p.area ? "border-ink bg-surface-dark text-white" : "border-line/40 text-ink hover:border-primary"
                }`}
              >
                {p.label} · {p.area.toLocaleString("en-IN")} sq ft
              </button>
            ))}
          </div>
        )}
      </div>
    )}

    <AnimatePresence mode="wait">
      <motion.div
        key={activeId}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {/* Intro card */}
        <div className="relative isolate flex min-h-100 flex-col justify-end overflow-hidden rounded-3xl bg-surface-dark p-8">
          <Image src={PRICING.images[category.id] || PRICING.intro.image} alt="" fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="-z-20 object-cover" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/60 to-black/20" />
          <p className="font-heading text-eyebrow uppercase text-primary">{category.tag}</p>
          <h3 className="mt-3 font-heading text-card-lg text-white">
            <TitleParts parts={PRICING.intro.title} />
          </h3>
          <p className="mt-4 text-base leading-7 text-white/80">{PRICING.intro.text}</p>
          <p className="mt-5 flex items-center gap-2 text-sm text-white/80">
            <Clock className="size-4 text-primary" /> {category.timeline}
          </p>
        </div>

        {/* Plan cards */}
        {TIERS.map((key) => {
          const tier = category.tiers[key];
          const featured = key === PRICING.featured;
          return (
            <article
              key={key}
              className={`flex flex-col rounded-3xl border bg-bg-base p-8 transition-colors duration-300 hover:border-primary ${
                featured ? "border-primary" : "border-line/20"
              }`}
            >
              <span className={`self-start rounded-full px-3.5 py-1.5 font-heading text-eyebrow uppercase ${featured ? "bg-primary text-white" : "bg-bg-soft text-ink"}`}>
                {tier.badge}
              </span>
              <h3 className="mt-5 font-heading text-card-lg text-ink">{PRICING.tierNames[key]}</h3>
              <p className="mt-3 text-base leading-7 text-text-muted">{tier.summary}</p>

              <div className="mt-6 border-y border-line/20 py-6">
                <p className="text-sm text-text-muted">Starting from</p>
                <p className="mt-1 font-heading text-section leading-none text-ink">
                  {rupees(tier.ratePerSqFt)}
                  <span className="ml-1 font-sans text-base text-text-muted">/ sq ft</span>
                </p>
                {detailed && area > 0 && (
                  <p className="mt-3 text-sm text-text-muted">
                    About <span className="font-heading text-base text-primary">{inWords(tier.ratePerSqFt * area)}</span> for {area.toLocaleString("en-IN")} sq ft
                  </p>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.keyIncludes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-base leading-6 text-text-muted">
                    <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openQuote(`${category.title}, ${PRICING.tierNames[key]} plan`)}
                className={`mt-8 rounded-full border py-3.5 font-heading text-base transition-colors duration-300 ${
                  featured ? "border-primary bg-primary text-white hover:bg-surface-dark hover:border-surface-dark" : "border-line/60 text-ink hover:border-primary hover:bg-primary hover:text-white"
                }`}
              >
                Get A Quote
              </button>
            </article>
          );
        })}
      </motion.div>
    </AnimatePresence>

    <p className="mt-8 max-w-3xl text-sm leading-6 text-text-muted">{PRICING.note}</p>

    {detailed && (
      <Reveal delay={0} className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="font-heading text-card-lg text-ink">Where The Budget Goes</h3>
          <ul className="mt-7 space-y-5">
            {category.costBreakdown.map((part) => (
              <li key={part.category}>
                <div className="flex justify-between gap-4 font-heading text-base text-ink">
                  {part.category}
                  <span className="text-primary">{part.percentage}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line/20">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${part.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-card-lg text-ink">Typical Scope</h3>
          <ul className="mt-7 space-y-3">
            {category.scope.map((item) => (
              <li key={item} className="flex gap-2.5 text-base leading-7 text-text-muted">
                <Check className="mt-1.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    )}
    </>
  );
}
