"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA } from "../../lib/data.js";

export default function EditorialDisciplines() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#faf9f6] text-[#0c0a09] py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="editorial-kicker text-[10px] text-[#CAA05C]">03 — Disciplines</span>
          <span className="h-px flex-1 bg-stone-300/70" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 items-start">
          {/* Sticky editorial image panel */}
          <div className="lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SERVICES_DATA[active].image}
                    alt={SERVICES_DATA[active].title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-5 left-5">
                <span className="editorial-kicker text-[9px] text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5">
                  {SERVICES_DATA[active].category}
                </span>
              </div>
            </div>
          </div>

          {/* Numbered discipline index */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <h2 className="editorial-display text-[clamp(2rem,5vw,4rem)] font-light mb-12 md:mb-16">
              A single studio,
              <br />
              <span className="italic text-[#CAA05C]">every</span> discipline.
            </h2>

            <ul>
              {SERVICES_DATA.map((service, i) => {
                const isActive = active === i;
                return (
                  <li key={service.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="group w-full text-left border-t border-stone-300/70 py-6 md:py-7 cursor-pointer transition-colors"
                    >
                      <div className="flex items-baseline gap-5 md:gap-8">
                        <span
                          className={`editorial-kicker text-[10px] pt-1 transition-colors ${
                            isActive ? "text-[#CAA05C]" : "text-stone-400"
                          }`}
                        >
                          0{i + 1}
                        </span>
                        <div className="flex-1">
                          <h3
                            className={`editorial-display text-2xl md:text-4xl font-light transition-all duration-500 ${
                              isActive ? "text-[#CAA05C] translate-x-2" : "text-[#0c0a09]"
                            }`}
                          >
                            {service.title}
                          </h3>
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden text-sm md:text-[15px] leading-relaxed text-stone-500 font-light"
                              >
                                <span className="block pt-3 max-w-md">
                                  {service.shortDescription}
                                </span>
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
              <li className="border-t border-stone-300/70" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
