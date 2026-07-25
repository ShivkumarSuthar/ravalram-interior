import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Compass, Hammer, Sparkles, ChevronDown } from "lucide-react";

// Local high-quality project images
import loftImg from "../assets/images/antra_project_loft_1782744318019.jpg";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";

export default function WhyChooseUs({ setView }) {
  return (
    <section id="why-choose-us" className="bg-[#faf9f6] pt-16 sm:pt-24 md:pt-28 pb-10 relative overflow-hidden select-none border-b border-stone-200/60">
      
      {/* Container wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-10">
        
        {/* Outer White Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-stone-200/80 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl text-left relative overflow-hidden space-y-8"
        >
          {/* Section Header Eyebrow */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-5">
            <div className="inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-stone-500">
                OUR CORE ADVANTAGES
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-[#c5a880] hidden sm:inline-block">
              GENUINE CRAFTSMANSHIP • SINCE 1989
            </span>
          </div>

          {/* Bento Grid */}
          <div className="space-y-6">
            
            {/* Top Row: 3 Columns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              
              {/* Top-Left: Section Title & Subtitle */}
              <div className="p-4 sm:p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                    Why <br />
                    Choose Suthar <br />
                    Studio
                  </h2>
                  <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed max-w-xs pt-1">
                    This isn't just ordinary interior design. It's a complete spatial transformation built on generational trust and architect precision.
                  </p>
                </div>

                <div className="pt-4 flex items-center space-x-2 text-xs font-bold text-[#c5a880] uppercase tracking-wider">
                  <ShieldCheck size={16} />
                  <span>100% Quality Guaranteed</span>
                </div>
              </div>

              {/* Top-Middle Card: Warm Off-White / Cream Card */}
              <div className="bg-[#f5f2eb] border border-stone-200/70 rounded-[26px] p-7 md:p-8 flex flex-col justify-between min-h-[250px] group hover:shadow-xl hover:border-[#c5a880]/40 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white text-[#c5a880] flex items-center justify-center shadow-sm border border-stone-200/60">
                    <Hammer size={20} />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#c5a880] bg-white px-3 py-1 rounded-full border border-stone-200/50">01</span>
                </div>
                <div className="space-y-2 pt-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                    30+ Years Legacy
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    Combining multi-generational timber woodworking tradition with modern architectural thinking since 1989.
                  </p>
                </div>
              </div>

              {/* Top-Right Card: Soft Neutral Gray Card */}
              <div className="bg-stone-100/80 border border-stone-200/70 rounded-[26px] p-7 md:p-8 flex flex-col justify-between min-h-[250px] group hover:shadow-xl hover:border-[#c5a880]/40 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white text-[#c5a880] flex items-center justify-center shadow-sm border border-stone-200/60">
                    <Compass size={20} />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#c5a880] bg-white px-3 py-1 rounded-full border border-stone-200/50">02</span>
                </div>
                <div className="space-y-2 pt-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                    Architect-Led Precision
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    Supervised by experienced lead architects to guarantee structural accuracy, aesthetic integrity, and site perfection.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Row: 2 Asymmetric Bento Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Bottom-Left Wide Image Card (7 Cols) */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[320px] md:min-h-[340px] rounded-[26px] overflow-hidden shadow-md border border-stone-200/60 p-7 md:p-8 flex flex-col justify-between text-white group">
                {/* Background Image */}
                <img
                  src={loftImg}
                  alt="Suthar bespoke timber craftsmanship"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.78] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/35 to-stone-950/40 pointer-events-none" />

                {/* Top Title inside Image Card */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sparkles size={18} className="text-[#c5a880]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-300">
                      FACTORY-DIRECT JOINERY
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Bottom Description inside Image Card */}
                <div className="relative z-10 pt-8 max-w-md space-y-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                    Bespoke Custom Furniture
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-stone-200 leading-relaxed drop-shadow-sm">
                    Factory-direct customized timber joinery, modular kitchens, and custom wardrobe systems tailored specifically to your lifestyle.
                  </p>
                </div>
              </div>

              {/* Bottom-Right Image / Gradient Card (5 Cols) */}
              <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[320px] md:min-h-[340px] rounded-[26px] overflow-hidden shadow-md border border-stone-200/60 p-7 md:p-8 flex flex-col justify-between text-white group bg-stone-900">
                {/* Background Image */}
                <img
                  src={transitionImg}
                  alt="Turnkey luxury spatial architecture"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.72] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/50 pointer-events-none" />

                {/* Top Title inside Card */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-300">
                      ZERO-HASSLE SITE EXECUTION
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Bottom Description inside Card */}
                <div className="relative z-10 pt-8 max-w-sm space-y-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                    Turnkey Design-Build
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-stone-200 leading-relaxed drop-shadow-sm">
                    End-to-end execution: architecture, interior styling, lighting, procurement, and site management with guaranteed zero hassle.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* ELEGANT SEAMLESS SECTION BRIDGE / CONNECTOR LEADING DIRECTLY INTO FLEXIBLE SOLUTIONS */}
        <div className="pt-2 text-center flex flex-col items-center justify-center space-y-3">
          <div className="inline-flex items-center space-x-3 bg-stone-900 text-stone-200 border border-stone-800 px-6 py-2.5 rounded-full shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-ping" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em]">
              DISCOVER OUR FLEXIBLE SERVICE PATHWAYS BELOW
            </span>
            <ChevronDown size={14} className="text-[#c5a880] animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}
