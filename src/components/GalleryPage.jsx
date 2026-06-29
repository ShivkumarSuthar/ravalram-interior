import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Layers, 
  MapPin, 
  Calendar, 
  Compass, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Maximize2,
  ArrowRight,
  Info
} from "lucide-react";

// Asset imports
import heroBg from "../assets/images/antra_hero_bg_1782744248753.jpg";
import heroSlide2 from "../assets/images/antra_hero_slide2_1782747378004.jpg";
import heroSlide3 from "../assets/images/antra_hero_slide3_1782747396078.jpg";
import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";
import lobbyBanner from "../assets/images/antra_lobby_banner_1782744283860.jpg";
import projectCoastal from "../assets/images/antra_project_coastal_1782744299850.jpg";
import projectLoft from "../assets/images/antra_project_loft_1782744318019.jpg";
import transitionLuxury from "../assets/images/antra_transition_luxury_1782747459033.jpg";

// Curated high-fidelity project lists
const galleryCategories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial Offices" },
  { id: "lighting", label: "Luminous & Lighting" },
  { id: "furniture", label: "Bespoke Furniture" }
];

const galleryProjects = [
  {
    id: 1,
    title: "Malibu Coastal Sanctuary",
    category: "residential",
    categoryLabel: "Residential",
    image: projectCoastal,
    location: "Malibu, California",
    year: "2024",
    client: "The Henderson Family Trust",
    materials: "Travertine, Solid Teak, Raw Linen",
    description: "An oceanfront estate featuring organic window frames that pull in natural salt-air breezes, linear lighting channels, and unpolished sand stone finishes."
  },
  {
    id: 2,
    title: "Historical Spokane Loft Conversion",
    category: "residential",
    categoryLabel: "Residential",
    image: projectLoft,
    location: "Spokane, Washington",
    year: "2023",
    client: "Vance Creative Corp",
    materials: "Reclaimed Cedar, Fluted Steel, Mortar Concrete",
    description: "Renovation of an early-century brick warehouse into a high-contrast duplex loft featuring custom fluted kitchen islands and custom structural steel partitions."
  },
  {
    id: 3,
    title: "Eco-Luxe Reception Hallway",
    category: "commercial",
    categoryLabel: "Commercial Offices",
    image: lobbyBanner,
    location: "Seattle, Washington",
    year: "2025",
    client: "Pacific Horizon Office Group",
    materials: "European Oak, Travertine Slates, Warm Lux-chords",
    description: "Corporate headquarters lobby designed as a series of calm stone tunnels with embedded indirect light fields to promote cognitive peace and organic warmth."
  },
  {
    id: 4,
    title: "Spokane Bespoke Living Room",
    category: "residential",
    categoryLabel: "Residential",
    image: heroBg,
    location: "Spokane, Washington",
    year: "2024",
    client: "E. Mitchell Esq.",
    materials: "Solid White Oak, Italian Travertine, Bouclé Fabric",
    description: "Bento-grid styled reading lounge centering a master-built wood fireplace block, custom fluted paneling, and strategic ceiling recess beams."
  },
  {
    id: 5,
    title: "Linear Glow Lounge Corridor",
    category: "lighting",
    categoryLabel: "Luminous & Lighting",
    image: transitionLuxury,
    location: "Portland, Oregon",
    year: "2024",
    client: "Seraphim Social Club",
    materials: "Milled Brass, Smoked Glass, Brushed Alabaster",
    description: "Atmospheric luxury transit corridor featuring hand-calibrated linear brass fixtures and dark shadow zones to ease spatial transition transitions."
  },
  {
    id: 6,
    title: "Minimalist Master Suite Sanctuary",
    category: "residential",
    categoryLabel: "Residential",
    image: heroSlide2,
    location: "Coeur d'Alene, Idaho",
    year: "2023",
    client: "Dr. Rachel Vance",
    materials: "Stained Ashwood, Pure Wool, Soft Brass",
    description: "A private lakeview retreat optimizing deep quietude, built-in floating timber beds, and soft concealed dawn-to-dusk lighting zones."
  },
  {
    id: 7,
    title: "Raw Timber & Stone Dining Area",
    category: "furniture",
    categoryLabel: "Bespoke Furniture",
    image: aboutImg,
    location: "Bellevue, Washington",
    year: "2024",
    client: "The G. Sterling Residence",
    materials: "Solid Oak, Spessart Wood, Raw Ironwood",
    description: "A custom dining room designed around an integrated 400-year-old single-slab oak dining table with structural slate pillars."
  },
  {
    id: 8,
    title: "Refined Executive Boardroom Suite",
    category: "commercial",
    categoryLabel: "Commercial Offices",
    image: heroSlide3,
    location: "Spokane, Washington",
    year: "2025",
    client: "Northwest Asset Partners",
    materials: "Smoked Oak Veneer, Fine Matte Steel, Charcoal Leather",
    description: "Remodeled corporate chamber utilizing integrated soundproofing panels, hidden linear presentation lightwells, and luxury bespoke conference tables."
  }
];

