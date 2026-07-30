import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  Compass,
  Workflow,
  History,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { HERO_DATA, COMPANY_INFO } from "../lib/data.js";

// ─────────────────────────────────────────────────────────────────────────
// CONFIG SWITCH
// Set to `true` to bring back the multi-slide carousel (interval rotation,
// prev/next controls, slide-indicator dots, crossfading backgrounds).
// Set to `false` (current state) to render a single static hero — no
// timers, no controls, no dots, one fixed background.
// ─────────────────────────────────────────────────────────────────────────
const ENABLE_SLIDES = false;

// Background image(s). In carousel mode, index `i` pairs with slide `i`
// (falls back / wraps if there are more slides than backgrounds).
// In static mode, only index 0 is used.
const HERO_BACKGROUNDS = [
  "/assets/images/tv_unit/tv_unit_02.jpg",
  "/assets/images/living_room/living_01.png",
  "/assets/images/sofa/sofa-01.jpg",
  "/assets/images/bedroom/bedroom_01.jpg",
];
const HERO_CONTENT = {
  eyebrow: "YOUR VISION • OUR EXPERTISE",
  titlePrefix: "Every Great Interior",
  titleHighlight: "Begins With",
  titleSuffix: "Understanding You.",
  paragraphs: [
    "Whether you're building a new home, renovating an existing property, designing a modern office, or creating bespoke furniture, we begin by understanding your vision, lifestyle, and budget. This allows us to create spaces that are elegant, practical, and uniquely yours.",
  ],
  regionalQuote:
    "Proudly serving homeowners, businesses, architects, and commercial clients across Rajasthan, Mumbai, Pune, Goa, Karnataka, Hyderabad, Bengaluru, Hubballi, and surrounding regions.",
  primaryCtaText: "Book Free Consultation",
  featureCards: [
    {
      title: "Free Consultation",
      desc: "Discuss your ideas with our team before making decisions.",
      icon: MessageSquare,
      accent: "border-gold-accent/40 text-gold-accent",
    },
    {
      title: "ARCHITECT GUIDED",
      desc: "Carefully planned & supervised by licensed architects.",
      icon: Compass,
      accent: "border-gold-accent/50 text-gold-accent",
    },
    {
      title: "FLEXIBLE EXECUTION",
      desc: "Labour only, materials, joinery, or full turnkey.",
      icon: Workflow,
      accent: "border-gold-accent/40 text-gold-accent",
    },
    {
      title: "FAMILY CRAFTSMANSHIP",
      desc: `Over three decades of trust and quality since ${COMPANY_INFO.foundedYear}.`,
      icon: History,
      accent: "border-gold-accent/40 text-gold-accent",
    },
  ],
};

