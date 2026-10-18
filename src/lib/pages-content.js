/**
 * Inner-page content (about, services, projects, journal, contact, FAQs, cities, utility pages).
 * Reuses the studio data in data.js; title arrays follow the same { gold } convention as home-content.js.
 */

import { SITE_IMAGES, ABOUT_PAGE_DATA, SERVICES_PAGE_DATA, FAQ_DATA, TEAM_DATA } from "./data.js";
import { GALLERY_IMAGES } from "./home-content.js";
import { INVESTMENT_CATEGORIES } from "./investment-data.js";

export const FOUNDED = 1989;

export const BANNERS = {
  about: SITE_IMAGES.transitionLuxury,
  services: SITE_IMAGES.projectLoft,
  gallery: SITE_IMAGES.heroSlide3,
  blog: SITE_IMAGES.heroSlide2,
  contact: SITE_IMAGES.contactHeroBg,
  faqs: SITE_IMAGES.aboutSide,
  legal: SITE_IMAGES.projectCoastal,
  city: SITE_IMAGES.projectCoastal,
  utility: SITE_IMAGES.transitionLuxury,
};

export const ABOUT_PAGE = {
  intro: {
    eyebrow: "Our Story",
    title: ["A Family Workshop ", { gold: "That Became" }, " A Complete Interior Studio"],
    paragraphs: [
      "Suthar began in 1989 as a woodworking workshop run by Ravalram H. Suthar. Wardrobes, kitchens and furniture built with care earned the trust of families, and that trust grew into full interior projects.",
      "Today Shivkumar Suthar leads project delivery, and our architects led by Padam P. Sutar plan every layout. Design, joinery and site work stay with one team, so nothing gets lost between the drawing and the finished room.",
    ],
    yearsLabel: "Years Of Craft",
    cta: { label: "Talk To Our Team", href: "/contact" },
    image: { src: SITE_IMAGES.aboutSide, alt: "Suthar living room with custom side table and lighting" },
  },
  band: { src: SITE_IMAGES.projectLoft, alt: "Suthar living room with brick wall and oak furniture" },
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
  team: {
    eyebrow: "Our Team",
    title: ["The People ", { gold: "Who Lead" }, " Your Project"],
    // Leadership named in the studio profile; add photos here when available
    people: TEAM_DATA.slice(0, 3),
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
  // Studio photos per category (the investment data uses stock photos, which aren't shown)
  images: {
    "full-home": SITE_IMAGES.contactHeroBg,
    "apartment-interior": SITE_IMAGES.projectLoft,
    "villa-interior": SITE_IMAGES.transitionLuxury,
    "kitchen-custom": SITE_IMAGES.heroSlide2,
    "bathroom-sanctuary": SITE_IMAGES.aboutSide,
    "living-lounge": SITE_IMAGES.projectCoastal,
    "bedroom-suite": SITE_IMAGES.bedroomTwo,
    "home-office": SITE_IMAGES.heroSlide3,
    "commercial-office": SITE_IMAGES.projectLoft,
    "retail-showroom": SITE_IMAGES.architecturalPavilion,
  },
  tierNames: { curated: "Essential", signature: "Signature", masterpiece: "Luxury" },
  featured: "signature",
  note: "Rates are indicative starting prices per sq ft. Your final quote follows a site visit and depends on the materials, finishes and scope you choose.",
  categories: INVESTMENT_CATEGORIES.filter((c) => c.id !== "bespoke-furniture"),
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
  image: { src: SITE_IMAGES.contactHeroBg, alt: "Suthar living room designed and built by the studio" },
  formTitle: "Tell Us About Your Space",
  formText: "Share a few details and our team will call you to discuss your project and arrange a site visit.",
  cities: ["Mumbai", "Pune", "Goa", "Bengaluru", "Hyderabad", "Hubballi", "Kumta", "Honnavar", "Other"],
  services: SERVICES_PAGE_DATA.coreServices.map((s) => s.title),
};

export const FAQ_PAGE = {
  eyebrow: "Popular Questions",
  title: ["Quick And Clear Answers ", { gold: "To Your Key" }, " Questions"],
  items: FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer })),
  help: {
    title: "Still Have A Question?",
    text: "Our team will talk you through process, materials, costs and timelines for your space.",
    image: { src: SITE_IMAGES.heroSlide2, alt: "Suthar kitchen and dining interior" },
  },
};

export const THANK_YOU_PAGE = {
  title: "Thank You",
  heading: ["We Have Received ", { gold: "Your Enquiry" }],
  text: "Thank you for reaching out to Suthar Living. A member of our team will contact you soon to understand your requirements.",
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

// City landing pages, keyed by the URL slug used in src/app/[city]/page.jsx
const CITY_NAMES = {
  mumbai: "Mumbai",
  pune: "Pune",
  goa: "Goa",
  bangalore: "Bengaluru",
  hyderabad: "Hyderabad",
  hubli: "Hubballi",
  kumta: "Kumta",
  honnavar: "Honnavar",
};

export function getCity(slug) {
  const name = CITY_NAMES[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  const entry = ABOUT_PAGE_DATA.cities.find((c) => c.name === name);
  return {
    name,
    eyebrow: `Interior Design In ${name}`,
    title: ["Homes And Workplaces ", { gold: "Designed And Built" }, ` In ${name}`],
    text: entry
      ? `${entry.detail} Our architects plan each layout, our workshop builds the furniture, and our site team handles execution from start to handover.`
      : `Our architects plan each layout, our workshop builds the furniture, and our site team handles execution in ${name} from start to handover.`,
    points: ["Free First Consultation", "Architect-Led Planning", "Furniture From Our Workshop", "Itemised Quotes"],
    image: { src: SITE_IMAGES.heroSlide2, alt: `Suthar interior project in ${name}` },
  };
}

export const CITY_FAQ = FAQ_DATA.slice(0, 5).map((f) => ({ question: f.question, answer: f.answer }));
