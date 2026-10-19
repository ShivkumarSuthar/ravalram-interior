import VideoPlayButton from "./VideoPlayButton";
import { VIDEO } from "../../../lib/home-content";

// Server-rendered banner; the play button appears only once a video ID is set in home-content.js
export default function VideoSection() {
  return (
    <section className="relative isolate flex min-h-150 flex-col justify-end overflow-hidden lg:h-224">
      <img src={VIDEO.background.src} alt={VIDEO.background.alt} loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/35" />

      {VIDEO.youtubeId && <VideoPlayButton youtubeId={VIDEO.youtubeId} />}

      <div className="mx-auto flex w-full max-w-site flex-col gap-6 px-5 pb-12 lg:flex-row lg:items-end lg:gap-14 lg:pb-16">
        <h2 data-cursor="lg" className="max-w-260 font-heading text-display capitalize text-white">
          {VIDEO.title}
        </h2>
        <p className="max-w-100 text-lead font-medium text-white lg:mb-6">{VIDEO.text}</p>
      </div>
    </section>
  );
}
