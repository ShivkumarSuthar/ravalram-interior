import Hero from "@/componets/HeroSection";
import Navbar from "@/componets/Navbar";
import React from "react";
import fs from "fs";
import path from "path";
import AboutSection from "@/componets/AboutSection";
import ServiceSection from "@/componets/ServicesSection";
import Image from "next/image";
import ProcessSection from "@/componets/ProcessSection";
import ProjectPage from "@/componets/ProjectPage";
import TestimonialsSection from "@/componets/TestimonialsSection";
import BlogSection from "@/componets/BlogSection";
import VideoContainer from "@/componets/VideoContainer";
import Footer from "@/componets/Footer";
import Gallery from "@/componets/Gallery";

function page() {
  const filePath = path.join(process.cwd(), "src/app/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { navbar } = JSON.parse(jsonData);
  return (
    <section>
      <div className="hero-page-banner">
        <Navbar data={navbar} />
        <Hero />
      </div>
      <AboutSection />
      <ServiceSection />
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/images/gallery-9.jpg"
          alt="Bottom Wave"
          fill
          className="object-cover"
        />
      </div>
      <ProcessSection />
      <ProjectPage />
      <TestimonialsSection />
      <VideoContainer />
      <BlogSection />
      <Gallery/>
      <Footer />
    </section>
  );
}

export default page;
