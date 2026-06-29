import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Hotel, Briefcase, Trees, ArrowRight, Shield, Check } from "lucide-react";
import bannerImg from "../assets/images/antra_lobby_banner_1782744283860.jpg";

export default function ServicesAndBanner() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Residential Interior Design",
      icon: Compass,
      description: "We craft custom sensory living spaces designed for elite relaxation. Our residential portfolio covers high-end estate planning, custom furniture drafting, lighting blueprints, and comprehensive room-by-room architectural coordination.",
      features: [
        "Full spatial custom remodeling layout",
        "Curated high-end material sourcing",
        "Bespoke dining and living room drafting",
        "Color psychology & acoustic design"
      ],
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
    },
    {
      id: 1,
      title: "Commercial Interior Design",
      icon: Hotel,
      description: "We optimize commercial flow, client impressions, and worker performance. Our commercial designs span luxury boutique hotel lobbies, high-profile executive suites, luxury showrooms, and private fine-dining rooms.",
      features: [
        "Brand identity spatial integration",
        "Advanced ergonomic floor layouts",
        "Acoustic and air-flow comfort maps",
        "Durable, luxury, code-compliant finishes"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
    },
    {
      id: 2,
      title: "Interior Design Consultation",
      icon: Briefcase,
      description: "Collaborate directly with our expert architectural consultants. We offer complete visual moodboarding, physical fabric and stone sampling sessions, furniture budgeting and sourcing plans, and on-site architectural audits.",
      features: [
        "Interactive material boarding sessions",
        "Comprehensive light field calculations",
        "Sourcing and procurement logs",
        "3D spatial volume renders"
      ],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
    },
    {
      id: 3,
      title: "Outdoor Landscape & Terraces",
      icon: Trees,
      description: "Extend architectural luxury beyond interior walls. We integrate indoor-outdoor living boundaries, including luxury pool deck plans, modern architectural courtyards, custom firepits, and native stone terrace layouts.",
      features: [
        "Indoor-outdoor transition structures",
        "Architectural pool decks & terraces",
        "Curated low-maintenance flora plans",
        "Outdoor lounge light layouts"
      ],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200"
    }
  ];

  return (
    <section id="services" className="bg-white py-24 md:py-32 overflow-hidden">
      {/* SECTION 1: INTERACTIVE SERVICES */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold block">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
            Explore Our Comprehensive <br />
            <span className="font-serif italic text-gold-500">Interior Design</span> Services
          </h2>
          <p className="text-stone-500 text-sm font-light">
            We don't just decorate rooms; we redesign how you experience spatial volume. Discover our bespoke service tiers tailored to your custom-lifestyle goals.
          </p>
        </div>

        {/* Tab Buttons & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`flex items-center space-x-4 p-5 md:p-6 text-left border cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? "bg-stone-900 border-stone-900 text-white shadow-xl"
                      : "bg-stone-50 border-stone-100 hover:border-gold-500/50 hover:bg-stone-100/50 text-stone-800"
                  }`}
                  id={`service-tab-${index}`}
                >
                  <div
                    className={`p-3 rounded-none transition-colors duration-300 ${
                      isActive ? "bg-gold-500 text-stone-950" : "bg-stone-200 text-stone-700 group-hover:bg-gold-500 group-hover:text-stone-950"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base tracking-wide leading-tight">
                      {service.title}
                    </h3>
                    <p className={`text-xs mt-1 transition-colors duration-300 ${isActive ? "text-stone-400" : "text-stone-500"}`}>
                      Explore Details
                    </p>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-0 top-0 h-full w-1 bg-gold-500"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Box */}
          <div className="lg:col-span-8 bg-stone-50 border border-stone-100 p-8 md:p-12 min-h-[480px] flex flex-col justify-between shadow-sm relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-gold-500 text-[10px] tracking-[0.25em] uppercase font-bold">
                      Interactive Showcase
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-stone-900 font-medium">
                      {services[activeService].title}
                    </h3>
                  </div>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">
                    {services[activeService].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-stone-900 text-xs tracking-widest uppercase font-bold">
                      Key Scope Accomplished:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {services[activeService].features.map((feat) => (
                        <div key={feat} className="flex items-center text-stone-600 text-xs">
                          <Check size={14} className="text-gold-500 mr-2 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-stone-900 text-white hover:bg-gold-500 hover:text-stone-950 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                    >
                      <span>Inquire service</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Cover Image */}
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* SECTION 2: FULL-WIDTH BANNER */}
      <div className="mt-32 relative h-[450px] md:h-[550px] overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImg}
            alt="Luxury Office Hotel Lobby Wide Banner"
            className="w-full h-full object-cover opacity-55 scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950" />
        </div>

        {/* Banner content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <span className="text-gold-500 text-xs md:text-sm tracking-[0.3em] uppercase font-bold block">
              Sensory Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-white leading-tight font-serif italic">
              Crafting Harmonious Environments
            </h2>
            <p className="text-stone-300 font-sans text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              We translate abstract lifestyle blueprints into physical, luxury, tactile masterpieces. 
              Each stone vein, lighting channel, and textile weave is selected to establish spatial balance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="pt-2"
          >
            <a
              href="#portfolio"
              className="px-8 py-3.5 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-stone-950 text-xs tracking-widest uppercase font-bold transition-all duration-300"
            >
              Examine Our Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
