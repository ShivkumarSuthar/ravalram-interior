import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import heroImg1 from "../assets/images/antra_hero_bg_1782744248753.jpg";
import heroImg2 from "../assets/images/antra_hero_slide2_1782747378004.jpg";
import heroImg3 from "../assets/images/antra_hero_slide3_1782747396078.jpg";

const slides = [
  {
    image: heroImg1,
    label: "TRUSTED DESIGN PARTNER",
    titlePrefix: "Find Your ",
    titleItalic: "Inspired",
    titleSuffix: " Interior Design",
    subtitle: "Transform your vision into reality with our innovative designs, creating modern spaces that blend functionality, aesthetics, and sustainability."
  },
  {
    image: heroImg2,
    label: "RARE MATERIAL PALETTES",
    titlePrefix: "Sculpted ",
    titleItalic: "Masterpieces",
    titleSuffix: " of High Living",
    subtitle: "Merging rare marble slab accents, tailored hand-brushed bronzes, and architectural rhythm to forge striking, functional luxury sanctuaries."
  },
  {
    image: heroImg3,
    label: "ORGANIC QUIET LUXURY",
    titlePrefix: "Serene Spaces Rooted in ",
    titleItalic: "Stillness",
    titleSuffix: " & Modernity",
    subtitle: "Creating quiet, organic sanctuaries that blend native timber textures and soft ambient natural illumination to promote sophisticated architectural rest."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000); // Auto change slide every 7 seconds
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="w-full h-full object-cover opacity-60 select-none pointer-events-none"
              style={{ transformOrigin: "center" }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette and Dark Gradients for Maximum Legibility */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_#090706_100%] opacity-85 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/75 via-stone-950/25 to-stone-950 z-[2]" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-12 pb-32">
        {/* Large Ghost Text Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
          <span className="text-[12vw] sm:text-[14vw] md:text-[18vw] font-serif font-black text-white/[0.02] tracking-[0.1em] uppercase leading-none">
            interior
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col items-center space-y-6 md:space-y-8"
          >
            {/* Top Tagline Badge */}
            <motion.div
              variants={textVariants}
              className="inline-flex items-center space-x-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full"
            >
              <span className="text-gold-500 text-xs">✦</span>
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold text-stone-200">
                {slide.label}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={textVariants}
              className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight text-white leading-[1.1] max-w-5xl"
            >
              {slide.titlePrefix}
              <span className="font-serif italic font-normal text-gold-500">
                {slide.titleItalic}
              </span>
              {slide.titleSuffix}
            </motion.h1>

            {/* Circular Start Project Button */}
            <motion.div variants={textVariants} className="pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white flex flex-col items-center justify-center text-stone-950 hover:bg-[#c5a880] hover:text-stone-950 transition-colors duration-500 cursor-pointer shadow-2xl relative group"
                id="hero-start-project-btn"
              >
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] leading-tight">Start</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] leading-tight mt-0.5">Project</span>
                <div className="mt-1 text-stone-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Horizontal Card & Nav Overlays (Exactly like the Reference Image) */}
      <div className="absolute bottom-10 left-0 w-full z-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-stone-900/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          {/* Left: Thumbnail & Text */}
          <div className="flex items-center space-x-4 max-w-2xl">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0 shadow-inner">
              <img
                src={slide.image}
                alt="Active Project Thumbnail"
                className="w-full h-full object-cover filter sepia hue-rotate-[20deg] saturate-120 brightness-90"
              />
            </div>
            <p className="text-stone-300 text-xs md:text-sm font-light leading-relaxed text-left">
              {slide.subtitle}
            </p>
          </div>

          {/* Right: Slide Controllers */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Previous Slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#c5a880] text-stone-950 hover:bg-[#b28e57] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
              aria-label="Next Slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
