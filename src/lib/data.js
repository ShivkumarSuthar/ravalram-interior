/**
 * Suthar Brothers (Interior Design & Execution) - Centralized Site Content & Data Store
 * All text, images, company metadata, services, team info, stats, and navigation data
 */

import { projects } from "./project-data.js";
import { blogArticles } from "./blog-data.js";

// Asset Image Paths
export const SITE_IMAGES = {
  // hero_living_room.jpg does not decode in browsers, so heroBg points at the working living-room image
  heroBg: "/assets/images/AI_images/antra_hero_bg_1782744248753.jpg",
  livingBright: "/assets/images/living_01.png",
  livingGreen: "/assets/images/14.png",
  heroSlide2: "/assets/images/AI_images/antra_hero_slide2_1782747378004.jpg",
  heroSlide3: "/assets/images/AI_images/antra_hero_slide3_1782747396078.jpg",
  aboutSide: "/assets/images/AI_images/antra_about_side_1782744266546.jpg",
  lobbyBanner: "/assets/images/AI_images/antra_lobby_banner_1782744283860.jpg",
  projectCoastal: "/assets/images/AI_images/antra_project_coastal_1782744299850.jpg",
  projectLoft: "/assets/images/AI_images/antra_project_loft_1782744318019.jpg",
  transitionLuxury: "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg",
  architecturalPavilion: "/assets/images/AI_images/architectural_pavilion_1784821025997.jpg",
  isometricFloorPlan: "/assets/images/AI_images/isometric_floor_plan_1784822786880.jpg",
  bedroomTwo: "/assets/images/bedroom/bedroom_02.jpg",
  servicesHeroBg: "/assets/images/AI_images/antra_lobby_banner_1782744283860.jpg",
  aboutHeroBg: "/assets/images/AI_images/antra_about_side_1782744266546.jpg",
  contactHeroBg: "/assets/images/AI_images/antra_hero_bg_1782744248753.jpg",
  blogHeroBg: "/assets/images/AI_images/antra_hero_slide2_1782747378004.jpg",
  architectureServiceImg: "/assets/images/AI_images/architectural_pavilion_1784821025997.jpg",
  woodworkingGridImg: "/assets/images/AI_images/antra_project_loft_1782744318019.jpg",
  contactFooterBg: "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg",
  ctaBg: "/assets/images/AI_images/antra_transition_luxury_1782747459033.jpg",
  kitchenLayout: "/assets/images/AI_images/antra_project_loft_1782744318019.jpg"
};

// Royalty-free Unsplash photos (Unsplash License) for service illustrations where the studio has no
// photo of its own (wardrobes, offices, furniture...). Never used as Suthar Brothers' completed projects.
const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
export const STOCK_IMAGES = {
  wardrobeCloset: unsplash("1567401893414-76b7b1e5a7a5"),
  wardrobeShelving: unsplash("1595428774223-ef52624120d2"),
  officeDesk: unsplash("1497215728101-856f4ea42174"),
  officeLounge: unsplash("1524758631624-e2822e304c36"),
  officeCorridor: unsplash("1497366216548-37526070297c"),
  homeOffice: unsplash("1518455027359-f3f8164ba6bd"),
  furnitureConsole: unsplash("1618219908412-a29a1bb7b86e"),
  furnitureDining: unsplash("1615066390971-03e4e1c36ddf"),
  renovatedHome: unsplash("1560185007-cde436f6a4d0"),
  kitchenIsland: unsplash("1600585152220-90363fe7e115"),
  bathroom: unsplash("1620626011761-996317b8d101"),
  showroomLounge: unsplash("1538688525198-9b88f6f53126"),
};

export const NAV_LINKS = [
  { id: "home", label: "Home", view: "home" },
  { id: "about", label: "About Us", view: "about-us" },
  { id: "services", label: "Services", view: "services" },
  { id: "gallery", label: "Projects", view: "gallery" },
  { id: "blog", label: "Journal", view: "blog" },
  { id: "faqs", label: "FAQs", view: "faqs" },
  { id: "contact", label: "Contact", view: "contact" },
];

