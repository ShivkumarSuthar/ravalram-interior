"use client";

import { useRouter } from "next/navigation";
import SEOHelper from "../components/SEOHelper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditorialHero from "../components/home/EditorialHero";
import EditorialManifesto from "../components/home/EditorialManifesto";
import EditorialWorks from "../components/home/EditorialWorks";
import EditorialDisciplines from "../components/home/EditorialDisciplines";
import EditorialQuote from "../components/home/EditorialQuote";
import EditorialLegacy from "../components/home/EditorialLegacy";
import EditorialContact from "../components/home/EditorialContact";

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

      <main className="relative z-10 bg-[#faf9f6]" id="main-content">
        {/* Cinematic full-bleed opening */}
        <EditorialHero setView={handleNavigate} />

        {/* 01 — The studio, told as a manifesto */}
        <EditorialManifesto />

        {/* 02 — Selected works, magazine gallery */}
        <EditorialWorks />

        {/* 03 — Disciplines as an interactive editorial index */}
        <EditorialDisciplines />

        {/* Cinematic philosophy pull-quote */}
        <EditorialQuote />

        {/* 04 — A measured legacy in oversized numerals */}
        <EditorialLegacy />

        {/* 05 — Closing invitation */}
        <EditorialContact setView={handleNavigate} />
      </main>

      <Footer onNavigate={handleNavigate} />
    </>
  );
}
