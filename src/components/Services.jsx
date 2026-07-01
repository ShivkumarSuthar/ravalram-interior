import AppImage from "./AppImage";
import { motion } from "motion/react";

const coastalImg = "/images/antra_project_coastal_1782744299850.jpg";
const loftImg = "/images/antra_project_loft_1782744318019.jpg";
const transitionImg = "/images/antra_transition_luxury_1782747459033.jpg";
const aboutImg = "/images/antra_about_side_1782744266546.jpg";

const services = [
  {
    id: "01",
    title: "Architectural Interiors",
    image: coastalImg,
    description: "Honest, architect-supervised layouts designed for quiet, luxury living. Every project is planned from structure to sensory completion."
  },
  {
    id: "02",
    title: "Custom Furniture & Cabinets",
    image: loftImg,
    description: "Crafted in our family-owned workshops since 1989. Handpicked timber, precise joins, and finishes built to develop a timeless patina."
  },
  {
    id: "03",
    title: "Commercial & Retail Spaces",
    image: transitionImg,
    description: "High-end corporate offices, hospitality structures, and luxury boutiques engineered for seamless performance and raw architectural beauty."
  },
  {
    id: "04",
    title: "Turnkey Execution Supervision",
    image: aboutImg,
    description: "Total project delivery. From blueprint drafts and municipal approvals to final curated furniture installations under strict family-led standards."
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="services" className="bg-[#faf9f6] py-24 md:py-32 overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-[#c5a880] text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            Bespoke Solutions <span className="font-serif italic text-[#c5a880] font-normal lowercase">for Every</span> <br className="hidden sm:block" />
            Architectural <span className="font-serif italic text-[#c5a880] font-normal lowercase">Scale</span>
          </h2>
        </div>

        {/* Services Cards Horizontal Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              className="group flex flex-col items-start bg-transparent transition-all duration-500"
            >
              {/* Image with ID */}
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-stone-100 rounded-sm">
                {/* ID badge top-left */}
                <div className="absolute top-4 left-4 z-20 w-8 h-8 bg-stone-900/90 text-white flex items-center justify-center font-mono text-xs tracking-wider">
                  {svc.id}
                </div>

                <AppImage
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover filter brightness-[0.93] transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient dark layer on hover */}
                <div className="absolute inset-0 bg-stone-950/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Title and description */}
              <div className="space-y-3 text-left w-full">
                <h3 className="text-lg font-serif font-medium tracking-tight text-stone-900 group-hover:text-[#c5a880] transition-colors duration-300">
                  {svc.title}
                </h3>
                <div className="w-8 h-[1px] bg-stone-300 group-hover:w-16 transition-all duration-500" />
                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  {svc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
