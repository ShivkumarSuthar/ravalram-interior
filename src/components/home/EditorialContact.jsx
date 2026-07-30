"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Phone } from "lucide-react";
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
    <section className="relative bg-[#0c0a09] text-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="editorial-kicker text-[10px] text-[#CAA05C]">05 — An Invitation</span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 items-center">
          {/* Editorial statement + actions */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-display text-[clamp(2.4rem,6.5vw,6rem)] font-light"
            >
              Have a space
              <br />
              worth
              <span className="italic text-[#CAA05C]"> shaping</span>?
            </motion.h2>

            <p className="mt-8 max-w-lg text-[15px] md:text-lg leading-relaxed text-white/60 font-light">
              Every project begins with a conversation. Tell us about your vision, your lifestyle and your space — we will draw the rest.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <button
                type="button"
                onClick={goContact}
                className="group inline-flex items-center justify-between gap-6 bg-[#CAA05C] text-[#0c0a09] px-8 py-5 rounded-full transition-colors duration-300 hover:bg-[#B88F4C] cursor-pointer"
              >
                <span className="editorial-kicker text-[10px]">Book a Consultation</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneFormatted}`}
                className="group inline-flex items-center justify-center gap-3 border border-white/25 px-8 py-5 rounded-full transition-colors duration-300 hover:border-[#CAA05C] hover:text-[#CAA05C]"
              >
                <Phone size={15} />
                <span className="editorial-kicker text-[10px]">{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Accompanying image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={CTA_IMAGE}
                alt="Suthar Interior Studio bespoke luxury finish"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Studio footprint line */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/15 pt-8">
          <div>
            <span className="editorial-kicker text-[9px] text-white/40 block mb-2">Studio</span>
            <p className="text-sm text-white/70 font-light">{COMPANY_INFO.address.indianShowroom.title}</p>
          </div>
          <div>
            <span className="editorial-kicker text-[9px] text-white/40 block mb-2">Serving</span>
            <p className="text-sm text-white/70 font-light">{COMPANY_INFO.serviceCities.join(" · ")} &amp; coastal hubs</p>
          </div>
          <div>
            <span className="editorial-kicker text-[9px] text-white/40 block mb-2">Hours</span>
            <p className="text-sm text-white/70 font-light">{COMPANY_INFO.workingHours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
