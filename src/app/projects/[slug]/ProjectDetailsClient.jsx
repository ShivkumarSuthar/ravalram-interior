"use client";

import AppImage from "../../../components/AppImage";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowLeft, MapPin, Briefcase, Calendar, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProjectDetailsClient({ project }) {
  const router = useRouter();

  const handleNavigate = (view) => {
    if (view === "home") {
      router.push("/");
    } else {
      router.push(`/${view}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#E2D8A5] text-stone-900 flex flex-col items-center justify-center p-6 font-sans">
        <h1 className="text-2xl font-serif text-stone-900 mb-4">Project Not Found</h1>
        <button onClick={() => handleNavigate("home")} className="text-[#E7A35F] hover:underline font-mono uppercase tracking-widest text-xs">
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <>
      <Header currentView="gallery" setView={handleNavigate} />

      <main className="relative z-10 pt-[80px] bg-[#E2D8A5] text-stone-900">
        <article className="max-w-8xl mx-auto px-6 py-16 sm:py-24">
          
          {/* Back button */}
          <button
            onClick={() => handleNavigate("gallery")}
            className="inline-flex items-center space-x-2 text-stone-500 hover:text-[#E7A35F] transition-colors cursor-pointer text-xs font-mono tracking-widest uppercase mb-12"
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </button>

          {/* Title & Metadata Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-[#E7A35F] text-xs font-mono tracking-[0.3em] font-bold uppercase block">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-stone-950 leading-tight uppercase">
                {project.title}
              </h1>
              <p className="text-stone-600 font-light text-base sm:text-lg max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick Metrics Side Card */}
            <div className="lg:col-span-4 bg-white border border-stone-200/50 p-6 rounded-2xl space-y-4 text-left shadow-sm">
              <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#E7A35F] uppercase border-b border-stone-100 pb-2">
                PROJECT DETAIL SHEET
              </h3>
              
              <div className="space-y-3 font-sans text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-stone-600">
                  <MapPin size={16} className="text-[#E7A35F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block uppercase tracking-wider text-[10px]">Location</span>
                    <span className="font-light">{project.location}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-stone-600">
                  <Briefcase size={16} className="text-[#E7A35F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block uppercase tracking-wider text-[10px]">Scope of Works</span>
                    <span className="font-light">{project.scope}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-stone-600">
                  <Calendar size={16} className="text-[#E7A35F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block uppercase tracking-wider text-[10px]">Handover Year</span>
                    <span className="font-light">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Hero Showcase Image */}
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl mb-16 border border-stone-200/50">
            <AppImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter brightness-95"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Longform Editorial Project Story */}
          <div className="prose prose-stone max-w-4xl mx-auto text-left space-y-12 text-stone-700 font-light text-base sm:text-lg leading-relaxed">
            {project.content.split("\n\n").map((para, pIdx) => {
              if (para.startsWith("###")) {
                return (
                  <h3 key={pIdx} className="text-2xl sm:text-3xl font-serif text-stone-950 font-medium pt-6 tracking-tight">
                    {para.replace("###", "").trim()}
                  </h3>
                );
              }
              if (para.startsWith("-")) {
                return (
                  <ul key={pIdx} className="space-y-3 pl-6 list-disc marker:text-[#E7A35F]">
                    {para.split("\n").map((li, lIdx) => (
                      <li key={lIdx} className="font-light">
                        {li.replace("-", "").trim().replace(/\*\*(.*?)\*\*/g, "$1")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={pIdx} className="font-light">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Back to Work Footer link */}
          <div className="mt-24 border-t border-stone-200/50 pt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => handleNavigate("gallery")}
              className="inline-flex items-center space-x-2 text-stone-800 hover:text-[#E7A35F] transition-colors cursor-pointer text-xs font-mono tracking-widest uppercase"
            >
              <ArrowLeft size={14} />
              <span>Explore More Projects</span>
            </button>

            <button
              onClick={() => handleNavigate("contact")}
              className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#E7A35F] hover:bg-[#6F9F9C] px-6 py-4 rounded-none cursor-pointer"
            >
              <span>Consult On Similar Project</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/10 bg-stone-950/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} />
              </div>
            </button>
          </div>

        </article>
      </main>

      <Footer onNavigate={handleNavigate} />
    </>
  );
}
