import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

// Local high quality interior images
import heroBg from "../assets/images/antra_hero_bg_1782744248753.jpg";
import slide2 from "../assets/images/antra_hero_slide2_1782747378004.jpg";
import slide3 from "../assets/images/antra_hero_slide3_1782747396078.jpg";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";

const solutionTabs = [
  {
    id: "tab-01",
    num: "01",
    title: "RENOVATION AND REMODELING",
    heading: "Renovation & Remodeling",
    tagline: "Turnkey Civil & Spatial Transformation",
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
    title: "SPACE PLANNING AND LAYOUT",
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
  const [activeTab, setActiveTab] = useState(1); // Default to tab 02

  const current = solutionTabs[activeTab];

  return (
    <section id="pricing" className="relative w-full min-h-[620px] sm:min-h-[680px] bg-[#0c0a09] text-white overflow-hidden flex flex-col justify-between select-none border-t border-stone-800">
      
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
            className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.08]"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Multi-layered dark vignetting gradient for pristine legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/70 to-[#0c0a09]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/90 via-transparent to-[#0c0a09]/80 pointer-events-none" />
      </div>

      {/* Top Header Tag Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-16 w-full flex items-center justify-between border-b border-white/10 pb-6 text-left">
        <div className="inline-flex items-center space-x-2.5">
          <Sparkles size={16} className="text-[#c5a880]" />
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-stone-300">
            TAILORED SOLUTIONS • SERVICE PATHWAY {current.num}
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-[#c5a880] hidden sm:block">
          BUDGET & SCOPE FLEXIBILITY
        </span>
      </div>

      {/* Main Content Overlay Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 w-full my-auto text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-4"
          >
            {/* Tagline Badge */}
            <div className="inline-block bg-[#c5a880]/20 border border-[#c5a880]/30 text-[#c5a880] text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
              {current.tagline}
            </div>

            {/* Giant Clean Title */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-md">
              {current.heading}
            </h2>

            {/* Subtitle / Description */}
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed pt-1 max-w-xl drop-shadow-sm">
              {current.desc}
            </p>

            {/* Deliverable Bullet Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {current.features.map((feat, i) => (
                <span key={i} className="inline-flex items-center space-x-1.5 text-xs font-medium bg-stone-900/90 border border-stone-700/80 text-stone-200 px-3 py-1.5 rounded-lg shadow-sm">
                  <CheckCircle2 size={13} className="text-[#c5a880]" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>

            {/* Action CTA Link */}
            <div className="pt-4">
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
                className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 px-6 py-3.5 rounded-full transition-all duration-300 group cursor-pointer shadow-lg"
              >
                <span>Book {current.heading} Consultation</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
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
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-5 sm:py-6 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 group border-r border-stone-800/80 last:border-r-0 ${
                  isActive
                    ? "bg-[#1c1a18] text-white border-t-2 border-t-[#c5a880]"
                    : "bg-transparent text-stone-400 hover:text-stone-200 hover:bg-white/5 border-t-2 border-t-transparent"
                }`}
              >
                {/* Index Number */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-mono font-bold tracking-widest ${
                      isActive ? "text-[#c5a880]" : "text-stone-500 group-hover:text-stone-300"
                    }`}
                  >
                    {tab.num}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />}
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
              className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-700 hover:border-[#c5a880] text-stone-300 hover:text-[#c5a880] flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer"
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
