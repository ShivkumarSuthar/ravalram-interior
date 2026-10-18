"use client";

import SEOHelper from "../components/SEOHelper";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import HeroSection from "../components/site/home/HeroSection";
import ServicesSection from "../components/site/home/ServicesSection";
import AboutSection from "../components/site/home/AboutSection";
import ProjectsSection from "../components/site/home/ProjectsSection";
import ExpertiseSection from "../components/site/home/ExpertiseSection";
import VideoSection from "../components/site/home/VideoSection";
import ProcessSection from "../components/site/home/ProcessSection";
import GallerySection from "../components/site/home/GallerySection";
import PricingSection from "../components/site/PricingSection";
import { PRICING } from "../lib/pages-content";
import JournalSection from "../components/site/home/JournalSection";
import NewsletterSection from "../components/site/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <SEOHelper currentView="home" />
      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <ExpertiseSection />
        <VideoSection />
        <ProcessSection />
        <div className="bg-bg-soft">
          <PricingSection categoryIds={PRICING.homeCategories} flushTop />
        </div>
        <GallerySection />
        <JournalSection />
        <NewsletterSection />
      </main>

      <SiteFooter />
    </>
  );
}
