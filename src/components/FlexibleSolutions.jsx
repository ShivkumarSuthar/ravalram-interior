import { motion } from "motion/react";
import {
  Hammer,
  Package,
  ShieldCheck,
  Armchair,
  Sliders,
  FileCheck,
  Gem,
  PiggyBank,
  Sparkles,
  Compass,
  ArrowRight
} from "lucide-react";

const solutions = [
  {
    num: "01",
    title: "Labour Only",
    desc: "Already have your materials? Our experienced craftsmen can execute your project with precision, ensuring exceptional workmanship and attention to every detail.",
    icon: Hammer
  },
  {
    num: "02",
    title: "Labour + Materials",
    desc: "We manage both skilled execution and carefully selected materials, giving you a hassle-free experience while maintaining complete transparency.",
    icon: Package
  },
  {
    num: "03",
    title: "Complete Turnkey Solutions",
    desc: "From architectural planning and interior design to custom furniture, installation, painting, electrical work, and final handover—we handle everything under one trusted team.",
    icon: ShieldCheck
  },
  {
    num: "04",
    title: "Custom Furniture Manufacturing",
    desc: "Need only furniture? We design and manufacture wardrobes, modular kitchens, TV units, office furniture, storage solutions, beds, and completely customized furniture tailored to your space.",
    icon: Armchair
  },
  {
    num: "05",
    title: "Flexible Material Selection",
    desc: "Choose from premium, standard, or budget-friendly materials based on your preferences. We guide you honestly and help you make the right decision without unnecessary upselling.",
    icon: Sliders
  },
  {
    num: "06",
    title: "Transparent Pricing",
    desc: "Every estimate is prepared based on your project's scope, design complexity, materials, and execution model. No hidden charges. No unrealistic promises. Just honest recommendations and clear communication.",
    icon: FileCheck
  }
];

const highlights = [
  {
    title: "Premium Materials",
    desc: "Choose premium finishes and branded hardware for a luxurious and long-lasting result.",
    icon: Gem
  },
  {
    title: "Budget-Friendly Options",
    desc: "Practical solutions designed to maximize quality while respecting your investment.",
    icon: PiggyBank
  },
  {
    title: "100% Customized",
    desc: "Every design, furniture piece, and execution plan is tailored specifically to your lifestyle, space, and functional needs.",
    icon: Sparkles
  },
  {
    title: "Architect Supervision",
    desc: "Every project is monitored by experienced architects to ensure quality, precision, and flawless execution.",
    icon: Compass
  }
];

export default function FlexibleSolutions({ setView }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="pricing" className="bg-[#faf9f6] py-24 md:py-32 relative overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-[#c5a880] text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              FLEXIBLE SOLUTIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            Designed Around <br />
            <span className="font-serif italic text-[#c5a880] font-normal lowercase">Your Vision &</span> Budget.
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
            Every project is different, and so is every client's vision. Instead of offering fixed packages, we create flexible solutions that match your design goals, material preferences, execution requirements, and investment. Whether you need complete turnkey interiors or only skilled craftsmen for execution, we adapt our services to fit your project.
          </p>
        </div>

        {/* 6 Premium Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-28"
        >
          {solutions.map((sol) => {
            const IconComponent = sol.icon;
            return (
              <motion.div
                key={sol.num}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white border border-stone-200/60 p-6 md:p-8 rounded-xl text-left space-y-6 hover:shadow-xl hover:border-[#c5a880]/30 transition-all duration-500 flex flex-col justify-between h-full group"
              >
                <div className="space-y-4">
                  {/* Card Header with Icon and Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-stone-50 group-hover:bg-[#c5a880]/10 flex items-center justify-center text-stone-800 group-hover:text-[#c5a880] transition-colors duration-500 border border-stone-100 group-hover:border-[#c5a880]/20">
                      <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <span className="text-xs font-mono font-bold text-stone-300 group-hover:text-[#c5a880]/50 transition-colors duration-500">
                      {sol.num}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-serif font-medium text-stone-950 group-hover:text-[#c5a880] transition-colors duration-300">
                      {sol.title}
                    </h3>
                    <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium Comparison Strip (4 Highlight Cards) */}
        <div className="border-t border-stone-200/50 pt-16 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((high, idx) => {
              const HighIcon = high.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="bg-stone-50/50 hover:bg-white border border-stone-200/40 p-6 rounded-xl text-left space-y-4 hover:shadow-md hover:border-[#c5a880]/20 transition-all duration-500 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-stone-100 flex items-center justify-center text-[#c5a880] group-hover:bg-[#c5a880]/10 transition-colors duration-300">
                    <HighIcon size={16} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-[#c5a880] transition-colors duration-300">
                      {high.title}
                    </h4>
                    <p className="text-stone-500 text-xs font-light leading-relaxed">
                      {high.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Premium CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-stone-900 text-white p-8 md:p-16 border border-white/5 relative overflow-hidden text-left shadow-2xl rounded-xl"
        >
          {/* Decorative mesh glow */}
          <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#c5a880]/15 via-stone-950/0 to-stone-950/0 opacity-80 pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="text-[#c5a880] text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              LET'S PLAN YOUR PROJECT TOGETHER
            </span>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight text-white leading-tight uppercase">
              Let's Plan Your <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Project</span> Together.
            </h3>
            <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed max-w-2xl">
              Whether you're building a new home, renovating an existing space, designing an office, or simply looking for custom furniture, we'll recommend the most suitable execution model for your needs and budget.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
              {/* Primary estimate button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] hover:bg-[#b0936b] px-6 py-4 rounded-none cursor-pointer"
              >
                <span>Request a Free Estimate</span>
                <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950 group-hover:bg-stone-950 group-hover:text-[#c5a880] transition-all duration-300">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </motion.a>

              {/* Secondary button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, borderColor: "#c5a880", color: "#c5a880" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer"
              >
                Talk to an Expert
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
