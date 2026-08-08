import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, PhoneCall } from "lucide-react";
import transitionImg from "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";
import heroBg from "/assets/images/AI_images/antra_hero_bg_1782744248753.jpg";

export default function DreamProjectCTA({ setView }) {
  const handleAction = () => {
    if (typeof setView === "function") {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.dispatchEvent(new CustomEvent("open-consultation"));
      }
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-bg-dark text-white overflow-hidden select-none border-y border-stone-800">
      
      {/* Background High-End Architecture Image with Vignetting & Parallax feel */}
      <div className="absolute inset-0 z-0">
        <img
          src={transitionImg}
          alt="Luxury architectural living space"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.1] scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        {/* Soft dark gradient overlays for cinematic mood and high text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-bg-dark/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/80 via-transparent to-bg-dark/80 pointer-events-none" />
      </div>

      {/* Subtle Architectural Wireframe / Blueprint Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 sm:grid-cols-6 gap-6">
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full hidden sm:block" />
          <div className="border-l border-white h-full border-r hidden sm:block" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center justify-center space-y-8 sm:space-y-10">
        
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-stone-900/80 backdrop-blur-md border border-gold-accent/30 px-5 py-2 rounded-full shadow-2xl"
        >
          <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gold-accent">
            YOUR BEST CHOICE
          </span>
        </motion.div>

        {/* Grand Headline inspired directly by image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 max-w-4xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-xl">
            Let's Start <span className="text-gold-accent">Your New</span> <br />
            <span className="text-gold-accent">Dream</span> Project
          </h2>
          
          <p className="text-[var(--color-text-muted)] font-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed">
            Architect-supervised spatial design, bespoke timber joinery, and turnkey execution. Transform your residence or commercial headquarters today.
          </p>
        </motion.div>

        {/* Central Circular Floating Interactive CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 relative group"
        >
          {/* Subtle Outer Pulsing Halo */}
          <div className="absolute inset-0 rounded-full bg-gold-accent/30 blur-xl group-hover:bg-gold-accent/50 transition-all duration-500 scale-110" />

          <button
            onClick={handleAction}
            className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gold-accent hover:bg-gold-accent border-2 border-white/20 hover:border-white text-white hover:text-stone-950 flex flex-col items-center justify-center space-y-1 transition-all duration-500 cursor-pointer shadow-2xl group-hover:scale-105 active:scale-95"
          >
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center leading-tight">
              Get <br /> A Quote
            </span>
            <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-[var(--color-surface-dark)] group-hover:text-white flex items-center justify-center transition-colors duration-300 mt-1">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </button>
        </motion.div>

        {/* Bottom Trust Guarantee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[var(--color-text-muted)] border-t border-white/10 w-full max-w-3xl"
        >
          <div className="flex items-center space-x-2">
            <Sparkles size={14} className="text-gold-accent" />
            <span>FREE ON-SITE CONSULTATION</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
            <span>ARCHITECT SUPERVISED</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
            <span>SINCE 1989</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
