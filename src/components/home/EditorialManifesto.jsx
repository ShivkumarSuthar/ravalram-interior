"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ABOUT_DATA, COMPANY_INFO } from "../../lib/data.js";

const PORTRAIT = "/assets/images/AI_images/antra_about_side_1782744266546.jpg";

export default function EditorialManifesto() {
  return (
    <section className="relative bg-[#faf9f6] text-[#0c0a09] py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section index */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="editorial-kicker text-[10px] text-[#CAA05C]">01 — The Studio</span>
          <span className="h-px flex-1 bg-stone-300/70" />
        </div>

        {/* Oversized manifesto statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-display text-[clamp(1.9rem,5.2vw,4.75rem)] font-light max-w-5xl text-balance"
        >
          For over three decades we have shaped interiors that honour
          <span className="italic text-[#CAA05C]"> the grain of every timber </span>
          and the quiet flow of natural light.
        </motion.p>

        {/* Asymmetric body + image composition */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 items-start">
          {/* Offset tall image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:-mt-24"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={PORTRAIT}
                alt="Suthar Interior Studio bespoke joinery detail"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="editorial-kicker text-[9px] text-stone-400">Fig. 01</span>
              <span className="editorial-kicker text-[9px] text-stone-400">Santacruz West, Mumbai</span>
            </div>
          </motion.div>

          {/* Story copy */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            {ABOUT_DATA.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="text-[15px] md:text-lg leading-relaxed text-stone-600 font-light"
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="pt-8 border-t border-stone-300/70"
            >
              <p className="editorial-display text-2xl md:text-3xl font-light italic text-[#0c0a09]">
                {ABOUT_DATA.quote}
              </p>
              <p className="mt-6 editorial-kicker text-[10px] text-stone-500">
                {ABOUT_DATA.quoteAuthor} — {ABOUT_DATA.quoteTitle}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
