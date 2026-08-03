"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ScrollNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle to "Scroll Up" state once user scrolls down past 300px
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (isScrolled) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.9,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-8 right-6 z-50 pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.button
          key={isScrolled ? "scroll-up" : "scroll-down"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollClick}
          aria-label={isScrolled ? "Scroll to top" : "Scroll down"}
          className="w-12 h-12 rounded-full bg-stone-900/90 text-stone-200 border border-stone-700/60 shadow-2xl backdrop-blur-md flex items-center justify-center hover:bg-[var(--color-surface-dark)] hover:text-gold-accent hover:border-gold-accent transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-gold-accent cursor-pointer"
        >
          {isScrolled ? (
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
          )}
          <span className="sr-only">{isScrolled ? "Scroll to Top" : "Scroll Down"}</span>
        </motion.button>
      </AnimatePresence>
    </div>
  );
}

