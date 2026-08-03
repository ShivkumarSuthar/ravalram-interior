import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Calendar, Clock, User, Mail, Sparkles, Check, Search, Grid, LayoutGrid, ArrowUpRight, ChevronDown, Compass, Award, Users, Star, ArrowRight, Paintbrush, Hammer, Ruler, HelpCircle, BookOpen } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "../lib/data.js";
import BrandLogo from "./BrandLogo.jsx";

export default function Header({ currentView = "home", setView = () => {}, onOpenQuote = null }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenSearchModal = () => {
    setIsSearchOpen(true);
  };

  // States for expanding mobile accordions
  const [isHomeSubOpen, setIsHomeSubOpen] = useState(false);
  const [isPagesSubOpen, setIsPagesSubOpen] = useState(false);
  const [isServicesSubOpen, setIsServicesSubOpen] = useState(false);

  // Interactive Mega Menu States
  const [activeAbout, setActiveAbout] = useState("OUR STORY");
  const [activeServices, setActiveServices] = useState("INTERIOR WORK");
  const [activeWork, setActiveWork] = useState("RESIDENTIAL PROJECTS");
  const [activeContact, setActiveContact] = useState("REQUEST A QUOTE");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleOpenEvent = () => {
      setIsConsultModalOpen(true);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-consultation", handleOpenEvent);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-consultation", handleOpenEvent);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  const handleOpenConsultModal = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      setIsConsultModalOpen(true);
    }
  };

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsConsultModalOpen(false);
      setView("thank-you");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  const navigateToSection = (targetView, hash) => {
    setView(targetView);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-white ${
          isScrolled
            ? "bg-black backdrop-blur-xl py-3 border-b border-white/40 shadow-md"
            : "py-4"
        }`}
        id="app-header"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-500 px-5 sm:px-8 md:px-12 lg:px-16`}>
          
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "py-0"
              : "rounded-full border border-white/60 bg-white/10 backdrop-blur-md py-3 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
          }`}>
            
            {/* 1. Logo (Left) */}
            <div className="flex-shrink-0">
              <button
                onClick={() => navigateToSection("home", null)}
                className="flex items-center group cursor-pointer text-left focus:outline-none"
                id="header-logo-link"
              >
                <BrandLogo size="md" />
              </button>
            </div>

            {/* 2. Desktop Navigation (Center) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-white/30 backdrop-blur-md p-1.5 rounded-full border border-white/40" id="header-desktop-nav">
              
              {/* 1. Studio */}
              <button
                onClick={() => navigateToSection("home", null)}
                className={`text-[12px] font-semibold tracking-wider transition-all duration-300 px-4 py-1.5 rounded-full cursor-pointer flex items-center gap-1.5 group ${
                  currentView === "home"
                    ? "bg-amber-500 text-white shadow-sm shadow-amber-500/30"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="font-mono text-[9px] text-amber-400/80 group-hover:text-amber-400">01.</span>
                <span>Studio</span>
              </button>

              {/* 2. Expertise Dropdown */}
              <div 
                className="relative group/nav"
                onMouseLeave={() => setActiveServices("INTERIOR WORK")}
              >
                <button
                  className={`text-[12px] font-semibold tracking-wider flex items-center gap-1.5 px-4 py-1.5 rounded-full cursor-pointer transition-all duration-300 group ${
                    currentView === "services"
                      ? "bg-amber-500 text-white shadow-sm shadow-amber-500/30"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="font-mono text-[9px] text-amber-400/80 group-hover:text-amber-400">02.</span>
                  <span>Expertise</span>
                  <ChevronDown size={11} className="opacity-70 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-amber-400/80" />
                </button>
                
                {/* Dropdown Box */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[740px] bg-stone-950/95 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-3xl border-t-2 border-t-amber-400 border-x border-b border-white/10 flex overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                  {/* Left Column */}
                  <div className="w-[260px] bg-stone-900/80 p-3 flex flex-col space-y-1.5 border-r border-white/10 shrink-0">
                    <button
                      onMouseEnter={() => setActiveServices("INTERIOR WORK")}
                      onClick={() => navigateToSection("services", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeServices === "INTERIOR WORK" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Interior Work</span>
                      <Paintbrush size={14} className={activeServices === "INTERIOR WORK" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveServices("CARPENTRY")}
                      onClick={() => navigateToSection("services", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeServices === "CARPENTRY" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Carpentry</span>
                      <Hammer size={14} className={activeServices === "CARPENTRY" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveServices("PAINTING & FINISHING")}
                      onClick={() => navigateToSection("services", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeServices === "PAINTING & FINISHING" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Painting & Finishing</span>
                      <Sparkles size={14} className={activeServices === "PAINTING & FINISHING" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveServices("FLOORING")}
                      onClick={() => navigateToSection("services", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeServices === "FLOORING" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Flooring</span>
                      <Ruler size={14} className={activeServices === "FLOORING" ? "text-amber-400" : "text-stone-500"} />
                    </button>
                  </div>

                  {/* Right Column */}
                  <div className="flex-1 bg-stone-950/90 p-7 text-left flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="relative z-10">
                      <h4 className="text-lg font-serif font-bold text-white tracking-wide uppercase mb-1">
                        {activeServices}
                      </h4>

                      {activeServices === "INTERIOR WORK" && (
                        <div>
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block mb-3">COMPLETE INTERIOR DESIGN SOLUTIONS</span>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {["Full Interior Design", "Living Room Design", "Bedroom Design", "Kitchen & Dining Design", "Bathroom Design", "Study / Office Design", "Hallway & Entry Design"].map((sub, i) => (
                              <button
                                key={i}
                                onClick={() => { navigateToSection("services", null); setTimeout(() => { window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "designer" } })); }, 150); }}
                                className="text-left text-stone-400 hover:text-amber-400 text-[11px] font-medium tracking-wide transition-colors duration-200 py-1 uppercase flex items-center space-x-2 focus:outline-none cursor-pointer group/item"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 group-hover/item:bg-amber-400 group-hover/item:scale-125 transition-all" />
                                <span>{sub}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeServices === "CARPENTRY" && (
                        <div>
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block mb-3">BESPOKE WOODWORK & JOINERY SINCE 1989</span>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {["Modular Kitchens", "Bespoke Wardrobes", "TV Consoles & Units", "Solid Timber Dining Tables", "Doors & Window Frames", "Custom Timber Joinery"].map((sub, i) => (
                              <button
                                key={i}
                                onClick={() => { navigateToSection("services", null); setTimeout(() => { window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "contractor" } })); }, 150); }}
                                className="text-left text-stone-400 hover:text-amber-400 text-[11px] font-medium tracking-wide transition-colors duration-200 py-1 uppercase flex items-center space-x-2 focus:outline-none cursor-pointer group/item"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 group-hover/item:bg-amber-400 group-hover/item:scale-125 transition-all" />
                                <span>{sub}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeServices === "PAINTING & FINISHING" && (
                        <div>
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block mb-3">WALL ART & PREMIUM FINE COATINGS</span>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {["Italian Stucco Plasters", "Luster & Velvet Finishes", "PU & Melamine Polishing", "Exposed Brick Textures", "Metallic Wall Arts", "Royal Protective Coats"].map((sub, i) => (
                              <button
                                key={i}
                                onClick={() => { navigateToSection("services", null); setTimeout(() => { window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "layouts" } })); }, 150); }}
                                className="text-left text-stone-400 hover:text-amber-400 text-[11px] font-medium tracking-wide transition-colors duration-200 py-1 uppercase flex items-center space-x-2 focus:outline-none cursor-pointer group/item"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 group-hover/item:bg-amber-400 group-hover/item:scale-125 transition-all" />
                                <span>{sub}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeServices === "FLOORING" && (
                        <div>
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block mb-3">EXQUISITE STONE & WOOD SURFACES</span>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {["Italian Marble Laying", "Hardwood Wooden Planks", "Polished Granite Tiles", "Epoxy & Terrazzo Finishes", "Vitrified Tile Setting", "Custom Flooring Medallions"].map((sub, i) => (
                              <button
                                key={i}
                                onClick={() => { navigateToSection("services", null); setTimeout(() => { window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "layouts" } })); }, 150); }}
                                className="text-left text-stone-400 hover:text-amber-400 text-[11px] font-medium tracking-wide transition-colors duration-200 py-1 uppercase flex items-center space-x-2 focus:outline-none cursor-pointer group/item"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 group-hover/item:bg-amber-400 group-hover/item:scale-125 transition-all" />
                                <span>{sub}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => navigateToSection("services", null)}
                      className="group/btn inline-flex items-center space-x-2 text-[11px] font-bold text-amber-400 uppercase tracking-widest hover:text-white transition-colors duration-300 text-left mt-6 self-start focus:outline-none bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-amber-500/30 hover:border-amber-400 relative z-10 cursor-pointer"
                    >
                      <span>View All Services</span>
                      <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>

              {/* 3. Portfolio Dropdown */}
              <div 
                className="relative group/nav"
                onMouseLeave={() => setActiveWork("RESIDENTIAL PROJECTS")}
              >
                <button
                  className={`text-[12px] font-semibold tracking-wider flex items-center gap-1.5 px-4 py-1.5 rounded-full cursor-pointer transition-all duration-300 group ${
                    currentView === "gallery"
                      ? "bg-amber-500 text-white shadow-sm shadow-amber-500/30"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="font-mono text-[9px] text-amber-400/80 group-hover:text-amber-400">03.</span>
                  <span>Portfolio</span>
                  <ChevronDown size={11} className="opacity-70 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-amber-400/80" />
                </button>
                
                {/* Dropdown Box */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[720px] bg-stone-950/95 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-3xl border-t-2 border-t-amber-400 border-x border-b border-white/10 flex overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                  
                  {/* Left Column */}
                  <div className="w-[250px] bg-stone-900/80 p-3 flex flex-col space-y-1.5 border-r border-white/10 shrink-0">
                    <button
                      onMouseEnter={() => setActiveWork("RESIDENTIAL PROJECTS")}
                      onClick={() => navigateToSection("gallery", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeWork === "RESIDENTIAL PROJECTS" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Residential</span>
                      <Compass size={14} className={activeWork === "RESIDENTIAL PROJECTS" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveWork("COMMERCIAL PROJECTS")}
                      onClick={() => navigateToSection("gallery", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeWork === "COMMERCIAL PROJECTS" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Commercial</span>
                      <Grid size={14} className={activeWork === "COMMERCIAL PROJECTS" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveWork("BEFORE & AFTER")}
                      onClick={() => navigateToSection("gallery", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeWork === "BEFORE & AFTER" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Before & After</span>
                      <Sparkles size={14} className={activeWork === "BEFORE & AFTER" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveWork("CLIENT CASE STUDIES")}
                      onClick={() => navigateToSection("blog", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeWork === "CLIENT CASE STUDIES" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Case Studies</span>
                      <BookOpen size={14} className={activeWork === "CLIENT CASE STUDIES" ? "text-amber-400" : "text-stone-500"} />
                    </button>
                  </div>

                  {/* Right Column */}
                  <div className="flex-1 bg-stone-950/90 p-7 text-left flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                      <h4 className="text-lg font-serif font-bold text-white tracking-wide uppercase mb-1">
                        {activeWork}
                      </h4>

                      {activeWork === "RESIDENTIAL PROJECTS" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">LUXURY HOMES & VILLAS</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Step inside our curated catalog of ultra-luxury residential properties, sea-facing duplexes in Bandra, high-end penthouses, and bespoke timber integrations.
                          </p>
                          <div className="pt-2 flex flex-wrap gap-2">
                            <span className="text-[9px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded border border-white/10 text-amber-400">Sea-Facing Duplexes</span>
                            <span className="text-[9px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded border border-white/10 text-amber-400">Penthouses</span>
                            <span className="text-[9px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded border border-white/10 text-amber-400">Villas</span>
                          </div>
                        </div>
                      )}

                      {activeWork === "COMMERCIAL PROJECTS" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">INSPIRING SPACES FOR BRANDS</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Explore ergonomically structured workspaces, high-end design galleries, custom retail flagships, and premium offices curated for optimal flow and luxury aesthetic.
                          </p>
                          <div className="pt-2 flex flex-wrap gap-2">
                            <span className="text-[9px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded border border-white/10 text-amber-400">Corporate HQ</span>
                            <span className="text-[9px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded border border-white/10 text-amber-400">Retail Flagships</span>
                            <span className="text-[9px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded border border-white/10 text-amber-400">Galleries</span>
                          </div>
                        </div>
                      )}

                      {activeWork === "BEFORE & AFTER" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">ON-SITE STRUCTURAL MAGIC</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Examine high-fidelity case portfolios of on-site structural magic, transitioning hollow concrete shells into meticulously tailored luxury spaces.
                          </p>
                          <div className="pt-2 flex flex-wrap gap-2">
                            <span className="text-[9px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded border border-white/10 text-amber-400">Turnkey Remodels</span>
                            <span className="text-[9px] uppercase font-mono px-2.5 py-1 bg-white/5 rounded border border-white/10 text-amber-400">Raw Shells</span>
                          </div>
                        </div>
                      )}

                      {activeWork === "CLIENT CASE STUDIES" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">WALKTHROUGHS & SITE LOGS</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Read deep developmental studies mapping material sourcing challenges, carpentry joinery blueprints, site hurdles, and premium spatial deliveries.
                          </p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => navigateToSection("gallery", null)}
                      className="group/btn inline-flex items-center space-x-2 text-[11px] font-bold text-amber-400 uppercase tracking-widest hover:text-white transition-colors duration-300 text-left mt-6 self-start focus:outline-none bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-amber-500/30 hover:border-amber-400 relative z-10 cursor-pointer"
                    >
                      <span>View Project Gallery</span>
                      <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>

              {/* 4. Heritage Dropdown */}
              <div 
                className="relative group/nav"
                onMouseLeave={() => setActiveAbout("OUR STORY")}
              >
                <button
                  className={`text-[12px] font-semibold tracking-wider flex items-center gap-1.5 px-4 py-1.5 rounded-full cursor-pointer transition-all duration-300 group ${
                    currentView === "about-us" || currentView === "faqs"
                      ? "bg-amber-500 text-white shadow-sm shadow-amber-500/30"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="font-mono text-[9px] text-amber-400/80 group-hover:text-amber-400">04.</span>
                  <span>Heritage</span>
                  <ChevronDown size={11} className="opacity-70 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-amber-400/80" />
                </button>
                
                {/* Dropdown Box */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] bg-stone-950/95 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-3xl border-t-2 border-t-amber-400 border-x border-b border-white/10 flex overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                  
                  {/* Left Column */}
                  <div className="w-[240px] bg-stone-900/80 p-3 flex flex-col space-y-1.5 border-r border-white/10 shrink-0">
                    <button
                      onMouseEnter={() => setActiveAbout("OUR STORY")}
                      onClick={() => navigateToSection("about-us", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeAbout === "OUR STORY" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>About Us</span>
                      <Compass size={14} className={activeAbout === "OUR STORY" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveAbout("OUR TEAM")}
                      onClick={() => navigateToSection("about-us", "#team")}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeAbout === "OUR TEAM" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Our Team</span>
                      <Users size={14} className={activeAbout === "OUR TEAM" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveAbout("WHY CHOOSE US")}
                      onClick={() => navigateToSection("about-us", "#about-story")}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeAbout === "WHY CHOOSE US" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Why Choose Us</span>
                      <Award size={14} className={activeAbout === "WHY CHOOSE US" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveAbout("TESTIMONIALS")}
                      onClick={() => navigateToSection("faqs", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeAbout === "TESTIMONIALS" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>FAQs & Info</span>
                      <Check size={14} className={activeAbout === "TESTIMONIALS" ? "text-amber-400" : "text-stone-500"} />
                    </button>
                  </div>

                  {/* Right Column */}
                  <div className="flex-1 bg-stone-950/90 p-7 text-left flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                      <h4 className="text-lg font-serif font-bold text-white tracking-wide uppercase mb-1">
                        {activeAbout}
                      </h4>
                      
                      {activeAbout === "OUR STORY" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">GENERATIONAL HERITAGE SINCE 1989</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Founded in 1989 by master artisan Ravalram H. Suthar, we have spent over 30 years perfecting the art of bespoke timber joinery and luxury interior solutions.
                          </p>
                        </div>
                      )}

                      {activeAbout === "OUR TEAM" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">LEADERS & ARCHITECTS</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Led by Shivkumar Suthar and lead architect Padam P. Sutar, our team blends legacy Indian woodcraft with contemporary computational CAD and interior spatial architecture.
                          </p>
                        </div>
                      )}

                      {activeAbout === "WHY CHOOSE US" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">30+ YEARS OF UNCOMPROMISING TRUST</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            We guarantee architect-supervised construction sites, absolute 100% material authentication, clear Bill of Quantities (BOQ), and highly durable timber structures.
                          </p>
                        </div>
                      )}

                      {activeAbout === "TESTIMONIALS" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">QUESTIONS & ANSWERS</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Find details about project timelines, design consultation steps, warranty details, and site supervision policies.
                          </p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => navigateToSection("about-us", null)}
                      className="group/btn inline-flex items-center space-x-2 text-[11px] font-bold text-amber-400 uppercase tracking-widest hover:text-white transition-colors duration-300 text-left mt-6 self-start focus:outline-none bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-amber-500/30 hover:border-amber-400 relative z-10 cursor-pointer"
                    >
                      <span>Discover More</span>
                      <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>

              {/* 5. Journal Dropdown */}
              <div className="relative group/nav">
                <button
                  onClick={() => navigateToSection("blog", null)}
                  className={`text-[12px] font-semibold tracking-wider flex items-center gap-1.5 px-4 py-1.5 rounded-full cursor-pointer transition-all duration-300 group ${
                    currentView === "blog"
                      ? "bg-amber-500 text-white shadow-sm shadow-amber-500/30"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="font-mono text-[9px] text-amber-400/80 group-hover:text-amber-400">05.</span>
                  <span>Journal</span>
                  <ChevronDown size={11} className="opacity-70 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-amber-400/80" />
                </button>

                {/* Blog Megamenu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] bg-stone-950/95 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-3xl border-t-2 border-t-amber-400 border-x border-b border-white/10 p-6 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50 text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase">Architectural Journal & Insights</span>
                    <button onClick={() => navigateToSection("blog", null)} className="text-[10px] font-mono uppercase tracking-widest text-stone-400 hover:text-amber-400 flex items-center gap-1">
                      <span>View All Articles</span>
                      <ArrowRight size={10} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      onClick={() => navigateToSection("blog", null)}
                      className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 transition-all duration-300 cursor-pointer group/card"
                    >
                      <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block mb-1">Woodcraft Blueprints</span>
                      <h5 className="text-xs font-serif font-bold text-white group-hover/card:text-amber-400 transition-colors line-clamp-1 mb-1">
                        Mastering Teak Joinery & Timber Durability
                      </h5>
                      <p className="text-[11px] text-stone-400 leading-snug line-clamp-2 font-light">
                        A deep-dive guide on traditional mortise and tenon joinery techniques used in 30+ year homes.
                      </p>
                    </div>

                    <div 
                      onClick={() => navigateToSection("blog", null)}
                      className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 transition-all duration-300 cursor-pointer group/card"
                    >
                      <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block mb-1">Spatial Design</span>
                      <h5 className="text-xs font-serif font-bold text-white group-hover/card:text-amber-400 transition-colors line-clamp-1 mb-1">
                        2026 Luxury Villa Architecture Trends
                      </h5>
                      <p className="text-[11px] text-stone-400 leading-snug line-clamp-2 font-light">
                        Integrating double-height living layouts with natural lighting and acoustic wood wall paneling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Inquire Dropdown */}
              <div 
                className="relative group/nav"
                onMouseLeave={() => setActiveContact("REQUEST A QUOTE")}
              >
                <button
                  className={`text-[12px] font-semibold tracking-wider flex items-center gap-1.5 px-4 py-1.5 rounded-full cursor-pointer transition-all duration-300 group ${
                    currentView === "contact"
                      ? "bg-amber-500 text-white shadow-sm shadow-amber-500/30"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="font-mono text-[9px] text-amber-400/80 group-hover:text-amber-400">06.</span>
                  <span>Inquire</span>
                  <ChevronDown size={11} className="opacity-70 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-amber-400/80" />
                </button>
                
                {/* Dropdown Box */}
                <div className="absolute top-full right-0 mt-4 w-[700px] bg-stone-950/95 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-3xl border-t-2 border-t-amber-400 border-x border-b border-white/10 flex overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                  
                  {/* Left Column */}
                  <div className="w-[240px] bg-stone-900/80 p-3 flex flex-col space-y-1.5 border-r border-white/10 shrink-0">
                    <button
                      onMouseEnter={() => setActiveContact("REQUEST A QUOTE")}
                      onClick={() => navigateToSection("contact", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeContact === "REQUEST A QUOTE" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Request A Quote</span>
                      <Sparkles size={14} className={activeContact === "REQUEST A QUOTE" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveContact("BOOK A CONSULTATION")}
                      onClick={handleOpenConsultModal}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeContact === "BOOK A CONSULTATION" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Consultation</span>
                      <Calendar size={14} className={activeContact === "BOOK A CONSULTATION" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveContact("FAQS")}
                      onClick={() => navigateToSection("faqs", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeContact === "FAQS" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>FAQs</span>
                      <HelpCircle size={14} className={activeContact === "FAQS" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveContact("SERVICE AREAS")}
                      onClick={() => navigateToSection("contact", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeContact === "SERVICE AREAS" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Service Areas</span>
                      <Compass size={14} className={activeContact === "SERVICE AREAS" ? "text-amber-400" : "text-stone-500"} />
                    </button>

                    <button
                      onMouseEnter={() => setActiveContact("FEEDBACK")}
                      onClick={() => navigateToSection("contact", null)}
                      className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeContact === "FEEDBACK" ? "bg-amber-500/20 text-amber-400 border-l-2 border-amber-400 shadow-sm" : "text-stone-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>Feedback</span>
                      <Mail size={14} className={activeContact === "FEEDBACK" ? "text-amber-400" : "text-stone-500"} />
                    </button>
                  </div>

                  {/* Right Column */}
                  <div className="flex-1 bg-stone-950/90 p-7 text-left flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                      <h4 className="text-lg font-serif font-bold text-white tracking-wide uppercase mb-1">
                        {activeContact}
                      </h4>

                      {activeContact === "REQUEST A QUOTE" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">TRANSPARENT ESTIMATION PROPOSAL</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Submit your residential measurements, room layouts, and wood styling preferences. Our team will prepare a transparent, itemized estimation proposal.
                          </p>
                        </div>
                      )}

                      {activeContact === "BOOK A CONSULTATION" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">SCHEDULE AN ON-SITE SURVEY</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Book a premium consultation window with lead woodcrafters to map material quality guidelines and secure an architect-supervised work plan.
                          </p>
                        </div>
                      )}

                      {activeContact === "FAQS" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">ANSWERS TO RAW TIMBER QUESTIONS</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Explore helpful answers concerning carpentry execution maps, our signature 10-year timber warranties, procurement protocols, and turnkey delivery times.
                          </p>
                        </div>
                      )}

                      {activeContact === "SERVICE AREAS" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">REGIONAL SHOWROOM COVERAGE</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            Our master woodcraft services run across Mumbai (Bandra, Juhu, Santacruz West), Pune core zones, Goa villas, and custom structural exports across India.
                          </p>
                        </div>
                      )}

                      {activeContact === "FEEDBACK" && (
                        <div className="space-y-3">
                          <span className="text-[10px] text-amber-400 font-bold tracking-[0.2em] uppercase block">HELP US DEEPEN GENERATIONAL TRUST</span>
                          <p className="text-xs text-stone-400 leading-relaxed font-light">
                            We believe in honest, uncompromising craft standards. Share your spatial remodeling experiences or showroom service feedback directly with our directors.
                          </p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        if (activeContact === "BOOK A CONSULTATION") handleOpenConsultModal();
                        else if (activeContact === "FAQS") navigateToSection("faqs", null);
                        else navigateToSection("contact", null);
                      }}
                      className="group/btn inline-flex items-center space-x-2 text-[11px] font-bold text-amber-400 uppercase tracking-widest hover:text-white transition-colors duration-300 text-left mt-6 self-start focus:outline-none bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-amber-500/30 hover:border-amber-400 relative z-10 cursor-pointer"
                    >
                      <span>Connect Now</span>
                      <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>

            </nav>

            {/* 3. Right Action Phone & Quote CTA Area (Right) */}
            <div className="flex-shrink-0 hidden lg:flex items-center space-x-4" id="header-desktop-actions">
              <a
                href={`tel:${COMPANY_INFO.phoneFormatted}`}
                className="flex items-center space-x-2.5 group"
              >
                <div className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950 transition-all duration-300">
                  <Phone size={14} />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] text-stone-300 font-semibold tracking-wider mb-0.5">Call Us Phone</span>
                  <span className="text-xs font-bold text-white tracking-wide transition-colors group-hover:text-amber-400">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Get A Quote! Button */}
              <button
                onClick={() => navigateToSection("contact", null)}
                className="bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                Get A Quote!
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 text-white bg-white/10 hover:bg-amber-400 hover:text-stone-950 rounded-full transition-all duration-300 cursor-pointer border border-white/20 flex items-center justify-center shrink-0"
              id="mobile-menu-trigger"
              aria-label="Open Mobile Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Width Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-[100] lg:hidden text-white overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" id="mobile-menu-drawer-portal">
            
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop')",
                backgroundColor: "#0c0a09" // Fallback stone-950 color
              }} 
            />
            {/* Dark Overlay Gradient for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/95 via-stone-950/90 to-stone-950 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full min-h-full p-5 xs:p-6 sm:p-8 flex flex-col justify-between max-w-3xl mx-auto"
            >
              {/* Header Bar */}
              <div>
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                  <button
                    onClick={() => {
                      navigateToSection("home", null);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left cursor-pointer focus:outline-none"
                  >
                    <BrandLogo size="md" />
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2.5 text-white bg-white/10 hover:bg-amber-400 hover:text-stone-950 rounded-full transition-all duration-300 cursor-pointer border border-white/20 flex items-center justify-center shrink-0 shadow-lg group"
                      aria-label="Close Mobile Menu"
                    >
                      <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Mobile Navigation Cards Grid */}
                <div className="space-y-3.5 text-left">
                  
                  {/* Card 01: Studio (Home) */}
                  <div
                    onClick={() => {
                      navigateToSection("home", null);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`relative h-20 xs:h-22 sm:h-24 w-full rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl group text-left cursor-pointer ${
                      currentView === "home" ? "border-amber-400 ring-1 ring-amber-400/50" : "border-white/10 hover:border-amber-400/60"
                    }`}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                      alt="Suthar Studio"
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-55"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40 group-hover:from-stone-950/90 transition-all duration-300" />
                    <div className="relative z-10 h-full px-4 xs:px-5 flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner">
                          <span className="font-mono text-xs font-bold text-amber-400">01</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-base xs:text-lg font-serif font-semibold text-white group-hover:text-amber-400 transition-colors">
                              Studio
                            </h3>
                            {currentView === "home" && (
                              <span className="text-[9px] font-mono font-bold tracking-widest text-stone-950 bg-amber-400 px-2 py-0.5 rounded-full uppercase">Active</span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-300 font-sans tracking-wide line-clamp-1 opacity-90">
                            Overview, Flagship Entry & Spatial Vision
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-amber-400 group-hover:text-stone-950 text-white/80 flex items-center justify-center transition-all duration-300 shrink-0 border border-white/10 group-hover:border-amber-400">
                        <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Card 02: Expertise (Services Accordion) */}
                  <div>
                    <div
                      onClick={() => setIsServicesSubOpen(!isServicesSubOpen)}
                      className={`relative h-20 xs:h-22 sm:h-24 w-full rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl group text-left cursor-pointer ${
                        currentView === "services" ? "border-amber-400 ring-1 ring-amber-400/50" : "border-white/10 hover:border-amber-400/60"
                      }`}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
                        alt="Suthar Expertise"
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-55"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40 group-hover:from-stone-950/90 transition-all duration-300" />
                      <div className="relative z-10 h-full px-4 xs:px-5 flex items-center justify-between">
                        <div className="flex items-center space-x-3.5">
                          <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner">
                            <span className="font-mono text-xs font-bold text-amber-400">02</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-base xs:text-lg font-serif font-semibold text-white group-hover:text-amber-400 transition-colors">
                                Expertise
                              </h3>
                              <span className="text-[9px] font-mono font-medium text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                                Turnkey & Joinery
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-300 font-sans tracking-wide line-clamp-1 opacity-90">
                              Architectural Design, Timber Joinery & Layouts
                            </p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-amber-400 group-hover:text-stone-950 text-white/80 flex items-center justify-center transition-all duration-300 shrink-0 border border-white/10 group-hover:border-amber-400">
                          <ChevronDown size={16} className={`transform transition-transform duration-300 ${isServicesSubOpen ? "rotate-180 text-amber-400 group-hover:text-stone-950" : ""}`} />
                        </div>
                      </div>
                    </div>

                    {isServicesSubOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2.5 ml-3 pl-4 border-l-2 border-amber-400/30 space-y-2"
                      >
                        <button
                          onClick={() => { navigateToSection("services", null); setIsMobileMenuOpen(false); }}
                          className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-amber-400/20 border border-white/5 hover:border-amber-400/40 flex items-center justify-between text-xs font-medium text-amber-400 transition-all cursor-pointer"
                        >
                          <span>Explore All Architectural Capabilities</span>
                          <ArrowRight size={12} />
                        </button>
                        <button
                          onClick={() => { navigateToSection("services", null); setIsMobileMenuOpen(false); setTimeout(() => { window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "designer" } })); }, 150); }}
                          className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between text-xs font-medium text-stone-300 hover:text-white transition-all cursor-pointer"
                        >
                          <span className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Interior Design & Concept Masterplanning</span>
                          </span>
                          <ArrowRight size={12} className="text-stone-500" />
                        </button>
                        <button
                          onClick={() => { navigateToSection("services", null); setIsMobileMenuOpen(false); setTimeout(() => { window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "contractor" } })); }, 150); }}
                          className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between text-xs font-medium text-stone-300 hover:text-white transition-all cursor-pointer"
                        >
                          <span className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Bespoke Timber Carpentry & Joinery</span>
                          </span>
                          <ArrowRight size={12} className="text-stone-500" />
                        </button>
                        <button
                          onClick={() => { navigateToSection("services", null); setIsMobileMenuOpen(false); setTimeout(() => { window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "layouts" } })); }, 150); }}
                          className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between text-xs font-medium text-stone-300 hover:text-white transition-all cursor-pointer"
                        >
                          <span className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Fine Wall Coatings & Marble Installation</span>
                          </span>
                          <ArrowRight size={12} className="text-stone-500" />
                        </button>
                      </motion.div>
                    )}
                  </div>

                  {/* Card 03: Portfolio */}
                  <div
                    onClick={() => { navigateToSection("gallery", null); setIsMobileMenuOpen(false); }}
                    className={`relative h-20 xs:h-22 sm:h-24 w-full rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl group text-left cursor-pointer ${
                      currentView === "gallery" ? "border-amber-400 ring-1 ring-amber-400/50" : "border-white/10 hover:border-amber-400/60"
                    }`}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
                      alt="Suthar Portfolio"
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-55"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40 group-hover:from-stone-950/90 transition-all duration-300" />
                    <div className="relative z-10 h-full px-4 xs:px-5 flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner">
                          <span className="font-mono text-xs font-bold text-amber-400">03</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-base xs:text-lg font-serif font-semibold text-white group-hover:text-amber-400 transition-colors">
                              Portfolio
                            </h3>
                            {currentView === "gallery" && (
                              <span className="text-[9px] font-mono font-bold tracking-widest text-stone-950 bg-amber-400 px-2 py-0.5 rounded-full uppercase">Active</span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-300 font-sans tracking-wide line-clamp-1 opacity-90">
                            500+ Sea-Facing Villas, Penthouses & Offices
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-amber-400 group-hover:text-stone-950 text-white/80 flex items-center justify-center transition-all duration-300 shrink-0 border border-white/10 group-hover:border-amber-400">
                        <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Card 04: Heritage (About Us Accordion) */}
                  <div>
                    <div
                      onClick={() => setIsPagesSubOpen(!isPagesSubOpen)}
                      className={`relative h-20 xs:h-22 sm:h-24 w-full rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl group text-left cursor-pointer ${
                        currentView === "about-us" || currentView === "faqs" ? "border-amber-400 ring-1 ring-amber-400/50" : "border-white/10 hover:border-amber-400/60"
                      }`}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
                        alt="Suthar Heritage"
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-55"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40 group-hover:from-stone-950/90 transition-all duration-300" />
                      <div className="relative z-10 h-full px-4 xs:px-5 flex items-center justify-between">
                        <div className="flex items-center space-x-3.5">
                          <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner">
                            <span className="font-mono text-xs font-bold text-amber-400">04</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-base xs:text-lg font-serif font-semibold text-white group-hover:text-amber-400 transition-colors">
                                Heritage
                              </h3>
                              <span className="text-[9px] font-mono font-medium text-stone-300 bg-white/10 px-2 py-0.5 rounded-full">
                                Since 1989
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-300 font-sans tracking-wide line-clamp-1 opacity-90">
                              Multi-Generational Guild & Founder's Story
                            </p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-amber-400 group-hover:text-stone-950 text-white/80 flex items-center justify-center transition-all duration-300 shrink-0 border border-white/10 group-hover:border-amber-400">
                          <ChevronDown size={16} className={`transform transition-transform duration-300 ${isPagesSubOpen ? "rotate-180 text-amber-400 group-hover:text-stone-950" : ""}`} />
                        </div>
                      </div>
                    </div>

                    {isPagesSubOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2.5 ml-3 pl-4 border-l-2 border-amber-400/30 space-y-2"
                      >
                        <button
                          onClick={() => { navigateToSection("about-us", null); setIsMobileMenuOpen(false); }}
                          className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-amber-400/20 border border-white/5 hover:border-amber-400/40 flex items-center justify-between text-xs font-medium text-amber-400 transition-all cursor-pointer"
                        >
                          <span>Generational Guild Story & Inception</span>
                          <ArrowRight size={12} />
                        </button>
                        <button
                          onClick={() => { navigateToSection("about-us", "#team"); setIsMobileMenuOpen(false); }}
                          className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between text-xs font-medium text-stone-300 hover:text-white transition-all cursor-pointer"
                        >
                          <span className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Lead Architects & Master Woodworkers</span>
                          </span>
                          <ArrowRight size={12} className="text-stone-500" />
                        </button>
                        <button
                          onClick={() => { navigateToSection("faqs", null); setIsMobileMenuOpen(false); }}
                          className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between text-xs font-medium text-stone-300 hover:text-white transition-all cursor-pointer"
                        >
                          <span className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>Frequently Asked Questions & Guidelines</span>
                          </span>
                          <ArrowRight size={12} className="text-stone-500" />
                        </button>
                      </motion.div>
                    )}
                  </div>

                  {/* Card 05: Journal */}
                  <div
                    onClick={() => { navigateToSection("blog", null); setIsMobileMenuOpen(false); }}
                    className={`relative h-20 xs:h-22 sm:h-24 w-full rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl group text-left cursor-pointer ${
                      currentView === "blog" ? "border-amber-400 ring-1 ring-amber-400/50" : "border-white/10 hover:border-amber-400/60"
                    }`}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop"
                      alt="Suthar Journal"
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-55"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40 group-hover:from-stone-950/90 transition-all duration-300" />
                    <div className="relative z-10 h-full px-4 xs:px-5 flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner">
                          <span className="font-mono text-xs font-bold text-amber-400">05</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-base xs:text-lg font-serif font-semibold text-white group-hover:text-amber-400 transition-colors">
                              Journal
                            </h3>
                            {currentView === "blog" && (
                              <span className="text-[9px] font-mono font-bold tracking-widest text-stone-950 bg-amber-400 px-2 py-0.5 rounded-full uppercase">Active</span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-300 font-sans tracking-wide line-clamp-1 opacity-90">
                            Editorial Insights, Woodcraft & Spatial Articles
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-amber-400 group-hover:text-stone-950 text-white/80 flex items-center justify-center transition-all duration-300 shrink-0 border border-white/10 group-hover:border-amber-400">
                        <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Card 06: Inquire */}
                  <div
                    onClick={() => { navigateToSection("contact", null); setIsMobileMenuOpen(false); }}
                    className={`relative h-20 xs:h-22 sm:h-24 w-full rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl group text-left cursor-pointer ${
                      currentView === "contact" ? "border-amber-400 ring-1 ring-amber-400/50" : "border-white/10 hover:border-amber-400/60"
                    }`}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop"
                      alt="Suthar Inquire"
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-55"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40 group-hover:from-stone-950/90 transition-all duration-300" />
                    <div className="relative z-10 h-full px-4 xs:px-5 flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-inner">
                          <span className="font-mono text-xs font-bold text-amber-400">06</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-base xs:text-lg font-serif font-semibold text-white group-hover:text-amber-400 transition-colors">
                              Inquire
                            </h3>
                            {currentView === "contact" && (
                              <span className="text-[9px] font-mono font-bold tracking-widest text-stone-950 bg-amber-400 px-2 py-0.5 rounded-full uppercase">Active</span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-300 font-sans tracking-wide line-clamp-1 opacity-90">
                            Book Showroom Consultations & Blueprint Quotes
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-amber-400 group-hover:text-stone-950 text-white/80 flex items-center justify-center transition-all duration-300 shrink-0 border border-white/10 group-hover:border-amber-400">
                        <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Quick Contact & Action Bar */}
              <div className="border-t border-white/10 pt-6 mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 font-mono">
                  <a
                    href={`tel:${COMPANY_INFO.phoneFormatted}`}
                    className="flex items-center text-stone-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    <Phone size={14} className="mr-2 text-amber-400" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <span className="text-stone-600 hidden sm:inline">•</span>
                  <span className="text-stone-400 text-[11px]">
                    Linking Rd, Santacruz W, Mumbai
                  </span>
                </div>

                <button
                  onClick={() => { setIsMobileMenuOpen(false); handleOpenConsultModal(); }}
                  className="w-full py-3.5 text-center text-xs tracking-widest uppercase font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all duration-300 cursor-pointer shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2"
                >
                  <span>Book Private Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Consultation Modal */}
      <AnimatePresence>
        {isConsultModalOpen && (
          <div className="fixed inset-0 z-55 flex items-center justify-center px-4" id="consultation-modal">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultModalOpen(false)}
              className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-stone-900 border border-amber-500/30 p-8 md:p-10 shadow-2xl overflow-hidden z-10 rounded-2xl"
            >
              <button
                onClick={() => setIsConsultModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="Close Consultation Modal"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 text-amber-400 text-xs tracking-widest uppercase font-semibold mb-2">
                  <Sparkles size={12} />
                  <span>Exclusive Session</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white font-semibold text-left">
                  Book A Consultation
                </h3>
                <p className="text-stone-400 text-xs mt-1 text-left">
                  Connect with our award-winning lead architects to co-create your dream spatial reality.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleConsultSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-stone-400 mb-1.5 font-medium text-left">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                        <input
                          type="text"
                          required
                          className="w-full bg-stone-950/60 border border-stone-800 focus:border-amber-400 px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300"
                          placeholder="e.g. Eleanor Vance"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-stone-400 mb-1.5 font-medium text-left">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                        <input
                          type="email"
                          required
                          className="w-full bg-stone-950/60 border border-stone-800 focus:border-amber-400 px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300"
                          placeholder="eleanor@luxuryresidence.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-400 mb-1.5 font-medium text-left">
                          Select Date
                        </label>
                        <div className="relative">
                          <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                          <input
                            type="date"
                            required
                            className="w-full bg-stone-950/60 border border-stone-800 focus:border-amber-400 px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300 [color-scheme:dark]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-400 mb-1.5 font-medium text-left">
                          Select Time
                        </label>
                        <div className="relative">
                          <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                          <input
                            type="time"
                            required
                            className="w-full bg-stone-950/60 border border-stone-800 focus:border-amber-400 px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300 [color-scheme:dark]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] cursor-pointer"
                      >
                        Confirm Booking Proposal
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-10 space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400 flex items-center justify-center text-amber-400">
                      <Check size={28} />
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-medium text-lg">Proposal Received!</h4>
                      <p className="text-stone-400 text-xs mt-2">
                        We've registered your private consultation proposal. Our team will verify slot availability and email you in 1-2 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}