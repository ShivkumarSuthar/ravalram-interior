import { useState } from "react";
import Image from "./Image.jsx";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Quote,
} from "lucide-react";
import { SITE_IMAGES } from "../lib/data.js";

const aboutImg    = SITE_IMAGES.aboutSide;
const transitionImg = SITE_IMAGES.transitionLuxury;
const cadImg      = SITE_IMAGES.isometricFloorPlan;

const STATS = [
  { value: "35+",  label: "Years Lineage",      sub: "Est. 1989 Master Guild",   accent: "#c5a880" },
  { value: "500+", label: "Turnkey Projects",   sub: "Villas & Penthouses",      accent: "#c5a880" },
  { value: "100%", label: "Architect Audited",  sub: "Zero Tolerance CAD",       accent: "#488b82" },
  { value: "10-Yr",label: "Teak Warranty",      sub: "IS 710 Marine Ply",        accent: "#c5a880" },
];

const PILLARS = [
  {
    id: "p-01", num: "01", short: "Guild",
    tag: "GENERATIONAL WOODWORKING GUILD",
    heading: "Craftsmanship Rooted in 1989 Heritage",
    desc: "Founded by master artisan Ravalram H. Suthar, our 35-year lineage represents India's finest timber craftsmanship. We engineer custom wardrobes, modular kitchens, and bespoke furniture using seasoned teakwood and IS 710 marine BWR ply.",
    chips: ["Seasoned Teak & Hardwoods", "IS 710 Marine BWR Ply", "10-Year Structural Guarantee"],
    image: aboutImg,
    quote: "Wood is a living canvas. When seasoned with patience and crafted by hand, it outlasts generations.",
    author: "Ravalram H. Suthar, Founder (Est. 1989)",
  },
  {
    id: "p-02", num: "02", short: "Architect",
    tag: "ARCHITECT-LED SITE EXECUTION",
    heading: "100% CAD-to-Site Execution Fidelity",
    desc: "Co-led by Lead Architect Padam P. Sutar & Shivkumar Suthar, every layout undergoes rigorous 3D spatial modeling and daily on-site architect supervision to guarantee zero-tolerance handoffs.",
    chips: ["Photorealistic 3D CAD CGI", "Daily On-Site Architect Audits", "Millimetric Alignment"],
    image: cadImg,
    quote: "Architecture is not just what you model — it is the millimeter precision built on site, every single day.",
    author: "Padam P. Sutar, Lead Architect",
  },
  {
    id: "p-03", num: "03", short: "Turnkey",
    tag: "TURNKEY DESIGN-BUILD BLUEPRINT",
    heading: "End-to-End Single-Point Accountability",
    desc: "From structural civil redesign to bespoke furniture manufacturing and white-glove styling, we manage the full project lifecycle with transparent BOQs, zero price escalations, and fixed delivery schedules.",
    chips: ["Itemized BOQ Contracts", "Single Point Accountability", "White-Glove Key Handover"],
    image: transitionImg,
    quote: "Turnkey execution means zero surprises for the client — only pure spatial transformation, on schedule.",
    author: "Shivkumar Suthar, Co-Founder",
  },
];

const ease = [0.16, 1, 0.3, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease, delay },
});

