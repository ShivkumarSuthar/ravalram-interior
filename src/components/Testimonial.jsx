import { motion } from "motion/react";

export default function Testimonial() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden border-t border-stone-200/50">
      {/* Blueprint grid layout lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12">
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full border-r" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center space-y-8">
        {/* Golden logo icon at top exactly like image */}
        <div className="w-16 h-16 text-gold-500 mb-2">
          <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
            <path d="M50 15 L80 35 L80 65 L50 85 L20 65 L20 35 Z" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M50 25 L70 40 L70 60 L50 75 L30 60 L30 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="10" fill="currentColor" />
          </svg>
        </div>

        {/* Large Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl font-serif font-light leading-relaxed text-stone-800 italic"
        >
          &ldquo;I absolutely love my the new modern living room! The clean lines, a neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommend their modern interior design services!&rdquo;
        </motion.p>

        {/* Profile picture & Signature Info */}
        <div className="flex flex-col items-center space-y-3 pt-6 border-t border-stone-200/60 w-44">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500 shadow-lg bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300"
              alt="Morgan Dufresne"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center">
            <span className="font-serif italic font-semibold text-stone-900 text-lg block">
              Morgan Dufresne
            </span>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold font-mono">
              Company Owner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
