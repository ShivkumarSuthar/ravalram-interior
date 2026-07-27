import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Layout, 
  Mail, 
  ArrowRight, 
  Home, 
  ChevronRight, 
  ArrowUpRight, 
  Sparkles, 
  Maximize2,
  GitCommit,
  Layers,
  Activity
} from "lucide-react";

export default function NotFoundPage({ onBackToHome, setView }) {
  const [activeCard, setActiveCard] = useState(null);
  const [coordinates, setCoordinates] = useState({ x: 404, y: 0 });

  // Subtle interactive mouse tracker for coordinate values in the blueprint
  useEffect(() => {
    const handleMouseMove = (e) => {
      const xVal = Math.round((e.clientX / window.innerWidth) * 1000);
      const yVal = Math.round((e.clientY / window.innerHeight) * 1000);
      setCoordinates({ x: xVal, y: yVal });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNavigate = (view) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-accent/30 selection:text-stone-950 pt-[80px] overflow-hidden min-h-screen text-left">
      
      {/* SECTION 1: EDITORIAL ERROR HEADER & BLUEPRINT ILLUSTRATION */}
      <section className="relative min-h-[75vh] flex items-center bg-stone-950 text-white overflow-hidden py-16" id="not-found-hero">
        
        {/* Architectural Grid & Coordinate Lines Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950 opacity-100" />
          
          {/* Main Grid Lines */}
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 md:grid-cols-8 gap-12 px-6 md:px-12 absolute inset-y-0 left-1/2 -translate-x-1/2">
            <div className="border-l border-white/5 h-full relative">
              <span className="absolute top-10 left-2 text-[8px] font-mono text-white/25">X: 0.00</span>
            </div>
            <div className="border-l border-white/5 h-full relative" />
            <div className="border-l border-white/5 h-full relative" />
            <div className="border-l border-white/5 h-full relative">
              <span className="absolute bottom-10 left-2 text-[8px] font-mono text-white/25">AXIS_04</span>
            </div>
            <div className="border-l border-white/5 h-full relative" />
            <div className="border-l border-white/5 h-full relative" />
            <div className="border-l border-white/5 h-full relative" />
            <div className="border-l border-white/5 h-full border-r border-white/5 relative">
              <span className="absolute top-24 right-2 text-[8px] font-mono text-white/25">GRID_REF_A9</span>
            </div>
          </div>

          {/* Horizontal lines */}
          <div className="absolute left-0 right-0 top-1/4 border-b border-white/5" />
          <div className="absolute left-0 right-0 top-2/4 border-b border-white/5" />
          <div className="absolute left-0 right-0 top-3/4 border-b border-white/5" />
        </div>

        {/* Dynamic Architectural Blueprint Drawing (SVG) */}
        <div className="absolute right-0 bottom-0 top-0 w-full lg:w-1/2 opacity-25 lg:opacity-75 pointer-events-none z-0 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Overlay Gradient to blend with background */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-transparent to-transparent lg:from-stone-950 lg:via-transparent lg:to-stone-950 z-10" />
            
            <svg 
              className="w-[120%] h-[120%] text-gold-accent/30 shrink-0 select-none"
              viewBox="0 0 800 800" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Drafting Circle Rings */}
              <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
              <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="400" cy="400" r="100" stroke="currentColor" strokeWidth="0.5" />
              
              {/* Radial Draft Rays */}
              <line x1="100" y1="400" x2="700" y2="400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="400" y1="100" x2="400" y2="700" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="188" y1="188" x2="612" y2="612" stroke="currentColor" strokeWidth="0.5" />
              <line x1="188" y1="612" x2="612" y2="188" stroke="currentColor" strokeWidth="0.5" />

              {/* Floor Plan Walls (Isometric Room Outline) */}
              {/* Animated Path Lengths representing structural layout */}
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                d="M 250,250 L 550,250 L 550,550 L 250,550 Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                d="M 220,220 L 580,220 L 580,580 L 220,580 Z" 
                stroke="currentColor" 
                strokeWidth="0.75" 
                strokeDasharray="5 5"
              />

              {/* Architect's drafting marks (Chair Elevation Wireframe Blueprint) */}
              {/* Isometric Lounge Chair Wireframe representation */}
              <g className="text-gold-accent/60">
                {/* Backrest columns */}
                <path d="M 370,480 L 370,390" stroke="currentColor" strokeWidth="1" />
                <path d="M 390,480 L 390,380" stroke="currentColor" strokeWidth="1" />
                <path d="M 410,480 L 410,380" stroke="currentColor" strokeWidth="1" />
                <path d="M 430,480 L 430,390" stroke="currentColor" strokeWidth="1" />
                
                {/* Seat Cushion Outline */}
                <path d="M 340,480 L 460,480 L 450,510 L 350,510 Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 340,480 L 340,510" stroke="currentColor" strokeWidth="1" />
                <path d="M 460,480 L 460,510" stroke="currentColor" strokeWidth="1" />

                {/* Wooden Frame Legs */}
                <path d="M 350,510 L 330,570" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 450,510 L 470,570" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 340,480 L 320,490" stroke="currentColor" strokeWidth="1" />
                <path d="M 460,480 L 480,490" stroke="currentColor" strokeWidth="1" />

                {/* Backrest curved rail */}
                <path d="M 360,395 C 400,360 400,360 440,395" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </g>

              {/* Blueprint annotation markers */}
              <g className="text-white/40 font-mono text-[9px] uppercase tracking-widest">
                <text x="260" y="240">SCALE: 1:20</text>
                <text x="560" y="240">REVISION_4.04</text>
                <text x="260" y="570">SECTION A-A</text>
                <text x="560" y="570">SUTHAR STUDIO</text>
                
                {/* Structural measurements */}
                <text x="400" y="270" textAnchor="middle">12.40m</text>
                <text x="280" y="400" transform="rotate(-90 280 400)" textAnchor="middle">8.65m</text>
                
                {/* Little dimension ticks */}
                <line x1="250" y1="230" x2="250" y2="270" stroke="currentColor" strokeWidth="0.5" />
                <line x1="550" y1="230" x2="550" y2="270" stroke="currentColor" strokeWidth="0.5" />
              </g>

              {/* Dynamic point markers */}
              <g className="text-gold-accent/70">
                <circle cx="250" cy="250" r="3" fill="currentColor" />
                <circle cx="550" cy="250" r="3" fill="currentColor" />
                <circle cx="550" cy="550" r="3" fill="currentColor" />
                <circle cx="250" cy="550" r="3" fill="currentColor" />
                
                <line x1="400" y1="400" x2="480" y2="350" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="480" cy="350" r="2.5" fill="none" stroke="currentColor" />
              </g>
            </svg>
          </div>
        </div>

        {/* Core content wrapper */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text presentation */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
                <button 
                  onClick={onBackToHome} 
                  className="hover:text-gold-accent transition-colors cursor-pointer font-bold"
                >
                  HOME
                </button>
                <span>/</span>
                <span className="text-gold-accent font-bold">ERROR 404</span>
              </div>

              {/* Large Number & Label */}
              <div className="space-y-1">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-[11rem] font-light leading-none tracking-tighter text-white/10 select-none font-serif block text-left"
                >
                  404
                </motion.h2>
                
                <div className="inline-flex items-center space-x-2.5 bg-stone-900 border border-white/5 rounded-full px-4 py-1.5 mt-[-10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
                  <span className="text-gold-accent text-[10px] md:text-xs font-mono tracking-[0.3em] font-bold uppercase">
                    PAGE NOT FOUND
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight uppercase text-left"
              >
                Looks Like This Space <br />
                <span className="text-gold-accent">Hasn't Been Designed</span> Yet.
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-left"
              >
                The page you're looking for may have been moved, renamed, or no longer exists. 
                Let's help you find your way back.
              </motion.p>

              {/* Coordinate indicator box */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden sm:flex items-center space-x-6 text-[10px] font-mono text-stone-500 pt-2"
              >
                <div className="flex items-center space-x-2">
                  <Maximize2 size={10} className="text-gold-accent" />
                  <span>X-AXIS:</span>
                  <span className="text-stone-300">{coordinates.x}px</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GitCommit size={10} className="text-gold-accent" />
                  <span>Y-AXIS:</span>
                  <span className="text-stone-300">{coordinates.y}px</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Layers size={10} className="text-gold-accent" />
                  <span>NODAL:</span>
                  <span className="text-stone-300">UNPLANNED_VOID</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THREE PREMIUM ACTION CARDS */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center sm:text-left space-y-3 mb-16">
          <span className="text-gold-accent text-xs font-mono tracking-[0.3em] font-bold block uppercase">
            RE-ROUTING SCHEMATICS
          </span>
          <h3 className="text-2xl sm:text-3xl font-light uppercase text-stone-900 tracking-tight">
            Select Your Next <span className="text-gold-accent">Destination</span>
          </h3>
          <p className="text-stone-500 font-light text-sm max-w-lg">
            Choose from Suthar's signature showcase branches to pick up where you left off.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Explore Our Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
            className="group relative bg-white border border-stone-200/50 p-8 md:p-10 rounded-3xl transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between h-[300px]"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-accent/10 via-gold-accent to-gold-accent/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-200/50 flex items-center justify-center text-gold-accent group-hover:bg-stone-950 group-hover:text-white transition-colors duration-300">
                <Compass size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif font-bold text-stone-950 uppercase group-hover:text-gold-accent transition-colors duration-300">
                  Explore Our Projects
                </h4>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  Browse our latest residential, commercial, and furniture projects.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleNavigate("gallery")}
                className="inline-flex items-center space-x-2 text-stone-950 font-bold text-xs tracking-widest uppercase transition-colors group-hover:text-gold-accent cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
            className="group relative bg-white border border-stone-200/50 p-8 md:p-10 rounded-3xl transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between h-[300px]"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-accent/10 via-gold-accent to-gold-accent/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-200/50 flex items-center justify-center text-gold-accent group-hover:bg-stone-950 group-hover:text-white transition-colors duration-300">
                <Layout size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif font-bold text-stone-950 uppercase group-hover:text-gold-accent transition-colors duration-300">
                  Our Services
                </h4>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  Discover architecture, interiors, renovation, and turnkey solutions.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleNavigate("services")}
                className="inline-flex items-center space-x-2 text-stone-950 font-bold text-xs tracking-widest uppercase transition-colors group-hover:text-gold-accent cursor-pointer"
              >
                <span>View Services</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
            className="group relative bg-white border border-stone-200/50 p-8 md:p-10 rounded-3xl transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between h-[300px]"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-accent/10 via-gold-accent to-gold-accent/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-200/50 flex items-center justify-center text-gold-accent group-hover:bg-stone-950 group-hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-serif font-bold text-stone-950 uppercase group-hover:text-gold-accent transition-colors duration-300">
                  Contact Us
                </h4>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  Need assistance? Our award-winning design-build team is ready to help.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleNavigate("contact")}
                className="inline-flex items-center space-x-2 text-stone-950 font-bold text-xs tracking-widest uppercase transition-colors group-hover:text-gold-accent cursor-pointer"
              >
                <span>Contact Team</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: QUICK NAVIGATION LINKS BAR */}
      <section className="py-12 bg-stone-50 border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center space-x-2.5 shrink-0">
            <Sparkles size={14} className="text-gold-accent" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-400">
              Quick Directory Links
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { label: "Home", view: "home" },
              { label: "About", view: "about-us" },
              { label: "Services", view: "services" },
              { label: "Projects", view: "gallery" },
              { label: "Gallery", view: "gallery" },
              { label: "Blog", view: "blog" },
              { label: "Contact", view: "contact" }
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigate(link.view)}
                className="text-stone-600 hover:text-gold-accent transition-colors font-mono text-xs uppercase tracking-wider cursor-pointer font-bold relative group py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
          </div>

          <div className="hidden lg:block text-right">
            <span className="text-[10px] font-mono text-stone-400">
              SUTHAR_SYSTEMS_404_READY
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section className="bg-stone-950 text-white py-24 relative overflow-hidden" id="not-found-cta">
        {/* Visual geometric accent background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-3 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-gold-accent text-xs font-mono tracking-[0.3em] font-bold block uppercase">
            SUTHAR STUDIO ARCHITECTURE
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-white leading-tight uppercase max-w-3xl mx-auto">
            Let's Build Something <br />
            <span className="text-gold-accent">Beautiful Together.</span>
          </h2>
          
          <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Ready to design your ultimate spatial masterpiece? Connect with our showroom coordinators to schedule a custom walkthrough session.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNavigate("home")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gold-accent hover:bg-gold-accent px-8 py-4.5 rounded-none cursor-pointer"
            >
              <span>Return Home</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/15 bg-stone-950/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation"));
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4.5 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-gold-accent hover:text-gold-accent"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
