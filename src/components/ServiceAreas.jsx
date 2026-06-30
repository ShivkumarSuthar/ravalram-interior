import { motion } from "motion/react";
import {
  MapPin,
  Compass,
  Workflow,
  Hammer,
  Sparkles,
  ArrowRight
} from "lucide-react";

const locations = [
  {
    city: "Mumbai",
    desc: "Our primary service region for residential, commercial, and complete turnkey interior projects."
  },
  {
    city: "Pune",
    desc: "Custom interiors, renovation, and furniture solutions designed around modern lifestyles."
  },
  {
    city: "Goa",
    desc: "Luxury homes, holiday villas, hospitality interiors, and premium custom furniture."
  },
  {
    city: "Bengaluru",
    desc: "Residential interiors, office spaces, and architect-supervised execution."
  },
  {
    city: "Hyderabad",
    desc: "Contemporary interiors and customized furniture crafted with precision."
  },
  {
    city: "Hubballi",
    desc: "Interior design, renovation, commercial projects, and complete execution services."
  },
  {
    city: "Kumta",
    desc: "One of our core operating regions, delivering complete interior and furniture solutions with trusted local expertise."
  },
  {
    city: "Honnavar",
    desc: "Custom homes, renovation projects, and architect-guided interior execution."
  },
  {
    city: "Murudeshwar",
    desc: "Thoughtfully designed residential and commercial interiors with premium craftsmanship."
  },
  {
    city: "Nearby Regions",
    desc: "We also undertake projects in surrounding towns and cities depending on project requirements."
  }
];

const highlights = [
  {
    title: "Architect-Led Projects",
    desc: "Every project is guided by experienced architects from planning to completion.",
    icon: Compass
  },
  {
    title: "Flexible Execution",
    desc: "Labour only, labour with materials, turnkey execution, or custom furniture manufacturing.",
    icon: Workflow
  },
  {
    title: "Trusted Craftsmanship",
    desc: "Family craftsmanship since 1989 backed by skilled professionals and premium workmanship.",
    icon: Hammer
  },
  {
    title: "Customized Solutions",
    desc: "Every project is designed around your lifestyle, functional needs, and investment.",
    icon: Sparkles
  }
];

export default function ServiceAreas() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="service-areas" className="bg-[#faf9f6] py-24 md:py-32 relative overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-[#c5a880] text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              WHERE WE WORK
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            Crafting Beautiful Spaces <br />
            <span className="font-serif italic text-[#c5a880] font-normal lowercase">Across</span> India.
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
            From modern city homes to commercial projects and custom furniture, Suthar Interior Studio proudly serves clients across multiple cities with the same commitment to quality, craftsmanship, and architect-led execution. No matter where your project is located, our goal remains the same—creating spaces that are thoughtfully designed and beautifully built.
          </p>
        </div>

        {/* Premium Location Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-28"
        >
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-stone-200/60 p-6 md:p-8 rounded-xl text-left space-y-4 hover:shadow-xl hover:border-[#c5a880]/30 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Location Icon pin with gold accents on hover */}
                <div className="w-10 h-10 rounded-lg bg-stone-50 group-hover:bg-[#c5a880]/10 flex items-center justify-center text-stone-800 group-hover:text-[#c5a880] transition-colors duration-500 border border-stone-100 group-hover:border-[#c5a880]/20">
                  <MapPin className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* City name & description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-medium text-stone-950 group-hover:text-[#c5a880] transition-colors duration-300">
                    {loc.city}
                  </h3>
                  <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                    {loc.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Information Banner / CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="bg-stone-900 text-white p-8 md:p-16 border border-white/5 relative overflow-hidden text-left shadow-2xl rounded-xl mb-24 md:mb-32"
        >
          {/* Subtle warm decorative radial glow */}
          <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#c5a880]/15 via-stone-950/0 to-stone-950/0 opacity-80 pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="text-[#c5a880] text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              BEYOND THE BOUNDARIES
            </span>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight text-white leading-tight uppercase">
              Planning a Project <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Outside These</span> Cities?
            </h3>
            <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed max-w-2xl">
              If your location is not listed above, we'd still love to hear from you. Depending on the project scope and timeline, our team is happy to discuss opportunities across other regions as well.
            </p>

            <div className="pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] hover:bg-[#b0936b] px-6 py-4 rounded-none cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950 group-hover:bg-stone-950 group-hover:text-[#c5a880] transition-all duration-300">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* 4 Highlight Cards Row */}
        <div className="border-t border-stone-200/50 pt-16">
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
                  className="bg-white border border-stone-200/40 p-6 rounded-xl text-left space-y-4 hover:shadow-md hover:border-[#c5a880]/20 transition-all duration-500 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-[#c5a880] group-hover:bg-[#c5a880]/10 transition-colors duration-300">
                    <HighIcon size={16} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-[#c5a880] transition-colors duration-300 font-sans">
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

      </div>
    </section>
  );
}
