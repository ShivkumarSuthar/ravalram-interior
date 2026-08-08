import { motion } from "motion/react";
import Image from "./Image.jsx";
import {
  ArrowRight,
  Play,
  Award,
  Building2,
  Home,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY_INFO, SITE_IMAGES } from "../lib/data.js";

const HERO_BACKGROUND = "/assets/images/14.png";
const HERO_BACKGROUND_MOBILE = "/assets/images/34.jfif";

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
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-bg-dark text-white select-none font-sans pt-20 sm:pt-32 md:pt-36 pb-10 sm:pb-8"
    >
      {/* BACKGROUND IMAGE WITH RESPONSIVE GRADIENT & SOFT WARM BLUR */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Desktop Base Image */}
        <Image
          src={HERO_BACKGROUND}
          alt={`${COMPANY_INFO.name} Luxury Interior Studio`}
          fill
          priority
          className="hidden md:block object-cover object-center brightness-80"
        />

        {/* Desktop Left Blur Overlay */}
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          priority
          aria-hidden
          className="hidden md:block object-cover object-center brightness-80 blur-xl"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 35%, transparent 70%)",
            maskImage:
              "linear-gradient(to right, black 0%, black 35%, transparent 70%)",
          }}
        />

        {/* Mobile Background Base Image - Bright, Sunlit & Soft Architectural Blur */}
        <Image
          src={HERO_BACKGROUND_MOBILE}
          alt={`${COMPANY_INFO.name} Luxury Interior Studio`}
          fill
          priority
          className="block md:hidden object-cover object-center brightness-110 contrast-105 saturate-105 filter blur-[3px] scale-105"
        />

        {/* Mobile Bright & Airy Subtle Gradient Overlay */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-bg-dark/35 backdrop-blur-[1px]" />
      </div>

      {/* CONTENT AREA */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full flex-1 flex items-center sm:items-end pt-2 sm:pt-0 pb-2 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-left space-y-3.5 sm:space-y-6 md:space-y-8 w-full"
        >
          {/* Subtitle / Eyebrow Tag - Mobile Specific (Ultra-Compact Glass Badge) */}
          <div className="inline-flex sm:hidden items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/45 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span className="text-[9.5px] font-mono tracking-[0.14em] uppercase text-primary font-bold">
              EST. {COMPANY_INFO.foundedYear} • CRAFTING SPACES
            </span>
          </div>

          {/* Subtitle / Eyebrow Tag - Desktop (Unchanged) */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-xs md:text-sm font-serif uppercase tracking-[0.25em] text-primary font-bold drop-shadow-sm">
              CRAFTING EXCEPTIONAL SPACES SINCE {COMPANY_INFO.foundedYear}
            </span>
            <div className="h-[1px] w-20 md:w-28 bg-primary/60 shrink-0" />
          </div>

          {/* Main Headline - Larger & Bright with wider tracking on Mobile */}
          <h1 className="font-serif text-[34px] xs:text-[40px] sm:text-[80px] md:text-[100px] lg:text-[80px] font-extrabold tracking-normal sm:tracking-tight text-white leading-[1.12] sm:leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
            Designing Spaces <br className="hidden xs:inline" />
            People Love{" "}
            <span className="text-primary inline-block">Coming Home To</span>
          </h1>

          {/* Body Description - Luminous Frosted Glass Capsule with wider tracking on Mobile */}
          <div className="p-3.5 xs:p-4 sm:p-0 rounded-2xl bg-white/15 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-white/25 sm:border-0 shadow-lg sm:shadow-none">
            <p className="text-white font-sans text-xs xs:text-sm sm:text-base md:text-xl leading-relaxed sm:leading-relaxed max-w-3xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] font-medium sm:font-normal tracking-wide sm:tracking-normal">
              Every project begins with understanding how you live. We combine
              architecture, craftsmanship, and timeless design to create homes,
              workplaces, and experiences that feel as extraordinary as they
              look.
            </p>
          </div>

          {/* Action CTA Buttons - Fully Harmonized Mobile Layout */}
          <div className="flex flex-row items-center gap-2.5 xs:gap-3 pt-2 sm:pt-3">
            {/* Start Your Project Button */}
            <button
              onClick={handleStartProject}
              className="
                group/btn
                inline-flex items-center justify-between
                w-auto sm:min-w-[280px]
                h-11 xs:h-12 sm:h-16
                rounded-full
                bg-white
                hover:bg-bg-base
                border border-primary
                pl-4 pr-1.5 xs:pl-5 xs:pr-1.5 sm:pl-8 sm:pr-2
                transition-all duration-300
                shadow-md shadow-black/20
                cursor-pointer
              "
            >
              <span className="text-xs xs:text-sm sm:text-lg font-bold text-stone-950 transition-colors duration-300">
                Start Your Project
              </span>

              <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-primary group-hover/btn:bg-primary-hover flex items-center justify-center transition-all duration-300 shrink-0 ml-2 sm:ml-0">
                <ArrowUpRight className="text-stone-950 sm:text-white group-hover/btn:scale-110 transition-transform" size={15} />
              </div>
            </button>

            {/* View Portfolio Play Button - Single Sleek Circle on Mobile (Harmonized with Header Menu) */}
            <button
              onClick={handleViewPortfolio}
              aria-label="View Portfolio"
              className="
                group/btn
                inline-flex items-center justify-center sm:justify-between
                w-11 h-11 xs:w-12 xs:h-12 sm:w-auto sm:h-16 sm:min-w-[280px]
                rounded-full
                bg-primary sm:bg-white/10
                hover:bg-primary-hover sm:hover:bg-white/20
                border border-primary sm:border-white/70
                p-0 sm:pl-8 sm:pr-2
                transition-all duration-300
                shadow-md shadow-black/20
                cursor-pointer
                shrink-0
              "
            >
              <span className="hidden sm:inline text-xs xs:text-sm sm:text-lg font-bold text-white">
                View Portfolio
              </span>

              <div className="h-full w-full sm:h-12 sm:w-12 rounded-full bg-transparent sm:bg-primary flex items-center justify-center transition-all duration-300 shrink-0">
                <Play
                  size={14}
                  className="fill-stone-950 text-stone-950 sm:fill-white sm:text-white translate-x-[1px] group-hover/btn:scale-110 transition-transform"
                />
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SCROLL INDICATOR - Generous bottom padding on mobile */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full pt-1 sm:pt-4 pb-3 sm:pb-2">
        <div className="flex flex-col items-center justify-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-12 bg-primary/40" />
            <div className="w-5 h-7 rounded-full border border-primary/70 flex items-start justify-center p-1 bg-black/20 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="w-1 h-1.5 bg-primary rounded-full"
              />
            </div>
            <div className="h-[1px] w-8 sm:w-12 bg-primary/40" />
          </div>
          <span className="text-[10px] sm:text-[10px] font-serif uppercase tracking-[0.25em] text-white/90 drop-shadow-sm font-semibold">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
}
