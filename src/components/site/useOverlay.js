"use client";

import { useEffect, useRef } from "react";

// Shared behaviour for popups: Escape closes, page scroll pauses, focus returns to the opener
export default function useOverlay(open, onClose) {
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") closeRef.current();
    };
    window.addEventListener("keydown", onKey);
    window.lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      window.lenis?.start();
      document.documentElement.style.overflow = "";
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [open]);
}
