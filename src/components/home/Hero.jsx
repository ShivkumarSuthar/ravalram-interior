"use client";

import { useRef } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { hero } from "@/data/site";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-subtitle", {
      opacity: 0,
      y: 30,
      duration: 0.6,
    })
      .from(
        ".hero-title span",
        {
          opacity: 0,
          y: 80,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .from(
        ".hero-desc",
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        ".hero-buttons",
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
        },
        "-=0.3"
      )
      .from(
        ".hero-image",
        {
          opacity: 0,
          scale: 0.9,
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        ".hero-card",
        {
          opacity: 0,
          x: -40,
          duration: 0.6,
        },
        "-=0.4"
      );
  }, { scope: sectionRef });

  return (
    <section
        id = "hero"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8F6F2] pt-32 lg:pt-24"
    >
      {/* Background Blobs */}
      <div className="absolute -left-52 top-0 h-[500px] w-[500px] rounded-full bg-amber-200/30 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-100 blur-[120px]" />

      <Container>
        <div className="grid min-h-[90vh] items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="hero-subtitle inline-block uppercase tracking-[6px] text-amber-600 font-medium">
              {hero.subtitle}
            </span>

            <h1 className="hero-title mt-8 text-5xl font-bold leading-none md:text-7xl lg:text-8xl">
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="hero-desc mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              {hero.description}
            </p>

            <div className="hero-buttons mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-amber-600 px-8 hover:bg-amber-700"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="hero-image relative h-[650px] w-[480px] overflow-hidden rounded-[250px] shadow-2xl">
              <Image
                src={hero.image}
                alt="Luxury Interior"
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px)100vw,480px"
              />
            </div>

            {/* Floating Card */}
            <div className="hero-card absolute -left-5 bottom-20 rounded-3xl bg-white p-8 shadow-2xl">
              <h3 className="text-5xl font-bold text-amber-600">
                <CountUp
                  end={hero.experience}
                  duration={2.5}
                  enableScrollSpy
                />
                +
              </h3>

              <p className="mt-2 text-neutral-500">
                Years Experience
              </p>

              <div className="mt-8 flex gap-8">
                <div>
                  <h4 className="text-2xl font-bold">
                    <CountUp
                      end={hero.projects}
                      duration={2.5}
                      enableScrollSpy
                    />
                  </h4>
                  <span className="text-sm text-neutral-500">
                    Projects
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-bold">
                    <CountUp
                      end={hero.clients}
                      duration={2.5}
                      enableScrollSpy
                    />
                  </h4>
                  <span className="text-sm text-neutral-500">
                    Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 