"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { COMPANY_INFO } from "../../lib/data.js";

const BANNER = "/assets/images/AI_images/antra_lobby_banner_1782744283860.jpg";

export default function EditorialQuote() {
  return (
    <section className="relative w-full h-[85vh] min-h-[560px] overflow-hidden bg-[#0c0a09] text-[#faf9f6] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={BANNER}
          alt="Suthar Interior Studio reception lobby craftsmanship"
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="editorial-kicker text-[10px] text-[#CAA05C]"
          >
            The Philosophy
          </motion.span>
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-display mt-8 text-[clamp(1.85rem,4.6vw,4rem)] font-light leading-[1.08] text-balance"
          >
            &ldquo;True spatial design does not obscure raw structure — it
            <span className="italic text-[#CAA05C]"> honours </span>
            the material and the light that moves across it.&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 editorial-kicker text-[10px] text-white/70"
          >
            {COMPANY_INFO.founder} — Founder &amp; Master Woodcrafter
          </motion.p>
        </div>
      </div>
    </section>
  );
}