// Company Identity & Core Information
export const COMPANY_INFO = {
  name: "Suthar Brothers",
  brandName: "Suthar Brothers",
  tagline: "Interior Design & Execution",
  shortTagline: "30+ Years of Generational Woodworking Mastery",
  foundedYear: "1989",
  founder: "Ravalram H. Suthar",
  coFounder: "Shivkumar Suthar",
  leadArchitect: "Padam P. Sutar & Team",
  phone: "(+480) 123 678 900",
  phoneFormatted: "+480123678900",
  alternatePhone: "+91 98200 12345",
  email: "info@sutharstudio.com",
  supportEmail: "contact@sutharinterior.com",
  address: {
    full: "Linking Road, Santacruz West, Mumbai, Maharashtra 400054",
    street: "Linking Road",
    area: "Santacruz West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400054",
    country: "India",
    toString() { return this.full; },
    indianShowroom: {
      title: "Mumbai Flagship Studio",
      street: "Linking Road, Santacruz West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400054",
      phone: "+91 98197 76030"
    },
    usOffice: {
      title: "US Design Office",
      street: "5609 E Sprague Ave",
      city: "Spokane Valley",
      state: "WA",
      pincode: "99212",
      country: "USA"
    }
  },
  workingHours: "Mon - Sat: 9:30 AM - 7:30 PM",
  serviceCities: ["Mumbai", "Goa", "Pune"],
  socialLinks: {
    instagram: "https://instagram.com/sutharinteriorstudio",
    facebook: "https://facebook.com/sutharinteriorstudio",
    linkedin: "https://linkedin.com/company/sutharinteriorstudio",
    pinterest: "https://pinterest.com/sutharinteriorstudio",
  }
};

// Hero Section Content
export const HERO_DATA = {
  badgeText: "",
  titlePart1: "We Don't Just Design Spaces.",
  titlePart2: "We Breathe Life Into Them.",
  titleHighlighted: "100% Pure Turnkey Execution",
  description: "More than just an interior studio, we are a complete turnkey architectural powerhouse. From bespoke timber millwork to structural civil execution, we deliver a 100% pure, uncompromised end-to-end experience. Connect with us, and watch your vision unfold with absolute precision.",
  primaryCtaText: "Explore Our Portfolio",
  secondaryCtaText: "Book Free Consultation",
  statsBadge: "30+ Years Legacy",
  slides: [
    {
      id: 1,
      image: SITE_IMAGES.heroBg,
      title: "Architectural Precision & Luxury Finishes",
      location: "Santacruz West, Mumbai",
    },
    {
      id: 2,
      image: SITE_IMAGES.heroSlide2,
      title: "Bespoke Timber Joinery & Modular Systems",
      location: "Donapaula, Goa",
    }
  ],
  metrics: [
    { value: "35+", label: "Years Experience" },
    { value: "1,200+", label: "Projects Delivered" },
    { value: "100%", label: "Genuine Timber" },
    { value: "10-Yr", label: "Structural Warranty" },
  ]
};

// About Section Content
export const ABOUT_DATA = {
  badgeText: "OUR GENERATIONAL HERITAGE",
  headline: "A 35-Year Lineage of Spatial Mastery & Purity",
  quote: "“True spatial design does not obscure raw structure; it honors the grain of every wood timber and the flow of natural ambient light.”",
  quoteAuthor: "Ravalram H. Suthar",
  quoteTitle: "Founder & Master Woodcrafter (1989)",
  paragraphs: [
    "Founded as a master woodworking guild in 1989, Suthar Brothers was built on a singular philosophy: true spatial design must honor the raw structure and the natural grain of every material. We reject generic aesthetics in favor of 100% pure, uncompromised craftsmanship.",
    "Today, guided by lead architects and master craftsmen, we provide a complete, turnkey architectural package. We don't just supply furniture or draft 2D plans—we orchestrate the entire lifecycle of your project, from civil alterations to the final placement of bespoke millwork."
  ],
  highlights: [
    "Architect-Supervised Site Construction",
    "100% Genuine Marine Grade BWR Plywood & Teak",
    "In-House Custom Woodworking & Factory Millwork",
    "Transparent Bill of Quantities (BOQ) Blueprinting"
  ],
  experienceYears: "35+",
  image: SITE_IMAGES.aboutSide
};

