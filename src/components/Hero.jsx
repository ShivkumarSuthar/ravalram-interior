import AppImage from "./AppImage";
import { useState } from "react";
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
    subtitle:
      "Architect-led interiors, custom furniture, and complete project execution crafted with precision, honesty, and over three decades of experience.",
  },
  {
    image: heroImg2,
    label: "ARCHITECTURE • INTERIORS • FURNITURE",
    titlePrefix: "Crafted with ",
    titleItalic: "Precision.",
    titleSuffix: " Built to Last.",
    subtitle:
      "From elegant homes to inspiring workplaces, every project is thoughtfully designed and expertly executed.",
  },
  {
    image: heroImg3,
    label: "HONEST PRICING • CUSTOM SOLUTIONS",
    titlePrefix: "Your ",
    titleItalic: "Vision.",
    titleSuffix: " Our Commitment.",
    subtitle:
      "Flexible execution, premium craftsmanship, and material choices tailored to your needs.",
  },
];

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 1.05,
  },
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const textGroupVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero({ setView }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

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

  return (
    <section id="home" className="hero-section">
      {/* Background Image Carousel */}
      <div className="hero-bg">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="hero-bg-slide"
          >
            <AppImage
              src={slide.image}
              alt={slide.label}
              className="hero-bg-image"
              style={{ transformOrigin: "center" }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette and Dark Gradients for Maximum Legibility */}
        <div className="hero-vignette" />
        <div className="hero-gradient" />
      </div>

      {/* Hero Central Content */}
      <div className="hero-content">
        {/* Large Ghost Text Backdrop */}
        <div className="hero-ghost-text">
          <span>interior</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={textGroupVariants}
            className="hero-inner"
          >
            {/* Top Tagline Badge */}
            <motion.div variants={textItemVariants} className="hero-badge">
              <span className="hero-badge-icon">✦</span>
              <span className="hero-badge-text">{slide.label}</span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={textItemVariants} className="hero-title">
              {slide.titlePrefix}
              <span className="hero-title-accent">{slide.titleItalic}</span>
              {slide.titleSuffix}
            </motion.h1>

            {/* Action Buttons */}
            <motion.div variants={textItemVariants} className="hero-cta-wrap">
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "var(--global-color-primary)",
                }}
                whileTap={{ scale: 0.98 }}
                className="hero-cta"
              >
                Start Project
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Horizontal Card & Nav Overlays */}
      <div className="hero-footer">
        <div className="hero-footer-inner">
          {/* Left: Thumbnail & Text */}
          <div className="hero-footer-media">
            <div className="hero-footer-thumb">
              <AppImage src={slide.image} alt="Active Project Thumbnail" />
            </div>
            <p className="hero-footer-text">{slide.subtitle}</p>
          </div>

          {/* Right: Slide Controllers */}
          <div className="hero-controls">
            <button
              onClick={prevSlide}
              className="hero-nav-btn"
              aria-label="Previous Slide"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="hero-nav-btn hero-nav-btn-primary"
              aria-label="Next Slide"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}