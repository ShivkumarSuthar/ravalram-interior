import AppImage from "./AppImage";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const coastalImg = "/images/antra_project_coastal_1782744299850.jpg";
const loftImg = "/images/antra_project_loft_1782744318019.jpg";

const projects = [
  {
    id: 1,
    title: "Luxury Residence",
    category: "Residential Interior",
    filterKey: "Residential",
    image: coastalImg,
    description: "A warm contemporary home designed with custom furniture, premium finishes, and carefully planned lighting to create elegant everyday living."
  },
  {
    id: 2,
    title: "Modern Office Workspace",
    category: "Commercial Interior",
    filterKey: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    description: "A productive and inspiring workspace balancing functionality, comfort, and modern aesthetics for growing businesses."
  },
  {
    id: 3,
    title: "Premium Modular Kitchen",
    category: "Custom Furniture",
    filterKey: "Furniture",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
    description: "A beautifully crafted modular kitchen designed around efficiency, premium materials, and timeless style."
  },
  {
    id: 4,
    title: "Home Renovation",
    category: "Renovation",
    filterKey: "Renovation",
    image: loftImg,
    description: "Transforming an existing home into a brighter, more functional, and contemporary living environment while preserving its character."
  }
];

const filters = ["All", "Residential", "Commercial", "Furniture", "Renovation"];

export default function CreativeProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null); // null or index within active filtered projects

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.filterKey === activeFilter);

  return (
    <section id="portfolio" className="bg-field py-24 md:py-32 relative overflow-hidden border-t border-stone-200/50">
      
      {/* Giant Ghost Text Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <span className="text-[14vw] font-serif font-black text-stone-900/[0.015] uppercase tracking-[0.2em] leading-none whitespace-nowrap">
          Suthar Studio
        </span>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-primary text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              FEATURED PROJECTS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            Designed with Purpose. <br />
            <span className="font-serif italic text-primary font-normal lowercase">Crafted to</span> Last.
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
            Every project reflects our commitment to thoughtful design, skilled craftsmanship, and meticulous execution. From elegant homes to modern commercial spaces, we create interiors that are both beautiful and functional.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-16 justify-start">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 text-xs uppercase tracking-widest font-mono font-bold transition-all duration-300 rounded-none border ${
                activeFilter === filter
                  ? "bg-stone-900 border-stone-900 text-white"
                  : "bg-white border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400"
              } cursor-pointer`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Card Rows - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxIndex(idx)}
                className="group cursor-pointer space-y-6 text-left"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] bg-stone-900 rounded-none overflow-hidden border border-stone-200/20">
                  {/* Category Tag top-left */}
                  <div className="absolute top-4 left-4 z-20 flex space-x-2">
                    <span className="px-3 py-1 bg-stone-900 text-white text-[9px] font-bold tracking-wider rounded-none font-mono uppercase">
                      {proj.category}
                    </span>
                  </div>

                  <AppImage
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover filter brightness-[0.93] transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />

                  {/* Centered hover view arrow button */}
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-primary text-stone-950 flex flex-col items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                      <span className="text-[10px] uppercase font-bold tracking-widest leading-none">View</span>
                      <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title, Category & Description Info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-serif text-stone-900 font-medium group-hover:text-primary transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-800 group-hover:bg-primary group-hover:text-stone-950 group-hover:border-primary transition-all duration-300 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Premium CTA Box underneath the Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24 md:mt-32 bg-stone-900 text-white p-8 md:p-16 border border-white/5 relative overflow-hidden text-left shadow-2xl rounded-lg"
        >
          {/* Subtle warm decorative radial glow */}
          <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/15 via-stone-950/0 to-stone-950/0 opacity-80 pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="text-primary text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              HAVE A VISION? Let's Bring It to Life.
            </span>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight text-white leading-tight uppercase">
              Have a Vision? <br />
              <span className="font-serif italic text-primary font-normal lowercase">Let's Bring It to</span> Life.
            </h3>
            <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed max-w-2xl">
              Every successful project begins with a conversation. Tell us about your space, your ideas, and your goals—we'll take care of the rest.
            </p>

            <div className="pt-4">
              <motion.button
                onClick={() => setActiveFilter("All")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-primary hover:bg-lighter px-6 py-4 rounded-none cursor-pointer"
              >
                <span>View All Projects</span>
                <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950 group-hover:bg-stone-950 group-hover:text-primary transition-all duration-300">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* LIGHTBOX MODAL PORTAL */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
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
                onClick={() => setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)}
                className="absolute left-10 p-3 text-white hover:text-primary transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer"
                aria-label="Previous Image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                src={filteredProjects[lightboxIndex].image}
                alt="Enlarged Render"
                className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded-none"
              />

              <button
                onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredProjects.length)}
                className="absolute right-10 p-3 text-white hover:text-primary transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer"
                aria-label="Next Image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Info overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center text-white space-y-1">
              <h4 className="text-lg font-serif font-medium">{filteredProjects[lightboxIndex].title}</h4>
              <p className="text-xs text-primary uppercase tracking-widest font-mono">{filteredProjects[lightboxIndex].category}</p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
