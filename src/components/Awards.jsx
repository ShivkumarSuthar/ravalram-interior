import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const awards = [
  {
    year: "2025",
    title: "Best Residential Design",
    category: "Interior Design",
    description: "Awarded to Suthar's Malibu Coastal Villa for seamless integration of natural outdoor sightlines with minimalist indoor travertine architecture."
  },
  {
    year: "2024",
    title: "Top Commercial Design",
    category: "Architecture",
    description: "Presented for our design of the Nexus Executive Offices, redefining workspaces with sound-insulating fluted wood and natural light shafts."
  },
  {
    year: "2023",
    title: "Sustainable Design Award",
    category: "Community Center",
    description: "Recognized for our research in tactile room acoustics and sustainable European oak material sourcing protocols."
  },
  {
    year: "2022",
    title: "Creative Office Space Award",
    category: "Corporation Building",
    description: "Celebrating innovative layout plans that combine collaborative bento-grid desk clusters with soundproof cocoon relaxation libraries."
  },
  {
    year: "2020",
    title: "Emerging Designer Of The Year",
    category: "Interior Design",
    description: "Honoring Suthar's initial signature layouts showing high potential in premium, eye-safe warm lighting systems and raw stone finishes."
  }
];

export default function Awards() {
  const [activeAward, setActiveAward] = useState(0);

  return (
    <section className="bg-stone-950 text-white py-24 md:py-32 relative overflow-hidden">
      {/* Absolute Radial Gradient background glow */}
      <div className="absolute right-0 top-0 w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c5a880]/10 via-stone-950/0 to-stone-950/0 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and Trophy Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-[#c5a880] text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-400 block">
                  HALL OF EXCELLENCE
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight uppercase">
                Design That <span className="font-serif italic text-[#c5a880] font-normal lowercase">Speaks Our</span> <br />
                <span className="font-serif italic text-[#c5a880] font-normal lowercase">Industry</span> Awards
              </h2>
            </div>

            {/* Glowing Golden Trophy Card exactly like the reference image */}
            <div className="relative w-64 aspect-square bg-stone-900 border border-[#c5a880]/20 flex flex-col items-center justify-center p-8 shadow-2xl overflow-hidden group rounded-none">
              {/* Gold glowing grid overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#c5a880]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Ribbon decoration "BEST" */}
              <div className="absolute top-4 left-4 bg-[#c5a880] text-stone-950 text-[9px] uppercase font-black tracking-widest px-3 py-1">
                BEST
              </div>

              {/* Sculpted Trophy Art */}
              <div className="relative w-20 h-20 bg-stone-950 border border-[#c5a880]/30 rounded-full flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                <svg className="w-10 h-10 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                  <path strokeLinecap="round" d="M12 18v3m-3 0h6" />
                </svg>
              </div>

              <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-bold font-mono mt-4">EST. 1989</span>
              <h3 className="text-white font-medium text-sm text-center mt-2 font-serif tracking-wide">Gold Standard Craft</h3>
            </div>
          </div>

          {/* Right Column: Interactive Awards List */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {awards.map((award, index) => {
              const isSelected = activeAward === index;
              return (
                <div
                  key={award.year}
                  onMouseEnter={() => setActiveAward(index)}
                  className={`border-b border-stone-800 pb-5 pt-3 transition-colors duration-300 cursor-pointer text-left ${
                    isSelected ? "border-[#c5a880]/50" : "border-stone-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <span className={`text-sm font-mono tracking-wider font-semibold ${isSelected ? "text-[#c5a880]" : "text-stone-500"}`}>
                        {award.year}
                      </span>
                      <h3 className={`text-base md:text-lg font-serif transition-colors duration-300 ${isSelected ? "text-white" : "text-stone-400"}`}>
                        {award.title}
                      </h3>
                    </div>
                    <span className={`text-xs uppercase font-bold font-mono tracking-widest hidden md:inline transition-colors duration-300 ${
                      isSelected ? "text-[#c5a880]" : "text-stone-600"
                    }`}>
                      {award.category}
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
    </section>
  );
}