// Key Statistics
export const STATS_DATA = [
  { id: "stat-1", number: "1,200+", label: "Completed Projects", description: "Delivered across Mumbai, Pune, and Goa" },
  { id: "stat-2", number: "35+", label: "Years Experience", description: "Multi-generational woodworking craft" },
  { id: "stat-3", number: "100%", label: "Material Guarantee", description: "Certified authentic hardwoods & marine ply" },
  { id: "stat-4", number: "10-Year", label: "Timber Warranty", description: "Peace of mind for every installation" },
];

// Core Services Breakdown
export const SERVICES_DATA = [
  {
    id: "interior-design",
    title: "Full Interior Design",
    category: "INTERIOR WORK",
    iconName: "Paintbrush",
    image: SITE_IMAGES.projectCoastal,
    shortDescription: "Complete spatial layout, lighting design, color consultation, and custom finish selection.",
    detailedDescription: "From skeleton raw concrete layouts to finished luxury living spaces, our full interior design service delivers bespoke residential penthouses and sea-facing apartments tailored to your lifestyle.",
    features: ["Space Planning & Layout", "Custom Color Schemes", "Lighting & Acoustic Design", "Material Procurement"]
  },
  {
    id: "carpentry-joinery",
    title: "Bespoke Carpentry & Joinery",
    category: "CARPENTRY",
    iconName: "Hammer",
    image: SITE_IMAGES.projectLoft,
    shortDescription: "Hand-crafted solid timber dining sets, fluted wood partitions, and modular wardrobe systems.",
    detailedDescription: "Our factory-direct woodworking facility produces custom marine-ply cabinetry, American Walnut credenzas, and precision-turned Teak partitions made by master craftsmen.",
    features: ["Modular Kitchens", "Walk-in Wardrobes", "Custom TV Consoles", "Solid Teak Furniture"]
  },
  {
    id: "painting-finishing",
    title: "Wall Art & Fine Coatings",
    category: "PAINTING & FINISHING",
    iconName: "Sparkles",
    image: SITE_IMAGES.transitionLuxury,
    shortDescription: "Italian stucco plasters, velvet luster coatings, PU wood polishing, and metallic textures.",
    detailedDescription: "Elevate your walls and timber surfaces with artisan Venetian plasters, high-durability polyurethane wood finishes, and textured architectural accent walls.",
    features: ["Italian Stucco Plaster", "PU & Melamine Polish", "Velvet Luster Coats", "Exposed Brick Textures"]
  },
  {
    id: "flooring-surfaces",
    title: "Marble & Hardwood Flooring",
    category: "FLOORING",
    iconName: "Ruler",
    image: SITE_IMAGES.architecturalPavilion,
    shortDescription: "Italian marble layings, solid hardwood oak planks, terrazzo tiles, and vitrified floors.",
    detailedDescription: "Precision stone cutting, mirror-finish diamond polishing, and moisture-sealed hardwood plank installations designed for humid coastal environments.",
    features: ["Italian Marble Laying", "Hardwood Wooden Planks", "Polished Granite Tiles", "Terrazzo & Epoxy Finishes"]
  },
  {
    id: "turnkey-renovation",
    title: "Turnkey Design-Build & Renovation",
    category: "RENOVATION",
    iconName: "Compass",
    image: SITE_IMAGES.lobbyBanner,
    shortDescription: "End-to-end site management, civil alterations, plumbing, electrical, and final styling.",
    detailedDescription: "A single point of accountability. We manage demolition, structural reinforcements, service rewiring, and white-glove handover on strict timeframes.",
    features: ["Civil Alterations", "Electrical & Plumbing", "Architect Supervision", "Transparent BOQ Costing"]
  }
];

