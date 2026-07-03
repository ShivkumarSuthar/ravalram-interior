import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const newsletterImageSrc = "/images/antra_transition_luxury_1782747459033.jpg";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 relative overflow-hidden border-t border-stone-200/50">
      {/* Blueprint grid layout lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="max-w-8xl mx-auto h-full w-full grid grid-cols-4 gap-12">
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full border-r" />
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-3xl bg-stone-100"
        >
          <Image
            src={newsletterImageSrc}
            alt="Suthar bespoke interior material palette and luxury joinery detail"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" />
        </motion.div>

        <div className="text-left space-y-8">
          <div className="space-y-4">
            <span className="text-[#E7A35F] text-xs tracking-[0.3em] uppercase font-bold font-mono block">
              SUBSCRIBE TO THE NEWSLETTER
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
              Join <span className="font-serif italic text-[#E7A35F] font-normal lowercase">Our Newsletter</span> <br />
              <span className="font-serif italic text-[#E7A35F] font-normal lowercase">Stay</span> Up To Date
            </h2>
            <p className="text-stone-500 text-sm sm:text-base font-light max-w-xl leading-relaxed">
              Gain access to exclusive spatial architecture catalogues, workshop updates, and handpicked woodcarving details.
            </p>
          </div>

          {/* Input box */}
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="newsletter-input-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex items-center bg-[#E2D8A5] border border-stone-200 rounded-none pl-5 pr-2 py-2 max-w-lg"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent border-none text-stone-800 text-sm outline-none placeholder-stone-400 font-light"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="w-12 h-12 rounded-none bg-stone-900 hover:bg-[#E7A35F] text-white hover:text-stone-950 flex items-center justify-center transition-colors duration-300 shrink-0 cursor-pointer group"
                >
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                className="flex items-center space-x-2 text-stone-900 bg-stone-100 border border-stone-200 px-6 py-3 rounded-none max-w-xs"
              >
                <Check size={16} strokeWidth={3} className="text-[#E7A35F]" />
                <span className="text-xs font-semibold uppercase tracking-wider font-mono">Subscription Confirmed!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
