

import AboutSection from "@/componets/About/AboutSection";
import Footer from "@/componets/footer/Footer";
import HeroClient from "@/componets/Hero/HeroClient";
import NavigationBar from "@/componets/Navbar/Navbar";
import ProcessSectionComponent from "@/componets/ProcessSection/ProcessSection";
import ProjectPage from "@/componets/ProjectPage";
import ServiceSectionComponent from "@/componets/Services/ServicesSection";
import VideoContainer from "@/componets/VideoContainer/VideoContainer";
import fs from "fs";
import Image from "next/image";
import path from "path";

function page() {
  const filePath = path.join(process.cwd(), "src/app/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { navbar } = JSON.parse(jsonData);
  console.log("navbar", navbar)
  return (
    <section>
      <div className="hero-page-banner">
        <NavigationBar menu={navbar} /> 
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
      {/* <ProjectPage/> */}
      <VideoContainer />      
       <Footer />
    </section>
  );
}

export default page;