// The 5-Step Process
export const PROCESS_DATA = {
  badgeText: "OUR TURNKEY METHODOLOGY",
  title: "The 5-Step Architectural Blueprint",
  description: "A disciplined, transparent execution pipeline that takes your spatial dream from initial site survey to white-glove handover.",
  steps: [
    {
      stepNumber: "01",
      title: "Consultation & Site Survey",
      description: "In-depth discussion of spatial requirements, budget parameters, laser site measurements, and structural feasibility analysis.",
      icon: "Calendar"
    },
    {
      stepNumber: "02",
      title: "3D Spatial Blueprinting",
      description: "Developing photorealistic 3D architectural renders, CAD floor plans, lighting grids, and material sample mood boards.",
      icon: "Ruler"
    },
    {
      stepNumber: "03",
      title: "Material Sourcing & BOQ",
      description: "Itemized Bill of Quantities (BOQ) with 100% transparent material specifications, hardware guarantees, and fixed timeline commitments.",
      icon: "Check"
    },
    {
      stepNumber: "04",
      title: "Factory Build & Site Construction",
      description: "In-house timber carpentry fabrication paired with architect-supervised civil, electrical, and finishing work on site.",
      icon: "Hammer"
    },
    {
      stepNumber: "05",
      title: "Quality Check & Handover",
      description: "Rigorous 50-point quality audit, deep cleaning, white-glove furniture installation, and handover with 10-year warranty documents.",
      icon: "Sparkles"
    }
  ]
};

// Team Members
export const TEAM_DATA = [
  {
    id: "team-1",
    name: "Ravalram H. Suthar",
    role: "Founder & Master Artisan",
    experience: "35+ Years Experience",
    bio: "Started the family woodworking business in 1989, from which Suthar Brothers grew. His experience in joinery and timber still guides our furniture work.",
    image: SITE_IMAGES.aboutSide
  },
  {
    id: "team-2",
    name: "Shivkumar Suthar",
    role: "Co-Founder & Technical Director",
    experience: "18+ Years Experience",
    bio: "Leads project delivery and client consultations, and makes sure materials, furniture production and site work come together as planned.",
    image: SITE_IMAGES.projectLoft
  },
  {
    id: "team-3",
    name: "Padam P. Sutar",
    role: "Lead Architect & Design Head",
    experience: "15+ Years Experience",
    bio: "Leads the design team: space planning, layouts, 3D views and design development for homes and workplaces.",
    image: SITE_IMAGES.projectCoastal
  },
  {
    id: "team-4",
    name: "Elena Suthar",
    role: "Senior Interior & Finish Stylist",
    experience: "12+ Years Experience",
    bio: "Specializes in luxury soft furnishings, color palettes, Italian stucco textures, and bespoke lighting arrangements.",
    image: SITE_IMAGES.transitionLuxury
  }
];

// Awards & Accolades
export const AWARDS_DATA = [
  {
    id: "award-1",
    title: "Excellence in Residential Interior Architecture",
    year: "2025",
    organization: "Indian Institute of Interior Designers (IIID)",
    description: "Awarded for the sea-facing penthouse project in Bandra West, Mumbai."
  },
  {
    id: "award-2",
    title: "Best Bespoke Timber Craftsmanship Studio",
    year: "2024",
    organization: "National Architecture & Woodworking Expo",
    description: "Recognizing 30+ years of uncompromised solid hardwood and marine-ply joinery."
  },
  {
    id: "award-3",
    title: "Luxury Turnkey Design Studio of the Year",
    year: "2023",
    organization: "Design Excellence Summit India",
    description: "For seamless end-to-end design-build execution across Maharashtra and Goa."
  }
];

// Why Choose Us Section
export const WHY_CHOOSE_US = {
  badgeText: "THE SUTHAR ADVANTAGE",
  title: "Why High-End Homeowners Trust Us",
  description: "We combine artisanal heritage with modern architect supervision to eliminate the stress of interior execution.",
  points: [
    {
      id: "point-1",
      title: "Generational Craftsmanship",
      description: "Over 35 years of timber craftsmanship guarantees superior joinery that stands up to time and humidity.",
      icon: "Award"
    },
    {
      id: "point-2",
      title: "100% Material Authentication",
      description: "We use only certified IS 710 Marine Grade BWR Plywood, authentic Indian Teak, and imported American Walnut.",
      icon: "Check"
    },
    {
      id: "point-3",
      title: "Architect-Supervised Sites",
      description: "Every site is managed by qualified architects to ensure exact CAD precision and zero structural compromises.",
      icon: "Users"
    },
    {
      id: "point-4",
      title: "Transparent BOQ Costing",
      description: "Clear itemized pricing before work begins. No surprise costs, hidden markups, or mid-project budget inflations.",
      icon: "Ruler"
    }
  ]
};

