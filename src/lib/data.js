/**
 * Suthar Brothers (Interior Design & Execution) - Centralized Site Content & Data Store
 * Images, company details, FAQs and the services / about page data shared by the content files
 */

// Asset Image Paths
export const SITE_IMAGES = {
  // hero_living_room.jpg does not decode in browsers, so heroBg points at the working living-room image
  heroBg: "/assets/images/AI_images/antra_hero_bg_1782744248753.jpg",
  livingBright: "/assets/images/living_01.png",
  livingGreen: "/assets/images/14.png",
  heroSlide2: "/assets/images/AI_images/antra_hero_slide2_1782747378004.jpg",
  heroSlide3: "/assets/images/AI_images/antra_hero_slide3_1782747396078.jpg",
  aboutSide: "/assets/images/AI_images/antra_about_side_1782744266546.jpg",
  projectCoastal: "/assets/images/AI_images/antra_project_coastal_1782744299850.jpg",
  projectLoft: "/assets/images/AI_images/antra_project_loft_1782744318019.jpg",
  transitionLuxury: "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg",
  isometricFloorPlan: "/assets/images/AI_images/isometric_floor_plan_1784822786880.jpg",
  bedroomTwo: "/assets/images/bedroom/bedroom_02.jpg",
  aboutHeroBg: "/assets/images/AI_images/antra_about_side_1782744266546.jpg",
  contactFooterBg: "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg"
};

// Royalty-free Unsplash photos (Unsplash License) for service illustrations where the studio has no
// photo of its own (wardrobes, offices, furniture...). Never used as Suthar Brothers' completed projects.
const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
export const STOCK_IMAGES = {
  wardrobeCloset: unsplash("1567401893414-76b7b1e5a7a5"),
  officeDesk: unsplash("1497215728101-856f4ea42174"),
  officeLounge: unsplash("1524758631624-e2822e304c36"),
  homeOffice: unsplash("1518455027359-f3f8164ba6bd"),
  furnitureConsole: unsplash("1618219908412-a29a1bb7b86e"),
  renovatedHome: unsplash("1560185007-cde436f6a4d0"),
  bathroom: unsplash("1620626011761-996317b8d101"),
  showroomLounge: unsplash("1538688525198-9b88f6f53126"),
};

// Company Identity & Core Information
export const COMPANY_INFO = {
  foundedYear: "1989",
  // Calls and WhatsApp go to the same number
  phone: "+91 90045 38149",
  whatsapp: "919004538149",
  email: "info@sutharstudio.com",
  address: {
    full: "Linking Road, Santacruz West, Mumbai, Maharashtra 400054",
    street: "Linking Road, Santacruz West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400054",
  },
  socialLinks: {
    instagram: "https://instagram.com/sutharinteriorstudio",
    facebook: "https://facebook.com/sutharinteriorstudio",
    linkedin: "https://linkedin.com/company/sutharinteriorstudio",
    pinterest: "https://pinterest.com/sutharinteriorstudio",
  }
};

