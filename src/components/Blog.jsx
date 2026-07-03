import AppImage from "./AppImage";
import { motion } from "motion/react";

const coastalImg = "/images/antra_project_coastal_1782744299850.jpg";
const loftImg = "/images/antra_project_loft_1782744318019.jpg";
const transitionImg = "/images/antra_transition_luxury_1782747459033.jpg";
const aboutImg = "/images/antra_about_side_1782744266546.jpg";

const sideArticles = [
  {
    id: 1,
    image: loftImg,
    tag: "Woodcraft Heritage",
    date: "June 25, 2026",
    title: "The Patina of Timber: Sourcing Hardwoods for Heirloom Joinery",
    desc: "How handpicked solid teak and Indian rosewood mature under natural oil applications to develop timeless architectural character."
  },
  {
    id: 2,
    image: transitionImg,
    tag: "Materiality",
    date: "May 18, 2026",
    title: "Luxurious Travertine: Balancing Raw Finishes with Indirect Light",
    desc: "Unlocking the volumetric depth of modern bathrooms and lounges through textured plaster and warm recessed light channels."
  },
  {
    id: 3,
    image: aboutImg,
    tag: "Execution",
    date: "April 02, 2026",
    title: "Honest Supervision: The Critical Value of Architect-Led Remodeling",
    desc: "Why on-site family-led quality control and municipal blueprint compliance guarantee zero hidden construction delays."
  }
];

export default function Blog() {
  return (
    <section id="blog" className="bg-[#E2D8A5] py-24 md:py-32 overflow-hidden border-t border-stone-200/50">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-left mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-[#E7A35F] text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              OUR JOURNAL
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            Architectural Insights <span className="font-serif italic text-[#E7A35F] font-normal lowercase">&amp;</span> <br />
            <span className="font-serif italic text-[#E7A35F] font-normal lowercase">Craftsman</span> Chronicles
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Featured Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-stone-200/60 p-5 rounded-none shadow-sm space-y-6 group cursor-pointer text-left"
            >
              <div className="w-full aspect-[4/3] rounded-none overflow-hidden bg-stone-100 relative">
                <AppImage
                  src={coastalImg}
                  alt="Extra space design"
                  className="w-full h-full object-cover filter brightness-95 transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[10px] font-mono tracking-wider text-stone-400 font-bold">
                  <span className="text-[#E7A35F] uppercase">Structural Curation</span>
                  <span>&bull;</span>
                  <span>June 29, 2026</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-stone-900 font-medium group-hover:text-[#E7A35F] transition-colors duration-300 leading-snug">
                  Four Ways to Create Volumetric Space in Residential Architecture
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                  We believe that every space has the power to inspire, and that great design brings that inspiration to life. Our mission is to craft environments that stir creativity, evoke emotion, and reflect the essence of those who inhabit them.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Three Vertical Small List Items */}
          <div className="lg:col-span-6 space-y-6">
            {sideArticles.map((art, idx) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white border border-stone-200/60 p-4 rounded-none shadow-sm hover:border-[#E7A35F]/20 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center group cursor-pointer text-left"
              >
                {/* Small image frame */}
                <div className="w-full sm:w-28 aspect-video sm:aspect-square rounded-none overflow-hidden bg-stone-100 shrink-0">
                  <AppImage
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover filter brightness-95 transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article details */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-[10px] font-mono tracking-wider text-stone-400 font-bold">
                    <span className="text-[#E7A35F] uppercase">{art.tag}</span>
                    <span>&bull;</span>
                    <span>{art.date}</span>
                  </div>
                  <h4 className="text-sm md:text-base font-serif font-medium text-stone-900 group-hover:text-[#E7A35F] transition-colors duration-300 leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-stone-500 text-xs font-light leading-relaxed line-clamp-2">
                    {art.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
