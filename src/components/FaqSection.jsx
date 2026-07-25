import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, MessageSquare, ArrowUpRight, HelpCircle } from "lucide-react";

import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";

const faqs = [
  {
    num: "01",
    question: "What Interior Design Services Do You Offer?",
    answer:
      "Our interior design services cover everything you need to create a stunning and functional space. From initial concept development and space planning to selecting color schemes, custom timber joinery, modular kitchens, and on-site architect supervision, we bring your full spatial vision to life."
  },
  {
    num: "02",
    question: "What Is Your Turnkey Execution Process?",
    answer:
      "Our turnkey execution handles everything from civil structural modifications, plumbing, electrical schematics, and custom millwork to final furniture installation and site handover. You get a single point of accountability with zero hassle."
  },
  {
    num: "03",
    question: "How Do You Establish Your Design Fees?",
    answer:
      "We provide completely transparent cost estimates based on carpet area (sq. ft.), material specifications, and execution scope. We offer fixed-fee design packages as well as comprehensive turnkey execution quotes with no hidden charges."
  },
  {
    num: "04",
    question: "Will I Need Planning Permission For My Project?",
    answer:
      "For standard interior renovations and joinery, local housing society or building management approvals are usually required, which our project managers help facilitate. For major civil alterations, our licensed architects handle society permissions and municipal filings."
  },
  {
    num: "05",
    question: "How Long Does A Typical Project Take?",
    answer:
      "A typical 2BHK/3BHK luxury residential interior project takes between 60 to 90 days from design approval to final site handover. Commercial flagships and large coastal villas range between 90 to 120 days."
  },
  {
    num: "06",
    question: "Can I Get Fully Customized Timber Joinery & Furniture?",
    answer:
      "Yes! With our multi-generational woodworking heritage since 1989 and direct factory joinery guild in Kumta, we manufacture 100% bespoke timber dining tables, wardrobes, vanity units, and modular kitchens tailored precisely to your space."
  },
  {
    num: "07",
    question: "Do You Work Outside Mumbai & Maharashtra?",
    answer:
      "Absolutely. We have active design desks and execution teams across Mumbai, Pune, Goa, Bengaluru, Hyderabad, Hubballi, Kumta, Honnavar, and Murudeshwar."
  }
];

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
    <section id="faq" className="bg-[#faf9f6] py-20 sm:py-28 lg:py-32 relative overflow-hidden select-none border-t border-stone-200/80">
      
      {/* Container Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12 sm:space-y-16">
        
        {/* HEADER SECTION (Matching exact screenshot structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-b border-stone-200/80 pb-10">
          
          {/* Left Eyebrow Pill Badge */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center space-x-2 border border-stone-300/80 bg-white px-5 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-stone-700">
                POPULAR QUERIES
              </span>
            </div>
          </div>

          {/* Right Main Headline */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
              Quick And Clear <span className="text-[#c5a880]">Answers</span> <br />
              To Your Key <span className="text-[#c5a880]">Questions</span>
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
                      <span className="text-xs font-mono font-bold text-stone-400 group-hover:text-[#c5a880] transition-colors shrink-0">
                        {faq.num}
                      </span>
                      <h3 className={`text-base sm:text-lg md:text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-[#c5a880]" : "text-stone-900 group-hover:text-[#c5a880]"
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-stone-300 group-hover:border-[#c5a880] flex items-center justify-center text-stone-700 group-hover:text-[#c5a880] transition-all duration-300 shrink-0 ${
                      isOpen ? "bg-[#c5a880] text-stone-950 border-[#c5a880]" : "bg-white"
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
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#0c0a09] hover:bg-[#c5a880] text-white hover:text-stone-950 font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-300 cursor-pointer shadow-md group"
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
