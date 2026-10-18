"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "../VideoModal";
import { VIDEO } from "../../../lib/home-content";

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative isolate flex min-h-150 flex-col justify-end overflow-hidden lg:h-224">
      <img src={VIDEO.background.src} alt={VIDEO.background.alt} loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/35" />

      {VIDEO.youtubeId && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Play studio video"
          className="group absolute left-1/2 top-1/3 grid size-30 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 sm:size-42 lg:top-[37%]"
        >
          <span className="grid size-26 place-items-center rounded-full bg-white/25 backdrop-blur-md transition-colors duration-300 group-hover:bg-primary sm:size-37">
            <Play className="size-8 fill-white text-white" />
          </span>
        </button>
      )}

      <div className="mx-auto flex w-full max-w-site flex-col gap-6 px-5 pb-12 lg:flex-row lg:items-end lg:gap-14 lg:pb-16">
        <h2 data-cursor="lg" className="max-w-260 font-heading text-display capitalize text-white">
          {VIDEO.title}
        </h2>
        <p className="max-w-100 text-lead font-medium text-white lg:mb-6">{VIDEO.text}</p>
      </div>

      {VIDEO.youtubeId && (
        <VideoModal open={open} onClose={() => setOpen(false)} youtubeId={VIDEO.youtubeId} title="Suthar Living studio video" />
      )}
    </section>
  );
}
