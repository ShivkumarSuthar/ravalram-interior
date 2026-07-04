import AppImage from "./AppImage";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

const transitionImg = "/images/antra_transition_luxury_1782747459033.jpg";

function CountUp({ to, duration = 1.5, suffix = "" }) {
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

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-field py-24 md:py-32 overflow-hidden border-t border-stone-200/50">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header Row: Text Left, Tab-Notch Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2">
                <span className="text-primary text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  TRUSTED EXPERIENCE
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-[1.15] max-w-xl uppercase">
                Behind <span className="font-serif italic text-primary font-normal lowercase">Every Metric</span> sits a family legacy
              </h3>
              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
                Founded in 1989 by master craftsman Ravalram H. Suthar, our family studio began with a simple yet uncompromising standard: to merge honest craftsmanship with timeless, architect-supervised spatial design.
              </p>
            </div>

            {/* Right Tab-Notch Image Column */}
            <div className="lg:col-span-5 pt-8 lg:pt-0">
              <div className="relative bg-white border border-stone-200/60 p-3 rounded-none shadow-sm">
                {/* The Folder Tab Notch */}
                <div className="absolute top-[-25px] left-[-1px] h-[26px] w-36 bg-field rounded-t-sm border-t border-l border-r border-stone-200/60 flex items-center justify-center">
                  <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-stone-400">STUDIO_ARCHIVE</span>
                </div>
                {/* Image */}
                <div className="w-full aspect-[16/10] overflow-hidden rounded-none">
                  <AppImage
                    src={transitionImg}
                    alt="Luxury interior architecture detail"
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-200/50 pt-16">
            
            {/* Metric 1 */}
            <motion.div variants={itemVariants} className="space-y-3 text-left">
              <div className="text-4xl md:text-5xl font-serif text-primary font-light leading-none">
                <CountUp to={35} duration={1.5} suffix="+" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">Years of Heritage</h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Family craftsmanship and structural integrity since 1989.
                </p>
              </div>
            </motion.div>

            {/* Metric 2 */}
            <motion.div variants={itemVariants} className="space-y-3 text-left">
              <div className="text-4xl md:text-5xl font-serif text-primary font-light leading-none">
                <CountUp to={250} duration={1.5} suffix="+" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">Spaces Perfected</h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Bespoke residential, commercial, and turnkey projects.
                </p>
              </div>
            </motion.div>

            {/* Metric 3 */}
            <motion.div variants={itemVariants} className="space-y-3 text-left">
              <div className="text-4xl md:text-5xl font-serif text-primary font-light leading-none">
                <CountUp to={20} duration={1.5} suffix="+" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">In-House Artisans</h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Spatial architects and expert carpentry professionals.
                </p>
              </div>
            </motion.div>

            {/* Metric 4 */}
            <motion.div variants={itemVariants} className="space-y-3 text-left">
              <div className="text-4xl md:text-5xl font-serif text-primary font-light leading-none">
                <CountUp to={100} duration={1.5} suffix="%" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">Honest Transparency</h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Direct-to-owner honest pricing and execution schedules.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
