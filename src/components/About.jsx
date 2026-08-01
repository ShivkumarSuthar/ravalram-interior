import { useState } from "react";
import Image from "./Image.jsx";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Compass,
  Workflow,
  Hammer,
  Sparkles,
  ArrowRight,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Award,
  Layers,
  ChevronRight
} from "lucide-react";
import { ABOUT_DATA, COMPANY_INFO, SITE_IMAGES } from "../lib/data.js";

const aboutImg = SITE_IMAGES.aboutSide;
const transitionImg = SITE_IMAGES.transitionLuxury;
const cadImg = SITE_IMAGES.isometricFloorPlan;

// Interactive Pillars for Homepage Studio Section
const studioPillars = [
  {
    id: "pillar-01",
    num: "01",
    title: "GENERATIONAL JOINERY GUILD",
    heading: "Craftsmanship Rooted in 1989 Heritage",
    desc: "Built on Ravalram H. Suthar's master timber joinery traditions. We select seasoned teak, hardwood, and IS 710 marine BWR ply with zero structural compromises.",
    highlights: ["Seasoned Teak & Hardwoods", "IS 710 Marine BWR Ply", "10-Year Structural Guarantee"],
    image: aboutImg
  },
  {
    id: "pillar-02",
    num: "02",
    title: "ARCHITECT ON-SITE AUDITS",
    heading: "100% CAD-to-Site Execution Fidelity",
    desc: "Led by Lead Architect Padam P. Sutar, every layout is modeled in 3D CAD and supervised on-site by qualified architects to ensure exact architectural fidelity.",
    highlights: ["Photorealistic 3D CGI", "On-Site Architect Audits", "Zero Tolerances"],
    image: cadImg
  },
  {
    id: "pillar-03",
    num: "03",
    title: "TURNKEY BLUEPRINT",
    heading: "End-to-End Design-Build Accountability",
    desc: "From initial civil demolition to final white-glove furniture assembly and styling, we deliver with transparent itemized BOQs and strict timelines.",
    highlights: ["Transparent BOQ Pricing", "Single Point Accountability", "White-Glove Key Handover"],
    image: transitionImg
  }
];

