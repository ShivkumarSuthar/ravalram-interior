"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { COMPANY_INFO } from "../../lib/data.js";

const BANNER = "/assets/images/AI_images/antra_lobby_banner_1782744283860.jpg";

export default function EditorialQuote() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#0c0a09] text-[#f2efe8] md:min-h-[110vh]">
      <div className="absolute inset-y-0 left-0 w-full md:left-[18%] md:w-[72%]">
        <Image src={BANNER} alt="Lobby craftsmanship by Suthar Interior Studio" fill className="object-cover object-center" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-[#0c0a09]/28" />
      </div>
      <div className="absolute inset-y-0 left-0 hidden w-[18%] border-r border-[#f2efe8]/20 bg-[#0c0a09] md:block" />

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1600px] flex-col justify-between px-5 py-10 md:min-h-[110vh] md:px-10 md:py-16">
        <header className="flex justify-between border-t border-[#f2efe8]/35 pt-3">
          <span className="editorial-kicker text-[8px] text-[#c69a53]">Interlude / Material truth</span>
          <span className="editorial-kicker text-[8px] text-[#f2efe8]/65">Folio 84—85</span>
        </header>

        <motion.blockquote initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className="editorial-display max-w-[12ch] text-[clamp(3rem,8.2vw,9rem)] font-light leading-[0.88] tracking-[-0.04em]">
          The hand leaves a
          <span className="italic text-[#c69a53]"> memory </span>
          in every surface.
        </motion.blockquote>

        <div className="grid grid-cols-2 items-end gap-5 md:grid-cols-12">
          <p className="editorial-kicker text-[8px] leading-loose text-[#f2efe8]/65 md:col-span-3 md:col-start-3">{COMPANY_INFO.founder}<br />Founder &amp; Master Woodcrafter</p>
          <p className="col-span-1 max-w-xs text-xs leading-6 text-[#f2efe8]/65 md:col-span-3 md:col-start-9">A philosophy built not around ornament, but around restraint, proportion and the intelligence of natural material.</p>
        </div>
      </div>
      <span className="editorial-display absolute -bottom-[0.12em] right-0 z-10 text-[clamp(9rem,28vw,30rem)] leading-none text-[#f2efe8]/10">35</span>
    </section>
  );
}
