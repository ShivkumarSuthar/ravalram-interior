import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Sparkles, ShieldCheck, ArrowRight, Award, Flame, Star, BookOpen } from "lucide-react";

// local images
import coastalImg from "../assets/images/antra_project_coastal_1782744299850.jpg";
import loftImg from "../assets/images/antra_project_loft_1782744318019.jpg";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";
import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";
import bannerImg from "../assets/images/antra_lobby_banner_1782744283860.jpg";

const timelineEvents = [
  {
    year: "2013",
    title: "Genesis of Antra",
    image: aboutImg,
    description: "Antra was founded as a small bespoke design workshop in Spokane, specializing in crafting customized wood-and-stone residential sanctuaries with absolute focus on organic lighting."
  },
  {
    year: "2017",
    title: "Commercial Expansion",
    image: loftImg,
    description: "Secured major projects across Seattle and Malibu. Developed our unique 'Bento-Grid Space planning' method, winning local architecture awards for office remodeling."
  },
  {
    year: "2021",
    title: "The Sustainable Era",
    image: transitionImg,
    description: "Integrated certified green technologies, partnering with European sustainable timber mills and carbon-neutral travertine suppliers to deliver certified eco-luxury."
  },
  {
    year: "2026",
    title: "Global Landmarks",
    image: coastalImg,
    description: "Today, Antra operates globally, defining the standard for quiet high-end modern living. We combine master craftsmanship with fully immersive photorealistic 3D virtualizations."
  }
];

const coreValues = [
  {
    id: "01",
    icon: Compass,
    title: "Architectural Honesty",
    description: "We use raw, authentic materials—solid oak, hand-cut travertine, concrete—celebrating their texture, durability, and natural aging process without artificial finishes."
  },
  {
    id: "02",
    icon: Sparkles,
    title: "Luminous Drama",
    description: "We orchestrate deep shadow-zones and linear light tunnels. We design custom linear lux-fields to ensure spaces shift atmosphere naturally from dawn to dusk."
  },
  {
    id: "03",
    icon: ShieldCheck,
    title: "Bespoke Curation",
    description: "No templates, no repetitions. Every floor layout, material board, and furniture piece is co-created with the resident, ensuring it perfectly mirrors their habits."
  }
];

