"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      const current = window.scrollY;

      setProgress((current / total) * 100);
    };

    update();

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-amber-500 z-[9999] transition-all"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}