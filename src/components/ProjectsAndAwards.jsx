import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Award, Calendar, Eye, MapPin, Maximize2, ShieldAlert, Sparkles, X } from "lucide-react";
import coastalImg from "../assets/images/antra_project_coastal_1782744299850.jpg";
import loftImg from "../assets/images/antra_project_loft_1782744318019.jpg";

export default function ProjectsAndAwards() {
  const [activeProject, setActiveProject] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null); // null if closed, number if open
  const [activeAward, setActiveAward] = useState(0);

  const projects = [
    {
      title: "Coastal Harmony Home",
      subtitle: "Bespoke Oceanfront Villa",
      location: "Malibu, California",
      year: "2025",
      sqft: "6,200 SQFT",
      vibe: "Warm Brutalism & Ocean Luxury",
      materials: "Travertine, French Oak, Aged Brass",
      image: coastalImg,
      description: "Co-created with ocean views in mind. This luxury Malibu home focuses on massive pocket doors, limestone plastering, and organic furniture contours that reflect the Pacific horizon."
    },
    {
      title: "Modern Minimalist Loft",
      subtitle: "Executive Penthouse Residence",
      location: "SoHo, New York",
      year: "2024",
      sqft: "3,800 SQFT",
      vibe: "Industrial Sophistication",
      materials: "Polished Concrete, Fluted Glass, Blackened Steel",
      image: loftImg,
      description: "A conversion of a historic industrial warehouse into an elegant luxury penthouse. Features high double-height ceilings, automated skylight panels, custom brass fittings, and a fluted-stone kitchen island."
    },
    {
      title: "Travertine Sanctuary Villa",
      subtitle: "Bespoke Oasis Architecture",
      location: "Scottsdale, Arizona",
      year: "2026",
      sqft: "8,400 SQFT",
      vibe: "Desert Modernism & Pure Calm",
      materials: "Split-face Travertine, Red Cedar, Quartzite",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      description: "Harmonized with the desert landscape. Thick sand-toned plaster walls insulate the villa, while pocket gardens and skylights introduce daylight fields that mutate throughout the day."
    }
  ];

  const awards = [
    {
      year: "2026",
      title: "Best Residential Design",
      issuer: "International Architectural Association",
      description: "Awarded to Antra's Malibu Coastal Villa for seamless integration of natural outdoor sightlines with minimalist indoor travertine architecture."
    },
    {
      year: "2025",
      title: "Top Commercial Design",
      issuer: "Global Office Design Council",
      description: "Presented for our design of the Nexus Executive Offices, redefining workspaces with sound-insulating fluted wood and natural light shafts."
    },
    {
      year: "2024",
      title: "Excellence Design Award",
      issuer: "Nordic Interior Forum",
      description: "Recognized for our research in tactile room acoustics and sustainable European oak material sourcing protocols."
    },
    {
      year: "2023",
      title: "Creative Office Space Award",
      issuer: "Metropolis Architecture Board",
      description: "Celebrating innovative layout plans that combine collaborative bento-grid desk clusters with soundproof cocoon relaxation libraries."
    },
    {
      year: "2022",
      title: "Emerging Designer Of The Year",
      issuer: "Design Digest Worldwide",
      description: "Honoring Antra's initial signature layouts showing high potential in premium, eye-safe warm lighting systems and raw stone finishes."
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="bg-stone-50 py-24 md:py-32 overflow-hidden border-t border-stone-100">
      {/* SECTION 1: PROJECTS SHOWCASE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
              Curated Works
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
              Creative Projects That <br />
              <span className="font-serif italic text-gold-500">Define Our Style</span>
            </h2>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-stone-200 hover:border-gold-500 flex items-center justify-center text-stone-700 hover:text-gold-500 bg-white transition-all duration-300 cursor-pointer hover:shadow-md"
              aria-label="Previous Project"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="text-sm font-mono text-stone-400">
              0{activeProject + 1} <span className="text-stone-200">/</span> 0{projects.length}
            </span>
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full border border-stone-200 hover:border-gold-500 flex items-center justify-center text-stone-700 hover:text-gold-500 bg-white transition-all duration-300 cursor-pointer hover:shadow-md"
              aria-label="Next Project"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Dynamic Project Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Project Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden group shadow-2xl bg-stone-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay for hovering click lightbox */}
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-500 flex items-center justify-center z-10">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setLightboxIndex(activeProject)}
                      className="w-14 h-14 rounded-full bg-gold-500/90 text-stone-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl cursor-pointer"
                      aria-label="Enlarge Image"
                    >
                      <Maximize2 size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative location badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-stone-950/80 backdrop-blur-md px-4 py-2 border border-white/5 flex items-center space-x-2 text-white">
                <MapPin size={12} className="text-gold-500" />
                <span className="text-[10px] tracking-wider uppercase font-semibold">{projects[activeProject].location}</span>
              </div>
            </div>
          </div>

          {/* Project Spec Specs Sheet */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <div>
                  <span className="text-gold-500 text-[10px] tracking-[0.2em] uppercase font-bold">
                    Featured Masterpiece ({projects[activeProject].year})
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-stone-900 font-semibold mt-1">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-stone-500 text-xs italic mt-0.5">{projects[activeProject].subtitle}</p>
                </div>

                <p className="text-stone-600 font-light text-sm leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Spec Sheet Table */}
                <div className="border-t border-b border-stone-200 py-6 space-y-3 font-mono text-xs text-stone-600">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400 uppercase tracking-widest">Floor Area:</span>
                    <span className="text-stone-900 font-medium">{projects[activeProject].sqft}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400 uppercase tracking-widest">Design Concept:</span>
                    <span className="text-stone-900 font-medium">{projects[activeProject].vibe}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400 uppercase tracking-widest">Core Textures:</span>
                    <span className="text-stone-900 font-medium">{projects[activeProject].materials}</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setLightboxIndex(activeProject)}
                    className="inline-flex items-center space-x-2 text-stone-950 hover:text-gold-500 font-bold text-xs tracking-widest uppercase transition-colors duration-300"
                  >
                    <span>View Architectural Renders</span>
                    <Eye size={14} className="text-gold-500" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* SECTION 2: INDUSTRY AWARDS */}
      <div className="bg-stone-950 text-white py-24 md:py-32 relative overflow-hidden">
        {/* Absolute Background Accent */}
        <div className="absolute right-0 top-0 w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-stone-950/0 to-stone-950/0 opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Golden Trophy Accent Box */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
                  Hall of Excellence
                </span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                  Design That <span className="font-serif italic text-gold-500">Speaks</span> Our Industry Awards
                </h2>
                <p className="text-stone-400 font-light text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                  Our devotion to custom material sourcing and eco-conscious spatial designs has been consistently recognized by the foremost luxury design organizations.
                </p>
              </div>

              {/* Sculptural Vector Trophy Design */}
              <div className="relative w-48 h-48 bg-stone-900 border border-gold-500/20 flex flex-col items-center justify-center p-6 shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Award size={48} className="text-gold-500 mb-2 transform group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-bold font-mono">EST. 2013</span>
                <span className="text-white font-medium text-xs text-center mt-2 font-serif">Gold Standard Craft</span>
              </div>
            </div>

            {/* Right Column: Staggered Award Accordion / List */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {awards.map((award, index) => {
                const isSelected = activeAward === index;
                return (
                  <div
                    key={award.year}
                    onMouseEnter={() => setActiveAward(index)}
                    className={`border-b border-stone-800 pb-5 pt-3 transition-colors duration-300 cursor-pointer ${
                      isSelected ? "border-gold-500/50" : "border-stone-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <span className={`text-sm font-mono tracking-wider font-semibold ${isSelected ? "text-gold-500" : "text-stone-500"}`}>
                          {award.year}
                        </span>
                        <h3 className={`text-base md:text-lg font-serif transition-colors duration-300 ${isSelected ? "text-white" : "text-stone-400"}`}>
                          {award.title}
                        </h3>
                      </div>
                      <span className={`text-xs uppercase font-bold font-mono tracking-widest hidden md:inline transition-colors duration-300 ${
                        isSelected ? "text-gold-500" : "text-stone-600"
                      }`}>
                        {award.issuer}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed mt-4 max-w-xl pl-16">
                            {award.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
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
              <X size={24} />
            </button>

            {/* Image Slider */}
            <div className="relative max-w-5xl max-h-[80vh] w-full px-6 flex items-center justify-center z-10 select-none">
              <button
                onClick={() => setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                className="absolute left-10 p-3 text-white hover:text-gold-500 transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer"
                aria-label="Previous Lightbox Image"
              >
                <ArrowLeft size={24} />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                src={projects[lightboxIndex].image}
                alt="Enlarged Render"
                className="max-w-full max-h-[75vh] object-contain shadow-2xl"
              />

              <button
                onClick={() => setLightboxIndex((prev) => (prev + 1) % projects.length)}
                className="absolute right-10 p-3 text-white hover:text-gold-500 transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer"
                aria-label="Next Lightbox Image"
              >
                <ArrowRight size={24} />
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
