"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import Image from "next/image";

// Photo grid that opens a full-screen viewer (the only interactive part of the projects page)
export default function GalleryGrid({ images }) {
  const [viewing, setViewing] = useState(null);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {images.map((img, i) => (
          <Reveal as="li" key={img.src} delay={(i % 4) * 0.08} duration={1} className={i % 5 === 0 ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={() => setViewing(i)}
              aria-label={`View larger: ${img.alt}`}
              className={`group relative block w-full overflow-hidden rounded-3xl ${i % 5 === 0 ? "h-full min-h-75" : "h-45 sm:h-75"}`}
            >
              <Image src={img.src} alt={img.alt} fill sizes={i % 5 === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span aria-hidden className="absolute inset-0 grid place-items-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                <span className="grid size-14 place-items-center rounded-full bg-primary">
                  <Expand className="size-5" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>
      <Lightbox images={images} index={viewing} onChange={setViewing} onClose={() => setViewing(null)} />
    </>
  );
}
