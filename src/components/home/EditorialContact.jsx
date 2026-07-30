"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { COMPANY_INFO } from "../../lib/data.js";

const CTA_IMAGE = "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";

export default function EditorialContact({ setView }) {
  const goContact = () => {
    if (typeof setView === "function") {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="overflow-hidden bg-[#0c0a09] text-[#f2efe8]">
      <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-44">
        <header className="flex justify-between border-y border-[#f2efe8]/20 py-3">
          <span className="editorial-kicker text-[9px] text-[#c69a53]">Colophon / Begin</span>
          <span className="editorial-kicker text-[9px] text-[#f2efe8]/40">Suthar Interior Studio</span>
        </header>

        <div className="relative mt-16 md:mt-28 md:min-h-[750px]">
          <motion.h2 initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className="editorial-display relative z-20 text-[clamp(4.2rem,13vw,13.5rem)] font-light leading-[0.72] tracking-[-0.06em]">
            Let&apos;s make
            <br />something
            <span className="block text-right italic text-[#c69a53]">lasting.</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }} whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="relative mt-10 aspect-[16/7] overflow-hidden md:absolute md:bottom-0 md:left-[6%] md:mt-0 md:w-[52%]">
            <Image src={CTA_IMAGE} alt="Bespoke interior finish by Suthar Interior Studio" fill className="object-cover" referrerPolicy="no-referrer" />
          </motion.div>

          <div className="relative z-30 mt-12 md:absolute md:bottom-[3%] md:right-[2%] md:w-[35%]">
            <p className="max-w-md text-sm leading-7 text-[#f2efe8]/60">Every commission begins with a conversation about how you want to live. Bring us the space, the questions and the ambition.</p>
            <div className="mt-10 border-t border-[#f2efe8]/30">
              <button type="button" onClick={goContact} className="group flex w-full items-center justify-between border-b border-[#f2efe8]/30 py-5 text-left">
                <span className="font-editorial text-2xl italic">Book a private consultation</span>
                <span className="text-xl transition-transform group-hover:translate-x-2" aria-hidden="true">↗</span>
              </button>
              <a href={`tel:${COMPANY_INFO.phoneFormatted}`} className="group flex items-center justify-between border-b border-[#f2efe8]/30 py-5">
                <span className="font-editorial text-xl">{COMPANY_INFO.phone}</span>
                <span className="editorial-kicker text-[8px] text-[#c69a53]">Call studio</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-24 grid grid-cols-2 gap-8 border-t border-[#f2efe8]/20 pt-5 md:mt-36 md:grid-cols-4">
          <div><span className="editorial-kicker text-[8px] text-[#f2efe8]/35">Studio</span><p className="mt-2 text-xs leading-5 text-[#f2efe8]/60">{COMPANY_INFO.address.indianShowroom.title}</p></div>
          <div><span className="editorial-kicker text-[8px] text-[#f2efe8]/35">Serving</span><p className="mt-2 text-xs leading-5 text-[#f2efe8]/60">{COMPANY_INFO.serviceCities.join(" / ")}</p></div>
          <div><span className="editorial-kicker text-[8px] text-[#f2efe8]/35">Hours</span><p className="mt-2 text-xs leading-5 text-[#f2efe8]/60">{COMPANY_INFO.workingHours}</p></div>
          <div className="text-right"><span className="editorial-kicker text-[8px] text-[#f2efe8]/35">Edition</span><p className="mt-2 font-editorial text-sm italic text-[#f2efe8]/60">Designed to endure</p></div>
        </footer>
      </div>
    </section>
  );
}
