import AboutSection from "@/componets/About/AboutSection";
import ContactLayout from "@/componets/contact/ContactLayout";
import FooterLayout from "@/componets/footer/FooterLayout";
import HeroLayout from "@/componets/Hero/HeroLayout";
import Navbar from "@/componets/Navbar/Navbar";
import ProcessSectionComponent from "@/componets/ProcessSection/ProcessSection";
import ServiceLayout from "@/componets/Services/ServiceLayout";
import VideoContainer from "@/componets/VideoContainer/VideoContainer";
import fs from "fs";
import Image from "next/image";
import path from "path";

function page() {
  const filePath = path.join(process.cwd(), "src/app/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { navbar } = JSON.parse(jsonData);

  return (
    <section>
      {/* HERO */}
      <div className="hero-page-banner" data-section="home">
        <HeroLayout />
      </div>

      {/* ABOUT */}
      <section data-section="about">
        <AboutSection />
      </section>

      {/* IMAGE DIVIDER */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/images/gallery-9.jpg"
          alt="Bottom Wave"
          fill
          className="object-cover"
        />
      </div>

      {/* SERVICES */}
      <section data-section="services">
        <ServiceLayout />
      </section>

      {/* PROCESS / WORK */}
      <section data-section="work">
        <ProcessSectionComponent />
      </section>

      {/* VIDEO */}
      <VideoContainer />

      {/* CONTACT */}
      <section data-section="contact">
        <ContactLayout />
      </section>

      {/* FOOTER */}
      <FooterLayout />
    </section>
  );
}

export default page;
