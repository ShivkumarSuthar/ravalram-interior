import AppImage from "./AppImage";
import { motion } from "motion/react";

const aboutImg = "/images/antra_about_side_1782744266546.jpg";
const loftImg = "/images/antra_project_loft_1782744318019.jpg";

export default function About({ setView }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div id="about" className="bg-[#faf9f6] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        >
          {/* Left Column: Heading, Giant Number & Small Dining Image */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="text-gold-500 text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  30+ YEARS OF FAMILY CRAFTSMANSHIP
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.15] max-w-2xl text-left uppercase">
                Built on <span className="font-serif italic text-[#c5a880] font-normal lowercase">Legacy</span>.<br />
                Designed for the <span className="font-serif italic text-[#c5a880] font-normal lowercase">Future</span>.
              </h2>
            </motion.div>

            {/* Asymmetrical Arrangement for '30+' and Overlapping Furniture Image */}
            <motion.div variants={itemVariants} className="relative pt-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-0">
                {/* Huge "30+" with labels next to it (extremely robust across screen sizes) */}
                <div className="relative flex items-center select-none shrink-0">
                  <span className="text-[110px] sm:text-[140px] md:text-[180px] lg:text-[200px] font-serif font-light text-[#c5a880] leading-none tracking-tighter">
                    30+
                  </span>
                  <div className="ml-4 sm:ml-6 flex flex-col leading-tight text-stone-800 shrink-0 max-w-[150px]">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-stone-500">Years Of</span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-stone-900 mt-1">Family Craftsmanship</span>
                  </div>
                </div>

                {/* Overlapping small custom furniture image with perfect razor-sharp corners */}
                <div className="w-full max-w-[280px] sm:w-64 aspect-[3/4] relative sm:-ml-8 md:-ml-12 mt-2 sm:mt-12 z-10 shadow-2xl rounded-none overflow-hidden border-4 border-[#faf9f6] group">
                  <AppImage
                    src={loftImg}
                    alt="Bespoke luxury custom furniture setup"
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </motion.div>
          </div>
 
          {/* Right Column: High Ceiling Image, Paragraph & Link */}
          <div className="lg:col-span-5 space-y-12 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full aspect-[4/5] rounded-none overflow-hidden shadow-2xl border border-stone-200/50 relative group"
            >
              <AppImage
                src={aboutImg}
                alt="Suthar modern staircase architect supervision"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed text-left">
                At Suthar Interior Studio, we bring together architecture, interior design, custom furniture, and complete project execution under one trusted name. Built on a family legacy of craftsmanship since 1989, we create homes, offices, and commercial spaces with honesty, precision, and exceptional attention to detail. Every project is guided by experienced architects and executed by skilled professionals who believe every space should reflect your lifestyle, vision, and budget.
              </p>

              <div className="pt-2 text-left">
                <button
                  onClick={() => {
                    if (typeof setView === "function") {
                      setView("services");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      const el = document.getElementById("services");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center space-x-4 text-stone-900 hover:text-[#c5a880] font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 group cursor-pointer"
                  id="about-explore-services-btn"
                >
                  <span>Explore Our Services</span>
                  <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-stone-950 group-hover:border-gold-500 transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
