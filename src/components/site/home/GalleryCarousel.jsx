"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import Image from "next/image";

// Looping photo carousel with previous/next buttons
export default function GalleryCarousel({ images }) {
  const swiperRef = useRef(null);
  const navButton =
    "grid size-12.5 place-items-center rounded-full bg-primary text-white transition-colors duration-300 hover:bg-bg-base hover:text-ink";

  return (
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
        {[...images, ...images].map((img, i) => (
          <SwiperSlide key={`${img.src}-${i}`}>
            <Link href="/gallery" className="group relative block h-90 overflow-hidden rounded-3xl">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 767px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
  );
}
