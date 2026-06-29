import { motion } from "motion/react";
import coastalImg from "../assets/images/antra_project_coastal_1782744299850.jpg";
import loftImg from "../assets/images/antra_project_loft_1782744318019.jpg";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";
import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";

const services = [
  {
    id: "01",
    title: "Residential Interior Design",
    image: coastalImg,
    description: "Tailored design services for private homes, including room crossovers and complete home transformations."
  },
  {
    id: "02",
    title: "Commercial Interior Design",
    image: loftImg,
    description: "Creating functional, beautiful interiors for corporate, hospitality, retail, and commercial structures."
  },
  {
    id: "03",
    title: "Interior Design Consultation",
    image: transitionImg,
    description: "Bespoke consultations on materials, color palettes, spacing metrics, and furniture curation plans."
  },
  {
    id: "04",
    title: "Outdoor & Landscaping Design",
    image: aboutImg,
    description: "Expanding elegant architecture outward, synthesizing luxury patios, terracing, and curated flora."
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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="services" className="bg-[#faf9f6] py-24 md:py-32 overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-gold-500 text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
            Explore Our <span className="font-serif italic text-gold-500 font-normal">Comprehensive</span> <br className="hidden sm:block" />
            Interior Design <span className="font-serif italic text-gold-500 font-normal">Services</span>
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
              className="group flex flex-col items-start bg-white p-5 rounded-2xl border border-stone-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-gold-500/20 transition-all duration-500"
            >
              {/* Image with ID */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-stone-100">
                {/* ID badge top-left */}
                <div className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center font-serif text-sm text-stone-900 font-medium">
                  {svc.id}
                </div>

                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Centered hover View circle */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-950 shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title and description */}
              <div className="space-y-2 text-left">
                <h3 className="text-base font-semibold text-stone-900 group-hover:text-gold-500 transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
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