// FAQs List
export const FAQ_DATA = [
  {
    id: "faq-1",
    category: "general",
    question: "Which cities does Suthar Brothers work in?",
    answer: "We mainly work across Mumbai, Pune and Goa, and take up projects in other cities depending on the scope of work. Share your location when you contact us and we will confirm."
  },
  {
    id: "faq-2",
    category: "contracting",
    question: "How long does a full-home interior project take?",
    answer: "It depends on the size of the home, the amount of civil work and the furniture involved. We agree a schedule with you before work begins, broken down into design, production, site work and handover."
  },
  {
    id: "faq-3",
    category: "materials",
    question: "What materials do you use for kitchens, wardrobes and furniture?",
    answer: "We recommend water-resistant plywood for kitchens and other wet areas, and suitable boards for wardrobes and furniture elsewhere. Finishes such as laminate, veneer, lacquer or solid wood are chosen with you based on look, use and budget."
  },
  {
    id: "faq-4",
    category: "budget",
    question: "How do you structure your fees and payments?",
    answer: "You receive an itemised quote that breaks down design, civil work, furniture, hardware and finishes. Payments are linked to clear project milestones, so you always know what each payment covers."
  },
  {
    id: "faq-5",
    category: "warranty",
    question: "Do you offer a warranty on furniture and hardware?",
    answer: "Hardware from established brands comes with its manufacturer's warranty. The warranty on our own workmanship depends on the materials you choose and is stated in writing in your quote."
  },
  {
    id: "faq-6",
    category: "design",
    question: "Will I see the design before work starts?",
    answer: "Yes. We share floor plans and 3D views so you can see the layout, materials and lighting before anything is built. Natural materials like stone and wood can vary slightly from the render."
  },
  {
    id: "faq-7",
    category: "design",
    question: "Can I make changes to the design?",
    answer: "Yes. Changes are easiest during the design stage, before materials are ordered and furniture goes into production. We review the design with you until you are happy to approve it."
  },
  {
    id: "faq-8",
    category: "contracting",
    question: "Do you handle civil, electrical and plumbing work?",
    answer: "Yes. For turnkey and renovation projects our site team coordinates civil changes, electrical and plumbing work, ceilings, flooring and finishes along with the interiors."
  },
  {
    id: "faq-9",
    category: "general",
    question: "Who looks after my project on site?",
    answer: "Our design team plans each project, and site work is checked regularly against the approved drawings. You have one point of contact from start to handover."
  },
  {
    id: "faq-10",
    category: "materials",
    question: "Can I choose my own materials or hardware brands?",
    answer: "Yes. You can choose your preferred boards, veneers, laminates and hardware brands, and our team will guide you on what suits each part of your home."
  }
];

