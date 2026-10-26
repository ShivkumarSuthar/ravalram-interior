/**
 * Inner-page content (about, services, projects, journal, contact, FAQs, cities, utility pages).
 * Reuses the studio data in data.js; title arrays follow the same { gold } convention as home-content.js.
 */

import { SITE_IMAGES, STOCK_IMAGES, ABOUT_PAGE_DATA, SERVICES_PAGE_DATA, FAQ_DATA } from "./data.js";
import { GALLERY_IMAGES } from "./home-content.js";
import { INVESTMENT_CATEGORIES } from "./investment-data.js";

export const BANNERS = {
  about: SITE_IMAGES.transitionLuxury,
  services: SITE_IMAGES.livingBright,
  gallery: SITE_IMAGES.heroSlide3,
  blog: SITE_IMAGES.heroSlide2,
  contact: SITE_IMAGES.heroBg,
  faqs: SITE_IMAGES.aboutSide,
  legal: SITE_IMAGES.projectCoastal,
  city: SITE_IMAGES.projectCoastal,
  utility: SITE_IMAGES.transitionLuxury,
};

export const ABOUT_PAGE = {
  intro: {
    eyebrow: "Our Story",
    title: ["A Family Business ", { gold: "Built On" }, " Craftsmanship"],
    paragraphs: [
      "Suthar Brothers began as a family woodworking business in 1989. Furniture, wardrobes and kitchens made with care earned the trust of families, and that trust grew into complete interior projects.",
      "Today our designers, craftsmen and site team work together on every project. With 30+ years of interior work, we bring the experience and a keen eye for quality that every home, office and commercial space deserves.",
    ],
    years: "30+",
    yearsLabel: "Years Of Experience",
    cta: { label: "Talk To Our Team", href: "/contact" },
    image: { src: SITE_IMAGES.aboutSide, alt: "Reading corner with an armchair, side table and brass floor lamp" },
  },
  band: { src: SITE_IMAGES.projectLoft, alt: "Living area with a brick wall, oak furniture and pendant light" },
  history: {
    eyebrow: "Our History",
    title: ["Over Three Decades ", { gold: "Of Steady" }, " Growth"],
    events: ABOUT_PAGE_DATA.timelineEvents,
  },
  values: {
    eyebrow: "What We Stand For",
    title: ["The Values ", { gold: "Behind" }, " Every Project"],
    items: ABOUT_PAGE_DATA.values,
  },
  cities: {
    eyebrow: "Where We Work",
    title: ["Cities ", { gold: "We Serve" }],
    items: ABOUT_PAGE_DATA.cities,
  },
};

export const SERVICES_PAGE = {
  core: {
    eyebrow: "Our Services",
    title: ["Design, Furniture And ", { gold: "Site Work," }, " Under One Roof"],
    items: SERVICES_PAGE_DATA.coreServices,
  },
  models: {
    eyebrow: "Ways To Work With Us",
    title: ["Choose The Level Of ", { gold: "Support" }, " You Need"],
    image: { src: SITE_IMAGES.transitionLuxury, alt: "" },
    items: SERVICES_PAGE_DATA.executionModels,
  },
  steps: {
    eyebrow: "Step By Step",
    title: ["From First Call ", { gold: "To Handover" }],
    items: SERVICES_PAGE_DATA.processSteps,
  },
  faq: {
    eyebrow: "Service Questions",
    title: ["Answers About ", { gold: "How We Work" }],
    items: SERVICES_PAGE_DATA.faqs.map((f) => ({ question: f.q, answer: f.a })),
  },
};

export const GALLERY_PAGE = {
  projects: {
    eyebrow: "Featured Projects",
    title: ["Spaces We Have ", { gold: "Designed" }, " And ", { gold: "Built" }],
  },
  images: {
    eyebrow: "Our Gallery",
    title: ["Inside ", { gold: "Our Work" }],
    items: GALLERY_IMAGES,
  },
};

// Pricing: indicative starting rates per sq ft from investment-data.js.
// "bespoke-furniture" is left out because its rate is quoted per order unit, not per sq ft.
export const PRICING = {
  eyebrow: "Pricing Plans",
  title: ["Plan Your Space, ", { gold: "Know" }, " The Cost"],
  intro: {
    title: ["Your Home, ", { gold: "Our Craft." }, " Let's Build It."],
    text: "Every quote is itemised, so you see exactly what goes into your space before work begins.",
    image: SITE_IMAGES.heroSlide3,
  },
  // Photo per category
  images: {
    "full-home": SITE_IMAGES.heroBg,
    "apartment-interior": SITE_IMAGES.livingBright,
    "villa-interior": SITE_IMAGES.transitionLuxury,
    "kitchen-custom": SITE_IMAGES.heroSlide2,
    "bathroom-sanctuary": STOCK_IMAGES.bathroom,
    "living-lounge": SITE_IMAGES.livingGreen,
    "bedroom-suite": SITE_IMAGES.bedroomTwo,
    "home-office": STOCK_IMAGES.homeOffice,
    "commercial-office": STOCK_IMAGES.officeLounge,
    "retail-showroom": STOCK_IMAGES.showroomLounge,
  },
  tierNames: { curated: "Essential", signature: "Signature", masterpiece: "Luxury" },
  featured: "signature",
  // Ways to engage the studio; every quote is itemised and options can be combined
  models: [
    { title: "With Materials", tag: "Complete Turnkey", text: "We supply the materials, make the furniture and carry out the site work. One quote covers everything." },
    { title: "Without Materials", tag: "You Buy Materials", text: "You buy the materials you prefer; we provide design, craftsmen and site execution." },
    { title: "Labour Only", tag: "Skilled Team", text: "Our carpenters, painters and site team working with materials you have already arranged." },
    { title: "Per Sq Ft Or Per Item", tag: "Flexible", text: "Area-based rates for full projects, or per-item pricing for kitchens, wardrobes and furniture." },
  ],
  modelsText: "Choose the arrangement that suits your budget, or combine them. Every quote is itemised, so you see exactly what you are paying for.",
  note: "The rates below are indicative starting prices per sq ft with materials. Without-material and labour-only work is quoted separately after a site visit, based on your scope.",
  categories: INVESTMENT_CATEGORIES,
  homeCategories: ["apartment-interior", "full-home", "villa-interior", "kitchen-custom"],
  faq: {
    eyebrow: "Pricing Questions",
    title: ["How Our ", { gold: "Pricing" }, " Works"],
    items: [
      ...FAQ_DATA.filter((f) => f.category === "budget").map((f) => ({ question: f.question, answer: f.answer })),
      ...SERVICES_PAGE_DATA.faqs
        .filter((f) => /payment|charge|labour|materials/i.test(f.q))
        .map((f) => ({ question: f.q, answer: f.a })),
    ],
  },
};

