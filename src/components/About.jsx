import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  Compass,
  Workflow,
  Hammer,
  Sparkles,
  ArrowRight,
  Building2,
  SlidersHorizontal,
  CheckCircle2,
  Navigation
} from "lucide-react";
import { ABOUT_DATA, COMPANY_INFO } from "../lib/data.js";

const aboutImg = "/assets/images/AI_images/antra_about_side_1782744266546.jpg";
const transitionImg = "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";

export default function About({ setView }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="bg-[#faf9f6] py-20 md:py-32 overflow-hidden relative border-b border-stone-200/60">
      
      {/* Subtle architectural wireframe watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-[0.05] z-0 overflow-hidden hidden md:block">
        <svg viewBox="0 0 800 800" className="w-full h-full text-stone-900 stroke-current" fill="none" strokeWidth="1">
          <path d="M100 700 L400 500 L700 700 Z M400 500 L400 200 L100 400 L100 700 M400 200 L700 400 L700 700 M100 400 L400 200 L700 400 M100 400 L400 500 L700 400" />
          <path d="M150 650 L380 490 M420 490 L650 650 M150 430 L380 270 M420 270 L650 430" strokeDasharray="4 4" />
          <circle cx="400" cy="500" r="6" fill="currentColor" />
          <circle cx="400" cy="200" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-28 md:space-y-36">
        
        {/* PART 1: Brand Heritage & Story Intro */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Overlapping Image Cards */}
          <div className="lg:col-span-6 relative pb-12 lg:pb-0">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              
              {/* Top Main Card */}
              <motion.div 
                variants={itemVariants}
                className="w-[82%] aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl border border-stone-200/60 relative z-10"
              >
                <Image
                  src={aboutImg}
                  alt={`${COMPANY_INFO.name} architectural design`}
                  fill
                  className="object-cover filter brightness-[0.95]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Overlapping Secondary Card */}
              <motion.div 
                variants={itemVariants}
                className="w-[76%] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#faf9f6] absolute right-0 bottom-[-30px] sm:bottom-[-40px] z-20"
              >
                <Image
                  src={transitionImg}
                  alt="Sea-facing villa spatial layout"
                  fill
                  className="object-cover filter brightness-[0.98]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Floating Gold Experience Badge */}
              <motion.div
                variants={itemVariants}
                className="absolute left-2 sm:left-4 bottom-[-20px] sm:bottom-[-30px] bg-gold-accent text-white px-6 py-4 sm:px-8 sm:py-6 rounded-[22px] sm:rounded-[26px] shadow-2xl z-30 flex items-center space-x-3 sm:space-x-4 border-2 border-white/20"
              >
                <span className="text-3xl sm:text-4xl lg:text-7xl font-extrabold tracking-tight leading-none">
                  {ABOUT_DATA.experienceYears}+
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight text-white/95">
                    Years
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight text-white/95">
                    Legacy
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Story Copy & CTA */}
          <div className="lg:col-span-6 space-y-7 text-left pt-6 lg:pt-0">
            
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100/90 px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold-accent" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-700">
                  {ABOUT_DATA.badgeText}
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                {ABOUT_DATA.title}
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-xl">
              {ABOUT_DATA.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                  Residential Design
                </h3>
                <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                  Tailored luxury villas, penthouses, and bespoke furniture joinery.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                  Commercial &amp; Turnkey
                </h3>
                <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                  Ergonomic corporate headquarters, showrooms, and end-to-end execution.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-3 border-t border-stone-200/80 space-y-1">
              <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block">
                OPERATIONAL FOOTPRINT
              </span>
              <p className="text-xs sm:text-sm font-medium text-stone-800 tracking-wide leading-relaxed font-mono">
                Executing Turnkey Projects Across {COMPANY_INFO.serviceCities.join(", ")} &amp; Coastal Hubs
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <button
                onClick={() => {
                  if (typeof setView === "function") {
                    setView("about-us");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center space-x-3 bg-stone-100 hover:bg-stone-200/80 border border-stone-300/80 px-6 py-3.5 rounded-full transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
              >
                <span className="text-xs font-bold tracking-wider uppercase text-stone-900">
                  Discover Our Story
                </span>
                <div className="w-8 h-8 rounded-full bg-gold-accent text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </button>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

