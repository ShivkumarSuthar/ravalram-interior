"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MapPin, Compass, Hammer, Workflow, Sparkles, ArrowRight, ShieldCheck, Mail, Phone, Clock } from "lucide-react";

export default function CityClient({ city }) {
  const router = useRouter();

  const handleNavigate = (view) => {
    if (view === "home") {
      router.push("/");
    } else {
      router.push(`/${view}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

  return (
    <>
      <Header currentView="" setView={handleNavigate} />

      <main className="relative z-10 pt-[80px]">
        {/* Dynamic City Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
              alt={`Premium luxury interior design in ${formattedCity}`}
              className="w-full h-full object-cover opacity-20 filter brightness-[0.3]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-left space-y-6 py-20">
            <div className="inline-flex items-center space-x-2 text-[#c5a880] text-xs tracking-[0.25em] font-mono uppercase">
              <span>SUTHAR INTERIOR STUDIO</span>
              <span>/</span>
              <span>LOCATIONS</span>
              <span>/</span>
              <span className="font-bold">{formattedCity}</span>
            </div>

            <div className="space-y-4 max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-tight uppercase"
              >
                Top Interior Designer <br />
                <span className="font-serif italic text-[#c5a880] font-normal lowercase">in {formattedCity}</span>
              </motion.h1>
              
              <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl pt-2">
                Delivering architect-led luxury residential interiors, turnkey commercial design, and premium custom woodwork in {formattedCity} with three generations of family craftsmanship legacy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleNavigate("contact")}
                className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] hover:bg-[#b0936b] px-6 py-4 rounded-none cursor-pointer"
              >
                <span>Request {formattedCity} Survey</span>
                <div className="w-8 h-8 rounded-full border border-stone-950/10 bg-stone-950/5 flex items-center justify-center text-stone-950">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </button>

              <button
                onClick={() => handleNavigate("gallery")}
                className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-[#c5a880] hover:text-[#c5a880]"
              >
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Localized Details Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="inline-flex items-center space-x-2">
                  <span className="text-[#c5a880] text-xs">✦</span>
                  <span className="text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                    LOCAL SERVICES
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
                  Bespoke Design, <br />
                  <span className="font-serif italic text-[#c5a880] font-normal lowercase">Supervised</span> Locally.
                </h2>
                <div className="space-y-4 text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                  <p>
                    For our esteemed clients in <strong>{formattedCity}</strong>, we offer highly personalized, end-to-end design-build and contracting models. Our team of certified architects and master wooden artisans actively execute projects on-site to ensure uncompromising quality control.
                  </p>
                  <p>
                    Whether it's a coastal villa, luxury duplex penthouse, commercial office showroom, or custom modular kitchen installations, we bring the native woodworking precision of our 1989-founded guild straight to your location.
                  </p>
                </div>

                <div className="border-l-2 border-[#c5a880] pl-6 py-2 bg-stone-50/70 italic text-stone-800 text-sm rounded-r-lg">
                  &ldquo;Every Suthar space in {formattedCity} is treated like our flagship gallery—no compromised tolerances, completely authentic material cataloging, and transparent execution schedules.&rdquo;
                  <span className="block text-xs uppercase font-mono tracking-widest text-[#c5a880] font-bold not-italic mt-2">— Shivkumar Suthar, Co-Founder</span>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-stone-50 border border-stone-200/50 p-6 rounded-2xl text-left space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880]">
                    <Compass size={20} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">Architect Supervision</h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    Our lead architects directly monitor your site progress in {formattedCity} at every critical stage.
                  </p>
                </div>

                <div className="bg-stone-50 border border-stone-200/50 p-6 rounded-2xl text-left space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880]">
                    <Hammer size={20} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">Factory Joinery</h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    Custom modular furniture made with precision BWR marine plywood at our state-of-the-art facility and delivered flat-packed.
                  </p>
                </div>

                <div className="bg-stone-50 border border-stone-200/50 p-6 rounded-2xl text-left space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880]">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">100% Transparency</h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    Get fully broken-down, itemized estimates (BOQ) with exact material specifications. No hidden costs.
                  </p>
                </div>

                <div className="bg-stone-50 border border-stone-200/50 p-6 rounded-2xl text-left space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880]">
                    <Workflow size={20} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">Turnkey Execution</h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    Enjoy completely hassle-free handovers with all civil, plumbing, painting, false ceilings, and finishing managed under one contract.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beautiful Local Contact Info Bar */}
        <section className="py-16 bg-[#faf9f6] border-t border-b border-stone-200/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-[#c5a880] shrink-0">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-stone-400 font-mono text-[10px] tracking-widest block font-bold uppercase">TALK TO US</span>
                  <p className="text-base font-medium text-stone-950">+91 98200 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-[#c5a880] shrink-0">
                  <Mail size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-stone-400 font-mono text-[10px] tracking-widest block font-bold uppercase">EMAIL ENQUIRIES</span>
                  <p className="text-base font-medium text-stone-950">studio@sutharinterior.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-[#c5a880] shrink-0">
                  <Clock size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-stone-400 font-mono text-[10px] tracking-widest block font-bold uppercase">STUDIO SLA ASSURANCE</span>
                  <p className="text-base font-medium text-stone-950">Initial consult blueprint in 48h</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={handleNavigate} />
    </>
  );
}
