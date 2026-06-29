import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  BookOpen, 
  User, 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  MessageSquare, 
  Share2,
  ChevronRight,
  Sparkles
} from "lucide-react";

// Asset imports
import heroBg from "../assets/images/antra_hero_bg_1782744248753.jpg";
import heroSlide2 from "../assets/images/antra_hero_slide2_1782747378004.jpg";
import heroSlide3 from "../assets/images/antra_hero_slide3_1782747396078.jpg";
import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";
import lobbyBanner from "../assets/images/antra_lobby_banner_1782744283860.jpg";
import projectCoastal from "../assets/images/antra_project_coastal_1782744299850.jpg";
import projectLoft from "../assets/images/antra_project_loft_1782744318019.jpg";
import transitionLuxury from "../assets/images/antra_transition_luxury_1782747459033.jpg";

const blogCategories = [
  { id: "all", label: "All Articles" },
  { id: "tips", label: "Tips & Tricks" },
  { id: "furniture", label: "Furniture Design" },
  { id: "lighting", label: "Luminous & Lighting" },
  { id: "architecture", label: "Architecture" }
];

const blogArticles = [
  {
    id: 1,
    title: "Four Ways For Creating Extra Space In Small Homes",
    category: "tips",
    categoryLabel: "Tips & Tricks",
    image: projectCoastal,
    date: "July 28, 2025",
    author: "Elena Mitchel",
    readTime: "6 Min Read",
    excerpt: "We believe that every space has the power to inspire, and that great design brings that inspiration to life. Here's our comprehensive guide to maximizing compact layouts.",
    content: `We believe that every space has the power to inspire, and that great design brings that inspiration to life. Our mission is to craft environments that stir creativity, evoke emotion, and reflect the essence of those who inhabit them.

### 1. Embracing High-Contrast Verticality
When working with limited floor footprints, look upwards. Custom floor-to-ceiling shelving units painted in the same hue as the plaster walls blend structural volume with functional storage. By keeping the sightlines vertical, we draw the eye upward, establishing a false sense of open height.

### 2. Multi-Functional Master Furniture
A reading bench that doubles as an archive drawer is the epitome of thoughtful curation. Our design team recommends solid oak timber structures with soft-close custom drawers. This guarantees maximum utility without cluttering transit lines.

### 3. Glass Partitioning and Luminous Shadows
Traditional plaster partitions swallow light. Replacing non-load-bearing walls with matte black fluted glass panels maintains spatial boundary separation while allowing indirect morning light to cascade between zones.

### 4. Recessed Travertine Shelving Niches
Carving subtle pockets into structural walls creates premium pockets for curating custom artwork or essential volumes. Adding warm, 2400k linear LED tapes behind these travertine niches introduces gorgeous depth and cozy twilight ambiance.`,
    commentsCount: 12
  },
  {
    id: 2,
    title: "How Does One Go About Buying Bespoke Furniture?",
    category: "furniture",
    categoryLabel: "Furniture Design",
    image: aboutImg,
    date: "July 20, 2025",
    author: "Richard Vance",
    readTime: "8 Min Read",
    excerpt: "Sourcing rare timber and authentic slabs is an investment in longevity. Learn our master joiners' selection formula for buying bespoke furniture.",
    content: `Investing in custom furniture is an exercise in purchasing historical longevity. Unlike mass-manufactured boards, bespoke millwork represents an authentic expression of the materials and the craftsman's dedication.

### The Foundation: Grain Selection & Sourcing
Every piece of timber tells a story. When commissioning a solid oak dining table, we evaluate the moisture levels, ring density, and cut profile of the raw slabs. We prioritize slow-grown European white oaks sourced from managed sustainable forests, ensuring minimal warping over decades of atmospheric changes.

### The Joinery Philosophy
Traditional joinery is a hallmark of premium furniture. Mortise-and-tenon joints, sliding dovetails, and organic wood pinning handle structural forces naturally without relying on metal screws that loosen over time. This approach ensures your table remains structurally rigid for generations.

### Travertine Inlays & Combined Materials
A gorgeous trend in contemporary furniture is the marriage of organic timber with raw stone. Embedding a slab of Italian travertine down the center of an oak console creates a high-contrast focal point that balances raw warmth with tactile coldness.`,
    commentsCount: 8
  },
  {
    id: 3,
    title: "The Poetry of Light: Designing Recessed Linear Chords",
    category: "lighting",
    categoryLabel: "Luminous & Lighting",
    image: transitionLuxury,
    date: "June 15, 2025",
    author: "Lydia Sterling",
    readTime: "5 Min Read",
    excerpt: "Atmosphere is defined by light we do not see. Explore the methodology of mounting recessed micro-fields for quiet luxury homes.",
    content: `Light is the invisible paint of the interior architect. When designing luxury spatial environments, we focus on where light is *not* as much as where it is. Recessed linear chords represent the ultimate manifestation of atmospheric control.

### The Invisible Source
Direct glare from overhead light bulbs causes sensory fatigue and shrinks spatial volume. By nesting high-output LED tapes within custom plaster recesses, we cast soft light across wall surfaces, generating a warm, indirect glow that feels incredibly comfortable.

### Dimming Curves & Golden Temperatures
The human circadian rhythm responds to color warmth. We calibrate our linear lights to dims from a clean 3000k daylight white down to an amber 2200k twilight glow. This transition mimics the natural sun arc, easing transition into rest and promoting deep neurological calm.

### Illuminating Travertine Textures
Travertine possesses microscopic ridges and natural craters. Aligning micro-lightwells at an oblique angle grazing the stone surface reveals beautiful shadows, accentuating the raw, ancient masonry texture in breathtaking detail.`,
    commentsCount: 15
  },
  {
    id: 4,
    title: "Warehouse to Sanctuary: A Loft Conversion Retrospective",
    category: "architecture",
    categoryLabel: "Architecture",
    image: projectLoft,
    date: "May 10, 2025",
    author: "Marcus Aurelius Vance",
    readTime: "10 Min Read",
    excerpt: "A technical review of transforming early-century industrial brick structures into high-contrast duplex residences in Washington.",
    content: `Converting early-century industrial warehouses into contemporary residential sanctuaries requires a delicate balance between historic preservation and modern comfort. Here is a retrospective on our Spokane Loft project.

### Honoring the Industrial Skeleton
Industrial architecture is characterized by exposed structural steel, heavy fir timber beams, and load-bearing red brickwork. Rather than dry-walling over these raw textures, we sandblasted the timber and brick to restore their authentic warmth, establishing a stunning, historic backdrop.

### Thermal Integrity & Acoustic Isolation
Old brick warehouses are notorious for poor thermal insulation and echoing sound waves. We solved this by installing double-layer acoustic drywalls behind targeted brick facades, alongside high-efficiency underfloor hydronic heating channels covered in polished concrete plaster.

### Bento-Grid Mezzanines
To maximize the double-height spatial volume, we engineered a custom structural steel mezzanine. Floating this black metal frame above the living room created a secluded master suite, connected by a custom-cast spiral staircase with raw leather handrails.`,
    commentsCount: 22
  },
  {
    id: 5,
    title: "Calming Travertine: Balancing Texture in Modern Spaces",
    category: "tips",
    categoryLabel: "Tips & Tricks",
    image: lobbyBanner,
    date: "April 02, 2025",
    author: "Elena Mitchel",
    readTime: "4 Min Read",
    excerpt: "Why raw stone is the ultimate foundation for warm minimalist living rooms, and how to combine it with linen and boucle fabrics.",
    content: `Travertine has been the cornerstone of noble architecture for millennia. Its neutral, earth-toned hues and microscopic craters introduce an organic, geological presence that calms the senses and anchors modern spaces.

### The Balance of Hard and Soft
To prevent stone-heavy spaces from feeling cold or institutional, balance is key. We pair raw travertine fireplaces with soft bouclé wool sofas and raw Belgian linen drapery. This tactile contrast softens the stone's structural rigidity, establishing a cozy, warm minimalist aesthetic.

### Unpolished vs. Filled Travertine
For flooring, filled and honed travertine provides a flat, clean surface that is easy to maintain. However, for feature walls, hearths, and custom credenzas, we prefer unpolished, raw travertine. Its textured surface catches shadows beautifully, revealing the rock's ancient history.`,
    commentsCount: 6
  },
  {
    id: 6,
    title: "Minimalist Master Suite: Creating Cognitive Quietude",
    category: "architecture",
    categoryLabel: "Architecture",
    image: heroSlide2,
    date: "March 18, 2025",
    author: "Elena Mitchel",
    readTime: "7 Min Read",
    excerpt: "Designing bedrooms that act as neurological filters, leveraging hidden wardrobe bays and soundproofing drywall configurations.",
    content: `The modern bedroom should function as a sanctuary from sensory overload. Designing for cognitive quietude involves eliminating visual noise, optimizing acoustics, and curating soft, dawn-to-dusk lighting.

### Hidden Wardrobe Integration
Visual clutter is a primary source of cognitive stress. We replace standard closets with flush-mounted, custom timber paneling that conceals spacious walk-in wardrobe bays. The handles are integrated into the vertical wood channels, maintaining clean, uninterrupted walls.

### Multi-Layer Acoustic Isolation
To block outside noises, we implement multi-layer acoustic drywalls filled with high-density rockwool insulation. Standard glass windows are upgraded to triple-pane architectural glass, reducing incoming street-level noise to a whisper.`,
    commentsCount: 19
  }
];

