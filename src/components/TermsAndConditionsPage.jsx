import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Scale, 
  Hammer, 
  Calculator, 
  Coins, 
  Clock, 
  Users, 
  PenTool, 
  ShieldAlert, 
  XCircle, 
  Compass, 
  RefreshCw, 
  Mail, 
  ArrowLeft, 
  Check, 
  Calendar, 
  ArrowRight,
  MapPin,
  FileText,
  Phone,
  Layout,
  HelpCircle,
  Gem,
  Sparkles
} from "lucide-react";

// Table of Contents Section definitions for Terms & Conditions
const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms", icon: Scale },
  { id: "services", title: "2. Our Services", icon: Layout },
  { id: "consultations", title: "3. Consultations & Estimates", icon: Calculator },
  { id: "pricing", title: "4. Pricing Variables", icon: Coins },
  { id: "timelines", title: "5. Project Timelines", icon: Clock },
  { id: "responsibilities", title: "6. Client Responsibilities", icon: Users },
  { id: "intellectual", title: "7. Intellectual Property", icon: PenTool },
  { id: "liability", title: "8. Limitation of Liability", icon: ShieldAlert },
  { id: "cancellation", title: "9. Cancellation Policy", icon: XCircle },
  { id: "usage", title: "10. Website Usage", icon: Compass },
  { id: "changes", title: "11. Changes to Terms", icon: RefreshCw },
  { id: "contact", title: "12. Contact Information", icon: Mail }
];

