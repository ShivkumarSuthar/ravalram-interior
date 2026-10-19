"use client";

import { motion, useReducedMotion } from "motion/react";

// Slide-in on scroll: blocks travel 100px from their side while fading in
const OFFSETS = {
  left: { x: -100 },
  right: { x: 100 },
  bottom: { y: 100 },
  top: { y: -100 },
};

export const EASE_OUT = [0.33, 1, 0.68, 1];

export default function Reveal({
  as = "div",
  direction = "bottom",
  delay = 0.3,
  duration = 1.15,
  className,
  children,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...OFFSETS[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