export const BLOG_PAGE = {
  eyebrow: "Our Journal",
  title: ["Ideas And Advice ", { gold: "For Your Next" }, " Project"],
};

export const CONTACT_PAGE = {
  eyebrow: "Get In Touch",
  title: ["Have A Project In Mind? ", { gold: "Let's Make" }, " It Happen"],
  hours: "Mon - Sat: 9:30 AM - 7:30 PM",
  image: { src: SITE_IMAGES.heroBg, alt: "Living room with timber wall panelling and a garden view" },
  formTitle: "Tell Us About Your Space",
  formText: "Share a few details and our team will call you to discuss your project and arrange a site visit.",
  cities: ABOUT_PAGE_DATA.cities.filter((c) => c.name !== "Nearby Areas").map((c) => c.name).concat("Other"),
  services: SERVICES_PAGE_DATA.coreServices.map((s) => s.title),
};

export const FAQ_PAGE = {
  eyebrow: "Popular Questions",
  title: ["Quick And Clear Answers ", { gold: "To Your Key" }, " Questions"],
  items: FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer })),
  help: {
    title: "Still Have A Question?",
    text: "Our team will talk you through process, materials, costs and timelines for your space.",
    image: { src: SITE_IMAGES.heroSlide2, alt: "Open kitchen with island seating and a dining table" },
  },
};

export const THANK_YOU_PAGE = {
  title: "Thank You",
  heading: ["We Have Received ", { gold: "Your Enquiry" }],
  text: "Thank you for reaching out to Suthar Brothers. A member of our team will contact you soon to understand your requirements.",
  steps: [
    { title: "We Review Your Brief", text: "Our team reads through your project details and requirements." },
    { title: "We Call You", text: "We discuss your space, budget and timeline, and arrange a site visit." },
    { title: "We Share A Proposal", text: "You receive a design direction and an itemised estimate to review." },
  ],
};

export const NOT_FOUND_PAGE = {
  title: "Page Not Found",
  text: "The page you are looking for may have moved or no longer exists. Try one of these instead.",
  links: [
    { label: "Our Services", href: "/services" },
    { label: "Our Projects", href: "/gallery" },
    { label: "Journal", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const COMING_SOON_PAGE = {
  eyebrow: "Coming Soon",
  title: ["Something New Is ", { gold: "In The Works!" }],
  text: "We are preparing something new for you. Leave your email and we will let you know when it is ready.",
  // Set an ISO date (e.g. "2027-01-15T10:00:00+05:30") to show a countdown; leave empty to hide it
  launchDate: "",
  background: SITE_IMAGES.transitionLuxury,
};

// City landing pages: URL slug → city name. The [city] route, sitemap and about page all read this list
export const CITY_PAGES = {
  mumbai: "Mumbai",
  pune: "Pune",
  goa: "Goa",
  madgaon: "Madgaon",
  panaji: "Panaji",
  bangalore: "Bengaluru",
  honnavar: "Honnavar",
  kumta: "Kumta",
};

export function getCity(slug) {
  const name = CITY_PAGES[slug];
  const entry = ABOUT_PAGE_DATA.cities.find((c) => c.name === name);
  return {
    name,
    eyebrow: `Interior Design In ${name}`,
    title: ["Homes And Workplaces ", { gold: "Designed And Built" }, ` In ${name}`],
    text: entry
      ? `${entry.detail} Our design team plans each layout, our craftsmen make the furniture, and our site team handles execution from start to handover.`
      : `Our design team plans each layout, our craftsmen make the furniture, and our site team handles execution in ${name} from start to handover.`,
    points: ["Homes, Offices & Shops", "Planned By Our Design Team", "Furniture Made To Measure", "Flexible Pricing Options"],
    image: { src: SITE_IMAGES.livingGreen, alt: "Living room with a sage green wall and wooden furniture" },
  };
}

export const CITY_FAQ = FAQ_DATA.slice(0, 5).map((f) => ({ question: f.question, answer: f.answer }));
