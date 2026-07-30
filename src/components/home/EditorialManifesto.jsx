"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ABOUT_DATA } from "../../lib/data.js";

const PORTRAIT = "/assets/images/AI_images/antra_about_side_1782744266546.jpg";
const ease = [0.16, 1, 0.3, 1];

export default function EditorialManifesto() {
  return (
    <section className="relative overflow-hidden bg-[#f2efe8] px-5 py-28 text-[#0c0a09] md:px-10 md:py-48">
      <div className="mx-auto max-w-[1500px]">
        <header className="grid grid-cols-[auto_1fr] items-start gap-5 border-t border-[#0c0a09]/25 pt-3 md:grid-cols-12">
          <span className="editorial-kicker text-[9px] text-[#a77832] md:col-span-2">Chapter I</span>
          <p className="editorial-kicker text-[9px] text-[#0c0a09]/45 md:col-span-3">On material honesty</p>
          <p className="hidden text-right font-editorial text-sm italic text-[#0c0a09]/50 md:col-span-7 md:block">Notes from the workshop, Santacruz West</p>
        </header>

        <div className="relative mt-14 md:mt-24 md:min-h-[920px]">
          <motion.div initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.1, ease }} className="relative z-10 md:w-[57%]">
            <p className="editorial-display text-[clamp(3rem,7.8vw,8.5rem)] font-light leading-[0.86] tracking-[-0.045em]">
              We do not
              <br />decorate
              <br />space.
            </p>
            <p className="editorial-display ml-[18%] mt-4 text-[clamp(3rem,7.8vw,8.5rem)] font-light italic leading-[0.86] text-[#a77832] md:ml-[36%]">
              We reveal it.
            </p>
          </motion.div>

          <motion.figure initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, delay: 0.15, ease }} className="relative z-0 mt-12 md:absolute md:right-[4%] md:top-[12%] md:mt-0 md:w-[47%]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={PORTRAIT} alt="Bespoke joinery detail in the Suthar studio" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <figcaption className="mt-3 flex justify-between border-t border-[#0c0a09]/20 pt-2">
              <span className="editorial-kicker text-[8px] text-[#0c0a09]/45">Plate 01 / Joinery study</span>
              <span className="editorial-kicker text-[8px] text-[#0c0a09]/45">Mumbai, IN</span>
            </figcaption>
          </motion.figure>

          <div className="relative z-20 mt-14 grid gap-10 md:absolute md:bottom-0 md:left-[7%] md:w-[50%] md:grid-cols-2 md:bg-[#f2efe8] md:p-8">
            <div className="editorial-kicker text-[9px] leading-loose text-[#a77832]">Thirty-five years<br />of looking closely</div>
            <div className="flex flex-col gap-6">
              {ABOUT_DATA.paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="text-sm leading-7 text-[#0c0a09]/65">{paragraph}</p>
              ))}
            </div>
          </div>

          <motion.aside initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="mt-14 border-y border-[#0c0a09]/25 py-7 md:absolute md:bottom-[3%] md:right-0 md:w-[30%] md:border-y-0 md:border-l md:py-0 md:pl-8">
            <blockquote className="font-editorial text-2xl italic leading-snug">{ABOUT_DATA.quote}</blockquote>
            <p className="editorial-kicker mt-5 text-[8px] text-[#0c0a09]/45">{ABOUT_DATA.quoteAuthor} / {ABOUT_DATA.quoteTitle}</p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
