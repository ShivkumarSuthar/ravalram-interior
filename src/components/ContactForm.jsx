import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm({ setView }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setView) {
      setView("thank-you");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      }, 3000);
    }
  };

  const services = [
    "Residential Remodeling",
    "Penthouses & Lofts",
    "Boutique Commercial / Retail",
    "Landscape & Outdoor Terraces",
    "Bespoke Material Consultation"
  ];

  return (
    <section id="contact" className="bg-stone-950 text-white py-24 md:py-32 relative overflow-hidden">
      {/* Blueprint grid layout lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="max-w-8xl mx-auto h-full w-full grid grid-cols-4 gap-12">
          <div className="border-l border-stone-200 h-full" />
          <div className="border-l border-stone-200 h-full" />
          <div className="border-l border-stone-200 h-full" />
          <div className="border-l border-stone-200 h-full border-r" />
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-primary text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-400 block">
                  CONTACT US
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight uppercase">
                Have A <span className="font-serif italic text-primary font-normal lowercase">Project In</span> <br />
                Mind? <span className="font-serif italic text-primary font-normal lowercase">Let's Make It</span> <br />
                Happen
              </h2>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6 pt-4 border-t border-stone-900">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold font-mono">Address</h4>
                <p className="text-stone-300 text-sm mt-1 font-light">
                  5609 E Sprague Ave, Spokane Valley, WA 99212, USA
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold font-mono">Support</h4>
                <a href="mailto:studio@sutharinterior.com" className="text-stone-300 hover:text-primary transition-colors duration-300 text-sm mt-1 font-light block">
                  studio@sutharinterior.com
                </a>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold font-mono">Direct Line</h4>
                <a href="tel:+14804560789" className="text-stone-300 hover:text-primary transition-colors duration-300 text-sm mt-1 font-light block">
                  +1 (480) 456-0789
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Inquiry Form */}
          <div className="lg:col-span-7 bg-stone-900 border border-white/5 p-8 md:p-12 shadow-2xl relative rounded-none">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="text-left">
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-mono font-bold">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-primary px-4 py-3 text-sm text-stone-200 outline-none transition-colors duration-300 rounded-none"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Phone */}
                    <div className="text-left">
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-mono font-bold">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-primary px-4 py-3 text-sm text-stone-200 outline-none transition-colors duration-300 rounded-none"
                        placeholder="+1 (480) 456-0789"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="text-left">
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-mono font-bold">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-primary px-4 py-3 text-sm text-stone-200 outline-none transition-colors duration-300 rounded-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Services */}
                    <div className="text-left">
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-mono font-bold">
                        Services*
                      </label>
                      <select
                        required
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-primary px-4 py-3 text-sm text-stone-300 outline-none transition-colors duration-300 rounded-none [color-scheme:dark]"
                      >
                        <option value="" disabled>Select Service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="text-left">
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-mono font-bold">
                      Write Message*
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-800 focus:border-primary px-4 py-3 text-sm text-stone-200 outline-none transition-colors duration-300 rounded-none resize-none"
                      placeholder="Tell us about your spatial requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 text-left">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 group cursor-pointer bg-primary hover:bg-lighter px-6 py-3.5 rounded-none"
                    >
                      <span>Send Message</span>
                      <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950 group-hover:bg-stone-950 group-hover:text-primary transition-all duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary flex items-center justify-center text-primary shadow-2xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Message Dispatched</h3>
                    <p className="text-stone-400 text-xs max-w-sm mx-auto leading-relaxed">
                      Thank you, {formState.name}. We have logged your request and our lead architect will connect with you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
