"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Art Deco Revival",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["SINGLE HOME"],
    img: "/images/project-7-1536x1080.jpg",
  },
  {
    title: "Golden Ratio Residence",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["SINGLE HOME"],
    img: "/images/project-8-1536x1080.jpg",
  },
  {
    title: "Nordic Minimalist Loft",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["RESIDENTIAL", "SINGLE HOME"],
    img: "/images/project-9-1536x1080.jpg",
  },
  {
    title: "Industrial Elegance Condo",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["RESIDENTIAL"],
    img: "/images/project-10-1536x1080.jpg",
  },
  {
    title: "Serene Space Studio",
    location: "Germany",
    year: "2025",
    tags: ["RESIDENTIAL"],
    img: "/images/project-11-1536x1080.jpg",
  },
  {
    title: "Modern Classic Villa",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["SINGLE HOME"],
    img: "/images/project-12-1536x1080.jpg",
  },
];

export default function ProjectPage() {
  return (
    <section className="project-page-container py-20 px-6 relative">
      {/* Header */}
      <div className="px-10 flex gap-[20px] items-start mb-10">
        <div className="w-[30%]">
          <span className="tag-box ">Our Projects</span>
        </div>
        <div>
          <h2 className="section-heading">
            Creative{" "}
            <span className="highlight-text">Projects That Define</span>&nbsp;
            Our Style
          </h2>
          <p className="section-desc">
            Our portfolio showcases a diverse range of projects, from
            beautifully crafted residential spaces to functional and stylish
            commercial interiors.
          </p>
        </div>
      </div>


      {/* Carousel */}
      <div className="relative">
      {/* Custom Nav Buttons */}
      <div className="absolute left-2 top-[30%] translate-y-1/2 z-10">
        <button className="custom-nav-btn prev-btn">
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute right-2 top-[30%] translate-y-1/2 z-10">
        <button className="custom-nav-btn next-btn">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="relative group overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[450px] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[var(--color-primary)] text-white flex items-center justify-center rounded-full text-sm uppercase font-semibold">
                    View
                  </div>
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs font-semibold bg-white/90 text-gray-800 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Text */}
              <div className="mt-5">
                <h3 className="text-lg font-bold font-[var(--font-heading)]">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 font-[var(--font-body)]">
                  {p.location}
                </p>
                <p className="text-sm text-gray-600 font-[var(--font-body)]">
                  {p.year}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
