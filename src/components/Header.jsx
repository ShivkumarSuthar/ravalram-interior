import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Compass,
  Grid,
  Hammer,
  HelpCircle,
  Mail,
  Menu,
  Paintbrush,
  Phone,
  Ruler,
  Search,
  Sparkles,
  Star,
  User,
  Users,
  X,
} from "lucide-react";

const iconMap = {
  award: Award,
  book: BookOpen,
  check: Check,
  compass: Compass,
  grid: Grid,
  hammer: Hammer,
  help: HelpCircle,
  paintbrush: Paintbrush,
  ruler: Ruler,
  search: Search,
  sparkles: Sparkles,
  star: Star,
  users: Users,
};

const headerContent = {
  brand: {
    label: "RAVALRAM INTERIOR",
    mobileLabel: "RAVALRAM INTERIOR",
    mobileEyebrow: "Interior Studio",
    view: "home",
  },
  enquiry: {
    label: "Direct Enquiry",
    phone: "+91 90045 38149",
    href: "tel:+919004538149",
  },
  primaryCta: "Book Consultation",
  nav: [
    {
      label: "Home",
      view: "home",
      mobileChildren: [
        { label: "Main Showcase", view: "home" },
        { label: "Core Services", view: "home", hash: "#services" },
        { label: "Creative Portfolio", view: "home", hash: "#portfolio" },
      ],
    },
    {
      label: "About",
      view: "about-us",
      dropdownWidth: "w-[680px]",
      defaultPanel: "our-story",
      ctaLabel: "Discover More",
      panels: [
        {
          id: "our-story",
          label: "Our Story",
          title: "OUR STORY",
          eyebrow: "LEARN ABOUT OUR JOURNEY AND VALUES",
          description:
            "Founded in 1989 by master artisan Ravalram H. Suthar, we have spent over 30 years perfecting bespoke timber joinery and luxury interior solutions.",
          icon: "compass",
          view: "about-us",
        },
        {
          id: "our-team",
          label: "Our Team",
          title: "OUR TEAM",
          eyebrow: "MEET THE LEADERS & ARCHITECTS",
          description:
            "Led by Shivkumar Suthar and lead architect Padam P. Sutar, our team blends legacy Indian woodcraft with contemporary spatial architecture.",
          icon: "users",
          view: "about-us",
          hash: "#team",
        },
        {
          id: "why-choose-us",
          label: "Why Choose Us",
          title: "WHY CHOOSE US",
          eyebrow: "30+ YEARS OF GENERATIONAL TRUST",
          description:
            "We guarantee architect-supervised construction sites, material authentication, clear Bill of Quantities, and durable timber structures.",
          icon: "award",
          view: "about-us",
          hash: "#about-story",
        },
        {
          id: "testimonials",
          label: "Testimonials",
          title: "TESTIMONIALS",
          eyebrow: "REAL EXPERIENCES OF TRUST",
          description:
            "Residential and corporate clients across Mumbai, Pune, and Goa value our transparent pricing, punctual execution, and pristine visual styling.",
          icon: "check",
          view: "about-us",
          hash: "#testimonials",
        },
      ],
    },
    {
      label: "Services",
      view: "services",
      dropdownWidth: "w-[720px]",
      defaultPanel: "interior-work",
      ctaLabel: "View Service",
      panels: [
        {
          id: "interior-work",
          label: "Interior Work",
          title: "INTERIOR WORK",
          eyebrow: "COMPLETE INTERIOR DESIGN SOLUTIONS",
          description:
            "Room planning, finishes, lighting, furniture, and spatial styling handled as one clear design-build journey.",
          icon: "paintbrush",
          view: "services",
          tab: "designer",
          links: [
            "Full Interior Design",
            "Living Room Design",
            "Bedroom Design",
            "Kitchen & Dining Design",
            "Bathroom Design",
            "Study / Office Design",
            "Hallway & Entry Design",
          ],
        },
        {
          id: "carpentry",
          label: "Carpentry",
          title: "CARPENTRY",
          eyebrow: "BESPOKE WOODWORK & JOINERY SINCE 1989",
          description:
            "Factory-direct wardrobes, kitchens, doors, frames, consoles, and custom timber details made by experienced craftsmen.",
          icon: "hammer",
          view: "services",
          tab: "contractor",
          links: [
            "Modular Kitchens",
            "Bespoke Wardrobes",
            "TV Consoles & Units",
            "Solid Timber Dining Tables",
            "Doors & Window Frames",
            "Custom Timber Joinery",
          ],
        },
        {
          id: "painting-finishing",
          label: "Painting & Finishing",
          title: "PAINTING & FINISHING",
          eyebrow: "SURFACES, TEXTURES, AND FINAL SITE STYLING",
          description:
            "Wall treatments, polish, veneer finishing, texture work, and final handover detailing prepared for long-term use.",
          icon: "sparkles",
          view: "services",
          tab: "contractor",
          links: [
            "Wall Painting",
            "Wood Polish",
            "Texture Finishes",
            "Veneer Finishing",
            "Final Styling",
            "Repair Touch-Ups",
          ],
        },
        {
          id: "flooring",
          label: "Flooring",
          title: "FLOORING",
          eyebrow: "STONE, TILE, WOOD, AND SURFACE ALIGNMENT",
          description:
            "Material selection and installation planning for floors that match the architecture, maintenance needs, and budget.",
          icon: "ruler",
          view: "services",
          tab: "layouts",
          links: [
            "Marble Planning",
            "Tile Layouts",
            "Wooden Flooring",
            "Skirting Details",
            "Surface Levelling",
            "Material Schedules",
          ],
        },
      ],
    },
    {
      label: "Gallery",
      view: "gallery",
    },
    {
      label: "Pages",
      view: "about-us",
      dropdownWidth: "w-[620px]",
      defaultPanel: "faqs",
      ctaLabel: "Open Page",
      desktopOnlyLabel: true,
      panels: [
        {
          id: "faqs",
          label: "Frequently Asked FAQs",
          title: "FAQS",
          eyebrow: "PROJECT ESTIMATES, WARRANTIES, AND TIMELINES",
          description:
            "Clear answers for design-only requests, custom joinery warranties, material schedules, and execution milestones.",
          icon: "help",
          view: "faqs",
        },
        {
          id: "journal",
          label: "Magazine Journal",
          title: "BLOG",
          eyebrow: "ARCHITECTURE AND WOODWORKING NOTES",
          description:
            "Practical writing on residential interiors, commercial planning, renovation detail, and timeless joinery.",
          icon: "book",
          view: "blog",
        },
        {
          id: "awards",
          label: "Hall of Awards",
          title: "AWARDS",
          eyebrow: "RECOGNITION AND CRAFT MILESTONES",
          description:
            "A look at the design language, client trust, and delivery standards behind our long-running studio practice.",
          icon: "star",
          view: "home",
          hash: "#awards",
        },
        {
          id: "coming-soon",
          label: "Coming Soon Launch",
          title: "COMING SOON",
          eyebrow: "NEXT DIGITAL SHOWROOM RELEASES",
          description:
            "Upcoming additions for showroom scheduling, client coordination, and more detailed project exploration.",
          icon: "grid",
          view: "coming-soon",
        },
      ],
    },
    {
      label: "Blog",
      view: "blog",
    },
    {
      label: "Contact",
      view: "contact",
    },
  ],
};