// The single slide's markup, driven entirely by HERO_CONTENT. Shared by
// both the carousel branch and the static branch below so there's only
// one place to edit the layout.
function HeroSlideContent({ onStartProject }) {
  return (
    <div className="text-center max-w-4xl mx-auto space-y-6">
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center space-x-2 bg-gold-accent/20 backdrop-blur-md border border-gold-accent/40 px-5 py-2 rounded-full">
        <Sparkles size={14} className="text-gold-accent" />
        <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold text-gold-accent font-mono">
          {HERO_CONTENT.eyebrow}
        </span>
      </div>

      {/* Grand Title */}
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
        {HERO_CONTENT.titlePrefix} <br />
        <span className="text-gold-accent">{HERO_CONTENT.titleHighlight}</span>{" "}
        {HERO_CONTENT.titleSuffix}
      </h1>

      {/* Descriptions */}
      <div className="space-y-3 max-w-3xl mx-auto text-stone-300 font-light text-xs sm:text-sm md:text-base leading-relaxed font-sans">
        {HERO_CONTENT.paragraphs.map((p, idx) => (
          <p
            key={idx}
            className={idx > 0 ? "hidden sm:block text-stone-400 text-xs sm:text-sm" : ""}
          >
            {p}
          </p>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
        <button
          type="button"
          onClick={onStartProject}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-950 font-extrabold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-[#b0936b] px-8 py-4 rounded-full cursor-pointer shadow-xl hover:scale-[1.03] border border-gold-accent"
        >
          <span>{HERO_CONTENT.primaryCtaText}</span>
          <div className="w-6 h-6 rounded-full bg-stone-950/20 flex items-center justify-center text-stone-950">
            <ArrowRight size={12} strokeWidth={2.5} />
          </div>
        </button>

        <a
          href={`tel:${COMPANY_INFO.phoneFormatted}`}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 border border-gold-accent/60 hover:border-gold-accent text-gold-accent hover:text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-stone-900/80 backdrop-blur-md cursor-pointer hover:bg-stone-800"
        >
          <Phone size={14} className="text-gold-accent" />
          <span>Call {COMPANY_INFO.phone}</span>
        </a>
      </div>

      {/* Regional Quote */}
      <p className="text-stone-400 font-light text-[11px] sm:text-xs max-w-3xl mx-auto pt-2 font-mono">
        &ldquo;{HERO_CONTENT.regionalQuote}&rdquo;
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-4 text-left">
        {HERO_CONTENT.featureCards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`bg-stone-900/80 backdrop-blur-md border p-3.5 sm:p-4 rounded-2xl space-y-1.5 transition-all duration-300 ${item.accent}`}
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Icon size={14} className="text-current" />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-white font-mono">
                {item.title}
              </h4>
              <p className="text-stone-400 text-[10px] sm:text-xs font-light leading-snug font-sans">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero({ setView }) {
  // Only meaningful when ENABLE_SLIDES is true.
  const totalSlides = ENABLE_SLIDES
    ? HERO_DATA.slides
      ? HERO_DATA.slides.length
      : HERO_BACKGROUNDS.length
    : 1;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!ENABLE_SLIDES) return undefined;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 8000);
    return () => clearInterval(timer);
  }, [current, totalSlides]);

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleStartProject = () => {
    if (typeof setView === "function") {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeBackground = ENABLE_SLIDES
    ? HERO_BACKGROUNDS[current % HERO_BACKGROUNDS.length]
    : HERO_BACKGROUNDS[0];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-stone-950 text-white select-none font-sans"
    >
      {/* BACKGROUND IMAGE (CAROUSEL OR STATIC) WITH GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-0">
        {ENABLE_SLIDES ? (
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={activeBackground}
                alt={COMPANY_INFO.name + " Luxury Interior Design"}
                fill
                priority
                className="object-cover object-center brightness-100 contrast-105 saturate-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={activeBackground}
              alt={COMPANY_INFO.name + " Luxury Interior Design"}
              fill
              priority
              className="object-cover object-center brightness-100 contrast-105 saturate-110"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Dark Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-black/15 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/20 to-stone-950/55 z-[1]" />

        {/* Subtle Blueprint Grid Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] z-[2]">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 sm:pt-36 pb-8 my-auto">
        {ENABLE_SLIDES ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-${current}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroSlideContent onStartProject={handleStartProject} />
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroSlideContent onStartProject={handleStartProject} />
          </motion.div>
        )}
      </div>

      {/* BOTTOM SLIDE CONTROLS BAR — carousel mode only */}
      {ENABLE_SLIDES && (
        <div className="relative z-30 pb-4 pt-2 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Slide Indicator Pills */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSlides }, (_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  current === idx
                    ? "w-8 bg-gold-accent"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-[11px] font-mono font-bold text-stone-400 pl-2">
              0{current + 1} / 0{totalSlides}
            </span>
          </div>

          {/* Circular Prev/Next Controls */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-stone-900/80 hover:bg-gold-accent hover:text-stone-950 border border-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-stone-900/80 hover:bg-gold-accent hover:text-stone-950 border border-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM FOOTER BREATHING MARGIN */}
      <div className="relative z-20 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-stone-500 uppercase tracking-widest border-t border-white/5 pt-4 gap-2 text-center sm:text-left">
        <span>{COMPANY_INFO.name.toUpperCase()}</span>
        <span>
          EST. {COMPANY_INFO.foundedYear} •{" "}
          {COMPANY_INFO.serviceCities.join(" & ").toUpperCase()}
        </span>
      </div>
    </section>
  );
}