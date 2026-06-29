import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, ShieldCheck, ThumbsUp, Users, ArrowUpRight } from "lucide-react";
import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";

function CountUp({ to, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(startValue + easeProgress * (to - startValue));
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutAndStats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <div id="about" className="bg-stone-50 py-24 md:py-32 overflow-hidden">
      {/* SECTION 1: INTRODUCTION / WE SHAPE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Side: Staggered Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-[1.2]">
                We Shape <span className="font-serif italic text-gold-500">Interior Designs</span>, Crafting <span className="font-serif italic text-gold-500">Timeless</span> And Inspiring Spaces
              </h2>
            </motion.div>

            {/* Giant Metric Card */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 md:space-x-8 bg-white border border-stone-100 p-8 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl -mr-16 -mt-16" />
              <div className="text-6xl md:text-8xl font-serif text-gold-500 font-light select-none">
                26
              </div>
              <div className="border-l border-stone-200 pl-6 md:pl-8">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-stone-400 mb-1">
                  Established Legacy
                </p>
                <p className="text-stone-800 text-sm md:text-base font-light leading-relaxed">
                  Years of crafting custom-curated, award-winning interior architecture for clients worldwide.
                </p>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-stone-600 font-light text-base leading-relaxed">
              We operate at the intersection of high fashion and functional engineering. Our firm specializes 
              in conceptualizing, rendering, and delivering complete bespoke spaces. From private coastal residences 
              to architectural corporate headquarters, our designs harmonize material textures, lighting fields, 
              and custom-crafted furnishings.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center space-x-2 text-stone-900 hover:text-gold-500 font-bold text-xs tracking-widest uppercase transition-colors duration-300 group"
              >
                <span>Read More About Our Craft</span>
                <ArrowUpRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-gold-500" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Showcase Image with Floating Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto"
            >
              {/* Outer frame */}
              <div className="absolute inset-4 border border-gold-500/20 translate-x-4 translate-y-4 -z-10" />
              <img
                src={aboutImg}
                alt="Sophisticated Lounging Chair"
                className="w-full h-full object-cover shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* SECTION 2: STATISTICS PANEL */}
      <div className="bg-stone-900 text-white py-20 relative overflow-hidden">
        {/* Abstract background graphics */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full border border-gold-500" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-gold-500" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Stat intro text */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
                Performance Metrics
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
                Behind Every Statistic Pulses A <span className="font-serif italic text-gold-500">Human Story</span>
              </h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                Numbers measure our volume, but our true achievements are expressed in the quiet satisfaction 
                of our clients walking into their finished homes for the very first time.
              </p>
            </div>

            {/* Grid of counters */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-8 md:gap-12">
              <motion.div variants={itemVariants} className="space-y-2 border-l border-stone-800 pl-6">
                <div className="text-4xl md:text-5xl font-serif text-gold-500 font-light">
                  <CountUp to={2013} duration={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-400 font-bold">Year Established</h4>
                  <p className="text-stone-500 text-xs mt-1">Founding year of Antra Architecture</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2 border-l border-stone-800 pl-6">
                <div className="text-4xl md:text-5xl font-serif text-gold-500 font-light">
                  <CountUp to={190} duration={1.5} suffix="+" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-400 font-bold">Projects Completed</h4>
                  <p className="text-stone-500 text-xs mt-1">Residential estates, penthouses, & hotels</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2 border-l border-stone-800 pl-6">
                <div className="text-4xl md:text-5xl font-serif text-gold-500 font-light">
                  <CountUp to={260} duration={1.5} suffix="+" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-400 font-bold">Active Team Members</h4>
                  <p className="text-stone-500 text-xs mt-1">Lead architects, artisans, & coordinators</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2 border-l border-stone-800 pl-6">
                <div className="text-4xl md:text-5xl font-serif text-gold-500 font-light">
                  <CountUp to={328} duration={1.5} suffix="+" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-400 font-bold">Client Interactions</h4>
                  <p className="text-stone-500 text-xs mt-1">Private consultations and spatial sign-offs</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
