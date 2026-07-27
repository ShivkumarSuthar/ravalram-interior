/**
 * Suthar Interior Studio & Architecture - Centralized Site Content & Data Store
 * All text, images, company metadata, services, team info, stats, and navigation data
 */

import { projects } from "./project-data.js";
import { blogArticles } from "./blog-data.js";
import { DEFAULT_THEME, THEME_PRESETS } from "./theme.js";

// Asset Image Paths
export const SITE_IMAGES = {
  heroBg: "/assets/images/AI_images/antra_hero_bg_1782744248753.jpg",
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

// Company Identity & Core Information
export const COMPANY_INFO = {
  name: "Suthar Interior Studio & Architecture",
  brandName: "suthar.",
  tagline: "Architect-Led Interior Design & Bespoke Timber Joinery Since 1989",
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
  badgeText: "ESTABLISHED 1989 • ARCHITECT-SUPERVISED EXECUTION",
  titlePart1: "Crafting Timeless",
  titlePart2: "Spatial Excellence",
  titleHighlighted: "Architecture & Bespoke Joinery",
  description: "Transforming high-end residential penthouses, sea-facing villas, and modern commercial offices across Mumbai, Goa, and Pune with master woodwork, authentic materials, and precision blueprints.",
  primaryCtaText: "Explore Projects",
  secondaryCtaText: "Book Consultation",
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
    },
    {
      id: 3,
      image: SITE_IMAGES.heroSlide3,
      title: "Fluid Commercial Workspaces & Showrooms",
      location: "Koregaon Park, Pune",
    },
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
  headline: "30+ Years of Passionate Architectural Woodcraft",
  quote: "“True spatial design does not obscure raw structure; it honors the grain of every wood timber and the flow of natural ambient light.”",
  quoteAuthor: "Ravalram H. Suthar",
  quoteTitle: "Founder & Master Woodcrafter (1989)",
  paragraphs: [
    "Suthar Interior Studio was established in 1989 with a foundational commitment to uncompromised woodworking mastery and honest architectural execution. What began as a master joinery guild in Mumbai has evolved into a premier full-scale interior design and architecture studio.",
    "Led today by Shivkumar Suthar and lead architect Padam P. Sutar, our studio bridges traditional artisan joinery techniques with contemporary computational CAD, 3D spatial modeling, and end-to-end turnkey site execution."
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
    bio: "Pioneering woodcrafter who established Suthar Interior Studio in 1989. Master of traditional joinery and timber selection.",
    image: SITE_IMAGES.aboutSide
  },
  {
    id: "team-2",
    name: "Shivkumar Suthar",
    role: "Co-Founder & Technical Director",
    experience: "18+ Years Experience",
    bio: "Spearheads full-scale project orchestration, client consultations, factory millwork integration, and material quality assurance.",
    image: SITE_IMAGES.projectLoft
  },
  {
    id: "team-3",
    name: "Padam P. Sutar",
    role: "Lead Principal Architect",
    experience: "15+ Years Experience",
    bio: "Drives spatial layout architecture, 3D computational design, structural alterations, and luxury residential conceptualization.",
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
    text: "Suthar Interior Studio transformed our bare duplex shell into a breathtaking, warm home. The custom walnut wardrobes and slatted teak room divider are absolute works of art.",
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
    text: "Renovating an old Goan bungalow is fraught with moisture issues. Suthar's team used waterproof marine ply for the modular kitchen and restored our high timber roof beautifully.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300"
  }
];

