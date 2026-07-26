import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, ShieldCheck, Sparkles, Building2, Users2, CalendarCheck, Clock } from "lucide-react";
const transitionImg = "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";
const architecturalPavilion = "/assets/images/architectural_pavilion_1784821025997.jpg";

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
    <section className="bg-[#0c0a09] text-white py-20 md:py-32 overflow-hidden relative border-y border-stone-800">
      
      {/* Architectural Background Image with Deep Gradient Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={architecturalPavilion}
          alt="Architectural pavilion background"
          className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.12]"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/85 to-[#0c0a09]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/80 to-[#0c0a09]/70 pointer-events-none" />
      </div>

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
                <div className="inline-flex items-center space-x-2 border border-[#CAA05C]/40 bg-[#CAA05C]/15 px-4 py-1.5 rounded-full shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#CAA05C] animate-pulse" />
                  <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-bold text-[#CAA05C]">
                    TRUSTED EXPERIENCE &amp; MILESTONES
                  </span>
                </div>
              </div>

              {/* Title with Gold Accent Highlights */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Behind Every Space,<br />
                <span className="text-[#CAA05C]">35+ Years of Passion</span> &amp; Generational Trust
              </h2>

              {/* Description paragraph */}
              <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed max-w-xl">
                Founded in 1989 by master artisan Ravalram H. Suthar, our studio began with bespoke timber joinery and hand-crafted furniture. Today, led by Shivkumar Suthar &amp; Padam P. Sutar, we blend traditional guild craftsmanship with modern architectural precision — bringing dream homes, coastal villas, and luxury spaces to life across India with zero compromise.
              </p>
            </div>

            {/* Right Tabbed Rounded Image Card */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] shadow-2xl overflow-hidden bg-stone-900/90 border border-stone-700/80 group" style={{ borderRadius: "24px" }}>
                
                {/* Custom Tab Notch Visual at top-left edge */}
                <div className="absolute top-0 left-0 w-44 h-9 bg-[#0c0a09] rounded-br-2xl z-20 flex items-center justify-center border-r border-b border-stone-700/80 shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#CAA05C] mr-2 shadow-[0_0_8px_#CAA05C]" />
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#CAA05C]">SUTHAR CRAFT GUILD</span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
                  alt="Luxury modern living room interior"
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle Image Overlay Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between text-xs text-stone-300 font-mono">
                  <span className="inline-flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700/60">
                    <ShieldCheck size={14} className="text-[#CAA05C]" />
                    <span>Architect-Supervised Site Execution</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700/60">
                    <Clock size={14} className="text-[#CAA05C]" />
                    <span>Est. 1989</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Metrics 4-Column Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-stone-800/80 pt-12 md:pt-16">
            
            {/* Metric 1 */}
            <motion.div
              variants={itemVariants}
              className="bg-stone-900/80 backdrop-blur-md border border-stone-800 p-6 sm:p-8 rounded-2xl text-left space-y-3 hover:border-[#CAA05C]/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#CAA05C]/15 border border-[#CAA05C]/30 flex items-center justify-center text-[#CAA05C] group-hover:scale-110 transition-transform duration-300">
                <Clock size={20} />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                35+
              </div>
              <h3 className="text-base font-bold text-stone-200 tracking-tight">
                Years of Heritage
              </h3>
              <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed">
                Mastering custom timber joinery &amp; luxury spatial architecture since 1989
              </p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div
              variants={itemVariants}
              className="bg-stone-900/80 backdrop-blur-md border border-stone-800 p-6 sm:p-8 rounded-2xl text-left space-y-3 hover:border-[#CAA05C]/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#CAA05C]/15 border border-[#CAA05C]/30 flex items-center justify-center text-[#CAA05C] group-hover:scale-110 transition-transform duration-300">
                <Building2 size={20} />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-[#CAA05C]">
                <CountUp to={450} duration={1.5} suffix="+" />
              </div>
              <h3 className="text-base font-bold text-stone-200 tracking-tight">
                Turnkey Spaces Handed Over
              </h3>
              <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed">
                Luxury sea-facing villas, modern penthouses &amp; bespoke corporate flagships
              </p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div
              variants={itemVariants}
              className="bg-stone-900/80 backdrop-blur-md border border-stone-800 p-6 sm:p-8 rounded-2xl text-left space-y-3 hover:border-[#CAA05C]/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#CAA05C]/15 border border-[#CAA05C]/30 flex items-center justify-center text-[#CAA05C] group-hover:scale-110 transition-transform duration-300">
                <Users2 size={20} />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                <CountUp to={100} duration={1.5} suffix="+" />
              </div>
              <h3 className="text-base font-bold text-stone-200 tracking-tight">
                Guild Artisans &amp; Architects
              </h3>
              <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed">
                In-house master carpenters, structural engineers &amp; dedicated site supervisors
              </p>
            </motion.div>

            {/* Metric 4 */}
            <motion.div
              variants={itemVariants}
              className="bg-stone-900/80 backdrop-blur-md border border-stone-800 p-6 sm:p-8 rounded-2xl text-left space-y-3 hover:border-[#CAA05C]/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#CAA05C]/15 border border-[#CAA05C]/30 flex items-center justify-center text-[#CAA05C] group-hover:scale-110 transition-transform duration-300">
                <CalendarCheck size={20} />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-[#CAA05C]">
                <CountUp to={100} duration={1.5} suffix="%" />
              </div>
              <h3 className="text-base font-bold text-stone-200 tracking-tight">
                On-Time &amp; BOQ Commitment
              </h3>
              <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed">
                Transparent material blueprints, zero hidden costs &amp; exact schedule delivery
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

