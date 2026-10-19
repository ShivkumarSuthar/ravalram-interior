"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "../VideoModal";

// Round play button that opens the studio video in a popup
export default function VideoPlayButton({ youtubeId }) {
  const [open, setOpen] = useState(false);

  return (
    <>
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
      <VideoModal open={open} onClose={() => setOpen(false)} youtubeId={youtubeId} title="Suthar Brothers studio video" />
    </>
  );
}
