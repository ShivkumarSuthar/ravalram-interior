import AppImage from "./AppImage";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Hammer,
  Workflow,
  History,
  Phone,
  ArrowUpRight,
  Layers,
  HelpCircle,
  ChevronDown,
  Building2,
  Home,
  Check,
  Award,
  Users
} from "lucide-react";

// Local asset imports
const coastalImg = "/images/antra_project_coastal_1782744299850.jpg";
const loftImg = "/images/antra_project_loft_1782744318019.jpg";
const transitionImg = "/images/antra_transition_luxury_1782747459033.jpg";
const aboutImg = "/images/antra_about_side_1782744266546.jpg";
const bannerImg = "/images/antra_lobby_banner_1782744283860.jpg";

export default function ServicesPage({ onBackToHome, onOpenQuote }) {
  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  const coreServices = [
    {
      id: "architecture-planning",
      title: "Architecture & Planning",
      description: "Architectural planning focused on functionality, aesthetics, and long-term value for residential and commercial projects. We design layout structures that frame light, maximize natural ventilation, and ensure structural intelligence.",
      features: [
        "Floor Planning",
        "Elevation Design",
        "Space Planning",
        "Working Drawings",
        "Architectural Consultation"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
      accent: "ARCHITECTURAL PLANNING"
    },
    {
      id: "residential-interior",
      title: "Residential Interior Design",
      description: "Elegant and personalized interiors designed around your lifestyle, comfort, and vision. From custom modular kitchens to exquisite master bedrooms, we select matching stone finishes, warm indirect lightning arrays, and hand-built millwork.",
      features: [
        "Living Rooms",
        "Bedrooms",
        "Kitchens",
        "Dining Areas",
        "Complete Home Interiors"
      ],
      image: coastalImg,
      accent: "CURATED HOMES"
    },
    {
      id: "commercial-interior",
      title: "Commercial & Office Interiors",
      description: "Functional and inspiring commercial environments designed to improve productivity, reflect your distinct brand culture, and create memorable client-facing interactions and layouts.",
      features: [
        "Offices",
        "Retail Stores",
        "Showrooms",
        "Restaurants",
        "Commercial Buildings"
      ],
      image: transitionImg,
      accent: "PRODUCTIVE SPACES"
    },
    {
      id: "custom-furniture",
      title: "Custom Furniture Manufacturing",
      description: "Precision-crafted furniture designed specifically for your space using carefully selected premium hardwoods, luxury laminates, durable edge-bandings, and soft-close German hardware.",
      features: [
        "Modular Kitchens",
        "Wardrobes",
        "TV Units",
        "Office Furniture",
        "Storage Solutions",
        "Beds",
        "Reception Counters"
      ],
      image: loftImg,
      accent: "HERITAGE JOINERY"
    },
    {
      id: "renovation-remodeling",
      title: "Renovation & Remodeling",
      description: "Transforming existing vintage layouts or worn spaces into modern, functional, and aesthetically superior environments while preserving their structural character and warmth where desired.",
      features: [
        "Home Renovation",
        "Office Renovation",
        "Interior Upgrades",
        "Space Transformation"
      ],
      image: aboutImg,
      accent: "STRUCTURAL RENEWAL"
    },
    {
      id: "turnkey-execution",
      title: "Turnkey Interior Execution",
      description: "A complete end-to-end master solution where our studio manages everything. We oversee blueprint planning, direct material procurement, custom on-site fabrication, electrical mapping, painting, and flawless handover.",
      features: [
        "Project Planning",
        "Material Procurement",
        "Furniture Installation",
        "Painting",
        "Electrical",
        "Quality Inspection"
      ],
      image: bannerImg,
      accent: "COMPLETE CONTRACTING"
    }
  ];

  const executionModels = [
    { title: "Labour Only", desc: "You procure raw materials; our skilled carpenters and craftsmen execute the blueprints flawlessly." },
    { title: "Labour + Materials", desc: "Transparent, certified material sourcing combined with experienced structural execution." },
    { title: "Complete Turnkey", desc: "End-to-end peace of mind. We take full accountability from initial design to key handover." },
    { title: "Furniture Only", desc: "Custom furniture manufacturing at our workshop, delivered and assembled at your location." },
    { title: "Material Selection", desc: "Guidance through marble yards, plywood tests, hardware selections, and premium veneers." },
    { title: "Architect Supervision", desc: "Regular site audits by our experienced architects to ensure construction matches plans." }
  ];

  const processSteps = [
    { num: "01", name: "Consultation", desc: "Discussing ideas, goals, and budget." },
    { num: "02", name: "Site Visit", desc: "Detailed laser measurements." },
    { num: "03", name: "Design", desc: "2D plans and photorealistic 3D CGI." },
    { num: "04", name: "Material Selection", desc: "Choosing veneer, stone, and metals." },
    { num: "05", name: "Furniture Manufacturing", desc: "Precision factory woodworking." },
    { num: "06", name: "Execution", desc: "On-site civil, plumbing, & joinery." },
    { num: "07", name: "Quality Check", desc: "Multi-point millimeter validation." },
    { num: "08", name: "Handover", desc: "Deep cleaning and unified key handoff." }
  ];

  const whyChooseUs = [
    { title: "Family Craftsmanship Since 1989", desc: "Over three decades of trust and high-quality woodwork heritage.", icon: History },
    { title: "Architect Guided Projects", desc: "Every project is supervised and verified by certified architects.", icon: Compass },
    { title: "Experienced Team", desc: "Highly skilled supervisors, carpenters, and civil engineers on site.", icon: Users },
    { title: "Customized Designs", desc: "Unique layouts tailored exactly to your lifestyle and visual memory.", icon: Sparkles },
    { title: "Transparent Pricing", desc: "No hidden layers, fair bill of quantities, and honest guidance.", icon: ShieldCheck },
    { title: "Premium Workmanship", desc: "Exquisite finishes, flawless joints, and structural durability.", icon: Award }
  ];

  const industries = [
    { name: "Residential", count: "01" },
    { name: "Commercial", count: "02" },
    { name: "Corporate Offices", count: "03" },
    { name: "Hospitality", count: "04" },
    { name: "Retail", count: "05" },
    { name: "Industrial", count: "06" },
    { name: "Educational", count: "07" },
    { name: "Healthcare", count: "08" }
  ];

  const cities = [
    { name: "Mumbai", detail: "Luxury turnkey homes and premium offices." },
    { name: "Pune", detail: "Contemporary custom flats and design consultations." },
    { name: "Goa", detail: "Exquisite coastal villas and hospitality projects." },
    { name: "Bengaluru", detail: "Modern smart homes and architectural space plans." },
    { name: "Hyderabad", detail: "Custom furniture layouts and residential execution." },
    { name: "Hubballi", detail: "End-to-end renovations and modular cabinetry." },
    { name: "Kumta", detail: "Our native carpentry hub with traditional wood roots." },
    { name: "Honnavar", detail: "Bespoke private bungalows and space upgrades." },
    { name: "Murudeshwar", detail: "Scenic commercial stores and custom homes." },
    { name: "Nearby Regions", detail: "Other cities based on scope and blueprint size." }
  ];

  const faqs = [
    {
      q: "Can I hire only for furniture?",
      a: "Yes. Suthar Interior Studio operates a state-of-the-art modular furniture and joinery workshop. We can manufacture, deliver, and install custom wardrobes, kitchens, TV units, and loose furniture based on your design drawings."
    },
    {
      q: "Do you provide labour-only services?",
      a: "Yes, we do. If you have already purchased your materials or prefer to manage procurement yourself, we can provide our highly skilled team of carpenters, painters, and civil supervisors on a labour-only contractual basis."
    },
    {
      q: "Can I choose my own materials?",
      a: "Absolutely. We encourage material transparency. Our team can guide you to trusted wholesalers for timber, premium plywood, natural stone, and hardware, allowing you to choose exactly what fits your budget and aesthetic tastes."
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines depend heavily on scope. A modular custom kitchen or single bedroom takes about 3 to 4 weeks. A full 3BHK home interior from design approval to final handover takes between 60 to 90 working days."
    },
    {
      q: "Do you provide site visits?",
      a: "Yes. We offer site visits. Our architects and supervisors visit your site to capture high-precision laser measurements, evaluate existing structural health, and check electrical/plumbing lines before generating 2D layout drafts."
    },
    {
      q: "Do you charge separately for architectural layouts?",
      a: "For clients looking only for design, we offer standalone 2D floor plans, electrical routing blueprints, and 3D CGI photorealistic rendering services at a competitive per-square-foot design fee. For turnkey execution clients, basic layout fees are adjusted into the execution contract."
    },
    {
      q: "Is there a warranty on Suthar custom furniture?",
      a: "Yes. All our modular kitchen cabinets, custom wardrobes, and built-in fixtures come with up to a 5-year warranty against manufacturing defects, termite resistance, and hardware malfunctions (subject to chosen materials and brands)."
    },
    {
      q: "How does the payment structure work?",
      a: "We work on a milestone-based payment plan. For a typical turnkey project: 10% on design booking, 40% before starting material procurement and factory manufacturing, 40% during on-site civil and wood installation, and 10% prior to final keys handover."
    }
  ];

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-[#c5a880]/30 selection:text-stone-950 pt-[80px]">
      
      {/* PAGE HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
        {/* Full width premium background image */}
        <div className="absolute inset-0 z-0">
          <AppImage
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
            alt="Luxurious spatial architecture Suthar Studio"
            className="w-full h-full object-cover opacity-25 filter brightness-[0.3] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        </div>

        {/* Blueprint line design */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-left space-y-8 py-20">
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
            <button onClick={onBackToHome} className="hover:text-[#c5a880] transition-colors cursor-pointer">HOME</button>
            <span>/</span>
            <span className="text-[#c5a880] font-bold">SERVICES</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="text-[#c5a880] text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              OUR SERVICES
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-tight uppercase"
            >
              Complete Interior & <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Architectural</span> Solutions.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl pt-2"
            >
              From architectural planning and interior design to custom furniture manufacturing and turnkey execution, Suthar Interior Studio provides complete solutions tailored to your lifestyle, business, and budget.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] hover:bg-[#b0936b] px-6 py-4 rounded-none cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/10 bg-stone-950/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={onBackToHome}
              className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-[#c5a880] hover:text-[#c5a880]"
            >
              View Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 01: INTRODUCTION */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="text-[#c5a880] text-xs">✦</span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                  INTRODUCTION
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
                Everything You Need. <br />
                <span className="font-serif italic text-[#c5a880] font-normal lowercase">Under One</span> Roof.
              </h2>
            </div>

            <div className="lg:col-span-7 text-left border-l-2 border-[#c5a880] pl-6 lg:pl-10">
              <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
                We believe every successful project begins with thoughtful planning and ends with exceptional craftsmanship. Our experienced architects, designers, and skilled craftsmen work together to provide complete solutions from concept to completion.
              </p>
              <p className="text-stone-400 text-xs font-mono tracking-widest mt-4 uppercase">
                Est. 1989 &bull; Traditional values &bull; Modern layouts
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: OUR CORE SERVICES */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[#c5a880] text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              DETAILED SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 uppercase">
              Our Core <span className="font-serif italic text-[#c5a880] font-normal lowercase">Creative</span> Offerings
            </h2>
          </div>

          {coreServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Large Service Image */}
                <div className={`lg:col-span-6 relative ${isEven ? "" : "lg:order-2"}`}>
                  <div className="relative bg-white border border-stone-200/50 p-4 rounded-3xl shadow-xl overflow-hidden group">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
                      <AppImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-[1.2s]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Decorative hover overlay tag */}
                    <div className="absolute top-8 left-8 bg-stone-900 text-white font-mono text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">
                      {service.accent}
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className={`lg:col-span-6 text-left space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <span className="text-[#c5a880] text-xs font-mono font-bold tracking-[0.2em] uppercase block">
                    0{index + 1} &bull; {service.accent}
                  </span>
                  
                  <h3 className="text-2xl md:text-4xl font-light text-stone-950 uppercase tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono font-bold block">
                      KEY CAPABILITIES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-stone-800">
                          <CheckCircle2 size={14} className="text-[#c5a880] shrink-0" />
                          <span className="text-xs sm:text-sm font-light font-sans">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 border-b-2 border-stone-900 hover:border-[#c5a880] hover:text-[#c5a880] pb-1 cursor-pointer"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* SECTION 03: OUR EXECUTION MODELS */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-[#c5a880] text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              FLEXIBLE EXECUTION MODELS
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 uppercase">
              How We <span className="font-serif italic text-[#c5a880] font-normal lowercase">Work With</span> You
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
              We offer multiple execution contracting formats to match your specific procurement comfort, budget control, and project stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {executionModels.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-[#faf9f6] border border-stone-200/50 hover:border-[#c5a880]/30 hover:shadow-xl hover:-translate-y-1 p-6 md:p-8 rounded-2xl text-left space-y-4 transition-all duration-500 group"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-stone-200/30 text-[#c5a880] font-mono font-bold text-xs shadow-sm">
                  0{idx + 1}
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-950 group-hover:text-[#c5a880] transition-colors duration-300">
                    {model.title}
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 04: OUR PROCESS (PREMIUM RESPONSIVE TIMELINE) */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-[#c5a880] text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              WORKFLOW PIPELINE
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 uppercase">
              Our Design &amp; <span className="font-serif italic text-[#c5a880] font-normal lowercase">Execution</span> Process
            </h2>
            <p className="text-stone-500 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-2">
              From the initial introductory conversation to handing over the physical keys, we maintain rigorous milestones.
            </p>
          </div>

          {/* Timeline Grid (Horizontal on lg+, vertical/grid on mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-2 relative pt-8">
            
            {/* Horizontal Line connector (Visible on lg screens only) */}
            <div className="absolute top-[52px] left-8 right-8 h-[1px] bg-stone-200 pointer-events-none hidden lg:block" />

            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white border border-stone-200/50 p-4 rounded-xl text-center flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all duration-300 relative group z-10"
              >
                {/* Visual node on timeline */}
                <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center font-mono font-bold text-xs text-[#c5a880] mx-auto group-hover:bg-[#c5a880] group-hover:text-stone-900 transition-colors duration-300">
                  {step.num}
                </div>
                
                <div className="space-y-1 flex-grow">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-tight line-clamp-1">
                    {step.name}
                  </h4>
                  <p className="text-[10px] text-stone-400 font-light leading-tight">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 05: WHY CHOOSE SUTHAR INTERIOR STUDIO */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-[#c5a880] text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 uppercase">
              Why Clients <span className="font-serif italic text-[#c5a880] font-normal lowercase">Trust</span> Suthar Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="bg-stone-50 border border-stone-100 hover:bg-white hover:border-[#c5a880]/30 hover:shadow-xl rounded-2xl p-6 md:p-8 text-left space-y-4 transition-all duration-500 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/50 flex items-center justify-center text-[#c5a880] group-hover:bg-[#c5a880]/10 transition-colors duration-500 shadow-sm">
                    <Icon size={18} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-950 group-hover:text-[#c5a880] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 06: INDUSTRIES WE SERVE */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(197,168,128,0.08),_transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-left max-w-3xl mb-16 md:mb-20 space-y-4">
            <span className="text-[#c5a880] text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              OUR SPATIAL DIVERSITY
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase">
              Industries <span className="font-serif italic text-[#c5a880] font-normal lowercase">We</span> Serve
            </h2>
            <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed">
              Our architects and carpenters are trained to adapt to specific residential codes, corporate fire regulations, retail circulation standards, and robust commercial acoustic requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-[#c5a880]/40 transition-all duration-300 text-left relative group cursor-default"
              >
                <div className="text-stone-500 font-mono text-[10px] group-hover:text-[#c5a880] transition-colors block mb-4">
                  {ind.count}
                </div>
                <h4 className="text-sm sm:text-base font-serif font-light tracking-wide text-white group-hover:text-[#c5a880] transition-colors">
                  {ind.name}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 07: SERVICE AREAS */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
            <span className="text-[#c5a880] text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              REGIONAL OPERATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 uppercase">
              Service <span className="font-serif italic text-[#c5a880] font-normal lowercase">Areas &amp;</span> Locations
            </h2>
            <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
              We travel directly to verify custom measurements, supervise carpentry mockups, and run turnkey handovers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/50 p-6 rounded-xl text-left hover:shadow-xl hover:border-[#c5a880]/30 transition-all duration-500 group relative"
              >
                <div className="absolute top-6 right-6 text-[#c5a880] opacity-40 group-hover:opacity-100 transition-opacity">
                  <MapPin size={16} />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-medium text-stone-950 group-hover:text-[#c5a880] transition-colors duration-300 mb-2">
                  {city.name}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                  {city.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 08: FAQ (8-10 SERVICE SPECIFIC COLLAPSIBLE PANEL ACCORDIONS) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
            <span className="text-[#c5a880] text-xs tracking-[0.25em] font-mono font-bold uppercase block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 uppercase">
              Service <span className="font-serif italic text-[#c5a880] font-normal lowercase">Insights &amp;</span> FAQ
            </h2>
          </div>

          {/* Accordion Panels */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-stone-50 border border-stone-200/40 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-stone-900 group-hover:text-[#c5a880] transition-colors">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-stone-400 group-hover:text-[#c5a880] shrink-0 ml-4"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm font-light text-stone-600 leading-relaxed border-t border-stone-200/30 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 bg-stone-950 text-white">
        <div className="absolute inset-0 z-0">
          <AppImage
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
            alt="Magnificent spatial architecture Suthar Studio final"
            className="w-full h-full object-cover opacity-20 filter brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-stone-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="text-[#c5a880] text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              LET'S START YOUR JOURNEY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-tight uppercase">
              Let's Build Your <span className="font-serif italic text-[#c5a880] font-normal lowercase">Dream</span> Space.
            </h2>
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-2">
              Whether you're planning a home, office, renovation, or custom furniture project, our team is ready to create spaces that combine thoughtful design with exceptional craftsmanship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] px-8 py-5 rounded-full cursor-pointer shadow-xl"
            >
              <span>Book Free Consultation</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-white/5 backdrop-blur-md cursor-pointer hover:border-[#c5a880] hover:text-[#c5a880]"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
