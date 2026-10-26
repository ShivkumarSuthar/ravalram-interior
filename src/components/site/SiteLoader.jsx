"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LogoLoader from "./LogoLoader";
import { LOADER_KEY } from "../../lib/theme-script";

// The mark needs about 2 seconds to finish drawing (S, then B), so the intro never ends before that.
// Measured from the start of the page load, so a slow load does not stack an extra delay on top.
const MIN_VISIBLE_MS = 2200;

const pageLoaded = () =>
  document.readyState === "complete"
    ? Promise.resolve()
    : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));

// Intro loader, first visit of a session only: server-rendered so it covers the page from the first
// paint, then lifts away once the page has loaded and the mark has finished drawing.
// Later page loads skip it (the head script sets html[data-loader="skip"]).
export default function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(LOADER_KEY) !== null;
    } catch {}
    if (seen) {
      // sessionStorage only exists in the browser; the server always renders the loader
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    let cancelled = false;
    // Smooth-scroll starts after this effect; stop it on the next microtask so the page stays put
    document.documentElement.style.overflow = "hidden";
    Promise.resolve().then(() => window.lenis?.stop());

    const release = () => {
      document.documentElement.style.overflow = "";
      window.lenis?.start();
    };

    const remaining = Math.max(0, MIN_VISIBLE_MS - performance.now());
    Promise.all([new Promise((resolve) => setTimeout(resolve, remaining)), pageLoaded()]).then(() => {
      if (cancelled) return;
      try {
        sessionStorage.setItem(LOADER_KEY, "1");
      } catch {}
      release();
      setVisible(false);
    });

    return () => {
      cancelled = true;
      release();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="site-loader"
          role="status"
          className="site-loader fixed inset-0 z-[9999] grid place-items-center bg-bg-base"
          initial={false}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center px-5 text-center">
            <LogoLoader className="size-44 sm:size-52" />
            <p className="mt-6 font-heading text-card-lg text-ink">
              Suthar <span className="text-primary">Brothers</span>
            </p>
            <p className="mt-2 font-heading text-eyebrow uppercase text-text-muted">Interior Design &amp; Execution</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
