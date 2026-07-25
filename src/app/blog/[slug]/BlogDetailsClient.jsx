"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowLeft, Calendar, User, Clock, Share2, Sparkles, BookOpen, ArrowRight } from "lucide-react";

export default function BlogDetailsClient({ article }) {
  const router = useRouter();

  const handleNavigate = (view) => {
    if (view === "home") {
      router.push("/");
    } else {
      router.push(`/${view}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-[#faf9f6] text-stone-900 flex flex-col items-center justify-center p-6 font-sans">
        <h1 className="text-2xl font-serif text-stone-900 mb-4">Article Not Found</h1>
        <button onClick={() => handleNavigate("blog")} className="text-[#c5a880] hover:underline font-mono uppercase tracking-widest text-xs">
          Back to Articles
        </button>
      </div>
    );
  }

  return (
    <>
      <Header currentView="blog" setView={handleNavigate} />

      <main className="relative z-10 pt-[80px] bg-[#faf9f6] text-stone-900">
        <article className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
          
          {/* Back button */}
          <button
            onClick={() => handleNavigate("blog")}
            className="inline-flex items-center space-x-2 text-stone-500 hover:text-[#c5a880] transition-colors cursor-pointer text-xs font-mono tracking-widest uppercase mb-12"
          >
            <ArrowLeft size={14} />
            <span>Back to Journal</span>
          </button>

          {/* Category badge */}
          <span className="text-[#c5a880] text-xs font-mono tracking-[0.3em] font-bold uppercase block mb-4">
            {article.categoryLabel}
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-950 leading-tight uppercase mb-8">
            {article.title}
          </h1>

          {/* Meta line */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-stone-200/50 text-stone-500 text-xs sm:text-sm font-light mb-12">
            <div className="flex items-center space-x-2">
              <User size={14} className="text-[#c5a880]" />
              <span className="font-medium text-stone-800">{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Large Featured Image */}
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl mb-12 border border-stone-200/50">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article content (Markdown-like formatting translated cleanly to HTML components) */}
          <div className="prose prose-stone max-w-3xl mx-auto text-left space-y-8 text-stone-700 font-light text-base sm:text-lg leading-relaxed">
            {article.content.split("\n\n").map((para, pIdx) => {
              if (para.startsWith("###")) {
                return (
                  <h3 key={pIdx} className="text-xl sm:text-2xl font-serif text-stone-950 font-medium pt-4 tracking-tight">
                    {para.replace("###", "").trim()}
                  </h3>
                );
              }
              if (para.startsWith("-")) {
                return (
                  <ul key={pIdx} className="space-y-3 pl-6 list-disc marker:text-[#c5a880]">
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

          {/* Bottom Call to Action */}
          <div className="mt-20 border-t border-stone-200/50 pt-16 text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#c5a880]">
              <Sparkles size={16} />
              <span className="text-xs tracking-[0.2em] font-mono font-bold uppercase">SUTHAR EXPERT ADVICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-stone-950 uppercase leading-snug">
              Inspired by Elena's Insight? <br />
              <span className="italic text-[#c5a880] font-normal lowercase">Let's blueprint your custom spatial architecture.</span>
            </h2>
            <p className="text-sm text-stone-500 font-light max-w-xl mx-auto">
              Our master timber joinery experts and senior spatial designers are ready to map out your site-survey dimensions or material specifications.
            </p>
            <div className="pt-4">
              <button
                onClick={() => handleNavigate("contact")}
                className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] hover:bg-[#b0936b] px-8 py-5 rounded-full cursor-pointer shadow-xl"
              >
                <span>Book Free Consultation</span>
                <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>

        </article>
      </main>

      <Footer onNavigate={handleNavigate} />
    </>
  );
}