// Testimonials Data
export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    name: "Vikram & Ananya Mehta",
    location: "Santacruz West, Mumbai",
    projectType: "4BHK Duplex Penthouse",
    rating: 5,
    text: "Suthar Brothers transformed our bare duplex shell into a breathtaking, warm home. The custom walnut wardrobes and slatted teak room divider are absolute works of art.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300"
  },
  {
    id: "test-2",
    name: "Dr. Rajesh Kulkarni",
    location: "Koregaon Park, Pune",
    projectType: "Commercial Medical Suite",
    rating: 5,
    text: "Shivkumar and architect Padam delivered our clinic redesign on exact schedule. The acoustic wall paneling and customized reception counter exceeded our highest expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300"
  },
  {
    id: "test-3",
    name: "Natasha Fernandez",
    location: "Candolim, Goa",
    projectType: "Heritage Villa Renovation",
    rating: 5,
    text: "Renovating an old Goan bungalow is fraught with moisture issues. the Suthar Brothers team used waterproof marine ply for the modular kitchen and restored our high timber roof beautifully.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300"
  }
];

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

// Footer Navigation & Legal Info
export const FOOTER_DATA = {
  aboutText: "Suthar Brothers is an architect-led interior design and bespoke timber joinery studio. Established in 1989, delivering luxury residential and commercial spaces across Mumbai, Goa, and Pune.",
  quickLinks: [
    { label: "Home", view: "home" },
    { label: "About Us", view: "about-us" },
    { label: "Our Services", view: "services" },
    { label: "Project Gallery", view: "gallery" },
    { label: "Journal & Blog", view: "blog" },
    { label: "Contact Us", view: "contact" },
  ],
  serviceLinks: [
    { label: "Full Interior Design", view: "services" },
    { label: "Bespoke Carpentry", view: "services" },
    { label: "Painting & Finishing", view: "services" },
    { label: "Marble & Hardwood Flooring", view: "services" },
    { label: "Turnkey Renovation", view: "services" },
    { label: "FAQs & Info", view: "faqs" },
  ],
  copyrightText: "© 1989 - 2026 Suthar Brothers. All rights reserved.",
  legalLinks: [
    { label: "Privacy Policy", view: "privacy" },
    { label: "Terms of Service", view: "terms" },
    { label: "Sitemap", view: "sitemap" },
  ]
};

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
  whyChooseUs: [
    { title: "Family Craftsmanship Since 1989", desc: "Over three decades of trust and high-quality woodwork heritage.", iconName: "History" },
    { title: "Architect Guided Projects", desc: "Every project is supervised and verified by certified architects.", iconName: "Compass" },
    { title: "Experienced Team", desc: "Highly skilled supervisors, carpenters, and civil engineers on site.", iconName: "Users" },
    { title: "Customized Designs", desc: "Unique layouts tailored exactly to your lifestyle and visual memory.", iconName: "Sparkles" },
    { title: "Transparent Pricing", desc: "No hidden layers, fair bill of quantities, and honest guidance.", iconName: "ShieldCheck" },
    { title: "Premium Workmanship", desc: "Exquisite finishes, flawless joints, and structural durability.", iconName: "Award" }
  ],
  industries: [
    { name: "Residential", count: "01" },
    { name: "Commercial", count: "02" },
    { name: "Corporate Offices", count: "03" },
    { name: "Hospitality", count: "04" },
    { name: "Retail", count: "05" },
    { name: "Industrial", count: "06" },
    { name: "Educational", count: "07" },
    { name: "Healthcare", count: "08" }
  ],
  cities: [
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
    { year: "2024", title: "Pan-India Presence", description: "Further growth into Bengaluru, Hyderabad, Hubballi, and surrounding progressive cities." },
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
  expertises: [
    { title: "Residential Interiors", desc: "Bespoke home environments, custom cabinetry, and high-contrast ambient lighting layouts.", iconName: "Sparkles" },
    { title: "Commercial Interiors", desc: "Productive, inspiring corporate environments and client-facing business spaces.", iconName: "Briefcase" },
    { title: "Architecture", desc: "Thoughtful space planning, architectural drafting, and direct structural supervision.", iconName: "Compass" },
    { title: "Custom Furniture", desc: "Artisanal wardrobes, modular kitchen setups, media units, and bespoke loose seating.", iconName: "Hammer" },
    { title: "Renovation", desc: "Upgrading existing structural bones into beautiful, highly functional modern layouts.", iconName: "History" },
    { title: "Turnkey Projects", desc: "Complete end-to-end execution, civil, plumbing, painting, electrics, and key handover.", iconName: "Workflow" },
    { title: "Painting & Finishing", desc: "Premium texture washes, lime plaster applications, and flawless protective coating coats.", iconName: "Layers" },
    { title: "Electrical Solutions", desc: "Integrated automation mapping, smart lighting channels, and heavy electrical infrastructure.", iconName: "ShieldCheck" }
  ],
  cities: [
    { name: "Mumbai", detail: "Our primary metro region for luxury turnkey residential & commercial contracting." },
    { name: "Pune", detail: "Custom contemporary apartments and customized modular cabinetry." },
    { name: "Goa", detail: "Luxury beachside villas, custom joinery, and premium hospitality spaces." },
    { name: "Bengaluru", detail: "Modern homes and office interiors." },
    { name: "Hyderabad", detail: "Bespoke furniture execution and premium family homes." },
    { name: "Hubballi", detail: "Turnkey interior execution, renovation, and modular installations." },
    { name: "Kumta", detail: "Our native core hub providing high-quality carpentry with trusted local craft heritage." },
    { name: "Honnavar", detail: "Private homes, renovation and custom furniture." },
    { name: "Murudeshwar", detail: "Coastal commercial ventures and contemporary beach homes." },
    { name: "Nearby Regions", detail: "Surrounding cities and progressive towns based on bespoke scope & requirements." }
  ]
};