export default function About({ setView }) {
  const [activePillar, setActivePillar] = useState(0);

  const currentPillar = studioPillars[activePillar];

  return (
    <section id="about" className="bg-[#faf9f6] py-8 sm:py-12 md:py-16 overflow-hidden relative border-b border-stone-200/60">
      
      {/* Subtle architectural wireframe watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-[0.04] z-0 overflow-hidden hidden md:block">
        <svg viewBox="0 0 800 800" className="w-full h-full text-stone-900 stroke-current" fill="none" strokeWidth="1">
          <path d="M100 700 L400 500 L700 700 Z M400 500 L400 200 L100 400 L100 700 M400 200 L700 400 L700 700 M100 400 L400 200 L700 400 M100 400 L400 500 L700 400" />
          <path d="M150 650 L380 490 M420 490 L650 650 M150 430 L380 270 M420 270 L650 430" strokeDasharray="4 4" />
          <circle cx="400" cy="500" r="6" fill="currentColor" />
          <circle cx="400" cy="200" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6 md:space-y-10">
        
        {/* Section Masthead Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between text-left gap-4 md:gap-6 border-b border-stone-200/80 pb-5 md:pb-8">
          <div className="space-y-2 sm:space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gold-accent" />
              <span className="text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold text-stone-700">
                OUR STUDIO MONOGRAPH &bull; EST. 1989
              </span>
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
              A Legacy of <span className="text-gold-accent">Craftsmanship</span> &amp; Architectural Precision
            </h2>
          </div>

          <button
            onClick={() => {
              if (typeof setView === "function") {
                setView("about-us");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center space-x-2.5 sm:space-x-3 bg-stone-950 hover:bg-stone-800 text-white px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full transition-all duration-300 group cursor-pointer shadow-md shrink-0 self-start lg:self-auto"
          >
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase">Explore Full Studio Page</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold-accent text-stone-950 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <ArrowUpRight size={14} className="sm:w-4 sm:h-4" strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* MOBILE OPTIMIZED COMPOSITION (< lg screens) */}
        <div className="lg:hidden space-y-3.5 text-left">
          {/* Segmented Pill Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-stone-200/70 rounded-xl">
            {studioPillars.map((pillar, pIdx) => {
              const isActive = pIdx === activePillar;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pIdx)}
                  className={`py-2 px-1 text-center font-mono font-bold text-[10px] sm:text-xs uppercase rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? "bg-stone-950 text-gold-accent shadow-sm"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  0{pIdx + 1}. {pillar.title.split(" ")[0]}
                </button>
              );
            })}
          </div>

          {/* Compact Active Pillar Card with Integrated Image & Badges */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-md space-y-3"
            >
              {/* Integrated Image Frame */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-950 shadow-xs border border-stone-200/80">
                <Image
                  src={currentPillar.image}
                  alt={currentPillar.heading}
                  fill
                  className="object-cover filter brightness-[0.95]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-2.5 left-2.5 bg-gold-accent text-stone-950 px-2.5 py-1 rounded-lg font-serif font-extrabold text-[11px] shadow-sm border border-white/20">
                  35+ Yrs Legacy
                </div>

                <div className="absolute top-2.5 right-2.5 bg-stone-950/85 text-gold-accent px-2 py-1 rounded-lg font-mono font-bold text-[9px] uppercase border border-white/10 flex items-center space-x-1">
                  <ShieldCheck size={11} />
                  <span>100% Site Audit</span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-white text-left">
                  <span className="text-[9px] font-mono text-gold-accent uppercase tracking-widest block font-bold">
                    FIG 01.{activePillar + 1} &bull; {currentPillar.title}
                  </span>
                </div>
              </div>

              {/* Text Details */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-gold-accent block">
                  PILLAR {currentPillar.num}
                </span>

                <h3 className="text-base font-bold text-stone-950 leading-snug">
                  {currentPillar.heading}
                </h3>

                <p className="text-xs font-light text-stone-600 leading-relaxed">
                  {currentPillar.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentPillar.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="inline-flex items-center space-x-1 text-[9px] font-mono bg-stone-100 border border-stone-200 text-stone-800 px-2 py-0.5 rounded-md">
                      <CheckCircle2 size={10} className="text-gold-accent shrink-0" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Compact Founder Quote Badge */}
          <div className="border-l-2 border-gold-accent pl-3 py-2 bg-stone-100/90 border border-stone-200/60 rounded-r-xl text-stone-800 text-xs font-serif italic">
            &ldquo;True craftsmanship does not compete for attention. It resides in the silent, flawless alignment of grain, stone, and structure.&rdquo;
            <span className="block text-[9px] font-mono uppercase tracking-widest text-gold-accent font-bold mt-0.5">
              — Ravalram H. Suthar, Founder (Est. 1989)
            </span>
          </div>
        </div>

        {/* DESKTOP MAGAZINE COMPOSITION (>= lg screens) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Interactive Pillar Selector Cards */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-xs font-mono font-bold text-gold-accent uppercase tracking-widest block">
              SELECT A STUDIO PILLAR TO EXPLORE:
            </span>

            <div className="space-y-3">
              {studioPillars.map((pillar, pIdx) => {
                const isActive = pIdx === activePillar;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pIdx)}
                    className={`w-full p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer space-y-2 group ${
                      isActive
                        ? "bg-stone-950 text-white border-gold-accent shadow-xl scale-[1.01]"
                        : "bg-white text-stone-900 border-stone-200/80 hover:border-gold-accent/50 hover:bg-[#faf9f6]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${isActive ? "text-gold-accent" : "text-stone-400"}`}>
                        PILLAR {pillar.num} &bull; {pillar.title}
                      </span>
                      <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? "text-gold-accent translate-x-1" : "text-stone-300 group-hover:text-stone-600"}`} />
                    </div>

                    <h3 className={`text-lg sm:text-xl font-bold ${isActive ? "text-white" : "text-stone-950"}`}>
                      {pillar.heading}
                    </h3>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-2 space-y-3 border-t border-stone-800"
                      >
                        <p className="text-xs sm:text-sm font-light text-stone-300 leading-relaxed">
                          {pillar.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pillar.highlights.map((h, hIdx) => (
                            <span key={hIdx} className="inline-flex items-center space-x-1.5 text-[10px] font-mono bg-stone-900 border border-stone-800 text-stone-200 px-2.5 py-1 rounded-md">
                              <CheckCircle2 size={12} className="text-gold-accent" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Founder Signature Quote Badge */}
            <div className="border-l-2 border-gold-accent pl-4 py-2 bg-stone-100 border border-stone-200/60 rounded-r-xl text-stone-800 text-xs sm:text-sm font-serif italic">
              &ldquo;True craftsmanship does not compete for attention. It resides in the silent, flawless alignment of grain, stone, and structure.&rdquo;
              <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-accent font-bold mt-1">
                — Ravalram H. Suthar, Founder (Est. 1989)
              </span>
            </div>
          </div>

          {/* Right Side: Dynamic Overlapping Image Montage */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              
              {/* Primary Image Frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPillar.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 relative z-10"
                >
                  <Image
                    src={currentPillar.image}
                    alt={currentPillar.heading}
                    fill
                    className="object-cover filter brightness-[0.95]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                    <span className="text-[9px] font-mono text-gold-accent uppercase tracking-widest block font-bold">
                      SUTHAR STUDIO MONOGRAPH &bull; FIG 01.0
                    </span>
                    <span className="text-xs font-semibold text-stone-200">
                      {currentPillar.heading}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Gold Experience Badge */}
              <div className="absolute -left-4 -bottom-6 bg-gold-accent text-stone-950 px-6 py-4 rounded-2xl shadow-2xl z-30 flex items-center space-x-3 border-2 border-white">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none font-serif">
                  35+
                </span>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-950">
                    Years
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-950">
                    Legacy
                  </span>
                </div>
              </div>

              {/* Secondary Floating Spec Badge */}
              <div className="absolute -right-2 -top-4 bg-stone-950 text-white px-5 py-3 rounded-2xl shadow-xl z-30 hidden sm:flex items-center space-x-2.5 border border-stone-800">
                <ShieldCheck size={18} className="text-gold-accent shrink-0" />
                <div className="text-left leading-tight">
                  <span className="text-[9px] font-mono font-bold text-gold-accent uppercase block">
                    ARCHITECT SUPERVISED
                  </span>
                  <span className="text-xs font-medium text-stone-200">
                    100% Site Audit
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
