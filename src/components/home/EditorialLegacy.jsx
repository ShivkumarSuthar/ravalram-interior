"use client";

import { motion } from "motion/react";
import { STATS_DATA } from "../../lib/data.js";

export default function EditorialLegacy() {
  return (
    <section className="relative bg-[#faf9f6] text-[#0c0a09] py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="editorial-kicker text-[10px] text-[#CAA05C]">04 — A Measured Legacy</span>
          <span className="h-px flex-1 bg-stone-300/70" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.1 }}
              className={`${i % 2 === 1 ? "md:mt-16" : ""} border-t border-stone-300/70 pt-6`}
            >
              <span className="editorial-display block text-[clamp(3.5rem,11vw,9rem)] font-light leading-none text-[#0c0a09]">
                {stat.number}
              </span>
              <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <span className="editorial-kicker text-[10px] text-[#CAA05C]">
                  {stat.label}
                </span>
                <span className="text-sm text-stone-500 font-light max-w-xs md:text-right">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