// Extended Contact Page Dataset
export const CONTACT_PAGE_DATA = {
  contactMethods: [
    {
      title: "Phone",
      action: "Call Now",
      detail: "+1 (480) 456-0789",
      subDetail: "Mon-Sat, 9am - 7pm",
      link: "tel:+14804560789",
      iconName: "Phone",
      color: "bg-gold-accent/10 text-gold-accent"
    },
    {
      title: "Email",
      action: "Send Email",
      detail: "info@sutharstudio.com",
      subDetail: "24-hour response SLA",
      link: "mailto:info@sutharstudio.com",
      iconName: "Mail",
      color: "bg-gold-accent/10 text-gold-accent"
    },
    {
      title: "WhatsApp",
      action: "Chat Now",
      detail: "+91 98200 12345",
      subDetail: "Instant studio messaging",
      link: "https://wa.me/919820012345",
      iconName: "MessageSquare",
      color: "bg-gold-accent/10 text-gold-accent"
    },
    {
      title: "Flagship Studio",
      action: "Get Directions",
      detail: "Linking Road, Santacruz West, Mumbai",
      subDetail: "Maharashtra 400054",
      link: "https://maps.app.goo.gl/YV9Z6",
      iconName: "MapPin",
      color: "bg-gold-accent/10 text-gold-accent"
    }
  ],
  whyBookConsultation: [
    {
      title: "Direct Access To Senior Architects",
      desc: "Speak with lead designers who oversee project execution from concept to handover.",
      iconName: "Users"
    },
    {
      title: "Transparent Cost Estimates",
      desc: "Receive clear itemized BOQs with zero hidden fees or unexpected extras.",
      iconName: "ShieldCheck"
    },
    {
      title: "Factory-Direct Timber Craft",
      desc: "Bespoke joinery manufactured directly in our state-of-the-art facility.",
      iconName: "Sparkles"
    },
    {
      title: "Rapid Project Timelines",
      desc: "Structured milestone delivery guaranteeing on-time project handover.",
      iconName: "Zap"
    }
  ]
};

