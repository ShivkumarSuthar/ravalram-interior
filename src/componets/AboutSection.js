"use client";
import {
  PanelsTopLeft,
  LayoutDashboard,
  Lightbulb,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const services = [
    {
      title: "Architectural Design",
      desc: "Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
      icon: <PanelsTopLeft className="icon-style" />,
    },
    {
      title: "Interior Design & Planning",
      desc: "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
      icon: <LayoutDashboard className="icon-style" />,
    },
    {
      title: "Consulting Services",
      desc: "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
      icon: <Lightbulb className="icon-style" />,
    },
    {
      title: "Project Management",
      desc: "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free — so you can sit back and watch the magic happen.",
      icon: <Layers className="icon-style" />,
    },
  ];

  return (
    <section className="about-container">
      <div className="about-section px-6 py-10">
        {/* faint background lines */}

        <div className="">
          <div className="flex justify-between items-start mb-6">
            {/* Label */}
            <div className="">
              <span className="tag-box mt-2">Who We Are</span>
            </div>

            {/* Heading */}
            <div className="">
              <h2 className="section-heading">
                Experience{" "}
                <span className="highlight-text">The Art Of Interior</span>
                <br /> Design
              </h2>
              {/* Subtext */}
              <p className="section-desc">
                We specialize in transforming visions into reality. Explore our
                portfolio of innovative architectural and interior design
                projects crafted with precision.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <div className="card-header flex justify-between items-start mb-4">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="icon-box">{service.icon}</span>
                </div>
                <div className="divider"></div>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="more-about-container">
        <div className="content-wrapper px-6 py-10">
          <div className="text-container">
            <span className="tag-box mb-10">Since 1991</span>
            <h2 className="section-heading">
              Where Spaces Inspire, <br />
              And <span className="highlight-text">Design Comes Alive</span>
            </h2>

            <ul className="features-list">
              <li>Latest Technologies</li>
              <li>5 Years Warranty</li>
              <li>High-Quality Designs</li>
              <li>Residential Design</li>
            </ul>

            <p className="section-desc">
              Whether it’s your home, office, or a commercial project, we are
              always dedicated to bringing your vision to life. Our numbers
              speak better than words.
            </p>

            <a href="#" className="cta-hero-btn">
              Take Counsel
              <span className="icon">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>

          <div className="image-container">
            <Image
              src="/images/h1-banner01.jpg"
              alt="About Background"
              fill
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
