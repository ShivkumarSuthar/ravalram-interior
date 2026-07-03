import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    project: "Residential Interior",
    city: "Mumbai",
    review: "The entire experience was smooth from design to execution. The team understood exactly what we wanted and delivered a home that feels elegant, functional, and beautifully crafted. Their attention to detail was exceptional.",
    initials: "AS"
  },
  {
    name: "Priya Naik",
    project: "Home Renovation",
    city: "Goa",
    review: "We appreciated the honest guidance throughout the project. Every material option was explained clearly, and the workmanship exceeded our expectations. We would gladly recommend Suthar Interior Studio.",
    initials: "PN"
  },
  {
    name: "Rahul Patil",
    project: "Office Interior",
    city: "Pune",
    review: "Professional, transparent, and highly organized. The architects and execution team worked together seamlessly, delivering our office on time without compromising quality.",
    initials: "RP"
  },
  {
    name: "Sneha Kulkarni",
    project: "Custom Furniture",
    city: "Bengaluru",
    review: "The furniture quality is outstanding. Every piece was customized exactly as we imagined, and the finishing reflects true craftsmanship.",
    initials: "SK"
  },
  {
    name: "Vikram Desai",
    project: "Commercial Interior",
    city: "Hyderabad",
    review: "From planning to final handover, the process was transparent and professionally managed. Their team genuinely cares about quality and customer satisfaction.",
    initials: "VD"
  }
];

const stats = [
  { value: "30+", label: "Years of Family Craftsmanship" },
  { value: "20+", label: "Skilled Professionals" },
  { value: "100%", label: "Customized Solutions" },
  { value: "Multi-City", label: "Projects Across India" }
];

export default function Testimonial({ setView }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimer = useRef(null);

  // Auto-play effect
  useEffect(() => {
    if (!isPaused) {
      autoplayTimer.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [currentIndex, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-[#E2D8A5] py-24 md:py-32 relative overflow-hidden border-t border-stone-200/50">
      {/* Decorative architectural background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="max-w-8xl mx-auto h-full w-full grid grid-cols-4 gap-12">
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full border-r" />
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-[#E7A35F] text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            Spaces That Speak. <br />
            <span className="font-serif italic text-[#E7A35F] font-normal lowercase">Clients Who</span> Trust.
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
            The greatest compliment we receive is the trust of our clients. Every project is built on honest communication, thoughtful design, skilled craftsmanship, and a commitment to delivering spaces that exceed expectations.
          </p>
        </div>

        {/* Premium Testimonial Slider / Carousel */}
        <div 
          className="relative max-w-4xl mx-auto mb-28"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slider Panel */}
          <div className="relative bg-white border border-stone-200/60 p-8 md:p-16 rounded-xl shadow-xl overflow-hidden min-h-[320px] flex flex-col justify-between">
            {/* Elegant warm gradient glow in the corner */}
            <div className="absolute right-0 top-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#E7A35F]/5 via-white/0 to-white/0 pointer-events-none" />
            
            {/* Quote Icon decorative backdrop */}
            <div className="absolute top-10 left-10 text-[#E7A35F]/10 pointer-events-none">
              <Quote size={80} strokeWidth={1} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 space-y-6"
              >
                {/* 5-Star gold rating indicators */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#E7A35F] text-[#E7A35F]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg md:text-2xl font-serif font-light leading-relaxed text-stone-800 italic">
                  &ldquo;{testimonials[currentIndex].review}&rdquo;
                </p>

                {/* Client Profile Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-stone-100">
                  {/* Initials Avatar */}
                  <div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center font-mono font-bold text-sm text-[#E7A35F]">
                    {testimonials[currentIndex].initials}
                  </div>
                  
                  <div className="text-left">
                    <span className="font-sans font-semibold text-stone-900 text-base block">
                      {testimonials[currentIndex].name}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#E7A35F] font-bold font-mono block">
                      {testimonials[currentIndex].project} &bull; {testimonials[currentIndex].city}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls and Slider Arrows */}
            <div className="flex items-center justify-between pt-8 mt-4 relative z-20 border-t border-stone-100/50">
              {/* Pagination indicators / dot lines */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                      currentIndex === idx ? "w-8 bg-[#E7A35F]" : "w-2 bg-stone-200 hover:bg-stone-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-700 hover:text-stone-950 hover:bg-stone-50 transition-all duration-300 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-700 hover:text-stone-950 hover:bg-stone-50 transition-all duration-300 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Strip - 4 Premium Statistics */}
        <div className="border-t border-stone-200/50 pt-20 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="space-y-3 text-center md:text-left group"
              >
                <div className="text-4xl md:text-5xl font-serif text-[#E7A35F] font-light leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
                  {st.value}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">
                    {st.label}
                  </h4>
                  <p className="text-stone-400 text-xs font-light font-mono">
                    TRUST CERTIFIED
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium CTA Box underneath */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-stone-900 text-white p-8 md:p-16 border border-white/5 relative overflow-hidden text-left shadow-2xl rounded-xl"
        >
          {/* Subtle warm decorative radial glow */}
          <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#E7A35F]/15 via-stone-950/0 to-stone-950/0 opacity-80 pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <span className="text-[#E7A35F] text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              WORK WITH THE MASTER BUILDERS
            </span>
            <h3 className="text-2xl md:text-4xl font-light tracking-tight text-white leading-tight uppercase">
              Your Dream Space Could Be <br />
              <span className="font-serif italic text-[#E7A35F] font-normal lowercase">Our Next Success</span> Story.
            </h3>
            <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed max-w-2xl">
              Whether you're planning a home, office, renovation, or custom furniture project, our team is ready to bring your vision to life with thoughtful design, honest guidance, and exceptional craftsmanship.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
              {/* Primary consultation button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#E7A35F] hover:bg-[#6F9F9C] px-6 py-4 rounded-none cursor-pointer"
              >
                <span>Book a Free Consultation</span>
                <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950 group-hover:bg-stone-950 group-hover:text-[#E7A35F] transition-all duration-300">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </motion.a>

              {/* Secondary button */}
              <motion.a
                href="#portfolio"
                onClick={() => setView && setView("home")}
                whileHover={{ scale: 1.02, borderColor: "#E7A35F", color: "#E7A35F" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer"
              >
                View Our Projects
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