const getDefaultPanelState = () =>
  headerContent.nav.reduce((acc, item) => {
    if (item.panels?.length) acc[item.label] = item.defaultPanel || item.panels[0].id;
    return acc;
  }, {});

export default function Header({ currentView = "home", setView = () => {}, onOpenQuote = null }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState("Home");
  const [activePanels, setActivePanels] = useState(getDefaultPanelState);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleOpenEvent = () => setIsConsultModalOpen(true);

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
      return;
    }

    setIsConsultModalOpen(true);
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

  const navigateToSection = (targetView, hash, tab) => {
    setView(targetView);
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      if (tab) {
        window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab } }));
      }

      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 150);
  };

  const renderIcon = (iconName, className = "") => {
    const Icon = iconMap[iconName] || Compass;
    return <Icon size={12} className={className} />;
  };

  const activeClass = (view) =>
    currentView === view ? "text-[#c5a880]" : "text-stone-800 hover:text-[#c5a880]";

  const setActivePanel = (menuLabel, panelId) => {
    setActivePanels((previous) => ({
      ...previous,
      [menuLabel]: panelId,
    }));
  };

  const resetActivePanel = (menu) => {
    setActivePanel(menu.label, menu.defaultPanel || menu.panels[0].id);
  };

  const renderDesktopDropdown = (menu) => {
    const activePanelId = activePanels[menu.label] || menu.defaultPanel || menu.panels[0].id;
    const activePanel = menu.panels.find((panel) => panel.id === activePanelId) || menu.panels[0];

    return (
      <div className="relative group/nav" onMouseLeave={() => resetActivePanel(menu)}>
        <button
          className={`text-md font-bold uppercase tracking-wider flex items-center gap-1 py-2 cursor-pointer transition-colors ${activeClass(menu.view)}`}
          aria-haspopup="true"
        >
          <span>{menu.label}</span>
          <ChevronDown
            size={11}
            className="opacity-60 group-hover/nav:translate-y-0.5 transition-transform duration-300 text-stone-800"
          />
        </button>

        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 ${menu.dropdownWidth} bg-[#243343] shadow-2xl rounded-xl border border-[#34495e]/40 flex overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50`}
        >
          <div className="w-[260px] bg-[#1a2633] p-2 flex flex-col space-y-1 border-r border-[#34495e]/20">
            {menu.panels.map((panel) => (
              <button
                key={panel.id}
                onMouseEnter={() => setActivePanel(menu.label, panel.id)}
                onClick={() => navigateToSection(panel.view, panel.hash, panel.tab)}
                className={`w-full text-left px-4 py-3 text-xs tracking-wider font-semibold uppercase rounded-lg transition-all duration-200 flex items-center justify-between ${
                  activePanel.id === panel.id ? "bg-[#c5a880] text-white" : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{panel.label}</span>
                {renderIcon(panel.icon, activePanel.id === panel.id ? "text-white" : "text-white/40")}
              </button>
            ))}
          </div>

          <div className="flex-1 bg-[#243343] p-8 flex flex-col justify-between text-left">
            <div>
              <h4 className="text-lg font-serif font-bold text-white tracking-wide uppercase mb-1">
                {activePanel.title}
              </h4>
              <div className="space-y-4">
                <span className="text-[10px] text-[#c5a880] font-bold tracking-widest uppercase block">
                  {activePanel.eyebrow}
                </span>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {activePanel.description}
                </p>

                {activePanel.links?.length > 0 && (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-1">
                    {activePanel.links.map((link) => (
                      <button
                        key={link}
                        onClick={() => navigateToSection(activePanel.view, activePanel.hash, activePanel.tab)}
                        className="text-left text-white/70 hover:text-[#c5a880] text-[11px] font-medium tracking-wide transition-colors duration-200 py-1 uppercase flex items-center space-x-1.5 focus:outline-none"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#c5a880]/60" />
                        <span>{link}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => navigateToSection(activePanel.view, activePanel.hash, activePanel.tab)}
              className="group/btn inline-flex items-center space-x-2 text-[10px] font-bold text-[#c5a880] uppercase tracking-widest hover:text-white transition-colors duration-300 text-left mt-6 self-start focus:outline-none"
            >
              <span>{menu.ctaLabel}</span>
              <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderDesktopNavItem = (menu) => {
    if (menu.panels?.length) {
      return <div key={menu.label}>{renderDesktopDropdown(menu)}</div>;
    }

    return (
      <button
        key={menu.label}
        onClick={() => navigateToSection(menu.view, menu.hash, menu.tab)}
        className={`text-md font-bold uppercase tracking-wider transition-colors duration-300 py-2 cursor-pointer ${activeClass(menu.view)}`}
      >
        {menu.label}
      </button>
    );
  };

  const renderMobileChildren = (menu) => {
    if (menu.mobileChildren?.length) return menu.mobileChildren;
    if (menu.panels?.length) return menu.panels;
    return null;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white border-b border-stone-200/50 py-4 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => navigateToSection(headerContent.brand.view, null)}
            className="flex items-center space-x-2 group cursor-pointer text-left focus:outline-none"
            id="header-logo-link"
          >
            <span className="max-w-[calc(100vw-5rem)] text-base sm:text-xl md:text-2xl font-serif tracking-[0.12em] md:tracking-[0.15em] text-[#c5a880] font-bold uppercase leading-tight transition-colors hover:text-[#b0936b]">
              {headerContent.brand.label}
            </span>
          </button>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" id="header-desktop-nav">
            {headerContent.nav.map(renderDesktopNavItem)}
          </nav>

          <div className="hidden lg:flex items-center space-x-5">
            <button
              onClick={handleOpenConsultModal}
              className="group flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#c5a880] text-stone-950 text-xs font-bold uppercase tracking-widest hover:bg-[#b0936b] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>{headerContent.primaryCta}</span>
              <span className="w-5 h-5 rounded-full bg-stone-950 text-[#c5a880] flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                <ArrowRight size={11} />
              </span>
            </button>

            <a href={headerContent.enquiry.href} className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-800 group-hover:border-[#c5a880] group-hover:bg-[#c5a880] group-hover:text-white transition-all duration-300">
                <Phone size={12} />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] text-stone-400 font-bold tracking-widest uppercase mb-0.5">
                  {headerContent.enquiry.label}
                </span>
                <span className="text-xs font-bold text-stone-900 tracking-wide transition-colors group-hover:text-[#c5a880] border-b border-stone-800 group-hover:border-[#c5a880]">
                  {headerContent.enquiry.phone}
                </span>
              </div>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-stone-900 hover:text-[#c5a880] transition-colors duration-300 cursor-pointer"
            id="mobile-menu-trigger"
            aria-label="Open Mobile Menu"
            aria-controls="mobile-menu-drawer-portal"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

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
              className="absolute top-0 right-0 h-full w-[min(22rem,calc(100vw-1.5rem))] bg-stone-950 p-8 flex flex-col justify-between border-l border-white/10 shadow-2xl overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <button
                    onClick={() => navigateToSection(headerContent.brand.view, null)}
                    className="text-left focus:outline-none"
                  >
                    <span className="block text-lg font-serif text-white tracking-[0.16em] font-bold uppercase leading-tight">
                      {headerContent.brand.mobileLabel}
                    </span>
                    <span className="mt-1 block text-[10px] text-[#c5a880] font-bold uppercase tracking-[0.28em]">
                      {headerContent.brand.mobileEyebrow}
                    </span>
                  </button>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    aria-label="Close Mobile Menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col space-y-4 text-left">
                  {headerContent.nav.map((menu) => {
                    const children = renderMobileChildren(menu);

                    if (!children) {
                      return (
                        <button
                          key={menu.label}
                          onClick={() => navigateToSection(menu.view, menu.hash, menu.tab)}
                          className={`py-2 text-base font-semibold text-left border-b border-white/5 ${
                            currentView === menu.view ? "text-[#c5a880]" : "text-stone-300 hover:text-[#c5a880]"
                          }`}
                        >
                          {menu.label}
                        </button>
                      );
                    }

                    const isOpen = openMobileSection === menu.label;

                    return (
                      <div key={menu.label} className="border-b border-white/5 pb-2">
                        <button
                          onClick={() => setOpenMobileSection(isOpen ? "" : menu.label)}
                          className="w-full flex items-center justify-between text-stone-300 hover:text-[#c5a880] py-2 text-base font-semibold"
                          aria-expanded={isOpen}
                        >
                          <span>{menu.label}</span>
                          <ChevronDown size={14} className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOpen && (
                          <div className="pl-4 mt-2 space-y-2 flex flex-col">
                            {children.map((child) => (
                              <button
                                key={child.id || child.label}
                                onClick={() => navigateToSection(child.view, child.hash, child.tab)}
                                className={`text-stone-400 hover:text-[#c5a880] text-sm py-1.5 text-left ${
                                  currentView === child.view ? "font-semibold text-[#c5a880]" : ""
                                }`}
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/5 pt-8 space-y-6">
                <a
                  href={headerContent.enquiry.href}
                  className="flex items-center text-stone-300 hover:text-[#c5a880] transition-colors duration-300 text-sm tracking-wider"
                >
                  <Phone size={14} className="mr-3 text-[#c5a880]" />
                  {headerContent.enquiry.phone}
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleOpenConsultModal();
                  }}
                  className="w-full py-3 text-center text-xs tracking-widest uppercase font-semibold text-stone-950 bg-[#c5a880] hover:bg-[#b0936b] transition-colors duration-300 cursor-pointer"
                >
                  {headerContent.primaryCta}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isConsultModalOpen && (
          <div className="fixed inset-0 z-55 flex items-center justify-center px-4" id="consultation-modal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultModalOpen(false)}
              className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-stone-900 border border-[#c5a880]/30 p-8 md:p-10 shadow-2xl overflow-hidden z-10 rounded-2xl"
            >
              <button
                onClick={() => setIsConsultModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="Close Consultation Modal"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 text-[#c5a880] text-xs tracking-widest uppercase font-semibold mb-2">
                  <Sparkles size={12} />
                  <span>Exclusive Session</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white font-semibold text-left">
                  Book A Consultation
                </h3>
                <p className="text-stone-400 text-xs mt-1 text-left">
                  Connect with our lead architects to shape a clear proposal for your space.
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
                          className="w-full bg-stone-950/60 border border-stone-800 focus:border-[#c5a880] px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300"
                          placeholder="e.g. Shivkumar Suthar"
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
                          className="w-full bg-stone-950/60 border border-stone-800 focus:border-[#c5a880] px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300"
                          placeholder="name@example.com"
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
                            className="w-full bg-stone-950/60 border border-stone-800 focus:border-[#c5a880] px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300 [color-scheme:dark]"
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
                            className="w-full bg-stone-950/60 border border-stone-800 focus:border-[#c5a880] px-10 py-2 text-sm text-stone-200 outline-none transition-colors duration-300 [color-scheme:dark]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#c5a880] hover:bg-[#b0936b] text-stone-950 text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] cursor-pointer"
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
                    <div className="w-14 h-14 rounded-full bg-[#c5a880]/10 border border-[#c5a880] flex items-center justify-center text-[#c5a880]">
                      <Check size={28} />
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-medium text-lg">Proposal Received!</h4>
                      <p className="text-stone-400 text-xs mt-2">
                        We have registered your consultation request. Our team will verify slot availability and reply shortly.
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
