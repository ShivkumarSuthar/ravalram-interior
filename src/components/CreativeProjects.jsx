import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import coastalImg from "../assets/images/antra_project_coastal_1782744299850.jpg";
import loftImg from "../assets/images/antra_project_loft_1782744318019.jpg";

const projects = [
  {
    id: 1,
    title: "Coastal Harmony Home",
    location: "Malibu, California",
    year: "2025",
    tags: ["RESIDENTIAL", "SINGLE HOME"],
    image: coastalImg,
    description: "Co-created with ocean views in mind. This luxury Malibu home focuses on massive pocket doors, limestone plastering, and organic furniture contours that reflect the Pacific horizon."
  },
  {
    id: 2,
    title: "Modern Minimalist Loft",
    location: "SoHo, New York",
    year: "2024",
    tags: ["RESIDENTIAL", "EXECUTIVE LOFT"],
    image: loftImg,
    description: "A conversion of a historic industrial warehouse into an elegant luxury penthouse. Features high double-height ceilings, automated skylight panels, custom brass fittings, and a fluted-stone kitchen island."
  }
];

export default function CreativeProjects() {
  const [lightboxIndex, setLightboxIndex] = useState(null); // null or index

  return (
    <section id="portfolio" className="bg-[#faf9f6] py-24 md:py-32 relative overflow-hidden border-t border-stone-200/50">
      
      {/* Giant Ghost Text Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <span className="text-[14vw] font-serif font-black text-stone-900/[0.015] uppercase tracking-[0.2em] leading-none whitespace-nowrap">
          interior design
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-gold-500 text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              OUR PORTFOLIO
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
            Creative <span className="font-serif italic text-gold-500 font-normal">Projects That</span> <br />
            <span className="font-serif italic text-gold-500 font-normal">Define</span> Our Style
          </h2>
        </div>

        {/* Project Card Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer space-y-6 text-left"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] bg-stone-900 rounded-3xl overflow-hidden shadow-xl border border-stone-200/30">
                {/* ID Tag top-left */}
                <div className="absolute top-4 left-4 z-20 flex space-x-2">
                  {proj.tags.map((tg) => (
                    <span key={tg} className="px-3 py-1 bg-white/90 backdrop-blur-md text-[9px] font-bold text-stone-900 tracking-wider">
                      {tg}
                    </span>
                  ))}
                </div>

                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />

                {/* Centered hover view arrow button */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-gold-500 text-stone-950 flex flex-col items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <span className="text-[10px] uppercase font-bold tracking-widest leading-none">View</span>
                    <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title, Year, Location Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-stone-900 font-medium group-hover:text-gold-500 transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-stone-500 text-xs font-light mt-1">
                    {proj.location} &bull; {proj.year}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-800 group-hover:bg-gold-500 group-hover:text-stone-950 group-hover:border-gold-500 transition-all duration-300 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL PORTAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-55 flex items-center justify-center bg-black/95 backdrop-blur-md">
            {/* Backdrop close */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxIndex(null)} />
            
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 text-stone-400 hover:text-white transition-colors duration-300 z-10 bg-white/5 rounded-full cursor-pointer"
              aria-label="Close Lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image Slider */}
            <div className="relative max-w-5xl max-h-[80vh] w-full px-6 flex items-center justify-center z-10 select-none">
              <button
                onClick={() => setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                className="absolute left-10 p-3 text-white hover:text-gold-500 transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer"
                aria-label="Previous Image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                src={projects[lightboxIndex].image}
                alt="Enlarged Render"
                className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded-2xl"
              />

              <button
                onClick={() => setLightboxIndex((prev) => (prev + 1) % projects.length)}
                className="absolute right-10 p-3 text-white hover:text-gold-500 transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer"
                aria-label="Next Image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Info overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center text-white space-y-1">
              <h4 className="text-lg font-serif font-medium">{projects[lightboxIndex].title}</h4>
              <p className="text-xs text-gold-500 uppercase tracking-widest font-mono">{projects[lightboxIndex].location}</p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
