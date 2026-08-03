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
      className="relative min-h-[100dvh] w-full flex flex-col  overflow-hidden bg-[var(--color-surface-dark)] text-white select-none font-sans pt-24 sm:pt-32 md:pt-36 pb-6 md:pb-8"
    >
      {/* BACKGROUND IMAGE WITH RESPONSIVE GRADIENT VIGNETTE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base Image */}
        <Image
          src={HERO_BACKGROUND}
          alt={`${COMPANY_INFO.name} Luxury Interior Studio`}
          fill
          priority
          className="hidden md:block object-cover object-center brightness-80"
        />

        {/* Left Blur Overlay */}
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

        {/* Mobile */}
        <Image
          src={HERO_BACKGROUND_MOBILE}
          alt={`${COMPANY_INFO.name} Luxury Interior Studio`}
          fill
          priority
          className="block md:hidden object-cover object-center brightness-80"
        />
      </div>

      {/* LEFT CONTENT AREA */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full flex-1 flex items-end pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-left space-y-4 sm:space-y-6 md:space-y-8"
        >
          {/* Subtitle / Eyebrow with horizontal gold line */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <span className="text-[10px] sm:text-xs md:text-sm font-serif uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--color-primary)] font-semibold">
              CRAFTING EXCEPTIONAL SPACES SINCE {COMPANY_INFO.foundedYear}
            </span>
            <div className="h-[1px] w-10 sm:w-20 md:w-28 bg-[var(--color-primary)]/60 shrink-0" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl xs:text-4xl sm:text-[80px] md:text-[100px] lg:text-[80px] font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.1]">
            Designing Spaces <br className="hidden xs:inline" />
            People Love{" "}
            <span className="text-[var(--color-primary)]">Coming Home To</span>
          </h1>

          {/* Body Description */}
          <p className="text-stone-200 sm:text-white font-sans text-sm sm:text-base md:text-xl leading-relaxed max-w-3xl">
            Every project begins with understanding how you live. We combine
            architecture, craftsmanship, and timeless design to create homes,
            workplaces, and experiences that feel as extraordinary as they
            look.{" "}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <button
              onClick={handleStartProject}
              className="
    btn-premium
    btn-primary-premium
    inline-flex items-center justify-between
    min-w-[300px]
    h-16
    rounded-full
    bg-white
    border border-[var(--color-primary)]
    pl-8 pr-2
  "
            >
              <span className="btn-text text-lg font-semibold text-black transition-colors duration-300">
                Start Your Project
              </span>

              <div className="btn-icon h-12 w-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center transition-transform duration-300">
                <ArrowUpRight className="text-white" size={20} />
              </div>
            </button>
            <button
              onClick={handleViewPortfolio}
              className="
    btn-premium
    btn-secondary-premium
    inline-flex items-center justify-between
    min-w-[300px]
    h-16
    rounded-full
    bg-white/10
    backdrop-blur-xl
    border border-white/70
    pl-8 pr-2
  "
            >
              <span className="btn-text text-lg font-semibold text-white">
                View Portfolio
              </span>

              <div className="play-circle h-12 w-12 rounded-full bg-[var(--color-primary)] border-white/50 flex items-center justify-center transition-all duration-300">
                <Play
                  size={12}
                  className="play-icon fill-white translate-x-[1px] transition-colors duration-300"
                />
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FLOATING STATS BAR & SCROLL INDICATOR */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full space-y-4 sm:space-y-6 pt-2 sm:pt-4">
        {/* Scroll Indicator - Visible on all viewports */}
        <div className="flex flex-col items-center justify-center pt-2 sm:pt-1 gap-1.5 opacity-85 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-12 bg-[var(--color-primary)]/40" />
            <div className="w-5 h-7 rounded-full border border-[var(--color-primary)]/70 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="w-1 h-1.5 bg-[var(--color-primary)] rounded-full"
              />
            </div>
            <div className="h-[1px] w-8 sm:w-12 bg-[var(--color-primary)]/40" />
          </div>
          <span className="text-[12px] sm:text-[10px] font-serif uppercase tracking-[0.25em] text-white">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
}
