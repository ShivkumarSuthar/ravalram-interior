import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Compass,
  Check,
  Globe
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

  // Active execution regions with interactive coordinates & details
  const locations = [
    {
      id: "mumbai",
      city: "Mumbai",
      role: "Flagship Showroom & HQ",
      address: "Linking Road, Santacruz West, Mumbai, Maharashtra 400054",
      phone: "+91 98200 12345",
      projects: "Sea-Facing Penthouse, Luxury Villas, Corporate HQs",
      coords: { top: "48%", left: "28%" },
      mapQuery: "Linking+Road+Santacruz+West+Mumbai"
    },
    {
      id: "pune",
      city: "Pune",
      role: "Design & Renovation Studio",
      address: "Koregaon Park, Lane 7, Pune, Maharashtra 411001",
      phone: "+91 98200 54321",
      projects: "Contemporary Duplexes, High-End Apartment Interiors",
      coords: { top: "52%", left: "32%" },
      mapQuery: "Koregaon+Park+Pune"
    },
    {
      id: "goa",
      city: "Goa",
      role: "Coastal Estate & Hospitality Guild",
      address: "Fontainhas Heritage Quarter, Panaji, Goa 403001",
      phone: "+91 98200 98765",
      projects: "Beachfront Villas, Heritage Bungalow Upgrades",
      coords: { top: "68%", left: "30%" },
      mapQuery: "Panaji+Goa"
    },
    {
      id: "bengaluru",
      city: "Bengaluru",
      role: "Architecture & Smart Residence Hub",
      address: "100ft Road, Indiranagar, Bengaluru, Karnataka 560038",
      phone: "+91 98200 22334",
      projects: "Smart Residences, Executive Office Spaces",
      coords: { top: "72%", left: "42%" },
      mapQuery: "Indiranagar+Bengaluru"
    },
    {
      id: "hyderabad",
      city: "Hyderabad",
      role: "Bespoke Joinery & Villa Desk",
      address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
      phone: "+91 98200 66778",
      projects: "Custom Timber Wardrobes, Grand Residential Suites",
      coords: { top: "58%", left: "48%" },
      mapQuery: "Jubilee+Hills+Hyderabad"
    },
    {
      id: "hubballi",
      city: "Hubballi",
      role: "Turnkey Commercial Desk",
      address: "Airport Road, Hubballi, Karnataka 580030",
      phone: "+91 98200 88990",
      projects: "Retail Flagships, Turnkey Commercial Stores",
      coords: { top: "64%", left: "35%" },
      mapQuery: "Airport+Road+Hubballi"
    },
    {
      id: "kumta",
      city: "Kumta",
      role: "Heritage Woodworking Workshop & Guild Roots",
      address: "Main Road Timber Yard, Kumta, Uttara Kannada, Karnataka 581343",
      phone: "+91 98200 11223",
      projects: "Master Timber Fabrication, Direct Workshop Production since 1989",
      coords: { top: "66%", left: "32%" },
      mapQuery: "Kumta+Uttara+Kannada"
    },
    {
      id: "honnavar",
      city: "Honnavar",
      role: "Coastal Bungalow Guild",
      address: "Sharavathi Bridge Road, Honnavar, Karnataka 581334",
      phone: "+91 98200 33445",
      projects: "Bespoke Coastal Private Bungalows, Weather-Proof Woodwork",
      coords: { top: "67%", left: "33%" },
      mapQuery: "Honnavar+Karnataka"
    },
    {
      id: "murudeshwar",
      city: "Murudeshwar",
      role: "Hospitality & Retail Guild",
      address: "Temple Main Highway, Murudeshwar, Karnataka 581350",
      phone: "+91 98200 44556",
      projects: "Resort Outlets, Traditional Timber Elevation Works",
      coords: { top: "68%", left: "33.5%" },
      mapQuery: "Murudeshwar+Karnataka"
    }
  ];

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
              <p className="text-[11px] text-stone-300 font-light leading-relaxed">
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
                      <div className="w-8 h-8 rounded-full bg-gold-accent group-hover:bg-stone-950 text-stone-950 group-hover:text-white flex items-center justify-center transition-colors duration-300">
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

      {/* BOTTOM SECTION: FULL-WIDTH INTERACTIVE GOOGLE MAP & EXECUTION LOCATIONS */}
      <div className="pt-16 sm:pt-20 text-left space-y-6 w-full">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2">
                <Globe size={16} className="text-gold-accent" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-stone-500">
                  OUR ACTIVE EXECUTION REGIONS
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Regions We <span className="text-gold-accent">Mostly Work In</span>
              </h3>
            </div>

            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-md">
              Architect-supervised turnkey project desks, heritage workshop guilds, and spatial installations across India.
            </p>
          </div>
        </div>

        {/* FULL-WIDTH GRAYSCALE MAP CONTAINER SHOWING ALL LOCATIONS */}
        <div className="w-full relative h-[420px] sm:h-[500px] md:h-[560px] bg-stone-200 border-y border-stone-200/80 shadow-inner overflow-hidden mt-4">
          <iframe
            title="Suthar Interior Studio Service Regions Map"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) contrast(1.05) brightness(0.95)" }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Mumbai,+Pune,+Goa,+Bengaluru,+Hyderabad,+Karnataka,+India&t=&z=6&ie=UTF8&iwloc=&output=embed"
          />

          {/* Floating Studio Footprint Badge (Top-Left) */}
          <div className="absolute top-6 left-6 sm:left-12 z-10 bg-stone-900/90 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl border border-white/20 shadow-2xl flex items-center space-x-3.5 max-w-xs sm:max-w-md">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-accent animate-pulse shrink-0" />
            <div className="text-left space-y-0.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-accent block">
                OPERATIONAL FOOTPRINT • ALL REGIONS
              </span>
              <p className="text-xs font-extrabold text-white truncate">
                Mumbai, Pune, Goa, Bengaluru, Hyderabad &amp; Coastal Karnataka
              </p>
              <p className="text-[11px] font-mono text-stone-300 truncate">
                Central Showroom: Santacruz West, Mumbai | Workshop: Kumta, KA
              </p>
            </div>
          </div>

          {/* Quick Direction Button (Top-Right) */}
          <a
            href="https://maps.google.com/maps?q=Mumbai,+Pune,+Goa,+Bengaluru,+Hyderabad,+Karnataka,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 sm:right-12 z-10 bg-white/95 hover:bg-[#0c0a09] hover:text-white backdrop-blur-md text-stone-900 px-4 py-2.5 rounded-full border border-stone-300 hover:border-stone-900 shadow-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2 transition-all duration-300"
          >
            <span className="hidden sm:inline">Open Regional Map</span>
            <span className="sm:hidden">Map</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Clean Location Names Text at the Bottom */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-2">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono font-bold text-stone-800 uppercase tracking-wider text-center">
            {locations.map((loc, idx) => (
              <span key={loc.id} className="inline-flex items-center space-x-1.5">
                <MapPin size={13} className="text-gold-accent shrink-0" />
                <span>{loc.city}</span>
                {idx < locations.length - 1 && (
                  <span className="text-stone-300 font-normal ml-2.5">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
