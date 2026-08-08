import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, MessageSquare, ArrowUpRight, HelpCircle } from "lucide-react";

import { FAQ_DATA, SITE_IMAGES } from "../lib/data.js";

const aboutImg = SITE_IMAGES.aboutSide;

const faqs = (FAQ_DATA || []).map((item, idx) => ({
  num: String(idx + 1).padStart(2, "0"),
  question: item.question,
  answer: item.answer
}));

export default function FaqSection({ setView }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default as in screenshot

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleContactClick = () => {
    if (typeof setView === "function") {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faq" className="bg-bg-base py-8 sm:py-12 lg:py-16 relative overflow-hidden select-none border-t border-stone-200/80">
      
      {/* Container Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6 sm:space-y-10">
        
        {/* HEADER SECTION (Matching exact screenshot structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left border-b border-stone-200/80 pb-6">
          
          {/* Left Eyebrow Pill Badge */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center space-x-2 border border-stone-300/80 bg-white px-5 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-stone-700">
                POPULAR QUERIES
              </span>
            </div>
          </div>

          {/* Right Main Headline */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
              Quick And Clear <span className="text-gold-accent">Answers</span> <br />
              To Your Key <span className="text-gold-accent">Questions</span>
            </h2>
          </div>

        </div>

        {/* MAIN CONTENT SPLIT: Left Accordion + Right Support Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* Left Column: Accordion List (7 items) */}
          <div className="lg:col-span-8 divide-y divide-stone-200/90 border-t border-b border-stone-200/90">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-6 transition-colors duration-300">
                  {/* Accordion Question Header */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-4 pr-4">
                      <span className="text-xs font-mono font-bold text-stone-400 group-hover:text-gold-accent transition-colors shrink-0">
                        {faq.num}
                      </span>
                      <h3 className={`text-base sm:text-lg md:text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-gold-accent" : "text-stone-900 group-hover:text-gold-accent"
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-stone-300 group-hover:border-gold-accent flex items-center justify-center text-stone-700 group-hover:text-gold-accent transition-all duration-300 shrink-0 ${
                      isOpen ? "bg-gold-accent text-stone-950 border-gold-accent" : "bg-white"
                    }`}>
                      {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pl-8 sm:pl-9 text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Support Card (Matching mockup image) */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-stone-200/80 p-6 sm:p-7 rounded-[32px] shadow-xl space-y-5"
            >
              {/* Image Banner inside Right Card */}
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-stone-100 shadow-md">
                <img
                  src={aboutImg}
                  alt="Suthar studio interior architects"
                  className="w-full h-full object-cover filter brightness-[0.92]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Text & Call to Action */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight leading-snug">
                  Still Looking For Answers Or Need A Fun Chat?
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                  Our team will guide you through our design process, project specifications, and cost estimate.
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleContactClick}
                className="w-full inline-flex items-center justify-center space-x-2 bg-bg-dark hover:bg-gold-accent text-white hover:text-stone-950 font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-300 cursor-pointer shadow-md group"
              >
                <span>Ask Architect Directly</span>
                <ArrowUpRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