// Extended Testimonials & Partners Dataset
export const TESTIMONIALS_PAGE_DATA = {
  testimonials: [
    {
      id: "review-01",
      score: "4.92",
      reviewsCount: "2,650+ VERIFIED REVIEWS",
      highlight: "From Concept To Reality, The Team Turned My Vision Into A Stunning, Livable Space. I Couldn't Be Happier With The Result.",
      quote: "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process. The master timber joinery in our living room is an absolute showstopper.",
      author: "Morgan Dufresne",
      role: "Company Founder",
      location: "Mumbai Flagship",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
      siteImage: SITE_IMAGES.architecturalPavilion
    },
    {
      id: "review-02",
      score: "4.98",
      reviewsCount: "ARCHITECT SUPERVISED",
      highlight: "Pristine Precision, Flawless Civil Execution & Zero On-Site Delays.",
      quote: "Suthar Brothers renovated our 4,000 sq.ft duplex in Pune without a single hitch. Their lead architects managed every civil modification and custom wardrobe installation with utmost professionalism.",
      author: "Rajesh & Ananya Mehta",
      role: "Villa Owners",
      location: "Koregaon Park, Pune",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
      siteImage: SITE_IMAGES.transitionLuxury
    },
    {
      id: "review-03",
      score: "5.00",
      reviewsCount: "WEATHER-PROOF JOINERY",
      highlight: "Custom Coastal Estate Finishes That Stand The Test Of Time.",
      quote: "Building a beachfront estate in Goa requires extreme material durability. Suthar Brothers' marine-grade teak joinery and open verandah layout exceeded all our expectations.",
      author: "Dr. Vikram Kulkarni",
      role: "Estate Client",
      location: "Coastal Goa",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
      siteImage: SITE_IMAGES.heroBg
    }
  ],
  partners: [
    { name: "TREND INTERIORS", iconName: "Layout" },
    { name: "INTERIOR PREMIUM", iconName: "Home" },
    { name: "BUILDING CONSTRUCTION", iconName: "Building2" },
    { name: "REAL ESTATE", iconName: "Home" },
    { name: "BUILDING CONTRACTS", iconName: "Compass" },
    { name: "ARCHITECT STUDIO", iconName: "Ruler" }
  ]
};

// Final CTA Dataset
export const FINAL_CTA_DATA = {
  highlights: [
    {
      title: "Free Consultation",
      desc: "Discuss your ideas with our experienced team before making any decisions.",
      iconName: "MessageSquare"
    },
    {
      title: "Architect Guided",
      desc: "Every project is carefully planned and supervised by experienced architects.",
      iconName: "Compass"
    },
    {
      title: "Flexible Execution",
      desc: "Choose labour only, labour with materials, furniture manufacturing, or complete turnkey solutions.",
      iconName: "Workflow"
    },
    {
      title: "Family Craftsmanship Since 1989",
      desc: "Over three decades of experience built on trust, quality, and long-lasting client relationships.",
      iconName: "History"
    }
  ]
};

// Demo Video URLs
export const DEMO_VIDEOS = [
  "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-a-living-room-and-a-large-window-41556-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-and-bright-house-41557-large.mp4"
];

// Unified Master Export Object
export const siteContent = {
  company: COMPANY_INFO,
  images: SITE_IMAGES,
  hero: HERO_DATA,
  about: ABOUT_DATA,
  stats: STATS_DATA,
  services: SERVICES_DATA,
  process: PROCESS_DATA,
  team: TEAM_DATA,
  awards: AWARDS_DATA,
  whyChooseUs: WHY_CHOOSE_US,
  testimonials: TESTIMONIALS_DATA,
  faqs: FAQ_DATA,
  footer: FOOTER_DATA,
  projects: projects,
  blogArticles: blogArticles,
};

export default siteContent;
