import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles, Compass, Play, Pause } from "lucide-react";

// Local high quality interior images
const heroBg = "/assets/images/AI_images/antra_hero_bg_1782744248753.jpg";
const slide2 = "/assets/images/AI_images/antra_hero_slide2_1782747378004.jpg";
const slide3 = "/assets/images/AI_images/antra_hero_slide3_1782747396078.jpg";
const transitionImg = "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";

const solutionTabs = [
  {
    id: "tab-01",
    num: "01",
    title: "RENOVATION & REMODELING",
    heading: "Renovation & Structural Remodeling",
    tagline: "Turnkey Civil & Spatial Overhaul",
    desc: "Complete spatial redesign, structural modifications, wall removals, and flawless finish styling. We breathe new life into existing residences and commercial properties while preserving structural integrity.",
    features: ["Demolition & Civil Rebuilding", "Custom Timber Millwork", "Architect On-Site Supervision"],
    image: heroBg
  },
  {
    id: "tab-02",
    num: "02",
    title: "CUSTOM DESIGN CONSULTATION",
    heading: "Custom Design Consultation",
    tagline: "Tailored Material & Spatial Curation",
    desc: "Co-authoring the look and feel of your residence with tailored tactile boards, custom timber joinery samples, Italian marble selections, and personalized architectural consultations.",
    features: ["Tactile Material Samples", "Custom Timber Joinery Specs", "Lighting & Color Schematics"],
    image: slide2
  },
  {
    id: "tab-03",
    num: "03",
    title: "SPACE PLANNING & LAYOUT",
    heading: "Space Planning & Layout",
    tagline: "Ergonomic Architectural Zoning",
    desc: "Precision architectural zoning, functional ergonomics, natural light harvesting, and seamless circulation paths tailored specifically to your family's daily lifestyle and entertaining needs.",
    features: ["Ergonomic Flow Mapping", "Acoustic Partition Design", "Natural Light Optimization"],
    image: slide3
  },
  {
    id: "tab-04",
    num: "04",
    title: "3D DESIGN VISUALIZATION",
    heading: "3D Design Visualization",
    tagline: "Photorealistic Architectural Pre-Renders",
    desc: "Hyper-realistic photorealistic 3D architectural renders and isometric spatial walkthroughs allowing you to experience every material texture, lighting temperature, and layout detail before site execution.",
    features: ["100% Photorealistic Renders", "Material & Lighting Previews", "Zero On-Site Ambiguity"],
    image: transitionImg
  }
];

export default function FlexibleSolutions({ setView }) {
  const [activeTab, setActiveTab] = useState(3); // Default to 3D Design Visualization (04) as featured
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-cycle through service pathway tabs every 7 seconds unless paused by user interaction
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % solutionTabs.length);
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const current = solutionTabs[activeTab];

  const handleSelectTab = (idx) => {
    setActiveTab(idx);
    setIsPaused(true); // Pause auto-rotation when user manually selects a tab
  };

  return (
    <section
      id="solutions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full min-h-[660px] sm:min-h-[720px] bg-[#0c0a09] text-white overflow-hidden flex flex-col justify-between select-none border-t border-stone-800"
    >
      {/* Background Image Container with Smooth Motion Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={current.image}
            alt={current.heading}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.08]"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Multi-layered dark vignetting gradient for pristine legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/75 to-[#0c0a09]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/95 via-[#0c0a09]/70 to-[#0c0a09]/50 pointer-events-none" />
      </div>

      {/* Top Header Tag Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 w-full flex items-center justify-between border-b border-white/10 pb-5 text-left">
        <div className="inline-flex items-center space-x-2.5">
          <Sparkles size={16} className="text-gold-accent" />
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-stone-300">
            TAILORED SOLUTIONS • SERVICE PATHWAY {current.num}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-400 hover:text-gold-accent transition-colors cursor-pointer"
            title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
          >
            {isPaused ? <Play size={12} className="text-gold-accent" /> : <Pause size={12} />}
            <span>{isPaused ? "AUTO-SLIDE PAUSED" : "AUTO-SLIDE ACTIVE"}</span>
          </button>
          <div className="hidden sm:inline-flex items-center space-x-2 text-xs font-mono font-bold text-gold-accent">
            <Compass size={14} />
            <span>BUDGET & SCOPE FLEXIBILITY</span>
          </div>
        </div>
      </div>

      {/* Main Content Overlay Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 w-full my-auto text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-5"
          >
            {/* Tagline Badge */}
            <div className="inline-block bg-gold-accent/20 border border-gold-accent/40 text-gold-accent text-[11px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              {current.tagline}
            </div>

            {/* Giant Clean Title */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-md">
              {current.heading}
            </h2>

            {/* Subtitle / Description */}
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed pt-1 max-w-xl drop-shadow-sm">
              {current.desc}
            </p>

            {/* Deliverable Bullet Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {(current?.features || []).map((feat, i) => (
                <span key={i} className="inline-flex items-center space-x-2 text-xs font-medium bg-stone-900/90 border border-stone-700/80 text-stone-200 px-3.5 py-2 rounded-xl shadow-md">
                  <CheckCircle2 size={14} className="text-gold-accent" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>

            {/* Action CTA Link */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (typeof setView === "function") {
                    setView("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-gold-accent hover:bg-[#B88F4C] text-stone-950 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 group cursor-pointer shadow-xl hover:scale-[1.02]"
              >
                <span>BOOK CONSULTATION</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-consultation"));
                }}
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 px-5 py-4 rounded-full transition-all duration-300 cursor-pointer"
              >
                <MessageSquare size={14} className="text-gold-accent" />
                <span>Quick Inquiry</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Horizontal Interactive Tab Navigation Bar */}
      <div className="relative z-20 w-full bg-[#080707]/95 backdrop-blur-md border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 items-stretch relative">
          
          {solutionTabs.map((tab, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={tab.id}
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

                {/* Index Number */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-mono font-bold tracking-widest ${
                      isActive ? "text-gold-accent" : "text-stone-500 group-hover:text-stone-300"
                    }`}
                  >
                    {tab.num}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-gold-accent shadow-[0_0_8px_var(--color-gold-accent)]" />}
                </div>

                {/* Tab Title */}
                <span
                  className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase leading-snug ${
                    isActive ? "text-white" : "text-stone-400 group-hover:text-white"
                  }`}
                >
                  {tab.title}
                </span>
              </button>
            );
          })}

          {/* Floating Chat / Contact Button on Bottom Right */}
          <div className="absolute right-4 bottom-4 z-30 hidden lg:block">
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation"));
              }}
              className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-700 hover:border-gold-accent text-stone-300 hover:text-gold-accent flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer"
              aria-label="Open Chat Consultation"
            >
              <MessageSquare size={16} />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
