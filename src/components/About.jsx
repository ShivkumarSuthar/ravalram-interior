import { motion } from "motion/react";
import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";
import loftImg from "../assets/images/antra_project_loft_1782744318019.jpg";

export default function About() {
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
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Heading, Giant Number & Small Dining Image */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-gold-500 text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  STARTED IN 1939
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-[1.15] max-w-2xl text-left">
                We Shape <span className="font-serif italic text-gold-500 font-normal">Interior Designs</span>, Crafting <span className="font-serif italic text-gold-500 font-normal">Timeless</span> And Inspiring Spaces
              </h2>
            </motion.div>

            {/* Asymmetrical Arrangement for '26' and Overlapping Dining Image */}
            <motion.div variants={itemVariants} className="relative pt-4">
              <div className="flex items-start">
                {/* Huge "26" with labels */}
                <div className="relative flex items-baseline select-none shrink-0">
                  <span className="text-[120px] sm:text-[180px] md:text-[220px] font-serif font-light text-[#c5a880] leading-none tracking-tighter">
                    26
                  </span>
                  <div className="absolute left-[130px] sm:left-[190px] md:left-[240px] bottom-6 sm:bottom-10 flex flex-col leading-tight text-stone-800 shrink-0">
                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold">Years Of</span>
                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold mt-1">Experience</span>
                  </div>
                </div>

                {/* Overlapping small dining image with perfect rounded corners */}
                <div className="w-48 sm:w-64 aspect-[3/4] relative -ml-8 sm:-ml-12 mt-12 sm:mt-16 z-10 shadow-xl rounded-2xl overflow-hidden border-4 border-[#faf9f6]">
                  <img
                    src={loftImg}
                    alt="Dining Room Setup"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High Ceiling Image, Paragraph & Link */}
          <div className="lg:col-span-5 space-y-8 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-stone-200/50"
            >
              <img
                src={aboutImg}
                alt="Modern staircase with glass windows"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed text-left">
                We believe that every space has the power to inspire, and that great design brings that inspiration to life. Our mission is to craft environments that stir creativity, evoke emotion, and reflect the essence of those who inhabit them.
              </p>

              <div className="pt-2 text-left">
                <a
                  href="#services"
                  className="inline-flex items-center space-x-3 text-stone-900 hover:text-gold-500 font-bold text-xs tracking-widest uppercase transition-all duration-300 group"
                >
                  <span>Learn More</span>
                  <div className="w-8 h-8 rounded-full border border-gold-500 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-stone-950 transition-all duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
