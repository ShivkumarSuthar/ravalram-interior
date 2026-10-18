/**
 * Site shell + homepage content (header, sidebar, footer and every home section).
 * Title arrays mix plain strings with { gold: "..." } parts, which render in the primary color.
 */

import { COMPANY_INFO, SITE_IMAGES, SERVICES_PAGE_DATA } from "./data.js";
import { projects } from "./project-data.js";
import { blogArticles } from "./blog-data.js";

const showroom = COMPANY_INFO.address.indianShowroom;

export const CONTACT = {
  phone: showroom.phone,
  phoneHref: `tel:${showroom.phone.replace(/\s+/g, "")}`,
  email: COMPANY_INFO.email,
  address: COMPANY_INFO.address.full,
  // WhatsApp chat number in international format, digits only
  whatsapp: "919819776030",
  whatsappMessage: "Hi Suthar Living, I'd like to discuss an interior project.",
  socials: [
    { label: "Instagram", href: COMPANY_INFO.socialLinks.instagram },
    { label: "Facebook", href: COMPANY_INFO.socialLinks.facebook },
    { label: "LinkedIn", href: COMPANY_INFO.socialLinks.linkedin },
    { label: "Pinterest", href: COMPANY_INFO.socialLinks.pinterest },
  ],
};

export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES_PAGE_DATA.coreServices.map((s) => ({ label: s.title, href: `/services#${s.id}` })),
  },
  {
    label: "Projects",
    href: "/gallery",
    children: [
      { label: "All Projects", href: "/gallery" },
      ...projects.map((p) => ({ label: p.title, href: `/projects/${p.slug}` })),
    ],
  },
  {
    label: "Pages",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    label: "Journal",
    href: "/blog",
    children: [
      { label: "All Articles", href: "/blog" },
      ...blogArticles.slice(0, 3).map((a) => ({ label: a.title, href: `/blog/${a.slug}` })),
    ],
  },
  { label: "Contact", href: "/contact" },
];

// Pages offered by the header search
export const SEARCH_INDEX = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/gallery" },
  { label: "About Us", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Journal", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Interior Designer in Mumbai", href: "/mumbai" },
  { label: "Interior Designer in Goa", href: "/goa" },
  { label: "Interior Designer in Pune", href: "/pune" },
  ...projects.map((p) => ({ label: p.title, href: `/projects/${p.slug}` })),
  ...blogArticles.map((a) => ({ label: a.title, href: `/blog/${a.slug}` })),
];

// SITE_IMAGES.heroBg (hero_living_room.jpg) does not decode in browsers, so it is not used here
export const GALLERY_IMAGES = [
  { src: SITE_IMAGES.contactHeroBg, alt: "Suthar living room with warm timber panelling" },
  { src: SITE_IMAGES.heroSlide2, alt: "Suthar bespoke timber joinery and modular storage" },
  { src: SITE_IMAGES.heroSlide3, alt: "Suthar contemporary apartment interior" },
  { src: SITE_IMAGES.projectCoastal, alt: "Suthar sea-facing residence living area" },
  { src: SITE_IMAGES.projectLoft, alt: "Suthar office interior with custom cabinetry" },
  { src: SITE_IMAGES.transitionLuxury, alt: "Suthar luxury lounge with layered lighting" },
  { src: SITE_IMAGES.bedroomTwo, alt: "Suthar bedroom with made-to-measure wardrobe" },
  { src: SITE_IMAGES.aboutSide, alt: "Suthar reading corner with custom side table" },
];

export const SIDEBAR = {
  title: "We Shape Interiors, Crafting Timeless Spaces That Last",
  gallery: GALLERY_IMAGES.slice(0, 6),
};

export const HERO = {
  eyebrow: "Interior Studio Since 1989",
  title: ["Timeless Spaces", { gold: "Crafted With Care" }],
  text: "From a single room to a complete turnkey home, our architects and craftsmen design, build and finish every detail under one roof.",
  cta: { label: "View Our Services", href: "/services" },
  smallImage: { src: SITE_IMAGES.heroSlide2, alt: "Suthar double-height living room with timber screens" },
  largeImage: { src: SITE_IMAGES.contactHeroBg, alt: "Suthar living room with custom sofa and warm ambient lighting" },
};

export const SERVICES = {
  eyebrow: "What We Do",
  title: ["Explore Our ", { gold: "Interior Design & Build" }, " Services"],
  text: "We plan, design and build interiors for homes and workplaces, with our own joinery workshop and architect-led site teams handling every stage.",
  watermark: "suthar",
  floatingImage: { src: SITE_IMAGES.isometricFloorPlan, alt: "Isometric floor plan of a Suthar apartment layout" },
  items: [
    {
      title: "Residential Interiors",
      text: "Complete homes, single-room makeovers and villa interiors planned around how your family lives.",
      image: SITE_IMAGES.projectCoastal,
    },
    {
      title: "Commercial & Office Interiors",
      text: "Offices, showrooms and retail spaces designed for daily work, client visits and easy upkeep.",
      image: SITE_IMAGES.projectLoft,
    },
    {
      title: "Custom Furniture & Joinery",
      text: "Wardrobes, kitchens, beds and loose furniture made to measure in our own workshop.",
      image: SITE_IMAGES.bedroomTwo,
    },
    {
      title: "Home Renovation",
      text: "Civil changes, electrical, plumbing and new finishes for homes that need a full refresh.",
      image: "/assets/images/living_01.png",
    },
    {
      title: "Turnkey Design & Build",
      text: "One team from first sketch to handover: design, materials, site work and styling.",
      image: SITE_IMAGES.heroSlide3,
    },
  ],
};

