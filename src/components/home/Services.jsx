"use client";

import { useRef } from "react";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { services } from "@/data/site";

export default function Services() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-[#F7F4EF]"
    >
      <Container>
        <SectionTitle
          subtitle="Our Services"
          title="Luxury Interior Design Solutions"
          description="From concept to completion, we craft beautiful interiors that combine functionality with timeless elegance."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = Icons[service.icon] || Icons.House;

            return (
              <div
                key={service.id}
                className="service-card group relative overflow-hidden rounded-[30px] border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl"
              >
                {/* Number */}
                <span className="absolute right-8 top-6 text-7xl font-bold text-neutral-100 transition group-hover:text-amber-100">
                  {service.id}
                </span>

                {/* Icon */}
                <div className="relative z-10 mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition-all duration-500 group-hover:bg-amber-600">
                  <Icon className="h-8 w-8 text-amber-600 transition group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-semibold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-5 leading-8 text-neutral-600">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="my-8 h-px bg-neutral-200 transition group-hover:bg-amber-300" />

                {/* Button */}
                <button className="relative z-10 flex items-center gap-2 font-medium text-amber-600 transition-all duration-300 group-hover:translate-x-2">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </button>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-white opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}