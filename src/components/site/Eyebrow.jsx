"use client";

import { motion, useReducedMotion } from "motion/react";

// Small pill label above section titles; its letters slide in from the right one by one
export default function Eyebrow({ children, tone = "dark", className = "" }) {
  const reduceMotion = useReducedMotion();
  const toneClass = tone === "light" ? "border-white/20 text-white" : "border-line/30 text-surface-dark";

  return (
    <motion.p
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      className={`relative inline-flex overflow-hidden rounded-full border py-1.75 pl-7 pr-4.75 font-heading text-eyebrow uppercase ${toneClass} ${className}`}
    >
      <span aria-hidden className="absolute left-3.75 top-1/2 size-1.25 -translate-y-1/2 rounded-full bg-primary" />
      <span className="sr-only">{children}</span>
      <span aria-hidden>
        {Array.from(children).map((char, i) => (
          <motion.span
            key={i}
            className="inline-block whitespace-pre"
            variants={{
              hidden: reduceMotion ? {} : { opacity: 0, x: 100 },
              shown: { opacity: 1, x: 0, transition: { duration: 0.9, delay: i * 0.03, ease: "easeOut" } },
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </motion.p>
  );
}
