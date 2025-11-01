"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".gallery-row");

      rows.forEach((row, i) => {
        const direction = i % 2 === 0 ? "+=250" : "-=250"; // alternate left-right
        gsap.to(row, {
          x: direction,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative overflow-hidden bg-gray-100 py-32"
    >
      {/* Faded Background Text */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[10rem] font-extrabold text-gray-200 uppercase pointer-events-none select-none z-0">
        Gallery
      </h1>

      <div className="flex flex-col gap-20 relative z-10">
        {/* Row 1 (moves right) */}
        <div className="gallery-row flex gap-6 justify-center flex-wrap">
          <img src="/images/h1-banner01.jpg" className="rounded-xl shadow-lg object-cover w-[280px] h-[220px]" alt="" />
          <img src="/images/h1-banner02.png" className="rounded-xl shadow-lg object-cover w-[400px] h-[280px]" alt="" />
          <img src="/images/h1-banner04.jpg" className="rounded-xl shadow-lg object-cover w-[300px] h-[200px]" alt="" />
        </div>

        {/* Row 2 (moves left) */}
        <div className="gallery-row flex gap-6 justify-center flex-wrap">
          <img src="/images/project-7-1536x1080.jpg" className="rounded-xl shadow-lg object-cover w-[400px] h-[250px]" alt="" />
          <img src="/images/project-8-1536x1080.jpg" className="rounded-xl shadow-lg object-cover w-[300px] h-[220px]" alt="" />
          <img src="/images/project-9-1536x1080.jpg" className="rounded-xl shadow-lg object-cover w-[420px] h-[300px]" alt="" />
        </div>
      </div>
    </section>
  );
}
