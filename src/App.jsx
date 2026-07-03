import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import LobbyBanner from "./components/LobbyBanner.jsx";
import Stats from "./components/Stats.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import OurProcess from "./components/OurProcess.jsx";
import FlexibleSolutions from "./components/FlexibleSolutions.jsx";
import CreativeProjects from "./components/CreativeProjects.jsx";
import Awards from "./components/Awards.jsx";
import InteractiveTabs from "./components/InteractiveTabs.jsx";
import ExpertBento from "./components/ExpertBento.jsx";
import Team from "./components/Team.jsx";
import ServiceAreas from "./components/ServiceAreas.jsx";
import Testimonial from "./components/Testimonial.jsx";
import GiantBanner from "./components/GiantBanner.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Blog from "./components/Blog.jsx";
import Newsletter from "./components/Newsletter.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import LuxuryChatbot from "./components/LuxuryChatbot.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ServicesPage from "./components/ServicesPage.jsx";
import GalleryPage from "./components/GalleryPage.jsx";
import FaqPage from "./components/FaqPage.jsx";
import BlogPage from "./components/BlogPage.jsx";
import ComingSoonPage from "./components/ComingSoonPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage.jsx";
import TermsAndConditionsPage from "./components/TermsAndConditionsPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import ThankYouPage from "./components/ThankYouPage.jsx";
import SEOHelper from "./components/SEOHelper.jsx";

export default function App() {
  const [currentView, setView] = useState("home"); // "home" | "about-us" | "services" | "gallery" | "faqs" | "blog" | "coming-soon" | "contact" | "privacy" | "terms"

  if (currentView === "coming-soon") {
    return (
      <>
        <SEOHelper currentView="coming-soon" />
        <ComingSoonPage
          onBackToHome={() => {
            setView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#E2D8A5] text-stone-900 selection:bg-gold-500 selection:text-stone-950 scroll-smooth" id="app-root">
      
      {/* Dynamic SEO and Structured Schema Manager */}
      <SEOHelper currentView={currentView} />

      {/* Absolute fixed layout grid accents */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-5">
        <div className="max-w-8xl mx-auto h-full w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="border-l border-stone-400 h-full" />
          <div className="border-l border-stone-400 h-full" />
          <div className="border-l border-stone-400 h-full border-r" />
        </div>
      </div>

      {/* Floating Header with view routing controls */}
      <Header
        currentView={currentView}
        setView={setView}
        onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
      />

      {/* Main Content Areas with fluid view switching */}
      <main className="relative z-10" id="main-content">
        <AnimatePresence mode="wait">
          {currentView === "home" ? (
            <motion.div
              key="home-presentation"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* 1. Fullscreen majestic Hero */}
              <Hero setView={setView} />

              {/* 2. Brand story introduction (We Shape Interior Designs...) */}
              <About setView={setView} />

              {/* 3. Core Expertise (Explore Our Comprehensive...) */}
              <Services />

              {/* 4. Full-width reception lobby presentation banner with play button */}
              <LobbyBanner />

              {/* 5. Metrics & stats (Behind Every Statistic...) */}
              <Stats />

              {/* 5.5. Why Choose Suthar Interior Studio Section */}
              <WhyChooseUs setView={setView} />

              {/* 5.6. Our Process Section (From Your Vision to a Beautiful Reality) */}
              <OurProcess setView={setView} />

              {/* 5.7. Flexible Solutions Section (Designed Around Your Vision & Budget) */}
              <FlexibleSolutions setView={setView} />

              {/* 6. Creative Works portfolio (Creative Projects That Define...) */}
              <CreativeProjects />

              {/* 7. Design Awards showcase (Design That Speaks...) */}
              <Awards />

              {/* 8. Interactive 4-tab process display (Renovation, Consultation, Planning, 3D) */}
              <InteractiveTabs />

              {/* 9. Progress metrics & bento bedroom render layout */}
              <ExpertBento />

              {/* 10. Creative brain experts list (Meet The Experts Our...) */}
              <Team />

              {/* 10.5. Service Areas & Locations display */}
              <ServiceAreas />

              {/* 11. Client Testimonial quotes */}
              <Testimonial />

              {/* 12. Majestic wordmark "INTERIOR DESIGN" transition banner */}
              <GiantBanner />

              {/* 13. Contact Form (Have A Project In Mind?) */}
              <ContactForm setView={setView} />

              {/* 14. Magazine blogs list */}
              <Blog />

              {/* 15. Newsletter subscription circle */}
              <Newsletter />

              {/* 15.5. Final Emotional CTA Section */}
              <FinalCTA />
            </motion.div>
          ) : currentView === "about-us" ? (
            <motion.div
              key="about-us-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <AboutPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
              />
            </motion.div>
          ) : currentView === "services" ? (
            <motion.div
              key="services-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ServicesPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
              />
            </motion.div>
          ) : currentView === "gallery" ? (
            <motion.div
              key="gallery-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <GalleryPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
              />
            </motion.div>
          ) : currentView === "faqs" ? (
            <motion.div
              key="faqs-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <FaqPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
              />
            </motion.div>
          ) : currentView === "blog" ? (
            <motion.div
              key="blog-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <BlogPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
              />
            </motion.div>
          ) : currentView === "privacy" ? (
            <motion.div
              key="privacy-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <PrivacyPolicyPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                setView={setView}
                onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
              />
            </motion.div>
          ) : currentView === "terms" ? (
            <motion.div
              key="terms-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <TermsAndConditionsPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                setView={setView}
                onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
              />
            </motion.div>
          ) : currentView === "contact" ? (
            <motion.div
              key="contact-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ContactPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
                setView={setView}
              />
            </motion.div>
          ) : currentView === "thank-you" ? (
            <motion.div
              key="thankyou-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ThankYouPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                setView={setView}
              />
            </motion.div>
          ) : (
            <motion.div
              key="notfound-subpage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <NotFoundPage
                onBackToHome={() => {
                  setView("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                setView={setView}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 16. Footers */}
      <Footer onNavigate={setView} />

      {/* Luxury automated quick query Chatbot */}
      <LuxuryChatbot />
    </div>
  );
}
