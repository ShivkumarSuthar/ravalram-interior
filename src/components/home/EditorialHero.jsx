"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { COMPANY_INFO } from "../../lib/data.js";

const HERO_IMAGE = "/assets/images/AI_images/antra_hero_bg_1782744248753.jpg";

const reveal = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.12 },
  }),
};

export default function EditorialHero({ setView }) {
  const goContact = () => {
    if (typeof setView === "function") {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0c0a09] text-[#faf9f6]"
    >
      {/* Cinematic full-bleed image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGE}
            alt="Architect-led luxury interior by Suthar Interior Studio"
            fill
            priority
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Editorial tonal veils — no harsh gradients, just cinematic depth */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      </div>

      {/* Top meta row */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-36">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between border-t border-white/15 pt-5"
        >
          <span className="editorial-kicker text-[10px] md:text-[11px] text-[#CAA05C]">
            Interior Architecture
          </span>
          <span className="editorial-kicker text-[10px] md:text-[11px] text-white/70 hidden sm:block">
            &amp; Bespoke Timber Joinery
          </span>
          <span className="editorial-kicker text-[10px] md:text-[11px] text-white/70">
            Est. {COMPANY_INFO.foundedYear}
          </span>
        </motion.div>
      </div>

      {/* Oversized editorial headline anchored low */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex min-h-[calc(100vh-13rem)] flex-col justify-end pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-9">
            <motion.h1
              variants={reveal}
              custom={1}
              initial="hidden"
              animate="visible"
              className="editorial-display text-[clamp(2.75rem,10vw,9.5rem)] font-light text-[#faf9f6]"
            >
              Crafting Timeless
              <br />
              <span className="italic font-normal text-[#CAA05C]">Spatial</span> Excellence
            </motion.h1>
          </div>

          <motion.div
            variants={reveal}
            custom={2}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 lg:pb-4"
          >
            <p className="text-sm md:text-[15px] leading-relaxed text-white/75 font-light max-w-xs">
              An architect-led studio composing residential and commercial interiors around light, grain, and the way you live.
            </p>
            <button
              type="button"
              onClick={goContact}
              className="group mt-7 inline-flex items-center gap-4 cursor-pointer"
            >
              <span className="editorial-kicker text-[10px] text-[#faf9f6] group-hover:text-[#CAA05C] transition-colors">
                Begin a Project
              </span>
              <span className="h-px w-14 bg-[#CAA05C] transition-all duration-500 group-hover:w-20" />
            </button>
          </motion.div>
        </div>

        {/* Baseline location line */}
        <motion.div
          variants={reveal}
          custom={3}
          initial="hidden"
          animate="visible"
          className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/15 pt-5"
        >
          <span className="editorial-kicker text-[10px] text-white/60">
            {COMPANY_INFO.serviceCities.join("  /  ")}
          </span>
          <span className="editorial-kicker text-[10px] text-white/50">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
