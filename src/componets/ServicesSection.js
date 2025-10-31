"use client";
import {
  PanelsTopLeft,
  LayoutDashboard,
  Lightbulb,
  Layers,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  {
    id: 1,
    title: "Residential Interior Design",
    desc: "Tailored design services for private homes, including room makeovers and complete home transformations.",
    img: "/images/service-1.jpg",
  },
  {
    id: 2,
    title: "Outdoor & Landscape Design",
    desc: "Crafting outdoor environments that blend beauty with function — gardens, patios, and open spaces.",
    img: "/images/service-2.jpg",
  },
  {
    id: 3,
    title: "Interior Design Consultation",
    desc: "Get expert advice and professional insight to refine your design ideas into actionable plans.",
    img: "/images/service-3.jpg",
  },
  {
    id: 4,
    title: "Commercial Interior Design",
    desc: "Designing smart and aesthetic commercial spaces that elevate productivity and brand experience.",
    img: "/images/service-4.jpg",
  },
  {
    id: 5,
    title: "Renovation And Remodeling",
    desc: "Revive your old spaces with modern design ideas and efficient remodeling strategies.",
    img: "/images/service-5.jpg",
  },
  {
    id: 6,
    title: "Interior 2D/3D Layouts",
    desc: "Visualize your dream spaces before they come to life with our advanced 3D rendering services.",
    img: "/images/service-6.jpg",
  },
];

const stats = [
  {
    number: "2013",
    title: "Years Experience",
    desc: "Improving homes with expert craftsmanship for years",
  },
  {
    number: "190+",
    title: "Projects Completed",
    desc: "Over 250 successful projects delivered with quality and care",
  },
  {
    number: "260+",
    title: "Skilled Tradespeople",
    desc: "Our team of 30 experts ensures top-quality results",
  },
  {
    number: "328+",
    title: "Client Satisfaction",
    desc: "All of our clients are satisfied with our work and service",
  },
];

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change service every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-container">
      <div className="service-section px-6 py-10">
        <div>
          {/* Top Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="tag-box mt-2">Our Services</span>
            </div>

            <div>
              <h2 className="section-heading">
                Explore our{" "}
                <span className="highlight-text">
                  comprehensive interior design
                </span>
                <br /> services
              </h2>
              <p className="section-desc">
                We specialize in transforming visions into reality. Explore our
                portfolio of innovative architectural and interior design
                projects crafted with precision.
              </p>
            </div>
          </div>

          {/* Service Layout */}
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  key={services[activeIndex].img}
                  src={services[activeIndex].img}
                  alt={services[activeIndex].title}
                  width={700}
                  height={500}
                  className="object-cover w-full h-[500px] transition-all duration-700 ease-in-out"
                />
              </div>

              <div className="absolute bottom-5 left-5 bg-[#333]/80 text-white p-5 rounded-2xl max-w-md">
                <p className="text-sm md:text-base">
                  {services[activeIndex].desc}
                </p>
              </div>
            </div>

            {/* Right List */}
            <div>
              <ul>
                {services.map((service, i) => (
                  <li
                    key={i}
                    className={`service-list-item ${
                      i === activeIndex ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <div className="flex items-center gap-5">
                      <span className="index-text">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-service-title">
                        {service.title}
                      </span>
                    </div>
                    {i === activeIndex ? (
                      <ArrowUpRight
                        size={30}
                        className="text-[var(--color-brand)]"
                      />
                    ) : (
                      <ArrowRight size={30} className="text-gray-400" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-6">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-client-number">{stat.number}</h3>
              <h4 className="text-client-title">{stat.title}</h4>
              <p className="">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
