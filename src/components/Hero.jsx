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
  MapPin
} from "lucide-react";

import heroImg1 from "../assets/images/antra_hero_bg_1782744248753.jpg";
import heroImg2 from "../assets/images/antra_hero_slide2_1782747378004.jpg";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";

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
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-stone-950 text-white select-none"
    >
      {/* BACKGROUND IMAGE CAROUSEL WITH GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={bgImages[current]}
              alt="Suthar Luxury Interior Design"
              className="w-full h-full object-cover opacity-40 filter brightness-[0.75] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/80 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/80 z-[1]" />
        
        {/* Subtle Blueprint Grid Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[2]">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>
      </div>

      {/* TOP FLOATING NAVIGATION SLIDE CONTROLS BAR */}
      <div className="relative z-30 pt-24 sm:pt-28 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* Slide Indicator Pills */}
        <div className="flex items-center space-x-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                current === idx
                  ? "w-8 bg-[#c5a880]"
                  : "w-2 bg-white/30 hover:bg-white/60"
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
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-[#c5a880] hover:text-stone-950 border border-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-[#c5a880] hover:text-stone-950 border border-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* DYNAMIC SLIDE CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full py-10 my-auto">
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
              {/* Ghost Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 w-full overflow-hidden text-center opacity-10">
                <span className="text-[20vw] font-black text-white tracking-tighter lowercase leading-none block">
                  interior
                </span>
              </div>

              {/* Tagline Badge */}
              <div className="inline-flex items-center space-x-2 border border-white/20 bg-stone-900/80 backdrop-blur-md px-5 py-2 rounded-full shadow-lg z-10">
                <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
                <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-white font-mono">
                  30+ YEARS OF FAMILY CRAFTSMANSHIP
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold tracking-tight text-white leading-[0.98] max-w-5xl mx-auto z-10">
                Find Your <span className="text-[#c5a880]">Inspired</span><br />
                <span className="text-[#c5a880]">Interior Design</span>
              </h1>

              <p className="text-stone-300 text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed z-10">
                Transform your vision into reality with our innovative designs, creating modern spaces that blend functionality, aesthetics, and sustainability.
              </p>

              {/* Circular Start Project Button */}
              <div className="pt-4 z-20">
                <button
                  onClick={handleStartProject}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-stone-900/90 border border-white/30 backdrop-blur-md flex flex-col items-center justify-center text-white hover:bg-[#c5a880] hover:text-stone-950 hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer group"
                >
                  <span className="text-xs sm:text-sm font-bold leading-snug tracking-wide text-center">
                    Start<br />Project
                  </span>
                </button>
              </div>
            </motion.div>
          )}

          {/* SLIDE 1: CONVERSATIONAL CONVERSATION LAYOUT (From FinalCTA) */}
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
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full">
                <Sparkles size={14} className="text-[#c5a880]" />
                <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold text-stone-200 font-mono">
                  LET'S BUILD SOMETHING EXCEPTIONAL
                </span>
              </div>

              {/* Grand Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Your Dream Space <br />
                <span className="text-[#c5a880]">Starts With A Conversation.</span>
              </h1>

              {/* Descriptions */}
              <div className="space-y-3 max-w-3xl mx-auto text-stone-300 font-light text-xs sm:text-sm md:text-base leading-relaxed">
                <p>
                  Whether you're building a new home, renovating an existing property, designing a modern office, or creating custom furniture, our experienced architects and craftsmen are ready to transform your vision into a beautifully crafted reality.
                </p>
                <p className="hidden sm:block">
                  Every project begins with understanding your goals, lifestyle, and budget—allowing us to create spaces that are functional, timeless, and uniquely yours.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <button
                  onClick={handleStartProject}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] hover:bg-[#b0936b] px-8 py-4 rounded-full cursor-pointer shadow-xl hover:scale-105"
                >
                  <span>Book Your Free Consultation</span>
                  <div className="w-7 h-7 rounded-full bg-stone-950/15 flex items-center justify-center text-stone-950">
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </button>

                <a
                  href="tel:+919819776030"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 border border-white/20 hover:border-[#c5a880] text-white hover:text-[#c5a880] text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-white/5 backdrop-blur-md cursor-pointer hover:bg-white/10"
                >
                  <Phone size={14} className="text-[#c5a880]" />
                  <span>Call 09819776030</span>
                </a>
              </div>

              {/* Regional Quote */}
              <p className="text-stone-400 font-light text-[11px] sm:text-xs max-w-3xl mx-auto pt-2 font-mono">
                &ldquo;Serving homeowners, businesses, architects, and commercial clients across Mumbai, Pune, Goa, Bengaluru, Hyderabad, Hubballi, Kumta, Honnavar, Murudeshwar, and surrounding regions.&rdquo;
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-4 text-left">
                {[
                  { title: "FREE CONSULTATION", desc: "Discuss your ideas with our team before making decisions.", icon: MessageSquare },
                  { title: "ARCHITECT GUIDED", desc: "Carefully planned & supervised by licensed architects.", icon: Compass },
                  { title: "FLEXIBLE EXECUTION", desc: "Labour only, materials, joinery, or full turnkey.", icon: Workflow },
                  { title: "FAMILY CRAFTSMANSHIP", desc: "Over three decades of trust and quality since 1989.", icon: History }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-stone-900/80 backdrop-blur-md border border-white/10 p-3.5 sm:p-4 rounded-2xl space-y-1.5 hover:border-[#c5a880]/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c5a880]">
                        <Icon size={14} />
                      </div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
                        {item.title}
                      </h4>
                      <p className="text-stone-400 text-[10px] sm:text-xs font-light leading-snug">
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
            >
              {/* Left Column: Text & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 border border-white/20 bg-stone-900/80 backdrop-blur-md px-5 py-2 rounded-full">
                  <ShieldCheck size={14} className="text-[#c5a880]" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono font-bold text-stone-200">
                    BESPOKE JOINERY & TURNKEY SOLUTIONS
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                  Crafted With <span className="text-[#c5a880]">Precision.</span><br />
                  Built To <span className="text-[#c5a880]">Last.</span>
                </h1>

                <p className="text-stone-300 text-xs sm:text-base font-light leading-relaxed max-w-xl">
                  From sea-facing luxury villas in Goa to duplex penthouses in Mumbai, our architect-supervised execution and Kumta factory-direct timber joinery deliver flawless spatial perfection.
                </p>

                {/* Metrics Badges Grid */}
                <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10">
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-[#c5a880] block">30+</span>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-400 uppercase tracking-wider block">Years Legacy</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-white block">450+</span>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-400 uppercase tracking-wider block">Projects Built</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-[#c5a880] block">100%</span>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-400 uppercase tracking-wider block">Turnkey Quality</span>
                  </div>
                </div>

                {/* Action CTA buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={handlePortfolioClick}
                    className="inline-flex items-center space-x-2 bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:scale-105"
                  >
                    <span>Explore Our Portfolio</span>
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </button>

                  <button
                    onClick={handleStartProject}
                    className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer backdrop-blur-md"
                  >
                    <span>Request Onboarding Intake</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Floating Architectural Card */}
              <div className="lg:col-span-5 relative">
                <div className="bg-stone-900/90 border border-white/15 p-6 sm:p-8 rounded-[32px] shadow-2xl space-y-6 backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center space-x-2">
                      <Award size={18} className="text-[#c5a880]" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        SUTHAR GUILD STANDARDS
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      ● VERIFIED
                    </span>
                  </div>

                  <div className="space-y-4 text-xs text-stone-300 font-light">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <div>
                        <strong className="text-white block font-mono text-[11px] uppercase">Architect Supervision</strong>
                        <span>Licensed architects supervise civil, electrical, and furniture teams daily on-site.</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <div>
                        <strong className="text-white block font-mono text-[11px] uppercase">Direct Timber Joinery</strong>
                        <span>Factory-crafted teak, white ash, and modular kitchens directly from Kumta workshops.</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                      <div>
                        <strong className="text-white block font-mono text-[11px] uppercase">Transparent Material Schedule</strong>
                        <span>Zero hidden markups with itemized material specifications provided prior to execution.</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <div className="flex items-center space-x-1.5">
                      <MapPin size={12} className="text-[#c5a880]" />
                      <span>Mumbai • Pune • Goa</span>
                    </div>
                    <span className="text-[#c5a880] font-bold uppercase">Turnkey Warranty</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* BOTTOM FOOTER BREATHING MARGIN */}
      <div className="relative z-20 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex justify-between items-center text-[10px] font-mono text-stone-500 uppercase tracking-widest border-t border-white/5 pt-4">
        <span>SUTHAR INTERIOR STUDIO & ARCHITECTURE</span>
        <span>EST. 1989 • MUMBAI & GOA</span>
      </div>

    </section>
  );
}
