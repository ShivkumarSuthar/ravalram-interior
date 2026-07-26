import { motion } from "motion/react";
import {
  MessageSquare,
  Compass,
  Workflow,
  History,
  Phone,
  ArrowRight
} from "lucide-react";

export default function FinalCTA() {
  const highlights = [
    {
      title: "Free Consultation",
      desc: "Discuss your ideas with our experienced team before making any decisions.",
      icon: MessageSquare
    },
    {
      title: "Architect Guided",
      desc: "Every project is carefully planned and supervised by experienced architects.",
      icon: Compass
    },
    {
      title: "Flexible Execution",
      desc: "Choose labour only, labour with materials, furniture manufacturing, or complete turnkey solutions.",
      icon: Workflow
    },
    {
      title: "Family Craftsmanship Since 1989",
      desc: "Over three decades of experience built on trust, quality, and long-lasting client relationships.",
      icon: History
    }
  ];

  const handleConsultationClick = () => {
    // Scroll to contact form
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 bg-stone-950 text-white border-t border-white/5">
      {/* Background Image with elegant dark parallax overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
          alt="Premium Architecture Interior"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-[0.35] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Warm radial gradient for luxurious depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Blueprint grid layout lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-4 gap-12">
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full" />
          <div className="border-l border-white h-full border-r" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Content Centered Stack */}
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full"
          >
            <span className="text-[#CAA05C] text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-300 font-mono block">
              LET'S BUILD SOMETHING EXCEPTIONAL
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Your Dream Space <br />
            <span className="text-[#CAA05C]">Starts With A Conversation.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4 max-w-3xl mx-auto pt-4"
          >
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed">
              Whether you're building a new home, renovating an existing property, designing a modern office, or creating custom furniture, our experienced architects and craftsmen are ready to transform your vision into a beautifully crafted reality.
            </p>
            <p className="text-stone-300 font-light text-sm sm:text-base md:text-lg leading-relaxed">
              Every project begins with understanding your goals, lifestyle, and budget—allowing us to create spaces that are functional, timeless, and uniquely yours.
            </p>
          </motion.div>

          {/* Call-to-action premium rounded buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            {/* Primary button: rounded as requested in design requirements */}
            <motion.button
              onClick={handleConsultationClick}
              whileHover={{ scale: 1.03, backgroundColor: "#CAA05C" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-stone-900 font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-[#CAA05C] px-8 py-5 rounded-full cursor-pointer shadow-xl"
            >
              <span>Book Your Free Consultation</span>
              <div className="w-8 h-8 rounded-full border border-stone-950/20 bg-stone-950/10 flex items-center justify-center text-stone-950">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </motion.button>

            {/* Secondary button: rounded as requested in design requirements */}
            <motion.a
              href="tel:+919000000000"
              whileHover={{ scale: 1.03, borderColor: "#CAA05C", color: "#CAA05C", backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-5 border border-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full bg-white/5 backdrop-blur-md cursor-pointer"
            >
              <Phone size={14} className="text-[#CAA05C]" />
              <span>Call Our Team</span>
            </motion.a>
          </motion.div>

          {/* Trust Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-stone-400 font-light text-xs sm:text-sm max-w-4xl mx-auto pt-6 leading-relaxed font-mono"
          >
            &ldquo;Serving homeowners, businesses, architects, and commercial clients across Mumbai, Pune, Goa, Bengaluru, Hyderabad, Hubballi, Kumta, Honnavar, Murudeshwar, and surrounding regions.&rdquo;
          </motion.p>
        </div>

        {/* 4 Premium Highlight Cards - beautiful rounded-2xl cards with custom icon layouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-left space-y-4 hover:shadow-2xl hover:border-[#CAA05C]/30 hover:-translate-y-1.5 transition-all duration-500 group"
              >
                {/* Gold Accent Icon container */}
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CAA05C] group-hover:bg-[#CAA05C]/10 transition-colors duration-500">
                  <Icon size={18} className="transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-white group-hover:text-[#CAA05C] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-stone-300 text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
