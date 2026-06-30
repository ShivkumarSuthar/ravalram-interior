"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import SEOHelper from "../../components/SEOHelper";
import ComingSoonPage from "../../components/ComingSoonPage";

export default function ComingSoon() {
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
      <SEOHelper currentView="coming-soon" />
      <ComingSoonPage onBackToHome={() => handleNavigate("home")} />
    </>
  );
}
