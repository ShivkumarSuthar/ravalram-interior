import { motion } from "motion/react";

const team = [
  {
    name: "Mark Jackson",
    role: "Exhibition Designer",
    focus: "Structural Balance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    bio: "Focuses on double-height structural conversions and concrete-to-timber spatial ratios."
  },
  {
    name: "Helen Reeves",
    role: "Production Designer",
    focus: "Tactile Harmony",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    bio: "Dedicated to sourcing rare Italian travertine, hand-dyed linens, and custom-cut quartzites."
  },
  {
    name: "Alex Podzemsky",
    role: "Graphics Designer",
    focus: "Luminous Drama",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    bio: "Sculpts architectural volumes using indirect linear lighting channels and warm recessed lux-fields."
  }
];

export default function Team() {
  return (
    <section className="bg-[#faf9f6] py-24 md:py-32 overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-gold-500 text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              CREATIVE TEAM
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
            Meet The <span className="font-serif italic text-gold-500 font-normal">Experts Our</span> <br />
            <span className="font-serif italic text-gold-500 font-normal">Interior</span> Designers
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="bg-white border border-stone-200/60 p-5 shadow-sm hover:shadow-2xl transition-all duration-500 relative group rounded-3xl text-left"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-stone-100 rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay social handles */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-10">
                  <a href="#" className="p-2.5 rounded-full bg-stone-900 text-white hover:text-gold-500 hover:bg-black transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="p-2.5 rounded-full bg-stone-900 text-white hover:text-gold-500 hover:bg-black transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>

                {/* Focus Tag Badge */}
                <div className="absolute bottom-4 left-4 z-15 bg-gold-500 text-stone-950 text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                  {member.focus}
                </div>
              </div>

              {/* Text Description */}
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-stone-900 font-medium">
                  {member.name}
                </h3>
                <p className="text-xs text-gold-600 uppercase tracking-widest font-bold">
                  {member.role}
                </p>
                <p className="text-stone-500 text-xs font-light leading-relaxed pt-3 border-t border-stone-100 mt-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
