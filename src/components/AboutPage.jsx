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
  Heart,
  Briefcase,
  Layers,
  Award,
  BookOpen
} from "lucide-react";
import {images} from "../lib/images";
import Image from "next/image";

const timelineEvents = [
  {
    year: "1989",
    title: "Heritage Genesis",
    description: "Family craftsmanship begins with humble beginnings."
  },
  {
    year: "1990s - 2000s",
    title: "Independent Contracting",
    description: "Years of dedicated independent contracting and custom furniture manufacturing across regions."
  },
  {
    year: "2010s",
    title: "Regional Expansion",
    description: "Expansion of our core spatial services into Kumta, Honnavar, and nearby regions."
  },
  {
    year: "2018",
    title: "Entering Goa",
    description: "Executing luxury holiday homes, premium coastal villas, and high-end hospitality interiors across Goa."
  },
  {
    year: "2021",
    title: "Metro Expansion",
    description: "Expanding operations to major commercial and residential projects across Mumbai and Pune."
  },
  {
    year: "2024",
    title: "Pan-India Presence",
    description: "Further growth into Bengaluru, Hyderabad, Hubballi, and surrounding progressive cities."
  },
  {
    year: "Today",
    title: "Unified Creative Studio",
    description: "Suthar Interior Studio continues to deliver architect-led interior and custom furniture solutions across multiple cities."
  }
];

const values = [
  {
    title: "Honesty",
    desc: "We recommend what is best for the client—not what is most expensive.",
    icon: Compass
  },
  {
    title: "Craftsmanship",
    desc: "Every detail matters, from furniture manufacturing to final installation.",
    icon: Hammer
  },
  {
    title: "Transparency",
    desc: "Clear communication, fair pricing, and no hidden surprises.",
    icon: ShieldCheck
  },
  {
    title: "Customization",
    desc: "Every project is uniquely designed around the client's lifestyle and requirements.",
    icon: Sparkles
  },
  {
    title: "Quality",
    desc: "Premium workmanship using carefully selected materials and trusted hardware.",
    icon: Layers
  },
  {
    title: "Commitment",
    desc: "We treat every project with the same dedication, whether it is a single room or an entire commercial building.",
    icon: Heart
  }
];

const leaders = [
  {
    name: "Ravalram H. Suthar",
    role: "Founder",
    desc: "Leading the family legacy with decades of craftsmanship, integrity, and dedication to quality.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600"
  },
  {
    name: "Shivkumar Suthar",
    role: "Co-Founder",
    desc: "Managing operations, client relationships, and ensuring every project is delivered with excellence.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600"
  },
  {
    name: "Padam P. Sutar & Team",
    role: "Lead Architect & Design Team",
    desc: "Creating intelligent architectural and interior solutions while supervising every stage of execution.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
  }
];

const expertises = [
  { title: "Residential Interiors", desc: "Bespoke home environments, custom cabinetry, and high-contrast ambient lighting layouts.", icon: Sparkles },
  { title: "Commercial Interiors", desc: "Productive, inspiring corporate environments and client-facing business spaces.", icon: Briefcase },
  { title: "Architecture", desc: "Thoughtful space planning, architectural drafting, and direct structural supervision.", icon: Compass },
  { title: "Custom Furniture", desc: "Artisanal wardrobes, modular kitchen setups, media units, and bespoke loose seating.", icon: Hammer },
  { title: "Renovation", desc: "Upgrading existing structural bones into beautiful, highly functional modern layouts.", icon: History },
  { title: "Turnkey Projects", desc: "Complete end-to-end execution, civil, plumbing, painting, electrics, and key handover.", icon: Workflow },
  { title: "Painting & Finishing", desc: "Premium texture washes, lime plaster applications, and flawless protective coating coats.", icon: Layers },
  { title: "Electrical Solutions", desc: "Integrated automation mapping, smart lighting channels, and heavy electrical infrastructure.", icon: ShieldCheck }
];