export default function BlogPage({ onBackToHome, onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeArticle, setActiveArticle] = useState(null);

  // Filter articles based on category
  const filteredArticles = selectedCategory === "all"
    ? blogArticles
    : blogArticles.filter(art => art.category === selectedCategory);

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-500 selection:text-stone-950 pt-[80px]">
      
      {/* 1. HERO BREADCRUMB HEADER */}
      <section className="relative h-[40vh] md:h-[50vh] bg-stone-950 text-white flex flex-col justify-center overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSlide3}
            alt="Blog Banner Background"
            className="w-full h-full object-cover opacity-20 filter grayscale scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-stone-950/45" />
        </div>

        {/* Technical drafting gridlines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-center md:text-left space-y-4">
          {/* Breadcrumbs */}
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
            <button onClick={onBackToHome} className="hover:text-gold-500 transition-colors cursor-pointer">HOME</button>
            <span>/</span>
            <span className="text-gold-500 font-bold">MAGAZINE JOURNAL</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white leading-none uppercase"
          >
            Antra <span className="font-serif italic text-gold-500 font-normal">Journal</span>
          </motion.h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
            Delve into spatial philosophy, design advice, and material explorations curated by our master builders and interior architects.
          </p>
        </div>
      </section>

      {/* 2. JOURNAL INTERACTIVE GRID */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16" id="blog-tabs">
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-full cursor-pointer border ${
                  selectedCategory === cat.id
                    ? "bg-stone-950 text-gold-500 border-stone-950 shadow-md"
                    : "bg-[#faf9f6] text-stone-600 border-stone-200/80 hover:border-gold-500/40 hover:text-stone-950"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-articles-grid">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="group flex flex-col justify-between bg-[#faf9f6] border border-stone-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:bg-white transition-all duration-500 text-left"
                >
                  <div className="space-y-6">
                    {/* Image frame */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover filter brightness-[0.98] group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-stone-950 text-gold-500 font-mono text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 shadow-md">
                        {article.categoryLabel}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="px-6 space-y-3">
                      <div className="flex items-center space-x-3 text-[10px] text-stone-400 font-mono tracking-wider font-bold">
                        <span className="flex items-center space-x-1">
                          <Calendar size={11} />
                          <span>{article.date}</span>
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center space-x-1">
                          <Clock size={11} />
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-serif font-semibold text-stone-900 group-hover:text-gold-500 transition-colors duration-300 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-4 mt-4 border-t border-stone-200/50 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[11px] font-medium text-stone-600">
                      <User size={12} className="text-gold-500" />
                      <span>By {article.author}</span>
                    </div>

                    <button
                      onClick={() => setActiveArticle(article)}
                      className="text-[10px] uppercase tracking-widest font-bold text-stone-950 hover:text-gold-600 transition-colors inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. IMMERSIVE SLIDE-OVER ARTICLE READER PANEL */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-55 flex justify-end" id="blog-reader-modal">
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-stone-950 cursor-pointer"
            />

            {/* Panel frame */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full max-w-3xl bg-white h-full relative z-10 flex flex-col shadow-2xl overflow-y-auto text-left"
            >
              {/* Floating controls header */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-stone-100 flex items-center justify-between z-30">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="inline-flex items-center space-x-2 text-stone-500 hover:text-stone-950 text-xs font-mono font-bold uppercase tracking-widest cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>BACK TO JOURNAL</span>
                </button>

                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-950 transition-colors cursor-pointer" title="Share article">
                    <Share2 size={16} />
                  </button>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-950 transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Cover Header Image */}
              <div className="w-full aspect-[2/1] bg-stone-100 overflow-hidden relative">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-gold-500 text-stone-950 font-mono text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded">
                    {activeArticle.categoryLabel}
                  </span>
                  <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-white leading-tight">
                    {activeArticle.title}
                  </h1>
                </div>
              </div>

              {/* Article Content Area */}
              <div className="p-6 md:p-10 space-y-8 flex-1">
                
                {/* Author Metadata Row */}
                <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-stone-100">
                  <div className="flex items-center space-x-2 text-xs text-stone-600">
                    <User size={14} className="text-gold-500" />
                    <span>Written by <strong className="font-semibold text-stone-900">{activeArticle.author}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-stone-600">
                    <Calendar size={14} className="text-gold-500" />
                    <span>Published on {activeArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-stone-600">
                    <Clock size={14} className="text-gold-500" />
                    <span>Reading duration: {activeArticle.readTime}</span>
                  </div>
                </div>

                {/* Main Text Content */}
                <div className="prose prose-stone prose-sm sm:prose-base max-w-none text-stone-700 font-light leading-relaxed space-y-6">
                  {activeArticle.content.split("\n\n").map((para, i) => {
                    if (para.startsWith("###")) {
                      return (
                        <h3 key={i} className="text-lg md:text-xl font-serif font-semibold text-stone-900 pt-4 border-l-2 border-gold-500 pl-4">
                          {para.replace("### ", "")}
                        </h3>
                      );
                    }
                    return (
                      <p key={i} className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {para}
                      </p>
                    );
                  })}
                </div>

                {/* Call-to-action bottom box */}
                <div className="bg-[#faf9f6] border border-stone-200/60 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mt-12 text-center md:text-left">
                  <div className="space-y-1">
                    <span className="text-gold-600 text-[10px] tracking-widest font-mono font-bold uppercase flex items-center justify-center md:justify-start gap-1">
                      <Sparkles size={12} />
                      <span>CO-CREATE YOUR BLUEPRINT</span>
                    </span>
                    <h4 className="text-sm uppercase tracking-wide text-stone-900 font-bold">
                      Inspired by Elena's design advice?
                    </h4>
                    <p className="text-stone-500 text-[11px] font-light">
                      Book a blueprint draft session with our architectural teams.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onOpenQuote();
                    }}
                    className="px-6 py-3 bg-stone-950 hover:bg-gold-500 hover:text-stone-950 text-white font-bold text-xs uppercase tracking-widest transition-colors rounded cursor-pointer shrink-0"
                  >
                    Consult With Elena
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. NEWSLETTER CIRCLE BLOCK */}
      <section className="bg-stone-950 text-white py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="text-gold-500 text-xs tracking-[0.25em] font-mono font-bold block uppercase">
            NEVER MISS AN ARTICLE
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Subscribe To Our Spatial <br />
            <span className="font-serif italic text-gold-500 font-normal">Magazine Digest</span>
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Delivered bi-weekly. Direct architectural design columns, curated material reports, and completed residential walkthrough spotlights.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert("Successfully joined spatial journal newsletter."); }} className="max-w-md mx-auto pt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 bg-stone-900 text-white placeholder-stone-500 border border-white/5 text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-stone-950 font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>

          <div className="pt-8">
            <button
              onClick={onBackToHome}
              className="px-8 py-3.5 border border-stone-800 hover:border-gold-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5 cursor-pointer"
            >
              Back To Home
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
