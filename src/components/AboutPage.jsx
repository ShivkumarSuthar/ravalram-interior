import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Hammer,
  Workflow,
  History,
  Award,
  Play,
  Pause,
  Layers,
  Building2,
  Users,
  Ruler,
  Phone,
  ArrowUpRight,
  Heart,
  Briefcase,
  Eye,
  X,
  Maximize2,
  Sliders,
  Grid,
  FileText,
  Check
} from "lucide-react";
import ExperienceShowcase from "./ExperienceShowcase.jsx";
import Stats from "./Stats.jsx";
import { COMPANY_INFO, SITE_IMAGES, TEAM_DATA, ABOUT_PAGE_DATA } from "../lib/data.js";

// ============================================================================
// EDITORIAL CHAPTERS (MAGAZINE MONOGRAPH SPREADS)
// ============================================================================
const editorialChapters = [
  {
    id: "chapter-01",
    num: "01",
    label: "HERITAGE & GUILD",
    chapterTitle: "Generational Timber Mastery & Artisanal Roots",
    subtitle: "ESTABLISHED 1989 • SANTACRUZ WEST, MUMBAI",
    description:
      "Founded in 1989 by master craftsman Ravalram H. Suthar, our studio began as a dedicated timber joinery guild. Over three decades, we have preserved multi-generational woodworking traditions while evolving into an architect-led practice.",
    highlights: [
      "Genuine Teak & Hardwood Selection",
      "Traditional Mortise & Tenon Joinery",
      "Hand-Polished Natural Oils & Finishes"
    ],
    quote: "“True craftsmanship resides in the silent, flawless alignment of grain, stone, and structure.”",
    quoteAuthor: "Ravalram H. Suthar, Founder",
    primaryImage: SITE_IMAGES.aboutHeroBg,
    secondaryImage: SITE_IMAGES.woodworkingGridImg,
    badgeText: "35+ YEARS CRAFT LEGACY",
    statsNum: "1989",
    statsLabel: "INCEPTION YEAR"
  },
  {
    id: "chapter-02",
    num: "02",
    label: "ARCHITECT SUPERVISION",
    heading: "CAD Precision & On-Site Execution",
    chapterTitle: "Architect-Led Execution & Computational Drafting",
    subtitle: "100% CAD-TO-SITE FIDELITY GUARANTEE",
    description:
      "Directed by Lead Architect Padam P. Sutar and our technical teams, every spatial layout, electrical pathway, and custom partition is modeled in 3D CAD before site procurement. Qualified architects supervise every phase on-site.",
    highlights: [
      "Photorealistic 3D Spatial Previews",
      "Architect-Supervised Civil Site Audits",
      "Zero Structural Tolerances"
    ],
    quote: "“We convert architectural blueprints into living spatial art with zero margin for execution error.”",
    quoteAuthor: "Padam P. Sutar, Lead Architect",
    primaryImage: SITE_IMAGES.architecturalPavilion,
    secondaryImage: SITE_IMAGES.isometricFloorPlan,
    badgeText: "ARCHITECT-SUPERVISED",
    statsNum: "100%",
    statsLabel: "BLUEPRINT ACCURACY"
  },
  {
    id: "chapter-03",
    num: "03",
    label: "MATERIAL ATELIER",
    chapterTitle: "Bespoke Millwork & Curated Surface Textures",
    subtitle: "FACTORY FABRICATION & ITALIAN MARBLE CURATION",
    description:
      "Our state-of-the-art woodworking factory produces precision modular kitchens, walk-in wardrobes, slatted acoustic partitions, and loose timber seating using IS 710 Marine BWR plywood and German soft-close hardware.",
    highlights: [
      "100% IS 710 Marine BWR Plywood",
      "Bookmatched Italian Statuario Slabs",
      "10-Year Structural Warranty"
    ],
    quote: "“Factory precision combined with hand-finished artisan detailing creates spaces made to last generations.”",
    quoteAuthor: "Shivkumar Suthar, Co-Founder",
    primaryImage: SITE_IMAGES.projectLoft,
    secondaryImage: SITE_IMAGES.transitionLuxury,
    badgeText: "10-YR GUARANTEE",
    statsNum: "10 YRS",
    statsLabel: "STRUCTURAL WARRANTY"
  },
  {
    id: "chapter-04",
    num: "04",
    label: "TURNKEY BLUEPRINT",
    chapterTitle: "Single-Point Accountability & Transparent BOQ",
    subtitle: "END-TO-END DESIGN-BUILD CONTRACTING",
    description:
      "From initial civil demolition and plumbing rewiring to final white-glove furniture assembly and styling, we take full accountability with itemized BOQ estimates and strict milestone schedules.",
    highlights: [
      "Itemized Transparent BOQ Blueprints",
      "Dedicated Civil & Electrical Supervisors",
      "White-Glove Key Handover Service"
    ],
    quote: "“Single-point accountability eliminates the stress of interior construction for homeowners.”",
    quoteAuthor: "Suthar Studio Management",
    primaryImage: SITE_IMAGES.lobbyBanner,
    secondaryImage: SITE_IMAGES.projectCoastal,
    badgeText: "FULL TURNKEY",
    statsNum: "500+",
    statsLabel: "DELIVERED SPACES"
  }
];

