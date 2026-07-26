import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Clock, 
  Mail, 
  ArrowLeft, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Construction
} from "lucide-react";

// Asset imports
import heroBg from "/assets/images/AI_images/antra_hero_bg_1782744248753.jpg";
import transitionLuxury from "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";

export default function ComingSoonPage({ onBackToHome }) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  // Calculate high-fidelity countdown (fixed 45 days from render)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);
    targetDate.setHours(12, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans flex flex-col justify-between relative overflow-hidden selection:bg-[#CAA05C] selection:text-stone-950">
      
      {/* Background Image & Immersive Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={transitionLuxury}
          alt="Luxury Architectural Background"
          className="w-full h-full object-cover opacity-25 filter grayscale contrast-125 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-950/90 to-transparent" />
        <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px]" />
      </div>

      {/* Draftsman Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10">
        <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full border-r" />
        </div>
      </div>

      {/* 1. HEADER BRANDING */}
      <header className="relative z-20 max-w-7xl w-full mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-xl md:text-2xl font-serif tracking-[0.2em] font-light text-white uppercase">
            SUTHAR<span className="text-[#CAA05C] font-normal">.</span>
          </span>
        </div>
        
        <button
          onClick={onBackToHome}
          className="group inline-flex items-center space-x-2 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-stone-300 hover:text-[#CAA05C] transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Return To Main Workspace</span>
        </button>
      </header>

      {/* 2. MAIN COMING SOON SECTION */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6 py-12 max-w-4xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Animated luxury badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles size={11} className="text-[#CAA05C] animate-pulse" />
            <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#CAA05C]">
              NEW EXPERTISE CHANNEL COMING SOON
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-none uppercase">
            WE ARE <br />
            <span className="text-[#CAA05C]">LAUNCHING</span> SOON
          </h1>

          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
            Our upcoming digital catalog will unlock real-time structural estimation schedules, interactive blueprints tracking, and rare travertine lumber catalogs.
          </p>
        </motion.div>

        {/* 3. COOLDOWN CLOCK GRID */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl w-full my-12"
          id="countdown-clock"
        >
          {/* Days */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center space-y-1">
            <span className="text-3xl sm:text-5xl font-serif font-light text-[#CAA05C]">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-stone-500 font-bold">Days</span>
          </div>

          {/* Hours */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center space-y-1">
            <span className="text-3xl sm:text-5xl font-serif font-light text-white">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-stone-500 font-bold">Hours</span>
          </div>

          {/* Minutes */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center space-y-1">
            <span className="text-3xl sm:text-5xl font-serif font-light text-white">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-stone-500 font-bold">Mins</span>
          </div>

          {/* Seconds */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md flex flex-col items-center justify-center space-y-1">
            <span className="text-3xl sm:text-5xl font-serif font-light text-[#CAA05C]">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-stone-500 font-bold">Secs</span>
          </div>
        </motion.div>

        {/* 4. SUBSCRIPTION PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full max-w-md bg-stone-900/60 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-4"
        >
          <div className="space-y-1 text-left">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white flex items-center gap-1.5">
              <Mail size={13} className="text-[#CAA05C]" />
              <span>Subscribe to Pre-Launch Access</span>
            </h4>
            <p className="text-[11px] text-stone-400 font-light">
              Receive premium blueprints, material updates, and exclusive access.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              disabled={isSubscribed}
              className="flex-1 px-4 py-3 bg-stone-950 text-white placeholder-stone-600 border border-white/5 text-xs focus:outline-none focus:ring-1 focus:ring-[#CAA05C] rounded"
            />
            <button
              type="submit"
              disabled={isSubscribed}
              className="px-5 py-3 bg-[#CAA05C] hover:bg-[#B88F4C] disabled:bg-stone-800 disabled:text-stone-500 text-stone-950 font-bold text-xs uppercase tracking-widest transition-colors rounded cursor-pointer shrink-0 flex items-center justify-center"
            >
              {isSubscribed ? "Subscribed" : "Notify Me"}
            </button>
          </form>

          <AnimatePresence>
            {isSubscribed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center space-x-2 text-[#CAA05C] text-[10px] font-mono tracking-wider text-left bg-[#CAA05C]/10 p-3 rounded-lg border border-[#CAA05C]/20"
              >
                <CheckCircle size={12} className="shrink-0" />
                <span>Success! You have registered for pre-launch notifications.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </main>

      {/* 5. FOOTER SOCIAL LINKS */}
      <footer className="relative z-20 max-w-7xl w-full mx-auto px-6 py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-stone-500 text-[10px] font-mono uppercase tracking-widest text-center sm:text-left">
          &copy; {new Date().getFullYear()} Suthar Interior Studio. All rights reserved.
        </p>

        <div className="flex items-center space-x-4">
          <a href="#instagram" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#CAA05C] hover:text-stone-950 text-stone-400 flex items-center justify-center transition-all">
            <Instagram size={14} />
          </a>
          <a href="#twitter" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#CAA05C] hover:text-stone-950 text-stone-400 flex items-center justify-center transition-all">
            <Twitter size={14} />
          </a>
          <a href="#facebook" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#CAA05C] hover:text-stone-950 text-stone-400 flex items-center justify-center transition-all">
            <Facebook size={14} />
          </a>
          <a href="#linkedin" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#CAA05C] hover:text-stone-950 text-stone-400 flex items-center justify-center transition-all">
            <Linkedin size={14} />
          </a>
        </div>
      </footer>

    </div>
  );
}
