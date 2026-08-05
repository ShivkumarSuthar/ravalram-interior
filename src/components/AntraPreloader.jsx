"use client";

import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo.jsx";

const SLATS = 12;

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [exit, setExit] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 1800);

    const removeTimer = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div className={`preloader ${exit ? "exit" : ""}`} suppressHydrationWarning>
      <div className="slats">
        {[...Array(SLATS)].map((_, i) => (
          <div
            key={i}
            className="slat"
            style={{
              "--delay": `${i * 60}ms`,
            }}
          >
            <span className="front" />
            <span className="back" />
          </div>
        ))}
      </div>

      <div className="logo flex justify-center">
        <BrandLogo size="xl" />
      </div>
    </div>
  );
}