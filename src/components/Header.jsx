import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Calendar, Clock, User, Mail, Sparkles, Check, Search, Grid, LayoutGrid, ArrowUpRight, ChevronDown, Compass, Award, Users, Star, ArrowRight, Paintbrush, Hammer, Ruler, HelpCircle, BookOpen } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "../lib/data.js";

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

  // Safe navigation function
  const navigateToSection = (targetView, hash) => {
    setView(targetView);
    setIsMobileMenuOpen(false);
    
    // Allow React state update to flush before scrolling
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
            ? "bg-stone-950/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl"
            : "bg-stone-950/50 backdrop-blur-sm py-4 border-b border-white/10"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => navigateToSection("home", null)}
            className="flex items-center space-x-2.5 group cursor-pointer text-left focus:outline-none"
            id="header-logo-link"
          >
            <div className="text-gold-accent flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-white transition-colors hover:text-gold-accent">
              suthar<span className="text-gold-accent">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" id="header-desktop-nav">
            
            {/* 1. Home */}
            <button
              onClick={() => navigateToSection("home", null)}
              className={`text-[13px] font-semibold tracking-wide transition-colors duration-300 py-2 cursor-pointer flex items-center gap-1 ${
                currentView === "home" ? "text-gold-accent" : "text-white/90 hover:text-gold-accent"
              }`}
            >
              <span>Home</span>
              <ChevronDown size={12} className="opacity-70 group-hover:translate-y-0.5 transition-transform text-white" />
            </button>

            {/* 2. Services Dropdown */}
            <div 
              className="relative group/nav"
              onMouseLeave={() => setActiveServices("INTERIOR WORK")}
            >
              <button
                className={`text-[13px] font-semibold tracking-wide flex items-center gap-1 py-2 cursor-pointer transition-colors ${
                  currentView === "services" ? "text-gold-accent" : "text-white/90 hover:text-gold-accent"
                }`}
              >
                <span>Services</span>
                <ChevronDown size={12} className="opacity-70 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-white" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-gold-accent shadow-2xl rounded-xl border border-gold-accent/40 flex overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                {/* Left Column - Services Main Roles */}
                <div className="w-[260px] bg-gold-accent p-2 flex flex-col space-y-1 border-r border-gold-accent/20">
                  <button
                    onMouseEnter={() => setActiveServices("INTERIOR WORK")}
                    onClick={() => navigateToSection("services", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeServices === "INTERIOR WORK" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Interior Work</span>
                    <Paintbrush size={12} className={activeServices === "INTERIOR WORK" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveServices("CARPENTRY")}
                    onClick={() => navigateToSection("services", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeServices === "CARPENTRY" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Carpentry</span>
                    <Hammer size={12} className={activeServices === "CARPENTRY" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveServices("PAINTING & FINISHING")}
                    onClick={() => navigateToSection("services", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeServices === "PAINTING & FINISHING" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Painting & Finishing</span>
                    <Sparkles size={12} className={activeServices === "PAINTING & FINISHING" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveServices("FLOORING")}
                    onClick={() => navigateToSection("services", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeServices === "FLOORING" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Flooring</span>
                    <Ruler size={12} className={activeServices === "FLOORING" ? "text-white" : "text-white/40"} />
                  </button>
                </div>

                {/* Right Column */}
                <div className="flex-1 bg-gold-accent p-6 text-left flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-white tracking-wide uppercase mb-1">
                      {activeServices}
                    </h4>

                    {activeServices === "INTERIOR WORK" && (
                      <div>
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block mb-4">COMPLETE INTERIOR DESIGN SOLUTIONS</span>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {[
                            "Full Interior Design",
                            "Living Room Design",
                            "Bedroom Design",
                            "Kitchen & Dining Design",
                            "Bathroom Design",
                            "Study / Office Design",
                            "Hallway & Entry Design"
                          ].map((sub, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                navigateToSection("services", null);
                                setTimeout(() => {
                                  window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "designer" } }));
                                }, 150);
                              }}
                              className="text-left text-white/70 hover:text-gold-accent text-[11px] font-medium tracking-wide transition-colors duration-200 py-1 uppercase flex items-center space-x-1.5 focus:outline-none"
                            >
                              <span className="w-1 h-1 rounded-full bg-gold-accent/60" />
                              <span>{sub}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeServices === "CARPENTRY" && (
                      <div>
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block mb-4">BESPOKE WOODWORK & JOINERY SINCE 1989</span>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {[
                            "Modular Kitchens",
                            "Bespoke Wardrobes",
                            "TV Consoles & Units",
                            "Solid Timber Dining Tables",
                            "Doors & Window Frames",
                            "Custom Timber Joinery"
                          ].map((sub, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                navigateToSection("services", null);
                                setTimeout(() => {
                                  window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "contractor" } }));
                                }, 150);
                              }}
                              className="text-left text-white/70 hover:text-gold-accent text-[11px] font-medium tracking-wide transition-colors duration-200 py-1 uppercase flex items-center space-x-1.5 focus:outline-none"
                            >
                              <span className="w-1 h-1 rounded-full bg-gold-accent/60" />
                              <span>{sub}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeServices === "PAINTING & FINISHING" && (
                      <div>
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block mb-4">WALL ART & PREMIUM FINE COATINGS</span>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {[
                            "Italian Stucco Plasters",
                            "Luster & Velvet Finishes",
                            "PU & Melamine Polishing",
                            "Exposed Brick Textures",
                            "Metallic Wall Arts",
                            "Royal Protective Coats"
                          ].map((sub, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                navigateToSection("services", null);
                                setTimeout(() => {
                                  window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "layouts" } }));
                                }, 150);
                              }}
                              className="text-left text-white/70 hover:text-gold-accent text-[11px] font-medium tracking-wide transition-colors duration-200 py-1 uppercase flex items-center space-x-1.5 focus:outline-none"
                            >
                              <span className="w-1 h-1 rounded-full bg-gold-accent/60" />
                              <span>{sub}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeServices === "FLOORING" && (
                      <div>
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block mb-4">EXQUISITE STONE & WOOD SURFACES</span>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {[
                            "Italian Marble Laying",
                            "Hardwood Wooden Planks",
                            "Polished Granite Tiles",
                            "Epoxy & Terrazzo Finishes",
                            "Vitrified Tile Setting",
                            "Custom Flooring Medallions"
                          ].map((sub, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                navigateToSection("services", null);
                                setTimeout(() => {
                                  window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "layouts" } }));
                                }, 150);
                              }}
                              className="text-left text-white/70 hover:text-gold-accent text-[11px] font-medium tracking-wide transition-colors duration-200 py-1 uppercase flex items-center space-x-1.5 focus:outline-none"
                            >
                              <span className="w-1 h-1 rounded-full bg-gold-accent/60" />
                              <span>{sub}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => navigateToSection("services", null)}
                    className="group/btn inline-flex items-center space-x-2 text-[10px] font-bold text-gold-accent uppercase tracking-widest hover:text-white transition-colors duration-300 text-left mt-6 self-start focus:outline-none"
                  >
                    <span>View All Services</span>
                    <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

            {/* 3. Projects Dropdown */}
            <div 
              className="relative group/nav"
              onMouseLeave={() => setActiveWork("RESIDENTIAL PROJECTS")}
            >
              <button
                className={`text-[13px] font-semibold tracking-wide flex items-center gap-1 py-2 cursor-pointer transition-colors ${
                  currentView === "gallery" ? "text-gold-accent" : "text-white/90 hover:text-gold-accent"
                }`}
              >
                <span>Projects</span>
                <ChevronDown size={12} className="opacity-70 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-white" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-gold-accent shadow-2xl rounded-xl border border-gold-accent/40 flex overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                
                {/* Left Column - Portfolio divisions */}
                <div className="w-[250px] bg-gold-accent p-2 flex flex-col space-y-1 border-r border-gold-accent/20">
                  <button
                    onMouseEnter={() => setActiveWork("RESIDENTIAL PROJECTS")}
                    onClick={() => navigateToSection("gallery", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeWork === "RESIDENTIAL PROJECTS" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Residential Projects</span>
                    <Compass size={12} className={activeWork === "RESIDENTIAL PROJECTS" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveWork("COMMERCIAL PROJECTS")}
                    onClick={() => navigateToSection("gallery", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeWork === "COMMERCIAL PROJECTS" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Commercial Projects</span>
                    <Grid size={12} className={activeWork === "COMMERCIAL PROJECTS" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveWork("BEFORE & AFTER")}
                    onClick={() => navigateToSection("gallery", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeWork === "BEFORE & AFTER" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Before & After</span>
                    <Sparkles size={12} className={activeWork === "BEFORE & AFTER" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveWork("CLIENT CASE STUDIES")}
                    onClick={() => navigateToSection("blog", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeWork === "CLIENT CASE STUDIES" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Client Case Studies</span>
                    <BookOpen size={12} className={activeWork === "CLIENT CASE STUDIES" ? "text-white" : "text-white/40"} />
                  </button>
                </div>

                {/* Right Column */}
                <div className="flex-1 bg-gold-accent p-8 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-white tracking-wide uppercase mb-1">
                      {activeWork}
                    </h4>

                    {activeWork === "RESIDENTIAL PROJECTS" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">BEAUTIFUL HOMES WE'VE DESIGNED</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Step inside our curated catalog of ultra-luxury residential properties, sea-facing duplexes in Bandra, high-end penthouses, and bespoke furniture integrations.
                        </p>
                      </div>
                    )}

                    {activeWork === "COMMERCIAL PROJECTS" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">INSPIRING SPACES FOR GREAT BRANDS</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Explore ergonomically structured workspaces, high-end design galleries, custom retail flagships, and premium offices curated for optimal flow and luxury aesthetic.
                        </p>
                      </div>
                    )}

                    {activeWork === "BEFORE & AFTER" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">WITNESS SPECTACULAR RENOVATIONS</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Examine high-fidelity case portfolios of on-site structural magic, transitioning hollow concrete shells into meticulously tailored luxury spaces.
                        </p>
                      </div>
                    )}

                    {activeWork === "CLIENT CASE STUDIES" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">WALKTHROUGHS & TIME-STAMPED LOGS</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Read deep developmental studies mapping material sourcing challenges, carpentry joinery blueprints, site hurdles, and premium spatial deliveries.
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => navigateToSection("gallery", null)}
                    className="group/btn inline-flex items-center space-x-2 text-[10px] font-bold text-gold-accent uppercase tracking-widest hover:text-white transition-colors duration-300 text-left mt-6 self-start focus:outline-none"
                  >
                    <span>View Project Gallery</span>
                    <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

            {/* 4. Pages Dropdown */}
            <div 
              className="relative group/nav"
              onMouseLeave={() => setActiveAbout("OUR STORY")}
            >
              <button
                className={`text-[13px] font-semibold tracking-wide flex items-center gap-1 py-2 cursor-pointer transition-colors ${
                  currentView === "about-us" || currentView === "faqs" ? "text-gold-accent" : "text-white/90 hover:text-gold-accent"
                }`}
              >
                <span>Pages</span>
                <ChevronDown size={12} className="opacity-70 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-white" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-gold-accent shadow-2xl rounded-xl border border-gold-accent/40 flex overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                
                {/* Left Column */}
                <div className="w-[240px] bg-gold-accent p-2 flex flex-col space-y-1 border-r border-gold-accent/20">
                  <button
                    onMouseEnter={() => setActiveAbout("OUR STORY")}
                    onClick={() => navigateToSection("about-us", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeAbout === "OUR STORY" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>About Us</span>
                    <Compass size={12} className={activeAbout === "OUR STORY" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveAbout("OUR TEAM")}
                    onClick={() => navigateToSection("about-us", "#team")}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeAbout === "OUR TEAM" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Our Team</span>
                    <Users size={12} className={activeAbout === "OUR TEAM" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveAbout("WHY CHOOSE US")}
                    onClick={() => navigateToSection("about-us", "#about-story")}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeAbout === "WHY CHOOSE US" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Why Choose Us</span>
                    <Award size={12} className={activeAbout === "WHY CHOOSE US" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveAbout("TESTIMONIALS")}
                    onClick={() => navigateToSection("faqs", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeAbout === "TESTIMONIALS" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>FAQs & Info</span>
                    <Check size={12} className={activeAbout === "TESTIMONIALS" ? "text-white" : "text-white/40"} />
                  </button>
                </div>

                {/* Right Column */}
                <div className="flex-1 bg-gold-accent p-8 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-white tracking-wide uppercase mb-1">
                      {activeAbout}
                    </h4>
                    
                    {activeAbout === "OUR STORY" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">LEARN ABOUT OUR JOURNEY AND VALUES</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Founded in 1989 by master artisan Ravalram H. Suthar, we have spent over 30 years perfecting the art of bespoke timber joinery and luxury interior solutions.
                        </p>
                      </div>
                    )}

                    {activeAbout === "OUR TEAM" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">MEET THE LEADERS & ARCHITECTS</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Led by Shivkumar Suthar and lead architect Padam P. Sutar, our team blends legacy Indian woodcraft with contemporary computational CAD and interior spatial architecture.
                        </p>
                      </div>
                    )}

                    {activeAbout === "WHY CHOOSE US" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">30+ YEARS OF GENERATIONAL TRUST</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          We guarantee architect-supervised construction sites, absolute 100% material authentication, clear Bill of Quantities (BOQ), and highly durable timber structures.
                        </p>
                      </div>
                    )}

                    {activeAbout === "TESTIMONIALS" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">QUESTIONS & ANSWERS</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Find details about project timelines, design consultation steps, warranty details, and site supervision policies.
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => navigateToSection("about-us", null)}
                    className="group/btn inline-flex items-center space-x-2 text-[10px] font-bold text-gold-accent uppercase tracking-widest hover:text-white transition-colors duration-300 text-left mt-6 self-start focus:outline-none"
                  >
                    <span>Discover More</span>
                    <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

            {/* 5. Blog */}
            <button
              onClick={() => navigateToSection("blog", null)}
              className={`text-[13px] font-semibold tracking-wide transition-colors duration-300 py-2 cursor-pointer flex items-center gap-1 ${
                currentView === "blog" ? "text-gold-accent" : "text-white/90 hover:text-gold-accent"
              }`}
            >
              <span>Blog</span>
              <ChevronDown size={12} className="opacity-70 group-hover:translate-y-0.5 transition-transform text-white" />
            </button>

            {/* 6. Contact Us */}
            <div 
              className="relative group/nav"
              onMouseLeave={() => setActiveContact("REQUEST A QUOTE")}
            >
              <button
                className={`text-[13px] font-semibold tracking-wide flex items-center gap-1 py-2 cursor-pointer transition-colors ${
                  currentView === "contact" ? "text-gold-accent" : "text-white/90 hover:text-gold-accent"
                }`}
              >
                <span>Contact Us</span>
                <ChevronDown size={12} className="opacity-70 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-white" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute top-full right-0 mt-2 w-[680px] bg-gold-accent shadow-2xl rounded-xl border border-gold-accent/40 flex overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                
                {/* Left Column - Contact channels */}
                <div className="w-[240px] bg-gold-accent p-2 flex flex-col space-y-1 border-r border-gold-accent/20">
                  <button
                    onMouseEnter={() => setActiveContact("REQUEST A QUOTE")}
                    onClick={() => navigateToSection("contact", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeContact === "REQUEST A QUOTE" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Request A Quote</span>
                    <Sparkles size={12} className={activeContact === "REQUEST A QUOTE" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveContact("BOOK A CONSULTATION")}
                    onClick={handleOpenConsultModal}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeContact === "BOOK A CONSULTATION" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Book Consultation</span>
                    <Calendar size={12} className={activeContact === "BOOK A CONSULTATION" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveContact("FAQS")}
                    onClick={() => navigateToSection("faqs", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeContact === "FAQS" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>FAQs</span>
                    <HelpCircle size={12} className={activeContact === "FAQS" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveContact("SERVICE AREAS")}
                    onClick={() => navigateToSection("contact", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeContact === "SERVICE AREAS" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Service Areas</span>
                    <Compass size={12} className={activeContact === "SERVICE AREAS" ? "text-white" : "text-white/40"} />
                  </button>

                  <button
                    onMouseEnter={() => setActiveContact("FEEDBACK")}
                    onClick={() => navigateToSection("contact", null)}
                    className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                      activeContact === "FEEDBACK" ? "bg-gold-accent text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>Feedback</span>
                    <Mail size={12} className={activeContact === "FEEDBACK" ? "text-white" : "text-white/40"} />
                  </button>
                </div>

                {/* Right Column - Detail content */}
                <div className="flex-1 bg-gold-accent p-8 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-white tracking-wide uppercase mb-1">
                      {activeContact}
                    </h4>

                    {activeContact === "REQUEST A QUOTE" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">GET A QUOTE FOR YOUR PROJECT</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Submit your residential measurements, room layouts, and wood styling preferences. Our team will prepare a transparent, itemized estimation proposal.
                        </p>
                      </div>
                    )}

                    {activeContact === "BOOK A CONSULTATION" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">SCHEDULE AN ON-SITE SURVEY</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Book a premium consultation window with lead woodcrafters to map material quality guidelines and secure an architect-supervised work plan.
                        </p>
                      </div>
                    )}

                    {activeContact === "FAQS" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">ANSWERS TO RAW TIMBER QUESTIONS</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Explore helpful answers concerning carpentry execution maps, our signature 10-year timber warranties, procurement protocols, and turnkey delivery times.
                        </p>
                      </div>
                    )}

                    {activeContact === "SERVICE AREAS" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">SUTHAR REGIONAL SHOWROOM COVERAGE</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
                          Our master woodcraft services run across Mumbai (Bandra, Juhu, Santacruz West), Pune core zones, Goa villas, and custom structural exports across India.
                        </p>
                      </div>
                    )}

                    {activeContact === "FEEDBACK" && (
                      <div className="space-y-4">
                        <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase block">HELP US DEEPEN GENERATIONAL TRUST</span>
                        <p className="text-xs text-white/70 leading-relaxed font-light">
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
                    className="group/btn inline-flex items-center space-x-2 text-[10px] font-bold text-gold-accent uppercase tracking-widest hover:text-white transition-colors duration-300 text-left mt-6 self-start focus:outline-none"
                  >
                    <span>Connect Now</span>
                    <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

          </nav>

          {/* Right Action Phone & Quote CTA Area */}
          <div className="hidden lg:flex items-center space-x-4" id="header-desktop-actions">
            <a
              href={`tel:${COMPANY_INFO.phoneFormatted}`}
              className="flex items-center space-x-2.5 group"
            >
              <div className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white group-hover:border-gold-accent group-hover:bg-gold-accent group-hover:text-stone-950 transition-all duration-300">
                <Phone size={14} />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[9px] text-stone-300 font-semibold tracking-wider mb-0.5">Call Us Phone</span>
                <span className="text-xs font-bold text-white tracking-wide transition-colors group-hover:text-gold-accent">
                  {COMPANY_INFO.phone}
                </span>
              </div>
            </a>

            {/* Get A Quote! Button */}
            <button
              onClick={() => navigateToSection("contact", null)}
              className="bg-gold-accent hover:bg-gold-accent text-stone-950 font-extrabold text-xs px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-gold-accent/20 cursor-pointer"
            >
              Get A Quote!
            </button>

            {/* Search Icon */}
            <button 
              onClick={handleOpenSearchModal}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-accent text-white hover:text-stone-950 transition-all duration-300 flex items-center justify-center cursor-pointer" 
              aria-label="Search"
            >
              <Search size={16} />
            </button>

            {/* Grid Layout Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-accent text-white hover:text-stone-950 transition-all duration-300 flex items-center justify-center cursor-pointer" 
              aria-label="Menu Grid"
            >
              <LayoutGrid size={16} />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2.5 text-white bg-white/10 hover:bg-gold-accent hover:text-stone-950 rounded-full transition-all duration-300 cursor-pointer border border-white/20 flex items-center justify-center shrink-0"
            id="mobile-menu-trigger"
            aria-label="Open Mobile Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-55 lg:hidden" id="mobile-menu-drawer-portal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[85vw] sm:w-80 bg-stone-950 p-6 sm:p-8 flex flex-col justify-between border-l border-white/10 shadow-2xl overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="text-2xl font-serif text-white tracking-widest font-medium">
                    suthar<span className="text-gold-accent">.</span>
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    aria-label="Close Mobile Menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Navigation list */}
                <div className="flex flex-col space-y-4 text-left">
                  
                  {/* Home Accordion */}
                  <div className="border-b border-white/5 pb-2">
                    <button
                      onClick={() => setIsHomeSubOpen(!isHomeSubOpen)}
                      className="w-full flex items-center justify-between text-stone-300 hover:text-gold-accent py-2 text-base font-semibold"
                    >
                      <span>Home</span>
                      <ChevronDown size={14} className={`transform transition-transform ${isHomeSubOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isHomeSubOpen && (
                      <div className="pl-4 mt-2 space-y-2 flex flex-col">
                        <button
                          onClick={() => navigateToSection("home", null)}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Main Showcase
                        </button>
                        <button
                          onClick={() => navigateToSection("home", "#services")}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Core Services
                        </button>
                        <button
                          onClick={() => navigateToSection("home", "#portfolio")}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Creative Portfolio
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Services Accordion with design & contractor roles */}
                  <div className="border-b border-white/5 pb-2">
                    <button
                      onClick={() => setIsServicesSubOpen(!isServicesSubOpen)}
                      className="w-full flex items-center justify-between text-stone-300 hover:text-gold-accent py-2 text-base font-semibold"
                    >
                      <span>Services</span>
                      <ChevronDown size={14} className={`transform transition-transform ${isServicesSubOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isServicesSubOpen && (
                      <div className="pl-4 mt-2 space-y-2 flex flex-col">
                        <button
                          onClick={() => navigateToSection("services", null)}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left font-semibold text-gold-accent"
                        >
                          Services Main Page
                        </button>
                        <button
                          onClick={() => {
                            navigateToSection("services", null);
                            setTimeout(() => {
                              window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "designer" } }));
                            }, 150);
                          }}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Interior Designer
                        </button>
                        <button
                          onClick={() => {
                            navigateToSection("services", null);
                            setTimeout(() => {
                              window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "contractor" } }));
                            }, 150);
                          }}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Interior Contractor
                        </button>
                        <button
                          onClick={() => {
                            navigateToSection("services", null);
                            setTimeout(() => {
                              window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "layouts" } }));
                            }, 150);
                          }}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Interior 2D & 3D Layouts
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => navigateToSection("gallery", null)}
                    className={`py-2 text-base font-semibold text-left border-b border-white/5 ${
                      currentView === "gallery" ? "text-gold-accent" : "text-stone-300 hover:text-gold-accent"
                    }`}
                  >
                    Gallery
                  </button>

                  {/* Pages Accordion with About Us */}
                  <div className="border-b border-white/5 pb-2">
                    <button
                      onClick={() => setIsPagesSubOpen(!isPagesSubOpen)}
                      className="w-full flex items-center justify-between text-stone-300 hover:text-gold-accent py-2 text-base font-semibold"
                    >
                      <span>Pages</span>
                      <ChevronDown size={14} className={`transform transition-transform ${isPagesSubOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isPagesSubOpen && (
                      <div className="pl-4 mt-2 space-y-2 flex flex-col">
                        <button
                          onClick={() => navigateToSection("about-us", null)}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left font-semibold text-gold-accent"
                        >
                          About Us (Inner Page)
                        </button>
                        <button
                          onClick={() => navigateToSection("home", "#awards")}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Hall of Awards
                        </button>
                        <button
                          onClick={() => navigateToSection("home", "#team")}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Creative Team
                        </button>
                        <button
                          onClick={() => navigateToSection("faqs", null)}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Frequently Asked FAQs
                        </button>
                        <button
                          onClick={() => navigateToSection("blog", null)}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Magazine Journal
                        </button>
                        <button
                          onClick={() => navigateToSection("coming-soon", null)}
                          className="text-stone-400 hover:text-gold-accent text-sm py-1.5 text-left"
                        >
                          Coming Soon Launch
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => navigateToSection("blog", null)}
                    className={`py-2 text-base font-semibold text-left border-b border-white/5 ${
                      currentView === "blog" ? "text-gold-accent" : "text-stone-300 hover:text-gold-accent"
                    }`}
                  >
                    Blog
                  </button>

                  <button
                    onClick={() => navigateToSection("contact", null)}
                    className={`py-2 text-base font-semibold text-left border-b border-white/5 ${
                      currentView === "contact" ? "text-gold-accent" : "text-stone-300 hover:text-gold-accent"
                    }`}
                  >
                    Contact Us
                  </button>

                </div>
              </div>

              <div className="border-t border-white/5 pt-8 space-y-6">
                <a
                  href={`tel:${COMPANY_INFO.phoneFormatted}`}
                  className="flex items-center text-stone-300 hover:text-gold-accent transition-colors duration-300 text-sm tracking-wider font-mono font-medium"
                >
                  <Phone size={14} className="mr-3 text-gold-accent" />
                  {COMPANY_INFO.phone}
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleOpenConsultModal();
                  }}
                  className="w-full py-3 text-center text-xs tracking-widest uppercase font-semibold text-stone-950 bg-gold-accent hover:bg-[#B88F4C] transition-colors duration-300 cursor-pointer"
                >
                  Book Consultation
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
              className="relative w-full max-w-lg bg-stone-900 border border-gold-accent/30 p-8 md:p-10 shadow-2xl overflow-hidden z-10 rounded-2xl"
            >
              <button
                onClick={() => setIsConsultModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="Close Consultation Modal"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 text-gold-accent text-xs tracking-widest uppercase font-semibold mb-2">
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
                          className="w-full bg-stone-950/60 border border-stone-800 focus:border-gold-accent px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300"
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
                          className="w-full bg-stone-950/60 border border-stone-800 focus:border-gold-accent px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300"
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
                            className="w-full bg-stone-950/60 border border-stone-800 focus:border-gold-accent px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300 [color-scheme:dark]"
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
                            className="w-full bg-stone-950/60 border border-stone-800 focus:border-gold-accent px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300 [color-scheme:dark]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-3 bg-gold-accent hover:bg-[#B88F4C] text-stone-950 text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] cursor-pointer"
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
                    <div className="w-14 h-14 rounded-full bg-gold-accent/10 border border-gold-accent flex items-center justify-center text-gold-accent">
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

      {/* Global Search Overlay Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-xl flex flex-col items-center justify-start pt-24 px-6"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 text-stone-400 hover:text-white p-2 rounded-full border border-white/10 hover:border-white/30 transition-all cursor-pointer"
              aria-label="Close Search"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="w-full max-w-3xl flex flex-col items-center space-y-6"
            >
              <div className="text-center">
                <span className="text-gold-accent text-xs font-bold tracking-[0.2em] uppercase">Search Showroom</span>
                <h3 className="text-3xl md:text-4xl font-serif text-white mt-1">Explore Architectural Projects & Services</h3>
              </div>

              <div className="w-full relative">
                <Search size={22} className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type project name, service, or keyword (e.g. Villa, Modern Kitchen)..."
                  autoFocus
                  className="w-full bg-stone-900 border border-stone-700 focus:border-gold-accent rounded-full pl-14 pr-6 py-4 text-white placeholder-stone-500 outline-none transition-all text-base shadow-2xl"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="text-xs text-stone-400 mr-2">Popular:</span>
                {["Residential", "Turnkey", "Modular Kitchen", "Commercial Penthouse", "Bespoke Furniture"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchQuery(tag);
                      setIsSearchOpen(false);
                      setView("gallery");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-gold-accent hover:border-gold-accent/50 text-xs transition-all cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
