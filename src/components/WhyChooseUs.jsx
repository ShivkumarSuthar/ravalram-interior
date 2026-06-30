import { motion } from "motion/react";
import {
  Award,
  Compass,
  DollarSign,
  Sliders,
  Briefcase,
  Hammer,
  Workflow,
  MapPin,
  ArrowRight
} from "lucide-react";

const features = [
  {
    num: "01",
    icon: Award,
    title: "30+ Years of Family Craftsmanship",
    desc: "Built on a legacy that began in 1989, combining traditional craftsmanship with modern architectural thinking."
  },
  {
    num: "02",
    icon: Compass,
    title: "Architect-Led Execution",
    desc: "Every project is planned and supervised by experienced architects to ensure thoughtful design and flawless execution."
  },
  {
    num: "03",
    icon: DollarSign,
    title: "Honest & Transparent Pricing",
    desc: "Clear estimates, practical recommendations, and flexible budgets without hidden costs or unnecessary upselling."
  },
  {
    num: "04",
    icon: Sliders,
    title: "Completely Customized",
    desc: "Every design, furniture piece, material, and finish is tailored to your lifestyle, space, and budget."
  },
  {
    num: "05",
    icon: Briefcase,
    title: "End-to-End Solutions",
    desc: "Architecture, interiors, furniture, painting, electrical work, renovation, and complete project execution under one roof."
  },
  {
    num: "06",
    icon: Hammer,
    title: "Premium Craftsmanship",
    desc: "Every detail is executed by skilled professionals who believe exceptional quality is found in the smallest details."
  },
  {
    num: "07",
    icon: Workflow,
    title: "Flexible Working Model",
    desc: "Labour only, labour with materials, turnkey projects, or custom furniture manufacturing—we work the way that suits your project."
  },
  {
    num: "08",
    icon: MapPin,
    title: "Trusted Across Multiple Cities",
    desc: "Proudly delivering projects across Mumbai, Pune, Goa, Bengaluru, Hyderabad, Hubballi, Kumta, Honnavar, Murudeshwar, and nearby regions."
  }
];

export default function WhyChooseUs({ setView }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-choose-us" className="bg-[#faf9f6] py-24 md:py-32 relative overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-[#c5a880] text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              WHY CHOOSE SUTHAR INTERIOR STUDIO
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            Built on <span className="font-serif italic text-[#c5a880] font-normal lowercase">Experience</span>.<br />
            Driven by <span className="font-serif italic text-[#c5a880] font-normal lowercase">Trust</span>.
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
            For over three decades, our family has been creating thoughtfully designed spaces with honesty, precision, and exceptional craftsmanship. Every project is architect-supervised, fully customized, and executed with the same care we would give our own home.
          </p>
        </div>

        {/* Features 4x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={feat.num}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white border border-stone-200/60 p-6 md:p-8 rounded-lg text-left space-y-6 hover:shadow-xl hover:border-[#c5a880]/30 transition-all duration-500 flex flex-col justify-between group h-full"
              >
                <div className="space-y-4">
                  {/* Top bar with Icon and Number indicator */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-stone-50 group-hover:bg-[#c5a880]/10 flex items-center justify-center text-stone-800 group-hover:text-[#c5a880] transition-colors duration-500 border border-stone-100 group-hover:border-[#c5a880]/20">
                      <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-stone-300 font-bold group-hover:text-[#c5a880]/50 transition-colors duration-500">
                      {feat.num}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-serif font-medium text-stone-950 group-hover:text-[#c5a880] transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium CTA Box underneath */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 md:mt-28 bg-stone-900 text-white p-8 md:p-16 border border-white/5 relative overflow-hidden text-left shadow-2xl rounded-lg"
        >
          {/* Subtle warm decorative mesh glow in the corner */}
          <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#c5a880]/10 via-stone-950/0 to-stone-950/0 opacity-70 pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="text-[#c5a880] text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              WORK WITH THE MASTER BUILDERS
            </span>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight text-white leading-tight uppercase">
              Let's Build <span className="font-serif italic text-[#c5a880] font-normal lowercase">Something</span> <br />
              Extraordinary.
            </h3>
            <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed max-w-2xl">
              Whether you're creating a dream home, renovating a workspace, or planning a large commercial project, we're ready to bring your vision to life with thoughtful design, honest guidance, and exceptional craftsmanship.
            </p>

            <div className="pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] hover:bg-[#b0936b] px-6 py-4 rounded-none cursor-pointer"
              >
                <span>Start Your Project</span>
                <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950 group-hover:bg-stone-950 group-hover:text-[#c5a880] transition-all duration-300">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
