

import AboutSection from "@/componets/AboutSection";
import Footer from "@/componets/footer/Footer";
import HeroClient from "@/componets/Hero/HeroClient";
import NavbarWithSkeleton from "@/componets/Navbar/NavbarShell";
import ProcessSectionComponent from "@/componets/ProcessSection";
import ServiceSectionComponent from "@/componets/ServicesSection";
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
        <HeroClient />
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
      <ServiceSectionComponent />
      <ProcessSectionComponent />
      <VideoContainer />
      <Footer />
    </section>
  );
}

export default page;
