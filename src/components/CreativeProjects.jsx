import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from "lucide-react";
import { projects } from "../lib/project-data.js";

export default function CreativeProjects() {
  const scrollRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
    <section id="portfolio" className="bg-[#faf9f6] py-16 sm:py-24 md:py-32 relative overflow-hidden select-none">
      
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

      <div className="relative z-10 space-y-10 md:space-y-14">
        
        {/* Centered Header Section matching screenshot exactly */}
        <div className="max-w-4xl mx-auto px-6 text-center space-y-5">
          
          {/* Pill Tag */}
          <div className="flex justify-center">
            <div className="inline-flex items-center space-x-2 border border-gold-accent/30 bg-gold-accent/10 px-4 py-1.5 rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-gold-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gold-accent">
                OUR PORTFOLIO
              </span>
            </div>
          </div>

          {/* Heading with exact colored words */}
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
            Creative <span className="text-gold-accent">Projects That</span><br />
            <span className="text-gold-accent">Define</span> Our Style
          </h2>

          {/* Subtitle */}
          <p className="text-stone-500 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors
          </p>

          {/* Left / Right Scroll Controls centered under header */}
          <div className="flex items-center justify-center space-x-4 pt-2">
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-stone-300/90 bg-white hover:bg-gold-accent text-stone-800 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-stone-300/90 bg-white hover:bg-gold-accent text-stone-800 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>

        </div>

        {/* Full-bleed Horizontal Cards Carousel */}
        <div className="w-full relative group/carousel">
          
          {/* Floating Left Scroll Button on Carousel Edge */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-stone-200/80 bg-white/90 backdrop-blur-md hover:bg-gold-accent text-stone-800 hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer opacity-80 hover:opacity-100 hidden sm:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          {/* Floating Right Scroll Button on Carousel Edge */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-stone-200/80 bg-white/90 backdrop-blur-md hover:bg-gold-accent text-stone-800 hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer opacity-80 hover:opacity-100 hidden sm:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex items-start overflow-x-auto gap-6 sm:gap-8 px-6 sm:px-12 md:px-16 lg:px-24 pb-8 pt-2 scrollbar-none scroll-smooth ${
              isMouseDown ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => {
                  if (!hasDragged) {
                    setLightboxIndex(idx);
                  }
                }}
                className="shrink-0 w-[270px] sm:w-[310px] md:w-[340px] lg:w-[360px] group cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Image Container with rounded-[28px] */}
                  <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-stone-900 shadow-md border border-stone-200/80">
                    
                    {/* Top-Left Category Oval Pill Badge inside image */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-block bg-white/80 backdrop-blur-md border border-white/60 text-stone-900 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-sm font-mono">
                        {proj.badge}
                      </span>
                    </div>

                    {/* Image */}
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover filter brightness-[0.98] group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle Hover Action Overlay */}
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full bg-gold-accent text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight size={20} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Below Image Text Info (Title, Location, Year stacked vertically) */}
                  <div className="text-left space-y-1 pt-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight leading-snug group-hover:text-gold-accent transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <div className="text-xs sm:text-sm text-stone-500 font-light leading-snug">
                      <p>{proj.location}</p>
                      <p className="pt-0.5 text-stone-400 font-normal">{proj.year}</p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
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
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">{projects[lightboxIndex].description}</p>
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
