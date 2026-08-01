import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Hammer,
  Workflow,
  History,
  Phone,
  ArrowUpRight,
  Layers,
  HelpCircle,
  ChevronDown,
  Building2,
  Home,
  Check,
  Award,
  Users,
  Eye,
  X,
  Search,
  Sliders,
  Calculator,
  Ruler,
  Paintbrush,
  Clock,
  ChevronRight,
  FileText
} from "lucide-react";

import ProjectInvestmentGuide from "./ProjectInvestmentGuide.jsx";
import { SERVICES_PAGE_DATA, SITE_IMAGES } from "../lib/data.js";
import Image from "./Image.jsx";

const ICON_MAP = {
  History,
  Compass,
  Users,
  Sparkles,
  ShieldCheck,
  Award
};

const serviceCategoryFilterMap = {
  ALL: "ALL DISCIPLINE OFFERINGS",
  RESIDENTIAL: "RESIDENTIAL & VILLAS",
  COMMERCIAL: "COMMERCIAL & OFFICES",
  JOINERY: "BESPOKE JOINERY & MILLWORK",
  RENOVATION: "RENOVATION & TURNKEY"
};

export default function ServicesPage({ onBackToHome, onOpenQuote }) {
  // Category filter state for core services
  const [activeCategory, setActiveCategory] = useState("ALL");
  
  // Track expanded card IDs for description text
  const [expandedCards, setExpandedCards] = useState({});
  
  // Interactive modal for deep service specification
  const [selectedSpecService, setSelectedSpecService] = useState(null);

  // Interactive 8-step workflow active state
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // FAQ state & category filter
  const [activeFaq, setActiveFaq] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");

  const coreServices = SERVICES_PAGE_DATA.coreServices || [];
  const executionModels = SERVICES_PAGE_DATA.executionModels || [];
  const processSteps = SERVICES_PAGE_DATA.processSteps || [];
  const whyChooseUs = SERVICES_PAGE_DATA.whyChooseUs || [];
  const industries = SERVICES_PAGE_DATA.industries || [];
  const cities = SERVICES_PAGE_DATA.cities || [];
  const faqs = SERVICES_PAGE_DATA.faqs || [];

  // Filter core services based on category tab
  const filteredCoreServices = coreServices.filter((service) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "RESIDENTIAL") {
      return (
        service.id.includes("residential") ||
        service.id.includes("architecture") ||
        service.accent.includes("HOMES")
      );
    }
    if (activeCategory === "COMMERCIAL") {
      return service.id.includes("commercial") || service.accent.includes("PRODUCTIVE");
    }
    if (activeCategory === "JOINERY") {
      return service.id.includes("furniture") || service.accent.includes("JOINERY");
    }
    if (activeCategory === "RENOVATION") {
      return (
        service.id.includes("renovation") ||
        service.id.includes("turnkey") ||
        service.accent.includes("RENEWAL")
      );
    }
    return true;
  });

  // Filter FAQs based on search string
  const filteredFaqs = faqs.filter((faq) => {
    if (!faqSearch.trim()) return true;
    const query = faqSearch.toLowerCase();
    return faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query);
  });

  const handleOpenConsultation = useCallback(() => {
    if (typeof onOpenQuote === "function") {
      onOpenQuote();
    } else {
      window.dispatchEvent(new CustomEvent("open-consultation"));
    }
  }, [onOpenQuote]);

  const currentWorkflowStep = processSteps[activeWorkflowStep] || processSteps[0] || {};

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-accent/30 selection:text-stone-950 pt-[80px]">
      
      {/* EDITORIAL HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white border-b border-stone-800">
        
        {/* Full width premium background image with subtle overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_IMAGES.servicesHeroBg}
            alt="Luxurious spatial architecture Suthar Studio"
            fill
            className="object-cover opacity-30 filter brightness-[0.35] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent" />
        </div>

        {/* Blueprint line design */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-left space-y-10 py-20">
          
          {/* Breadcrumb & Navigation Anchor */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
              <button onClick={onBackToHome} className="hover:text-gold-accent transition-colors cursor-pointer">
                HOME
              </button>
              <span>/</span>
              <span className="text-gold-accent font-bold">SERVICES MONOGRAPH</span>
            </div>

            <div className="flex items-center space-x-3 text-[10px] font-mono uppercase text-stone-400">
              <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
              <span>EST. 1989 &bull; ARCHITECT SUPERVISED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gold-accent/20 border border-gold-accent/40 text-gold-accent text-xs tracking-[0.3em] font-mono font-bold px-4 py-1.5 rounded-full uppercase">
                <Sparkles size={14} className="shrink-0" />
                <span>ARCHITECTURAL &amp; INTERIOR DISCIPLINES</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
              >
                Complete Interior &amp; <br />
                <span className="font-serif italic font-normal text-gold-accent">Architectural</span> Solutions.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-stone-300 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl"
              >
                From structural layout planning and photorealistic 3D CGI to bespoke factory timber joinery and turnkey White-Glove handovers, Suthar Interior Studio provides complete spatial solutions.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <button
                  onClick={handleOpenConsultation}
                  className="inline-flex items-center space-x-3 text-stone-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-[#b0936b] px-7 py-4 rounded-full cursor-pointer shadow-xl hover:scale-[1.02]"
                >
                  <span>Book Free Consultation</span>
                  <div className="w-7 h-7 rounded-full bg-stone-950 text-gold-accent flex items-center justify-center">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </button>

                <a
                  href="#investment-planner"
                  className="inline-flex items-center space-x-2 px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-full bg-white/5 backdrop-blur-md cursor-pointer hover:border-gold-accent hover:text-gold-accent"
                >
                  <Calculator size={16} className="text-gold-accent" />
                  <span>Estimate Project Scope</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column Stat Highlights */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-stone-900/90 border border-stone-800 p-6 rounded-3xl space-y-4 shadow-2xl backdrop-blur-md text-left">
                <div className="flex items-center space-x-3 border-b border-stone-800 pb-3">
                  <Award className="text-gold-accent" size={24} />
                  <span className="text-xs font-mono font-bold text-gold-accent uppercase tracking-widest">
                    STUDIO STANDARDS
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">35+ Yrs</span>
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Joinery Heritage</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">100%</span>
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Architect Audited</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">10-Yr</span>
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Structural Guarantee</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">IS 710</span>
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Marine BWR Plywood</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 01: INTRODUCTION PHILOSOPHY */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase text-stone-700">
                <span className="w-2 h-2 rounded-full bg-gold-accent" />
                <span>SINGLE-POINT ACCOUNTABILITY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
                Everything You Need. <br />
                <span className="font-serif italic font-normal text-gold-accent">Under One Studio</span> Roof.
              </h2>
            </div>

            <div className="lg:col-span-7 text-left border-l-2 border-gold-accent pl-6 lg:pl-10 space-y-4">
              <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
                We believe every successful spatial transformation begins with rigorous architectural planning and ends with master woodworking precision. Our team of certified architects, interior designers, structural engineers, and master timber carpenters work in total unison.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center space-x-2 text-xs font-mono font-semibold bg-stone-100 text-stone-800 px-3 py-1.5 rounded-md border border-stone-200">
                  <ShieldCheck size={14} className="text-gold-accent" />
                  <span>On-Site Architect Supervision</span>
                </span>
                <span className="inline-flex items-center space-x-2 text-xs font-mono font-semibold bg-stone-100 text-stone-800 px-3 py-1.5 rounded-md border border-stone-200">
                  <CheckCircle2 size={14} className="text-gold-accent" />
                  <span>Transparent BOQ Pricing</span>
                </span>
                <span className="inline-flex items-center space-x-2 text-xs font-mono font-semibold bg-stone-100 text-stone-800 px-3 py-1.5 rounded-md border border-stone-200">
                  <Hammer size={14} className="text-gold-accent" />
                  <span>Factory Timber Millwork</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: CORE SERVICES SHOWCASE (WITH INTERACTIVE CATEGORIES & LIGHTBOX SPEC MODAL) */}
      <section id="core-services" className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        
        {/* Subtle architectural grid watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
          <div className="max-w-7xl mx-auto h-full w-full px-6 grid grid-cols-3 gap-12">
            <div className="border-l border-stone-900 h-full" />
            <div className="border-l border-stone-900 h-full" />
            <div className="border-l border-stone-900 h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
          
          {/* Header & Category Tabs */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between text-left gap-8 border-b border-stone-200/80 pb-8">
            <div className="space-y-3 max-w-3xl">
              <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
                DETAILED ARCHITECTURAL DISCIPLINE CATALOG
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950">
                Our Core <span className="font-serif italic font-normal text-gold-accent">Creative</span> Offerings
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
              {Object.keys(serviceCategoryFilterMap).map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-stone-950 text-white shadow-md border border-stone-800"
                        : "bg-white text-stone-600 border border-stone-200 hover:border-gold-accent hover:text-gold-accent"
                    }`}
                  >
                    {serviceCategoryFilterMap[cat]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Core Services Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCoreServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border border-stone-200/80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 text-left flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="space-y-6">
                    
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] bg-stone-950 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                      
                      {/* Top Accent Pill */}
                      <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md border border-white/20 text-white font-mono text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase z-10">
                        {service.accent}
                      </div>

                      {/* Number Marker */}
                      <div className="absolute top-4 right-4 bg-gold-accent text-stone-950 font-mono text-xs font-bold px-2.5 py-1 rounded-full z-10">
                        0{index + 1}
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <span className="text-[10px] font-mono text-gold-accent font-bold uppercase tracking-widest block">
                          SUTHAR SPECIFICATION &bull; VERIFIED
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="px-6 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950 group-hover:text-gold-accent transition-colors">
                        {service.title}
                      </h3>

                      <div className="space-y-1">
                        <p className={`text-xs sm:text-sm font-light text-stone-600 leading-relaxed transition-all duration-300 ${!expandedCards[service.id] ? "line-clamp-3" : ""}`}>
                          {service.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => setExpandedCards(prev => ({ ...prev, [service.id]: !prev[service.id] }))}
                          className="inline-flex items-center space-x-1 text-[11px] font-mono font-bold uppercase tracking-wider text-gold-accent hover:text-stone-950 transition-colors cursor-pointer py-0.5"
                        >
                          <span>{expandedCards[service.id] ? "Show Less" : "See More..."}</span>
                          <ChevronDown size={12} className={`transition-transform duration-300 ${expandedCards[service.id] ? "rotate-180" : ""}`} />
                        </button>
                      </div>

                      {/* Key Capabilities Pills */}
                      <div className="pt-2 space-y-2 border-t border-stone-100">
                        <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block">
                          CORE DELIVERABLES:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="inline-flex items-center space-x-1 text-[10px] font-mono bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md border border-stone-200">
                              <CheckCircle2 size={10} className="text-gold-accent shrink-0" />
                              <span>{feature}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-6 pt-4 flex items-center justify-between border-t border-stone-100 mt-6">
                    <button
                      onClick={() => setSelectedSpecService(service)}
                      className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-gold-accent transition-colors cursor-pointer"
                    >
                      <Eye size={14} className="text-gold-accent" />
                      <span>Full Spec Sheet</span>
                    </button>

                    <button
                      onClick={handleOpenConsultation}
                      className="w-9 h-9 rounded-full bg-stone-100 group-hover:bg-gold-accent text-stone-900 group-hover:text-stone-950 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                      title="Inquire Service"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION 03: INTERACTIVE SPATIAL INVESTMENT & SCOPE ESTIMATION GUIDE */}
      <section id="investment-planner">
        <ProjectInvestmentGuide setView={onBackToHome} />
      </section>

      {/* SECTION 04: EXECUTION CONTRACTING MODELS */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              FLEXIBLE PROCUREMENT &amp; CONTRACTING FORMATS
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-950">
              How We <span className="font-serif italic font-normal text-gold-accent">Contract &amp; Work</span> With You
            </h2>
            <p className="text-stone-600 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-1">
              We offer multiple execution contracting formats to match your specific procurement comfort, budget control, and project stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            {executionModels.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#faf9f6] border border-stone-200 hover:border-gold-accent hover:shadow-2xl hover:-translate-y-1.5 p-6 md:p-8 rounded-3xl space-y-4 transition-all duration-500 group relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-2xl bg-stone-950 text-gold-accent font-mono font-bold text-xs flex items-center justify-center shadow-md">
                      0{idx + 1}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 group-hover:text-gold-accent transition-colors">
                      CONTRACT MODEL
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-stone-950 group-hover:text-gold-accent transition-colors">
                    {model.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {model.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-500 font-medium">Suthar Guarantee:</span>
                  <span className="text-gold-accent font-bold">100% Verified</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 05: INTERACTIVE 8-STAGE ARCHITECTURAL PIPELINE TIMELINE */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              WORKFLOW PIPELINE &bull; CONCEPT TO HANDOVER
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-950">
              Our Design &amp; <span className="font-serif italic font-normal text-gold-accent">Execution</span> Process
            </h2>
            <p className="text-stone-600 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-1">
              Click any step below to explore the detailed architectural milestones, deliverables, and quality checks.
            </p>
          </div>

          {/* Stepper Buttons Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative">
            {processSteps.map((step, idx) => {
              const isActive = idx === activeWorkflowStep;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-4 rounded-2xl border text-center transition-all duration-300 cursor-pointer space-y-2 flex flex-col items-center justify-between group ${
                    isActive
                      ? "bg-stone-950 text-white border-gold-accent shadow-xl scale-[1.02]"
                      : "bg-white text-stone-900 border-stone-200 hover:border-gold-accent/50 hover:bg-stone-50"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                    isActive ? "bg-gold-accent text-stone-950" : "bg-stone-100 text-stone-600 group-hover:text-gold-accent"
                  }`}>
                    {step.num}
                  </div>

                  <span className={`text-xs font-bold uppercase tracking-tight line-clamp-1 ${
                    isActive ? "text-white" : "text-stone-900"
                  }`}>
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Step Detailed Preview Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWorkflowStep.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-stone-950 text-white border border-stone-800 p-8 sm:p-10 rounded-3xl shadow-2xl text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center space-x-2 text-gold-accent font-mono text-xs font-bold tracking-widest uppercase">
                  <span>PHASE {currentWorkflowStep.num} OF 08</span>
                  <span>&bull;</span>
                  <span>ARCHITECTURAL MILESTONE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentWorkflowStep.num}. {currentWorkflowStep.name}
                </h3>

                <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
                  {currentWorkflowStep.desc}. Every technical drawing, material batch test, and joint alignment is audited by our on-site lead architects before moving to the next phase.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono bg-stone-900 border border-stone-800 text-stone-200 px-3 py-1 rounded-md">
                    <CheckCircle2 size={12} className="text-gold-accent" />
                    <span>Millimeter Laser Audit</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono bg-stone-900 border border-stone-800 text-stone-200 px-3 py-1 rounded-md">
                    <CheckCircle2 size={12} className="text-gold-accent" />
                    <span>Architect Certified Sign-off</span>
                  </span>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-start md:items-end space-y-4">
                <button
                  onClick={handleOpenConsultation}
                  className="inline-flex items-center space-x-2 bg-gold-accent hover:bg-[#b0936b] text-stone-950 font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full shadow-lg cursor-pointer transition-all hover:scale-105"
                >
                  <span>Start At Phase 01</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* SECTION 06: LUXURY EDITORIAL BRAND SHOWCASE MARQUEE */}
      <section className="py-16 md:py-20 bg-[#faf9f6] relative overflow-hidden border-t border-b border-stone-200/80 select-none">
        
        {/* Subtle Section Header Label */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-stone-400 uppercase">
            SELECTED ARCHITECTURAL ALLIANCES &amp; DISCIPLINE PARTNERSHIPS
          </span>
        </div>

        {/* Continuous Infinite Marquee Track */}
        <div className="group relative flex overflow-hidden py-3">
          
          {/* Subtle Gradient Edge Fades for Luxury Editorial Framing */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#faf9f6] via-[#faf9f6]/90 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex items-center space-x-12 sm:space-x-20 md:space-x-28 shrink-0 group-hover:[animation-play-state:paused]"
          >
            {[
              { name: "TREND INTERIORS", subtitle: "ARCHITECTURAL DESIGN", Icon: Compass },
              { name: "INTERIOR PREMIUM", subtitle: "BESPOKE SPACES", Icon: Home },
              { name: "BUILDING CONSTRUCTION", subtitle: "STRUCTURAL ENGINEERING", Icon: Building2 },
              { name: "ARCHITECT STUDIO", subtitle: "SPATIAL CONCEPT", Icon: Layers },
              { name: "LUXE DESIGN", subtitle: "RESIDENTIAL FINISHES", Icon: Sparkles },
              { name: "STONE & WOOD", subtitle: "TIMBER & JOINERY", Icon: Hammer },
              { name: "CRAFT LAB", subtitle: "ARTISANAL MILLWORK", Icon: Ruler },
              { name: "SPATIAL DESIGN", subtitle: "MODERN LIVING", Icon: Workflow },
              { name: "URBAN STUDIO", subtitle: "COMMERCIAL & VILLAS", Icon: Sliders },
              { name: "MONOLITH", subtitle: "ARCHITECTURAL FOUNDATION", Icon: Paintbrush },

              { name: "TREND INTERIORS", subtitle: "ARCHITECTURAL DESIGN", Icon: Compass },
              { name: "INTERIOR PREMIUM", subtitle: "BESPOKE SPACES", Icon: Home },
              { name: "BUILDING CONSTRUCTION", subtitle: "STRUCTURAL ENGINEERING", Icon: Building2 },
              { name: "ARCHITECT STUDIO", subtitle: "SPATIAL CONCEPT", Icon: Layers },
              { name: "LUXE DESIGN", subtitle: "RESIDENTIAL FINISHES", Icon: Sparkles },
              { name: "STONE & WOOD", subtitle: "TIMBER & JOINERY", Icon: Hammer },
              { name: "CRAFT LAB", subtitle: "ARTISANAL MILLWORK", Icon: Ruler },
              { name: "SPATIAL DESIGN", subtitle: "MODERN LIVING", Icon: Workflow },
              { name: "URBAN STUDIO", subtitle: "COMMERCIAL & VILLAS", Icon: Sliders },
              { name: "MONOLITH", subtitle: "ARCHITECTURAL FOUNDATION", Icon: Paintbrush }
            ].map((brand, idx) => {
              const BrandIcon = brand.Icon;
              return (
                <div
                  key={idx}
                  className="flex items-center space-x-3.5 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 group/brand cursor-default"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-stone-200/50 border border-stone-300/60 flex items-center justify-center text-stone-700 group-hover/brand:border-stone-800 group-hover/brand:text-stone-950 group-hover/brand:bg-white transition-all duration-300 shadow-xs">
                    <BrandIcon size={18} strokeWidth={1.5} />
                  </div>
                  <div className="text-left space-y-0.5">
                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-stone-800 group-hover/brand:text-stone-950 uppercase block font-sans transition-colors whitespace-nowrap">
                      {brand.name}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-stone-400 font-medium tracking-widest uppercase block transition-colors whitespace-nowrap">
                      {brand.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </section>

      {/* SECTION 07: INDUSTRIES & SPATIAL DIVERSITY */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(197,168,128,0.08),_transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
          
          <div className="text-left max-w-3xl space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              OUR SPATIAL DIVERSITY
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Industries <span className="font-serif italic font-normal text-gold-accent">We</span> Serve
            </h2>
            <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed">
              Our architects and master carpenters adapt to specific residential codes, corporate acoustic requirements, retail circulation flows, and luxury hospitality finishes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-gold-accent/40 transition-all duration-300 text-left relative group cursor-default"
              >
                <div className="text-stone-500 font-mono text-[10px] group-hover:text-gold-accent transition-colors block mb-4 font-bold">
                  {ind.count}
                </div>
                <h3 className="text-sm sm:text-base font-bold tracking-wide text-white group-hover:text-gold-accent transition-colors">
                  {ind.name}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 08: REGIONAL SERVICE AREAS */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
          
          <div className="text-left max-w-3xl space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              REGIONAL OPERATIONS &amp; SITE SURVEY NETWORK
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-950">
              Service <span className="font-serif italic font-normal text-gold-accent">Areas &amp;</span> Locations
            </h2>
            <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
              We travel directly to verify laser measurements, supervise carpentry mockups, and run turnkey White-Glove handovers across major Indian metros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 p-6 rounded-3xl hover:shadow-2xl hover:border-gold-accent transition-all duration-500 group relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-stone-950 group-hover:text-gold-accent transition-colors">
                      {city.name}
                    </h3>
                    <MapPin size={18} className="text-gold-accent" />
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {city.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-[10px] font-mono text-stone-400">
                  <span>On-Site Survey:</span>
                  <span className="text-stone-900 font-bold">24-48 Hr SLA</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 09: FREQUENTLY ASKED QUESTIONS WITH SEARCH */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-gold-accent text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              TRANSPARENT ARCHITECTURAL INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-950">
              Service <span className="font-serif italic font-normal text-gold-accent">Insights &amp;</span> FAQ
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search service questions (e.g. BOQ, warranty, materials)..."
              className="w-full bg-[#faf9f6] border border-stone-300 rounded-full pl-12 pr-4 py-3.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-gold-accent transition-colors shadow-inner"
            />
          </div>

          {/* Accordion Panels */}
          <div className="space-y-4 text-left">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#faf9f6] border border-stone-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-stone-950 group-hover:text-gold-accent transition-colors">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-stone-400 group-hover:text-gold-accent shrink-0 ml-4"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm font-light text-stone-600 leading-relaxed border-t border-stone-200/50 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 bg-stone-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_IMAGES.ctaBg}
            alt="Magnificent spatial architecture Suthar Studio final"
            fill
            className="object-cover opacity-20 filter brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-stone-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="text-gold-accent text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              LET'S START YOUR JOURNEY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Let's Build Your <span className="font-serif italic font-normal text-gold-accent">Dream</span> Space.
            </h2>
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-2">
              Whether you're planning a home, office, renovation, or custom furniture project, our team is ready to create spaces that combine thoughtful design with exceptional craftsmanship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-[#b0936b] px-8 py-5 rounded-full cursor-pointer shadow-xl hover:scale-105"
            >
              <span>Book Free Consultation</span>
              <div className="w-7 h-7 rounded-full bg-stone-950 text-gold-accent flex items-center justify-center">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={handleOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-white/5 backdrop-blur-md cursor-pointer hover:border-gold-accent hover:text-gold-accent"
            >
              Get Itemized BOQ Estimate
            </button>
          </div>
        </div>
      </section>

      {/* FULL SPECIFICATION LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedSpecService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/85 backdrop-blur-xl">
            
            {/* Backdrop click to dismiss */}
            <div className="absolute inset-0 z-0" onClick={() => setSelectedSpecService(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-stone-950 border border-stone-800 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative z-10 text-left space-y-8"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedSpecService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-900 border border-stone-700 hover:border-gold-accent text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="space-y-2 border-b border-stone-800 pb-6 pr-12">
                <div className="inline-flex items-center space-x-2 text-gold-accent text-xs font-mono font-bold tracking-widest uppercase">
                  <span>ARCHITECTURAL SPECIFICATION</span>
                  <span>&bull;</span>
                  <span>{selectedSpecService.accent}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {selectedSpecService.title}
                </h3>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Image */}
                <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 border border-stone-800">
                  <Image
                    src={selectedSpecService.image}
                    alt={selectedSpecService.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-gold-accent font-bold uppercase tracking-widest">
                    FIG 01.0 // {selectedSpecService.id}
                  </div>
                </div>

                {/* Specs Details */}
                <div className="md:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold font-mono text-stone-400 uppercase tracking-widest">
                      ARCHITECTURAL SCOPE &amp; FIDELITY
                    </h4>
                    <p className="text-sm font-light text-stone-300 leading-relaxed">
                      {selectedSpecService.description}
                    </p>
                  </div>

                  <div className="bg-stone-900 border border-stone-800 p-5 rounded-2xl space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gold-accent flex items-center space-x-2 font-mono">
                      <Sparkles size={14} />
                      <span>PRIMARY DELIVERABLES</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedSpecService.features.map((feat, i) => (
                        <div key={i} className="flex items-center space-x-2.5 text-xs text-stone-200">
                          <CheckCircle2 size={14} className="text-gold-accent shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => {
                        setSelectedSpecService(null);
                        handleOpenConsultation();
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gold-accent hover:bg-[#b0936b] text-stone-950 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-xl"
                    >
                      <span>Inquire About Service</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      onClick={() => setSelectedSpecService(null)}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-stone-700 text-stone-300 hover:text-white rounded-full text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