export default function About({ setView }) {
  const [active, setActive] = useState(0);
  const [viewMode, setViewMode] = useState("photo");
  const current = PILLARS[active];

  return (
    <section
      id="about"
      className="bg-[#f8f2ec] text-stone-900 py-16 sm:py-24 lg:py-32 overflow-hidden relative border-b border-[#e5dcd3] select-none"
    >
      {/* ── Giant oblique number watermark ── */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-0 text-[22vw] font-black text-stone-900/[0.03] leading-none select-none hidden lg:block"
        style={{ fontFamily: "serif", letterSpacing: "-0.05em" }}
      >
        1989
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 space-y-12 md:space-y-16">

        {/* ══════════════════════ HEADER ══════════════════════ */}
        <motion.div {...fadeUp(0)} className="space-y-6 border-b border-[#e5dcd3] pb-10">

          {/* Eyebrow + CTA row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 border border-[#c88b80]/40 bg-[#c88b80]/12 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c88b80] animate-pulse" />
              <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#9e5d53] font-mono">
                Who We Are · Suthar Studio Est. 1989
              </span>
            </div>

            <button
              onClick={() => { if (typeof setView === "function") { setView("about-us"); window.scrollTo({ top: 0, behavior: "smooth" }); } }}
              className="inline-flex items-center gap-2.5 bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 px-5 py-2.5 rounded-full transition-all duration-300 group cursor-pointer shadow-md shrink-0 self-start"
            >
              <span className="text-[11px] font-bold tracking-widest uppercase font-mono">Explore Full Studio Page</span>
              <div className="w-6 h-6 rounded-full bg-stone-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Big headline */}
          <h2 className="text-[2.2rem] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12] max-w-4xl">
            Master Artisans &amp; Senior Architects{" "}
            <span className="text-[#c5a880] italic font-serif">Building Timeless</span>{" "}
            Spaces
          </h2>

          {/* Bio + Stats row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start pt-1">
            <p className="lg:col-span-6 text-stone-600 font-light text-sm sm:text-base leading-relaxed">
              Suthar Interior Studio is a multi-generational architecture and interior design firm combining over{" "}
              <strong className="font-semibold text-stone-950">35 years of timber joinery lineage</strong> with
              modern CAD architectural supervision. Guided by founder{" "}
              <strong className="font-semibold text-stone-950">Ravalram H. Suthar</strong> alongside Lead Architect{" "}
              <strong className="font-semibold text-stone-950">Padam P. Sutar &amp; Shivkumar Suthar</strong>, we deliver
              luxury residential penthouses, sea-facing villas, commercial flagships, and turnkey design-build solutions
              across Mumbai, Goa, and Pune.
            </p>

            {/* Stat strip */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.06 * i)}
                  className="group p-4 rounded-2xl bg-white border border-[#e5dcd3] hover:border-[#c5a880]/60 hover:shadow-md transition-all duration-300 text-left space-y-0.5"
                >
                  <span
                    className="text-2xl sm:text-3xl font-extrabold leading-none block"
                    style={{ color: s.accent }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700 block">
                    {s.label}
                  </span>
                  <span className="text-[10px] text-stone-400 block font-light">{s.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════ MOBILE VIEW (<lg) ══════════════════════ */}
        <div className="lg:hidden space-y-5">

          {/* Pill selector */}
          <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-[#ede4da] rounded-2xl">
            {PILLARS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`py-2.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap overflow-hidden ${
                  i === active
                    ? "bg-[#c5a880] text-stone-950 shadow-md"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {p.num}. {p.short}
              </button>
            ))}
          </div>

          {/* Active card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl overflow-hidden border-2 border-[#c5a880] shadow-xl bg-white"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] bg-stone-900">
                <Image
                  src={viewMode === "photo" ? current.image : cadImg}
                  alt={current.heading}
                  fill
                  className="object-cover brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

                {/* View toggle */}
                <div className="absolute top-3 left-3 flex gap-1 bg-stone-950/75 backdrop-blur-md p-1 rounded-full border border-white/15">
                  {["photo", "blueprint"].map((m) => (
                    <button
                      key={m}
                      onClick={() => setViewMode(m)}
                      className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase transition-all cursor-pointer ${
                        viewMode === m
                          ? m === "photo" ? "bg-[#c5a880] text-stone-950" : "bg-[#488b82] text-white"
                          : "text-stone-400 hover:text-white"
                      }`}
                    >
                      {m === "photo" ? "Photo" : "Blueprint"}
                    </button>
                  ))}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[9px] font-mono text-[#c5a880] uppercase tracking-widest font-bold">
                    FIG 01.{active + 1} · {current.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#b0936b]">
                  Pillar {current.num}
                </span>
                <h3 className="text-lg font-extrabold text-stone-950 leading-snug font-serif">
                  {current.heading}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{current.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {current.chips.map((c, i) => (
                    <span key={i} className="inline-flex items-center gap-1 text-[10px] font-mono bg-[#488b82]/10 border border-[#488b82]/25 text-[#2f635c] px-2.5 py-1 rounded-lg font-semibold">
                      <CheckCircle2 size={10} className="text-[#488b82] shrink-0" />{c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote strip */}
              <div className="mx-5 mb-5 p-4 rounded-2xl bg-[#f3e9df] border-l-4 border-[#c5a880] space-y-1">
                <p className="text-xs font-serif italic text-stone-800 leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#b0936b] font-bold">
                  — {current.author}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ══════════════════════ DESKTOP VIEW (≥lg) ══════════════════════ */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 items-start">

          {/* LEFT: Pillar selector */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-[0.25em] block">
              Select a Studio Pillar
            </span>

            <div className="space-y-3">
              {PILLARS.map((p, i) => {
                const isActive = i === active;
                return (
                  <motion.button
                    key={p.id}
                    onClick={() => setActive(i)}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full text-left rounded-3xl border transition-all duration-400 cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-br from-white via-[#fcfaf7] to-[#f4eee4] border-2 border-[#c5a880] shadow-[0_16px_48px_rgba(197,168,128,0.2)] scale-[1.01]"
                        : "bg-white/80 border-[#e5dcd3] hover:border-[#c5a880]/50 hover:bg-white hover:shadow-md"
                    }`}
                  >
                    {/* Gold top bar — active only */}
                    {isActive && (
                      <div className="h-1 w-full bg-gradient-to-r from-[#c5a880] via-[#d4b896] to-[#c5a880]" />
                    )}

                    <div className="p-5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] font-mono font-bold tracking-[0.2em] uppercase ${isActive ? "text-[#b0936b]" : "text-stone-400"}`}>
                          {p.num} · {p.tag}
                        </span>
                        <ChevronRight
                          size={15}
                          className={`transition-all duration-300 ${isActive ? "text-[#c5a880] rotate-90" : "text-stone-300"}`}
                        />
                      </div>

                      <h3 className={`text-lg font-extrabold leading-snug ${isActive ? "text-stone-950 font-serif" : "text-stone-800"}`}>
                        {p.heading}
                      </h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease }}
                            className="pt-3 space-y-3 border-t border-[#c5a880]/25 overflow-hidden"
                          >
                            <p className="text-sm font-light text-stone-600 leading-relaxed">{p.desc}</p>
                            <div className="flex flex-wrap gap-2">
                              {p.chips.map((c, ci) => (
                                <span key={ci} className="inline-flex items-center gap-1.5 text-[10px] font-mono bg-[#488b82]/10 border border-[#488b82]/25 text-[#2f635c] px-3 py-1 rounded-lg font-semibold">
                                  <CheckCircle2 size={11} className="text-[#488b82] shrink-0" />{c}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Quote card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-quote"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
                className="relative p-5 rounded-3xl bg-gradient-to-br from-[#f3e9df] to-[#ede0d4] border border-[#e5d4c5] shadow-sm overflow-hidden"
              >
                {/* Decorative large quotation mark */}
                <span className="absolute -top-3 -left-1 text-[80px] text-[#c5a880]/20 font-serif leading-none select-none pointer-events-none">&ldquo;</span>
                <div className="relative z-10 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#c5a880]/25 border border-[#c5a880]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Quote size={16} className="text-[#b0936b]" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-sm font-serif italic text-stone-800 leading-relaxed">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#b0936b] font-bold">
                      — {current.author}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Image panel */}
          <div className="lg:col-span-7 relative">
            {/* View mode toggle */}
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-stone-400">
                Specification View
              </span>
              <div className="flex gap-1 bg-[#ede4da] p-1 rounded-full shadow-inner">
                {[{ key: "photo", label: "📷 Photo" }, { key: "blueprint", label: "📐 Blueprint" }].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setViewMode(key)}
                    className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                      viewMode === key
                        ? key === "photo" ? "bg-[#c5a880] text-stone-950 shadow-sm" : "bg-[#488b82] text-white shadow-sm"
                        : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main image frame */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${current.id}-${viewMode}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease }}
                  className="w-full aspect-[4/3] rounded-[36px] overflow-hidden shadow-2xl border-2 border-[#c5a880]/35 relative bg-stone-900 group"
                >
                  <Image
                    src={viewMode === "photo" ? current.image : cadImg}
                    alt={current.heading}
                    fill
                    className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/10 to-transparent" />

                  {/* Architect supervised badge — top right */}
                  <div className="absolute top-5 right-5 bg-[#488b82] text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-white/20">
                    <ShieldCheck size={16} className="shrink-0" />
                    <div className="text-left leading-tight">
                      <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-emerald-100 block">Architect Supervised</span>
                      <span className="text-xs font-bold">100% Site Audit</span>
                    </div>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                    <div className="text-white text-left">
                      <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-widest font-bold block">
                        {viewMode === "photo" ? "Suthar Studio Monograph" : "Isometric CAD Blueprint"} · Fig 01.{active + 1}
                      </span>
                      <span className="text-base font-bold text-white font-serif block leading-snug">{current.heading}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating 35+ badge — bottom left */}
              <motion.div
                {...fadeUp(0.2)}
                className="absolute -bottom-6 -left-5 z-20 bg-gradient-to-br from-[#c5a880] to-[#b0936b] text-stone-950 px-5 py-4 rounded-2xl shadow-2xl border-2 border-white flex items-center gap-3"
              >
                <span className="text-4xl font-extrabold tracking-tight leading-none font-serif">35+</span>
                <div className="leading-tight font-mono text-left">
                  <span className="text-xs font-bold uppercase tracking-wider block">Years</span>
                  <span className="text-xs font-bold uppercase tracking-wider block">Legacy</span>
                </div>
              </motion.div>

              {/* Small detail card — right of image, overlapping edge */}
              <motion.div
                {...fadeUp(0.3)}
                className="absolute -right-4 top-1/3 z-20 bg-white border border-[#e5dcd3] shadow-xl rounded-2xl p-4 max-w-[160px]"
              >
                <span className="text-[9px] font-mono text-[#b0936b] font-bold uppercase tracking-wider block mb-1">Active Pillar</span>
                <span className="text-sm font-extrabold text-stone-900 font-serif block leading-tight">{current.num}. {current.tag.split(" ").slice(0, 2).join(" ")}</span>
                <div className="mt-2 h-1 rounded-full bg-[#e5dcd3] overflow-hidden">
                  <motion.div
                    key={active}
                    initial={{ width: "0%" }}
                    animate={{ width: `${((active + 1) / PILLARS.length) * 100}%` }}
                    transition={{ duration: 0.6, ease }}
                    className="h-full bg-[#c5a880] rounded-full"
                  />
                </div>
                <span className="text-[9px] text-stone-400 font-mono block mt-1">{active + 1} of {PILLARS.length}</span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
