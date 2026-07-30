"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { COMPANY_INFO } from "../../lib/data.js";

const HERO_IMAGE = "/assets/images/AI_images/antra_hero_bg_1782744248753.jpg";
const ease = [0.16, 1, 0.3, 1];

export default function EditorialHero({ setView }) {
  const goContact = () => {
    if (typeof setView === "function") {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-[#f2efe8] text-[#0c0a09]">
      <div className="mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-1 px-5 pb-7 pt-28 md:px-10 md:pb-10 md:pt-32 lg:grid-cols-[5rem_1fr_1fr] lg:grid-rows-[auto_1fr_auto] lg:gap-x-7">
        <div className="hidden border-r border-[#0c0a09]/25 lg:row-span-3 lg:flex lg:items-end lg:justify-center lg:pb-2">
          <p className="vertical-type editorial-kicker text-[9px] text-[#0c0a09]/55">
            Volume I — Spaces, matter &amp; memory
          </p>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="col-span-1 flex items-start justify-between border-y border-[#0c0a09]/30 py-3 lg:col-span-2">
          <span className="editorial-kicker text-[9px] text-[#a77832]">Suthar / Journal 01</span>
          <span className="editorial-kicker text-[9px] text-[#0c0a09]/55">Mumbai — Goa — Pune</span>
          <span className="editorial-kicker hidden text-[9px] text-[#0c0a09]/55 sm:block">Est. {COMPANY_INFO.foundedYear}</span>
        </motion.div>

        <div className="relative mt-5 min-h-[66vh] lg:col-span-2 lg:mt-7 lg:min-h-0">
          <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 1.4, ease }} className="absolute inset-x-0 bottom-0 top-[18%] overflow-hidden md:left-[20%] lg:left-[28%] lg:top-[7%]">
            <Image src={HERO_IMAGE} alt="Architect-led interior by Suthar Interior Studio" fill priority className="object-cover object-center" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-[#0c0a09]/10" />
          </motion.div>

          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.65, ease }} className="absolute left-0 top-2 z-10 max-w-[12rem] text-xs leading-relaxed text-[#0c0a09]/65 md:top-[10%]">
            An independent studio for interiors, architecture and objects made slowly, from first line to final grain.
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.25, ease }} className="editorial-display relative z-20 flex min-h-[66vh] flex-col justify-between py-[29%] text-[clamp(4.2rem,13vw,12.5rem)] font-light uppercase leading-[0.72] tracking-[-0.06em] lg:min-h-[66vh] lg:py-[4%]">
            <span className="self-start">Suthar</span>
            <span className="self-end pr-[2vw] text-[#f2efe8] [text-shadow:0_1px_20px_rgba(12,10,9,0.16)]">Interior</span>
            <span className="self-start italic normal-case text-[#a77832]">Studio</span>
          </motion.h1>

          <div className="absolute bottom-5 right-4 z-30 flex items-end gap-5 md:right-6">
            <span className="editorial-kicker hidden text-[8px] text-[#f2efe8]/80 sm:block">Issue No. 001</span>
            <button type="button" onClick={goContact} className="group border-b border-[#f2efe8] pb-2 text-left text-[#f2efe8]">
              <span className="editorial-kicker text-[9px]">Commission a space</span>
              <span className="ml-8 inline-block transition-transform group-hover:translate-x-2" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        <div className="col-span-1 mt-4 flex items-end justify-between lg:col-span-2">
          <p className="editorial-kicker text-[8px] text-[#0c0a09]/50">Interior Architecture / Bespoke Joinery</p>
          <p className="font-editorial text-sm italic text-[#0c0a09]/60">A study in permanence</p>
        </div>
      </div>
    </section>
  );
}
