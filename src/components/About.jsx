import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  Compass,
  Workflow,
  Hammer,
  Sparkles,
  ArrowRight,
  Building2,
  SlidersHorizontal,
  CheckCircle2,
  Navigation
} from "lucide-react";
const aboutImg = "/assets/images/AI_images/antra_about_side_1782744266546.jpg";
const transitionImg = "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";
const isometricPlan = "/assets/images/isometric_floor_plan_1784822786880.jpg";
const pavilionImg = "/assets/images/architectural_pavilion_1784821025997.jpg";

const locations = [
  {
    id: "mumbai",
    num: "01",
    city: "Mumbai",
    category: "Metropolitan",
    badge: "Metro Flagship",
    coordinates: "19.0760° N, 72.8777° E",
    projectsCount: "42+ Completed Sites",
    dispatchSLA: "On-Site Architect Team",
    specialty: "Sea-facing Luxury Penthouses & Corporate Flagships",
    desc: "Our primary metropolitan operational base for double-height penthouses, luxury high-rise residences, and executive commercial headquarters.",
    highlights: ["Linking Road Showroom Studio", "Statuario Marble & Teak Joinery", "Full Turnkey Design-Build"],
    image: pavilionImg
  },
  {
    id: "pune",
    num: "02",
    city: "Pune",
    category: "Metropolitan",
    badge: "Urban Residences",
    coordinates: "18.5204° N, 73.8567° E",
    projectsCount: "28+ Completed Sites",
    dispatchSLA: "Daily Site Supervision",
    specialty: "Modern Villa Remodeling & Modular Systems",
    desc: "Architect-supervised duplex apartments, private gated villas, and customized modular kitchen/wardrobe installations across Koregaon Park and Baner.",
    highlights: ["Bespoke Timber Paneling", "Acoustic Partition Design", "Civil Structural Redesign"],
    image: transitionImg
  },
  {
    id: "goa",
    num: "03",
    city: "Goa",
    category: "Coastal",
    badge: "Coastal Estates",
    coordinates: "15.2993° N, 74.1240° E",
    projectsCount: "21+ Completed Sites",
    dispatchSLA: "Dedicated Project Managers",
    specialty: "Weather-Resistant Coastal Villa Joinery",
    desc: "Boutique holiday estates and luxury beachfront villas featuring weather-treated solid teak, open-plan verandahs, and resort-style hospitality interiors.",
    highlights: ["Marine-Grade Timber Finishes", "Open-Plan Living Layouts", "Bespoke Outdoor Lounge Joinery"],
    image: isometricPlan
  },
  {
    id: "bengaluru",
    num: "04",
    city: "Bengaluru",
    category: "Metropolitan",
    badge: "Modern Tech Spaces",
    coordinates: "12.9716° N, 77.5946° E",
    projectsCount: "35+ Completed Sites",
    dispatchSLA: "Architect Supervision",
    specialty: "Ergonomic Corporate HQ & High-Rise Apartments",
    desc: "Seamless blend of high-tech ergonomic workspaces and sleek minimalist residential interiors tailored for modern urban professionals.",
    highlights: ["Acoustic Wall Paneling", "Smart Home Automation", "Custom Executive Desks"],
    image: pavilionImg
  },
  {
    id: "hyderabad",
    num: "05",
    city: "Hyderabad",
    category: "Metropolitan",
    badge: "Bespoke Homes",
    coordinates: "17.3850° N, 78.4867° E",
    projectsCount: "19+ Completed Sites",
    dispatchSLA: "Custom Manufacturing Direct",
    specialty: "Grand Spatial Interiors & Double-Height Halls",
    desc: "Expansive luxury bungalows in Jubilee Hills and Gachibowli with custom brass-inlaid woodwork and Italian marble floorings.",
    highlights: ["Double-Height Chandelier Layouts", "Italian Marble Inlay", "Custom Wardrobe Systems"],
    image: transitionImg
  },
  {
    id: "hubballi",
    num: "06",
    city: "Hubballi",
    category: "Heritage Guild",
    badge: "Turnkey Execution",
    coordinates: "15.3647° N, 75.1240° E",
    projectsCount: "30+ Completed Sites",
    dispatchSLA: "Regional Site Office",
    specialty: "Full Civil Renovation & Retail Flagships",
    desc: "Complete interior redesign, commercial retail stores, structural demolition, and turnkey site execution managed by master craftsmen.",
    highlights: ["Turnkey Project Execution", "Commercial Retail Styling", "Custom Shopfitting Joinery"],
    image: isometricPlan
  },
  {
    id: "kumta",
    num: "07",
    city: "Kumta",
    category: "Heritage Guild",
    badge: "Heritage Guild Hub",
    coordinates: "14.4269° N, 74.4189° E",
    projectsCount: "Multi-Generational Legacy",
    dispatchSLA: "Master Joinery Workshop",
    specialty: "Foundational Timber Joinery & Factory Direct",
    desc: "Our multi-generational artisan woodworking workshop where raw timber is seasoned, carved, and pre-assembled by master guild craftsmen since 1989.",
    highlights: ["100% Solid Timber Craft", "Custom Furniture Factory", "Legacy Guild Artisans"],
    image: aboutImg
  },
  {
    id: "honnavar",
    num: "08",
    city: "Honnavar",
    category: "Coastal",
    badge: "Custom Remodeling",
    coordinates: "14.2803° N, 74.4447° E",
    specialty: "Private Coastal Homes & Modernization",
    projectsCount: "16+ Completed Sites",
    dispatchSLA: "On-Demand Site Survey",
    desc: "Private seaside residences and ancestral home modernization blending traditional woodworking roots with clean architectural aesthetics.",
    highlights: ["Ancestral Remodeling", "Natural Light Optimization", "Bespoke Teak Windows & Doors"],
    image: transitionImg
  },
  {
    id: "murudeshwar",
    num: "09",
    city: "Murudeshwar",
    category: "Coastal",
    badge: "Coastal Commercial",
    coordinates: "14.0940° N, 74.4892° E",
    projectsCount: "14+ Completed Sites",
    dispatchSLA: "Architect On-Site Inspections",
    specialty: "Resort Interiors & Hospitality Design",
    desc: "High-footfall hospitality spaces, resort reception halls, and coastal boutique villa interiors built to withstand tropical humidity.",
    highlights: ["Hospitality Joinery", "High-Traffic Durability", "Custom Receptive Desks"],
    image: pavilionImg
  },
  {
    id: "pan-india",
    num: "10",
    city: "Pan-India Scope",
    category: "Metropolitan",
    badge: "National Execution",
    coordinates: "Pan-India Network",
    projectsCount: "Select High-End Projects",
    dispatchSLA: "Pan-India Onboarding",
    specialty: "Custom Furniture Freight & Turnkey Contracts",
    desc: "We undertake bespoke luxury residential and commercial contracts nationwide, delivering factory-crafted joinery directly to site.",
    highlights: ["Nationwide Furniture Dispatch", "Pan-India Site Supervision", "Architectural Blueprints"],
    image: isometricPlan
  }
];

