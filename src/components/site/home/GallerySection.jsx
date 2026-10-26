import Reveal from "../Reveal";
import Eyebrow from "../Eyebrow";
import GalleryCarousel from "./GalleryCarousel";
import { GALLERY } from "../../../lib/home-content";
import Image from "next/image";

// Server-rendered section; the carousel is the only client component
export default function GallerySection() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-40 lg:pb-32.5 lg:pt-97">
      <Image src={GALLERY.background.src} alt={GALLERY.background.alt} fill sizes="100vw" className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto grid max-w-site items-center gap-10 px-5 lg:grid-cols-3 lg:gap-5">
        <Reveal direction="left" className="lg:pr-20">
          <Eyebrow tone="light">{GALLERY.eyebrow}</Eyebrow>
          <h2 data-cursor="lg" className="mt-5 font-heading text-section-lg capitalize text-white">
            {GALLERY.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-white">{GALLERY.text}</p>
        </Reveal>
        <GalleryCarousel images={GALLERY.images} />
      </div>
    </section>
  );
}
