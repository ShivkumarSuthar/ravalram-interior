import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Clock,
  FileText,
  Home,
  Building2,
  Wrench,
  Hammer,
  Sparkles,
  Grid
} from "lucide-react";

// Local asset imports
const coastalImg = "/assets/images/AI_images/antra_project_coastal_1782744299850.jpg";
const loftImg = "/assets/images/AI_images/antra_project_loft_1782744318019.jpg";
const transitionImg = "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg";
const aboutImg = "/assets/images/AI_images/antra_about_side_1782744266546.jpg";

const servicesList = [
  {
    id: "01",
    title: "Residential Interior Design",
    category: "Luxury Living",
    icon: Home,
    image: coastalImg,
    tagline: "Sea-facing villas, double-height penthouses & bespoke family homes.",
    highlights: [
      "Vastu-compliant spatial planning",
      "Factory BWP timber joinery",
      "Italian marble & lighting curation",
      "100% turnkey site management"
    ]
  },
  {
    id: "02",
    title: "Commercial & Office Interiors",
    category: "Corporate & Retail",
    icon: Building2,
    image: transitionImg,
    tagline: "Ergonomic corporate offices, flagship showrooms & retail spaces.",
    highlights: [
      "Acoustic meeting pods & workstations",
      "Fast-track execution schedule",
      "HVAC & electrical safety compliance",
      "Custom reception & feature walls"
    ]
  },
  {
    id: "03",
    title: "Full Renovation & Civil Rebuild",
    category: "Spatial Transformation",
    icon: Wrench,
    image: aboutImg,
    tagline: "Demolition, structural wall reconfigurations & complete civil rebuilds.",
    highlights: [
      "Architectural load & safety audits",
      "Plumbing & electrical rewiring",
      "Multi-layer waterproofing with SLA",
      "Tile laying & false ceiling upgrades"
    ]
  },
  {
    id: "04",
    title: "Custom Joinery & Modular Systems",
    category: "Factory Woodworking",
    icon: Hammer,
    image: loftImg,
    tagline: "Precision timber joinery, modular kitchens & walk-in wardrobes.",
    highlights: [
      "IS:710 Marine BWP Plywood core",
      "German Hettich & Blum hardware",
      "CNC 0.1mm factory precision",
      "10-Year joinery warranty"
    ]
  },
  {
    id: "05",
    title: "Outdoor & Landscape Architecture",
    category: "Exterior Living",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    tagline: "Deck lounges, villa terrace gardens & weather-proof pergolas.",
    highlights: [
      "UV-stabilized composite decking",
      "All-weather pergola shades",
      "IP67 atmospheric outdoor lighting",
      "Irrigation & botanical styling"
    ]
  },
  {
    id: "06",
    title: "2D/3D Architectural Visualization",
    category: "Planning & BIM",
    icon: Grid,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    tagline: "Photorealistic 3D renders, working CAD blueprints & VR walkthroughs.",
    highlights: [
      "4K hyper-realistic 3D stills",
      "360-degree VR walkthroughs",
      "Working civil & electrical CAD sets",
      "Itemized BOQ cost blueprints"
    ]
  }
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = servicesList[activeIdx];

  const handleConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation"));
  };

  return (
    <section id="services" className="bg-[#faf9f6] py-20 md:py-32 overflow-hidden relative border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 border border-[#CAA05C]/30 bg-white px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#CAA05C]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-700">
                OUR EXPERTISE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.12]">
              Comprehensive <span className="text-[#CAA05C]">Interior &amp; Architectural</span> Services
            </h2>
          </div>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-md">
            From initial 3D concept designs to precision factory timber joinery and complete architect-supervised site execution.
          </p>
        </div>

        {/* Interactive Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Interactive Service Selector Cards */}
          <div className="lg:col-span-5 space-y-3 text-left">
            {servicesList.map((service, index) => {
              const isActive = activeIdx === index;
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIdx(index)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? "bg-[#CAA05C] text-white border-[#CAA05C] shadow-xl"
                      : "bg-white text-stone-900 border-stone-200/80 hover:border-[#CAA05C] hover:bg-stone-50"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-[#CAA05C] text-stone-950" : "bg-[#CAA05C]/10 text-[#CAA05C] group-hover:bg-[#CAA05C] group-hover:text-white"
                    }`}>
                      <IconComp size={20} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] font-mono font-bold ${isActive ? "text-[#CAA05C]" : "text-stone-400"}`}>
                          {service.id}
                        </span>
                        <span className={`text-[10px] font-mono uppercase tracking-wider ${isActive ? "text-stone-200" : "text-stone-400"}`}>
                          • {service.category}
                        </span>
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isActive ? "text-white" : "text-stone-950 group-hover:text-[#CAA05C]"} transition-colors`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isActive ? "bg-white/20 text-white" : "text-stone-400 group-hover:text-[#CAA05C]"
                  }`}>
                    <ArrowRight size={16} className={`transition-transform duration-300 ${isActive ? "translate-x-0.5" : "group-hover:translate-x-0.5"}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Featured Spotlight Card */}
          <div className="lg:col-span-7 bg-white border border-stone-200/80 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 h-full flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Image Preview Banner */}
                  <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-900 shadow-md">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover filter brightness-[0.92]"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="bg-[#CAA05C] backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20 text-[#CAA05C] font-bold">
                        {activeService.category}
                      </span>
                      <span className="bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-stone-200">
                        SERVICE SPEC // {activeService.id}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 tracking-tight">
                      {activeService.title}
                    </h3>
                    <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                      {activeService.tagline}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="bg-[#CAA05C]/5 border border-[#CAA05C]/20 p-5 rounded-2xl space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#CAA05C] flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#CAA05C]" />
                      <span>Key Architectural Deliverables</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center space-x-2.5 text-xs text-stone-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#CAA05C] shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div>
                    <p className="text-xs font-bold text-stone-900">Ready to start your project?</p>
                    <p className="text-[11px] text-stone-500">Get a complimentary architect consultation &amp; initial floorplan audit.</p>
                  </div>

                  <button
                    onClick={handleConsultation}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#CAA05C] hover:bg-[#CAA05C] text-white px-6 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md group cursor-pointer border border-[#CAA05C]/30"
                  >
                    <span>Request Service Estimate</span>
                    <div className="w-6 h-6 rounded-full bg-[#CAA05C] text-stone-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight size={12} strokeWidth={2.5} />
                    </div>
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
