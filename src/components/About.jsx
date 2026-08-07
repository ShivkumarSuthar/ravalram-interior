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
    title: "GENERATIONAL WOODWORKING GUILD",
    heading: "Craftsmanship Rooted in 1989 Heritage",
    desc: "Founded by master artisan Ravalram H. Suthar, our 35-year lineage represents India's finest timber craftsmanship. We engineer custom wardrobes, modular kitchens, and bespoke furniture selecting seasoned teakwood and IS 710 marine BWR ply with zero structural compromises.",
    highlights: ["Seasoned Teak & Hardwoods", "IS 710 Marine BWR Ply", "10-Year Structural Guarantee"],
    image: aboutImg,
    quote: "Wood is a living canvas. When seasoned with patience and crafted by hand, it outlasts generations.",
    author: "Ravalram H. Suthar, Founder (Est. 1989)"
  },
  {
    id: "pillar-02",
    num: "02",
    title: "ARCHITECT-LED SITE EXECUTION",
    heading: "100% CAD-to-Site Execution Fidelity",
    desc: "Co-led by Lead Architect Padam P. Sutar & Shivkumar Suthar, every residential and commercial layout undergoes rigorous 3D spatial modeling and daily on-site architect supervision to guarantee zero tolerance handoffs.",
    highlights: ["Photorealistic 3D CAD CGI", "Daily On-Site Architect Audits", "Millimetric Alignment"],
    image: cadImg,
    quote: "Architecture is not just what you model on screen; it is the millimeter precision built on site every single day.",
    author: "Padam P. Sutar, Lead Architect"
  },
  {
    id: "pillar-03",
    num: "03",
    title: "TURNKEY DESIGN-BUILD BLUEPRINT",
    heading: "End-to-End Single-Point Accountability",
    desc: "From structural civil redesign to bespoke furniture manufacturing and white-glove styling, we manage the entire project lifecycle with transparent itemized BOQs, zero price escalations, and fixed delivery schedules.",
    highlights: ["Itemized BOQ Contracts", "Single Point Accountability", "White-Glove Key Handover"],
    image: transitionImg,
    quote: "Turnkey execution means zero price surprises for the client—only pure spatial transformation on schedule.",
    author: "Shivkumar Suthar, Co-Founder"
  }
];

