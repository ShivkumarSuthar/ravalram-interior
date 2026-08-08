"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Medal } from "lucide-react";
import { TESTIMONIALS_PAGE_DATA } from "../lib/data.js";
import ExperienceShowcase from "./ExperienceShowcase.jsx";

// ─── Data ─────────────────────────────────────────────────────────────────────
const testimonials = TESTIMONIALS_PAGE_DATA?.testimonials || [];

// ─── Easing ───────────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars({ count = 5, size = 13 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={size} strokeWidth={0} className="fill-[#c5a880] text-[#c5a880]" />
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Testimonial({ setView }) {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);   // 1 = forward, -1 = backward

  const go = useCallback(
    (next) => {
      setDir(next > active ? 1 : -1);
      setActive(next);
    },
    [active]
  );

  const prev = () => go(active === 0 ? testimonials.length - 1 : active - 1);
  const next = () => go(active === testimonials.length - 1 ? 0 : active + 1);

  // Auto-advance every 7 s
  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[active];

  return (
    <>
      <section
        id="testimonials"
        className="relative overflow-hidden select-none border-t border-stone-200/60"
      >

        {/* ════════════════════════════════════════════════════════════
            MOBILE (< lg) — warm parchment + single editorial card
        ════════════════════════════════════════════════════════════ */}
        <div
          className="lg:hidden py-20 sm:py-28 relative"
          style={{ backgroundColor: "#f0ece4" }}
        >
          {/* Warm gold glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 100% 0%,   rgba(197,168,128,0.16) 0%, transparent 55%),
                radial-gradient(ellipse at 0%   100%, rgba(197,168,128,0.10) 0%, transparent 55%)
              `,
            }}
          />

          <div className="max-w-xl mx-auto px-6 relative z-10">

            {/* Header */}
            <div className="text-center mb-10 space-y-3">
              <Medal
                size={28}
                strokeWidth={1.3}
                className="text-[#c5a880] mx-auto"
              />
              <h2 className="text-[2.1rem] font-extrabold text-stone-900 leading-tight tracking-tight">
                client{" "}
                <em
                  className="font-normal text-[#c5a880]"
                  style={{
                    fontFamily: "'Crimson Pro','Playfair Display',Georgia,serif",
                    fontStyle: "italic",
                  }}
                >
                  reflections
                </em>
              </h2>
            </div>

            {/* Quote card */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current.id + "-mob"}
                custom={dir}
                initial={{ opacity: 0, x: dir * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -30 }}
                transition={{ duration: 0.45, ease }}
                className="bg-white rounded-3xl border border-stone-200/50 overflow-hidden"
                style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.08)" }}
              >
                <div className="p-7 space-y-5">
                  {/* Decorative large quote mark */}
                  <span
                    aria-hidden
                    className="block text-[5rem] leading-[0.8] text-[#c5a880]/25 font-serif -mb-1"
                    style={{ fontFamily: "Georgia,serif" }}
                  >
                    &ldquo;
                  </span>

                  {/* Main quote — large italic serif */}
                  <p
                    className="text-[1.45rem] leading-[1.5] text-stone-800"
                    style={{
                      fontFamily: "'Crimson Pro','Playfair Display',Georgia,serif",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{current.highlight}&rdquo;
                  </p>

                  <p className="text-[13px] text-stone-500 leading-relaxed font-light">
                    {current.quote}
                  </p>

                  <div className="h-px bg-stone-100" />

                  {/* Author + dots */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#c5a880]/35 shrink-0">
                        <img
                          src={current.avatar}
                          alt={current.author}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-stone-900 uppercase tracking-widest">
                          {current.author}
                        </p>
                        <p className="text-[11px] text-stone-400">{current.location}</p>
                      </div>
                    </div>

                    {/* Dot pills */}
                    <div className="flex items-center gap-1.5">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => go(i)}
                          aria-label={`Review ${i + 1}`}
                          className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${active === i
                              ? "w-6 bg-[#c5a880]"
                              : "w-1.5 bg-stone-200 hover:bg-[#c5a880]/50"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border border-stone-300 bg-white flex items-center justify-center
                           text-stone-600 hover:bg-[#c5a880] hover:border-[#c5a880] hover:text-white
                           transition-all duration-300 cursor-pointer shadow-sm"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="w-10 h-10 rounded-full border border-stone-300 bg-white flex items-center justify-center
                           text-stone-600 hover:bg-[#c5a880] hover:border-[#c5a880] hover:text-white
                           transition-all duration-300 cursor-pointer shadow-sm"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            DESKTOP (lg+) — warm parchment editorial poster
        ════════════════════════════════════════════════════════════ */}
        <div
          className="hidden lg:block relative"
          style={{ backgroundColor: "#f0ece4" }}
        >
          {/* Warm ambient glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 80% 0%,   rgba(197,168,128,0.18) 0%, transparent 60%),
                radial-gradient(ellipse at 10% 100%, rgba(197,168,128,0.10) 0%, transparent 55%)
              `,
            }}
          />

          {/* Top bar: label + aggregate score */}
          <div className="relative z-10 max-w-none px-12 xl:px-20 pt-20 pb-10 flex items-center justify-between border-b border-stone-200/70">
            <div className="flex items-center gap-4">
              <Medal size={15} strokeWidth={1.4} className="text-[#c5a880]" />
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#c5a880]">
                Client Reflections
              </span>
              <div className="w-12 h-px bg-[#c5a880]/40" />
            </div>
            <div className="flex items-center gap-3">
              <Stars count={5} size={12} />
              <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-stone-400">
                2,650+ Verified Reviews
              </span>
            </div>
          </div>

          {/* ── Main two-column poster ──────────────────────────── */}
          {/*    Left: text on warm parchment  |  Right: full-bleed photo    */}
          <div className="relative z-10 grid grid-cols-[1fr_40%]" style={{ minHeight: 560 }}>

            {/* ── LEFT: quote panel ───────────────────────────── */}
            <div className="px-12 xl:px-20 pt-12 pb-10 flex flex-col justify-between">

              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current.id + "-quote"}
                  custom={dir}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.55, ease }}
                  className="space-y-7"
                >
                  {/* Huge decorative opening mark */}
                  <span
                    aria-hidden
                    className="block text-[9rem] leading-[0.65] text-[#c5a880]/30 font-serif select-none"
                    style={{ fontFamily: "Georgia,serif" }}
                  >
                    &ldquo;
                  </span>

                  {/* Giant serif italic quote */}
                  <h2
                    className="text-[2rem] xl:text-[2.4rem] 2xl:text-[2.8rem] text-stone-900 leading-[1.3] max-w-2xl"
                    style={{
                      fontFamily: "'Crimson Pro','Playfair Display',Georgia,serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    &ldquo;{current.highlight}&rdquo;
                  </h2>

                  {/* Full review */}
                  <p className="text-[14px] text-stone-500 leading-relaxed max-w-lg font-light">
                    {current.quote}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Author row + navigation */}
              <div className="mt-10 flex items-end justify-between gap-8 border-t border-stone-200/80 pt-8">

                {/* Author */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id + "-auth"}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.4, ease }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#c5a880]/50 shrink-0">
                      <img
                        src={current.avatar}
                        alt={current.author}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[13px] font-bold text-stone-900 uppercase tracking-widest">
                        {current.author}
                      </p>
                      <p className="text-[11px] text-stone-400 font-mono">
                        {current.role} &bull; {current.location}
                      </p>
                      <div className="flex items-center gap-2 pt-0.5">
                        <Stars count={5} size={12} />
                        <span className="text-[#c5a880] text-sm font-extrabold tracking-tight">
                          {current.score}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Nav controls */}
                <div className="flex flex-col items-end gap-3 shrink-0">
                  {/* Dot indicators */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => go(i)}
                        aria-label={`Review ${i + 1}`}
                        className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${active === i
                            ? "w-8 bg-[#c5a880]"
                            : "w-2 bg-stone-300 hover:bg-[#c5a880]/60"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Prev / Next */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      aria-label="Previous review"
                      className="w-11 h-11 rounded-full border border-stone-300 bg-white/60 hover:border-[#c5a880]
                                 text-stone-500 hover:text-[#c5a880]
                                 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                    >
                      <ChevronLeft size={17} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next review"
                      className="w-11 h-11 rounded-full bg-[#c5a880] hover:bg-[#b0936b]
                                 text-stone-950
                                 flex items-center justify-center transition-all duration-300 cursor-pointer
                                 shadow-[0_4px_20px_rgba(197,168,128,0.40)]"
                    >
                      <ChevronRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: full-bleed photo panel ──────────────── */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id + "-img"}
                  src={current.siteImage}
                  alt={`Interior project for ${current.author}`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Left fade — blends into warm parchment panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f0ece4] via-[#f0ece4]/15 to-transparent pointer-events-none" />
              {/* Bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#f0ece4]/40 via-transparent to-transparent pointer-events-none" />

              {/* Score badge — top right */}
              <div className="absolute top-6 right-6">
                <div className="bg-[#c5a880] rounded-2xl px-4 py-3 text-center shadow-2xl">
                  <p className="text-[1.6rem] font-extrabold text-stone-950 leading-none tracking-tight">
                    {current.score}
                  </p>
                  <Stars count={5} size={11} />
                </div>
              </div>

              {/* Architect badge — bottom left */}
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-stone-200
                                 text-stone-700 text-[10px] font-mono font-bold uppercase tracking-[0.2em]
                                 px-4 py-2 rounded-full shadow-sm">
                  ✦ Architect Supervised
                </span>
              </div>
            </div>
          </div>

          {/* ── Bottom: 3 client chips ──────────────────────────────── */}
          <div className="relative z-10 border-t border-stone-200/70 px-12 xl:px-20 py-7">
            <div className="grid grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => go(i)}
                  aria-label={`Read review by ${t.author}`}
                  className={`group text-left rounded-2xl border px-5 py-4 transition-all duration-400 cursor-pointer
                    ${active === i
                      ? "border-[#c5a880]/50 bg-white shadow-md"
                      : "border-stone-200/60 bg-white/40 hover:border-[#c5a880]/30 hover:bg-white/70"
                    }`}
                >
                  {/* Active accent line */}
                  <div
                    className={`h-px mb-4 rounded-full transition-all duration-500 ${active === i
                        ? "bg-[#c5a880] w-8"
                        : "bg-stone-300 w-4 group-hover:w-6 group-hover:bg-[#c5a880]/50"
                      }`}
                  />

                  {/* Author row */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div
                      className={`w-8 h-8 rounded-full overflow-hidden border shrink-0 transition-all duration-300 ${active === i ? "border-[#c5a880]/60" : "border-stone-300 group-hover:border-[#c5a880]/40"
                        }`}
                    >
                      <img
                        src={t.avatar}
                        alt={t.author}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-[11px] font-bold uppercase tracking-wider truncate transition-colors duration-300 ${active === i ? "text-stone-900" : "text-stone-400 group-hover:text-stone-600"
                          }`}
                      >
                        {t.author}
                      </p>
                      <p className="text-[10px] text-stone-400 font-mono truncate">{t.location}</p>
                    </div>
                    {active === i && (
                      <div className="w-2 h-2 rounded-full bg-[#c5a880] shrink-0 animate-pulse" />
                    )}
                  </div>

                  {/* Snippet */}
                  <p
                    className={`text-[12px] leading-relaxed line-clamp-2 transition-colors duration-300 ${active === i ? "text-stone-600" : "text-stone-300 group-hover:text-stone-500"
                      }`}
                    style={{
                      fontFamily: "'Crimson Pro','Playfair Display',Georgia,serif",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.highlight.slice(0, 80)}&hellip;&rdquo;
                  </p>
                </button>
              ))}
            </div>
          </div>

        </div>{/* /desktop */}
      </section>

      {/* <ExperienceShowcase setView={setView} /> */}
    </>
  );
}
