import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import transitionImg from "../assets/images/antra_transition_luxury_1782747459033.jpg";

const faqs = [
  {
    id: "faq-1",
    question: "What is your typical project timeline from consultation to final completion?",
    answer: "While timelines vary depending on the architectural scope, a comprehensive residential redesign generally spans 12 to 24 weeks. This accommodates custom furniture fabrication, meticulous spatial engineering, and master artisanship."
  },
  {
    id: "faq-2",
    question: "Do you manage the entire construction and installation process?",
    answer: "Yes, we offer full turnkey project management. We coordinate directly with general contractors, orchestrate structural adjustments, manage specialist craftsmen, oversee procurement, and execute meticulous white-glove furniture installations."
  },
  {
    id: "faq-3",
    question: "How do you define and curate the aesthetic direction of a project?",
    answer: "Our discovery phase starts with a deep sensory interview. We analyze your lifestyles, tactile preferences, and preferred lighting fields to co-create a cohesive design blueprint that marries architectural precision with personal story."
  },
  {
    id: "faq-4",
    question: "Can you incorporate existing family heirlooms or curated art collections?",
    answer: "Absolutely. We view heirloom integration as an opportunity to enrich a room's character. Our architects precisely draft environments around your prized canvases, sculptures, and precious collectibles to highlight their emotional value."
  },
  {
    id: "faq-5",
    question: "Where do you source your materials and custom furnishings?",
    answer: "We partner with an elite global network of suppliers, stone quarries, and independent master craftsmen. From hand-brushed bronzes in Venice to raw premium marbles in Carrara, we curate only authentic, rare materials of exceptional heritage."
  }
];

export default function FAQAndTransition() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#faf9f6] relative overflow-hidden">
      
      {/* TRANSITIONAL BLOCK: EYE-CATCHING WIDE ARCHITECTURAL BANNER */}
      <div className="relative h-[45vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center">
        {/* Parallax-style background wrapper */}
        <div className="absolute inset-0">
          <img
            src={transitionImg}
            alt="Luxurious Courtyard Architecture"
            className="w-full h-full object-cover scale-105"
            style={{ transformOrigin: "center" }}
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient overlays to blend into the design flow */}
          <div className="absolute inset-0 bg-stone-950/40 z-10" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#faf9f6] to-transparent z-10 opacity-90" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf9f6] to-transparent z-10 opacity-95" />
        </div>

        {/* Floating Architectural Quote */}
        <div className="relative z-20 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <span className="text-gold-400 font-mono text-xs uppercase tracking-[0.4em] font-semibold block">
              Architectural Reflection
            </span>
            <p className="text-white text-2xl md:text-4xl font-serif font-light italic leading-relaxed">
              &ldquo;Space is the breath of art.&rdquo;
            </p>
            <div className="w-16 h-[1px] bg-gold-500/50 mx-auto" />
            <p className="text-stone-300 font-light text-xs uppercase tracking-widest">
              Frank Lloyd Wright &mdash; Spatial Flow Master
            </p>
          </motion.div>
        </div>
      </div>

      {/* CORE FAQ SECTION PANEL */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Heading & Decorative Accents */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="inline-flex items-center space-x-2 border border-stone-200 bg-white/80 backdrop-blur-sm px-3.5 py-1">
              <HelpCircle size={12} className="text-gold-500 shrink-0" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-stone-500 font-mono">
                Knowledge Core
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
              Frequently Asked <br />
              <span className="font-serif italic text-gold-500">Inquiries</span>
            </h2>
            
            <p className="text-stone-500 font-light text-sm leading-relaxed max-w-sm">
              We operate with complete clarity. Here we address standard questions about our custom workflows, sourcing practices, and bespoke project delivery.
            </p>

            <div className="pt-6 border-t border-stone-200 max-w-xs">
              <span className="text-[10px] uppercase font-bold font-mono tracking-wider text-stone-400 block mb-2">Have a specific question?</span>
              <a 
                href="#contact" 
                className="text-xs font-bold text-stone-900 hover:text-gold-500 transition-colors duration-300 tracking-wider uppercase inline-flex items-center space-x-1"
              >
                <span>Speak directly with an architect &rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border-b border-stone-200 transition-all duration-300 bg-white ${
                    isOpen ? "shadow-[0_4px_30px_rgba(0,0,0,0.02)] border-gold-500/45" : "hover:border-stone-400"
                  }`}
                  id={faq.id}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-6 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono font-bold text-gold-500 mt-1">
                        0{index + 1}
                      </span>
                      <span className="text-stone-900 text-sm md:text-base font-medium tracking-wide">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-gold-500 bg-gold-50 text-gold-600" : "text-stone-500"
                    }`}>
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-14 text-stone-500 text-sm font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}