// ============================================================================
// MATERIAL ATELIER SWATCHES
// ============================================================================
const materialSwatches = [
  {
    id: "swatch-01",
    name: "Seasoned Burma Teak & BWR Ply",
    category: "TIMBER JOINERY",
    origin: "Sustainable Hardwood Reserves",
    desc: "Grade-A seasoned teak with natural high-oil content paired with IS 710 boiling water resistant marine plywood.",
    specCode: "IS 710 BWR / 18mm",
    image: SITE_IMAGES.woodworkingGridImg,
    tag: "10-Yr Guarantee"
  },
  {
    id: "swatch-02",
    name: "Bookmatched Statuario & Onyx",
    category: "NATURAL STONE",
    origin: "Carrara & Tuscan Quarries, Italy",
    desc: "Hand-selected 20mm marble slabs bookmatched for continuous veining across kitchen islands and vanity walls.",
    specCode: "20mm Mirror-Polished",
    image: SITE_IMAGES.transitionLuxury,
    tag: "Italian Curated"
  },
  {
    id: "swatch-03",
    name: "Hand-Troweled Venetian Stucco",
    category: "ARCHITECTURAL FINISHES",
    origin: "Traditional Lime & Marble Dust",
    desc: "Multi-layered breathable lime plaster hand-burnished to achieve depth and subtle daylight reflection.",
    specCode: "3-Coat Lime Stucco",
    image: SITE_IMAGES.aboutSide,
    tag: "Artisan Plaster"
  },
  {
    id: "swatch-04",
    name: "PVD Champagne Gold Hardware",
    category: "METALLIC & JOINERY ACCENTS",
    origin: "German Blum & Hafele Precision",
    desc: "Physical Vapor Deposition stainless steel accents and soft-close concealed hinges tested for 100,000 cycles.",
    specCode: "PVD Titanium Coating",
    image: SITE_IMAGES.projectLoft,
    tag: "100k Cycle Test"
  }
];

// ============================================================================
// MAGAZINE MONOGRAPH GALLERY SPREAD
// ============================================================================
const monographGallery = [
  {
    title: "Double-Height Sea Villa Living Room",
    location: "Bandra West, Mumbai",
    category: "Residential Architecture",
    image: SITE_IMAGES.heroBg,
    span: "col-span-12 md:col-span-8 aspect-[16/10]",
    caption: "Custom acoustic teak slatted wall panels paired with Statuario marble flooring."
  },
  {
    title: "Architectural Drafting Studio",
    location: "Santacruz West, Mumbai",
    category: "Studio Workspace",
    image: SITE_IMAGES.architecturalPavilion,
    span: "col-span-12 md:col-span-4 aspect-[4/5]",
    caption: "Where computational 3D blueprints meet physical material testing."
  },
  {
    title: "Coastal Villa Master Suite",
    location: "Candolim, Goa",
    category: "Coastal Estate",
    image: SITE_IMAGES.projectCoastal,
    span: "col-span-12 md:col-span-5 aspect-[4/5]",
    caption: "Custom teak bedstead with integrated brass joinery and warm ambient cove lighting."
  },
  {
    title: "Executive Penthouse Lounge",
    location: "Koregaon Park, Pune",
    category: "Penthouse Design",
    image: SITE_IMAGES.projectLoft,
    span: "col-span-12 md:col-span-7 aspect-[16/10]",
    caption: "Open-plan penthouse lounge featuring bespoke modular cabinetry and fluted glass partitions."
  }
];

