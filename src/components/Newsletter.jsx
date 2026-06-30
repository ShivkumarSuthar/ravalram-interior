import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
    <section className="bg-white py-20 relative overflow-hidden border-t border-stone-200/50">
      {/* Blueprint grid layout lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12">
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full" />
          <div className="border-l border-stone-900 h-full border-r" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-6">
        <div className="space-y-3">
          <span className="text-[#c5a880] text-xs tracking-[0.3em] uppercase font-bold font-mono block">
            SUBSCRIBE TO THE NEWSLETTER
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            Join <span className="font-serif italic text-[#c5a880] font-normal lowercase">Our Newsletter</span> <br />
            <span className="font-serif italic text-[#c5a880] font-normal lowercase">Stay</span> Up To Date
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
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
              className="flex items-center bg-[#faf9f6] border border-stone-200 rounded-none pl-5 pr-2 py-2 max-w-lg mx-auto"
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
                className="w-12 h-12 rounded-none bg-stone-900 hover:bg-[#c5a880] text-white hover:text-stone-950 flex items-center justify-center transition-colors duration-300 shrink-0 cursor-pointer group"
              >
                <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="flex items-center justify-center space-x-2 text-stone-900 bg-stone-100 border border-stone-200 px-6 py-3 rounded-none max-w-xs mx-auto"
            >
              <svg className="w-4 h-4 text-[#c5a880]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">Subscription Confirmed!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
