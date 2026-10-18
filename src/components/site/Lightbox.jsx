"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import useOverlay from "./useOverlay";

// Full-screen image viewer with previous/next and arrow-key support
export default function Lightbox({ images, index, onChange, onClose }) {
  const open = index !== null;
  useOverlay(open, onClose);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, images.length, onChange]);

  const navButton = "grid size-12.5 place-items-center rounded-full bg-primary text-white transition-colors hover:bg-bg-base hover:text-surface-dark";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[95] flex flex-col items-center justify-center gap-6 bg-black/90 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button type="button" onClick={onClose} autoFocus aria-label="Close viewer" className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-primary hover:bg-primary">
            <X className="size-5" />
          </button>
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index].src}
              src={images[index].src}
              alt={images[index].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[78vh] max-w-full rounded-3xl object-contain"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>
          <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <button type="button" aria-label="Previous image" onClick={() => onChange((index - 1 + images.length) % images.length)} className={navButton}>
              <ArrowLeft className="size-5" />
            </button>
            <span className="min-w-16 text-center font-heading text-base text-white">
              {index + 1} / {images.length}
            </span>
            <button type="button" aria-label="Next image" onClick={() => onChange((index + 1) % images.length)} className={navButton}>
              <ArrowRight className="size-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
