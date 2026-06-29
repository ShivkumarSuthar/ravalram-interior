import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Paintbrush, ArrowRight, ShieldCheck, CheckCircle, Ruler, Layers, Sparkles, Sliders, Briefcase, ChevronRight } from "lucide-react";

// Local asset imports
import coastalImg from "../assets/images/antra_project_coastal_1782744299850.jpg";
import loftImg from "../assets/images/antra_project_loft_1782744318019.jpg";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";
import aboutImg from "../assets/images/antra_about_side_1782744266546.jpg";
import bannerImg from "../assets/images/antra_lobby_banner_1782744283860.jpg";

const servicesList = [
  {
    id: "designer",
    title: "Interior Designer",
    subtitle: "Aesthetic Curation & Architectural Vision",
    icon: Paintbrush,
    heroImage: transitionImg,
    tagline: "Translating lifestyle habits into durable, quiet luxury spatial masterpieces.",
    description: "Our interior design practice deals with the poetic structure of space. We translate your habits, visual memories, and lifestyle demands into elegant physical layouts that optimize light, sound, and comfort.",
    features: [
      { title: "Bespoke Material Swatchboards", desc: "Selecting rare Italian travertines, unpolished slates, solid European oaks, and hand-dyed organic linens." },
      { title: "Luminous Drama & Indirect Lighting", desc: "Crafting customized linear lux-channels and warm recessed micro-fields that shift atmospheric mood naturally." },
      { title: "Custom Furniture & Millwork Drafts", desc: "Designing hand-sketched walk-in libraries, fluted kitchen islands, and ergonomic master suites tailored to you." },
      { title: "Visual & Spatial Ergonomics", desc: "Evaluating window sightline vectors, ambient shadow-zones, and pathways to ensure open volume flow." }
    ]
  },
  {
    id: "contractor",
    title: "Interior Contractor",
    subtitle: "Structural Implementation & Site Engineering",
    icon: Hammer,
    heroImage: loftImg,
    tagline: "Executing complex blueprints with structural integrity and military-grade precision.",
    description: "As certified interior contractors, we bridge the gap between creative blueprints and actual physical construction. We manage the heavy-duty execution, certified site engineering, material procurement, and sub-trade supervision.",
    features: [
      { title: "Structural Conversions & Partitioning", desc: "Load-bearing partition removals, ceiling re-leveling, double-height warehouse conversions, and acoustic drywalls." },
      { title: "Premium Fit-Outs & MEP Integration", desc: "Flawless mechanical, electrical, and plumbing routing alongside custom solid-surface and brass fixture mounting." },
      { title: "Master Carpentry & Sourcing Protocols", desc: "On-site joinery, premium crown modeling, and installation of curated lumber with millimeter-level tolerances." },
      { title: "Turnkey Project Management & Compliance", desc: "Handling local municipal permits, engineering certifications, rigorous quality audits, and guaranteed handovers." }
    ]
  },
  {
    id: "layouts",
    title: "Interior 2D & 3D Layouts",
    subtitle: "Precision CAD Planning & Immersive CGI Renderings",
    icon: Ruler,
    heroImage: aboutImg,
    tagline: "Iterating spatial blueprints in absolute virtual fidelity before laying the first stone.",
    description: "We provide professional spatial layout optimization, high-fidelity CAD drafting, and hyper-realistic 3D walkthroughs. This ensures perfect alignment on furniture placement, structural clearances, and lighting simulations prior to construction.",
    features: [
      { title: "CAD Space Optimization", desc: "Optimizing spatial clearances, walkway dimensions, and door/drawer trajectories down to the millimeter." },
      { title: "Photorealistic CGI Renderings", desc: "Simulating authentic fabric shaders, natural daylight exposure, and accurate product models in high-definition." },
      { title: "Structural 2D Blueprinting", desc: "Drafting detailed electrical outlet mapping, plumbing runs, and precise mechanical elevations for contractor reference." },
      { title: "Immersive 3D Walkthroughs", desc: "Virtual reality-ready interior walkthrough tours allowing clients to experience the spatial volume from every corner." }
    ]
  }
];

