"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Round scroll meter in the corner; shows % read, becomes an arrow near the end, scrolls to top on click
export default function ScrollProgress() {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const top = document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setValue(max > 0 ? Math.round((top / max) * 100) : 0);
      setVisible(top > 100);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const toTop = () => {
    if (window.lenis) window.lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 right-4 z-[100] grid size-12 place-items-center rounded-full shadow-xl transition-all duration-300 sm:bottom-5 sm:right-5 sm:size-15 lg:bottom-12.5 lg:right-12.5 ${
        visible ? "visible scale-100 opacity-100" : "invisible scale-0 opacity-0"
      }`}
      style={{ background: `conic-gradient(var(--color-bg-base) ${value}%, var(--color-primary) ${value}%)` }}
    >
      <span className="absolute inset-0.75 grid place-items-center rounded-full bg-bg-base font-sans text-eyebrow font-semibold text-primary">
        {value < 96 ? `${value}%` : <ArrowUp className="size-4.5 sm:size-5" />}
      </span>
    </button>
  );
}
