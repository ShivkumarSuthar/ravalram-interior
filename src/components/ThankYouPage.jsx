import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  Check, 
  Phone, 
  MessageSquare, 
  Compass, 
  ArrowRight, 
  Home, 
  Sparkles, 
  Clock, 
  FileCheck, 
  PhoneCall, 
  Users, 
  MapPin, 
  Calendar,
  ArrowUpRight
} from "lucide-react";

export default function ThankYouPage({ onBackToHome, setView }) {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  // Luxury interactive mouse tracking for background coordinate simulation
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

  const timelineSteps = [
    {
      title: "Request Received",
      desc: "Inquiry successfully logged in our system.",
      icon: Check,
      status: "completed"
    },
    {
      title: "Review by Team",
      desc: "Our design architects study your parameters.",
      icon: FileCheck,
      status: "active"
    },
    {
      title: "Phone Call",
      desc: "Brief discovery call to discuss ideas and scope.",
      icon: PhoneCall,
      status: "pending"
    },
    {
      title: "Consultation",
      desc: "Deep-dive layout walkthrough and initial sketches.",
      icon: Users,
      status: "pending"
    },
    {
      title: "Project Planning",
      desc: "Ballpark estimates, timeline, and material blueprints.",
      icon: Compass,
      status: "pending"
    }
  ];

  const infoCards = [
    {
      title: "Expected Response",
      value: "Within 24 Hours",
      desc: "Our lead design architect typically reviews and responds to custom blueprint inquiries on the same business day.",
      icon: Clock,
      theme: "bg-white border-stone-200/60"
    },
    {
      title: "Need Immediate Help?",
      value: "Call Our Team",
      desc: "Speak directly with a showroom coordinator to fast-track your design consultation slot approval.",
      detail: "+1 (480) 456-0789",
      link: "tel:+14804560789",
      icon: Phone,
      theme: "bg-white border-stone-200/60"
    },
    {
      title: "WhatsApp",
      value: "Chat With Us",
      desc: "Connect instantly with our project coordinators for swift media shares, site videos, and raw updates.",
      detail: "+91 98200 12345",
      link: "https://wa.me/919820012345",
      icon: MessageSquare,
      theme: "bg-white border-stone-200/60"
    },
    {
      title: "Explore Projects",
      value: "See Our Work",
      desc: "Browse our award-winning residential, penthouse, modular kitchen, and bespoke timber collections.",
      action: "view-projects",
      icon: Compass,
      theme: "bg-stone-900 text-white border-stone-800"
    }
  ];

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-[#c5a880]/30 selection:text-stone-950 pt-[80px] overflow-hidden min-h-screen text-left">
      
      {/* HEADER SECTION WITH DESIGN BLUEPRINT BACKDROP */}
      <section className="relative min-h-[60vh] flex items-center bg-stone-950 text-white overflow-hidden py-16" id="thank-you-hero">
        
        {/* Architectural drafting lines & background coordinate simulation */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950 opacity-100" />
          
          {/* Spatial Grid Lines */}
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 md:grid-cols-8 gap-12 px-6 md:px-12 absolute inset-y-0 left-1/2 -translate-x-1/2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-l border-white/5 h-full relative">
                {i === 0 && <span className="absolute top-10 left-2 text-[8px] font-mono text-white/20">X: {coordinates.x}</span>}
                {i === 4 && <span className="absolute bottom-10 left-2 text-[8px] font-mono text-white/20">GRID_SUTHAR_09</span>}
              </div>
            ))}
          </div>

          {/* Horizontal lines */}
          <div className="absolute left-0 right-0 top-1/4 border-b border-white/5" />
          <div className="absolute left-0 right-0 top-2/4 border-b border-white/5" />
          <div className="absolute left-0 right-0 top-3/4 border-b border-white/5" />
        </div>

        {/* Dynamic Architectural Blueprint Drawing (SVG Backdrop) */}
        <div className="absolute right-0 bottom-0 top-0 w-full lg:w-1/2 opacity-20 lg:opacity-60 pointer-events-none z-0 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-transparent to-transparent lg:from-stone-950 lg:via-transparent lg:to-stone-950 z-10" />
            
            <svg 
              className="w-[120%] h-[120%] text-[#c5a880]/20 shrink-0 select-none"
              viewBox="0 0 800 800" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Floor plan circles */}
              <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
              <circle cx="400" cy="400" r="180" stroke="currentColor" strokeWidth="0.75" />
              
              {/* Radial rays */}
              <line x1="150" y1="400" x2="650" y2="400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
              <line x1="400" y1="150" x2="400" y2="650" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />

              {/* Floor plan structural elements */}
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                d="M 280,280 L 520,280 L 520,520 L 280,520 Z" 
                stroke="currentColor" 
                strokeWidth="1" 
              />
              
              {/* Blueprint Labels */}
              <g className="text-white/30 font-mono text-[9px] uppercase tracking-widest">
                <text x="300" y="270">SCALE: 1:100</text>
                <text x="530" y="270">DOC_CONFIRMED_OK</text>
                <text x="300" y="540">SEC_ELEVATION_B</text>
                <text x="530" y="540">SUTHAR_STUDIO</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-3xl space-y-8">
            
            {/* Premium Animated Icon Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative inline-flex items-center justify-center"
            >
              {/* Ring pulse glow */}
              <span className="absolute inset-0 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 animate-ping opacity-75" />
              <div className="relative w-20 h-20 rounded-full bg-stone-900 border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] shadow-2xl">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Check size={36} strokeWidth={2.5} />
                </motion.div>
              </div>
            </motion.div>

            {/* Request Received Label */}
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-stone-900 border border-white/5 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
                <span className="text-[#c5a880] text-[10px] md:text-xs font-mono tracking-[0.3em] font-bold uppercase">
                  REQUEST RECEIVED
                </span>
              </div>

              {/* Majestic Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-tight uppercase"
              >
                Thank You For <br />
                <span className="font-serif italic text-[#c5a880] font-normal lowercase">Getting In</span> Touch.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
            >
              We've received your enquiry and truly appreciate your interest in Suthar Interior Studio. Our team will review your project details and get back to you as soon as possible.
            </motion.p>

            {/* Coordinate bar */}
            <div className="flex items-center space-x-6 text-[10px] font-mono text-stone-500 pt-2 select-none">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span>STATUS:</span>
                <span className="text-stone-300">DISPATCHED_SECURE</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <span>COORD:</span>
                <span className="text-stone-300">X{coordinates.x} Y{coordinates.y}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: THE DETAILED ONBOARDING PATH (TIMELINE) */}
      <section className="py-24 bg-white relative border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center sm:text-left space-y-3 mb-16 max-w-2xl">
            <span className="text-[#c5a880] text-xs font-mono tracking-[0.3em] font-bold block uppercase">
              YOUR ONBOARDING PATHWAY
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light uppercase text-stone-900 tracking-tight">
              Next Steps &amp; <span className="font-serif italic text-[#c5a880] lowercase">project</span> Milestones
            </h2>
            <p className="text-stone-500 font-light text-sm">
              We operate with rigorous timeline precision. Here is how Suthar Interior Studio guides your onboarding proposal.
            </p>
          </div>

          {/* Majestic Timeline Board */}
          <div className="relative pt-4">
            
            {/* Horizontal Line Connector (Desktop only) */}
            <div className="absolute top-[40px] left-12 right-12 h-[2px] bg-stone-100 hidden lg:block z-0">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "35%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#c5a880] via-[#c5a880] to-stone-200"
              />
            </div>

            {/* Step Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {timelineSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0 lg:text-left group"
                  >
                    {/* Circle Icon Badge */}
                    <div className="lg:mb-6 shrink-0 relative">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        step.status === "completed" 
                          ? "bg-[#c5a880] text-stone-900 shadow-[0_0_15px_rgba(197,168,128,0.4)]"
                          : step.status === "active"
                          ? "bg-stone-900 text-[#c5a880] border-2 border-[#c5a880] animate-pulse"
                          : "bg-stone-50 border border-stone-200 text-stone-400 group-hover:border-[#c5a880]/50"
                      }`}>
                        <IconComponent size={20} />
                      </div>
                      
                      {/* Vertical line connector for mobile/tablet */}
                      {idx !== timelineSteps.length - 1 && (
                        <div className="absolute top-14 left-7 bottom-[-32px] w-[2px] bg-stone-100 lg:hidden" />
                      )}
                    </div>

                    {/* Step Text Info */}
                    <div className="space-y-1.5 pt-1 lg:pt-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold text-[#c5a880]">0{idx + 1}</span>
                        <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider group-hover:text-[#c5a880] transition-colors duration-300">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs text-stone-500 font-light leading-relaxed max-w-xs">
                        {step.desc}
                      </p>
                      
                      {step.status === "completed" && (
                        <span className="inline-flex text-[9px] font-mono font-bold text-[#c5a880] uppercase tracking-wider bg-[#c5a880]/10 px-2 py-0.5 rounded-full">
                          COMPLETED
                        </span>
                      )}
                      {step.status === "active" && (
                        <span className="inline-flex text-[9px] font-mono font-bold text-[#c5a880] uppercase tracking-wider bg-[#c5a880]/10 px-2 py-0.5 rounded-full animate-pulse">
                          IN PROGRESS
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE INFORMATION BENTO CARDS */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            const isDark = card.theme.includes("bg-stone-900");
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-8 rounded-3xl border flex flex-col justify-between min-h-[250px] transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1 ${card.theme}`}
              >
                <div className="space-y-6">
                  {/* Icon badge */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    isDark ? "bg-white/10 text-[#c5a880]" : "bg-stone-50 border border-stone-200/50 text-[#c5a880]"
                  }`}>
                    <Icon size={20} />
                  </div>

                  <div className="space-y-2">
                    <span className={`text-[10px] uppercase font-mono tracking-widest font-bold block ${
                      isDark ? "text-stone-400" : "text-stone-400"
                    }`}>
                      {card.title}
                    </span>
                    <h3 className={`text-xl font-serif font-bold uppercase tracking-tight leading-tight ${
                      isDark ? "text-white" : "text-stone-900"
                    }`}>
                      {card.value}
                    </h3>
                    <p className={`text-xs font-light leading-relaxed ${
                      isDark ? "text-stone-300" : "text-stone-500"
                    }`}>
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  {card.detail && (
                    <a 
                      href={card.link}
                      className="font-mono text-sm font-semibold text-[#c5a880] hover:underline flex items-center space-x-1"
                    >
                      <span>{card.detail}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {card.link && !card.detail && (
                    <a 
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-stone-900 hover:text-[#c5a880] text-xs font-mono font-bold uppercase tracking-wider"
                    >
                      <span>Chat Online</span>
                      <ArrowRight size={12} />
                    </a>
                  )}

                  {card.action === "view-projects" && (
                    <button
                      onClick={() => handleNavigate("gallery")}
                      className="inline-flex items-center space-x-1.5 text-[#c5a880] hover:text-white text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <span>See Our Work</span>
                      <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: ACTIONS AND DIRECT CHANNELS (BUTTONS) */}
      <section className="py-16 bg-stone-50 border-t border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="space-y-1">
            <h4 className="text-lg font-serif font-semibold text-stone-950 uppercase tracking-tight">
              Looking for our showrooms?
            </h4>
            <p className="text-stone-500 text-xs font-light">
              We welcome walk-ins at Suthar Interior Studio, Linking Road, Santacruz West, Mumbai.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            
            {/* Return Home Button */}
            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 border border-stone-300 text-stone-900 text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 bg-white hover:border-[#c5a880] hover:text-[#c5a880] cursor-pointer shadow-sm"
            >
              <Home size={14} />
              <span>Return Home</span>
            </button>

            {/* View Projects Button */}
            <button
              onClick={() => handleNavigate("gallery")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-stone-900 hover:bg-stone-950 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 cursor-pointer shadow-sm"
            >
              <Compass size={14} className="text-[#c5a880]" />
              <span>View Projects</span>
            </button>

            {/* Chat on WhatsApp Button */}
            <a
              href="https://wa.me/919820012345"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 cursor-pointer shadow-sm"
            >
              <MessageSquare size={14} />
              <span>Chat on WhatsApp</span>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}
