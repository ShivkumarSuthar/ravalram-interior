"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Draggable looping project carousel; details slide up on hover (always shown on touch screens)
export default function ProjectsCarousel({ items }) {
  // Loop needs at least twice the visible slides, so the list is shown twice
  const slides = [...items, ...items];

  return (
    <Swiper
      loop
      grabCursor
      speed={800}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{ 767: { slidesPerView: 2 }, 1024: { slidesPerView: 2.45 } }}
      className="overflow-visible!"
    >
      {slides.map((project, i) => (
        <SwiperSlide key={`${project.href}-${i}`}>
          <Link href={project.href} className="group relative block h-112.5 overflow-hidden rounded-3xl lg:h-170">
            <img src={project.image} alt={`${project.title}, ${project.location}`} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div
              aria-hidden
              className="absolute inset-x-0 -bottom-2.5 top-0 bg-linear-to-t from-black/85 to-transparent to-60% opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100 group-focus-visible:bottom-0 group-focus-visible:opacity-100 pointer-coarse:bottom-0 pointer-coarse:opacity-100"
            />
            <div className="absolute bottom-10 left-6 right-6 opacity-0 transition-all duration-300 group-hover:bottom-12.5 group-hover:opacity-100 group-focus-visible:bottom-12.5 group-focus-visible:opacity-100 pointer-coarse:bottom-8 pointer-coarse:opacity-100 sm:left-10">
              <ul className="mb-5 flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-white px-3.75 py-1.25 font-heading text-eyebrow uppercase text-white">
                    {tag}
                  </li>
                ))}
              </ul>
              <h3 className="mb-2.5 font-heading text-card-lg leading-none text-white">{project.title}</h3>
              <p className="text-base leading-7 text-white">{project.location}</p>
              <p className="text-base leading-7 text-white">{project.year}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
