import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Sparkles,
  ArrowUpRight,
  Check,
  Compass
} from "lucide-react";

// Import luxury loft/living room image for left side of contact split
const loftImg = "/assets/images/AI_images/antra_project_loft_1782744318019.jpg";

export default function ContactForm({ setView }) {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Residential Interior",
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
          phone: "",
          email: "",
          subject: "Residential Interior",
          message: ""
        });
      }, 4000);
    }
  };

  // We don't run a local branch office in every city — the team travels
  // out from the Mumbai HQ for site visits and execution. Ordered as the
  // studio's real route: from the Kumta timber workshop that started it
  // all, up the coast, to the Mumbai flagship HQ today.
  const locations = [
    {
      id: "kumta",
      city: "Kumta",
      tag: "1989",
      role: "Where the guild began",
      projects: "Master timber fabrication, workshop production",
      note: "The first workbench was set up here, by hand, in 1989."
    },
    {
      id: "honnavar",
      city: "Honnavar",
      role: "Coastal bungalows",
      projects: "Bespoke coastal bungalows, weather-proof woodwork",
      note: "Homes built to take on the salt air and win."
    },
    {
      id: "murudeshwar",
      city: "Murudeshwar",
      role: "Temple coast",
      projects: "Resort outlets, traditional timber elevation work",
      note: "Timberwork for resorts along the temple coast."
    },
    {
      id: "hubballi",
      city: "Hubballi",
      role: "Trade route",
      projects: "Retail flagships, turnkey commercial stores",
      note: "Retail fit-outs for the inland trade route."
    },
    {
      id: "bengaluru",
      city: "Bengaluru",
      role: "Smart residences",
      projects: "Smart residences, executive office spaces",
      note: "Homes for a city that never quite slows down."
    },
    {
      id: "hyderabad",
      city: "Hyderabad",
      role: "Bespoke joinery",
      projects: "Custom timber wardrobes, grand residential suites",
      note: "Custom joinery for grand residential suites."
    },
    {
      id: "goa",
      city: "Goa",
      role: "Coastal estates",
      projects: "Beachfront villas, heritage bungalow upgrades",
      note: "Beachfront villas and old bungalows, restored."
    },
    {
      id: "pune",
      city: "Pune",
      role: "Design studio",
      projects: "Contemporary duplexes, high-end apartment interiors",
      note: "Duplexes and apartments, reimagined."
    },
    {
      id: "mumbai",
      city: "Mumbai",
      tag: "HQ",
      role: "Flagship showroom",
      address: "Linking Road, Santacruz West, Mumbai, Maharashtra 400054",
      projects: "Sea-facing penthouses, luxury villas, corporate HQs",
      note: "The flagship showroom — where it all comes together."
    }
  ];

  const [selectedCityId, setSelectedCityId] = useState("mumbai");

  return (
    <section id="contact" className="bg-[#faf9f6] text-stone-900 py-20 sm:py-28 lg:py-32 relative overflow-hidden select-none border-t border-stone-200/80">

      {/* Container Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16 lg:space-y-24">

        {/* HEADER SECTION (Matching exact image layout) */}
        <div className="space-y-10">

          {/* Eyebrow and Headline Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-b border-stone-200/80 pb-10">

            {/* Left Eyebrow Pill Badge */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center space-x-2 border border-stone-300/80 bg-white px-5 py-2 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-stone-700">
                  GET IN TOUCH
                </span>
              </div>
            </div>

            {/* Right Main Grand Headline */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                Have A Project In <span className="text-gold-accent">Mind? Let's</span> <br />
                <span className="text-gold-accent">Make</span> It Happen
              </h2>
            </div>

          </div>

          {/* Quick Direct Info Metrics Row (Address & Support) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-left pt-2">

            {/* Address Column */}
            <div className="lg:col-span-6 space-y-1">
              <span className="text-[10px] uppercase font-mono font-bold tracking-[0.2em] text-stone-400 block">
                FLAGSHIP SHOWROOM ADDRESS
              </span>
              <p className="text-stone-900 text-sm sm:text-base font-extrabold leading-snug">
                Linking Road, Santacruz West, Mumbai, Maharashtra 400054, India
              </p>
              <p className="text-stone-500 text-xs font-light">
                Architect-supervised walkthroughs by appointment.
              </p>
            </div>

            {/* Support Phone & Email Column */}
            <div className="lg:col-span-6 space-y-1">
              <span className="text-[10px] uppercase font-mono font-bold tracking-[0.2em] text-stone-400 block">
                DIRECT SUPPORT & ESTIMATES
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <a
                  href="tel:+919820012345"
                  className="text-gold-accent hover:text-gold-accent font-mono text-sm sm:text-base font-extrabold transition-colors"
                >
                  +91 98200 12345 / +1 (480) 456-0789
                </a>
                <a
                  href="mailto:Support@SutharInterior.com"
                  className="text-stone-900 hover:text-gold-accent text-sm sm:text-base font-extrabold tracking-tight transition-colors block"
                >
                  Support@SutharInterior.com
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* MAIN SPLIT SECTION: Image Left + Form Right (Exact image structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: High-Res Architecture Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-stone-200/80 min-h-[380px] lg:min-h-[520px] group bg-stone-900"
          >
            <img
              src={loftImg}
              alt="Luxury loft interior Suthar Studio"
              className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-stone-900/80 backdrop-blur-md border border-white/10 text-white space-y-1 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-accent">
                  BESPOKE TIMBER JOINERY
                </span>
                <Sparkles size={14} className="text-gold-accent" />
              </div>
              <h4 className="text-sm font-extrabold text-white">
                Turnkey Execution & Spatial Design
              </h4>
              <p className="text-[11px] text-[var(--color-text-muted)] font-light leading-relaxed">
                Over 3,000+ luxury residential and commercial transformations executed since 1989.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Clean Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white border border-stone-200/80 p-8 sm:p-10 md:p-12 rounded-[32px] sm:rounded-[36px] shadow-xl text-left flex flex-col justify-between"
          >
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
                  {/* Row 1: Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#faf9f6] border border-stone-200 focus:border-gold-accent focus:bg-white rounded-full px-5 py-3.5 text-sm text-stone-900 outline-none transition-all duration-300 font-medium placeholder:text-stone-400"
                        placeholder="Your Name *"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-[#faf9f6] border border-stone-200 focus:border-gold-accent focus:bg-white rounded-full px-5 py-3.5 text-sm text-stone-900 outline-none transition-all duration-300 font-medium placeholder:text-stone-400"
                        placeholder="Phone *"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#faf9f6] border border-stone-200 focus:border-gold-accent focus:bg-white rounded-full px-5 py-3.5 text-sm text-stone-900 outline-none transition-all duration-300 font-medium placeholder:text-stone-400"
                        placeholder="Email Address *"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full bg-[#faf9f6] border border-stone-200 focus:border-gold-accent focus:bg-white rounded-full px-5 py-3.5 text-sm text-stone-800 outline-none transition-all duration-300 font-medium appearance-none cursor-pointer"
                      >
                        <option value="Residential Interior">I Want Residential Design</option>
                        <option value="Turnkey Execution">I Want Turnkey Execution</option>
                        <option value="Commercial HQ">I Want Commercial Interior</option>
                        <option value="Custom Woodwork">I Want Custom Woodwork / Kitchen</option>
                        <option value="Site Consultation">I Want On-Site Inspection</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Your Message */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#faf9f6] border border-stone-200 focus:border-gold-accent focus:bg-white rounded-[24px] p-5 text-sm text-stone-900 outline-none transition-all duration-300 font-medium placeholder:text-stone-400 resize-none"
                      placeholder="Your Message..."
                    />
                  </div>

                  {/* Row 4: Submit Button (Pill button with gold arrow circle) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-3 bg-[#0c0a09] hover:bg-gold-accent text-white hover:text-stone-950 px-8 py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg group"
                    >
                      <span>Send Message</span>
                      <div className="w-8 h-8 rounded-full bg-gold-accent group-hover:bg-[var(--color-surface-dark)] text-stone-950 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                        <ArrowUpRight size={14} strokeWidth={2.5} />
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
                  className="flex flex-col items-center justify-center py-16 space-y-5 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-accent/15 border-2 border-gold-accent flex items-center justify-center text-gold-accent shadow-xl">
                    <Check size={28} strokeWidth={3} />
                  </div>
                  <div className="space-y-2 max-w-sm">
                    <h3 className="text-2xl font-extrabold text-stone-900">Message Received!</h3>
                    <p className="text-stone-500 text-xs font-light leading-relaxed">
                      Thank you, <span className="font-bold text-stone-900">{formState.name}</span>. Our lead architect will review your request and connect with you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>

      {/* BOTTOM SECTION: regions — simple rounded city cards */}
      <div className="pt-16 sm:pt-20 text-left space-y-8 w-full">

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200/80">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2">
                <Compass size={16} className="text-gold-accent" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-stone-500">
                  OUR ACTIVE EXECUTION REGIONS
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Regions We <span className="text-gold-accent">Mostly Work In</span>
              </h3>
            </div>

            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-md">
              Active across these cities and regions.
            </p>
          </div>
        </div>

        {/* Simple rounded horizontal city cards */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-3">
            {locations.map((loc, i) => {
              const isActive = loc.id === selectedCityId;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedCityId(loc.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border font-mono text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[var(--color-surface-dark)] text-gold-accent border-stone-950 shadow-md"
                      : "bg-white text-stone-700 border-stone-200 hover:border-gold-accent/60 hover:text-stone-950"
                  }`}
                >
                  <MapPin size={14} className={isActive ? "text-gold-accent" : "text-stone-400"} />
                  <span>{loc.city}</span>
                  {loc.tag && (
                    <span
                      className={`text-[9px] font-mono font-extrabold px-1.5 py-0.5 rounded ${
                        loc.id === "mumbai" ? "bg-gold-accent text-stone-950" : "bg-stone-200 text-stone-800"
                      }`}
                    >
                      {loc.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}