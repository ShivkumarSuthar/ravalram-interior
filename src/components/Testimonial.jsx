import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Building2,
  Home,
  Layout,
  Compass,
  Ruler,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

// Local high quality project assets
import pavilionImg from "../assets/images/architectural_pavilion_1784821025997.jpg";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";
import heroBg from "../assets/images/antra_hero_bg_1782744248753.jpg";
import slide3 from "../assets/images/antra_hero_slide3_1782747396078.jpg";

const testimonials = [
  {
    id: "review-01",
    score: "4.92",
    reviewsCount: "2,650+ VERIFIED REVIEWS",
    highlight: "From Concept To Reality, The Team Turned My Vision Into A Stunning, Livable Space. I Couldn't Be Happier With The Result.",
    quote: "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process. The master timber joinery in our living room is an absolute showstopper.",
    author: "Morgan Dufresne",
    role: "Company Founder",
    location: "Mumbai Flagship",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    siteImage: pavilionImg
  },
  {
    id: "review-02",
    score: "4.98",
    reviewsCount: "ARCHITECT SUPERVISED",
    highlight: "Pristine Precision, Flawless Civil Execution & Zero On-Site Delays.",
    quote: "Suthar Studio renovated our 4,000 sq.ft duplex in Pune without a single hitch. Their lead architects managed every civil modification and custom wardrobe installation with utmost professionalism.",
    author: "Rajesh & Ananya Mehta",
    role: "Villa Owners",
    location: "Koregaon Park, Pune",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    siteImage: transitionImg
  },
  {
    id: "review-03",
    score: "5.00",
    reviewsCount: "WEATHER-PROOF JOINERY",
    highlight: "Custom Coastal Estate Finishes That Stand The Test Of Time.",
    quote: "Building a beachfront estate in Goa requires extreme material durability. Suthar's marine-grade teak joinery and open verandah layout exceeded all our expectations.",
    author: "Dr. Vikram Kulkarni",
    role: "Estate Client",
    location: "Coastal Goa",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
    siteImage: heroBg
  }
];

const partners = [
  { name: "TREND INTERIORS", icon: Layout },
  { name: "INTERIOR PREMIUM", icon: Home },
  { name: "BUILDING CONSTRUCTION", icon: Building2 },
  { name: "REAL ESTATE", icon: Home },
  { name: "BUILDING CONTRACTS", icon: Compass },
  { name: "ARCHITECT STUDIO", icon: Ruler }
];

export default function Testimonial({ setView }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-[#faf9f6] py-20 md:py-32 relative overflow-hidden select-none border-t border-stone-200/60">
      
      {/* Container Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-20 md:space-y-28">
        
        {/* PART 1: TESTIMONIAL HEADER & MAIN CARD BLOCK */}
        <div className="space-y-10">
          
          {/* Header Bar matching image */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100/90 px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-700">
                  OUR CLIENTS SAY
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                Here's What <span className="text-[#c5a880]">Warm Words</span> <br />
                Our Clients <span className="text-[#c5a880]">Say</span>
              </h2>
            </div>

            <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed max-w-md">
              Every spatial transformation is a partnership built on honest guidance, master craftsmanship, and architect supervision.
            </p>
          </div>

          {/* MAIN TESTIMONIAL TWO-COLUMN CARD */}
          <div className="bg-white border border-stone-200/80 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden text-left">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Architect / Site Inspection Image */}
              <div className="lg:col-span-6 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md border border-stone-200/60 group"
                  >
                    <img
                      src={current.siteImage}
                      alt="Site inspection by Suthar architects"
                      className="w-full h-full object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient bottom vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="bg-stone-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-bold">
                        ✦ ARCHITECT SUPERVISED SITE
                      </span>
                      <span className="bg-[#c5a880] text-stone-950 font-bold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider">
                        VERIFIED SITE
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Rating, Snippet, Quote, Author & Carousel Controls */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    {/* Rating Metric Header */}
                    <div className="flex items-center space-x-4 border-b border-stone-100 pb-4">
                      <span className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-none">
                        {current.score}
                      </span>
                      
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-[#c5a880] text-[#c5a880]" />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-wider text-stone-400 block uppercase">
                          {current.reviewsCount}
                        </span>
                      </div>
                    </div>

                    {/* Short Bold Highlight Snippet */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-stone-900 leading-snug">
                      "{current.highlight}"
                    </h3>

                    {/* Full Review Text */}
                    <p className="text-stone-600 font-light text-xs sm:text-sm leading-relaxed italic">
                      "{current.quote}"
                    </p>

                    {/* Author Profile Footer */}
                    <div className="pt-2 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#c5a880]/30 shadow-sm shrink-0">
                        <img
                          src={current.avatar}
                          alt={current.author}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="text-sm font-extrabold text-stone-900">
                          {current.author}
                        </h4>
                        <p className="text-xs font-mono text-[#c5a880] font-bold">
                          {current.role} &bull; <span className="text-stone-400">{current.location}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls Bar */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  {/* Indicator Dots */}
                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          currentIndex === idx ? "w-8 bg-[#c5a880]" : "w-2 bg-stone-200 hover:bg-stone-300"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrow Buttons */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-stone-200 hover:border-stone-900 bg-stone-50 hover:bg-stone-900 text-stone-800 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-stone-200 hover:border-stone-900 bg-stone-50 hover:bg-stone-900 text-stone-800 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* PART 2: VIP CUSTOMER & ARCHITECTURAL PARTNERS BRAND STRIP */}
        <div className="border-y border-stone-200/70 py-8 text-center space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[1px] bg-stone-200 w-12 sm:w-20" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500">
              OUR STUDIO'S <span className="text-[#c5a880] font-extrabold">7200+ VIP</span> CLIENTS & PARTNERS
            </span>
            <div className="h-[1px] bg-stone-200 w-12 sm:w-20" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75">
            {partners.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="flex items-center space-x-2 text-stone-700 hover:text-[#c5a880] transition-colors duration-300 group cursor-default">
                  <IconComp size={18} className="text-stone-400 group-hover:text-[#c5a880] transition-colors duration-300" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800 group-hover:text-[#c5a880]">
                    {p.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 3: "CREATE AN EVEN GREATER EXPERIENCE" SHOWCASE BANNER */}
        <div className="space-y-8 text-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#c5a880]" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold text-stone-700">
              PASSIONATE PERFORMANCE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Create An Even <span className="text-[#c5a880]">Greater Experience</span>
          </h2>

          {/* Immersive High-Res Interior Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-stone-200/80 relative aspect-[16/9] max-h-[540px] group bg-stone-900"
          >
            <img
              src={slide3}
              alt="Suthar luxury interior living space"
              className="w-full h-full object-cover filter brightness-[0.88] group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />

            {/* Subtle Vignette & Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

            {/* Floating Action Button inside Frame */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white text-left z-10">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#c5a880] uppercase">
                  SEA-FACING RESIDENTIAL SHOWCASE
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Contemporary Double-Height Living Room
                </h3>
              </div>

              <button
                onClick={() => {
                  if (typeof setView === "function") {
                    setView("gallery");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const el = document.getElementById("projects");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="shrink-0 inline-flex items-center space-x-2.5 bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-xl"
              >
                <span>Explore Full Portfolio</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
