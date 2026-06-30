import { motion } from "motion/react";

const team = [
  {
    name: "Ravalram H. Suthar",
    role: "Founder",
    focus: "FOUNDER & MASTER CRAFTSMAN",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    bio: "Leading the family legacy of craftsmanship with over three decades of experience, dedicated to delivering quality work, honest values, and lasting client relationships."
  },
  {
    name: "Shivkumar Suthar",
    role: "Co-Founder",
    focus: "CO-FOUNDER & OPERATIONS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    bio: "Overseeing project coordination, client communication, planning, and ensuring every project is completed with transparency, efficiency, and complete customer satisfaction."
  },
  {
    name: "Padam P. Sutar & Team",
    role: "Architect & Design Team",
    focus: "LEAD ARCHITECT & DESIGN",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    bio: "Responsible for architectural planning, space optimization, interior concepts, technical drawings, and supervising every stage of execution to ensure exceptional quality."
  },
  {
    name: "Custom Furniture Experts",
    role: "Specialist Department",
    focus: "BESPOKE WOODWORKING",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800",
    bio: "Experienced craftsmen creating premium custom furniture with precision, heritage joinery techniques, and attention to detail."
  },
  {
    name: "Execution Specialists",
    role: "Specialist Department",
    focus: "ON-SITE PRODUCTION",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    bio: "Managing on-site execution, flawless installation, contractor coordination, and finishing with complete professionalism."
  },
  {
    name: "Painting & Finishing",
    role: "Specialist Department",
    focus: "PREMIUM TEXTURES & DETAILED FINISH",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800",
    bio: "Delivering elegant finishes, textures, and detailing that bring every custom design to life."
  }
];

const stats = [
  { value: "30+", label: "Years of Family Craftsmanship" },
  { value: "20+", label: "Experienced Professionals" },
  { value: "Architect", label: "Supervised Projects" },
  { value: "Multi-City", label: "Service Across India" }
];

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="team" className="bg-[#faf9f6] py-24 md:py-32 overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header block */}
        <div className="text-left max-w-3xl mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-[#c5a880] text-xs">✦</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block">
              OUR TEAM
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight uppercase">
            The People Behind <br />
            <span className="font-serif italic text-[#c5a880] font-normal lowercase">Every Exceptional</span> Space.
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl pt-2">
            Behind every beautifully crafted space is a dedicated team of architects, designers, craftsmen, and project specialists. With a family legacy of craftsmanship dating back to 1989, we combine experience, creativity, and precision to deliver projects that exceed expectations.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 md:mb-28"
        >
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-white border border-stone-200/60 p-5 rounded-none shadow-sm hover:shadow-md transition-all duration-500 relative group text-left flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-100 rounded-none">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter brightness-[0.93] grayscale group-hover:grayscale-0 transition-all duration-700 transform scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Focus Tag Badge */}
                  <div className="absolute bottom-4 left-4 z-10 bg-stone-900 text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 font-mono rounded-none">
                    {member.focus}
                  </div>
                </div>

                {/* Text Description */}
                <div className="space-y-1">
                  <h3 className="text-xl font-serif text-stone-900 font-medium group-hover:text-[#c5a880] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#c5a880] uppercase tracking-widest font-bold">
                    {member.role}
                  </p>
                  <div className="w-6 h-[1px] bg-stone-200 group-hover:w-12 transition-all duration-500 mt-2" />
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed pt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Area below the cards */}
        <div className="border-t border-stone-200/50 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="space-y-3 text-center md:text-left group"
              >
                <div className="text-4xl md:text-5xl font-serif text-[#c5a880] font-light leading-none group-hover:scale-105 transition-transform duration-300 inline-block">
                  {st.value}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-widest text-stone-800 font-bold">
                    {st.label}
                  </h4>
                  <p className="text-stone-400 text-xs font-light">
                    Suthar Studio Metric
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