export const ABOUT = {
  eyebrow: "Since 1989",
  title: ["We Shape ", { gold: "Homes & Workplaces," }, " ", { gold: "Crafting Timeless" }, " And Lasting Spaces"],
  lead: "Whether it is a new apartment, a family home or a busy office, we treat every project with the care our workshop has been known for since 1989.",
  points: ["Architect-Supervised Sites", "In-House Joinery Workshop", "Clear Itemised Quotes", "Homes & Workplaces"],
  text: "Suthar began as a woodworking workshop founded by Ravalram H. Suthar. Today our architects, designers and craftsmen work as one team, so the furniture, finishes and site work all meet the same standard.",
  cta: { label: "More About Us", href: "/about-us" },
  image: { src: SITE_IMAGES.aboutSide, alt: "Suthar living room finished with custom joinery" },
};

export const PROJECTS = {
  eyebrow: "Featured Projects",
  title: ["Spaces We Have ", { gold: "Designed" }, " And ", { gold: "Built" }],
  items: projects.map((p) => ({
    title: p.title,
    tags: [p.filterKey, p.location.split(",").pop().trim()],
    location: p.location,
    year: p.year,
    image: p.image,
    href: `/projects/${p.slug}`,
  })),
};

export const EXPERTISE = {
  eyebrow: "Our Expertise",
  title: ["Suthar Has Crafted ", { gold: "Lasting Interiors" }, " Since 1989."],
  points: ["Apartments & Villas", "Modular Kitchens & Wardrobes", "Offices & Showrooms"],
  text: "Every project is drawn by our architects, built by our own craftsmen and checked on site before handover, so what you approve on paper is what you live with.",
  cta: { label: "View Our Projects", href: "/gallery" },
  images: [
    { src: SITE_IMAGES.heroSlide3, alt: "Suthar open kitchen with handleless cabinetry" },
    { src: SITE_IMAGES.transitionLuxury, alt: "Suthar lounge with custom seating and pendant lights" },
  ],
};

export const VIDEO = {
  title: "Start Your Dream Home Today!",
  text: "Visit our studio, share your plans and see material samples in person. We walk you through layouts, finishes and costs before any work begins.",
  background: { src: SITE_IMAGES.projectCoastal, alt: "Suthar sea-facing dining room at dusk" },
  // Paste the YouTube video ID of a studio walkthrough here to show the play button.
  // (The old ID 5U2zB9mR_Qc is no longer available on YouTube.)
  youtubeId: "",
};

export const PROCESS = {
  eyebrow: "How We Work",
  title: ["A Clear Process ", { gold: "From First Sketch" }, " To Handover."],
  text: "Every project follows the same steps, so you always know what is happening, what it costs and when it will be done.",
  image: { src: SITE_IMAGES.architecturalPavilion, alt: "Suthar architect reviewing a project on site" },
  steps: [
    { title: "Consultation & Site Visit", text: "We visit your space, take measurements and understand how you want to use it, along with your budget." },
    { title: "Design & Planning", text: "Floor plans, 3D views and a material board, revised with you until every room feels right." },
    { title: "Workshop & Site Work", text: "Furniture is built in our workshop while our site team handles civil, electrical and finishing work." },
    { title: "Handover", text: "A final quality check, deep clean and walkthrough before we hand over the keys and a care guide." },
  ],
};

export const GALLERY = {
  eyebrow: "Our Gallery",
  title: "Inside Our Work",
  text: "Living rooms, kitchens, bedrooms and workspaces we have designed and built across Mumbai, Goa and Pune.",
  background: { src: SITE_IMAGES.heroSlide3, alt: "" },
  images: GALLERY_IMAGES,
};

export const JOURNAL = {
  eyebrow: "From Our Journal",
  title: ["Ideas And Advice ", { gold: "For Your Next" }, " Project"],
  posts: blogArticles.slice(0, 4).map((a) => ({
    title: a.title,
    excerpt: a.excerpt,
    category: a.categoryLabel,
    date: a.date,
    author: a.author,
    image: a.image,
    href: `/blog/${a.slug}`,
  })),
};

export const NEWSLETTER = {
  eyebrow: "Subscribe To Our Newsletter",
  title: ["Design Notes ", { gold: "In Your" }, " Inbox"],
  text: "Seasonal design ideas, material guides and new project stories from our studio.",
};

export const FOOTER = {
  tagline: "Interiors, furniture and renovation, designed and built by one team since 1989.",
  watermark: "suthar",
  background: { src: SITE_IMAGES.contactFooterBg, alt: "" },
  columns: [
    [
      { label: "About Us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/gallery" },
      { label: "Journal", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
    [
      { label: "Pricing", href: "/pricing" },
      { label: "FAQs", href: "/faqs" },
      { label: "Interior Designer Mumbai", href: "/mumbai" },
      { label: "Interior Designer Goa", href: "/goa" },
      { label: "Interior Designer Pune", href: "/pune" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  ],
};
