import { motion } from "motion/react";
import pavilionImg from "../assets/images/architectural_pavilion_1784821025997.jpg";

export default function ArchitecturalShowcase() {
  return (
    <section className="bg-[#faf9f6] py-12 md:py-20 lg:py-24 overflow-hidden relative select-none">
      
      {/* Container wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col items-center justify-center">
        
        {/* Giant Watermark Background Text "Interior" */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <span className="text-[110px] sm:text-[180px] md:text-[250px] lg:text-[320px] font-extrabold tracking-tighter text-stone-200/50 uppercase leading-none font-display">
            Interior
          </span>
        </div>

        {/* Wide Architectural Model Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-6xl mx-auto"
        >
          <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white/40 border border-stone-200/50 backdrop-blur-sm group">
            <img
              src={pavilionImg}
              alt="Suthar Architectural Interior Structure Model"
              className="w-full h-auto object-cover block mx-auto filter brightness-[0.98] transition-transform duration-1000 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            {/* Subtle soft gradient overlay at bottom edge */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#faf9f6]/80 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Subtle Architectural Blueprint line at bottom left */}
        <div className="absolute left-12 bottom-2 w-32 h-[1px] bg-stone-300/40 hidden md:block" />
      </div>

    </section>
  );
}
