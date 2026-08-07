import { useState, useRef } from "react";
import Image from "./Image.jsx";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from "lucide-react";
import { projects } from "../lib/project-data.js";

export default function CreativeProjects() {
  const scrollRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const scrollToCenterIndex = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards && cards[index]) {
      const card = cards[index];
      const containerWidth = container.offsetWidth;
      const cardOffsetLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const targetScroll = cardOffsetLeft - (containerWidth / 2) + (cardWidth / 2);
      container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handleScroll = (direction) => {
    const nextIndex = direction === "left"
      ? Math.max(0, activeIndex - 1)
      : Math.min(projects.length - 1, activeIndex + 1);
    
    scrollToCenterIndex(nextIndex);
  };

  const onScrollUpdate = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    const cards = Array.from(container.children);
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(x - startX) > 6) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section id="portfolio" className="bg-[#faf9f6] py-16 sm:py-24 lg:py-32 relative overflow-hidden select-none">
      
      {/* 3D Wireframe Architectural Blueprint Background Sketch on Right */}
      <div className="absolute right-0 top-0 w-2/3 h-full pointer-events-none opacity-[0.08] z-0 overflow-hidden hidden lg:block">
        <svg viewBox="0 0 1000 700" className="w-full h-full text-stone-900 stroke-current" fill="none" strokeWidth="1">
          {/* House Wireframe Perspective */}
          <path d="M400 150 L850 150 L950 300 L500 300 Z" />
          <path d="M400 150 L400 550 L850 550 L850 150" />
          <path d="M850 550 L950 400 L950 300" />
          <path d="M500 300 L500 650 L950 650 L950 400" />
          <path d="M400 550 L500 650" />
          {/* Inner Grid Window Lines */}
          <line x1="450" y1="200" x2="800" y2="200" strokeDasharray="4 4" />
          <line x1="450" y1="350" x2="800" y2="350" strokeDasharray="4 4" />
          <line x1="600" y1="150" x2="600" y2="550" />
          <circle cx="700" cy="350" r="120" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="relative z-10 space-y-6 md:space-y-10">
        
        {/* Centered Header Section */}
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3 sm:space-y-4">
          
          {/* Pill Tag */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-2 border border-gold-accent/30 bg-gold-accent/10 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-gold-accent" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-gold-accent">
                OUR PORTFOLIO
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
            Creative <span className="text-gold-accent">Projects That</span><br />
            <span className="text-gold-accent">Define</span> Our Style
          </h2>

          {/* Subtitle */}
          <p className="text-stone-500 font-light text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces to functional and stylish commercial interiors.
          </p>

          {/* Left / Right Scroll Controls centered under header */}
          <div className="flex items-center justify-center space-x-4 pt-2">
            <button
              disabled={activeIndex === 0}
              onClick={() => handleScroll("left")}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shadow-md ${
                activeIndex === 0
                  ? "opacity-35 cursor-not-allowed border-stone-200/80 bg-stone-100/80 text-stone-400"
                  : "bg-white border-stone-300/90 hover:bg-[#c5a880] text-stone-800 hover:text-stone-950 hover:border-[#c5a880] cursor-pointer"
              }`}
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              disabled={activeIndex === projects.length - 1}
              onClick={() => handleScroll("right")}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shadow-md ${
                activeIndex === projects.length - 1
                  ? "opacity-35 cursor-not-allowed border-stone-200/80 bg-stone-100/80 text-stone-400"
                  : "bg-white border-stone-300/90 hover:bg-[#c5a880] text-stone-800 hover:text-stone-950 hover:border-[#c5a880] cursor-pointer"
              }`}
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>

        </div>

        {/* Full-bleed Horizontal Cards Carousel */}
        <div className="w-full relative group/carousel">

          <div
            ref={scrollRef}
            onScroll={onScrollUpdate}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex items-center overflow-x-auto gap-6 sm:gap-8 px-6 sm:px-12 md:px-16 lg:px-24 py-10 scrollbar-none scroll-smooth ${
              isMouseDown ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((proj, idx) => {
              const isFocused = activeIndex === idx;

              return (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => {
                    if (!hasDragged) {
                      scrollToCenterIndex(idx);
                      setLightboxIndex(idx);
                    }
                  }}
                  className={`shrink-0 group cursor-pointer flex flex-col justify-between rounded-[32px] p-4 transition-all duration-700 ease-[0.16,1,0.3,1] ${
                    isFocused
                      ? "w-[300px] sm:w-[340px] md:w-[370px] lg:w-[400px] bg-gradient-to-b from-white via-[#fcfaf7] to-[#f5efe4] border-t-4 border-t-[#c5a880] border-x border-b border-[#c5a880]/80 shadow-[0_30px_70px_rgba(197,168,128,0.32)] scale-[1.03] z-20"
                      : "w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white border border-stone-200 hover:border-[#c5a880]/50 shadow-sm hover:shadow-md scale-100"
                  }`}
                >
                  <div className="space-y-4">
                    
                    {/* Taller & Wider Image Container on Focused Tile */}
                    <div className={`relative w-full overflow-hidden bg-stone-900 rounded-[24px] shadow-xs border border-stone-200/60 transition-all duration-700 ease-[0.16,1,0.3,1] ${
                      isFocused ? "h-[370px] sm:h-[420px]" : "h-[300px] sm:h-[340px]"
                    }`}>
                      
                      {/* Image — dimmed on inactive, full brightness on focused/hover */}
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                          isFocused
                            ? "brightness-[0.98]"
                            : "brightness-[0.80] group-hover:brightness-[0.95]"
                        }`}
                        referrerPolicy="no-referrer"
                      />

                      {/* Centered Arrow Icon Button on Image Focus / Hover */}
                      <div className={`absolute inset-0 bg-stone-950/20 backdrop-blur-[2px] flex items-center justify-center transition-all duration-500 z-10 ${
                        isFocused ? "opacity-100 scale-100" : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                      }`}>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#c5a880] text-stone-950 flex items-center justify-center shadow-2xl font-bold border-2 border-white/60">
                          <ArrowUpRight size={24} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Below Image Text Info */}
                    <div className="text-left space-y-1.5 px-1 pt-0.5">
                      <div className="min-h-[2.6rem] sm:min-h-[3.2rem] flex items-center">
                        <h3 className={`font-serif tracking-tight leading-snug transition-all duration-500 line-clamp-2 ${
                          isFocused 
                            ? "text-stone-950 text-lg sm:text-2xl md:text-3xl font-bold" 
                            : "text-stone-500 text-base sm:text-xl font-medium group-hover:text-[#c5a880]"
                        }`}>
                          {proj.title}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-stone-500 font-light leading-snug pt-0.5">
                        <div>
                          <p className={`text-xs sm:text-sm font-medium ${
                            isFocused ? "text-stone-600" : "text-stone-400 group-hover:text-stone-600"
                          }`}>{proj.location}</p>
                          <p className="pt-0.5 text-xs text-stone-300 group-hover:text-stone-400 font-normal transition-colors">{proj.year}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL PORTAL */}
      <AnimatePresence>
        {lightboxIndex !== null && projects[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-6">
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxIndex(null)} />
            
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 text-stone-400 hover:text-white transition-colors duration-300 z-20 bg-white/10 rounded-full cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>

            <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center z-10 select-none">
              
              <button
                onClick={() => setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                className="absolute left-2 sm:left-4 p-3 text-white hover:text-gold-accent transition-colors duration-300 bg-black/60 hover:bg-black/80 rounded-full cursor-pointer z-20 border border-white/20"
                aria-label="Previous Image"
              >
                <ChevronLeft size={22} />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col items-center"
              >
                <img
                  src={projects[lightboxIndex].image}
                  alt={projects[lightboxIndex].title}
                  className="max-w-full max-h-[65vh] object-contain shadow-2xl rounded-2xl border border-white/10"
                />

                <div className="mt-4 text-center text-white space-y-1.5 max-w-xl">
                  <span className="inline-block bg-gold-accent text-stone-950 font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-mono">
                    {projects[lightboxIndex].badge} • {projects[lightboxIndex].year}
                  </span>
                  <h4 className="text-2xl font-extrabold text-white tracking-tight">{projects[lightboxIndex].title}</h4>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] font-light leading-relaxed">{projects[lightboxIndex].description}</p>
                </div>
              </motion.div>

              <button
                onClick={() => setLightboxIndex((prev) => (prev + 1) % projects.length)}
                className="absolute right-2 sm:right-4 p-3 text-white hover:text-gold-accent transition-colors duration-300 bg-black/60 hover:bg-black/80 rounded-full cursor-pointer z-20 border border-white/20"
                aria-label="Next Image"
              >
                <ChevronRight size={22} />
              </button>

            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
