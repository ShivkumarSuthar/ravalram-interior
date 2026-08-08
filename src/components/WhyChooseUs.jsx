"use client";

import { motion } from "motion/react";
import {
  Award,
  Layers,
  Paintbrush2,
  Gem,
  FileText,
  Clock,
  Shield,
  Users,
  ArrowRight,
  Building2,
  HardHat,
  Package,
  CalendarDays,
} from "lucide-react";

// ─── Assets ───────────────────────────────────────────────────────────────────
const HERO_IMG = "/assets/images/AI_images/antra_project_loft_1782744318019.jpg";

// ─── Feature data ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    id: "excellence",
    num: "01",
    icon: Award,
    title: "35+ Years of Excellence",
    description:
      "Decades of experience delivering premium residential and commercial interiors with uncompromising craftsmanship.",
    image: HERO_IMG,
  },
  {
    id: "solutions",
    num: "02",
    icon: Layers,
    title: "End-to-End Solutions",
    description:
      "From consultation to execution, custom furniture, and final handover — all under one roof.",
  },
  {
    id: "bespoke",
    num: "03",
    icon: Paintbrush2,
    title: "Bespoke Design",
    description:
      "Every project is crafted around your lifestyle, preferences, and budget. No templates — only you.",
  },
  {
    id: "craftsmanship",
    num: "04",
    icon: Gem,
    title: "Premium Craftsmanship",
    description:
      "Skilled craftsmen, high-quality materials, and refined finishing standards on every detail.",
  },
  {
    id: "transparent",
    num: "05",
    icon: FileText,
    title: "Transparent Process",
    description:
      "Clear quotations, milestone-based execution, honest communication with no hidden charges.",
  },
  {
    id: "delivery",
    num: "06",
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Well-planned workflows and dedicated project management ensure strict delivery timelines.",
  },
  {
    id: "quality",
    num: "07",
    icon: Shield,
    title: "Quality That Lasts",
    description:
      "Durable materials and meticulous attention to detail — interiors that stay beautiful for years.",
  },
  {
    id: "trusted",
    num: "08",
    icon: Users,
    title: "Trusted Since 1989",
    description:
      "Thousands of families and businesses have relied on our expertise for over three decades.",
  },
];

// ─── Left stats ───────────────────────────────────────────────────────────────
const STATS = [
  { icon: Building2, value: "35+", sublabel: "Years", label: "Experience" },
  { icon: HardHat, value: "500+", sublabel: "Projects", label: "Delivered" },
  { icon: Package, value: "100%", sublabel: "Turnkey", label: "Execution" },
  { icon: CalendarDays, value: "1989", sublabel: "Est.", label: "Founded" },
];

// ─── Animation ────────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease, delay },
});