export default function AboutPage({ onBackToHome, onOpenQuote }) {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-500 selection:text-stone-950 pt-[80px]">
      
      {/* 1. HERO BREADCRUMB HEADER */}
      <section className="relative h-[40vh] md:h-[50vh] bg-stone-950 text-white flex flex-col justify-center overflow-hidden">
        {/* Dark textured overlay image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImg}
            alt="About Us Banner Background"
            className="w-full h-full object-cover opacity-25 filter grayscale scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        </div>

        {/* Floating gridlines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-3 gap-12 px-6">
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
            <span className="text-gold-500 font-bold">ABOUT US</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white leading-none uppercase"
          >
            We Are <span className="font-serif italic text-gold-500 font-normal">Antra Studio</span>
          </motion.h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
            Quiet luxury, bespoke architectural design, and master craftsmanship. Discover the journey, values, and vision that define our global team.
          </p>
        </div>
      </section>

      {/* 2. THE ANTRA STORY - SPLIT LAYOUT */}
      <section className="py-24 md:py-32 overflow-hidden bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Beautiful Overlapping Images */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4">
                {/* Large high image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="col-span-8 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-stone-200"
                >
                  <img
                    src={aboutImg}
                    alt="Antra Story staircase"
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Overlapping small image */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="col-span-6 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white absolute right-2 bottom-[-40px] z-10 w-52 sm:w-64"
                >
                  <img
                    src={transitionImg}
                    alt="Bespoke luxury interior details"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Decorative circular design mark */}
              <div className="absolute top-[-30px] right-8 w-24 h-24 rounded-full border border-dashed border-gold-500/30 flex items-center justify-center animate-spin-slow select-none pointer-events-none hidden sm:flex">
                <span className="text-[7px] uppercase tracking-[0.25em] font-mono text-stone-300 font-bold">EST. 2013 • ANTRA STUDIO • </span>
              </div>
            </div>

            {/* Right side: Elegant detailed texts */}
            <div className="lg:col-span-6 space-y-8 text-left lg:pl-6 pt-12 lg:pt-0">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <span className="text-gold-500 text-xs">✦</span>
                  <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                    OUR HERITAGE
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                  Crafting <span className="font-serif italic text-gold-500 font-normal">Atmospheres</span> That <br />
                  Stir <span className="font-serif italic text-gold-500 font-normal">The Soul</span> & Inspire
                </h2>
              </div>

              <div className="space-y-6 text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                <p>
                  Founded by visionary developer Antra, we refuse the temporary trends of fast interior decoration. Instead, we approach architecture from a structural and sensory perspective, designing homes that feel like quiet, personal galleries.
                </p>
                <p>
                  Every layout we build evaluates ambient air motion, window sightline vectors, and shadow depths. By choosing only premium materials like authentic European oak, hand-selected slate, and unpolished travertine, our work develops an elegant patina over the years.
                </p>
                
                {/* Quote block */}
                <div className="border-l-2 border-gold-500 pl-4 py-1 bg-stone-50/50 italic text-stone-800 text-sm">
                  "Architecture is the silent language of structure. It speaks directly to the mind without needing words."
                  <span className="block text-xs uppercase font-mono tracking-widest text-gold-600 font-bold not-italic mt-2">— Antra, Founder</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center space-x-3 text-stone-950 hover:text-gold-600 font-bold text-xs tracking-widest uppercase transition-all duration-300 group cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <div className="w-8 h-8 rounded-full border border-gold-500 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-stone-950 transition-all duration-300">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES - BENTO GRID GLOW */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden border-t border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="text-gold-500 text-xs">✦</span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                OUR IDEOLOGY
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
              Our Core <span className="font-serif italic text-gold-500 font-normal">Design Principles</span>
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
              We guide every single brick and wood panel with uncompromising dedication to these foundational pillars of architectural craft.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.id}
                  className="group relative bg-white border border-stone-200/60 p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-start text-left hover:border-gold-500/20 overflow-hidden"
                >
                  {/* Gold radial background hover pulse */}
                  <div className="absolute inset-0 bg-radial-[circle_at_top_right,_transparent_60%,_rgba(197,168,128,0.02)_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* ID badge and Icon row */}
                  <div className="w-full flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-stone-50 text-gold-600 flex items-center justify-center border border-stone-100 group-hover:bg-gold-500 group-hover:text-stone-950 transition-all duration-500 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <span className="font-serif text-3xl text-stone-200 group-hover:text-gold-500/40 transition-colors duration-500 font-bold">
                      {val.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-stone-900 group-hover:text-gold-500 transition-colors duration-300 mb-3">
                    {val.title}
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE ACHIEVEMENTS TIMELINE */}
      <section className="py-24 md:py-32 bg-stone-950 text-white relative overflow-hidden">
        {/* Absolute Background gold radial accent */}
        <div className="absolute left-0 bottom-0 w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/5 via-stone-950/0 to-stone-950/0 opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-24">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2">
                <span className="text-gold-500 text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-400 block">
                  TIMELINE OF EXCELLENCE
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                Our Journey <span className="font-serif italic text-gold-500 font-normal">Through Creative</span> <br />
                Milestones & <span className="font-serif italic text-gold-500 font-normal">Evolution</span>
              </h2>
            </div>
            <div className="lg:col-span-5 text-left lg:pl-6">
              <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed">
                Click on the milestone years below to see how Antra evolved from a small organic design workshop into an award-winning international architecture firm.
              </p>
            </div>
          </div>

          {/* Interactive Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Interactive Year Buttons */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col justify-start gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-l border-stone-800 lg:pl-6">
              {timelineEvents.map((evt, idx) => {
                const isActive = activeYear === idx;
                return (
                  <button
                    key={evt.year}
                    onClick={() => setActiveYear(idx)}
                    className="flex items-center space-x-4 text-left shrink-0 cursor-pointer group focus:outline-none"
                  >
                    {/* Active Golden Bar indicator (vertical in desktop, horizontal in mobile) */}
                    <div className={`hidden lg:block w-1.5 h-10 -ml-[30px] transition-all duration-300 ${isActive ? "bg-gold-500 scale-100" : "bg-transparent scale-0"}`} />
                    
                    <div>
                      <span className={`text-2xl sm:text-3xl font-serif font-light block transition-all duration-300 ${isActive ? "text-gold-500 scale-105" : "text-stone-500 group-hover:text-stone-300"}`}>
                        {evt.year}
                      </span>
                      <span className={`text-[10px] uppercase tracking-widest font-bold block ${isActive ? "text-white" : "text-stone-600"}`}>
                        {evt.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Sliding Content Card */}
            <div className="lg:col-span-8 bg-stone-900/60 border border-white/5 p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYear}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center text-left"
                >
                  {/* Photo Column */}
                  <div className="sm:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-stone-950 border border-white/5 shadow-xl">
                    <img
                      src={timelineEvents[activeYear].image}
                      alt={timelineEvents[activeYear].title}
                      className="w-full h-full object-cover filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Text Description Column */}
                  <div className="sm:col-span-7 space-y-4">
                    <span className="text-gold-500 text-xs font-mono font-bold tracking-widest uppercase">
                      MILESTONE HIGHLIGHT
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-white">
                      {timelineEvents[activeYear].title}
                    </h3>
                    <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
                      {timelineEvents[activeYear].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BIG PHILOSOPHY / QUOTE SLIDER */}
      <section className="py-24 bg-white relative overflow-hidden text-center border-b border-stone-200/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 mx-auto mb-8">
            <BookOpen size={18} />
          </div>
          <h2 className="text-xl md:text-3xl font-serif font-light italic leading-relaxed text-stone-800">
            &ldquo;We don't simply design buildings; we shape the experiences within them. Our goal is to synthesize quiet organic atmospheres that foster productivity, comfort, and absolute creative peace.&rdquo;
          </h2>
          <span className="block text-xs uppercase font-mono tracking-[0.25em] text-stone-400 font-bold mt-6">
            ANTRA’S CENTRAL BRAND IDEOLOGY
          </span>
        </div>
      </section>

      {/* 6. CALL TO ACTION INNER SECTION */}
      <section className="bg-stone-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8">
          <div className="space-y-4">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold font-mono">
              COLLABORATE WITH US
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Ready To Create Your <span className="font-serif italic text-gold-500 font-normal">Bespoke</span> Space?
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
              Connect directly with our Spokane-based lead architectural consultants. Let's sketch out your floorplans, explore custom lighting, and schedule a private showroom walkthrough.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-stone-950 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer hover:shadow-gold-500/10"
            >
              Get Free Consultation
            </button>
            <button
              onClick={onBackToHome}
              className="px-8 py-3.5 border border-stone-800 hover:border-gold-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5 cursor-pointer"
            >
              Explore Portfolio
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
