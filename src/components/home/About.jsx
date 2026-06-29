"use client";

import { useRef } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { about } from "@/data/site";
import CountUp from "react-countup";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function About() {
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.from(".about-image", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(".about-content", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-white relative overflow-hidden"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Image */}

          <div className="relative">

            <div className="about-image relative h-[650px] rounded-[40px] overflow-hidden shadow-2xl">

              <Image
                src={about.image}
                alt="About"
                fill
                className="object-cover"
              />

            </div>

            {/* Floating Experience */}

            <div className="absolute -bottom-10 -right-10 bg-white rounded-3xl p-8 shadow-2xl">

              <h3 className="text-5xl font-bold text-amber-600">

                <CountUp
                  end={about.experience}
                  duration={3}
                />

                +

              </h3>

              <p className="mt-2 text-neutral-500">

                Years Experience

              </p>

            </div>

          </div>

          {/* Content */}

          <div className="about-content">

            <SectionTitle
              center={false}
              subtitle={about.subtitle}
              title={about.title}
              description={about.description}
            />

            <div className="mt-10 space-y-5">

              {about.features.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">

                    <Check className="text-amber-600 w-5 h-5" />

                  </div>

                  <span className="text-lg">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            <Button
              className="mt-12 rounded-full px-8 h-12 bg-amber-600 hover:bg-amber-700"
            >

              Learn More

              <ArrowRight className="ml-2 w-4 h-4"/>

            </Button>

          </div>

        </div>
      </Container>

      {/* Decorative Blur */}

      <div className="absolute -right-44 top-20 h-[400px] w-[400px] rounded-full bg-amber-100 blur-[140px]" />

    </section>
  );
}