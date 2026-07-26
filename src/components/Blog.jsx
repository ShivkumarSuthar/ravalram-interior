import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

// Local high quality project assets
const coastalImg = "/assets/images/AI_images/antra_project_coastal_1782744299850.jpg";
const loftImg = "/assets/images/AI_images/antra_project_loft_1782744318019.jpg";
const transitionImg = "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";
const aboutImg = "/assets/images/AI_images/antra_about_side_1782744266546.jpg";

const mainArticle = {
  id: "main-article-1",
  image: coastalImg,
  tag: "Interior Trends",
  author: "Suthar Studio",
  date: "June 2, 2026",
  title: "Functional Design Trends That Blend Style And Comfort",
  desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you're updating a single room or redesigning your entire home..."
};

const rightArticles = [
  {
    id: "side-article-1",
    image: loftImg,
    tag: "Bespoke Joinery",
    author: "Suthar Studio",
    date: "June 2, 2026",
    title: "Master Timber Joinery & Modern Civil Execution",
    desc: "Exploring how generational woodworking craftsmanship elevates luxury residential villas with seamless storage, wall paneling, and custom timber furniture..."
  },
  {
    id: "side-article-2",
    image: transitionImg,
    tag: "Lighting & Ambiance",
    author: "Suthar Studio",
    date: "June 2, 2026",
    title: "Innovative Architectural Ideas To Refresh Your Living Space",
    desc: "Modern interior architecture centers on indirect cove lighting, natural light harvesting, and acoustic spatial balance for elevated daily living..."
  },
  {
    id: "side-article-3",
    image: aboutImg,
    tag: "Spatial Planning",
    author: "Suthar Studio",
    date: "June 2, 2026",
    title: "Transforming Coastal Villas With Timeless Turnkey Interiors",
    desc: "A deep dive into weather-proof teak joinery, Italian Statuario marble selection, and architect-supervised turnkey site management..."
  }
];

export default function Blog({ setView }) {
  const handleArticleClick = () => {
    if (typeof setView === "function") {
      setView("blog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="blog" className="bg-[#faf9f6] py-20 sm:py-28 lg:py-32 relative overflow-hidden select-none border-t border-stone-200/80">
      
      {/* Container Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12 sm:space-y-16">
        
        {/* HEADER SECTION (Matching exact image layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-b border-stone-200/80 pb-10">
          
          {/* Left Eyebrow Pill Badge */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center space-x-2 border border-stone-300/80 bg-white px-5 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#CAA05C] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-stone-700">
                STRAIGHT FROM THE NEWSROOM
              </span>
            </div>
          </div>

          {/* Right Main Grand Headline */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
              Take A Look At <span className="text-[#CAA05C]">Our Latest</span> <br />
              <span className="text-[#CAA05C]">Blog</span> & Articles.
            </h2>
          </div>

        </div>

        {/* MAIN ARTICLES GRID (Exact Image Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Big Featured Main Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleArticleClick}
            className="lg:col-span-6 space-y-5 group cursor-pointer bg-white border border-stone-200/80 p-5 sm:p-6 rounded-[32px] shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Container with Tag Badge */}
            <div className="relative w-full aspect-[16/11] rounded-[24px] overflow-hidden bg-stone-100">
              <img
                src={mainArticle.image}
                alt={mainArticle.title}
                className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />

              {/* Tag Pill Badge Overlaid on Image Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#CAA05C] text-stone-950 font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  {mainArticle.tag}
                </span>
              </div>
            </div>

            {/* Content Details Below Image */}
            <div className="space-y-3 px-1">
              <div className="flex items-center space-x-2 text-xs font-mono text-stone-500">
                <span>By</span>
                <span className="text-[#CAA05C] font-extrabold">{mainArticle.author}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 leading-snug group-hover:text-[#CAA05C] transition-colors duration-300">
                {mainArticle.title}
              </h3>

              <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                {mainArticle.desc}
              </p>
            </div>
          </motion.div>

          {/* Right Column: 3 Stacked Horizontal Article Items */}
          <div className="lg:col-span-6 space-y-6">
            {rightArticles.map((art, idx) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onClick={handleArticleClick}
                className="bg-white border border-stone-200/80 p-4 sm:p-5 rounded-[28px] shadow-sm hover:shadow-xl hover:border-[#CAA05C]/50 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center group cursor-pointer"
              >
                {/* Thumbnail Image Left with Tag Badge */}
                <div className="relative w-full sm:w-44 md:w-48 aspect-[16/11] rounded-[20px] overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Tag Pill Badge Overlaid on Thumbnail Top Left */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="bg-[#CAA05C] text-stone-950 font-mono text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      {art.tag}
                    </span>
                  </div>
                </div>

                {/* Article Info Right */}
                <div className="space-y-2 text-left flex-1">
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-stone-400">
                    <span>{art.date}</span>
                    <span>&bull;</span>
                    <span>By</span>
                    <span className="text-[#CAA05C] font-bold">{art.author}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-extrabold text-stone-900 group-hover:text-[#CAA05C] transition-colors duration-300 leading-snug line-clamp-2">
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
