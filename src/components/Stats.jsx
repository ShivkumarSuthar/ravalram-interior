import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#faf9f6] py-24 md:py-32 overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
                <span className="text-gold-500 text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  TRUSTED EXPERIENCE
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-[1.15] max-w-xl">
                Behind <span className="font-serif italic text-gold-500 font-normal">Every Statistic</span> Pulses A Human Story
              </h3>
              <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
                We believe that every space tells a story. Founded in 2010 by visionary designer Antra, our journey began with a simple yet powerful mission: to transform ordinary spaces into extraordinary experiences.
              </p>
            </div>

            {/* Right Tab-Notch Image Column */}
            <div className="lg:col-span-5 pt-8 lg:pt-0">
              <div className="relative bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-none shadow-xl">
                {/* The Folder Tab Notch */}
                <div className="absolute top-[-25px] left-[-1px] h-[26px] w-36 bg-[#faf9f6] rounded-t-xl border-t border-l border-r border-stone-200 flex items-center justify-center">
                  <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-stone-400">ARCHIVE_FILE</span>
                </div>
                {/* Image */}
                <div className="w-full aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    src={transitionImg}
                    alt="Luxury interior archive"
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-200 pt-16">
            
            {/* Metric 1 */}
            <motion.div variants={itemVariants} className="space-y-3 text-left">
              <div className="text-4xl md:text-5xl font-serif text-[#c5a880] font-light leading-none">
                <CountUp to={2013} duration={1.5} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">Years Experience</h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Improving homes with expert craftsmanship for years
                </p>
              </div>
            </motion.div>

            {/* Metric 2 */}
            <motion.div variants={itemVariants} className="space-y-3 text-left">
              <div className="text-4xl md:text-5xl font-serif text-[#c5a880] font-light leading-none">
                <CountUp to={190} duration={1.5} suffix="+" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">Projects Completed</h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Over 250 successful projects delivered with quality and care
                </p>
              </div>
            </motion.div>

            {/* Metric 3 */}
            <motion.div variants={itemVariants} className="space-y-3 text-left">
              <div className="text-4xl md:text-5xl font-serif text-[#c5a880] font-light leading-none">
                <CountUp to={260} duration={1.5} suffix="+" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">Skilled Tradespeople</h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  Our team of 30 experts ensures top-quality results
                </p>
              </div>
            </motion.div>

            {/* Metric 4 */}
            <motion.div variants={itemVariants} className="space-y-3 text-left">
              <div className="text-4xl md:text-5xl font-serif text-[#c5a880] font-light leading-none">
                <CountUp to={328} duration={1.5} suffix="+" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">Client Satisfaction</h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  All of our clients are satisfied with our work and service
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
