"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { SERVICES_DATA } from "../../lib/data.js";

export default function EditorialDisciplines() {
  const [active, setActive] = useState(0);

  return (
    <section className="overflow-hidden bg-[#f2efe8] px-5 py-28 text-[#0c0a09] md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <header className="flex justify-between border-y border-[#0c0a09]/25 py-3">
          <span className="editorial-kicker text-[9px] text-[#a77832]">Chapter III / Studio Index</span>
          <span className="editorial-kicker text-[9px] text-[#0c0a09]/45">From line to last detail</span>
        </header>

        <div className="relative mt-16 md:mt-28 md:grid md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="mb-12 max-w-sm text-sm leading-6 text-[#0c0a09]/55 md:ml-[12%]">One practice, deliberately undivided. Each discipline informs the next.</p>
            <ol className="border-b border-[#0c0a09]/25">
              {SERVICES_DATA.map((service, index) => {
                const isActive = active === index;
                return (
                  <li key={service.id} className="border-t border-[#0c0a09]/25">
                    <button type="button" onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} aria-pressed={isActive} className="group grid w-full grid-cols-[2rem_1fr] items-baseline gap-2 py-4 text-left md:grid-cols-[4rem_1fr_auto] md:py-5">
                      <span className={`editorial-kicker text-[8px] transition-colors ${isActive ? "text-[#a77832]" : "text-[#0c0a09]/35"}`}>0{index + 1}</span>
                      <h2 className={`editorial-display text-[clamp(2.6rem,6.7vw,7.4rem)] font-light leading-[0.82] tracking-[-0.045em] transition-all duration-500 ${isActive ? "translate-x-3 italic text-[#a77832] md:translate-x-8" : "text-[#0c0a09]"}`}>{service.title}</h2>
                      <span className={`hidden editorial-kicker text-[8px] transition-opacity md:block ${isActive ? "opacity-60" : "opacity-0"}`}>{service.category}</span>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="col-start-2 max-w-md overflow-hidden pb-3 text-xs leading-6 text-[#0c0a09]/55 md:col-start-2">{service.shortDescription}</motion.p>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-12 md:col-span-4 md:mt-0">
            <div className="md:sticky md:top-28">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ded9ce]">
                <AnimatePresence mode="wait">
                  <motion.div key={active} initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0 }} transition={{ duration: 0.65 }} className="absolute inset-0">
                    <Image src={SERVICES_DATA[active].image} alt={SERVICES_DATA[active].title} fill className="object-cover" referrerPolicy="no-referrer" />
                  </motion.div>
                </AnimatePresence>
                <span className="absolute bottom-3 left-3 editorial-kicker text-[8px] text-[#f2efe8] mix-blend-difference">Field study / 0{active + 1}</span>
              </div>
              <div className="mt-3 flex justify-between border-t border-[#0c0a09]/25 pt-2">
                <span className="editorial-kicker text-[8px] text-[#0c0a09]/40">Current discipline</span>
                <span className="font-editorial text-sm italic">{SERVICES_DATA[active].title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