export default function ServicesPage({ onBackToHome, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState("designer"); // "designer" | "contractor" | "layouts"

  useEffect(() => {
    const handleTabChange = (e) => {
      if (e && e.detail && e.detail.tab) {
        setActiveTab(e.detail.tab);
      }
    };
    window.addEventListener("services-tab-change", handleTabChange);
    return () => {
      window.removeEventListener("services-tab-change", handleTabChange);
    };
  }, []);

  const currentService = servicesList.find((s) => s.id === activeTab) || servicesList[0];
  const IconComponent = currentService.icon;

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-gold-500 selection:text-stone-950 pt-[80px]">
      
      {/* 1. HERO BREADCRUMB HEADER */}
      <section className="relative h-[40vh] md:h-[50vh] bg-stone-950 text-white flex flex-col justify-center overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImg}
            alt="Services Banner Background"
            className="w-full h-full object-cover opacity-20 filter saturate-125 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-stone-950/45" />
        </div>

        {/* Technical drafting gridlines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-center md:text-left space-y-4">
          {/* Breadcrumb path */}
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
            <button onClick={onBackToHome} className="hover:text-gold-500 transition-colors cursor-pointer">HOME</button>
            <span>/</span>
            <span className="text-gold-500 font-bold">SERVICES & SOLUTION</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white leading-none uppercase"
          >
            Our <span className="font-serif italic text-gold-500 font-normal">Expertise</span> & Roles
          </motion.h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
            Co-creating spatial elegance. We offer high-contrast aesthetic Interior Design, robust turnkey Interior Contracting, and high-fidelity 2D & 3D Layout solutions.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE SERVICE SWITCHER SECTION */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Top Selection Tabs */}
          <div className="flex flex-col md:flex-row items-stretch justify-center border-b border-stone-200 mb-16 md:mb-24 max-w-5xl mx-auto bg-[#faf9f6] p-2 rounded-2xl shadow-inner gap-2">
            
            {/* Interior Designer Tab Button */}
            <button
              onClick={() => setActiveTab("designer")}
              className={`flex-1 flex items-center justify-center space-x-3 py-5 px-6 rounded-xl transition-all duration-300 text-left cursor-pointer focus:outline-none ${
                activeTab === "designer"
                  ? "bg-stone-900 text-white shadow-lg"
                  : "hover:bg-stone-200/50 text-stone-600"
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === "designer" ? "bg-gold-500 text-stone-950" : "bg-stone-200 text-stone-800"}`}>
                <Paintbrush size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-bold block leading-none mb-1">INTERIOR DESIGNER</span>
                <span className={`text-[10px] font-light leading-none ${activeTab === "designer" ? "text-stone-300" : "text-stone-500"}`}>
                  Aesthetics & Curation
                </span>
              </div>
            </button>

            {/* Interior Contractor Tab Button */}
            <button
              onClick={() => setActiveTab("contractor")}
              className={`flex-1 flex items-center justify-center space-x-3 py-5 px-6 rounded-xl transition-all duration-300 text-left cursor-pointer focus:outline-none ${
                activeTab === "contractor"
                  ? "bg-stone-900 text-white shadow-lg"
                  : "hover:bg-stone-200/50 text-stone-600"
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === "contractor" ? "bg-gold-500 text-stone-950" : "bg-stone-200 text-stone-800"}`}>
                <Hammer size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-bold block leading-none mb-1">INTERIOR CONTRACTOR</span>
                <span className={`text-[10px] font-light leading-none ${activeTab === "contractor" ? "text-stone-300" : "text-stone-500"}`}>
                  Implementation & MEP
                </span>
              </div>
            </button>

            {/* Interior 2D & 3D Layouts Tab Button */}
            <button
              onClick={() => setActiveTab("layouts")}
              className={`flex-1 flex items-center justify-center space-x-3 py-5 px-6 rounded-xl transition-all duration-300 text-left cursor-pointer focus:outline-none ${
                activeTab === "layouts"
                  ? "bg-stone-900 text-white shadow-lg"
                  : "hover:bg-stone-200/50 text-stone-600"
              }`}
            >
              <div className={`p-2 rounded-lg ${activeTab === "layouts" ? "bg-gold-500 text-stone-950" : "bg-stone-200 text-stone-800"}`}>
                <Ruler size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-bold block leading-none mb-1">2D & 3D LAYOUTS</span>
                <span className={`text-[10px] font-light leading-none ${activeTab === "layouts" ? "text-stone-300" : "text-stone-500"}`}>
                  CAD & Virtual CGI
                </span>
              </div>
            </button>

          </div>

          {/* Dynamic Content Frame with Smooth Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              
              {/* Left Column: Visual presentation card */}
              <div className="lg:col-span-5 relative">
                <div className="relative bg-white border border-stone-200 p-4 rounded-3xl shadow-2xl overflow-hidden group">
                  <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-stone-100">
                    <img
                      src={currentService.heroImage}
                      alt={currentService.title}
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Decorative badge overlay */}
                  <div className="absolute top-8 left-8 bg-gold-500 text-stone-950 font-mono text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-lg">
                    {activeTab === "designer" ? "CONCEPT DEVELOPMENT" : activeTab === "contractor" ? "HEAVY ENGINEERING" : "CGI VISUALIZATION"}
                  </div>
                </div>

                {/* Grid dots background pattern */}
                <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 opacity-10 select-none pointer-events-none z-[-1] hidden sm:block bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              {/* Right Column: Descriptions & Detailed Features checklist */}
              <div className="lg:col-span-7 text-left space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 text-gold-500">
                    <IconComponent size={18} />
                    <span className="text-[10px] tracking-[0.25em] font-mono uppercase font-bold">{currentService.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                    We Act As Your <br />
                    <span className="font-serif italic text-gold-500 font-normal">{currentService.title}</span>
                  </h2>
                  <p className="text-stone-800 font-medium text-sm md:text-base border-l-2 border-gold-500 pl-4 italic">
                    &ldquo;{currentService.tagline}&rdquo;
                  </p>
                  <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Bullet Points Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-stone-100">
                  {currentService.features.map((feat) => (
                    <div key={feat.title} className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-gold-500 shrink-0" />
                        <h4 className="text-xs uppercase tracking-wider text-stone-900 font-bold">
                          {feat.title}
                        </h4>
                      </div>
                      <p className="text-stone-500 text-[11px] leading-relaxed font-light pl-6">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Call-to-action button */}
                <div className="pt-6">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center space-x-4 bg-stone-950 hover:bg-gold-500 hover:text-stone-950 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded transition-all duration-300 shadow-xl group cursor-pointer"
                  >
                    <span>Request This Role</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* 3. CONTRACTOR METRICS & STANDARDS */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
            
            {/* Standard 1 */}
            <div className="space-y-4 border-l border-stone-800 pl-6">
              <span className="text-gold-500 text-xs font-mono font-bold tracking-widest block">01 / SAFETY COMPLIANCE</span>
              <h3 className="text-lg font-serif font-semibold">100% Secure Auditing</h3>
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                All of our contracted works comply strictly with municipal construction regulations and OSHA worker safety standards, securing premium insurance protocols.
              </p>
            </div>

            {/* Standard 2 */}
            <div className="space-y-4 border-l border-stone-800 pl-6">
              <span className="text-gold-500 text-xs font-mono font-bold tracking-widest block">02 / MATERIAL STEWARDSHIP</span>
              <h3 className="text-lg font-serif font-semibold">Rare Travertine Sourcing</h3>
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                We manage supply chain routes directly to Italy and Germany, assuring raw stones are cut to our precise dimensions without third-party logistics markup.
              </p>
            </div>

            {/* Standard 3 */}
            <div className="space-y-4 border-l border-stone-800 pl-6">
              <span className="text-gold-500 text-xs font-mono font-bold tracking-widest block">03 / MILLIMETER FIDELITY</span>
              <h3 className="text-lg font-serif font-semibold">Millwork Precision</h3>
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                We use high-frequency laser measurements and 3D architectural scanning to guarantee that fabricated furniture slides into structural pockets with perfect tolerance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WORKFLOW PIPELINE IN BRIEF */}
      <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="text-gold-500 text-xs">✦</span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                CO-CREATIVE STEPS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
              Our Design &amp; <br />
              <span className="font-serif italic text-gold-500 font-normal">Construction Pipeline</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white border border-stone-200/60 p-6 rounded-2xl relative text-left">
              <div className="absolute top-4 right-4 text-3xl font-serif text-stone-100 font-black">01</div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-gold-500 font-bold block mb-2">PHASE ONE</span>
              <h4 className="text-sm uppercase tracking-wide text-stone-900 font-bold mb-2">Discovery Consultation</h4>
              <p className="text-stone-500 text-[11px] font-light leading-relaxed">
                Defining the spatial limits, architectural goals, budget bounds, and primary aesthetic references.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-stone-200/60 p-6 rounded-2xl relative text-left">
              <div className="absolute top-4 right-4 text-3xl font-serif text-stone-100 font-black">02</div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-gold-500 font-bold block mb-2">PHASE TWO</span>
              <h4 className="text-sm uppercase tracking-wide text-stone-900 font-bold mb-2">Blueprint Visualization</h4>
              <p className="text-stone-500 text-[11px] font-light leading-relaxed">
                Rendering detailed photorealistic 3D mockups showcasing authentic lighting layouts and chosen material swatches.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-stone-200/60 p-6 rounded-2xl relative text-left">
              <div className="absolute top-4 right-4 text-3xl font-serif text-stone-100 font-black">03</div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-gold-500 font-bold block mb-2">PHASE THREE</span>
              <h4 className="text-sm uppercase tracking-wide text-stone-900 font-bold mb-2">Procurement & Contracting</h4>
              <p className="text-stone-500 text-[11px] font-light leading-relaxed">
                Direct material sourcing, safety permit filings, structural demolition, and partition wall assembly on-site.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-stone-200/60 p-6 rounded-2xl relative text-left">
              <div className="absolute top-4 right-4 text-3xl font-serif text-stone-100 font-black">04</div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-gold-500 font-bold block mb-2">PHASE FOUR</span>
              <h4 className="text-sm uppercase tracking-wide text-stone-900 font-bold mb-2">Handover & Patina</h4>
              <p className="text-stone-500 text-[11px] font-light leading-relaxed">
                Final furniture mounting, detailed linear illumination test, thorough site cleaning, and private walk-in key handoff.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION AREA */}
      <section className="bg-stone-950 text-white py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="text-gold-500 text-xs tracking-[0.25em] font-mono font-bold block uppercase">
            COMMISSION ANTRA STUDIO TODAY
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Elevate Your Space <span className="font-serif italic text-gold-500 font-normal">With Expert</span> <br />
            Designers &amp; <span className="font-serif italic text-gold-500 font-normal">Contractors</span>
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Whether you want a complete historical loft conversion or customized interior wood-and-stone remodeling, we are fully equipped to deliver.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-stone-950 font-bold text-xs uppercase tracking-widest transition-all duration-300"
            >
              Get Free Estimate
            </button>
            <button
              onClick={onBackToHome}
              className="px-8 py-3.5 border border-stone-800 hover:border-gold-500 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5"
            >
              Back To Home
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
