"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";

// Service list whose hovered/focused item swaps the image and caption beside it
export default function ServiceSwitcher({ items }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-18">
      <Reveal direction="left">
        <div className="relative h-100 w-full max-w-180 lg:h-130">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0, y: 10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.985 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <img src={current.image} alt={current.alt} loading="lazy" decoding="async" className="size-full rounded-3xl object-cover" />
              <div className="absolute bottom-2.5 left-2.5 max-w-70 rounded-3xl border border-white/10 bg-surface-dark/45 p-7.5 backdrop-blur-2xl sm:bottom-5 sm:left-5 sm:max-w-105">
                <p className="text-base leading-7 text-white">{current.text}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>

      <Reveal direction="right">
        <ul className="w-full max-w-160 lg:ml-auto">
          {items.map((item, i) => (
            <li
              key={item.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group relative flex items-center border-b border-line/30 py-5 pr-14 first:border-t lg:py-7"
            >
              <span className={`w-11 shrink-0 font-heading text-base leading-none transition-colors duration-300 ${active === i ? "text-primary" : "text-ink"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-card-lg">
                <Link href={item.href} className={`transition-colors duration-300 after:absolute after:inset-0 ${active === i ? "text-primary" : "text-ink"}`}>
                  {item.title}
                </Link>
              </h3>
              <span aria-hidden className="absolute right-0 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-primary text-white lg:size-10.5">
                <ArrowRight className={`size-4 transition-transform duration-300 lg:size-5 ${active === i ? "-rotate-45" : ""}`} />
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
