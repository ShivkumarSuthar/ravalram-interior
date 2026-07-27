import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Building2,
  Home,
  Layout,
  Compass,
  Ruler,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

import { TESTIMONIALS_PAGE_DATA } from "../lib/data.js";
import ExperienceShowcase from "./ExperienceShowcase.jsx";

const ICON_MAP = {
  Layout,
  Home,
  Building2,
  Compass,
  Ruler
};

const testimonials = TESTIMONIALS_PAGE_DATA?.testimonials || [];

const partners = (TESTIMONIALS_PAGE_DATA?.partners || []).map(p => ({
  ...p,
  icon: ICON_MAP[p.iconName] || Home
}));

export default function Testimonial({ setView }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section id="testimonials" className="bg-[#faf9f6] py-20 md:py-32 relative overflow-hidden select-none border-t border-stone-200/60">
        
        {/* Container Wrapper */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-20 md:space-y-28">
          
          {/* PART 1: TESTIMONIAL HEADER & MAIN CARD BLOCK */}
          <div className="space-y-10">
          
          {/* Header Bar matching image */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 border border-gold-accent/30 bg-gold-accent/10 px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold-accent" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold-accent">
                  OUR CLIENTS SAY
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                Here's What <span className="text-gold-accent">Warm Words</span> <br />
                Our Clients <span className="text-gold-accent">Say</span>
              </h2>
            </div>

            <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed max-w-md">
              Every spatial transformation is a partnership built on honest guidance, master craftsmanship, and architect supervision.
            </p>
          </div>

          {/* MAIN TESTIMONIAL TWO-COLUMN CARD */}
          <div className="bg-white border border-stone-200/80 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden text-left">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Architect / Site Inspection Image */}
              <div className="lg:col-span-6 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md border border-stone-200/60 group"
                  >
                    <img
                      src={current.siteImage}
                      alt="Site inspection by Suthar architects"
                      className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient bottom vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="bg-stone-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-bold">
                        ✦ ARCHITECT SUPERVISED SITE
                      </span>
                      <span className="bg-gold-accent text-stone-950 font-bold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider">
                        VERIFIED SITE
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Rating, Snippet, Quote, Author & Carousel Controls */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    {/* Rating Metric Header */}
                    <div className="flex items-center space-x-4 border-b border-stone-100 pb-4">
                      <span className="text-4xl sm:text-5xl font-extrabold text-gold-accent tracking-tight leading-none">
                        {current.score}
                      </span>
                      
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-gold-accent text-gold-accent" />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-wider text-gold-accent block uppercase">
                          {current.reviewsCount}
                        </span>
                      </div>
                    </div>

                    {/* Short Bold Highlight Snippet */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-stone-900 leading-snug">
                      "{current.highlight}"
                    </h3>

                    {/* Full Review Text */}
                    <p className="text-stone-600 font-light text-xs sm:text-sm leading-relaxed">
                      "{current.quote}"
                    </p>

                    {/* Author Profile Footer */}
                    <div className="pt-2 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-accent shadow-sm shrink-0">
                        <img
                          src={current.avatar}
                          alt={current.author}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="text-sm font-extrabold text-stone-900">
                          {current.author}
                        </h4>
                        <p className="text-xs font-mono text-gold-accent font-bold">
                          {current.role} &bull; <span className="text-stone-400">{current.location}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls Bar */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  {/* Indicator Dots */}
                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          currentIndex === idx ? "w-8 bg-gold-accent" : "w-2 bg-stone-200 hover:bg-gold-accent"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrow Buttons */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-stone-200 hover:border-stone-900 bg-stone-50 hover:bg-stone-900 text-stone-800 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-stone-200 hover:border-stone-900 bg-stone-50 hover:bg-stone-900 text-stone-800 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

      {/* PART 3: "CREATE AN EVEN GREATER EXPERIENCE" SHOWCASE BANNER */}
      <ExperienceShowcase setView={setView} />
    </>
  );
}