export default function GalleryPage({ onBackToHome, onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null); // index in current list
  const [isSidebarInfoOpen, setIsSidebarInfoOpen] = useState(true);

  // Filter project based on category
  const filteredProjects = selectedCategory === "all"
    ? galleryProjects
    : galleryProjects.filter(p => p.category === selectedCategory);

  const handleOpenLightbox = (project) => {
    // Find the index within the filtered set
    const idx = filteredProjects.findIndex(p => p.id === project.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNextProject = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredProjects.length);
    }
  };

  const handlePrevProject = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  const activeLightboxProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-500 selection:text-stone-950 pt-[80px]">
      
      {/* 1. HERO BREADCRUMB HEADER */}
      <section className="relative h-[40vh] md:h-[50vh] bg-stone-950 text-white flex flex-col justify-center overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Gallery Banner Background"
            className="w-full h-full object-cover opacity-20 filter grayscale scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-stone-950/45" />
        </div>

        {/* Technical drafting gridlines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-center md:text-left space-y-4">
          {/* Breadcrumbs */}
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
            <button onClick={onBackToHome} className="hover:text-gold-500 transition-colors cursor-pointer">HOME</button>
            <span>/</span>
            <span className="text-gold-500 font-bold">WORK PORTFOLIO</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white leading-none uppercase"
          >
            Creative <span className="font-serif italic text-gold-500 font-normal">Works</span> Gallery
          </motion.h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
            Witness our spatial portfolio. An architectural inventory of quiet luxury residences, bespoke commercial offices, and custom millwork detailing.
          </p>
        </div>
      </section>

      {/* 2. GALLERY INTERACTIVE MATRIX */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16" id="gallery-tabs">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-full cursor-pointer border ${
                  selectedCategory === cat.id
                    ? "bg-stone-950 text-gold-500 border-stone-950 shadow-md"
                    : "bg-[#faf9f6] text-stone-600 border-stone-200/80 hover:border-gold-500/40 hover:text-stone-950"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout of Cards */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            id="gallery-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-white border border-stone-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container with Zoom effect */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-[0.98] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark gradient fade-in overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />

                    {/* Action Circle Floating Button */}
                    <button
                      onClick={() => handleOpenLightbox(project)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gold-500 hover:bg-gold-600 text-stone-950 rounded-full flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 cursor-pointer shadow-lg z-20"
                      aria-label="Open Lightbox View"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>

                  {/* Description Box */}
                  <div className="p-6 text-left space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest font-bold text-gold-600 uppercase">
                        {project.categoryLabel}
                      </span>
                      <span className="text-stone-400 font-mono text-[10px]">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-base font-serif font-semibold text-stone-900 group-hover:text-gold-500 transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center space-x-1.5 text-stone-500 text-[11px] font-light">
                      <MapPin size={11} className="text-gold-500 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <p className="text-stone-500 text-[11px] font-light line-clamp-2 leading-relaxed pt-1 border-t border-stone-50">
                      {project.description}
                    </p>

                    <div className="pt-3">
                      <button
                        onClick={() => handleOpenLightbox(project)}
                        className="text-[10px] uppercase tracking-widest font-bold text-stone-950 hover:text-gold-600 transition-colors inline-flex items-center space-x-1 cursor-pointer"
                      >
                        <span>Inspect Project Blueprint</span>
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. EXPERIMENT WITH DEEP LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightboxProject && (
          <div className="fixed inset-0 z-55 flex items-center justify-center bg-stone-950" id="gallery-lightbox">
            
            {/* Main Lightbox Frame */}
            <div className="w-full h-full flex flex-col lg:flex-row relative">
              
              {/* Close Button Top Right */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-500 hover:text-stone-950 text-white flex items-center justify-center transition-all z-40 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              {/* Prev / Next Controls over the Image frame */}
              <button
                onClick={handlePrevProject}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-gold-500 hover:text-stone-950 text-white flex items-center justify-center transition-all z-30 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextProject}
                className="absolute right-6 lg:right-[384px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-gold-500 hover:text-stone-950 text-white flex items-center justify-center transition-all z-30 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight size={20} />
              </button>

              {/* Left Side: Massive Immersive Image */}
              <div className="flex-1 flex items-center justify-center p-8 bg-stone-950 overflow-hidden relative">
                <motion.img
                  key={activeLightboxProject.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  src={activeLightboxProject.image}
                  alt={activeLightboxProject.title}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/5"
                  referrerPolicy="no-referrer"
                />

                {/* Floating indicator */}
                <div className="absolute bottom-6 left-6 font-mono text-[10px] text-stone-500 tracking-widest bg-stone-900/60 px-3 py-1.5 rounded border border-white/5">
                  PROJECT SPEC {lightboxIndex + 1} OF {filteredProjects.length}
                </div>
              </div>

              {/* Right Side: Luxury Technical specifications column */}
              <div className="w-full lg:w-96 bg-stone-900 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between p-8 text-left z-20 text-white shrink-0">
                <div className="space-y-6">
                  <div>
                    <span className="text-gold-500 font-mono text-[10px] font-bold tracking-widest uppercase block mb-2">
                      {activeLightboxProject.categoryLabel}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight">
                      {activeLightboxProject.title}
                    </h2>
                  </div>

                  {/* Metadata Specs */}
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <div className="flex items-center space-x-3 text-stone-300">
                      <MapPin size={14} className="text-gold-500" />
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block">Location</span>
                        <span className="text-xs font-medium">{activeLightboxProject.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-stone-300">
                      <Calendar size={14} className="text-gold-500" />
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block">Year Completed</span>
                        <span className="text-xs font-medium">{activeLightboxProject.year}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-stone-300">
                      <Compass size={14} className="text-gold-500" />
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block">Premium Materials</span>
                        <span className="text-xs font-medium">{activeLightboxProject.materials}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-stone-300">
                      <Info size={14} className="text-gold-500" />
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block">Client Partner</span>
                        <span className="text-xs font-medium">{activeLightboxProject.client}</span>
                      </div>
                    </div>
                  </div>

                  {/* Explanations */}
                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block">Project Synopsis</span>
                    <p className="text-xs text-stone-300 font-light leading-relaxed">
                      {activeLightboxProject.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      onOpenQuote();
                    }}
                    className="w-full py-3.5 bg-gold-500 hover:bg-gold-600 text-stone-950 text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded text-center"
                  >
                    Discuss Custom Remodel
                  </button>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="w-full py-3.5 border border-white/10 hover:border-white text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded text-center"
                  >
                    Close Specs Screen
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}
      </AnimatePresence>

      {/* 4. WORK WITH US */}
      <section className="bg-stone-950 text-white py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="text-gold-500 text-xs tracking-[0.25em] font-mono font-bold block uppercase">
            COMMISSION OUR CRAFTSMEN
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Build Your Own <span className="font-serif italic text-gold-500 font-normal">Award Winning</span> <br />
            Sanctuary With Antra
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Get connected with our lead estimators to outline pricing schedules, blueprint drafting requirements, and raw material procurement.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-stone-950 font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
            >
              Request Free Estimate
            </button>
            <button
              onClick={onBackToHome}
              className="px-8 py-3.5 border border-stone-800 hover:border-gold-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5 cursor-pointer"
            >
              Back To Home
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
