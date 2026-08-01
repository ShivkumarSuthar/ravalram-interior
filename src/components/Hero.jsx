import { motion } from "motion/react";
import Image from "./Image.jsx";
import {
  ArrowRight,
  Play,
  Award,
  Building2,
  Home,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO, SITE_IMAGES } from "../lib/data.js";

const HERO_BACKGROUND = SITE_IMAGES.heroBg || "/assets/images/AI_images/hero_living_room.jpg";

export default function Hero({ setView }) {
  const handleStartProject = () => {
    if (typeof setView === "function") {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewPortfolio = () => {
    if (typeof setView === "function") {
      setView("gallery");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("gallery");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-stone-950 text-white select-none font-sans pt-24 sm:pt-32 md:pt-36 pb-6 md:pb-8"
    >
      {/* BACKGROUND IMAGE WITH RESPONSIVE GRADIENT VIGNETTE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_BACKGROUND}
          alt={COMPANY_INFO.name + " Luxury Interior Studio"}
          fill
          priority
          className="object-cover object-center brightness-105 contrast-100"
          referrerPolicy="no-referrer"
        />

        {/* Responsive gradient overlay - dark backdrop on mobile for maximum legibility, smooth fade on desktop */}
        <div className="absolute inset-0 bg-stone-950/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-stone-950/85 sm:via-stone-950/40 sm:to-transparent z-[1] w-full sm:w-[75%] md:w-[60%]" />
        
        {/* Subtle top and bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-transparent to-stone-950/70 z-[1]" />
      </div>

      {/* LEFT CONTENT AREA */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full my-auto py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-left space-y-4 sm:space-y-6 md:space-y-8"
        >
          {/* Subtitle / Eyebrow with horizontal gold line */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <span className="text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#c5a880] font-semibold">
              CRAFTING LUXURY SINCE {COMPANY_INFO.foundedYear}
            </span>
            <div className="h-[1px] w-10 sm:w-20 md:w-28 bg-[#c5a880]/60 shrink-0" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.1]">
            Designing Spaces <br className="hidden xs:inline" />
            People <span className="text-[#c5a880]">Never</span> Want To Leave.
          </h1>

          {/* Body Description */}
          <p className="text-stone-200 sm:text-stone-300 font-sans text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
            From bespoke residences to commercial spaces, we transform ideas into timeless interiors.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-3">
            {/* Primary Button */}
            <button
              type="button"
              onClick={handleStartProject}
              className="inline-flex items-center justify-center space-x-3 bg-[#c5a880] hover:bg-[#b0936b] active:bg-[#9d8159] text-stone-950 font-bold text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-300 cursor-pointer shadow-xl hover:scale-[1.01] active:scale-[0.99] border border-[#c5a880]"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              onClick={handleViewPortfolio}
              className="inline-flex items-center justify-center space-x-3 bg-stone-900/40 sm:bg-white/15 hover:bg-white/25 border border-white/30 hover:border-gold-accent text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-300 cursor-pointer backdrop-blur-md shadow-lg"
            >
              <span>VIEW PORTFOLIO</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/50 flex items-center justify-center">
                <Play size={10} className="fill-white translate-x-[1px]" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FLOATING STATS BAR & SCROLL INDICATOR */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full space-y-4 sm:space-y-6 pt-2 sm:pt-4">
        {/* Floating Glassmorphism Experience Bar - Refined grid for laptop, tablet, and mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-stone-900/80 sm:bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-3.5 sm:p-5 lg:p-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 shadow-2xl"
        >
          {/* Stat 1: 35+ Years Experience */}
          <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-white/5 sm:bg-white/10 border border-white/10 hover:border-gold-accent/50 transition-all duration-300">
            <div className="text-gold-accent shrink-0 p-2 sm:p-2.5 bg-gold-accent/15 rounded-full border border-gold-accent/30 backdrop-blur-sm shadow-inner">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            </div>
            <div className="text-left">
              <div className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">35+</div>
              <div className="text-[9px] xs:text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-300 font-medium mt-0.5">YEARS EXPERIENCE</div>
            </div>
          </div>

          {/* Stat 2: 500+ Projects Done */}
          <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-white/5 sm:bg-white/10 border border-white/10 hover:border-gold-accent/50 transition-all duration-300">
            <div className="text-gold-accent shrink-0 p-2 sm:p-2.5 bg-gold-accent/15 rounded-full border border-gold-accent/30 backdrop-blur-sm shadow-inner">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            </div>
            <div className="text-left">
              <div className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">500+</div>
              <div className="text-[9px] xs:text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-300 font-medium mt-0.5">PROJECTS DONE</div>
            </div>
          </div>

          {/* Stat 3: Turnkey Execution */}
          <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-white/5 sm:bg-white/10 border border-white/10 hover:border-gold-accent/50 transition-all duration-300">
            <div className="text-gold-accent shrink-0 p-2 sm:p-2.5 bg-gold-accent/15 rounded-full border border-gold-accent/30 backdrop-blur-sm shadow-inner">
              <Home className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            </div>
            <div className="text-left">
              <div className="font-serif text-base sm:text-xl md:text-2xl font-extrabold text-white tracking-tight uppercase">TURNKEY</div>
              <div className="text-[9px] xs:text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-300 font-medium mt-0.5">EXECUTION</div>
            </div>
          </div>

          {/* Stat 4: Est. 1989 Guild */}
          <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-white/5 sm:bg-white/10 border border-white/10 hover:border-gold-accent/50 transition-all duration-300">
            <div className="text-gold-accent shrink-0 p-2 sm:p-2.5 bg-gold-accent/15 rounded-full border border-gold-accent/30 backdrop-blur-sm shadow-inner">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            </div>
            <div className="text-left">
              <div className="font-serif text-base sm:text-xl md:text-2xl font-extrabold text-white tracking-tight uppercase">GUILD</div>
              <div className="text-[9px] xs:text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-300 font-medium mt-0.5">SINCE 1989</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator - Visible on all viewports */}
        <div className="flex flex-col items-center justify-center pt-2 sm:pt-1 gap-1.5 opacity-85 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-12 bg-[#c5a880]/40" />
            <div className="w-5 h-7 rounded-full border border-[#c5a880]/70 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-1 h-1.5 bg-[#c5a880] rounded-full"
              />
            </div>
            <div className="h-[1px] w-8 sm:w-12 bg-[#c5a880]/40" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-stone-300">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
}
