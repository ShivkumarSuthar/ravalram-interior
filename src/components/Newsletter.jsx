import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

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
      }, 4000);
    }
  };

  return (
    <section className="bg-bg-base py-20 sm:py-28 lg:py-32 relative overflow-hidden select-none border-t border-stone-200/80">
      
      {/* Background Blueprint Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 sm:grid-cols-6 gap-6">
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full hidden sm:block" />
          <div className="border-l border-stone-900 h-full border-r hidden sm:block" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8 sm:space-y-10">
        
        {/* Centered Headline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-stone-900">
            <span>Join </span>
            <span className="text-gold-accent">Our Newsletter</span> <br />
            <span className="text-gold-accent">Stay </span>
            <span>Up To Date</span>
          </h2>

          <p className="font-sans text-stone-500 font-normal text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Join our newsletter. Learn something new, gain access to exclusive content, and stay informed with the latest updates in the industry.
          </p>
        </motion.div>

        {/* Clean Input Form matching image style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mx-auto pt-2"
        >
          <AnimatePresence mode="wait">
            {!success ? (
              <form
                key="newsletter-input-form"
                onSubmit={handleSubmit}
                className="relative flex items-center border-b-2 border-stone-300 focus-within:border-gold-accent pb-2 transition-colors duration-300"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address..."
                  className="w-full bg-transparent border-none text-stone-900 text-sm sm:text-base outline-none placeholder-stone-400 font-medium px-2 py-1"
                />

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="w-10 h-10 rounded-full bg-gold-accent hover:bg-gold-accent text-stone-950 flex items-center justify-center transition-all duration-300 shrink-0 cursor-pointer shadow-md hover:scale-105 active:scale-95 ml-2"
                >
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
              </form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="inline-flex items-center space-x-2.5 bg-white border border-gold-accent text-stone-900 px-6 py-3 rounded-full shadow-lg"
              >
                <div className="w-5 h-5 rounded-full bg-gold-accent text-stone-950 flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Successfully Subscribed To Newsletter!
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
