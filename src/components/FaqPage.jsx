import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  Paintbrush, 
  Hammer, 
  DollarSign 
} from "lucide-react";

import {images} from "../lib/images";
import Image from "next/image";
const faqCategories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "design", label: "Design & Visualization", icon: Paintbrush },
  { id: "contracting", label: "Contracting & Construction", icon: Hammer },
  { id: "materials", label: "Sourcing & Materials", icon: Compass },
  { id: "budget", label: "Budgets & Pricing", icon: DollarSign }
];

const faqsData = [
  {
    id: 1,
    category: "design",
    question: "How accurate are your 2D and 3D virtual renderings?",
    answer: "Our renderings are built using calibrated physical models, real manufacturer material shaders, and detailed daylight path simulation. This guarantees 98% visual accuracy, allowing you to preview how natural sunset rays and linear light fixtures illuminate travertine and timber finishes."
  },
  {
    id: 2,
    category: "design",
    question: "Can I make changes to the layout design after the blueprints are finished?",
    answer: "Yes. During Phase Two (Blueprint Visualization), we provide up to three revision loops. We encourage client partners to iterate on layout modifications virtually in the CAD software before we file municipal safety permits and procure custom-cut stones."
  },
  {
    id: 3,
    category: "contracting",
    question: "Are your interior contracting services fully licensed and insured?",
    answer: "Absolutely. Suthar is fully licensed, bonded, and carries comprehensive general liability insurance alongside full workers' compensation coverage. All works strictly conform to local municipal structural regulations, building codes, and safety procedures."
  },
  {
    id: 4,
    category: "contracting",
    question: "Do you supervise the subcontractors on-site yourself?",
    answer: "Yes, 100%. We employ dedicated in-house Site Engineers and Master Carpenters. We oversee every single trade—from mechanical HVAC ducting to custom brass plating installations—ensuring zero gaps in engineering accuracy and maintaining a secure, clean workplace."
  },
  {
    id: 5,
    category: "materials",
    question: "Where do you source your rare stones and lumber materials?",
    answer: "We source our unpolished travertines, calcareous slates, and European white oaks directly from certified quarries in Italy and specialized timber mills in Germany. By bypassing third-party distributors, we assure high material quality, strict grain selection, and fair pricing."
  },
  {
    id: 6,
    category: "materials",
    question: "How long does custom-imported material delivery take?",
    answer: "Custom ocean-freighted materials typically require 8 to 12 weeks for fabrication, inspection, and shipment. We coordinate our project schedules months in advance, scheduling early demolition phases to align seamlessly with material arrivals."
  },
  {
    id: 7,
    category: "budget",
    question: "What is your standard project fee schedule and pricing structure?",
    answer: "We operate on a transparent fixed-fee or cost-plus contract system based on total square footage and blueprint complexity. Our payment schedules are divided into four straightforward installments: 10% on Discovery, 30% on Blueprint Sign-off, 40% on mid-construction, and 20% on successful turnkey handover."
  },
  {
    id: 8,
    category: "budget",
    question: "Do you offer free initial cost estimations?",
    answer: "Yes. We offer complimentary initial pricing estimates based on your preliminary spatial dimensions and project description. You can use our digital consultation form or connect with our estimators to receive a comprehensive budget outline."
  }
];

export default function FaqPage({ onBackToHome, onOpenQuote }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedFaqId, setExpandedFaqId] = useState(null);

  const toggleFaq = (id) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  // Filter FAQs by category and search query
  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-500 selection:text-stone-950 pt-[80px]">
      
      {/* 1. HERO BREADCRUMB HEADER */}
      <section className="relative h-[40vh] md:h-[50vh] bg-stone-950 text-white flex flex-col justify-center overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={images.bannerImg}
            alt="FAQ Banner Background"
            className="w-full h-full object-cover opacity-20 filter grayscale scale-105"
            referrerPolicy="no-referrer"
            fill
            sizes= "100vw"
            priority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-stone-950/45" />
        </div>

        {/* Technical drafting gridlines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-center md:text-left space-y-4">
          {/* Breadcrumbs */}
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
            <button onClick={onBackToHome} className="hover:text-gold-500 transition-colors cursor-pointer">HOME</button>
            <span>/</span>
            <span className="text-gold-500 font-bold">HELP & FAQS</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white leading-none uppercase"
          >
            Frequently Asked <span className="font-serif italic text-gold-500 font-normal">Questions</span>
          </motion.h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
            Clarifying our spatial workflows. Find detailed insights regarding our custom design loops, turnkey contracting policies, rare travertine sourcing, and project estimates.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & FAQ CONTENT */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Search Box & Categories Tab Panel */}
          <div className="space-y-8 mb-16">
            
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="text"
                placeholder="Search queries (e.g. materials, license, estimates)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-[#faf9f6] text-stone-900 border border-stone-200 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 shadow-inner"
              />
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {faqCategories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2 border transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-stone-950 text-gold-500 border-stone-950 shadow-md"
                        : "bg-[#faf9f6] text-stone-600 border-stone-200/80 hover:border-gold-500/40 hover:text-stone-950"
                    }`}
                  >
                    <CatIcon size={13} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* FAQ Accordion List */}
          <div className="max-w-3xl mx-auto space-y-4" id="faqs-accordion-container">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isExpanded = expandedFaqId === faq.id;
                  return (
                    <motion.div
                      key={faq.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="border border-stone-200/80 rounded-2xl overflow-hidden bg-[#faf9f6] hover:bg-white transition-colors duration-300 shadow-sm"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                      >
                        <span className="text-sm md:text-base font-serif font-semibold text-stone-900 pr-4">
                          {faq.question}
                        </span>
                        <div className={`p-1.5 rounded-full bg-stone-200/50 text-stone-800 transition-transform duration-300 shrink-0 ${isExpanded ? "rotate-180 bg-gold-500 text-stone-950" : ""}`}>
                          <ChevronDown size={14} />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-stone-200/50 bg-white"
                          >
                            <div className="px-6 py-5 text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-12 space-y-3">
                  <p className="text-stone-500 font-light text-sm">No FAQs match your search criteria.</p>
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                    className="text-xs font-mono font-bold text-gold-600 hover:text-stone-950 underline uppercase tracking-widest cursor-pointer"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. CONTACT BANNER HELPDESK */}
      <section className="bg-stone-950 text-white py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="text-gold-500 text-xs tracking-[0.25em] font-mono font-bold block uppercase">
            STILL HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Connect Directly With Our <br />
            <span className="font-serif italic text-gold-500 font-normal">Expert Estimators</span>
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Our estimating team is ready to draft spatial solutions, compile material quotes, and map blueprint pathways. Contact us today.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            <div className="bg-stone-900 border border-white/5 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-stone-950 flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block">Call Us</span>
                <span className="text-xs font-medium text-stone-200">+1 (509) 555-0199</span>
              </div>
            </div>

            <div className="bg-stone-900 border border-white/5 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-stone-950 flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block">Email Us</span>
                <span className="text-xs font-medium text-stone-200">contact@suthar-studio.com</span>
              </div>
            </div>

            <div className="bg-stone-900 border border-white/5 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-stone-950 flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block">Visit Studio</span>
                <span className="text-xs font-medium text-stone-200">Spokane, Washington</span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-stone-950 font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
            >
              Get Free Estimate
            </button>
            <button
              onClick={onBackToHome}
              className="px-8 py-3.5 border border-stone-800 hover:border-gold-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5 cursor-pointer"
            >
              Back To Home
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
