
import AboutSection from "@/componets/AboutSection";
import BlogSection from "@/componets/BlogSection";
import Footer from "@/componets/footer/Footer";
import Gallery from "@/componets/Gallery";
import HeroSection from "@/componets/Hero/HeroSection";
import NavbarWithSkeleton from "@/componets/Navbar/NavbarShell";
import ProcessSection from "@/componets/ProcessSection";
import ProjectPage from "@/componets/ProjectPage";
import ServiceSection from "@/componets/ServicesSection";
import ClientTestimonials from "@/componets/TestimonialsSection";
import VideoContainer from "@/componets/VideoContainer";
import fs from "fs";
import Image from "next/image";
import path from "path";

function page() {
  const filePath = path.join(process.cwd(), "src/app/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { navbar } = JSON.parse(jsonData);
  return (
    <section>
      <div className="hero-page-banner">
        <NavbarWithSkeleton data={navbar} />
        <HeroSection />
      </div>
       <AboutSection />
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/images/gallery-9.jpg"
          alt="Bottom Wave"
          fill
          className="object-cover"
        />
      </div>
      <ServiceSection />
      <ProcessSection />
      {/* <ProjectPage /> */}
      {/* <ClientTestimonials /> */}
      <VideoContainer />
      {/* <BlogSection /> */}
      {/* <Gallery /> */}
      <Footer />
    </section>
  );
}

export default page;
