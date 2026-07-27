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
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { HERO_DATA, COMPANY_INFO, SITE_IMAGES } from "../lib/data.js";

const heroImg1 = "/assets/images/living_room/living_01.png";
const heroImg2 = "/assets/images/kitchen/kitchen_01.png";
const transitionImg = "/assets/images/tv_unit/tv_unit_01.png";

export default function Hero({ setView }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalSlides = HERO_DATA.slides ? HERO_DATA.slides.length : 3;

  useEffect(() => {
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

  const handlePortfolioClick = () => {
    if (typeof setView === "function") {
      setView("gallery");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bgImages = [heroImg1, transitionImg, heroImg2];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-stone-950 text-white select-none font-sans"
    >
      {/* BACKGROUND IMAGE CAROUSEL WITH GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-0">
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
              src={bgImages[current]}
              alt={COMPANY_INFO.name + " Luxury Interior Design"}
              fill
              priority
              className="object-cover opacity-45 filter brightness-[0.72] contrast-[1.08]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/80 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/40 to-stone-950/85 z-[1]" />
        
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

      {/* DYNAMIC SLIDE CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 sm:pt-36 pb-8 my-auto">
        <AnimatePresence mode="wait">
          
          {/* SLIDE 0: GRAND EDITORIAL HERO DESIGN */}
          {current === 0 && (
            <motion.div
              key="slide-layout-0"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center space-y-6 relative"
            >
              {/* Tagline Badge */}
              <div className="inline-flex items-center space-x-2 border border-gold-accent/30 bg-stone-900/80 backdrop-blur-md px-5 py-2 rounded-full shadow-lg z-10">
                <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-gold-accent">
                  {HERO_DATA.badgeText}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-extrabold tracking-tight text-white leading-[1.02] max-w-5xl mx-auto z-10">
                {HERO_DATA.titlePart1} <span className="text-gold-accent">Inspired</span><br />
                Interior Space
              </h1>

              <p className="text-stone-300 text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed z-10 font-sans">
                {HERO_DATA.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 z-20 w-full max-w-md">
                <button
                  type="button"
                  onClick={handleStartProject}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-950 font-extrabold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-[#b0936b] px-8 py-4 rounded-full cursor-pointer shadow-xl hover:scale-[1.03] border border-gold-accent"
                >
                  <span>{HERO_DATA.secondaryCtaText}</span>
                  <div className="w-6 h-6 rounded-full bg-stone-950/20 flex items-center justify-center text-stone-950">
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={handlePortfolioClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 border border-gold-accent/60 hover:border-gold-accent text-gold-accent hover:text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-stone-900/80 backdrop-blur-md cursor-pointer hover:bg-stone-800"
                >
                  <span>{HERO_DATA.primaryCtaText}</span>
                </button>
              </div>

              {/* Trust Features Bar */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl z-10">
                {[
                  { label: "Architect Supervised", color: "text-gold-accent" },
                  { label: "Factory Joinery", color: "text-gold-accent" },
                  { label: "Turnkey Execution", color: "text-gold-accent" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center space-x-2 bg-stone-900/80 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-md text-[11px] font-mono text-stone-300 uppercase tracking-wider"
                  >
                    <CheckCircle2 size={13} className={`${item.color} shrink-0`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SLIDE 1: CONVERSATIONAL CONSULTATION LAYOUT */}
          {current === 1 && (
            <motion.div
              key="slide-layout-1"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center space-x-2 bg-gold-accent/20 backdrop-blur-md border border-gold-accent/40 px-5 py-2 rounded-full">
                <Sparkles size={14} className="text-gold-accent" />
                <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold text-gold-accent font-mono">
                  LET'S BUILD SOMETHING EXCEPTIONAL
                </span>
              </div>

              {/* Grand Title */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Your Dream Space <br />
                <span className="text-gold-accent">Starts With A</span> Conversation
              </h1>

              {/* Descriptions */}
              <div className="space-y-3 max-w-3xl mx-auto text-stone-300 font-light text-xs sm:text-sm md:text-base leading-relaxed font-sans">
                <p>
                  Whether you're building a new home, renovating an existing property, designing a modern office, or creating custom furniture, our experienced architects and craftsmen are ready to transform your vision into a beautifully crafted reality.
                </p>
                <p className="hidden sm:block text-stone-400 text-xs sm:text-sm">
                  Every project begins with understanding your goals, lifestyle, and budget—allowing us to create spaces that are functional, timeless, and uniquely yours.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <button
                  type="button"
                  onClick={handleStartProject}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-950 font-extrabold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-[#b0936b] px-8 py-4 rounded-full cursor-pointer shadow-xl hover:scale-[1.03] border border-gold-accent"
                >
                  <span>Book Free Consultation</span>
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
                &ldquo;Serving homeowners, businesses, architects, and commercial clients across {COMPANY_INFO.serviceCities.join(", ")}, and surrounding regions.&rdquo;
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-4 text-left">
                {[
                  { title: "FREE CONSULTATION", desc: "Discuss your ideas with our team before making decisions.", icon: MessageSquare, accent: "border-gold-accent/40 text-gold-accent" },
                  { title: "ARCHITECT GUIDED", desc: "Carefully planned & supervised by licensed architects.", icon: Compass, accent: "border-gold-accent/50 text-gold-accent" },
                  { title: "FLEXIBLE EXECUTION", desc: "Labour only, materials, joinery, or full turnkey.", icon: Workflow, accent: "border-gold-accent/40 text-gold-accent" },
                  { title: "FAMILY CRAFTSMANSHIP", desc: `Over three decades of trust and quality since ${COMPANY_INFO.foundedYear}.`, icon: History, accent: "border-gold-accent/40 text-gold-accent" }
                ].map((item, idx) => {
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
            </motion.div>
          )}

          {/* SLIDE 2: SPLIT EDITORIAL ARCHITECTURAL SHOWCASE LAYOUT */}
          {current === 2 && (
            <motion.div
              key="slide-layout-2"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left"
            >
              {/* Left Column: Text & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 border border-gold-accent/40 bg-stone-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
                  <ShieldCheck size={14} className="text-gold-accent" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono font-bold text-gold-accent">
                    BESPOKE JOINERY &amp; TURNKEY SOLUTIONS
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                  Crafted With <span className="text-gold-accent">Precision</span>.<br />
                  Built To <span className="text-gold-accent">Last</span>.
                </h1>

                <p className="text-stone-300 text-xs sm:text-base font-light leading-relaxed max-w-xl font-sans">
                  From sea-facing luxury villas in Goa to duplex penthouses in Mumbai, our architect-supervised execution and factory-direct timber joinery deliver flawless spatial perfection.
                </p>

                {/* Metrics Badges Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {(HERO_DATA?.metrics || []).slice(0, 3).map((m, idx) => (
                    <div key={idx}>
                      <span className="text-2xl sm:text-4xl font-extrabold text-gold-accent block font-display">{m.value}</span>
                      <span className="text-[10px] sm:text-xs font-mono text-stone-400 uppercase tracking-wider block mt-0.5">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handlePortfolioClick}
                    className="inline-flex items-center space-x-2.5 bg-gold-accent hover:bg-[#b0936b] text-stone-950 font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-xl hover:scale-[1.03] border border-gold-accent"
                  >
                    <span>Explore Our Portfolio</span>
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </button>

                  <button
                    type="button"
                    onClick={handleStartProject}
                    className="inline-flex items-center space-x-2 bg-stone-900/80 hover:bg-stone-800/90 border border-stone-600 hover:border-gold-accent text-stone-200 hover:text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer backdrop-blur-md shadow-md"
                  >
                    <span>Request Onboarding Intake</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Floating Architectural Card */}
              <div className="lg:col-span-5 relative">
                <div className="bg-stone-900/90 border border-stone-700/80 p-6 sm:p-8 rounded-[32px] shadow-2xl space-y-6 backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-stone-700/80 pb-4">
                    <div className="flex items-center space-x-2">
                      <Award size={18} className="text-gold-accent" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        SUTHAR GUILD STANDARDS
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gold-accent bg-stone-950 px-2.5 py-1 rounded-full border border-gold-accent/30 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
                      <span>VERIFIED</span>
                    </span>
                  </div>

                  <div className="space-y-4 text-xs text-stone-300 font-light font-sans">
                    <div className="flex items-start space-x-3.5">
                      <div className="w-6 h-6 rounded-full bg-gold-accent/20 border border-gold-accent/40 text-gold-accent flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <div className="space-y-0.5">
                        <strong className="text-white block font-mono text-[11px] uppercase tracking-wider font-semibold">
                          Architect Supervision
                        </strong>
                        <span className="text-stone-300 leading-relaxed block">
                          Licensed architects supervise civil, electrical, and furniture teams daily on-site.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <div className="w-6 h-6 rounded-full bg-gold-accent/20 border border-gold-accent/40 text-gold-accent flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <div className="space-y-0.5">
                        <strong className="text-white block font-mono text-[11px] uppercase tracking-wider font-semibold">
                          Direct Timber Joinery
                        </strong>
                        <span className="text-stone-300 leading-relaxed block">
                          Factory-crafted teak, white ash, and modular kitchens directly from regional workshops.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <div className="w-6 h-6 rounded-full bg-gold-accent/20 border border-gold-accent/40 text-gold-accent flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <div className="space-y-0.5">
                        <strong className="text-white block font-mono text-[11px] uppercase tracking-wider font-semibold">
                          Transparent Material Schedule
                        </strong>
                        <span className="text-stone-300 leading-relaxed block">
                          Zero hidden markups with itemized material specifications provided prior to execution.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-700/80 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <div className="flex items-center space-x-1.5">
                      <MapPin size={13} className="text-gold-accent" />
                      <span>{COMPANY_INFO.serviceCities.join(" • ")}</span>
                    </div>
                    <span className="text-gold-accent font-bold uppercase tracking-wider">Turnkey Warranty</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* BOTTOM SLIDE CONTROLS BAR */}
      <div className="relative z-30 pb-4 pt-2 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* Slide Indicator Pills */}
        <div className="flex items-center space-x-2">
          {[0, 1, 2].map((idx) => (
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

      {/* BOTTOM FOOTER BREATHING MARGIN */}
      <div className="relative z-20 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-stone-500 uppercase tracking-widest border-t border-white/5 pt-4 gap-2 text-center sm:text-left">
        <span>{COMPANY_INFO.name.toUpperCase()}</span>
        <span>EST. {COMPANY_INFO.foundedYear} • {COMPANY_INFO.serviceCities.join(" & ").toUpperCase()}</span>
      </div>

    </section>
  );
}