// ─── Hero photo card (01) — spans 2 rows on desktop, full-width on mobile ─────
function HeroCard({ feature }) {
  const Icon = feature.icon;
  return (
    <motion.div
      {...fadeUp(0.08)}
      // mobile: col-span-2 (full width of 2-col grid)
      // tablet+: col-span-1 row-span-2 (left of 3-col, 2 rows tall)
      className="relative rounded-3xl overflow-hidden col-span-2 sm:col-span-1 sm:row-span-2 group cursor-default"
      style={{ minHeight: 360 }}
    >
      <img
        src={feature.image}
        alt="Premium interior design by Suthar Interior Studio"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      {/* Dark gradient — stronger at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent" />
      {/* Gold warm tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />

      {/* Top-left icon badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center">
          <Icon size={16} strokeWidth={1.6} className="text-primary" />
        </div>
        <span className="text-[10px] font-mono font-bold text-white/50 tracking-[0.2em] uppercase">
          {feature.num}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 inset-x-0 p-6 space-y-2">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight">
          {feature.title}
        </h3>
        <p className="text-sm text-white/65 leading-relaxed max-w-[260px]">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Standard white card (02–08) ─────────────────────────────────────────────
function FeatureCard({ feature, delay }) {
  const Icon = feature.icon;
  return (
    <motion.div
      {...fadeUp(delay)}
      // mobile: full-width horizontal card (icon left, text right)
      // tablet+: square tile in 3-col bento grid
      className="col-span-2 sm:col-span-1
                 group relative bg-white rounded-2xl sm:rounded-3xl border border-stone-100/80 overflow-hidden
                 flex flex-row sm:flex-col items-start gap-4 sm:gap-3.5
                 cursor-default p-4 sm:p-5 lg:p-6
                 hover:shadow-[0_12px_48px_rgba(197,168,128,0.15)] hover:border-primary/30
                 transition-all duration-500"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
    >
      {/* Gold top accent — revealed on hover */}
      <div
        className="absolute top-0 inset-x-5 h-[2px] rounded-b-full
                   bg-gradient-to-r from-transparent via-primary to-transparent
                   scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500"
      />

      {/* Number tag — hidden on mobile, visible on sm+ */}
      <span
        aria-hidden
        className="hidden sm:block absolute top-4 right-5 text-[11px] font-mono font-bold
                   text-stone-200 group-hover:text-primary/40
                   select-none pointer-events-none transition-colors duration-400 tracking-[0.1em]"
      >
        {feature.num}
      </span>

      {/* Icon chip — always shrink-0 so it never collapses on mobile */}
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 mt-0.5
                   bg-bg-base border-stone-100
                   group-hover:bg-primary/10 group-hover:border-primary/35
                   transition-all duration-400"
      >
        <Icon
          size={18}
          strokeWidth={1.6}
          className="text-stone-400 group-hover:text-primary transition-colors duration-400"
        />
      </div>

      {/* Text block — fills remaining width */}
      <div className="space-y-1.5 flex-1 min-w-0">
        <h3 className="text-[14px] sm:text-[14.5px] font-bold text-stone-900 leading-snug tracking-tight">
          {feature.title}
        </h3>
        <p className="text-[12px] sm:text-[12.5px] text-stone-500 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Stat block ───────────────────────────────────────────────────────────────
function StatBlock({ stat, index }) {
  const Icon = stat.icon;
  return (
    <motion.div
      {...fadeUp(0.08 + index * 0.06)}
      className="group relative bg-white rounded-2xl border border-stone-100 p-5
                 flex flex-col gap-3 overflow-hidden
                 hover:shadow-[0_8px_32px_rgba(197,168,128,0.14)] hover:border-primary/25
                 transition-all duration-500"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
    >
      {/* Gold top accent — reveals on hover */}
      <div
        className="absolute top-0 inset-x-4 h-[2px] rounded-b-full
                   bg-gradient-to-r from-transparent via-primary to-transparent
                   scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500"
      />

      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-bg-base border border-stone-100 flex items-center justify-center shrink-0">
        <Icon size={18} strokeWidth={1.4} className="text-primary" />
      </div>

      {/* Value */}
      <p
        className="text-[1.75rem] sm:text-[2rem] font-extrabold text-stone-900 leading-none tracking-tight"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {stat.value}
      </p>

      {/* Thin gold divider */}
      <div className="w-6 h-px bg-primary/55" />

      {/* Sublabel + label */}
      <div className="space-y-0.5">
        <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-primary">
          {stat.sublabel}
        </p>
        <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-stone-400">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}


// ─── Main ─────────────────────────────────────────────────────────────────────
export default function WhyChooseUs({ setView }) {
  const handleConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation"));
  };

  const [heroFeature, ...restFeatures] = FEATURES;

  return (
    <section
      id="why-choose-us"
      className="bg-bg-base py-16 sm:py-24 lg:py-32 relative overflow-hidden border-b border-stone-200/60"
    >
      {/* Warm radial glow — top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-[700px] h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(197,168,128,0.09) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* ════════ Two-column grid ════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 xl:gap-16 items-start">

          {/* ══ LEFT — sticky info column ══════════════════════════════ */}
          <div className="flex flex-col gap-14 lg:sticky lg:top-24">

            {/* ── Header block ─────────────────────────────────────── */}
            <motion.div {...fadeUp(0)} className="space-y-6">

              {/* Label */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-primary" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-primary">
                  Why Choose Us
                </span>
              </div>

              {/* Main heading — large, editorial */}
              <h2 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3rem] xl:text-[3.4rem]
                             font-extrabold tracking-[-0.02em] text-stone-900 leading-[1.06]">
                Why Clients Trust{" "}
                <span
                  className="text-primary"
                >
                  Suthar Interior Studio
                </span>

              </h2>

              {/* Subtitle */}
              <p className="text-[15px] sm:text-base text-stone-500 leading-[1.75]">
                We combine decades of craftsmanship with contemporary design to create interiors that are elegant, functional, and thoughtfully tailored to every client. Every detail is carefully considered, ensuring spaces that inspire today and endure for years to come.
              </p>
            </motion.div>

            {/* ── Stats grid ───────────────────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-5 sm:gap-6 border-t border-stone-200/70 pt-8">
              {STATS.map((stat, i) => (
                <StatBlock key={i} stat={stat} index={i} />
              ))}
            </div>

            {/* ── CTA ──────────────────────────────────────────────── */}
            <motion.div {...fadeUp(0.2)}>
              <button
                onClick={handleConsultation}
                aria-label="Book a free interior design consultation"
                className="inline-flex items-center gap-3.5 bg-primary hover:bg-primary-hover text-stone-950
                           font-bold text-[13px] uppercase tracking-[0.15em] px-7 py-4 rounded-full
                           transition-all duration-300 shadow-[0_8px_32px_rgba(197,168,128,0.30)]
                           hover:shadow-[0_12px_48px_rgba(197,168,128,0.45)] hover:scale-[1.02]
                           group cursor-pointer"
              >
                <span>Book a Free Consultation</span>
                <span className="w-7 h-7 rounded-full bg-stone-950/10 flex items-center justify-center group-hover:bg-stone-950/20 transition-colors">
                  <ArrowRight size={14} strokeWidth={2} />
                </span>
              </button>
            </motion.div>
          </div>

          {/* ══ RIGHT — bento grid ═════════════════════════════════════
              Mobile  (2 col): [01 hero — col-span-2 full width]
                               [02] [03]
                               [04] [05]
                               [06] [07]
                               [08  — col-span-2]  ← optional, just fills
              Tablet+ (3 col): [01 hero — row-span-2] [02] [03]
                               [01 hero — row-span-2] [04] [05]
                               [06] [07] [08]
          ══════════════════════════════════════════════════════════════ */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
            style={{ gridAutoRows: "minmax(160px, auto)" }}
          >
            <HeroCard feature={heroFeature} />
            {restFeatures.map((card, i) => (
              <FeatureCard key={card.id} feature={card} delay={0.1 + i * 0.055} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
