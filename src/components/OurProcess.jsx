import { motion } from "motion/react";
import {
  MessageSquare,
  Ruler,
  PenTool,
  Layers,
  Hammer,
  HardHat,
  ClipboardCheck,
  Key,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin by understanding your ideas, lifestyle, functional requirements, design preferences, and overall budget.",
    icon: MessageSquare
  },
  {
    num: "02",
    title: "Site Visit & Measurement",
    desc: "Our team visits your site to take accurate measurements, evaluate the space, and understand the project's technical requirements.",
    icon: Ruler
  },
  {
    num: "03",
    title: "Design & Space Planning",
    desc: "Our architects create layouts, concepts, and design solutions that balance aesthetics, comfort, and functionality while reflecting your vision.",
    icon: PenTool
  },
  {
    num: "04",
    title: "Material & Budget Planning",
    desc: "Choose from premium, standard, or budget-friendly materials. We guide you through every option while maintaining complete pricing transparency.",
    icon: Layers
  },
  {
    num: "05",
    title: "Furniture Manufacturing",
    desc: "Custom furniture is crafted with precision using carefully selected materials, premium hardware, and expert workmanship.",
    icon: Hammer
  },
  {
    num: "06",
    title: "On-Site Execution",
    desc: "Our experienced team carries out electrical work, painting, furniture installation, finishing, and all interior execution under architect supervision.",
    icon: HardHat
  },
  {
    num: "07",
    title: "Quality Inspection",
    desc: "Every detail is carefully inspected to ensure workmanship, finishes, dimensions, and overall quality meet our standards before delivery.",
    icon: ClipboardCheck
  },
  {
    num: "08",
    title: "Project Handover & Support",
    desc: "Once everything is completed, we hand over your finished space and remain available for guidance and post-project support whenever needed.",
    icon: Key
  }
];

const stats = [
  { value: "30+", label: "Years of Family Craftsmanship" },
  { value: "20+", label: "Experienced Professionals" },
  { value: "100%", label: "Customized Solutions" },
  { value: "Multi-City", label: "Projects Across India" }
];

export default function OurProcess({ setView }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="our-process" className="bg-[#faf9f6] py-24 md:py-32 relative overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-20 md:mb-28 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-[#c5a880] text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              OUR PROCESS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            From Your Vision <br />
            <span className="font-serif italic text-[#c5a880] font-normal lowercase">to a</span> Beautiful Reality.
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
            Every successful project begins with understanding your vision. From the first conversation to the final handover, our architects, designers, and skilled craftsmen work together to deliver spaces that are functional, beautiful, and built to last.
          </p>
        </div>

        {/* Vertical Timeline on Desktop / Stacked on Mobile */}
        <div className="relative max-w-5xl mx-auto mb-28">
          {/* Central Connecting Line (hidden on very small screens, visible on md+) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-stone-200 -translate-x-1/2 z-0 hidden sm:block" />

          {/* Timeline Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 sm:space-y-16 md:space-y-24"
          >
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.num}
                  variants={stepVariants}
                  className={`relative flex flex-col sm:flex-row items-stretch w-full ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm group-hover:border-[#c5a880] group-hover:scale-110 transition-all duration-300">
                      <span className="text-[10px] font-bold text-[#c5a880] font-mono">{step.num}</span>
                    </div>
                  </div>

                  {/* Left spacing column to align text content to one side on desktop */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />

                  {/* Step Card Content */}
                  <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-white border border-stone-200/60 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md hover:border-[#c5a880]/30 transition-all duration-500 group flex flex-col justify-between h-full text-left"
                    >
                      <div className="space-y-4">
                        {/* Card Header with Icon */}
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-lg bg-stone-50 group-hover:bg-[#c5a880]/10 flex items-center justify-center text-stone-800 group-hover:text-[#c5a880] transition-colors duration-500 border border-stone-100 group-hover:border-[#c5a880]/20">
                            <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                          </div>
                          <span className="text-xs font-mono font-bold text-stone-400 group-hover:text-[#c5a880] transition-colors duration-300">
                            STEP {step.num}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-2">
                          <h3 className="text-lg font-serif font-medium text-stone-950 group-hover:text-[#c5a880] transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Premium Highlight Section with 4 Statistics */}
        <div className="border-t border-stone-200/50 pt-20 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="space-y-3 text-center md:text-left group"
              >
                <div className="text-4xl md:text-5xl font-serif text-[#c5a880] font-light leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
                  {st.value}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">
                    {st.label}
                  </h4>
                  <p className="text-stone-400 text-xs font-light">
                    Suthar Quality Standard
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium CTA Box underneath */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-stone-900 text-white p-8 md:p-16 border border-white/5 relative overflow-hidden text-left shadow-2xl rounded-lg"
        >
          {/* Subtle warm decorative radial glow */}
          <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#c5a880]/15 via-stone-950/0 to-stone-950/0 opacity-80 pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="text-[#c5a880] text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              LET'S BUILD SOMETHING EXTRAORDINARY
            </span>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight text-white leading-tight uppercase">
              Ready to Start Your <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Dream Project</span>?
            </h3>
            <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed max-w-2xl">
              Whether you're building a new home, renovating an existing space, or designing a commercial environment, our experienced team is ready to guide you through every step with honesty, precision, and exceptional craftsmanship.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
              {/* Primary button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] hover:bg-[#b0936b] px-6 py-4 rounded-none cursor-pointer"
              >
                <span>Book a Free Consultation</span>
                <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950 group-hover:bg-stone-950 group-hover:text-[#c5a880] transition-all duration-300">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </motion.a>

              {/* Secondary button */}
              <motion.a
                href="#portfolio"
                onClick={() => setView && setView("home")}
                whileHover={{ scale: 1.02, borderColor: "#c5a880", color: "#c5a880" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer"
              >
                View Our Projects
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