// Extended Services Page Dataset
export const SERVICES_PAGE_DATA = {
  coreServices: [
    {
      id: "home-interiors",
      title: "Home Interiors",
      accent: "RESIDENTIAL",
      summary: "Complete interiors for apartments, villas and independent homes, planned around how your family lives.",
      description: "From a single room to a complete home, we plan layouts, select materials and finishes, and build the furniture and fittings each space needs. Design and execution stay with one team, so the finished home matches the plan you approved.",
      features: ["Living & Dining Rooms", "Bedrooms", "Kids' Rooms", "False Ceilings & Lighting", "Wall Finishes & Panelling", "Complete Home Interiors"],
      image: SITE_IMAGES.livingBright,
      imageAlt: "Bright living room with sofa, coffee table and large windows"
    },
    {
      id: "office-interiors",
      title: "Office & Commercial Interiors",
      accent: "COMMERCIAL",
      summary: "Offices, showrooms, shops and other commercial spaces designed for daily work and client visits.",
      description: "We design and build offices, showrooms and retail spaces that work well every day: clear layouts, comfortable workstations, good storage and finishes that suit your brand.",
      features: ["Workstations & Cabins", "Reception Areas", "Conference Rooms", "Showrooms & Retail", "Storage & Filing", "Lighting & Ceilings"],
      image: STOCK_IMAGES.officeDesk,
      imageAlt: "Office desk by a large window with city view"
    },
    {
      id: "modular-kitchens",
      title: "Modular Kitchens",
      accent: "KITCHENS",
      summary: "Practical kitchens with smart storage, durable materials and quality hardware, built to fit your space.",
      description: "We plan the kitchen around how you cook, then build cabinets, shutters and storage to size, using water-resistant boards for wet areas and hardware chosen for daily use.",
      features: ["L-Shaped, U-Shaped & Parallel Layouts", "Island Kitchens", "Tall Units & Pantry Storage", "Soft-Close Hardware", "Countertops & Backsplashes", "Appliance Planning"],
      image: SITE_IMAGES.heroSlide2,
      imageAlt: "Open modular kitchen with island seating next to a dining table"
    },
    {
      id: "wardrobes",
      title: "Wardrobes",
      accent: "STORAGE",
      summary: "Made-to-measure wardrobes and walk-in closets with storage planned for what you actually keep.",
      description: "Sliding, hinged and walk-in wardrobes designed to your room size, with internal fittings planned for hanging, folding, drawers and accessories, in a finish that matches the rest of your home.",
      features: ["Sliding & Hinged Wardrobes", "Walk-in Closets", "Internal Organisers", "Lofts & Overhead Storage", "Mirror & Glass Shutters", "Laminate, Veneer & Lacquer Finishes"],
      image: STOCK_IMAGES.wardrobeCloset,
      imageAlt: "Open walk-in wardrobe with hanging rails and shelves"
    },
    {
      id: "custom-furniture",
      title: "Custom Furniture",
      accent: "FURNITURE",
      summary: "Beds, TV units, dining tables and storage made to measure for your space and style.",
      description: "Woodworking is where our family business began, and furniture is still at the heart of what we do. We make beds, TV units, study tables, dining sets, shoe racks and storage to your size and finish.",
      features: ["Beds & Side Tables", "TV & Media Units", "Dining Tables", "Study & Office Tables", "Shoe Racks & Cabinets", "Reception Counters"],
      image: STOCK_IMAGES.furnitureConsole,
      imageAlt: "Custom cane-front cabinet with a round mirror and pendant lamp"
    },
    {
      id: "renovation",
      title: "Renovation",
      accent: "RENOVATION",
      summary: "Upgrades for older homes and offices, from new finishes to complete layout changes.",
      description: "We renovate homes and offices that need a refresh or a new layout, coordinating civil changes, electrical and plumbing work, flooring, ceilings and finishes as one project.",
      features: ["Home Renovation", "Office Renovation", "Kitchen & Bathroom Upgrades", "Flooring & Ceilings", "Electrical & Plumbing", "Painting & Finishes"],
      image: STOCK_IMAGES.renovatedHome,
      imageAlt: "Renovated living and dining area with wooden flooring"
    },
    {
      id: "turnkey-interiors",
      title: "Turnkey Interior Solutions",
      accent: "TURNKEY",
      summary: "One team from first sketch to handover: design, materials, site work and final styling.",
      description: "On a turnkey project we take responsibility for the whole job: design, material selection, furniture production, site work, coordination and handover, with one point of contact throughout.",
      features: ["Design & 3D Views", "Material Selection", "Furniture Production", "Site Execution", "Project Coordination", "Handover & Styling"],
      image: SITE_IMAGES.heroSlide3,
      imageAlt: "Finished bedroom suite with fireplace and forest view"
    }
  ],
  executionModels: [
    { title: "Labour Only", desc: "You procure raw materials; our skilled carpenters and craftsmen execute the blueprints flawlessly." },
    { title: "Labour + Materials", desc: "We source the materials and carry out the work, with every material listed in your quote." },
    { title: "Complete Turnkey", desc: "End-to-end peace of mind. We take full accountability from initial design to key handover." },
    { title: "Furniture Only", desc: "Custom furniture manufacturing at our workshop, delivered and assembled at your location." },
    { title: "Material Selection", desc: "Guidance through marble yards, plywood tests, hardware selections, and premium veneers." },
    { title: "Site Supervision", desc: "Regular site checks by our experienced team to make sure the work matches the approved drawings." }
  ],
  processSteps: [
    { num: "01", name: "Consultation", desc: "Discussing ideas, goals, and budget." },
    { num: "02", name: "Site Visit", desc: "Detailed laser measurements." },
    { num: "03", name: "Design", desc: "2D plans and photorealistic 3D CGI." },
    { num: "04", name: "Material Selection", desc: "Choosing veneer, stone, and metals." },
    { num: "05", name: "Furniture Manufacturing", desc: "Precision factory woodworking." },
    { num: "06", name: "Execution", desc: "On-site civil, plumbing, & joinery." },
    { num: "07", name: "Quality Check", desc: "Multi-point millimeter validation." },
    { num: "08", name: "Handover", desc: "Deep cleaning and unified key handoff." }
  ],
  faqs: [
    {
      q: "Can I hire only for furniture?",
      a: "Yes. We make, deliver and install custom wardrobes, kitchens, TV units and loose furniture, either to our own design or to your drawings."
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
      a: "It depends on the scope. A kitchen or a single room is much quicker than a full home with civil work. We agree a schedule with you before work begins, and you can see the typical timeline for each project type on our pricing page."
    },
    {
      q: "Do you provide site visits?",
      a: "Yes. Our team visits your site to take measurements, check existing conditions and note electrical and plumbing points before preparing the first layouts."
    },
    {
      q: "Do you charge separately for design?",
      a: "If you only need design, we offer floor plans, electrical layouts and 3D views for a design fee. If we also carry out the work, the design is included in the overall project quote."
    },
    {
      q: "Is there a warranty on your furniture?",
      a: "Yes. Hardware carries its manufacturer's warranty, and the warranty on our workmanship depends on the materials you choose. The exact terms are written into your quote."
    },
    {
      q: "How does the payment structure work?",
      a: "Payments are linked to project milestones, such as design approval, start of production, site installation and handover. The exact schedule is set out in your quote before work begins."
    }
  ]
};

