import { useState, useEffect } from "react";
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

const heroImg1 = "/assets/images/living_room/living_01.png";
const heroImg2 = "/assets/images/kitchen/kitchen_01.png";
const transitionImg = "/assets/images/tv_unit/tv_unit_01.png";

export default function Hero({ setView }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

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
            <img
              src={bgImages[current]}
              alt="Suthar Luxury Interior Design"
              className="w-full h-full object-cover opacity-45 filter brightness-[0.72] contrast-[1.08]"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
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
              <div className="inline-flex items-center space-x-2 border border-[#CAA05C]/30 bg-stone-900/80 backdrop-blur-md px-5 py-2 rounded-full shadow-lg z-10">
                <span className="w-2 h-2 rounded-full bg-[#CAA05C] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#CAA05C]">
                  30+ YEARS OF FAMILY CRAFTSMANSHIP
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-extrabold tracking-tight text-white leading-[1.02] max-w-5xl mx-auto z-10">
                Find Your <span className="text-[#CAA05C]">Inspired</span><br />
                Interior Space
              </h1>

              <p className="text-stone-300 text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed z-10 font-sans">
                Transforming sea-facing villas, penthouses, and luxury commercial spaces across Mumbai, Goa &amp; Pune with 30+ years of generational timber joinery and licensed architect supervision.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 z-20 w-full max-w-md">
                <button
                  type="button"
                  onClick={handleStartProject}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-950 font-extrabold text-xs tracking-widest uppercase transition-all duration-300 bg-[#CAA05C] hover:bg-[#b0936b] px-8 py-4 rounded-full cursor-pointer shadow-xl hover:scale-[1.03] border border-[#CAA05C]"
                >
                  <span>Start Your Project</span>
                  <div className="w-6 h-6 rounded-full bg-stone-950/20 flex items-center justify-center text-stone-950">
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={handlePortfolioClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 border border-[#CAA05C]/60 hover:border-[#CAA05C] text-[#CAA05C] hover:text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-stone-900/80 backdrop-blur-md cursor-pointer hover:bg-stone-800"
                >
                  <span>Explore Portfolio</span>
                </button>
              </div>

              {/* Trust Features Bar */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl z-10">
                {[
                  { label: "Architect Supervised", color: "text-[#CAA05C]" },
                  { label: "Factory Joinery", color: "text-[#CAA05C]" },
                  { label: "Turnkey Execution", color: "text-[#CAA05C]" }
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
              <div className="inline-flex items-center space-x-2 bg-[#CAA05C]/20 backdrop-blur-md border border-[#CAA05C]/40 px-5 py-2 rounded-full">
                <Sparkles size={14} className="text-[#CAA05C]" />
                <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold text-[#CAA05C] font-mono">
                  LET'S BUILD SOMETHING EXCEPTIONAL
                </span>
              </div>

              {/* Grand Title */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Your Dream Space <br />
                <span className="text-[#CAA05C]">Starts With A</span> Conversation
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
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-950 font-extrabold text-xs tracking-widest uppercase transition-all duration-300 bg-[#CAA05C] hover:bg-[#b0936b] px-8 py-4 rounded-full cursor-pointer shadow-xl hover:scale-[1.03] border border-[#CAA05C]"
                >
                  <span>Book Free Consultation</span>
                  <div className="w-6 h-6 rounded-full bg-stone-950/20 flex items-center justify-center text-stone-950">
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </button>

                <a
                  href="tel:+919819776030"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 border border-[#CAA05C]/60 hover:border-[#CAA05C] text-[#CAA05C] hover:text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-stone-900/80 backdrop-blur-md cursor-pointer hover:bg-stone-800"
                >
                  <Phone size={14} className="text-[#CAA05C]" />
                  <span>Call 09819776030</span>
                </a>
              </div>

              {/* Regional Quote */}
              <p className="text-stone-400 font-light text-[11px] sm:text-xs max-w-3xl mx-auto pt-2 font-mono">
                &ldquo;Serving homeowners, businesses, architects, and commercial clients across Mumbai, Pune, Goa, Bengaluru, and surrounding regions.&rdquo;
              </p>

              {/* 4 Feature Cards with diverse Dopelycolors accents */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-4 text-left">
                {[
                  { title: "FREE CONSULTATION", desc: "Discuss your ideas with our team before making decisions.", icon: MessageSquare, accent: "border-[#CAA05C]/40 text-[#CAA05C]" },
                  { title: "ARCHITECT GUIDED", desc: "Carefully planned & supervised by licensed architects.", icon: Compass, accent: "border-[#CAA05C]/50 text-[#CAA05C]" },
                  { title: "FLEXIBLE EXECUTION", desc: "Labour only, materials, joinery, or full turnkey.", icon: Workflow, accent: "border-[#CAA05C]/40 text-[#CAA05C]" },
                  { title: "FAMILY CRAFTSMANSHIP", desc: "Over three decades of trust and quality since 1989.", icon: History, accent: "border-[#CAA05C]/40 text-[#CAA05C]" }
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
                <div className="inline-flex items-center space-x-2 border border-[#CAA05C]/40 bg-stone-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
                  <ShieldCheck size={14} className="text-[#CAA05C]" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#CAA05C]">
                    BESPOKE JOINERY &amp; TURNKEY SOLUTIONS
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                  Crafted With <span className="text-[#CAA05C]">Precision</span>.<br />
                  Built To <span className="text-[#CAA05C]">Last</span>.
                </h1>

                <p className="text-stone-300 text-xs sm:text-base font-light leading-relaxed max-w-xl font-sans">
                  From sea-facing luxury villas in Goa to duplex penthouses in Mumbai, our architect-supervised execution and Kumta factory-direct timber joinery deliver flawless spatial perfection.
                </p>

                {/* Metrics Badges Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-[#CAA05C] block font-display">30+</span>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-400 uppercase tracking-wider block mt-0.5">Years Legacy</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-[#CAA05C] block font-display">450+</span>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-400 uppercase tracking-wider block mt-0.5">Projects Built</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-[#CAA05C] block font-display">100%</span>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-400 uppercase tracking-wider block mt-0.5">Turnkey Quality</span>
                  </div>
                </div>

                {/* Action CTA buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handlePortfolioClick}
                    className="inline-flex items-center space-x-2.5 bg-[#CAA05C] hover:bg-[#b0936b] text-stone-950 font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-xl hover:scale-[1.03] border border-[#CAA05C]"
                  >
                    <span>Explore Our Portfolio</span>
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </button>

                  <button
                    type="button"
                    onClick={handleStartProject}
                    className="inline-flex items-center space-x-2 bg-stone-900/80 hover:bg-stone-800/90 border border-stone-600 hover:border-[#CAA05C] text-stone-200 hover:text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer backdrop-blur-md shadow-md"
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
                      <Award size={18} className="text-[#CAA05C]" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        SUTHAR GUILD STANDARDS
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#CAA05C] bg-stone-950 px-2.5 py-1 rounded-full border border-[#CAA05C]/30 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CAA05C] animate-pulse" />
                      <span>VERIFIED</span>
                    </span>
                  </div>

                  <div className="space-y-4 text-xs text-stone-300 font-light font-sans">
                    <div className="flex items-start space-x-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#CAA05C]/20 border border-[#CAA05C]/40 text-[#CAA05C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
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
                      <div className="w-6 h-6 rounded-full bg-[#CAA05C]/20 border border-[#CAA05C]/40 text-[#CAA05C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <div className="space-y-0.5">
                        <strong className="text-white block font-mono text-[11px] uppercase tracking-wider font-semibold">
                          Direct Timber Joinery
                        </strong>
                        <span className="text-stone-300 leading-relaxed block">
                          Factory-crafted teak, white ash, and modular kitchens directly from Kumta workshops.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#CAA05C]/20 border border-[#CAA05C]/40 text-[#CAA05C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
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
                      <MapPin size={13} className="text-[#CAA05C]" />
                      <span>Mumbai • Pune • Goa</span>
                    </div>
                    <span className="text-[#CAA05C] font-bold uppercase tracking-wider">Turnkey Warranty</span>
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
                  ? "w-8 bg-[#CAA05C]"
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
            className="w-11 h-11 rounded-full bg-stone-900/80 hover:bg-[#CAA05C] hover:text-stone-950 border border-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-stone-900/80 hover:bg-[#CAA05C] hover:text-stone-950 border border-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* BOTTOM FOOTER BREATHING MARGIN */}
      <div className="relative z-20 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-stone-500 uppercase tracking-widest border-t border-white/5 pt-4 gap-2 text-center sm:text-left">
        <span>SUTHAR INTERIOR STUDIO &amp; ARCHITECTURE</span>
        <span>EST. 1989 • MUMBAI &amp; GOA</span>
      </div>

    </section>
  );
}

