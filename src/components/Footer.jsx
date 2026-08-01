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
    <footer className="bg-stone-950 text-stone-400 pt-24 pb-12 relative overflow-hidden border-t border-white/5 text-left">
      
      {/* SECTION 1: CORE FOOTER NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Logo & Mission Statement */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => handleNavigate("home", null)}
              className="inline-block cursor-pointer focus:outline-none"
            >
              <BrandLogo size="lg" />
            </button>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm">
              We engineer quiet, sophisticated architectural layouts. Each design synthesizes raw organic textures with luxurious material palettes to co-create spatial masterpieces.
            </p>
            
            {/* Social Connectors */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="p-2 border border-stone-800 text-stone-400 hover:text-gold-accent hover:border-gold-accent hover:bg-white/5 transition-all duration-300">
                <Instagram size={14} />
              </a>
              <a href="#" className="p-2 border border-stone-800 text-stone-400 hover:text-gold-accent hover:border-gold-accent hover:bg-white/5 transition-all duration-300">
                <Linkedin size={14} />
              </a>
              <a href="#" className="p-2 border border-stone-800 text-stone-400 hover:text-gold-accent hover:border-gold-accent hover:bg-white/5 transition-all duration-300">
                <Facebook size={14} />
              </a>
              <a href="#" className="p-2 border border-stone-800 text-stone-400 hover:text-gold-accent hover:border-gold-accent hover:bg-white/5 transition-all duration-300">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Studio links */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold font-mono">Studio</h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <button
                  onClick={() => handleNavigate("about-us", null)}
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("gallery", null)}
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left"
                >
                  Our Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("faqs", null)}
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left"
                >
                  Frequently Asked FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("blog", null)}
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left"
                >
                  Our Blog & Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("coming-soon", null)}
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left font-semibold text-gold-accent"
                >
                  Coming Soon Launch
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("contact", null)}
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left font-semibold text-gold-accent"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services links */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold font-mono">Services</h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <button
                  onClick={() => {
                    handleNavigate("services", null);
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent("services-tab-change", { detail: { tab: "designer" } }));
                    }, 150);
                  }}
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left"
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
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left"
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
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left"
                >
                  Interior 2D & 3D Layouts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("services", null)}
                  className="hover:text-gold-accent transition-colors duration-300 cursor-pointer text-left"
                >
                  Services Overview
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Main indices */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold font-mono">Showroom Contact</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start">
                <MapPin size={14} className="text-gold-accent mr-2 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.indianShowroom.street}, {COMPANY_INFO.address.indianShowroom.city}, {COMPANY_INFO.address.indianShowroom.state} - {COMPANY_INFO.address.indianShowroom.pincode}</span>
              </li>
              <li className="flex items-center">
                <Mail size={14} className="text-gold-accent mr-2 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-accent transition-colors duration-300">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-center">
                <span className="text-gold-accent text-xs font-bold uppercase tracking-wider mr-2 font-mono">TEL:</span>
                <a href={`tel:${COMPANY_INFO.phoneFormatted}`} className="hover:text-gold-accent transition-colors duration-300 font-medium">{COMPANY_INFO.phone}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* SECTION 2: MAJESTIC typography backdrop "suthar" overlay exactly like the image */}
      <div className="relative w-full h-32 md:h-52 flex items-center justify-center select-none overflow-hidden border-b border-white/5">
        <h2 className="text-[12vw] font-serif tracking-[0.1em] text-stone-900/60 font-bold leading-none translate-y-4 text-center select-none uppercase pointer-events-none">
          {COMPANY_INFO.shortName}
        </h2>
      </div>

      {/* SECTION 3: COPYRIGHT BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-600">
        <div>
          <span>© 1989-{new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button
            onClick={() => handleNavigate("terms", null)}
            className="hover:text-gold-accent transition-colors duration-300 cursor-pointer bg-transparent border-none text-left font-mono text-xs"
          >
            Terms of Service
          </button>
          <button
            onClick={() => handleNavigate("privacy", null)}
            className="hover:text-gold-accent transition-colors duration-300 cursor-pointer bg-transparent border-none text-left font-mono text-xs"
          >
            Privacy Policy
          </button>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-stone-900 text-gold-accent hover:text-stone-950 hover:bg-gold-accent border border-white/5 transition-all duration-300 rounded-none cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

    </footer>
  );
}
