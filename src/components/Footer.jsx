import { Instagram, Linkedin, Facebook, Twitter, ArrowUp, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "../lib/data.js";
import BrandLogo from "./BrandLogo.jsx";

export default function Footer({ onNavigate = () => {} }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (view, hash) => {
    onNavigate(view);
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
    <footer className="bg-[var(--color-surface-dark)] text-stone-400 pt-12 md:pt-24 pb-8 md:pb-12 relative overflow-hidden border-t border-white/5 text-left">
      
      {/* SECTION 1: CORE FOOTER NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-10 md:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          
          {/* Column 1: Logo & Mission Statement — full width on mobile */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNavigate("home", null)}
              className="inline-block cursor-pointer focus:outline-none"
            >
              <BrandLogo size="lg" />
            </button>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm">
              We engineer quiet, sophisticated architectural layouts. Each design synthesizes raw organic textures with luxurious material palettes to co-create spatial masterpieces.
            </p>
            
            {/* Social Connectors — rounded on mobile */}
            <div className="flex items-center space-x-2 pt-1">
              <a href="#" className="w-8 h-8 rounded-full border border-stone-800 text-stone-400 hover:text-[#c5a880] hover:border-[#c5a880] hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-stone-800 text-stone-400 hover:text-[#c5a880] hover:border-[#c5a880] hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-stone-800 text-stone-400 hover:text-[#c5a880] hover:border-[#c5a880] hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-stone-800 text-stone-400 hover:text-[#c5a880] hover:border-[#c5a880] hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Studio links */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold font-mono">Studio</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <button
                  onClick={() => handleNavigate("about-us", null)}
                  className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer text-left text-sm"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("gallery", null)}
                  className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer text-left text-sm"
                >
                  Our Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("faqs", null)}
                  className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer text-left text-sm"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("blog", null)}
                  className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer text-left text-sm"
                >
                  Blog & Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("contact", null)}
                  className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer text-left font-semibold text-[#c5a880] text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services links */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold font-mono">Services</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <button
                  onClick={() => {
                    handleNavigate("services", null);
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "designer" } }));
                    }, 150);
                  }}
                  className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer text-left text-sm"
                >
                  Interior Designer
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNavigate("services", null);
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "contractor" } }));
                    }, 150);
                  }}
                  className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer text-left text-sm"
                >
                  Interior Contractor
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNavigate("services", null);
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "layouts" } }));
                    }, 150);
                  }}
                  className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer text-left text-sm"
                >
                  2D & 3D Layouts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("services", null)}
                  className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer text-left text-sm"
                >
                  Services Overview
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Showroom contact — full width on mobile */}
          <div className="col-span-2 lg:col-span-4 space-y-3">
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold font-mono">Showroom Contact</h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li className="flex items-start">
                <MapPin size={13} className="text-[#c5a880] mr-2 shrink-0 mt-0.5" />
                <span className="text-stone-400">{COMPANY_INFO.address.indianShowroom.street}, {COMPANY_INFO.address.indianShowroom.city}, {COMPANY_INFO.address.indianShowroom.state} - {COMPANY_INFO.address.indianShowroom.pincode}</span>
              </li>
              <li className="flex items-center">
                <Mail size={13} className="text-[#c5a880] mr-2 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#c5a880] transition-colors duration-300">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-center">
                <span className="text-[#c5a880] text-[10px] font-bold uppercase tracking-wider mr-2 font-mono">TEL:</span>
                <a href={`tel:${COMPANY_INFO.phoneFormatted}`} className="hover:text-[#c5a880] transition-colors duration-300 font-medium">{COMPANY_INFO.phone}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* SECTION 2: MAJESTIC typography backdrop */}
      <div className="relative w-full h-20 md:h-52 flex items-center justify-center select-none overflow-hidden border-b border-white/5">
        <h2 className="text-[14vw] font-serif tracking-[0.1em] text-stone-900/60 font-bold leading-none text-center select-none uppercase pointer-events-none">
          {COMPANY_INFO.shortName}
        </h2>
      </div>

      {/* SECTION 3: COPYRIGHT BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-5 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-stone-600">
        <div>
          <span>© 1989-{new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</span>
        </div>
        
        <div className="flex items-center space-x-5">
          <button
            onClick={() => handleNavigate("terms", null)}
            className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer bg-transparent border-none text-left font-mono text-xs"
          >
            Terms
          </button>
          <button
            onClick={() => handleNavigate("privacy", null)}
            className="hover:text-[#c5a880] transition-colors duration-300 cursor-pointer bg-transparent border-none text-left font-mono text-xs"
          >
            Privacy
          </button>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-[#c5a880] text-stone-950 hover:bg-[#b0936b] transition-all duration-300 rounded-full cursor-pointer shadow-md"
            aria-label="Scroll to top"
          >
            <ArrowUp size={13} strokeWidth={2.5} />
          </button>
        </div>
      </div>

    </footer>
  );
}
