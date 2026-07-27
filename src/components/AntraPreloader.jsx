"use client";

import { useEffect, useState } from "react";

const SLATS = 12;

export default function Preloader() {
  const [exit, setExit] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
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

  if (hidden) return null;

  return (
    <div className={`preloader ${exit ? "exit" : ""}`}>
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

      <h1 className="logo">SUTHAR</h1>
    </div>
  );
}