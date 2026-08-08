import { motion } from "motion/react";
import {
  Compass,
  Home,
  Building2,
  Layers,
  Sparkles,
  Hammer,
  Ruler,
  Workflow,
  Sliders,
  Paintbrush
} from "lucide-react";

const BRAND_LOGOS = [
  { name: "TREND INTERIORS", subtitle: "ARCHITECTURAL DESIGN", Icon: Compass },
  { name: "INTERIOR PREMIUM", subtitle: "BESPOKE SPACES", Icon: Home },
  { name: "BUILDING CONSTRUCTION", subtitle: "STRUCTURAL ENGINEERING", Icon: Building2 },
  { name: "ARCHITECT STUDIO", subtitle: "SPATIAL CONCEPT", Icon: Layers },
  { name: "LUXE DESIGN", subtitle: "RESIDENTIAL FINISHES", Icon: Sparkles },
  { name: "STONE & WOOD", subtitle: "TIMBER & JOINERY", Icon: Hammer },
  { name: "CRAFT LAB", subtitle: "ARTISANAL MILLWORK", Icon: Ruler },
  { name: "SPATIAL DESIGN", subtitle: "MODERN LIVING", Icon: Workflow },
  { name: "URBAN STUDIO", subtitle: "COMMERCIAL & VILLAS", Icon: Sliders },
  { name: "MONOLITH", subtitle: "ARCHITECTURAL FOUNDATION", Icon: Paintbrush },
];

export default function Stats() {
  const doubleLogos = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="py-16 md:py-20 bg-bg-base relative overflow-hidden border-t border-b border-stone-200/80 select-none">
      
      {/* Subtle Section Header Label */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
        <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-stone-400 uppercase">
          SELECTED ARCHITECTURAL ALLIANCES &amp; DISCIPLINE PARTNERSHIPS
        </span>
      </div>

      {/* Continuous Infinite Marquee Track */}
      <div className="group relative flex overflow-hidden py-3">
        
        {/* Subtle Gradient Edge Fades for Luxury Editorial Framing */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-bg-base via-bg-base/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-bg-base via-bg-base/90 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
          className="flex items-center space-x-12 sm:space-x-20 md:space-x-28 shrink-0 group-hover:[animation-play-state:paused]"
        >
          {doubleLogos.map((brand, idx) => {
            const BrandIcon = brand.Icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-3.5 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 group/brand cursor-default"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-stone-200/50 border border-stone-300/60 flex items-center justify-center text-stone-700 group-hover/brand:border-stone-800 group-hover/brand:text-stone-950 group-hover/brand:bg-white transition-all duration-300 shadow-xs">
                  <BrandIcon size={18} strokeWidth={1.5} />
                </div>
                <div className="text-left space-y-0.5">
                  <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#2B2B2B] group-hover/brand:text-stone-950 uppercase block font-sans transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-stone-400 font-medium tracking-widest uppercase block transition-colors whitespace-nowrap">
                    {brand.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

