"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    projectImg: "/images/h1-banner04.jpg",
    rating: 4.8,
    reviews: "2,688 reviews",
    title:
      "From Concept To Reality, The Team Turned My Vision Into A Stunning, Livable Space. I Couldn’t Be Happier With This!",
    quote:
      "I absolutely love my new modern living room! The clean lines, neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommend their modern interior design services!",
    name: "Morgan Dufresne",
    role: "Company Owner",
    avatar: "/images/team-1.jpg",
  },
  {
    projectImg: "/images/h1-banner05.jpg",
    rating: 4.9,
    reviews: "1,932 reviews",
    title:
      "They Transformed Our Office Into a Stunning, Productive Space Beyond Expectations!",
    quote:
      "The attention to detail and professionalism was remarkable. Every design decision made sense — elegant, functional, and inspiring.",
    name: "Alicia Fernandez",
    role: "Business Owner",
    avatar: "/images/team-1.jpg",
  },
  {
    projectImg: "/images/h1-banner06.jpg",
    rating: 5.0,
    reviews: "3,104 reviews",
    title:
      "Highly recommend their interior design expertise. They brought my dream home to life!",
    quote:
      "Everything from materials to final touches was handled beautifully. It’s modern, cozy, and timeless — exactly what I wanted.",
    name: "Daniel Green",
    role: "Architect",
    avatar: "/images/team-1.jpg",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="client-section px-6 py-20">
      {/* Header */}
      <div className="mb-12 text-left md:text-center">
        <span className="inline-block tag-box mb-4">OUR CLIENTS SAY</span>
        <h2 className="section-heading">
          Here’s What <span className="highlight-text">Warm Words</span> Our Clients Say
        </h2>
      </div>

      {/* Swiper wrapper - keep a parent so pagination element can be positioned below the image */}
      <div className="client-swiper-wrap mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            // use the custom element below as pagination container
            el: ".client-pagination",
            clickable: true,
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={1}
          className="client-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-wrapper">
                {/* LEFT - IMAGE + custom pagination container below it */}
                <div className="testimonial-left">
                  <div className="testimonial-image-wrapper">
                    <Image
                      src={item.projectImg}
                      alt="project"
                      fill
                      className="testimonial-img"
                      priority={index === 0}
                    />
                  </div>

                  {/* pagination for this swiper is shared, but placed visually below the image */}
                  {/* The .client-pagination element is outside the slide so it persists; Swiper will populate it. */}
                </div>

                {/* RIGHT - content */}
                <div className="testimonial-right">
                  <div className="rating-row">
                    <div className="rating-number">{item.rating.toFixed(2)}</div>
                    <div className="rating-badge">
                      <div className="stars">★★★★★</div>
                    </div>
                    <div className="reviews-text">{item.reviews}</div>
                  </div>

                  <h3 className="testimonial-title">{item.title}</h3>

                  <div className="testimonial-quote">“{item.quote}”</div>

                  <div className="client-info">
                    <div className="avatar-wrap">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="client-avatar"
                      />
                    </div>
                    <div>
                      <div className="client-name">{item.name}</div>
                      <div className="client-role">{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

          <div className="client-pagination" />
        {/* CUSTOM PAGINATION: positioned below the left image visually via CSS */}
        
      </div>
    </section>
  );
}