const cities = [
  { name: "Mumbai", detail: "Our primary metro region for luxury turnkey residential & commercial contracting." },
  { name: "Pune", detail: "Custom contemporary apartments and customized modular cabinetry." },
  { name: "Goa", detail: "Luxury beachside villas, custom joinery, and premium hospitality spaces." },
  { name: "Bengaluru", detail: "Architect-supervised modern homes and tech-workspace environments." },
  { name: "Hyderabad", detail: "Bespoke furniture execution and premium family homes." },
  { name: "Hubballi", detail: "Turnkey interior execution, renovation, and modular installations." },
  { name: "Kumta", detail: "Our native core hub providing high-quality carpentry with trusted local craft heritage." },
  { name: "Honnavar", detail: "Custom private homes and architect-guided remodeling contracts." },
  { name: "Murudeshwar", detail: "Coastal commercial ventures and contemporary beach homes." },
  { name: "Nearby Regions", detail: "Surrounding cities and progressive towns based on bespoke scope & requirements." }
];

export default function AboutPage({ onBackToHome, onOpenQuote }) {
  const [hoveredCity, setHoveredCity] = useState(null);

  return (
    <div className="bg-[#faf9f6] text-stone-900 font-sans selection:bg-[#c5a880]/30 selection:text-stone-950 pt-[80px]">
      
      {/* PAGE HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
        {/* Parallax style background image with dark luxurious overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
            alt="Suthar Interior Studio Legacy"
            className="w-full h-full object-cover opacity-25 filter brightness-[0.3] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-stone-950/50" />
        </div>

        {/* Blueprint geometric accent lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
          <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12 px-6">
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full" />
            <div className="border-l border-white h-full border-r" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full text-left space-y-8 py-20">
          {/* Breadcrumbs */}
          <div className="inline-flex items-center space-x-2 text-stone-400 text-xs tracking-[0.25em] font-mono uppercase">
            <button onClick={onBackToHome} className="hover:text-[#c5a880] transition-colors cursor-pointer">HOME</button>
            <span>/</span>
            <span className="text-[#c5a880] font-bold">ABOUT US</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="text-[#c5a880] text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              ABOUT SUTHAR INTERIOR STUDIO
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-tight uppercase"
            >
              Crafting Timeless Spaces, <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Built on Trust</span> Since 1989.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl pt-2"
            >
              For over three decades, our family has been transforming homes, offices, and commercial spaces with thoughtful architecture, exceptional craftsmanship, and honest service. Today, Suthar Interior Studio combines traditional craftsmanship with modern design to create spaces that are beautiful, functional, and built to last.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onBackToHome}
              className="inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#c5a880] hover:bg-[#b0936b] px-6 py-4 rounded-none cursor-pointer"
            >
              <span>Explore Our Projects</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/10 bg-stone-950/5 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </button>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-white text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all duration-300 rounded-none bg-white/5 backdrop-blur-md cursor-pointer hover:border-[#c5a880] hover:text-[#c5a880]"
            >
              Book Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 01: OUR STORY */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Elegant overlapping images */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="col-span-8 aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl border border-stone-200/50"
                >
                  <Image
                    src={images.aboutImg}
                    alt="Foundry of legacy"
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                    fill
                    sizes= "100vw"
                    priority="high"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="col-span-6 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-white absolute right-2 bottom-[-40px] z-10 w-48 sm:w-64"
                >
                  <Image
                    src={images.transitionImg}
                    alt="Exquisite details"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    fill
                    sizes= "100vw"
                    priority="high"
                  />
                </motion.div>
              </div>

              {/* Minimal floating seal */}
              <div className="absolute top-[-25px] right-8 w-24 h-24 rounded-full border border-dashed border-[#c5a880]/35 flex items-center justify-center animate-[spin_20s_linear_infinite] select-none pointer-events-none hidden sm:flex">
                <span className="text-[7px] uppercase tracking-[0.25em] font-mono text-stone-400 font-bold">EST. 1989 • SUTHAR INTERIOR STUDIO • </span>
              </div>
            </div>

            {/* Right side: Detailed narrative */}
            <div className="lg:col-span-6 space-y-8 text-left lg:pl-8 pt-12 lg:pt-0">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <span className="text-[#c5a880] text-xs">✦</span>
                  <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                    OUR STORY
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
                  A Family Legacy <br />
                  <span className="font-serif italic text-[#c5a880] font-normal lowercase">of</span> Craftsmanship.
                </h2>
              </div>

              <div className="space-y-6 text-stone-600 font-light text-sm sm:text-base leading-relaxed">
                <p>
                  Suthar Interior Studio is built on a family tradition of craftsmanship that began in 1989. Long before the company was formally established, our founders worked independently as trusted contractors, delivering quality interiors, furniture, and architectural solutions across different regions.
                </p>
                <p>
                  As experience grew and client relationships strengthened, the vision became larger—to create one studio where architects, designers, craftsmen, and execution specialists work together under one roof.
                </p>
                <p>
                  Today, that vision continues through Suthar Interior Studio, delivering customized residential, commercial, and architectural projects with honesty, precision, and attention to every detail.
                </p>
              </div>

              {/* Quote from the founder */}
              <div className="border-l-2 border-[#c5a880] pl-6 py-2 bg-stone-50/70 italic text-stone-800 text-sm rounded-r-lg">
                &ldquo;True craftsmanship does not compete for attention. It resides in the silent, flawless alignment of grain, stone, and structure.&rdquo;
                <span className="block text-xs uppercase font-mono tracking-widest text-[#c5a880] font-bold not-italic mt-2">— Ravalram H. Suthar, Founder</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: OUR JOURNEY (PREMIUM VERTICAL TIMELINE) */}
      <section className="py-24 md:py-32 bg-[#faf9f6] border-t border-b border-stone-200/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          {/* Header Block */}
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="text-[#c5a880] text-xs">✦</span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                OUR JOURNEY
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
              Through the <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Passage of</span> Time
            </h2>
          </div>

          {/* Premium Vertical Timeline */}
          <div className="relative border-l border-stone-200 ml-4 md:ml-32 space-y-16 py-4">
            {timelineEvents.map((evt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12 text-left"
              >
                {/* Year Badge absolute side indicator for desktop */}
                <div className="absolute left-[-16px] md:left-[-150px] top-0 md:w-32 text-left md:text-right font-serif text-xl sm:text-2xl font-light text-[#c5a880]">
                  {evt.year}
                </div>

                {/* Golden Dot Node */}
                <div className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-stone-900 border-2 border-[#c5a880] group-hover:scale-125 transition-transform" />

                {/* Event text card */}
                <div className="bg-white border border-stone-200/50 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-[#c5a880]/20 transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-serif font-medium text-stone-900 mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 & 04: MISSION & VISION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Mission Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-stone-50 p-8 md:p-12 border border-stone-100 rounded-2xl text-left space-y-6 relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-stone-200/40 text-[#c5a880] shadow-sm">
                <Compass size={24} />
              </div>
              <div className="space-y-4">
                <span className="text-stone-400 font-mono text-[10px] tracking-widest font-bold block uppercase">
                  SECTION 03 &bull; OUR MISSION
                </span>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900 uppercase">
                  Design Spaces <br />
                  <span className="font-serif italic text-[#c5a880] font-normal lowercase">People Love Living</span> In.
                </h3>
                <p className="text-stone-600 font-light text-sm leading-relaxed pt-2">
                  Our mission is to create interiors that combine functionality, timeless aesthetics, and quality craftsmanship while remaining transparent, flexible, and customer-focused throughout every project.
                </p>
              </div>
            </motion.div>

            {/* Vision Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="bg-stone-50 p-8 md:p-12 border border-stone-100 rounded-2xl text-left space-y-6 relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-stone-200/40 text-[#c5a880] shadow-sm">
                <Sparkles size={24} />
              </div>
              <div className="space-y-4">
                <span className="text-stone-400 font-mono text-[10px] tracking-widest font-bold block uppercase">
                  SECTION 04 &bull; OUR VISION
                </span>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900 uppercase">
                  Building Spaces <br />
                  <span className="font-serif italic text-[#c5a880] font-normal lowercase">That Inspire</span> Generations.
                </h3>
                <p className="text-stone-600 font-light text-sm leading-relaxed pt-2">
                  We envision becoming one of India's most trusted architecture and interior studios by delivering thoughtful designs, honest guidance, and exceptional workmanship for projects of every size.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 05: OUR VALUES */}
      <section className="py-24 md:py-32 bg-[#faf9f6] border-t border-stone-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="text-[#c5a880] text-xs">✦</span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                OUR VALUES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
              Guided by <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Uncompromising</span> Standards.
            </h2>
          </div>

          {/* Six Premium Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-stone-200/50 p-6 md:p-8 rounded-2xl text-left space-y-4 hover:shadow-xl hover:border-[#c5a880]/30 transition-all duration-500 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-[#c5a880] group-hover:bg-[#c5a880]/10 transition-colors duration-500">
                    <ValIcon size={18} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-serif font-medium text-stone-950 group-hover:text-[#c5a880] transition-colors duration-300">
                      {val.title}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 06: WHY CLIENTS TRUST US */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Premium Image collage */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-stone-200/55">
                  <Image
                    src={images.coastalImg}
                    alt="Premium living space design"
                    className="w-full h-full object-cover filter brightness-[0.92]"
                    referrerPolicy="no-referrer"
                    fill
                    sizes= "100vw"
                    priority="high"
                  />
                </div>
                <div className="col-span-6 aspect-[1/1] rounded-2xl overflow-hidden shadow-lg border border-stone-200/55">
                  <Image
                    src={images.loftImg}
                    alt="Modern workshop furniture finish"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    fill
                    sizes= "100vw"
                    priority="high"
                  />
                </div>
                <div className="col-span-6 aspect-[1/1] rounded-2xl overflow-hidden shadow-lg border border-stone-200/55">
                  <Image
                    src={images.transitionImg}
                    alt="Modular premium kitchen layout"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    fill
                    sizes= "100vw"
                    priority="high"
                  />
                </div>
              </div>
            </div>

            {/* Right side: 4 Highlight Cards */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <span className="text-[#c5a880] text-xs">✦</span>
                  <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                    WHY CLIENTS TRUST US
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
                  Uncompromised Quality, <br />
                  <span className="font-serif italic text-[#c5a880] font-normal lowercase">No Matter</span> the Distance.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {/* Highlight 01 */}
                <div className="bg-stone-50/70 border border-stone-100 p-6 rounded-xl hover:bg-white hover:border-[#c5a880]/20 transition-all duration-300">
                  <span className="text-3xl font-serif text-[#c5a880] font-light block mb-2">30+</span>
                  <h4 className="text-xs uppercase tracking-wider text-stone-900 font-bold mb-1">
                    Years of Family Craftsmanship
                  </h4>
                  <p className="text-stone-500 text-xs font-light">
                    Over three decades of architectural execution legacy.
                  </p>
                </div>

                {/* Highlight 02 */}
                <div className="bg-stone-50/70 border border-stone-100 p-6 rounded-xl hover:bg-white hover:border-[#c5a880]/20 transition-all duration-300">
                  <span className="text-3xl font-serif text-[#c5a880] font-light block mb-2">20+</span>
                  <h4 className="text-xs uppercase tracking-wider text-stone-900 font-bold mb-1">
                    Experienced Professionals
                  </h4>
                  <p className="text-stone-500 text-xs font-light">
                    Architects, designers, and artisans working together.
                  </p>
                </div>

                {/* Highlight 03 */}
                <div className="bg-stone-50/70 border border-stone-100 p-6 rounded-xl hover:bg-white hover:border-[#c5a880]/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-stone-200/50 text-[#c5a880] mb-3">
                    <Compass size={14} />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-900 font-bold mb-1">
                    Architect Supervised
                  </h4>
                  <p className="text-stone-500 text-xs font-light">
                    Every project is carefully guided by experienced architects.
                  </p>
                </div>

                {/* Highlight 04 */}
                <div className="bg-stone-50/70 border border-stone-100 p-6 rounded-xl hover:bg-white hover:border-[#c5a880]/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-stone-200/50 text-[#c5a880] mb-3">
                    <Workflow size={14} />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-900 font-bold mb-1">
                    Flexible Solutions
                  </h4>
                  <p className="text-stone-500 text-xs font-light">
                    Labour only, labour with materials, furniture, or turnkey.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 07: LEADERSHIP */}
      <section className="py-24 md:py-32 bg-[#faf9f6] border-t border-stone-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="text-[#c5a880] text-xs">✦</span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                OUR LEADERSHIP
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
              The Minds Behind <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Our Creative</span> Legacy
            </h2>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="bg-white border border-stone-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 text-left group"
              >
                {/* Image Frame */}
                <div className="aspect-[4/3] bg-stone-950 overflow-hidden relative border-b border-stone-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-1000"
                    fill
                    sizes="100vw"
                    priority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Profile Meta Info */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#c5a880] uppercase block">
                      {leader.role}
                    </span>
                    <h3 className="text-lg md:text-xl font-serif font-medium text-stone-950">
                      {leader.name}
                    </h3>
                  </div>
                  <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                    {leader.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 08: OUR EXPERTISE */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="text-[#c5a880] text-xs">✦</span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                OUR EXPERTISE
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
              End-to-End <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Execution &</span> Contracting
            </h2>
          </div>

          {/* Expertises Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {expertises.map((exp, idx) => {
              const ExpIcon = exp.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="bg-stone-50/50 border border-stone-200/40 p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:border-[#c5a880]/30 transition-all duration-500 text-left space-y-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-stone-700 group-hover:text-[#c5a880] border border-stone-200/50 group-hover:bg-[#c5a880]/10 transition-colors duration-500">
                    <ExpIcon size={18} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 group-hover:text-[#c5a880] transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-stone-500 text-xs font-light leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 09: SERVICE AREAS DISPLAY */}
      <section className="py-24 md:py-32 bg-[#faf9f6] border-t border-stone-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header Block */}
          <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="text-[#c5a880] text-xs">✦</span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
                SERVICE AREAS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
              Operating Across <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Major Cities &</span> Towns
            </h2>
            <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
              Our expert supervisors and master craftsmen travel to ensure identical quality execution regardless of coordinates. If your project is outside our standard listing below, we happily accept remote contracts depending on scale and layout.
            </p>
          </div>

          {/* Interactive Cities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cities.map((city, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCity(idx)}
                onMouseLeave={() => setHoveredCity(null)}
                className="bg-white border border-stone-200/60 p-6 md:p-8 rounded-xl text-left space-y-3 hover:shadow-xl hover:border-[#c5a880]/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Active hover corner gold glow */}
                <div className={`absolute right-0 top-0 w-16 h-16 bg-[radial-gradient(circle_at_top_right,_rgba(197,168,128,0.1),_transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="flex items-center space-x-2 text-stone-800 group-hover:text-[#c5a880] transition-colors duration-300">
                  <MapPin size={16} />
                  <h3 className="text-lg font-serif font-medium text-stone-950 group-hover:text-[#c5a880] transition-colors duration-300">
                    {city.name}
                  </h3>
                </div>

                <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                  {city.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative w-full overflow-hidden py-24 md:py-32 bg-stone-950 text-white border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
            alt="Beautiful spatial transition"
            className="w-full h-full object-cover opacity-20 filter brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-stone-950/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="text-[#c5a880] text-xs tracking-[0.3em] font-mono font-bold block uppercase">
              LET'S CREATE A MASTERPIECE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-tight uppercase">
              Let's Build Something <br />
              <span className="font-serif italic text-[#c5a880] font-normal lowercase">Extraordinary</span> Together.
            </h2>
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-2">
              Whether you're designing a new home, renovating an existing space, or planning a commercial project, our experienced architects and craftsmen are ready to bring your vision to life with thoughtful design and exceptional execution.
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
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 border border-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-white/5 backdrop-blur-md cursor-pointer hover:border-[#c5a880] hover:text-[#c5a880]"
            >
              View Our Projects
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
