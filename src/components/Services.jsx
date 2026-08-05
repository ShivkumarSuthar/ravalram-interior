import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Eye,
  X,
  Paintbrush,
  Hammer,
  Ruler,
  Compass,
  ArrowUpRight
} from "lucide-react";
import { SERVICES_DATA, SITE_IMAGES } from "../lib/data.js";
import Image from "./Image.jsx";

const iconMap = {
  Paintbrush,
  Hammer,
  Sparkles,
  Ruler,
  Compass
};

export default function Services({ setView }) {
  const servicesList = Array.isArray(SERVICES_DATA) ? SERVICES_DATA : [];
  
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [specModalService, setSpecModalService] = useState(null);
  const timerRef = useRef(null);

  // Auto-cycle focus every 6 seconds unless user is hovering or interacting
  useEffect(() => {
    if (!isPaused && servicesList.length > 0) {
      timerRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % servicesList.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, servicesList.length]);

  const current = servicesList[activeTab] || servicesList[0] || {};
  const currentNum = `0${activeTab + 1}`;

  const handleSelectTab = (idx) => {
    setActiveTab(idx);
  };

  const handleOpenConsultation = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-consultation"));
  }, []);

  return (
    <section
      id="services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full text-stone-900 overflow-hidden flex flex-col justify-between select-none py-6 sm:py-10"
    >
      {/* SECTION MASTHEAD HEADER */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full pb-4 sm:pb-6 text-left">
        <div className="inline-flex items-center space-x-2 border border-[#488b82]/40 bg-[#488b82]/10 px-3.5 py-1.5 rounded-full shadow-2xs mb-2">
          <Sparkles size={13} className="text-[#2f635c] shrink-0" />
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold text-[#2f635c] font-mono">
            OUR EXPERTISE &bull; 5 ARCHITECTURAL DISCIPLINES
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-950 leading-[1.15] font-serif">
          Master Architectural &amp; <span className="text-[#c5a880]">Interior Services</span>
        </h2>
      </div>

      {/* 1. HERO BACKGROUND STAGE (Text sits directly inside/over high-res background photo) */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl border border-stone-300/80">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id || activeTab}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative"
            >
              {/* High-res background image */}
              <Image
                src={current.image || SITE_IMAGES.projectCoastal}
                alt={current.title || "Service Showcase"}
                fill
                className="object-cover filter brightness-[0.92] contrast-[1.04]"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Vignette Overlay for maximum text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-stone-950/20 pointer-events-none" />

              {/* Content overlay inside background image */}
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between text-left z-10">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className="bg-stone-950/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[#c5a880] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                    DISCIPLINE {currentNum} / 0{servicesList.length} &bull; {current.category}
                  </div>
                </div>

                {/* Bottom Title, Description & KNOW MORE Button inside Image */}
                <div className="space-y-3 max-w-2xl">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif tracking-tight leading-snug drop-shadow-md">
                    {current.title}
                  </h3>

                  <p className="text-stone-200 font-medium text-xs sm:text-base leading-relaxed line-clamp-2 drop-shadow-sm max-w-xl">
                    {current.detailedDescription || current.shortDescription}
                  </p>

                  <div className="pt-2 flex items-center space-x-3">
                    <button
                      onClick={() => setSpecModalService(current)}
                      className="inline-flex items-center space-x-2 bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-lg transition-all cursor-pointer border border-[#c5a880] hover:scale-105"
                    >
                      <span>KNOW MORE</span>
                      <ArrowUpRight size={15} />
                    </button>

                    <button
                      onClick={() => setSpecModalService(current)}
                      className="inline-flex items-center space-x-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 px-4 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <Eye size={14} className="text-[#c5a880]" />
                      <span>View Specifications</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. EXACT 2-COLUMN GRID PATTERN (Aligned pixel-perfectly with top hero stage) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 w-full pt-4 sm:pt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch gap-2.5 sm:gap-3">
          
          {servicesList.map((service, idx) => {
            const isActive = idx === activeTab;
            const itemNum = `0${idx + 1}`;
            const isLastOdd = idx === 4; // Make item 5 span 2 columns on mobile 2-col grid

            return (
              <button
                key={service.id || idx}
                onClick={() => handleSelectTab(idx)}
                className={`relative p-4 sm:p-5 text-left transition-all duration-500 cursor-pointer flex flex-col justify-between space-y-3 group overflow-hidden rounded-2xl border ${
                  isLastOdd ? "col-span-2 md:col-span-1" : "col-span-1"
                } ${
                  isActive
                    ? "bg-white text-stone-950 shadow-xl border-[#c5a880] ring-2 ring-[#c5a880] scale-[1.02] z-20"
                    : "bg-white/80 text-stone-800 hover:text-stone-950 hover:bg-white border-stone-200/90 shadow-2xs"
                }`}
              >
                {/* Background image overlay with strong active focus zoom & crystal clear visibility */}
                <Image
                  src={service.image || SITE_IMAGES.projectCoastal}
                  alt={service.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    isActive
                      ? "opacity-55 scale-108 filter brightness-[1.02] contrast-[1.05]"
                      : "opacity-12 scale-100 filter brightness-[0.75] group-hover:opacity-25"
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Single Clean Active Progress Bar Animation in Gold */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#c5a880]/30 z-30">
                    {!isPaused && (
                      <motion.div
                        key={activeTab}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6, ease: "linear" }}
                        className="h-full bg-[#c5a880] shadow-[0_0_8px_rgba(197,168,128,0.8)]"
                      />
                    )}
                    {isPaused && <div className="h-full w-full bg-[#c5a880]" />}
                  </div>
                )}

                {/* Top Row: Index Number, Category Badge & Active Dot */}
                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${
                        isActive ? "text-[#b0936b] scale-105" : "text-stone-500 group-hover:text-stone-900"
                      }`}
                    >
                      {itemNum}
                    </span>

                    <div className="flex items-center space-x-1.5">
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md uppercase transition-colors ${
                          isActive
                            ? "bg-[#c5a880] text-stone-950 shadow-xs font-bold"
                            : "bg-[#f8f2ec] text-stone-700 border border-stone-300"
                        }`}
                      >
                        {service.category}
                      </span>
                      {isActive && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880] shadow-[0_0_10px_rgba(197,168,128,1)] animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3
                    className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase leading-snug transition-colors ${
                      isActive ? "text-[#1c3e38] font-serif text-sm sm:text-base" : "text-stone-900 group-hover:text-[#488b82]"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Bottom Row: Detail Snippet + Single Circular Arrow Button */}
                <div className="relative z-10 pt-2 border-t border-stone-300/60 flex items-center justify-between">
                  <p className={`text-[10px] font-medium line-clamp-1 pr-2 ${isActive ? "text-stone-900 font-semibold" : "text-stone-600"}`}>
                    {service.shortDescription}
                  </p>

                  {/* Single Clean Circular Arrow Button */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setSpecModalService(service);
                    }}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#488b82] text-white scale-110 shadow-md"
                        : "bg-[#c5a880] text-stone-950 group-hover:scale-110 group-hover:bg-white shadow-xs font-bold"
                    }`}
                  >
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </div>
                </div>
              </button>
            );
          })}

        </div>
      </div>

      {/* FULL SPECIFICATION LIGHTBOX MODAL */}
      <AnimatePresence>
        {specModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/70 backdrop-blur-md">
            
            {/* Backdrop click to dismiss */}
            <div className="absolute inset-0 z-0" onClick={() => setSpecModalService(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-[#fcfaf7] to-[#f4eee4] border-2 border-[#c5a880] text-stone-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative z-10 text-left space-y-8"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSpecModalService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-200/80 hover:bg-stone-300 border border-stone-300 text-stone-700 hover:text-stone-950 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="space-y-2 border-b border-stone-200/80 pb-6 pr-12">
                <div className="inline-flex items-center space-x-2 text-[#2f635c] text-xs font-mono font-bold tracking-widest uppercase">
                  <span>DISCIPLINE SPECIFICATION</span>
                  <span>&bull;</span>
                  <span>{specModalService.category}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-serif">
                  {specModalService.title}
                </h3>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Image */}
                <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80">
                  <Image
                    src={specModalService.image || SITE_IMAGES.projectCoastal}
                    alt={specModalService.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#c5a880] font-bold uppercase tracking-widest">
                    FIG 01.0 // {specModalService.id}
                  </div>
                </div>

                {/* Specs Details */}
                <div className="md:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold font-mono text-[#2f635c] uppercase tracking-widest">
                      ARCHITECTURAL SCOPE &amp; FIDELITY
                    </h4>
                    <p className="text-sm font-light text-stone-700 leading-relaxed">
                      {specModalService.detailedDescription || specModalService.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold font-mono text-[#2f635c] uppercase tracking-widest">
                      DELIVERABLES &amp; STANDARDS
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {(specModalService.features || []).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs font-semibold text-stone-900 bg-white p-2.5 rounded-xl border border-stone-200/80 shadow-2xs">
                          <CheckCircle2 size={14} className="text-[#488b82] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSpecModalService(null);
                      if (typeof setView === "function") {
                        setView("contact");
                      } else {
                        handleOpenConsultation();
                      }
                    }}
                    className="w-full inline-flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 py-3.5 rounded-2xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Request Consultation For This Service</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
