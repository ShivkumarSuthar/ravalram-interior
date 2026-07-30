"use client";

import { motion } from "motion/react";
import { STATS_DATA } from "../../lib/data.js";

export default function EditorialLegacy() {
  return (
    <section className="overflow-hidden bg-[#f2efe8] px-5 py-28 text-[#0c0a09] md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <header className="flex justify-between border-y border-[#0c0a09]/25 py-3">
          <span className="editorial-kicker text-[9px] text-[#a77832]">Chapter IV / A measured legacy</span>
          <span className="editorial-kicker text-[9px] text-[#0c0a09]/40">1989—2026</span>
        </header>

        <div className="relative mt-16 min-h-[900px] md:mt-24 md:min-h-[980px]">
          <p className="max-w-[24rem] text-sm leading-7 text-[#0c0a09]/55 md:absolute md:left-[8%] md:top-[9%]">Numbers are not the measure of a studio. They are traces of relationships, homes lived in, and skills passed from one pair of hands to another.</p>

          {STATS_DATA.map((stat, index) => {
            const positions = [
              "md:absolute md:right-[3%] md:top-0 md:w-[54%]",
              "md:absolute md:left-0 md:top-[31%] md:w-[48%]",
              "md:absolute md:right-[7%] md:top-[53%] md:w-[42%]",
              "md:absolute md:left-[17%] md:bottom-0 md:w-[48%]",
            ];
            return (
              <motion.article key={stat.id} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, delay: index * 0.08 }} className={`relative mt-20 border-t border-[#0c0a09]/25 pt-3 first:mt-16 ${positions[index] || ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <span className="editorial-kicker pt-2 text-[8px] text-[#a77832]">0{index + 1}</span>
                  <span className="editorial-display text-[clamp(5.5rem,16vw,16rem)] font-light leading-[0.7] tracking-[-0.07em]">{stat.number}</span>
                </div>
                <div className="ml-auto mt-6 max-w-sm border-l border-[#0c0a09]/25 pl-5">
                  <h2 className="font-editorial text-2xl italic">{stat.label}</h2>
                  <p className="mt-2 text-xs leading-6 text-[#0c0a09]/50">{stat.description}</p>
                </div>
              </motion.article>
            );
          })}

          <span className="editorial-display pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[34rem] leading-none text-[#a77832]/[0.06] md:block">S</span>
        </div>
      </div>
    </section>
  );
}