export default function About({ setView }) {
  const [activePillar, setActivePillar] = useState(0);
  const [viewMode, setViewMode] = useState("photo"); // "photo" | "blueprint"

  const currentPillar = studioPillars[activePillar];

  return (
    <section id="about" className="bg-[#f8f2ec] text-stone-900 py-16 sm:py-24 lg:py-32 overflow-hidden relative border-b border-[#e5dcd3] select-none">
      
      {/* Subtle architectural wireframe watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-[0.04] z-0 overflow-hidden hidden md:block">
        <svg viewBox="0 0 800 800" className="w-full h-full text-stone-900 stroke-current" fill="none" strokeWidth="1">
          <path d="M100 700 L400 500 L700 700 Z M400 500 L400 200 L100 400 L100 700 M400 200 L700 400 L700 700 M100 400 L400 200 L700 400 M100 400 L400 500 L700 400" />
          <path d="M150 650 L380 490 M420 490 L650 650 M150 430 L380 270 M420 270 L650 430" strokeDasharray="4 4" />
          <circle cx="400" cy="500" r="6" fill="currentColor" />
          <circle cx="400" cy="200" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 space-y-6 md:space-y-10">
        
        {/* Section Masthead Header with Clear "Who We Are" Narrative */}
        <div className="space-y-5 border-b border-[#e5dcd3] pb-6 md:pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between text-left gap-4 md:gap-6">
            <div className="space-y-2 sm:space-y-3 max-w-3xl">
              <div className="inline-flex items-center space-x-2 border border-[#c88b80]/40 bg-[#c88b80]/15 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#c88b80] animate-pulse" />
                <span className="text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold text-[#9e5d53] font-mono">
                  WHO WE ARE &bull; SUTHAR STUDIO EST. 1989
                </span>
              </div>
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
                Master Artisans &amp; Senior Architects <span className="text-[#c5a880]">Building Timeless</span> Spaces
              </h2>
            </div>

            <button
              onClick={() => {
                if (typeof setView === "function") {
                  setView("about-us");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center space-x-2.5 sm:space-x-3 bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full transition-all duration-300 group cursor-pointer shadow-lg shrink-0 self-start lg:self-auto border border-[#c5a880]"
            >
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase font-mono">Explore Full Studio Page</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-stone-950 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 font-bold">
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4" strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Editorial Studio Bio Overview Paragraph */}
          <p className="text-stone-700 font-light text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl text-left pt-1">
            Suthar Interior Studio is a multi-generational architecture and interior design firm combining over <strong className="font-semibold text-stone-950">35 years of timber joinery lineage</strong> with modern CAD architectural supervision. Guided by founder <strong className="font-semibold text-stone-950">Ravalram H. Suthar</strong> alongside Lead Architect <strong className="font-semibold text-stone-950">Padam P. Sutar</strong> &amp; <strong className="font-semibold text-stone-950">Shivkumar Suthar</strong>, we deliver luxury residential penthouses, sea-facing villas, commercial flagships, and turnkey design-build solutions across Mumbai, Goa, and Pune.
          </p>

          {/* Sleek 4-Column Studio Metric Cards Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3">
            <div className="p-4 rounded-2xl bg-white/90 border border-[#e5dcd3] shadow-xs text-left space-y-0.5 hover:border-[#c5a880]/60 transition-colors">
              <span className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900 block">35+</span>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#b0936b] uppercase tracking-wider block">Years Lineage</span>
              <span className="text-[10px] text-stone-500 block font-light">Est. 1989 Master Guild</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-[#e5dcd3] shadow-xs text-left space-y-0.5 hover:border-[#c5a880]/60 transition-colors">
              <span className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900 block">500+</span>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#b0936b] uppercase tracking-wider block">Turnkey Projects</span>
              <span className="text-[10px] text-stone-500 block font-light">Villas &amp; Penthouses</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-[#e5dcd3] shadow-xs text-left space-y-0.5 hover:border-[#488b82]/60 transition-colors">
              <span className="text-2xl sm:text-3xl font-extrabold font-serif text-[#2f635c] block">100%</span>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#488b82] uppercase tracking-wider block">Architect Audited</span>
              <span className="text-[10px] text-stone-500 block font-light">Zero Tolerance CAD</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-[#e5dcd3] shadow-xs text-left space-y-0.5 hover:border-[#c5a880]/60 transition-colors">
              <span className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900 block">10-Yr</span>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#b0936b] uppercase tracking-wider block">Teak Warranty</span>
              <span className="text-[10px] text-stone-500 block font-light">IS 710 Marine Ply</span>
            </div>
          </div>
        </div>

        {/* MOBILE OPTIMIZED COMPOSITION (< lg screens) */}
        <div className="lg:hidden space-y-4 text-left">
          {/* Segmented Pill Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-[#ebdcd0]/70 rounded-2xl">
            {studioPillars.map((pillar, pIdx) => {
              const isActive = pIdx === activePillar;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pIdx)}
                  className={`py-2.5 px-1 text-center font-mono font-bold text-[10px] sm:text-xs uppercase rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#c5a880] text-stone-950 shadow-md"
                      : "text-stone-700 hover:text-stone-950"
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
              className="p-5 rounded-3xl bg-gradient-to-br from-white via-[#fcfaf7] to-[#f4eee4] border-2 border-[#c5a880] shadow-xl space-y-4 text-stone-900"
            >
              {/* Integrated Image Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 shadow-sm border border-stone-200/80">
                <Image
                  src={viewMode === "photo" ? currentPillar.image : cadImg}
                  alt={currentPillar.heading}
                  fill
                  className="object-cover filter brightness-[0.96]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                {/* View Mode Toggle Pill */}
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md p-1 rounded-full border border-white/20 flex space-x-1">
                  <button
                    onClick={() => setViewMode("photo")}
                    className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${viewMode === "photo" ? "bg-[#c5a880] text-stone-950" : "text-stone-300 hover:text-white"}`}
                  >
                    Photo
                  </button>
                  <button
                    onClick={() => setViewMode("blueprint")}
                    className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${viewMode === "blueprint" ? "bg-[#488b82] text-white" : "text-stone-300 hover:text-white"}`}
                  >
                    Blueprint CAD
                  </button>
                </div>

                <div className="absolute top-3 right-3 bg-[#488b82]/90 text-white px-2.5 py-1 rounded-full font-mono font-bold text-[9px] uppercase border border-white/30 flex items-center space-x-1 backdrop-blur-md shadow-xs">
                  <ShieldCheck size={11} className="text-white" />
                  <span>100% Site Audit</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                  <span className="text-[9px] font-mono text-[#c5a880] uppercase tracking-widest block font-bold">
                    FIG 01.{activePillar + 1} &bull; {currentPillar.title}
                  </span>
                </div>
              </div>

              {/* Text Details */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#b0936b] block">
                  PILLAR {currentPillar.num}
                </span>

                <h3 className="text-lg font-extrabold text-stone-950 leading-snug font-serif">
                  {currentPillar.heading}
                </h3>

                <p className="text-xs font-light text-stone-600 leading-relaxed">
                  {currentPillar.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentPillar.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="inline-flex items-center space-x-1 text-[10px] font-mono bg-[#488b82]/10 border border-[#488b82]/30 text-[#2f635c] px-2.5 py-1 rounded-lg font-semibold">
                      <CheckCircle2 size={11} className="text-[#488b82] shrink-0" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dynamic Founder & Architect Quote Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="border-l-4 border-[#c5a880] p-4 bg-[#f2e7dd] border-y border-r border-[#ebdcd0] text-stone-900 rounded-r-2xl shadow-md space-y-1"
            >
              <p className="text-xs font-serif italic text-stone-800 leading-relaxed">
                &ldquo;{currentPillar.quote}&rdquo;
              </p>
              <span className="block text-[9px] font-mono uppercase tracking-widest text-[#b0936b] font-bold">
                — {currentPillar.author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP MAGAZINE COMPOSITION (>= lg screens) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Interactive Pillar Selector Cards */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-xs font-mono font-bold text-[#b0936b] uppercase tracking-widest block">
              SELECT A STUDIO PILLAR TO EXPLORE:
            </span>

            <div className="space-y-3.5">
              {studioPillars.map((pillar, pIdx) => {
                const isActive = pIdx === activePillar;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pIdx)}
                    className={`w-full p-6 rounded-3xl border text-left transition-all duration-500 cursor-pointer space-y-2 group ${
                      isActive
                        ? "bg-gradient-to-br from-white via-[#fcfaf7] to-[#f4eee4] text-stone-950 border-2 border-[#c5a880] shadow-[0_20px_50px_rgba(197,168,128,0.22)] scale-[1.02]"
                        : "bg-white/80 text-stone-900 border-[#e5dcd3] hover:border-[#c5a880]/60 hover:bg-white hover:shadow-lg hover:translate-x-1"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${isActive ? "text-[#b0936b]" : "text-stone-400"}`}>
                        PILLAR {pillar.num} &bull; {pillar.title}
                      </span>
                      <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? "text-[#b0936b] translate-x-1" : "text-stone-400 group-hover:text-stone-800"}`} />
                    </div>

                    <h3 className={`text-xl font-extrabold ${isActive ? "text-stone-950 font-serif" : "text-stone-950"}`}>
                      {pillar.heading}
                    </h3>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-3 space-y-3.5 border-t border-[#c5a880]/30"
                      >
                        <p className="text-xs sm:text-sm font-light text-stone-600 leading-relaxed">
                          {pillar.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pillar.highlights.map((h, hIdx) => (
                            <span key={hIdx} className="inline-flex items-center space-x-1.5 text-[10px] font-mono bg-[#488b82]/10 border border-[#488b82]/30 text-[#2f635c] px-3 py-1 rounded-lg font-semibold">
                              <CheckCircle2 size={12} className="text-[#488b82]" />
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

            {/* Dynamic Pillar Monograph Quote Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-3xl bg-[#f3e9e0] border-l-4 border-l-[#c5a880] border-y border-r border-[#ebdcd0] shadow-md flex items-start space-x-4 text-left"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#c88b80]/20 border border-[#c88b80]/40 flex items-center justify-center text-[#9e5d53] shrink-0 mt-0.5">
                  <Sparkles size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm font-serif italic text-stone-800 leading-relaxed">
                    &ldquo;{currentPillar.quote}&rdquo;
                  </p>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#b0936b] font-bold pt-1">
                    — {currentPillar.author}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Dynamic Overlapping Image Montage & Interactive CAD Toggle */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none space-y-3">
              
              {/* Interactive View Mode Switcher Header */}
              <div className="flex items-center justify-between px-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#b0936b]">
                  INTERACTIVE SPECIFICATION VIEW:
                </span>
                <div className="bg-[#ebdcd0]/70 p-1 rounded-full flex space-x-1 shadow-inner">
                  <button
                    onClick={() => setViewMode("photo")}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                      viewMode === "photo"
                        ? "bg-[#c5a880] text-stone-950 shadow-xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    📷 Photo
                  </button>
                  <button
                    onClick={() => setViewMode("blueprint")}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                      viewMode === "blueprint"
                        ? "bg-[#488b82] text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    📐 Blueprint CAD
                  </button>
                </div>
              </div>

              {/* Primary Image Frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentPillar.id}-${viewMode}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-2 border-[#c5a880]/40 relative z-10 bg-stone-900 group"
                >
                  <Image
                    src={viewMode === "photo" ? currentPillar.image : cadImg}
                    alt={currentPillar.heading}
                    fill
                    className="object-cover filter brightness-[0.98] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                    <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-widest block font-bold">
                      {viewMode === "photo" ? "SUTHAR STUDIO MONOGRAPH" : "ISOMETRIC CAD BLUEPRINT"} &bull; FIG 01.{activePillar + 1}
                    </span>
                    <span className="text-sm font-bold text-stone-100 font-serif">
                      {currentPillar.heading}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Gold Experience Badge */}
              <div className="absolute -left-5 -bottom-6 bg-gradient-to-r from-[#c5a880] to-[#b0936b] text-stone-950 px-6 py-4 rounded-2xl shadow-2xl z-30 flex items-center space-x-3.5 border-2 border-white">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none font-serif">
                  35+
                </span>
                <div className="flex flex-col text-left leading-tight font-mono">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-950">
                    Years
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-950">
                    Legacy
                  </span>
                </div>
              </div>

              {/* Secondary Floating Spec Badge - Muted Sage Teal Accent */}
              <div className="absolute -right-3 top-10 bg-[#488b82] text-white px-5 py-3 rounded-2xl shadow-2xl z-30 hidden sm:flex items-center space-x-3 border border-white/30">
                <ShieldCheck size={20} className="text-white shrink-0" />
                <div className="text-left leading-tight">
                  <span className="text-[9px] font-mono font-bold text-emerald-100 uppercase block tracking-wider">
                    ARCHITECT SUPERVISED
                  </span>
                  <span className="text-xs font-bold text-white">
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
