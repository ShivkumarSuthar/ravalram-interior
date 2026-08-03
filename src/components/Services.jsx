import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Compass,
  Eye,
  X,
  Paintbrush,
  Hammer,
  Ruler,
  ChevronDown
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
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [specModalService, setSpecModalService] = useState(null);
  const timerRef = useRef(null);

  // Reset text expansion when activeTab changes
  useEffect(() => {
    setIsTextExpanded(false);
  }, [activeTab]);

  // Auto-cycle through service disciplines every 7 seconds unless paused
  useEffect(() => {
    if (!isPaused && servicesList.length > 0) {
      timerRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % servicesList.length);
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, servicesList.length]);

  const current = servicesList[activeTab] || servicesList[0] || {};
  const currentNum = `0${activeTab + 1}`;

  const handleSelectTab = (idx) => {
    setActiveTab(idx);
    setIsPaused(true); // Pause auto-rotation when user manually interacts
  };

  const handleOpenConsultation = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-consultation"));
  }, []);

  return (
    <section
      id="services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full min-h-[480px] sm:min-h-[560px] bg-[#0c0a09] text-white overflow-hidden flex flex-col justify-between select-none border-t border-stone-800"
    >
      {/* Background Image Container with Smooth Motion Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id || activeTab}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <Image
              src={current.image || SITE_IMAGES.projectCoastal}
              alt={current.title || "Service Showcase"}
              fill
              className="object-cover filter brightness-[0.68] contrast-[1.08]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layered dark vignetting gradients for pristine contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/60 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/85 via-[#0c0a09]/40 to-transparent pointer-events-none" />
      </div>

      {/* Top Header Masthead Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-6 md:pt-8 w-full flex flex-wrap items-center justify-between border-b border-white/10 pb-3.5 text-left gap-3">
        <div className="inline-flex items-center space-x-2.5">
          <Sparkles size={15} className="text-gold-accent shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[var(--color-text-muted)]">
            OUR EXPERTISE &bull; ARCHITECTURAL DISCIPLINE {currentNum} / 0{servicesList.length}
          </span>
        </div>
      </div>

      {/* Main Content Overlay Stage Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-10 w-full my-auto text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id || activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-3.5"
          >
            {/* Category / Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-gold-accent/20 border border-gold-accent/40 text-gold-accent text-[11px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              <span>{current.category || "DISCIPLINE"}</span>
              <span>&bull;</span>
              <span>SUTHAR SPECIFICATION</span>
            </div>

            {/* Giant Display Title */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-md">
              {current.title}
            </h2>

            {/* Description Paragraph with See More/See Less toggle */}
            <div className="space-y-2 max-w-xl">
              <p className={`text-[var(--color-text-muted)] font-light text-sm sm:text-base md:text-lg leading-relaxed pt-1 drop-shadow-sm transition-all duration-300 ${!isTextExpanded ? "line-clamp-3" : ""}`}>
                {current.detailedDescription ? `${current.shortDescription} ${current.detailedDescription}` : current.shortDescription}
              </p>
              <button
                type="button"
                onClick={() => setIsTextExpanded(!isTextExpanded)}
                className="inline-flex items-center space-x-1 text-xs font-mono font-bold uppercase tracking-wider text-gold-accent hover:text-white transition-colors cursor-pointer pt-0.5"
              >
                <span>{isTextExpanded ? "Show Less" : "See More..."}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isTextExpanded ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Deliverable Bullet Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {(current?.features || []).map((feat, i) => (
                <span key={i} className="inline-flex items-center space-x-2 text-xs font-medium bg-stone-900/90 border border-stone-700/80 text-stone-200 px-3.5 py-2 rounded-xl shadow-md">
                  <CheckCircle2 size={14} className="text-gold-accent" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (typeof setView === "function") {
                    setView("services");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    handleOpenConsultation();
                  }
                }}
                className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-gold-accent hover:bg-[var(--color-primary-hover)] text-stone-950 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 group cursor-pointer shadow-xl hover:scale-[1.02]"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setSpecModalService(current)}
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 px-5 py-4 rounded-full transition-all duration-300 cursor-pointer"
              >
                <Eye size={14} className="text-gold-accent" />
                <span>View Full Spec Sheet</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Horizontal Interactive Tab Navigation Bar */}
      <div className="relative z-20 w-full bg-[#080707]/95 backdrop-blur-md border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-stretch relative">
          
          {servicesList.map((service, idx) => {
            const isActive = idx === activeTab;
            const itemNum = `0${idx + 1}`;

            return (
              <button
                key={service.id || idx}
                onClick={() => handleSelectTab(idx)}
                className={`relative px-3.5 sm:px-5 py-3.5 sm:py-6 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-2.5 sm:space-y-3 group border-r border-stone-800/80 last:border-r-0 ${
                  isActive
                    ? "bg-[#1c1a18] text-white border-t-2 border-t-gold-accent"
                    : "bg-transparent text-stone-400 hover:text-stone-200 hover:bg-white/5 border-t-2 border-t-transparent"
                }`}
              >
                {/* Active Progress Bar Animation */}
                {isActive && !isPaused && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    className="absolute top-0 left-0 h-[2px] bg-gold-accent z-30"
                  />
                )}

                {/* Index Number & Category */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-mono font-bold tracking-widest ${
                      isActive ? "text-gold-accent" : "text-stone-500 group-hover:text-[var(--color-text-muted)]"
                    }`}
                  >
                    {itemNum}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-gold-accent shadow-[0_0_8px_var(--color-gold-accent)]" />}
                </div>

                {/* Service Title */}
                <span
                  className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase leading-snug line-clamp-2 ${
                    isActive ? "text-white" : "text-stone-400 group-hover:text-white"
                  }`}
                >
                  {service.title}
                </span>
              </button>
            );
          })}

        </div>
      </div>

      {/* FULL SPECIFICATION LIGHTBOX MODAL */}
      <AnimatePresence>
        {specModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[var(--color-surface-dark)]/85 backdrop-blur-xl">
            
            {/* Backdrop click to dismiss */}
            <div className="absolute inset-0 z-0" onClick={() => setSpecModalService(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[var(--color-surface-dark)] border border-stone-800 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative z-10 text-left space-y-8"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSpecModalService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-900 border border-stone-700 hover:border-gold-accent text-[var(--color-text-muted)] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="space-y-2 border-b border-stone-800 pb-6 pr-12">
                <div className="inline-flex items-center space-x-2 text-gold-accent text-xs font-mono font-bold tracking-widest uppercase">
                  <span>DISCIPLINE SPECIFICATION</span>
                  <span>&bull;</span>
                  <span>{specModalService.category}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {specModalService.title}
                </h3>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Image */}
                <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 border border-stone-800">
                  <Image
                    src={specModalService.image || SITE_IMAGES.projectCoastal}
                    alt={specModalService.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-gold-accent font-bold uppercase tracking-widest">
                    FIG 01.0 // {specModalService.id}
                  </div>
                </div>

                {/* Specs Details */}
                <div className="md:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold font-mono text-stone-400 uppercase tracking-widest">
                      ARCHITECTURAL SCOPE &amp; FIDELITY
                    </h4>
                    <p className="text-sm font-light text-[var(--color-text-muted)] leading-relaxed">
                      {specModalService.detailedDescription || specModalService.shortDescription}
                    </p>
                  </div>

                  <div className="bg-stone-900 border border-stone-800 p-5 rounded-2xl space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gold-accent flex items-center space-x-2 font-mono">
                      <Sparkles size={14} />
                      <span>DELIVERABLE CAPABILITIES</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {(specModalService.features || []).map((feat, i) => (
                        <div key={i} className="flex items-center space-x-2.5 text-xs text-stone-200">
                          <CheckCircle2 size={14} className="text-gold-accent shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => {
                        setSpecModalService(null);
                        handleOpenConsultation();
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gold-accent hover:bg-[var(--color-primary-hover)] text-stone-950 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-xl"
                    >
                      <span>Request Service Estimate</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      onClick={() => setSpecModalService(null)}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-stone-700 text-[var(--color-text-muted)] hover:text-white rounded-full text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
