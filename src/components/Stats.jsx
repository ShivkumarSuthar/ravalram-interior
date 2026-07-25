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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#faf9f6] py-20 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 md:space-y-20"
        >
          {/* Header Row: Text Left, Tabbed Rounded Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Pill Tag */}
              <div>
                <div className="inline-flex items-center space-x-2 border border-stone-200 bg-stone-100/90 px-4 py-1.5 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-700">
                    TRUSTED EXPERIENCE
                  </span>
                </div>
              </div>

              {/* Title with exact coloring from reference */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                Behind <span className="text-[#c5a880]">Every Statistic</span><br />
                <span className="text-[#c5a880]">Pulses</span> A Human Story
              </h2>

              {/* Description paragraph */}
              <p className="text-stone-500 font-light text-sm sm:text-base leading-relaxed max-w-xl">
                We believe that every space tells a story. Founded in 2010 by visionary designer Antra, our journey began with a simple yet powerful mission: to transform ordinary spaces into extraordinary experiences.
              </p>
            </div>

            {/* Right Tabbed Rounded Image Card */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] shadow-2xl overflow-hidden bg-stone-900 border border-stone-200/60" style={{ borderRadius: "28px 28px 28px 28px" }}>
                
                {/* Custom Tab Notch Visual at top-left edge if needed */}
                <div className="absolute top-0 left-0 w-36 h-8 bg-[#faf9f6] rounded-br-2xl z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#c5a880] mr-2" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-stone-600">SUTHAR</span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
                  alt="Luxury modern living room interior"
                  className="w-full h-full object-cover filter brightness-[0.98] transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

          </div>

          {/* Metrics 4-Column Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-t border-stone-200/80 pt-12 md:pt-16">
            
            {/* Metric 1 */}
            <motion.div variants={itemVariants} className="space-y-2 text-left">
              <div className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
                2013
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900 tracking-tight">
                Years Experience
              </h3>
              <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                Improving homes with expert craftsmanship for years
              </p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div variants={itemVariants} className="space-y-2 text-left">
              <div className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
                <CountUp to={190} duration={1.5} suffix="+" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900 tracking-tight">
                Projects Completed
              </h3>
              <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                Over 250 successful projects delivered with quality and care
              </p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div variants={itemVariants} className="space-y-2 text-left">
              <div className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
                <CountUp to={260} duration={1.5} suffix="+" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900 tracking-tight">
                Skilled Tradespeople
              </h3>
              <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                Our team of 30 experts ensures top-quality results
              </p>
            </motion.div>

            {/* Metric 4 */}
            <motion.div variants={itemVariants} className="space-y-2 text-left">
              <div className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
                <CountUp to={328} duration={1.5} suffix="+" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900 tracking-tight">
                Client Satisfaction
              </h3>
              <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                All of our clients are satisfied with our work and service
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
