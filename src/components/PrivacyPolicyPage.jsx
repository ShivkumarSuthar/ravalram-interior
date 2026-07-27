import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  Cookie, 
  Globe, 
  RefreshCw, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  Check, 
  ExternalLink, 
  Calendar, 
  ArrowRight, 
  AlertCircle,
  HelpCircle,
  Users,
  Smartphone,
  ChevronRight
} from "lucide-react";

// Table of Contents Section definitions for Privacy Policy
const sections = [
  { id: "info-collect", title: "1. Information We Collect", icon: Database },
  { id: "info-use", title: "2. How We Use Information", icon: UserCheck },
  { id: "info-sharing", title: "3. Information Sharing", icon: Users },
  { id: "cookies", title: "4. Cookies & Analytics", icon: Cookie },
  { id: "data-security", title: "5. Data Security Measures", icon: Lock },
  { id: "third-party", title: "6. Third Party Services", icon: Globe },
  { id: "your-rights", title: "7. Your Legal Rights", icon: Shield },
  { id: "children-privacy", title: "8. Children's Privacy", icon: AlertCircle },
  { id: "policy-updates", title: "9. Policy Updates", icon: RefreshCw },
  { id: "contact-us", title: "10. Contact Suthar Studio", icon: Mail }
];

export default function PrivacyPolicyPage({ onBackToHome, setView, onOpenQuote }) {
  const [activeSection, setActiveSection] = useState("info-collect");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // References for scroll tracking
  const sectionRefs = {
    "info-collect": useRef(null),
    "info-use": useRef(null),
    "info-sharing": useRef(null),
    "cookies": useRef(null),
    "data-security": useRef(null),
    "third-party": useRef(null),
    "your-rights": useRef(null),
    "children-privacy": useRef(null),
    "policy-updates": useRef(null),
    "contact-us": useRef(null),
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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() !== "") {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-accent/30 selection:text-stone-950 pt-[80px] overflow-hidden min-h-screen text-left">
      
      {/* PAGE HERO */}
      <section className="relative py-20 bg-stone-950 text-white overflow-hidden" id="privacy-hero">
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
            <span className="text-gold-accent font-bold">PRIVACY POLICY</span>
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
              Privacy <span className="text-gold-accent">Policy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed pt-2"
            >
              Your privacy matters to us. This Privacy Policy explains how Suthar Interior Studio collects, uses, stores, and protects your personal information when you visit our website or contact our team.
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
                <Shield size={18} className="text-gold-accent" />
                <h3 className="text-sm font-mono tracking-widest uppercase font-bold text-stone-900">Document Outline</h3>
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
                          ? "bg-stone-950 text-gold-accent shadow-md shadow-stone-950/5 translate-x-1"
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
                        ? "bg-stone-950 text-gold-accent border-stone-950 shadow-sm"
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
            
            {/* 1. Information We Collect */}
            <div ref={sectionRefs["info-collect"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden" id="info-collect">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Database size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 01</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Information We Collect</h2>
                </div>
              </div>

              <div className="text-stone-600 font-light text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  At Suthar Interior Studio, we are fully committed to protecting your personal data and ensuring transparent operations. We collect information necessary to design, plan, and deliver tailored architecture and interior spaces.
                </p>
                <p>
                  We may collect personal details that you voluntarily submit to us, which include:
                </p>
              </div>

              {/* Bento grid layout of collect items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Personal Details", desc: "Your Full Name, designated contact points, and direct communication details.", items: ["Name", "Email Address", "Phone Number"] },
                  { title: "Project Blueprint Context", desc: "Details required to draft appropriate interior designs.", items: ["City / Locality", "Project Details", "Contact Form Information"] },
                  { title: "Technical Session Logging", desc: "Data automatically recorded during your website interaction.", items: ["Browser Information", "Device Information", "IP Address"] }
                ].map((group, idx) => (
                  <div key={idx} className="p-5 bg-stone-50/50 border border-stone-100 rounded-2xl space-y-3">
                    <h4 className="text-stone-900 font-mono text-xs font-bold uppercase tracking-wider">{group.title}</h4>
                    <p className="text-stone-500 text-xs font-light">{group.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-1.5">
                      {group.items.map((item, itemIdx) => (
                        <span key={itemIdx} className="bg-white px-2.5 py-1 text-[10px] font-mono font-medium text-stone-600 border border-stone-200/50 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div ref={sectionRefs["info-use"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden" id="info-use">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <UserCheck size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 02</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">How We Use Your Information</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                The information we gather is used exclusively to facilitate, elevate, and refine our architectural and premium interior services. We structure your information for the following specific purposes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Respond thoroughly to design inquiries and questions",
                  "Prepare precise custom quotations & itemized cost estimates",
                  "Schedule formal interior consultations & showroom visits",
                  "Improve customer support and studio communications",
                  "Monitor, audit, and improve website speed and performance",
                  "Provide dynamic project progress updates and final handoffs"
                ].map((usage, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-[#faf9f6]/40 border border-stone-200/20 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-stone-900 text-gold-accent flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-stone-700 text-xs sm:text-sm font-light leading-snug">{usage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Information Sharing */}
            <div ref={sectionRefs["info-sharing"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="info-sharing">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Users size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 03</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Information Sharing</h2>
                </div>
              </div>

              <div className="p-6 bg-stone-50 border border-stone-100 rounded-2xl border-l-4 border-l-stone-900">
                <p className="text-stone-900 text-sm md:text-base leading-relaxed">
                  "Suthar Interior Studio maintains an absolute zero-compromise policy regarding client privacy. We never sell, lease, trade, or distribute your personal details to external marketing agencies."
                </p>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Your data is only shared with highly trusted subcontractors or partners (such as direct wooden cargo carriers, modular cabinetry manufacturers, and lighting installers) solely when required to execute your design contracts, or when we are legally obliged to do so.
              </p>
            </div>

            {/* 4. Cookies & Analytics */}
            <div ref={sectionRefs["cookies"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden" id="cookies">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Cookie size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 04</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Cookies & Web Analytics</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                We use tracking cookies to trace how our online showcase is explored, ensuring faster asset load times and seamless navigation. Specifically, we utilize:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Website Analytics", desc: "Understanding customer interaction behaviors to organize portfolio grids." },
                  { title: "Performance Support", desc: "Remembering core site state to prevent repeated page flicker." },
                  { title: "User Preferences", desc: "Securing input values so you don't re-enter consultation details." }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 border border-stone-100 rounded-2xl space-y-2.5 text-left bg-[#faf9f6]/30">
                    <span className="text-[10px] font-mono font-bold text-gold-accent tracking-wider uppercase block">TYPE 0{idx+1}</span>
                    <h4 className="text-stone-900 font-bold text-xs uppercase font-mono">{item.title}</h4>
                    <p className="text-stone-500 text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-stone-400 font-light font-mono">
                *You can modify cookie preferences entirely within your individual browser settings. Note that disabling cookies might disable some premium interactive visual modules.
              </p>
            </div>

            {/* 5. Data Security Measures */}
            <div ref={sectionRefs["data-security"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="data-security">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Lock size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 05</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Data Security Measures</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                We implement industry-standard electronic, physical, and managerial security controls to ensure client data is fully shielded. Suthar Interior Studio uses secure socket layers (SSL), data access controls, and firewall barriers to protect your personal details against unauthorized interception, structural breaches, or accidental leakage.
              </p>
            </div>

            {/* 6. Third Party Services */}
            <div ref={sectionRefs["third-party"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="third-party">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Globe size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 06</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Third Party Services</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Our digital layout integrates carefully filtered external plug-ins and platforms to support client navigation, messaging channels, and metrics collection. This includes integrations such as:
              </p>

              <div className="flex flex-wrap gap-3">
                {["Google Maps API", "Google Analytics", "WhatsApp API", "Corporate Email Relays"].map((item, idx) => (
                  <span key={idx} className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-stone-50 border border-stone-200/50 rounded-xl text-stone-700 text-xs font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                Please be aware that these external platforms operate on their own independent privacy guidelines and terms. Suthar Interior Studio holds no control over their storage protocols.
              </p>
            </div>

            {/* 7. Your Legal Rights */}
            <div ref={sectionRefs["your-rights"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden" id="your-rights">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Shield size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 07</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Your Legal Rights</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                You possess absolute ownership and control over your personal records. Depending on local statutes and frameworks, you may exercise the following rights regarding your stored information:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Access Information", desc: "Request a digital copy of all personal details currently saved in our CRM." },
                  { title: "Correction Rights", desc: "Correct any outdated, incomplete, or inaccurate contact records." },
                  { title: "Deletion / Erasure", desc: "Request the complete, irreversible erasure of all personal entries." },
                  { title: "Withdraw Consent", desc: "Revoke permission for newsletters and design-build updates instantly." }
                ].map((right, idx) => (
                  <div key={idx} className="p-5 bg-stone-50 rounded-2xl border border-stone-100 space-y-2">
                    <h4 className="text-stone-900 font-bold font-mono text-xs uppercase tracking-wider">{right.title}</h4>
                    <p className="text-stone-500 text-xs font-light leading-relaxed">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Children's Privacy */}
            <div ref={sectionRefs["children-privacy"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="children-privacy">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 08</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Children's Privacy</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                Our portfolio, website, and design services are engineered strictly for home buyers, businesses, and adult clients. Our digital showcase is not intended for or directed towards children under 13 years of age. We do not knowingly compile or store records from minors under any conditions.
              </p>
            </div>

            {/* 9. Policy Updates */}
            <div ref={sectionRefs["policy-updates"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-6 relative overflow-hidden" id="policy-updates">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 09</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Policy Updates</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                As technology evolutions and legal standard frameworks update, Suthar Interior Studio may revise this Privacy Policy periodically. Any amendments will be instantly published onto this page, and the "Last Updated" header at the top of the document will reflect the changes. We recommend reviewing this document regularly.
              </p>
            </div>

            {/* 10. Contact Suthar Studio */}
            <div ref={sectionRefs["contact-us"]} className="bg-white rounded-3xl border border-stone-200/40 p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden" id="contact-us">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-accent" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stone-50 border border-stone-100 flex items-center justify-center text-gold-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-gold-accent text-[10px] font-mono tracking-[0.2em] font-bold block uppercase">SECTION 10</span>
                  <h2 className="text-xl sm:text-2xl font-serif text-stone-950 font-bold uppercase">Contact Information</h2>
                </div>
              </div>

              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                If you have any requests or complaints about how Suthar Interior Studio manages your personal information, please reach out to our privacy coordinator directly:
              </p>

              {/* Grid of contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Phone, title: "Call Our Studio", val: "+1 (480) 456-0789", label: "Tel:" },
                  { icon: Mail, title: "Privacy Support", val: "studio@sutharinterior.com", label: "Email:" },
                  { icon: MapPin, title: "Our Location", val: "5609 E Sprague Ave, Spokane Valley, WA 99212", label: "Address:" },
                  { icon: Clock, title: "Business Hours", val: "Mon - Sat: 9:00 AM - 6:00 PM", label: "Hours:" }
                ].map((card, idx) => {
                  const CardIcon = card.icon;
                  return (
                    <div key={idx} className="p-5 border border-stone-200/60 rounded-2xl flex items-start space-x-4 hover:border-gold-accent transition-colors duration-300">
                      <div className="w-10 h-10 rounded-full bg-[#faf9f6] flex items-center justify-center text-gold-accent border border-stone-100 shrink-0">
                        <CardIcon size={16} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-stone-950 font-bold font-mono text-[11px] uppercase tracking-wider">{card.title}</h4>
                        <span className="text-gold-accent text-[10px] font-mono font-bold block">{card.label}</span>
                        <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">{card.val}</p>
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
      <section className="bg-stone-950 text-white py-24 relative overflow-hidden" id="privacy-cta">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-3 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-gold-accent text-xs font-mono tracking-[0.3em] font-bold block uppercase">
            ANY REMAINING INQUIRIES?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase max-w-3xl mx-auto">
            Have Questions About <br />
            <span className="text-gold-accent">Your Privacy?</span>
          </h2>
          <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            If you have any questions regarding this Privacy Policy or the way we handle your information, our team will be happy to assist you.
          </p>

          <div className="pt-4">
            <button
              onClick={() => setView("contact")}
              className="inline-flex items-center justify-center space-x-3 text-stone-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-gold-accent px-8 py-4.5 rounded-none cursor-pointer"
            >
              <span>Contact Us</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/15 bg-stone-950/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
