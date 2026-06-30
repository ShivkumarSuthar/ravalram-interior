import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Calendar, Clock, User, Mail, Sparkles, Check, Search, Grid, ChevronDown, Compass, Award, Users, Star, ArrowRight, Paintbrush, Hammer, Ruler, HelpCircle, BookOpen } from "lucide-react";

export default function Header({ currentView = "home", setView = () => {}, onOpenQuote = null }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // States for expanding mobile accordions
  const [isHomeSubOpen, setIsHomeSubOpen] = useState(false);
  const [isPagesSubOpen, setIsPagesSubOpen] = useState(false);
  const [isServicesSubOpen, setIsServicesSubOpen] = useState(false);

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-stone-950/90 backdrop-blur-md py-4 border-b border-white/5 shadow-lg"
            : "bg-transparent py-6"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => navigateToSection("home", null)}
            className="flex items-center space-x-2 group cursor-pointer text-left focus:outline-none"
            id="header-logo-link"
          >
            <span className="text-2xl md:text-3xl font-serif tracking-wider text-white font-medium">
              suthar<span className="text-gold-500">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" id="header-desktop-nav">
            
            {/* 1. Home menu with dropdown */}
            <div className="relative group/nav">
              <button
                onClick={() => navigateToSection("home", null)}
                className={`text-sm font-medium tracking-wide flex items-center gap-1 py-2 cursor-pointer transition-colors ${
                  currentView === "home" ? "text-gold-500" : "text-stone-300 hover:text-gold-500"
                }`}
              >
                <span>Home</span>
                <ChevronDown size={11} className="opacity-60 group-hover/nav:translate-y-0.5 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute top-full left-0 mt-2 w-60 bg-stone-900 border border-white/5 shadow-2xl p-4 rounded-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                <div className="space-y-1">
                  <button
                    onClick={() => navigateToSection("home", null)}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <span>Main Showcase</span>
                    <ArrowRight size={10} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                  </button>
                  <button
                    onClick={() => navigateToSection("home", "#services")}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <span>Core Services</span>
                    <ArrowRight size={10} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                  </button>
                  <button
                    onClick={() => navigateToSection("home", "#portfolio")}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <span>Creative Works</span>
                    <ArrowRight size={10} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Services menu with multi-role dropdown */}
            <div className="relative group/nav">
              <button
                onClick={() => navigateToSection("services", null)}
                className={`text-sm font-medium tracking-wide flex items-center gap-1 py-2 cursor-pointer transition-colors ${
                  currentView === "services" ? "text-gold-500" : "text-stone-300 hover:text-gold-500"
                }`}
              >
                <span>Services</span>
                <ChevronDown size={11} className="opacity-60 group-hover/nav:translate-y-0.5 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-stone-900 border border-white/5 shadow-2xl p-4 rounded-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                <div className="space-y-1">
                  <button
                    onClick={() => navigateToSection("services", null)}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">ALL</span>
                      <span>Services Main Page</span>
                    </div>
                    <ArrowRight size={10} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                  </button>

                   <button
                    onClick={() => {
                      navigateToSection("services", null);
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "designer" } }));
                      }, 150);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">01</span>
                      <span>Interior Designer</span>
                    </div>
                    <Paintbrush size={12} className="text-gold-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>

                  <button
                    onClick={() => {
                      navigateToSection("services", null);
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "contractor" } }));
                      }, 150);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">02</span>
                      <span>Interior Contractor</span>
                    </div>
                    <Hammer size={12} className="text-gold-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>

                  <button
                    onClick={() => {
                      navigateToSection("services", null);
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "layouts" } }));
                      }, 150);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">03</span>
                      <span>Interior 2D & 3D Layouts</span>
                    </div>
                    <Ruler size={12} className="text-gold-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Direct Gallery Link */}
            <button
              onClick={() => navigateToSection("gallery", null)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 py-2 cursor-pointer ${
                currentView === "gallery" ? "text-gold-500 font-bold" : "text-stone-300 hover:text-gold-500"
              }`}
            >
              Gallery
            </button>

            {/* 4. Pages dropdown with About Us */}
            <div className="relative group/nav">
              <button
                className={`text-sm font-medium tracking-wide flex items-center gap-1 py-2 cursor-pointer transition-colors ${
                  currentView === "about-us" || currentView === "faqs" ? "text-gold-500" : "text-stone-300 hover:text-gold-500"
                }`}
              >
                <span>Pages</span>
                <ChevronDown size={11} className="opacity-60 group-hover/nav:translate-y-0.5 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-stone-900 border border-white/5 shadow-2xl p-4 rounded-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                <div className="space-y-1">
                  <button
                    onClick={() => navigateToSection("about-us", null)}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">01</span>
                      <span>About Us (Inner Page)</span>
                    </div>
                    <Compass size={12} className="text-gold-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>

                  <button
                    onClick={() => navigateToSection("home", "#awards")}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">02</span>
                      <span>Hall of Awards</span>
                    </div>
                    <Award size={12} className="text-gold-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>

                  <button
                    onClick={() => navigateToSection("home", "#team")}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">03</span>
                      <span>Creative Team</span>
                    </div>
                    <Users size={12} className="text-gold-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>

                  <button
                    onClick={() => navigateToSection("faqs", null)}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">04</span>
                      <span>Frequently Asked FAQs</span>
                    </div>
                    <HelpCircle size={12} className="text-gold-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>

                  <button
                    onClick={() => navigateToSection("blog", null)}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">05</span>
                      <span>Magazine Journal</span>
                    </div>
                    <BookOpen size={12} className="text-gold-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>

                  <button
                    onClick={() => navigateToSection("coming-soon", null)}
                    className="w-full text-left px-3 py-2 text-xs text-stone-300 hover:text-gold-500 hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 text-[9px] font-bold">06</span>
                      <span>Coming Soon Launch</span>
                    </div>
                    <Clock size={12} className="text-gold-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            </div>

            {/* 5. Standalone Blog Page Link */}
            <button
              onClick={() => navigateToSection("blog", null)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 py-2 cursor-pointer ${
                currentView === "blog" ? "text-gold-500 font-bold" : "text-stone-300 hover:text-gold-500"
              }`}
            >
              Blog
            </button>

            {/* 6. Direct Contact Link */}
            <button
              onClick={() => navigateToSection("contact", null)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 py-2 cursor-pointer ${
                currentView === "contact" ? "text-gold-500 font-bold" : "text-stone-300 hover:text-gold-500"
              }`}
            >
              Contact Us
            </button>

          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center space-x-6" id="header-desktop-actions">
            <a
              href="tel:+14804560789"
              className="flex items-center space-x-3 group"
            >
              <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gold-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-stone-950 transition-all duration-300">
                <Phone size={13} />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[9px] text-stone-400 font-medium tracking-widest uppercase mb-0.5">Call Us Phone</span>
                <span className="text-xs font-semibold text-white tracking-wide group-hover:text-gold-500 transition-colors">+(480) 456-0789</span>
              </div>
            </a>

            <div className="flex items-center space-x-4">
              <button className="text-stone-300 hover:text-gold-500 transition-colors p-1" aria-label="Search">
                <Search size={18} />
              </button>
              <button className="text-stone-300 hover:text-gold-500 transition-colors p-1" aria-label="Menu Grid">
                <Grid size={18} />
              </button>
            </div>

            <button
              onClick={handleOpenConsultModal}
              className="px-5 py-2.5 text-xs tracking-widest uppercase font-semibold text-stone-950 bg-gold-500 hover:bg-gold-600 active:scale-95 border border-gold-500 rounded transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(197,168,128,0.25)]"
              id="header-cta-btn"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:text-gold-500 transition-colors duration-300 cursor-pointer"
            id="mobile-menu-trigger"
            aria-label="Open Mobile Menu"
          >
            <Menu size={24} />
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
              className="absolute inset-0 bg-black"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-80 bg-stone-950 p-8 flex flex-col justify-between border-l border-white/10 shadow-2xl overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="text-2xl font-serif text-white tracking-widest font-medium">
                    suthar<span className="text-gold-500">.</span>
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
                      className="w-full flex items-center justify-between text-stone-300 hover:text-gold-500 py-2 text-base font-semibold"
                    >
                      <span>Home</span>
                      <ChevronDown size={14} className={`transform transition-transform ${isHomeSubOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isHomeSubOpen && (
                      <div className="pl-4 mt-2 space-y-2 flex flex-col">
                        <button
                          onClick={() => navigateToSection("home", null)}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
                        >
                          Main Showcase
                        </button>
                        <button
                          onClick={() => navigateToSection("home", "#services")}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
                        >
                          Core Services
                        </button>
                        <button
                          onClick={() => navigateToSection("home", "#portfolio")}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
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
                      className="w-full flex items-center justify-between text-stone-300 hover:text-gold-500 py-2 text-base font-semibold"
                    >
                      <span>Services</span>
                      <ChevronDown size={14} className={`transform transition-transform ${isServicesSubOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isServicesSubOpen && (
                      <div className="pl-4 mt-2 space-y-2 flex flex-col">
                        <button
                          onClick={() => navigateToSection("services", null)}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left font-semibold text-gold-500"
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
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
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
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
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
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
                        >
                          Interior 2D & 3D Layouts
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => navigateToSection("gallery", null)}
                    className={`py-2 text-base font-semibold text-left border-b border-white/5 ${
                      currentView === "gallery" ? "text-gold-500" : "text-stone-300 hover:text-gold-500"
                    }`}
                  >
                    Gallery
                  </button>

                  {/* Pages Accordion with About Us */}
                  <div className="border-b border-white/5 pb-2">
                    <button
                      onClick={() => setIsPagesSubOpen(!isPagesSubOpen)}
                      className="w-full flex items-center justify-between text-stone-300 hover:text-gold-500 py-2 text-base font-semibold"
                    >
                      <span>Pages</span>
                      <ChevronDown size={14} className={`transform transition-transform ${isPagesSubOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isPagesSubOpen && (
                      <div className="pl-4 mt-2 space-y-2 flex flex-col">
                        <button
                          onClick={() => navigateToSection("about-us", null)}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left font-semibold text-gold-500"
                        >
                          About Us (Inner Page)
                        </button>
                        <button
                          onClick={() => navigateToSection("home", "#awards")}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
                        >
                          Hall of Awards
                        </button>
                        <button
                          onClick={() => navigateToSection("home", "#team")}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
                        >
                          Creative Team
                        </button>
                        <button
                          onClick={() => navigateToSection("faqs", null)}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
                        >
                          Frequently Asked FAQs
                        </button>
                        <button
                          onClick={() => navigateToSection("blog", null)}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
                        >
                          Magazine Journal
                        </button>
                        <button
                          onClick={() => navigateToSection("coming-soon", null)}
                          className="text-stone-400 hover:text-gold-500 text-sm py-1.5 text-left"
                        >
                          Coming Soon Launch
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => navigateToSection("blog", null)}
                    className={`py-2 text-base font-semibold text-left border-b border-white/5 ${
                      currentView === "blog" ? "text-gold-500" : "text-stone-300 hover:text-gold-500"
                    }`}
                  >
                    Blog
                  </button>

                  <button
                    onClick={() => navigateToSection("contact", null)}
                    className={`py-2 text-base font-semibold text-left border-b border-white/5 ${
                      currentView === "contact" ? "text-gold-500" : "text-stone-300 hover:text-gold-500"
                    }`}
                  >
                    Contact Us
                  </button>

                </div>
              </div>

              <div className="border-t border-white/5 pt-8 space-y-6">
                <a
                  href="tel:+18004560123"
                  className="flex items-center text-stone-300 hover:text-gold-500 transition-colors duration-300 text-sm tracking-wider"
                >
                  <Phone size={14} className="mr-3 text-gold-500" />
                  +1 800 456-0123
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleOpenConsultModal();
                  }}
                  className="w-full py-3 text-center text-xs tracking-widest uppercase font-semibold text-stone-950 bg-gold-500 hover:bg-gold-600 transition-colors duration-300 cursor-pointer"
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
              className="relative w-full max-w-lg bg-stone-900 border border-gold-500/30 p-8 md:p-10 shadow-2xl overflow-hidden z-10 rounded-2xl"
            >
              <button
                onClick={() => setIsConsultModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="Close Consultation Modal"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 text-gold-500 text-xs tracking-widest uppercase font-semibold mb-2">
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
                          className="w-full bg-stone-950/60 border border-stone-800 focus:border-gold-500 px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300"
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
                          className="w-full bg-stone-950/60 border border-stone-800 focus:border-gold-500 px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300"
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
                            className="w-full bg-stone-950/60 border border-stone-800 focus:border-gold-500 px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300 [color-scheme:dark]"
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
                            className="w-full bg-stone-950/60 border border-stone-800 focus:border-gold-500 px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300 [color-scheme:dark]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-stone-950 text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] cursor-pointer"
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
                    <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500 flex items-center justify-center text-gold-500">
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
