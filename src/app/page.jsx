import { getPageMetadata, generateSchema } from "../lib/seo";
import { PRICING } from "../lib/pages-content";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import HeroSection from "../components/site/home/HeroSection";
import ServicesSection from "../components/site/home/ServicesSection";
import BeforeAfterSection from "../components/site/home/BeforeAfterSection";
import AboutSection from "../components/site/home/AboutSection";
import ProjectsSection from "../components/site/home/ProjectsSection";
import ExpertiseSection from "../components/site/home/ExpertiseSection";
import VideoSection from "../components/site/home/VideoSection";
import ProcessSection from "../components/site/home/ProcessSection";
import PricingSection from "../components/site/PricingSection";
import GallerySection from "../components/site/home/GallerySection";
import JournalSection from "../components/site/home/JournalSection";
import NewsletterSection from "../components/site/home/NewsletterSection";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Suthar Brothers | Interior Design & Execution for Homes and Offices",
    description:
      "Suthar Brothers designs and builds home, office and commercial interiors: modular kitchens, wardrobes, custom furniture, renovation and turnkey projects, backed by 30+ years of experience.",
    path: "/",
  });
}

// Server-rendered page; only the interactive sections inside are client components
export default function HomePage() {
  const schemas = [
    generateSchema("Organization"),
    generateSchema("WebSite"),
    generateSchema("LocalBusiness", { title: "Suthar Brothers" }),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <BeforeAfterSection />
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
