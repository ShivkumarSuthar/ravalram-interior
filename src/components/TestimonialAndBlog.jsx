import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, ArrowRight, Calendar, Sparkles, Check } from "lucide-react";

export default function TestimonialAndBlog() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const testimonials = [
    {
      text: "I absolutely love my new modern living room! The clean lines, neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommend their modern interior design services!",
      author: "Mary Peterson",
      role: "Luxury Estate Owner",
      location: "Beverly Hills, CA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300"
    },
    {
      text: "The architectural depth they brought to our penthouse conversion is staggering. Helen's stone selection is exquisite. Working with Antra has been an investment that completely redefined our quality of life.",
      author: "Julian Vance",
      role: "Hedge Fund Partner",
      location: "SoHo, NY",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300"
    },
    {
      text: "Their lighting design completely transformed our flagship hospitality lounge. The play of indirect light against raw cedar slats creates a dramatic yet incredibly soothing evening environment.",
      author: "Sofia Rostova",
      role: "Boutique Hotelier",
      location: "Milan, Italy",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300"
    }
  ];

  const blogs = [
    {
      title: "Four Ways For Creating Extraspace In Tiny Homes",
      category: "Space Optimization",
      date: "June 25, 2026",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600",
      description: "How floating shelves, floor-recessed storage, and custom modular sofas can expand your visual square footage by over 30%."
    },
    {
      title: "How Does One Go About Sourcing Travertine?",
      category: "Material Curation",
      date: "May 18, 2026",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      description: "An insider's architectural guide to analyzing density, vein-cut vs cross-cut stone slabs, and matching stone colors to raw timber."
    },
    {
      title: "Indirect Lighting Guidelines For Dark Cozy Rooms",
      category: "Lighting Layout",
      date: "April 02, 2026",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600",
      description: "How to position warm dimmable LED channels in ceiling recesses and behind stone panels to completely mask raw bulb glare."
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterSuccess(false);
        setNewsletterEmail("");
      }, 3000);
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-stone-50 py-24 md:py-32 overflow-hidden border-t border-stone-100">
      {/* SECTION 1: TRUSTED TESTIMONIALS */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="bg-stone-900 text-white p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Abstract backdrop icon */}
          <Quote className="absolute right-10 top-10 text-stone-800 w-44 h-44 -z-0 opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center space-x-2 text-gold-500 text-xs tracking-widest uppercase font-semibold">
              <Sparkles size={12} />
              <span>Verified Patron Reviews</span>
            </div>

            {/* Testimonial slider */}
            <div className="min-h-[160px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-2xl font-serif font-light leading-relaxed text-stone-100"
                >
                  "{testimonials[activeTestimonial].text}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author info & toggles */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-stone-800 gap-6">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].author}
                  className="w-12 h-12 rounded-full object-cover border border-gold-500/30"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-serif font-medium text-white">{testimonials[activeTestimonial].author}</h4>
                  <p className="text-xs text-gold-500 uppercase tracking-wider font-semibold">
                    {testimonials[activeTestimonial].role} — <span className="text-stone-400">{testimonials[activeTestimonial].location}</span>
                  </p>
                </div>
              </div>

              {/* Slider Toggles */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 border border-stone-800 hover:border-gold-500 text-stone-400 hover:text-gold-500 transition-colors duration-300 cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-mono text-stone-500">
                  {activeTestimonial + 1} / {testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-3 border border-stone-800 hover:border-gold-500 text-stone-400 hover:text-gold-500 transition-colors duration-300 cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: EDITORIAL BLOG / ARTICLES */}
      <div id="blog" className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
              Design Logs
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
              Take A Look At Our Latest <br />
              <span className="font-serif italic text-gold-500">Blog & Articles</span>
            </h2>
          </div>
          <a
            href="#portfolio"
            className="inline-flex items-center space-x-2 text-stone-950 hover:text-gold-500 font-bold text-xs tracking-widest uppercase transition-colors duration-300 group shrink-0"
          >
            <span>Explore All Logs</span>
            <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="bg-white border border-stone-100 p-5 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
              id={`blog-article-${idx}`}
            >
              <div className="space-y-4">
                {/* Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-stone-950/80 backdrop-blur-md text-[9px] uppercase tracking-widest px-2.5 py-1 text-white border border-white/5">
                    {blog.category}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-stone-400 text-[10px] font-mono tracking-wider">
                    <Calendar size={10} className="mr-1.5" />
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-lg font-serif text-stone-900 font-medium group-hover:text-gold-500 transition-colors duration-300 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-stone-500 text-xs font-light leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 mt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-stone-900 group-hover:text-gold-500 uppercase tracking-widest transition-colors duration-300"
                >
                  <span>Read Article</span>
                  <ArrowRight size={12} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* SECTION 3: NEWSLETTER SIGNUP */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-stone-50 border border-gold-500/10 p-10 md:p-16 text-center space-y-6 shadow-sm relative overflow-hidden">
          {/* Subtle frame outlines */}
          <div className="absolute inset-4 border border-gold-500/5 pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
              Join Our Circle
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900">
              Join Our Newsletter <span className="font-serif italic text-gold-500">Stay Up To Date</span>
            </h2>
            <p className="text-stone-500 text-sm font-light leading-relaxed">
              Sign up to receive Antra's private design journals, seasonal stone selections, and exclusive priority project openings straight to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {!newsletterSuccess ? (
                <motion.form
                  key="newsletter-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto pt-4"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white border border-stone-200 focus:border-gold-500 px-5 py-3 text-sm text-stone-800 outline-none transition-colors duration-300 rounded-none shadow-inner"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 hover:bg-gold-500 text-white hover:text-stone-950 text-xs tracking-widest uppercase font-bold rounded-none transition-colors duration-300 shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="newsletter-success"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="flex items-center justify-center space-x-3 text-gold-600 bg-gold-500/10 border border-gold-500/25 p-4 max-w-md mx-auto mt-4"
                >
                  <Check size={16} />
                  <span className="text-xs font-semibold uppercase tracking-wider">Subscription Confirmed! Thank you.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
