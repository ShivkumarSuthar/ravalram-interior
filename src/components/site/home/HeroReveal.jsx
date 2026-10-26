"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "../Reveal";

// Slide-in wrapper for hero blocks; waits for the intro curtain on a first visit.
// Children stay server-rendered; only this wrapper runs in the browser.
export default function HeroReveal({ from, className, children }) {
  const reduceMotion = useReducedMotion();
  const [delay, setDelay] = useState(null);
  useEffect(() => {
    // First visit: start while the intro loader is lifting (it leaves at about 2s, then slides away)
    // Browser-only flag, read after hydration so server and client render the same markup
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDelay(window.__sutharPreloading ? 2.3 : 0.3);
  }, []);

  const offset = { left: { x: -100 }, right: { x: 100 }, bottom: { y: 100 } }[from];
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      animate={delay === null ? undefined : { opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.15, delay: delay ?? 0, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
