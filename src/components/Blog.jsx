import { motion } from "motion/react";
import coastalImg from "../assets/images/antra_project_coastal_1782744299850.jpg";
import loftImg from "../assets/images/antra_project_loft_1782744318019.jpg";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";
import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";

const sideArticles = [
  {
    id: 1,
    image: loftImg,
    tag: "Tips & Trick",
    date: "July 28, 2025",
    title: "How Does One Go About Buying Furniture?",
    desc: "We believe that every space has the power to inspire, and that great design..."
  },
  {
    id: 2,
    image: transitionImg,
    tag: "Tips & Trick",
    date: "July 28, 2025",
    title: "How Does One Go About Buying Furniture?",
    desc: "We believe that every space has the power to inspire, and that great design..."
  },
  {
    id: 3,
    image: aboutImg,
    tag: "Tips & Trick",
    date: "July 28, 2025",
    title: "How Does One Go About Buying Furniture?",
    desc: "We believe that every space has the power to inspire, and that great design..."
  }
];

export default function Blog() {
  return (
    <section id="blog" className="bg-[#faf9f6] py-24 md:py-32 overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-gold-500 text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              OUR ARTICLES
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight text-center">
            Take A Look At <span className="font-serif italic text-gold-500 font-normal">Our Latest</span> <br />
            <span className="font-serif italic text-gold-500 font-normal">Blog</span> & Articles.
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
              className="bg-white border border-stone-200/60 p-5 rounded-3xl shadow-xl space-y-6 group cursor-pointer text-left"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 relative">
                <img
                  src={coastalImg}
                  alt="Extra space design"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[10px] font-mono tracking-wider text-stone-400 font-bold">
                  <span className="text-gold-500 uppercase">{ "Tips & Trick" }</span>
                  <span>&bull;</span>
                  <span>July 28, 2025</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-stone-900 font-medium group-hover:text-gold-500 transition-colors duration-300 leading-snug">
                  Four Ways For Creating Extra Space In Small Homes
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
                className="bg-white border border-stone-200/60 p-4 rounded-2xl shadow-md hover:shadow-xl hover:border-gold-500/25 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center group cursor-pointer text-left"
              >
                {/* Small image frame */}
                <div className="w-full sm:w-28 aspect-video sm:aspect-square rounded-xl overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article details */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-[10px] font-mono tracking-wider text-stone-400 font-bold">
                    <span className="text-gold-500 uppercase">{art.tag}</span>
                    <span>&bull;</span>
                    <span>{art.date}</span>
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-stone-900 group-hover:text-gold-500 transition-colors duration-300 leading-snug">
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