const highlights = [
  {
    title: "Architect-Led Execution",
    desc: "Every spatial layout is planned and supervised directly by senior architects.",
    icon: Compass
  },
  {
    title: "Flexible Contracting",
    desc: "Choose from labour contracts, turnkey design-build, or custom factory joinery.",
    icon: Workflow
  },
  {
    title: "Generational Craftsmanship",
    desc: "Multi-generational artisan guild crafting bespoke woodwork since 1989.",
    icon: Hammer
  },
  {
    title: "Tailored Customization",
    desc: "Zero generic templates—every project reflects your lifestyle and architectural vision.",
    icon: Sparkles
  }
];

export default function About({ setView }) {
  const [selectedLocIndex, setSelectedLocIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Metropolitan", "Coastal", "Heritage Guild"];

  const filteredLocations = locations.filter(loc => {
    if (activeFilter === "All") return true;
    return loc.category === activeFilter;
  });

  const selectedLoc = locations[selectedLocIndex] || locations[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="bg-[#faf9f6] py-20 md:py-32 overflow-hidden relative border-b border-stone-200/60">
      
      {/* Subtle architectural wireframe watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-[0.05] z-0 overflow-hidden hidden md:block">
        <svg viewBox="0 0 800 800" className="w-full h-full text-stone-900 stroke-current" fill="none" strokeWidth="1">
          <path d="M100 700 L400 500 L700 700 Z M400 500 L400 200 L100 400 L100 700 M400 200 L700 400 L700 700 M100 400 L400 200 L700 400 M100 400 L400 500 L700 400" />
          <path d="M150 650 L380 490 M420 490 L650 650 M150 430 L380 270 M420 270 L650 430" strokeDasharray="4 4" />
          <circle cx="400" cy="500" r="6" fill="currentColor" />
          <circle cx="400" cy="200" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-28 md:space-y-36">
        
        {/* PART 1: Brand Heritage & Story Intro */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Overlapping Image Cards */}
          <div className="lg:col-span-6 relative pb-12 lg:pb-0">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              
              {/* Top Main Card */}
              <motion.div 
                variants={itemVariants}
                className="w-[82%] aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl border border-stone-200/60 relative z-10"
              >
                <img
                  src={aboutImg}
                  alt="Suthar Interior Studio architectural design"
                  className="w-full h-full object-cover filter brightness-[0.95]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Overlapping Secondary Card */}
              <motion.div 
                variants={itemVariants}
                className="w-[76%] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#faf9f6] absolute right-0 bottom-[-30px] sm:bottom-[-40px] z-20"
              >
                <img
                  src={transitionImg}
                  alt="Sea-facing villa spatial layout"
                  className="w-full h-full object-cover filter brightness-[0.98]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Floating Gold Experience Badge */}
              <motion.div
                variants={itemVariants}
                className="absolute left-2 sm:left-4 bottom-[-20px] sm:bottom-[-30px] bg-[#CAA05C] text-white px-6 py-4 sm:px-8 sm:py-6 rounded-[22px] sm:rounded-[26px] shadow-2xl z-30 flex items-center space-x-3 sm:space-x-4 border-2 border-white/20"
              >
                <span className="text-3xl sm:text-4xl lg:text-7xl font-extrabold tracking-tight leading-none">
                  35+
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight text-white/95">
                    Years
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight text-white/95">
                    Legacy
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Story Copy & CTA */}
          <div className="lg:col-span-6 space-y-7 text-left pt-6 lg:pt-0">
            
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100/90 px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#CAA05C]" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-700">
                  SINCE 1989
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                Architecture And <span className="text-[#CAA05C]">Interiors,</span><br />
                <span className="text-[#CAA05C]">Our Dual</span> Expertise
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-xl">
              We believe that every space has the power to inspire. Our mission is to craft environments that stir creativity, evoke emotion, and reflect the essence of those who inhabit them through master carpentry, architect supervision, and turnkey design-build execution.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                  Residential Design
                </h3>
                <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                  Tailored luxury villas, penthouses, and bespoke furniture joinery.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                  Commercial & Turnkey
                </h3>
                <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                  Ergonomic corporate headquarters, showrooms, and end-to-end execution.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-3 border-t border-stone-200/80 space-y-1">
              <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block">
                OPERATIONAL FOOTPRINT
              </span>
              <p className="text-xs sm:text-sm font-medium text-stone-800 tracking-wide leading-relaxed font-mono">
                Executing Turnkey Projects Across 5+ Major Cities &amp; Coastal Hubs
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <button
                onClick={() => {
                  if (typeof setView === "function") {
                    setView("about-us");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center space-x-3 bg-stone-100 hover:bg-stone-200/80 border border-stone-300/80 px-6 py-3.5 rounded-full transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
              >
                <span className="text-xs font-bold tracking-wider uppercase text-stone-900">
                  Discover Our Story
                </span>
                <div className="w-8 h-8 rounded-full bg-[#CAA05C] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </button>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
