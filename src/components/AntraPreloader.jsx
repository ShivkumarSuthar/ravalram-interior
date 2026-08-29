"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import BrandLogo from "./BrandLogo.jsx";

export default function AntraPreloader() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const hasPreloaded = sessionStorage.getItem("suthar_preloaded");
      if (hasPreloaded) {
        setIsHidden(true);
        return;
      }
      sessionStorage.setItem("suthar_preloaded", "true");
    }

    document.body.style.overflow = "hidden";

    // Progress counter animation from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 8);
      });
    }, 45);

    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 1100);

    const removeTimeout = setTimeout(() => {
      setIsHidden(true);
      document.body.style.overflow = "";
    }, 1700);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimeout);
      clearTimeout(removeTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted || isHidden) return null;

  return (
    <AnimatePresence>
      {!isHidden && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none flex flex-col justify-between overflow-hidden"
          suppressHydrationWarning
        >
          {/* Top Curtain Panel */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: isExiting ? "-100%" : "0%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-1/2 bg-[#0c0a09] relative border-b border-[#c5a880]/20"
          />

          {/* Bottom Curtain Panel */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: isExiting ? "100%" : "0%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-1/2 bg-[#0c0a09] relative border-t border-[#c5a880]/20"
          />

          {/* Center Content Container Overlay */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-between py-12 px-6 pointer-events-auto z-10"
          >
            {/* Top Minimal Tagline */}
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.3em] uppercase text-stone-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-ping" />
              <span>SUTHAR LIVING • ARCHITECTURE &amp; INTERIORS</span>
            </div>

            {/* Center Brand Logo & Architectural Line */}
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="transform scale-110 sm:scale-125"
              >
                <BrandLogo size="xl" />
              </motion.div>

              {/* Progress Line Bar */}
              <div className="w-56 sm:w-72 h-[2px] bg-stone-800 rounded-full overflow-hidden relative shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#c5a880]/60 via-[#c5a880] to-[#e8d5b7]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Percentage Display */}
              <div className="flex items-center space-x-2 font-mono text-xs font-bold tracking-widest text-[#c5a880]">
                <span>{Math.min(progress, 100)}%</span>
                <span className="text-stone-500 font-normal">| CRAFTING SPACES SINCE 1987</span>
              </div>
            </div>

            {/* Bottom Coordinate Signature */}
            <div className="text-[9px] font-mono text-stone-500 tracking-[0.25em] uppercase">
              MUMBAI • GOA • PUNE • TURNKEY CONTRACTING
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}