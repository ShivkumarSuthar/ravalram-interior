"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import Reveal from "../Reveal";
import Eyebrow from "../Eyebrow";
import { GALLERY } from "../../../lib/home-content";

export default function GallerySection() {
  const swiperRef = useRef(null);
  const navButton =
    "grid size-12.5 place-items-center rounded-full bg-primary text-white transition-colors duration-300 hover:bg-bg-base hover:text-surface-dark";

  return (
    <section className="relative isolate overflow-hidden pb-24 pt-40 lg:pb-32.5 lg:pt-97">
      <img src={GALLERY.background.src} alt={GALLERY.background.alt} loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto grid max-w-site items-center gap-10 px-5 lg:grid-cols-3 lg:gap-5">
        <Reveal direction="left" className="lg:pr-20">
          <Eyebrow tone="light">{GALLERY.eyebrow}</Eyebrow>
          <h2 data-cursor="lg" className="mt-5 font-heading text-section-lg capitalize text-white">
            {GALLERY.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-white">{GALLERY.text}</p>
        </Reveal>

        <div className="min-w-0 lg:col-span-2">
          <Swiper
            loop
            grabCursor
            speed={800}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 767: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {[...GALLERY.images, ...GALLERY.images].map((img, i) => (
              <SwiperSlide key={`${img.src}-${i}`}>
                <Link href="/gallery" className="group block h-90 overflow-hidden rounded-3xl">
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-10 flex gap-2.5">
            <button type="button" aria-label="Previous images" onClick={() => swiperRef.current?.slidePrev()} className={navButton}>
              <ArrowLeft className="size-5" />
            </button>
            <button type="button" aria-label="Next images" onClick={() => swiperRef.current?.slideNext()} className={navButton}>
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