export default function TermsAndConditionsPage({ onBackToHome, setView, onOpenQuote }) {
  const [activeSection, setActiveSection] = useState("acceptance");

  // References for scroll tracking
  const sectionRefs = {
    "acceptance": useRef(null),
    "services": useRef(null),
    "consultations": useRef(null),
    "pricing": useRef(null),
    "timelines": useRef(null),
    "responsibilities": useRef(null),
    "intellectual": useRef(null),
    "liability": useRef(null),
    "cancellation": useRef(null),
    "usage": useRef(null),
    "changes": useRef(null),
    "contact": useRef(null)
  };

  // Scroll to view
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = sectionRefs[id]?.current;
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Set up Intersection Observer to track active section based on user scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Find the current active section
      for (const section of sections) {
        const element = sectionRefs[section.id]?.current;
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenConsultation = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      window.dispatchEvent(new CustomEvent("open-consultation"));
    }
  };

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-accent/30 selection:text-stone-950 pt-[80px] overflow-hidden min-h-screen text-left">
      
      {/* PAGE HERO */}
      <section className="relative py-20 bg-[var(--color-surface-dark)] text-white overflow-hidden" id="terms-hero">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950 opacity-100" />
          {/* Grid Layout Line Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
              <div className="border-l border-white h-full" />
              <div className="border-l border-white h-full" />
              <div className="border-l border-white h-full" />
              <div className="border-l border-white h-full border-r" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase mb-8">
            <button onClick={onBackToHome} className="hover:text-gold-accent transition-colors cursor-pointer uppercase font-bold">HOME</button>
            <span>/</span>
            <span className="text-gold-accent font-bold">TERMS & CONDITIONS</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <span className="text-gold-accent text-xs sm:text-sm tracking-[0.3em] font-mono font-bold block uppercase">
              LEGAL INFORMATION
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase"
            >
              Terms & <span className="text-gold-accent">Conditions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[var(--color-text-muted)] font-light text-sm sm:text-base md:text-lg leading-relaxed pt-2"
            >
              These Terms & Conditions govern your use of the Suthar Interior Studio website and our professional architecture, interior design, furniture manufacturing, renovation, and turnkey services.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-2.5 pt-4 text-xs font-mono text-stone-400"
            >
              <Calendar size={13} className="text-gold-accent" />
              <span>LAST UPDATED:</span>
              <span className="text-gold-accent font-semibold">JUNE 30, 2026</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN CONTENT WITH STICKY TABLE OF CONTENTS */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: STICKY NAVIGATION (TABLE OF CONTENTS) */}
          <div className="lg:col-span-4 sticky top-[120px] z-20 bg-[#faf9f6] lg:bg-transparent -mx-6 px-6 py-4 lg:p-0 border-b border-stone-200/50 lg:border-none">
            <div className="bg-white rounded-2xl border border-stone-200/40 p-6 shadow-sm space-y-6 hidden lg:block">
              <div className="flex items-center space-x-2.5 pb-4 border-b border-stone-100">
                <Scale size={18} className="text-gold-accent" />
                <h3 className="text-sm font-mono tracking-widest uppercase font-bold text-stone-900">Terms Index</h3>
              </div>
              <nav className="flex flex-col space-y-1.5 text-left">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`group flex items-center space-x-3 px-4 py-3 text-xs tracking-wider uppercase font-mono font-bold transition-all duration-300 rounded-lg cursor-pointer ${
                        isActive
                          ? "bg-[var(--color-surface-dark)] text-gold-accent shadow-md shadow-stone-950/5 translate-x-1"
                          : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                      }`}
                    >
                      <IconComponent size={14} className={`shrink-0 transition-transform ${isActive ? "scale-110 text-gold-accent" : "text-stone-400 group-hover:text-stone-900"}`} />
                      <span className="truncate">{section.title.substring(3)}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Horizontal Carousel Navigation */}
            <div className="lg:hidden flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap border rounded-none transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[var(--color-surface-dark)] text-gold-accent border-stone-950 shadow-sm"
                        : "bg-white text-stone-500 border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    {section.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: DOCUMENT DETAILS */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. Acceptance of Terms */}
            <div ref={sectionRefs["acceptance"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="acceptance">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Scale size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 01</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Acceptance of Terms</h2>
                </div>
              </div>

              <div className="text-stone-600 font-light text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Welcome to Suthar Interior Studio. By visiting our digital portfolio, utilizing our website resources, or formally engaging our studio to execute professional architecture, interior design, renovation, or manufacturing contracts, you agree to comply with and be bound by these Terms & Conditions.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and Suthar Interior Studio. If you disagree with any portion of these provisions, you must immediately cease accessing this website and refrain from requesting consultation assets.
                </p>
              </div>
            </div>

            {/* 2. Our Services */}
            <div ref={sectionRefs["services"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden" id="services">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Layout size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 02</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Our Services</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Suthar Interior Studio provides expert, custom design-build services tailored for luxury residential and commercial environments. Our professional portfolio includes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Architectural Planning", desc: "Structural layout creation, spacing grids, and custom blueprints." },
                  { title: "Premium Interior Design", desc: "Color consulting, aesthetic material matching, and lighting layers." },
                  { title: "Custom Furniture Fabrication", desc: "Solid Teak, Walnut, and European Oak furniture constructed in our studio." },
                  { title: "Comprehensive Renovation", desc: "Complete civil rebuilding, electrical rewiring, and bathroom waterproofing." },
                  { title: "Commercial Space Curation", desc: "Boutique retail paths, ergonomic offices, and corporate workspace hubs." },
                  { title: "Turnkey Design Solutions", desc: "Complete end-to-end management spanning design, sourcing, and on-site buildout." },
                  { title: "Expert Consultations", desc: "Interactive layout audits and architectural brainstorming sessions." },
                  { title: "Technical Material Guidance", desc: "Rigorous grade comparisons including BWR, BWP marine ply, and stone selection." }
                ].map((serv, idx) => (
                  <div key={idx} className="p-5 bg-stone-50 border border-stone-100 rounded-2xl flex items-start space-x-3.5">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-surface-dark)] text-gold-accent flex items-center justify-center text-[9px] shrink-0 font-mono font-bold mt-0.5">
                      {idx+1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-stone-900 font-bold font-mono text-xs uppercase tracking-wider">{serv.title}</h4>
                      <p className="text-stone-500 text-xs font-light leading-relaxed">{serv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Consultations & Estimates */}
            <div ref={sectionRefs["consultations"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="consultations">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Calculator size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 03</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Consultations & Estimates</h2>
                </div>
              </div>

              <div className="text-stone-600 font-light text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Initial online chats, diagnostic chatbot inputs, and initial brief phone alignments may be offered free of charge to understand your project scope.
                </p>
                <p>
                  Any written or spoken financial estimates, material estimates, or draft quotations issued prior to a detailed physical site survey are subject to revision. Final pricing blueprints depend heavily on exact physical dimensions, structural constraints, custom joinery details, and actual material catalogs selected.
                </p>
              </div>
            </div>

            {/* 4. Pricing Variables */}
            <div ref={sectionRefs["pricing"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden" id="pricing">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Coins size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 04</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Pricing Variables</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                As a premium custom studio, our design-build pricing is highly responsive to project-specific requirements. Total project costs fluctuate based on:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { title: "Project Size", val: "Total area, floor count, & architectural volume." },
                  { title: "Material Selection", desc: "Solid timber vs premium veneers vs laminate grades." },
                  { title: "Hardware Specs", desc: "Soft-close runs, German hinges, & hidden slides." },
                  { title: "Customization", desc: "Intricate slatted timber wood panels or curves." },
                  { title: "Labor Needs", desc: "Highly skilled artisans and master carpenters." },
                  { title: "Site Conditions", desc: "Plaster level, dampness, or remote locations." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 border border-stone-100 rounded-2xl bg-stone-50/50 space-y-1">
                    <h5 className="text-stone-900 font-bold font-mono text-[11px] uppercase tracking-wider">{item.title}</h5>
                    <p className="text-stone-500 text-[10px] font-light leading-snug">{item.val || item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Project Timelines */}
            <div ref={sectionRefs["timelines"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="timelines">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 05</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Project Timelines</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed space-y-4">
                We pride ourselves on meeting schedules, but all physical buildout timelines are estimations rather than strict absolute deadlines. Execution calendars can fluctuate due to unexpected variables, including:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "Raw timber and custom hardware material availability",
                  "Unfavorable weather conditions affecting wood polishing",
                  "Iterative customer design revisions and blueprint alterations",
                  "Underlying physical site conditions (e.g. wet concrete)",
                  "Force majeure (unexpected global shipping or natural halts)"
                ].map((item, idx) => (
                  <span key={idx} className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 bg-stone-50 border border-stone-200/50 rounded-xl text-stone-700 text-xs font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 6. Client Responsibilities */}
            <div ref={sectionRefs["responsibilities"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="responsibilities">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Users size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 06</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Client Responsibilities</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                A gorgeous home interior is a collaboration. To maintain momentum and ensure millimetric precision, client responsibilities include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Providing Accurate Information", desc: "Sharing correct layout files, electrical points, or housing association rules." },
                  { label: "Timely Design Approvals", desc: "Confirming 3D renderings and material boards promptly to allow workshop releases." },
                  { label: "Adhering to Payment Milestones", desc: "Releasing staggered stage payments on time to prevent material booking delays." },
                  { label: "Site Access & Clearances", desc: "Securing appropriate permissions, keys, and contractor entrance passes." },
                  { label: "Open Channels of Communication", desc: "Participating in site reviews and raising concerns immediately before paint finishes." }
                ].map((resp, idx) => (
                  <div key={idx} className="p-5 bg-[#faf9f6]/40 border border-stone-200/20 rounded-2xl space-y-1.5">
                    <h4 className="text-stone-900 font-bold font-mono text-xs uppercase tracking-wider">{idx+1}. {resp.label}</h4>
                    <p className="text-stone-500 text-xs font-light leading-relaxed">{resp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Intellectual Property */}
            <div ref={sectionRefs["intellectual"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="intellectual">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <PenTool size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 07</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Intellectual Property</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                All contents published on this platform—including visual renderings, hand-sketched layouts, structural formulas, typography pairings, custom photographs, texts, site codes, and logos—are the exclusive intellectual property of Suthar Interior Studio.
              </p>
              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Any unauthorized downloading, reproduction, digital cloning, or utilization of our creative portfolios for commercial projects or copycat layouts is strictly prohibited unless clear written authorization has been signed by our studio directors.
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div ref={sectionRefs["liability"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="liability">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 08</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Limitation of Liability</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Suthar Interior Studio handles all spatial projects with absolute professional diligence. However, we maintain reasonable limits regarding liability. We shall not be held responsible for indirect financial losses, accidental timeline delays beyond our reasonable command, third-party material supplier defaults, municipal authority stoppages, or micro-cracks that naturally occur as timber acclimatizes to local humidity.
              </p>
            </div>

            {/* 9. Cancellation Policy */}
            <div ref={sectionRefs["cancellation"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="cancellation">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <XCircle size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 09</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Cancellation Policy</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Because our custom millwork, wardrobes, and modular cabinets are precisely made-to-order, cancelling a project after materials are cut and hardware is sourced is highly disruptive. Project cancellations will incur professional fees and material charges proportional to the stage of design or fabrication work completed up to the date of formal cancellation.
              </p>
            </div>

            {/* 10. Website Usage */}
            <div ref={sectionRefs["usage"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="usage">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Compass size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 10</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Website Usage</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Users are granted a limited, non-exclusive license to explore our portfolio. You must not misuse this website, harvest digital media files without permission, launch malicious scripts, or attempt unauthorized database access to our server registries.
              </p>
            </div>

            {/* 11. Changes to Terms */}
            <div ref={sectionRefs["changes"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="changes">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 11</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Changes to Terms</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Suthar Interior Studio reserves the right to modify these Terms & Conditions at any point. Updated clauses will immediately take effect upon publication on this page. Your continued use of our website or services constitutes formal acceptance of our revised policies.
              </p>
            </div>

            {/* 12. Contact Information */}
            <div ref={sectionRefs["contact"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden" id="contact">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 12</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Contact Information</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Should you require clarifications regarding these contractual parameters, please connect with our office:
              </p>

              {/* Contact information list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Phone, title: "Tel Office", val: "+1 (480) 456-0789" },
                  { icon: Mail, title: "Support Mail", val: "studio@sutharinterior.com" },
                  { icon: Clock, title: "Studio Access Hours", val: "Monday - Saturday: 9:00 AM - 6:00 PM" },
                  { icon: MapPin, title: "Showroom Service Area", val: "Spokane Valley, WA, USA (and surrounding zones)" }
                ].map((info, idx) => {
                  const InfoIcon = info.icon;
                  return (
                    <div key={idx} className="p-5 border border-stone-200/60 rounded-2xl flex items-start space-x-4 hover:border-gold-accent transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-[#faf9f6] flex items-center justify-center text-gold-accent border border-stone-100 shrink-0">
                        <InfoIcon size={16} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-stone-950 font-bold font-mono text-[11px] uppercase tracking-wider">{info.title}</h4>
                        <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">{info.val}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[var(--color-surface-dark)] text-white py-24 relative overflow-hidden" id="terms-cta">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-3 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-gold-accent text-xs font-mono tracking-[0.3em] font-bold block uppercase">
            SUTHAR CONTRACT BRIEFING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase max-w-3xl mx-auto">
            Need More <br />
            <span className="text-gold-accent">Information?</span>
          </h2>
          <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            If you have questions regarding our services, pricing, project execution, or these Terms & Conditions, our team will be happy to assist you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <button
              onClick={() => setView("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-gold-accent px-8 py-4.5 rounded-none cursor-pointer"
            >
              <span>Contact Us</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/15 bg-[var(--color-surface-dark)]/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={handleOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4.5 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-gold-accent hover:text-gold-accent"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
