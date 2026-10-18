"use client";

import { useEffect, useRef } from "react";

// Gold dot that trails the pointer; grows and inverts over elements marked data-cursor="lg"
export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = dotRef.current;
    if (!fine || reduce || !dot) return;

    let targetX = 0, targetY = 0, x = 0, y = 0, scale = 1, rafId = null;

    const render = () => {
      x += (targetX - x) * 0.35;
      y += (targetY - y) * 0.35;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
      rafId = requestAnimationFrame(render);
    };

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.visibility = "visible";
      const large = e.target instanceof Element && e.target.closest("[data-cursor='lg']");
      scale = large ? 7 : 1;
      dot.dataset.large = large ? "true" : "false";
      if (!rafId) rafId = requestAnimationFrame(render);
    };
    const onLeave = () => { dot.style.visibility = "hidden"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      data-large="false"
      className="pointer-events-none invisible fixed left-0 top-0 z-[10000] size-2.5 rounded-full bg-primary transition-[transform,background-color] duration-200 ease-out data-[large=true]:bg-white data-[large=true]:mix-blend-difference"
    />
  );
}
