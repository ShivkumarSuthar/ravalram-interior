"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import SEOHelper from "../../components/SEOHelper";
import Header from "../../components/Header";
import BlogPage from "../../components/BlogPage";
import Footer from "../../components/Footer";

export default function Blog() {
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
      <SEOHelper currentView="blog" />
      <Header currentView="blog" setView={handleNavigate} />
      
      <main className="relative z-10">
        <motion.div
          key="blog-subpage"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <BlogPage
            onBackToHome={() => handleNavigate("home")}
            onOpenQuote={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
          />
        </motion.div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </>
  );
}
