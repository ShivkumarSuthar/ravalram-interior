"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024
    ) {
      return;
    }

    const cursor = cursorRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let posX = mouseX;
    let posY = mouseY;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    gsap.ticker.add(() => {
      posX += (mouseX - posX) * 0.18;
      posY += (mouseY - posY) * 0.18;

      gsap.set(cursor, {
        x: posX,
        y: posY,
      });
    });

    const hoverElements = document.querySelectorAll(
      "a, button, input, textarea, [data-cursor]"
    );

    const enter = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        backgroundColor: "rgba(200,155,99,0.2)",
      });
    };

    const leave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        backgroundColor: "transparent",
      });
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      gsap.ticker.remove(() => {});

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[99999] hidden lg:flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-500 pointer-events-none"
    >
      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
    </div>
  );
}