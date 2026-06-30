"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import SEOHelper from "../../components/SEOHelper";
import Header from "../../components/Header";
import GalleryPage from "../../components/GalleryPage";
import Footer from "../../components/Footer";

export default function Gallery() {
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
      <SEOHelper currentView="gallery" />
      <Header currentView="gallery" setView={handleNavigate} />
      
      <main className="relative z-10">
        <motion.div
          key="gallery-subpage"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <GalleryPage
            onBackToHome={() => handleNavigate("home")}
            onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
          />
        </motion.div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </>
  );
}
