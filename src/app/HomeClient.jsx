"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import SEOHelper from "../components/SEOHelper";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import LobbyBanner from "../components/LobbyBanner";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import OurProcess from "../components/OurProcess";
import FlexibleSolutions from "../components/FlexibleSolutions";
import CreativeProjects from "../components/CreativeProjects";
import Awards from "../components/Awards";
import ExpertBento from "../components/ExpertBento";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/ContactForm";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();

  const handleNavigate = (view) => {
    if (view === "home") {
      router.push("/");
    } else {
      router.push(`/${view}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SEOHelper currentView="home" />
      <Header currentView="home" setView={handleNavigate} />
      
      <main className="relative z-10" id="main-content">
        <motion.div
          key="home-presentation"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* 1. Fullscreen majestic Hero */}
          <Hero setView={handleNavigate} />

          {/* 2. Brand story introduction (We Shape Interior Designs...) */}
          <About setView={handleNavigate} />

          {/* 3. Core Expertise (Explore Our Comprehensive...) */}
          <Services />

          {/* 3.5. Flexible Solutions & 3D Visualization Pathway */}
          <FlexibleSolutions setView={handleNavigate} />

          {/* 4. Full-width reception lobby presentation banner with play button */}
          <LobbyBanner />

          {/* 5. Metrics & stats (Behind Every Statistic...) */}
          <Stats />

          {/* 5.5. Why Choose Suthar Interior Studio Section */}
          <WhyChooseUs setView={handleNavigate} />

          {/* 6. Creative Works portfolio (Creative Projects That Define...) */}
          <CreativeProjects />

          {/* 7. Design Awards showcase (Design That Speaks...) */}
          <Awards />

          {/* 8. Progress metrics & bento bedroom render layout */}
          <ExpertBento />

          {/* 10. Creative brain experts list (Meet The Experts Our...) */}
          <Team />

          {/* 11. Client Testimonial quotes */}
          <Testimonial />

          {/* 13. Contact Form (Have A Project In Mind?) */}
          <ContactForm setView={handleNavigate} />

          {/* 14. Magazine blogs list */}
          <Blog />

          {/* 15. Newsletter subscription circle */}
          <Newsletter />

          {/* 15.5. Final Emotional CTA Section */}
          <FinalCTA />
        </motion.div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </>
  );
}