// FAQs List
export const FAQ_DATA = [
  {
    id: "faq-1",
    category: "general",
    question: "What geographical locations does Suthar Interior Studio cover?",
    answer: "We primarily operate across Mumbai (Bandra, Juhu, Santacruz West, Worli), Pune (Koregaon Park, Kalyani Nagar), and Goa (Donapaula, Candolim, Panjim). We also take up select luxury turnkey projects across Bengaluru, Hyderabad, Hubballi, and coastal Karnataka."
  },
  {
    id: "faq-2",
    category: "contracting",
    question: "How long does a typical full-home interior design project take?",
    answer: "A standard 3BHK or 4BHK turnkey interior project takes between 75 to 120 working days from design approval to final handover, depending on civil modifications and custom millwork volume."
  },
  {
    id: "faq-3",
    category: "materials",
    question: "What timber and materials do you use for custom cabinetry?",
    answer: "We use 100% certified IS 710 Marine BWR Grade Plywood for all wet zones (kitchens, bathrooms) and high-density moisture-resistant MDF or BWR ply for bedrooms. Hardwoods include Indian Teak, American Walnut, and European Oak."
  },
  {
    id: "faq-4",
    category: "budget",
    question: "How do you structure your fees and payment schedules?",
    answer: "We provide an itemized Bill of Quantities (BOQ) breaking down civil work, millwork, hardware, finishes, and design fees. Payments are tied transparently to project milestones (Design Approval, Factory Fabrication, Site Installation, Handover)."
  },
  {
    id: "faq-5",
    category: "warranty",
    question: "Do you offer warranties on custom woodwork and hardware?",
    answer: "Yes, we provide a 10-year structural warranty on all custom timber cabinetry and millwork fabricated in our facility, along with standard manufacturer warranties on hardware (Blum, Hafele, Hettich)."
  },
  {
    id: "faq-6",
    category: "design",
    question: "How accurate are your 2D and 3D virtual renderings?",
    answer: "Our renderings are built using calibrated physical models, real manufacturer material shaders, and detailed daylight path simulation. This guarantees 98% visual accuracy, allowing you to preview how natural lighting and linear fixtures illuminate travertine and timber finishes."
  },
  {
    id: "faq-7",
    category: "design",
    question: "Can I make changes to the layout design after blueprints are finished?",
    answer: "Yes. During Phase Two (Blueprint Visualization), we provide up to three revision loops. We encourage client partners to iterate on layout modifications virtually in CAD software before we procure custom-cut stones or start millwork."
  },
  {
    id: "faq-8",
    category: "contracting",
    question: "Are your interior contracting services fully licensed and insured?",
    answer: "Absolutely. Suthar Interior Studio is fully licensed, bonded, and carries comprehensive general liability insurance alongside full workers' compensation coverage. All works strictly conform to local municipal structural regulations."
  },
  {
    id: "faq-9",
    category: "general",
    question: "Do architects supervise every project on site?",
    answer: "Yes, without exception. Every design elevation, civil alteration, and execution stage is reviewed, measured, and verified on-site by our qualified in-house architects to ensure zero structural errors."
  },
  {
    id: "faq-10",
    category: "materials",
    question: "Can I choose my own materials or hardware brands?",
    answer: "Yes, we encourage total material transparency. You can select your preferred timber, plywood grade, veneers, and hardware brands (Blum, Hafele, Hettich) under direct guidance from our studio architects."
  }
];

// Footer Navigation & Legal Info
export const FOOTER_DATA = {
  aboutText: "Suthar Interior Studio is an architect-led interior design and bespoke timber joinery studio. Established in 1989, delivering luxury residential and commercial spaces across Mumbai, Goa, and Pune.",
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
  copyrightText: "© 1989 - 2026 Suthar Interior Studio & Architecture. All rights reserved.",
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
      image: SITE_IMAGES.architectureServiceImg,
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
      image: SITE_IMAGES.projectCoastal,
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
      image: SITE_IMAGES.transitionLuxury,
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
      image: SITE_IMAGES.projectLoft,
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
      image: SITE_IMAGES.aboutSide,
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
      image: SITE_IMAGES.lobbyBanner,
      accent: "COMPLETE CONTRACTING"
    }
  ],
  executionModels: [
    { title: "Labour Only", desc: "You procure raw materials; our skilled carpenters and craftsmen execute the blueprints flawlessly." },
    { title: "Labour + Materials", desc: "Transparent, certified material sourcing combined with experienced structural execution." },
    { title: "Complete Turnkey", desc: "End-to-end peace of mind. We take full accountability from initial design to key handover." },
    { title: "Furniture Only", desc: "Custom furniture manufacturing at our workshop, delivered and assembled at your location." },
    { title: "Material Selection", desc: "Guidance through marble yards, plywood tests, hardware selections, and premium veneers." },
    { title: "Architect Supervision", desc: "Regular site audits by our experienced architects to ensure construction matches plans." }
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
    { year: "Today", title: "Unified Creative Studio", description: "Suthar Interior Studio continues to deliver architect-led interior and custom furniture solutions across multiple cities." }
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
    { name: "Bengaluru", detail: "Architect-supervised modern homes and tech-workspace environments." },
    { name: "Hyderabad", detail: "Bespoke furniture execution and premium family homes." },
    { name: "Hubballi", detail: "Turnkey interior execution, renovation, and modular installations." },
    { name: "Kumta", detail: "Our native core hub providing high-quality carpentry with trusted local craft heritage." },
    { name: "Honnavar", detail: "Custom private homes and architect-guided remodeling contracts." },
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
      quote: "Suthar Studio renovated our 4,000 sq.ft duplex in Pune without a single hitch. Their lead architects managed every civil modification and custom wardrobe installation with utmost professionalism.",
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
      quote: "Building a beachfront estate in Goa requires extreme material durability. Suthar's marine-grade teak joinery and open verandah layout exceeded all our expectations.",
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
  theme: DEFAULT_THEME,
  themePresets: THEME_PRESETS,
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
