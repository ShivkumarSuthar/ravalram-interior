import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// Local asset imports
import coastalImg from "../assets/images/antra_project_coastal_1782744299850.jpg";
import loftImg from "../assets/images/antra_project_loft_1782744318019.jpg";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";
import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";

const servicesData = [
  {
    id: "01",
    title: "Residential Interior Design",
    image: coastalImg,
    description: "Tailored residential space planning, bespoke joinery, and complete luxury home transformations."
  },
  {
    id: "02",
    title: "Outdoor & Landscape Design",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    description: "Creating seamless indoor-outdoor living, luxury deck lounges, and architectural landscaping."
  },
  {
    id: "03",
    title: "Interior Design Consultation",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
    description: "Providing professional advice on concepts, color schemes & material selection."
  },
  {
    id: "04",
    title: "Commercial Interior Design",
    image: transitionImg,
    description: "Designing ergonomic corporate offices, luxury showrooms, retail flagships, and hospitality venues."
  },
  {
    id: "05",
    title: "Renovation And Remodeling",
    image: aboutImg,
    description: "Full spatial redesign, structural modifications, demolition, rebuild, and bespoke finish styling."
  },
  {
    id: "06",
    title: "Interior 2D/3D Layouts",
    image: loftImg,
    description: "High-precision architectural floor plans, photorealistic 3D renderings, and virtual walkthroughs."
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(2); // Item 03 selected by default like reference image

  const activeService = servicesData[activeIndex];

  return (
    <section id="services" className="bg-[#faf9f6] py-20 md:py-32 overflow-hidden relative">
      {/* Subtle Blueprint watermark in background */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-[0.05] z-0 overflow-hidden hidden lg:block">
        <svg viewBox="0 0 800 800" className="w-full h-full text-stone-900 stroke-current" fill="none" strokeWidth="1">
          <path d="M100 700 L400 500 L700 700 Z M400 500 L400 200 L100 400 L100 700 M400 200 L700 400 L700 700 M100 400 L400 200 L700 400 M100 400 L400 500 L700 400" />
          <path d="M150 650 L380 490 M420 490 L650 650 M150 430 L380 270 M420 270 L650 430" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block matching exact reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14 md:mb-20">
          
          {/* Left Pill Tag */}
          <div className="lg:col-span-3 text-left">
            <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100/90 px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-700">
                OUR SERVICES
              </span>
            </div>
          </div>

          {/* Right Heading and Subtitle */}
          <div className="lg:col-span-9 text-left space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
              Explore Our <span className="text-[#c5a880]">Comprehensive</span><br />
              <span className="text-[#c5a880]">Interior Design</span> Services
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base leading-relaxed max-w-2xl pt-1">
              We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
            </p>
          </div>

        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Image Card with Floating Description Box */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.25/1] rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl bg-stone-900 border border-stone-200/60 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover filter brightness-[0.95]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>

              {/* Floating Dark Glass Description Box at bottom left */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs md:max-w-sm bg-[#3a3a3a]/85 backdrop-blur-md text-white p-5 sm:p-6 rounded-[20px] shadow-2xl border border-white/10 z-20">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeService.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="text-xs sm:text-sm font-light leading-relaxed text-stone-100"
                  >
                    {activeService.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Interactive Service List */}
          <div className="lg:col-span-6 space-y-1">
            {servicesData.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="py-4 sm:py-5 md:py-5.5 border-b border-stone-200/80 flex items-center justify-between cursor-pointer group transition-colors duration-300"
                >
                  {/* Left Number & Title */}
                  <div className="flex items-center space-x-4 sm:space-x-6 text-left">
                    <span
                      className={`text-sm sm:text-base font-bold font-mono tracking-wider transition-colors duration-300 ${
                        isActive ? "text-[#c5a880]" : "text-stone-400 group-hover:text-[#c5a880]"
                      }`}
                    >
                      {service.id}
                    </span>
                    <h3
                      className={`text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "text-[#c5a880]"
                          : "text-stone-900 group-hover:text-[#c5a880]"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Right Arrow Icon */}
                  <div className="shrink-0 ml-4">
                    {isActive ? (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#c5a880] text-white flex items-center justify-center shadow-md transition-transform duration-300 scale-105">
                        <ArrowRight size={18} strokeWidth={2.5} />
                      </div>
                    ) : (
                      <div className="text-stone-700 group-hover:text-[#c5a880] transition-colors duration-300 pr-1">
                        <ArrowUpRight size={20} strokeWidth={2} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
