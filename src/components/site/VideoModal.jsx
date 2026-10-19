"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import useOverlay from "./useOverlay";

export default function VideoModal({ open, onClose, youtubeId, title }) {
  useOverlay(open, onClose);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[95] grid place-items-center bg-black/85 p-5"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Close video"
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-primary hover:bg-primary"
          >
            <X className="size-5" />
          </button>
          <motion.div
            className="aspect-video w-full max-w-5xl overflow-hidden rounded-3xl bg-black"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.92 }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="size-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