// Extended About Page Dataset
export const ABOUT_PAGE_DATA = {
  timelineEvents: [
    { year: "1989", title: "Heritage Genesis", description: "Family craftsmanship begins with humble beginnings." },
    { year: "1990s - 2000s", title: "Independent Contracting", description: "Years of dedicated independent contracting and custom furniture manufacturing across regions." },
    { year: "2010s", title: "Regional Expansion", description: "Expansion of our core spatial services into Kumta, Honnavar, and nearby regions." },
    { year: "2018", title: "Entering Goa", description: "Executing luxury holiday homes, premium coastal villas, and high-end hospitality interiors across Goa." },
    { year: "2021", title: "Metro Expansion", description: "Expanding operations to major commercial and residential projects across Mumbai and Pune." },
    { year: "2024", title: "Wider Reach", description: "Further growth into Bengaluru and the towns around the cities we already work in." },
    { year: "Today", title: "Suthar Brothers", description: "Suthar Brothers brings interior design and execution together, with furniture made by our own team." }
  ],
  values: [
    { title: "Honesty", desc: "We recommend what is best for the client—not what is most expensive.", iconName: "Compass" },
    { title: "Craftsmanship", desc: "Every detail matters, from furniture manufacturing to final installation.", iconName: "Hammer" },
    { title: "Transparency", desc: "Clear communication, fair pricing, and no hidden surprises.", iconName: "ShieldCheck" },
    { title: "Customization", desc: "Every project is uniquely designed around the client's lifestyle and requirements.", iconName: "Sparkles" },
    { title: "Quality", desc: "Premium workmanship using carefully selected materials and trusted hardware.", iconName: "Layers" },
    { title: "Commitment", desc: "We treat every project with the same dedication, whether it is a single room or an entire commercial building.", iconName: "Heart" }
  ],
  cities: [
    { name: "Mumbai", detail: "Our primary metro region for luxury turnkey residential & commercial contracting." },
    { name: "Pune", detail: "Custom contemporary apartments and customized modular cabinetry." },
    { name: "Goa", detail: "Luxury beachside villas, custom joinery, and premium hospitality spaces." },
    { name: "Madgaon", detail: "Homes, shops and offices in Madgaon (Margao) and across South Goa." },
    { name: "Panaji", detail: "Apartments, villas and offices in Panaji and across North Goa." },
    { name: "Bengaluru", detail: "Modern homes and office interiors." },
    { name: "Honnavar", detail: "Private homes, renovation and custom furniture." },
    { name: "Kumta", detail: "Our native core hub providing high-quality carpentry with trusted local craft heritage." },
    { name: "Nearby Areas", detail: "With our own team and trusted local contacts, we also take on projects in the towns around these cities, such as Thane, Navi Mumbai, Karwar, Bhatkal and Murudeshwar." }
  ]
};