// Timeline Events
const timelineEvents = ABOUT_PAGE_DATA?.timelineEvents || [];

// Leaders
const leaders = (TEAM_DATA || []).map((member) => ({
  name: member.name,
  role: member.role,
  experience: member.experience,
  desc: member.bio,
  image: member.image
}));

export default function AboutPage({ onBackToHome, onOpenQuote }) {
  // Active Monograph Chapter
  const [activeChapter, setActiveChapter] = useState(0);

  // Active Material Swatch
  const [activeSwatch, setActiveSwatch] = useState(0);

  // Lightbox Modal
  const [activeLightbox, setActiveLightbox] = useState(null);

  // Active Timeline Year
  const [activeTimeline, setActiveTimeline] = useState(0);

  // Chapter Auto-Cycle Timer
  const [isPaused, setIsPaused] = useState(false);
  const chapterTimerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      chapterTimerRef.current = setInterval(() => {
        setActiveChapter((prev) => (prev + 1) % editorialChapters.length);
      }, 8000);
    }
    return () => {
      if (chapterTimerRef.current) clearInterval(chapterTimerRef.current);
    };
  }, [isPaused]);

  const currentChapter = editorialChapters[activeChapter];
  const currentSwatch = materialSwatches[activeSwatch];
  const currentTimeline = timelineEvents[activeTimeline] || timelineEvents[0];

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-accent/30 selection:text-stone-950 pt-[72px] sm:pt-[80px]">
      
      {/* 
        ====================================================================
        1. EDITORIAL MONOGRAPH HERO: MAGAZINE MASTHEAD & ASYMMETRICAL ARTWORK
        ====================================================================
      */}
      <section className="relative w-full bg-[#0c0a09] text-white overflow-hidden border-b border-stone-800">
        
        {/* Subtle Architectural Wireframe Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-8 px-6">
            <div className="border-l border-stone-400 h-full" />
            <div className="border-l border-stone-400 h-full" />
            <div className="border-l border-stone-400 h-full" />
            <div className="border-l border-stone-400 h-full border-r" />
          </div>
        </div>

        {/* Top Editorial Monograph Banner */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 pb-4 flex flex-wrap items-center justify-between border-b border-white/10 gap-4 text-left">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-accent animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-stone-300">
              SUTHAR INTERIOR STUDIO &bull; ARCHITECTURAL MONOGRAPH VOL. 35
            </span>
          </div>

          <div className="flex items-center space-x-6 text-[10px] font-mono text-stone-400 tracking-widest uppercase">
            <span>MUMBAI &bull; GOA &bull; PUNE</span>
            <span className="text-gold-accent font-bold">LAT 19.0596° N</span>
          </div>
        </div>

        {/* Main Editorial Hero Canvas: Asymmetrical Magazine Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Big Editorial Headline & Narrative Monologue */}
            <div className="lg:col-span-7 text-left space-y-5 md:space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-gold-accent/15 border border-gold-accent/30 text-gold-accent text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full shadow-lg">
                <Sparkles size={13} />
                <span>ESTABLISHED 1989 &bull; GENERATIONAL JOINERY</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md">
                Where <span className="font-serif italic font-normal text-gold-accent">Craftsmanship</span> Meets Architectural Art.
              </h1>

              <p className="text-stone-300 font-light text-sm sm:text-lg leading-relaxed max-w-2xl pt-1">
                For over 35 years, Suthar Interior Studio has bridged generational timber woodworking with architect-led computational precision. Every space is designed as a living monograph of spatial harmony, honest materials, and uncompromised site execution.
              </p>

              {/* Quick Spec Badge Bar */}
              <div className="pt-1 sm:pt-2 flex flex-wrap gap-2.5 sm:gap-3">
                <div className="bg-stone-900/90 border border-stone-800 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-left flex items-center space-x-2.5 sm:space-x-3 shadow-md">
                  <div className="text-gold-accent font-serif text-xl sm:text-2xl font-bold">35+</div>
                  <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-stone-400">YEARS CRAFT<br/>HERITAGE</div>
                </div>

                <div className="bg-stone-900/90 border border-stone-800 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-left flex items-center space-x-2.5 sm:space-x-3 shadow-md">
                  <div className="text-gold-accent font-serif text-xl sm:text-2xl font-bold">100%</div>
                  <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-stone-400">CAD-TO-SITE<br/>FIDELITY</div>
                </div>

                <div className="bg-stone-900/90 border border-stone-800 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-left flex items-center space-x-2.5 sm:space-x-3 shadow-md">
                  <div className="text-gold-accent font-serif text-xl sm:text-2xl font-bold">500+</div>
                  <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-stone-400">DELIVERED<br/>SPACES</div>
                </div>
              </div>

              {/* Action Triggers */}
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center space-x-2.5 sm:space-x-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] bg-gold-accent hover:bg-[#b0936b] text-stone-950 px-5 py-3 sm:px-7 sm:py-4 rounded-full transition-all duration-300 group cursor-pointer shadow-2xl hover:scale-[1.02]"
                >
                  <span>REQUEST CONSULTATION</span>
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onBackToHome}
                  className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-3 sm:px-6 sm:py-4 rounded-full transition-all duration-300 cursor-pointer"
                >
                  <Building2 size={14} className="text-gold-accent" />
                  <span>Return to Home</span>
                </button>
              </div>

            </div>

            {/* Right Column: Overlapping Layered Magazine Photo Montage */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                
                {/* Main Framed Photography */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full aspect-[16/10] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-stone-700/80 relative z-10 group cursor-pointer"
                  onClick={() => setActiveLightbox(SITE_IMAGES.aboutHeroBg)}
                >
                  <img
                    src={SITE_IMAGES.aboutHeroBg}
                    alt="Suthar Studio Architectural Detail"
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Photo Caption Tag */}
                  <div className="absolute bottom-5 left-5 right-5 text-left text-white space-y-1">
                    <span className="text-[10px] font-mono text-gold-accent font-bold uppercase tracking-widest block">
                      FIG 01.1 &bull; BANDRA SEA-FACING VILLA
                    </span>
                    <p className="text-xs font-light text-stone-200">
                      Seasoned teak joinery with hand-polished satin finish and brass inlay.
                    </p>
                  </div>

                  {/* Zoom indicator */}
                  <div className="absolute top-4 right-4 bg-stone-950/70 backdrop-blur-md p-2 rounded-full text-gold-accent border border-stone-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </div>
                </motion.div>

                {/* Overlapping Secondary CAD Wireframe Accent Frame */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-[68%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0c0a09] absolute -right-4 -bottom-8 z-20 hidden sm:block cursor-pointer group"
                  onClick={() => setActiveLightbox(SITE_IMAGES.isometricFloorPlan)}
                >
                  <img
                    src={SITE_IMAGES.isometricFloorPlan}
                    alt="Isometric Blueprint Drafting"
                    className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/30" />
                  <div className="absolute top-2 left-2 bg-stone-950/80 text-gold-accent text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded border border-stone-700">
                    CAD BLUEPRINT 0.5MM
                  </div>
                </motion.div>

                {/* Floating Gold Architectural Seal Badge */}
                <div className="absolute -left-6 top-10 z-30 bg-gold-accent text-stone-950 p-4 rounded-2xl shadow-2xl border-2 border-white/20 hidden sm:flex items-center space-x-3 max-w-[200px]">
                  <ShieldCheck size={28} className="shrink-0 text-stone-950" />
                  <div className="text-left leading-tight">
                    <span className="text-[10px] font-mono font-bold uppercase block tracking-wider">
                      ARCHITECT SUPERVISED
                    </span>
                    <span className="text-xs font-serif font-extrabold">
                      Site Execution
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 
        ====================================================================
        2. INTERACTIVE EDITORIAL CHAPTER SPREADS (MAGAZINE CHAPTER EXPLORER)
        ====================================================================
      */}
      <section className="py-10 md:py-32 bg-[#0c0a09] text-white relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6 md:space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800 pb-4 md:pb-8 text-left gap-4 md:gap-6">
            <div className="space-y-2 sm:space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-gold-accent/15 border border-gold-accent/30 text-gold-accent px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
                <Layers size={13} className="sm:w-3.5 sm:h-3.5" />
                <span>MAGAZINE CHAPTERS &bull; SUTHAR STUDIO MONOGRAPH</span>
              </div>
              <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                The Four Pillars of <span className="text-gold-accent">Our Practice</span>
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-400 hover:text-gold-accent transition-colors cursor-pointer bg-stone-900 border border-stone-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
              >
                {isPaused ? <Play size={11} className="text-gold-accent" /> : <Pause size={11} />}
                <span>{isPaused ? "RESUME" : "PAUSE"}</span>
              </button>
            </div>
          </div>

          {/* Interactive Chapter Tab Navigation Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {editorialChapters.map((chap, idx) => {
              const isActive = idx === activeChapter;
              return (
                <button
                  key={chap.id}
                  onClick={() => {
                    setActiveChapter(idx);
                    setIsPaused(true);
                  }}
                  className={`p-2.5 sm:p-5 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-1.5 sm:space-y-3 relative overflow-hidden ${
                    isActive
                      ? "bg-stone-900 border-gold-accent text-white shadow-xl ring-1 ring-gold-accent/50"
                      : "bg-stone-950/60 border-stone-800 text-stone-400 hover:text-white hover:bg-stone-900/60 hover:border-stone-700"
                  }`}
                >
                  {/* Progress Line */}
                  {isActive && !isPaused && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                      className="absolute top-0 left-0 h-[3px] bg-gold-accent z-30"
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] sm:text-xs font-mono font-bold ${isActive ? "text-gold-accent" : "text-stone-500"}`}>
                      CH {chap.num}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-stone-500 uppercase">{chap.statsNum}</span>
                  </div>

                  <div>
                    <span className={`text-[9px] sm:text-[11px] font-mono font-bold tracking-widest block uppercase ${isActive ? "text-gold-accent" : "text-stone-400"}`}>
                      {chap.label}
                    </span>
                    <h3 className={`text-xs sm:text-base font-bold mt-0.5 line-clamp-1 ${isActive ? "text-white" : "text-stone-300"}`}>
                      {chap.chapterTitle}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Chapter Spotlight Spread Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-stone-900/90 border border-stone-800 rounded-2xl sm:rounded-3xl p-4 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center shadow-2xl"
            >
              {/* Left Side: Dynamic Layered Imagery Stack */}
              <div className="lg:col-span-6 relative">
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-stone-700 shadow-xl group cursor-pointer" onClick={() => setActiveLightbox(currentChapter.primaryImage)}>
                  <img
                    src={currentChapter.primaryImage}
                    alt={currentChapter.chapterTitle}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-stone-950/80 border border-stone-700 text-gold-accent text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg">
                    {currentChapter.badgeText}
                  </div>
                </div>

                {/* Inset Secondary Detail Frame */}
                <div
                  className="absolute -bottom-6 -right-4 w-1/2 aspect-[4/3] rounded-xl overflow-hidden border-2 border-stone-900 shadow-2xl hidden sm:block cursor-pointer group"
                  onClick={() => setActiveLightbox(currentChapter.secondaryImage)}
                >
                  <img
                    src={currentChapter.secondaryImage}
                    alt="Detail close-up"
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/20" />
                  <div className="absolute bottom-2 left-2 bg-stone-950/90 text-white text-[8px] font-mono uppercase px-2 py-0.5 rounded">
                    DETAIL MACRO
                  </div>
                </div>
              </div>

              {/* Right Side: Editorial Text & Quote Monologue */}
              <div className="lg:col-span-6 space-y-4 lg:space-y-6 text-left">
                <div className="space-y-1.5 sm:space-y-2">
                  <span className="text-gold-accent text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                    CHAPTER {currentChapter.num} &bull; {currentChapter.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {currentChapter.chapterTitle}
                  </h3>
                  <p className="text-stone-300 font-light text-xs sm:text-base leading-relaxed pt-0.5">
                    {currentChapter.description}
                  </p>
                </div>

                {/* Highlight Deliverable Pills - Compact wrapping on mobile */}
                <div className="hidden lg:space-y-2.5 pt-1 lg:block">
                  {currentChapter.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-3 bg-stone-950/60 border border-stone-800 p-3 rounded-xl">
                      <CheckCircle2 size={16} className="text-gold-accent shrink-0" />
                      <span className="text-xs font-medium text-stone-200">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile Compact Highlight Pills */}
                <div className="flex flex-wrap gap-1.5 lg:hidden pt-0.5">
                  {currentChapter.highlights.map((item, hIdx) => (
                    <span key={hIdx} className="inline-flex items-center space-x-1.5 text-[10px] font-mono bg-stone-950 border border-stone-800 text-stone-200 px-2.5 py-1 rounded-md">
                      <CheckCircle2 size={11} className="text-gold-accent shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>

                {/* Editorial Quote Monologue Card */}
                <div className="border-l-2 border-gold-accent pl-3 sm:pl-4 py-1.5 sm:py-2 bg-stone-950/70 border border-stone-800/80 rounded-r-xl space-y-0.5">
                  <p className="text-xs sm:text-sm font-serif italic text-stone-300">
                    {currentChapter.quote}
                  </p>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-gold-accent uppercase tracking-wider block">
                    — {currentChapter.quoteAuthor}
                  </span>
                </div>

                <div className="pt-1">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-stone-950 bg-gold-accent hover:bg-[#b0936b] px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg"
                  >
                    <span>Consult on {currentChapter.label}</span>
                    <ArrowRight size={13} className="sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>


      {/* 
        ====================================================================
        3. TACTILE MATERIAL ATELIER (MAGAZINE MATERIAL SWATCHES)
        ====================================================================
      */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-gold-accent" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold text-stone-700">
                TACTILE MATERIAL ATELIER
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
              Raw Materials, <span className="text-gold-accent">Refined Finishes</span>
            </h2>
            <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
              We source certified, high-grade timber, Italian marble, and German hardware—testing every surface for durability, grain harmony, and acoustic resonance.
            </p>
          </div>

          {/* Swatch Selector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materialSwatches.map((swatch, sIdx) => {
              const isActive = sIdx === activeSwatch;
              return (
                <button
                  key={swatch.id}
                  onClick={() => setActiveSwatch(sIdx)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between group ${
                    isActive
                      ? "bg-stone-950 text-white border-gold-accent shadow-2xl scale-[1.02]"
                      : "bg-[#faf9f6] border-stone-200 text-stone-900 hover:border-gold-accent/60 hover:bg-white"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden relative border border-stone-200/60">
                      <img
                        src={swatch.image}
                        alt={swatch.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-stone-950/80 text-gold-accent text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded">
                        {swatch.tag}
                      </div>
                    </div>

                    <div>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest block ${isActive ? "text-gold-accent" : "text-stone-500"}`}>
                        {swatch.category}
                      </span>
                      <h3 className={`text-base font-bold mt-0.5 ${isActive ? "text-white" : "text-stone-950"}`}>
                        {swatch.name}
                      </h3>
                    </div>
                  </div>

                  <div className="border-t border-stone-200/40 pt-3 flex items-center justify-between text-xs font-mono">
                    <span className={isActive ? "text-stone-400" : "text-stone-500"}>{swatch.specCode}</span>
                    <ArrowUpRight size={14} className={isActive ? "text-gold-accent" : "text-stone-400"} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Swatch Detail Spotlight Panel */}
          <div className="bg-[#faf9f6] border border-stone-200/80 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md">
            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 relative">
              <img
                src={currentSwatch.image}
                alt={currentSwatch.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-stone-950/80 text-gold-accent text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-lg">
                ORIGIN &bull; {currentSwatch.origin}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-gold-accent text-xs font-mono font-bold uppercase tracking-widest block">
                SPECIFICATION BLUEPRINT &bull; {currentSwatch.specCode}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
                {currentSwatch.name}
              </h3>
              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                {currentSwatch.desc}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <div className="bg-white border border-stone-200 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-stone-800">
                  ORIGIN: {currentSwatch.origin}
                </div>
                <div className="bg-white border border-stone-200 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-gold-accent">
                  GUARANTEE: {currentSwatch.tag}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 
        ====================================================================
        4. CURATED MAGAZINE GALLERY SPREAD (MASONRY COMPOSITION)
        ====================================================================
      */}
      <section className="py-20 md:py-32 bg-[#0c0a09] text-white relative overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
          
          <div className="text-left space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-gold-accent/15 border border-gold-accent/30 text-gold-accent px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
              <Eye size={14} />
              <span>SPATIAL GALLERY &bull; CURATED MONOGRAPH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A Visual Tour of <span className="text-gold-accent">Executed Art</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {monographGallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${item.span} rounded-3xl overflow-hidden relative border border-stone-800 group cursor-pointer shadow-xl`}
                onClick={() => setActiveLightbox(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
                  <span className="text-[10px] font-mono text-gold-accent font-bold uppercase tracking-widest block">
                    {item.category} &bull; {item.location}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>

                <div className="absolute top-4 right-4 bg-stone-950/80 p-2 rounded-full text-gold-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 
        ====================================================================
        5. PASSAGE OF TIME TIMELINE (MAGAZINE HISTORICAL CHRONICLE)
        ====================================================================
      */}
      <section className="py-20 md:py-32 bg-[#faf9f6] border-b border-stone-200/60 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
          
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-gold-accent" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold text-stone-700">
                THE PASSAGE OF TIME
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
              Our Journey Through <span className="text-gold-accent">Milestones</span>
            </h2>
          </div>

          {/* Interactive Year Badges */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 py-2 px-2">
            {timelineEvents.map((evt, idx) => {
              const isActive = idx === activeTimeline;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTimeline(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer border ${
                    isActive
                      ? "bg-stone-950 text-gold-accent border-gold-accent shadow-md scale-105"
                      : "bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-stone-900"
                  }`}
                >
                  {evt.year}
                </button>
              );
            })}
          </div>

          {/* Milestone Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTimeline}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-stone-200/80 rounded-3xl p-8 sm:p-12 text-left shadow-xl space-y-4 relative max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-accent">
                  {currentTimeline.year}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase font-bold">
                  MILESTONE {activeTimeline + 1} OF {timelineEvents.length}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                {currentTimeline.title}
              </h3>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                {currentTimeline.description}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-stone-500">
                <span>Suthar Interior Studio History</span>
                <span className="text-gold-accent font-bold">1989 &ndash; Present</span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>


      {/* 
        ====================================================================
        6. STUDIO GUILD LEADERSHIP
        ====================================================================
      */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-gold-accent" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold text-stone-700">
                STUDIO LEADERSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
              The Minds Behind Our <span className="text-gold-accent">Spatial Legacy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#faf9f6] border border-stone-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 text-left group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-stone-950 overflow-hidden relative border-b border-stone-100">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md text-gold-accent text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                      {leader.experience}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-gold-accent uppercase block">
                        {leader.role}
                      </span>
                      <h3 className="text-lg font-bold text-stone-950 mt-0.5">
                        {leader.name}
                      </h3>
                    </div>
                    <p className="text-stone-600 text-xs font-light leading-relaxed">
                      {leader.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* PROVEN METRICS STATS */}
      <Stats />


      {/* ON-SITE EXPERIENCE SHOWCASE */}
      <ExperienceShowcase onBackToHome={onBackToHome} />


      {/* 
        ====================================================================
        7. FINAL CALL TO ACTION (DARK LUXURY MONOGRAPH SHOWCASE)
        ====================================================================
      */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 bg-[#0c0a09] text-white border-t border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.ctaBg}
            alt="Spatial masterpiece backdrop"
            className="w-full h-full object-cover opacity-20 filter brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/90 to-[#0c0a09]/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-gold-accent text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              LET'S CREATE A SPATIAL MASTERPIECE
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
              Let's Build Something <br />
              <span className="text-gold-accent">Extraordinary</span> Together.
            </h2>
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed pt-2">
              Whether you're designing a new home, renovating an existing space, or planning a commercial showroom, our experienced architects and craftsmen are ready to bring your vision to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-[#b0936b] px-8 py-4 sm:py-5 rounded-full cursor-pointer shadow-xl hover:scale-[1.02]"
            >
              <span>Book Free Consultation</span>
              <div className="w-7 h-7 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:py-5 border border-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-white/10 hover:bg-white/15 cursor-pointer hover:border-gold-accent hover:text-gold-accent"
            >
              Explore Our Portfolio
            </button>
          </div>
        </div>
      </section>


      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveLightbox(null)}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 text-white hover:text-gold-accent p-3 rounded-full bg-stone-900 border border-stone-700 cursor-pointer transition-colors"
            >
              <X size={20} />
            </button>

            <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-stone-800 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={activeLightbox}
                alt="Full resolution architectural monograph preview"
                className="w-full h-full object-contain max-h-[85vh]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
