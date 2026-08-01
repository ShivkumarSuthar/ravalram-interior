import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
const slide3 = "/assets/images/AI_images/antra_hero_slide3_1782747396078.jpg";

export default function ExperienceShowcase({ setView, onBackToHome }) {
  const handleNavigate = () => {
    if (typeof setView === "function") {
      setView("gallery");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (typeof onBackToHome === "function") {
      onBackToHome();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#faf9f6] relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2.5 bg-stone-100 border border-stone-300/80 px-4 py-1.5 rounded-full shadow-sm"
        >
          <Sparkles size={14} className="text-gold-accent" />
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-stone-700">
            PASSIONATE PERFORMANCE • ARCHITECTURAL MASTERY
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Create An Even <span className="text-gold-accent">Greater Living Experience</span>
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Transforming bare structural frames into timeless, high-tactile sanctuaries — where bespoke timber joinery, natural stone textures, and ambient lighting coalesce into pure living comfort.
          </p>
        </motion.div>

        {/* Immersive High-Res Interior Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-stone-300/80 relative aspect-[16/9] max-h-[540px] group bg-stone-900"
        >
          <img
            src={slide3}
            alt="Suthar luxury interior living space"
            className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />

          {/* Top Notch Label */}
          <div className="absolute top-0 left-6 sm:left-10 z-20 hidden sm:flex items-center space-x-2 bg-[#0c0a09]/90 backdrop-blur-md px-4 py-2 rounded-b-xl border-x border-b border-white/10 text-[10px] font-mono font-bold tracking-widest text-gold-accent uppercase">
            <Compass size={12} />
            <span>FEATURED LUXURY RESIDENCE</span>
          </div>

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent pointer-events-none" />

          {/* Bottom Info & CTA Overlay inside Frame */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white text-left z-10">
            <div className="space-y-1.5 max-w-xl">
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono font-bold tracking-widest text-gold-accent uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                <ShieldCheck size={12} />
                <span>SEA-FACING RESIDENTIAL SHOWCASE</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
                Contemporary Double-Height Living Room &amp; Timber Lounge
              </h3>
            </div>

            <button
              onClick={handleNavigate}
              className="shrink-0 inline-flex items-center space-x-3 bg-gold-accent hover:bg-[#b0936b] text-stone-950 font-bold text-xs uppercase tracking-[0.18em] px-7 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-2xl hover:scale-[1.03]"
            >
              <span>Explore Full Portfolio</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
