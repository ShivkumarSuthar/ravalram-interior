import AppImage from "./AppImage";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const heroImg1 = "/images/antra_hero_bg_1782744248753.jpg";
const heroImg2 = "/images/antra_hero_slide2_1782747378004.jpg";
const heroImg3 = "/images/antra_hero_slide3_1782747396078.jpg";

const slides = [
  {
    image: heroImg1,
    label: "30+ YEARS OF FAMILY CRAFTSMANSHIP",
    titlePrefix: "The Art Of Stuning ",
    titleItalic: "Interior ",
    titleSuffix: "Design.",
    subtitle: "Architect-led interiors, custom furniture, and complete project execution crafted with precision, honesty, and over three decades of experience."
  },
  {
    image: heroImg2,
    label: "ARCHITECTURE • INTERIORS • FURNITURE",
    titlePrefix: "Crafted with ",
    titleItalic: "Precision.",
    titleSuffix: " Built to Last.",
    subtitle: "From elegant homes to inspiring workplaces, every project is thoughtfully designed and expertly executed."
  },
  {
    image: heroImg3,
    label: "HONEST PRICING • CUSTOM SOLUTIONS",
    titlePrefix: "Your ",
    titleItalic: "Vision.",
    titleSuffix: " Our Commitment.",
    subtitle: "Flexible execution, premium craftsmanship, and material choices tailored to your needs."
  }
];

export default function Hero({ setView }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // Auto change slide every 7 seconds
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
            <AppImage
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
              className="inline-flex items-center space-x-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-none"
            >
              <span className="text-gold-500 text-xs">✦</span>
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold text-stone-200">
                {slide.label}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={textVariants}
             className="text-5xl sm:text-7xl md:text-[120px] font-light tracking-wide text-white leading-[1.05] max-w-5xl"
            >
              {slide.titlePrefix}
              <span className="font-serif font-normal text-gold-500">
                {slide.titleItalic}
              </span>
              {slide.titleSuffix}
            </motion.h1>

            {/* Action Buttons */}
            <motion.div 
              variants={textVariants} 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 z-10 w-full"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, backgroundColor: "#b28e57" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#E7A35F] text-stone-950 text-xs font-mono tracking-[0.2em] uppercase font-bold transition-colors duration-300 rounded-none shadow-lg text-center min-w-[220px]"
                id="hero-start-project-btn"
              >
                Start Your Project
              </motion.a>
              <motion.button
                onClick={() => {
                  if (typeof setView === "function") {
                    setView("gallery");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const el = document.getElementById("gallery");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileHover={{ scale: 1.02, borderColor: "#E7A35F", color: "#E7A35F" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md min-w-[220px] cursor-pointer text-center"
                id="hero-view-work-btn"
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Horizontal Card & Nav Overlays (Exactly like the Reference Image) */}
      <div className="absolute bottom-10 left-0 w-full z-20 px-6 md:px-12">
        <div className="max-w-8xl mx-auto bg-stone-900/60 backdrop-blur-xl border border-white/10 p-5 rounded-none flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          {/* Left: Thumbnail & Text */}
          <div className="flex items-center space-x-4 max-w-2xl">
            <div className="w-12 h-12 rounded-none overflow-hidden border border-white/20 shrink-0 shadow-inner">
              <AppImage
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
              className="w-10 h-10 rounded-none border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Previous Slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-none bg-[#E7A35F] text-stone-950 hover:bg-[#b28e57] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
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
