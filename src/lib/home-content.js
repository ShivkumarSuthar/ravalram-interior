/**
 * Site shell + homepage content (header, sidebar, footer and every home section).
 * Title arrays mix plain strings with { gold: "..." } parts, which render in the primary color.
 */

import { COMPANY_INFO, SITE_IMAGES, STOCK_IMAGES, SERVICES_PAGE_DATA } from "./data.js";
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
  whatsappMessage: "Hi Suthar Brothers, I'd like to discuss an interior project.",
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

// Studio images only (no stock photos here: this set represents our own work)
export const GALLERY_IMAGES = [
  { src: SITE_IMAGES.heroBg, alt: "Living room with timber wall panelling and a garden view" },
  { src: SITE_IMAGES.heroSlide2, alt: "Open kitchen with island seating and a dining table" },
  { src: SITE_IMAGES.heroSlide3, alt: "Bedroom suite with a fireplace and forest view" },
  { src: SITE_IMAGES.livingBright, alt: "Bright living room with a corner sofa and large windows" },
  { src: SITE_IMAGES.projectCoastal, alt: "Dining room with a sea view at dusk" },
  { src: SITE_IMAGES.bedroomTwo, alt: "Bedroom with an upholstered bed and side tables" },
  { src: SITE_IMAGES.livingGreen, alt: "Living room with a sage green wall and wooden furniture" },
  { src: SITE_IMAGES.projectLoft, alt: "Living area with a brick wall and oak furniture" },
  { src: SITE_IMAGES.aboutSide, alt: "Reading corner with an armchair and a brass floor lamp" },
];

export const SIDEBAR = {
  title: "Interior Design & Execution For Homes, Offices And Commercial Spaces",
  gallery: GALLERY_IMAGES.slice(0, 6),
};

export const HERO = {
  eyebrow: "30+ Years Of Interior Experience",
  title: ["Spaces Designed", { gold: "& Built With Care" }],
  text: "Suthar Brothers designs and builds interiors for homes, offices and commercial spaces, from modular kitchens and wardrobes to complete turnkey projects.",
  cta: { label: "View Our Services", href: "/services" },
  smallImage: { src: SITE_IMAGES.livingGreen, alt: "Living room with a sage green wall and wooden furniture" },
  largeImage: { src: SITE_IMAGES.heroBg, alt: "Living room with timber wall panelling, a corner sofa and a garden view" },
};

export const SERVICES = {
  eyebrow: "What We Do",
  title: ["Explore Our ", { gold: "Interior Design & Execution" }, " Services"],
  text: "We plan, design and build interiors for homes and workplaces, with furniture, finishes and site work handled by one team.",
  // Same seven services as the Services page, so the two never drift apart
  items: SERVICES_PAGE_DATA.coreServices.map((s) => ({
    title: s.title,
    text: s.summary,
    image: s.image,
    alt: s.imageAlt,
    href: `/services#${s.id}`,
  })),
};

// Comparison slider. This pair shows a design plan and a finished interior (the labels say so); to show a real
// project, replace it with that project's own before/after photos and use the labels "Before" and "After".
export const BEFORE_AFTER = {
  eyebrow: "Plan To Finished Space",
  title: ["See How A ", { gold: "Plan Becomes" }, " A Finished Space"],
  text: "Drag the handle to compare a design plan with the finished interior.",
  before: { src: SITE_IMAGES.isometricFloorPlan, alt: "Isometric floor plan of an apartment layout", label: "Design Plan" },
  after: { src: SITE_IMAGES.heroSlide2, alt: "Finished open kitchen with island seating and a dining table", label: "Finished Space" },
};

export const ABOUT = {
  eyebrow: "Since 1989",
  title: ["We Design ", { gold: "Homes & Workplaces," }, " ", { gold: "And Build Them" }, " With Care"],
  lead: "With more than 30 years of interior work behind us, we bring an experienced team and a keen eye for quality to every home, office and commercial space.",
  points: ["30+ Years Of Experience", "Design & Execution Together", "Furniture Made To Measure", "Flexible Pricing Options"],
  text: "Suthar Brothers grew out of the woodworking business Ravalram H. Suthar started in 1989. Today our designers, craftsmen and site team work together, so furniture, finishes and site work all meet the same standard.",
  cta: { label: "More About Us", href: "/about-us" },
  image: { src: SITE_IMAGES.aboutSide, alt: "Reading corner with an armchair, side table and brass floor lamp" },
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
  title: ["Interiors ", { gold: "Planned Carefully," }, " Built To Last."],
  points: ["Homes, Apartments & Villas", "Offices & Commercial Spaces", "Kitchens, Wardrobes & Furniture"],
  text: "Our experienced team checks the details at every stage, from materials and joinery to finishing, so what you approve on paper is what you get.",
  cta: { label: "View Our Projects", href: "/gallery" },
  images: [
    { src: SITE_IMAGES.bedroomTwo, alt: "Bedroom with an upholstered bed and side tables" },
    { src: SITE_IMAGES.livingBright, alt: "Bright living room with a corner sofa and large windows" },
  ],
};

export const VIDEO = {
  title: "Start Your Dream Home Today!",
  text: "Share your plans with us and see material samples in person. We walk you through layouts, finishes and costs before any work begins.",
  background: { src: SITE_IMAGES.projectCoastal, alt: "Dining room with a sea view at dusk" },
  // Paste the YouTube video ID of a studio walkthrough here to show the play button.
  // (The old ID 5U2zB9mR_Qc is no longer available on YouTube.)
  youtubeId: "",
};

export const PROCESS = {
  eyebrow: "How We Work",
  title: ["A Clear Process ", { gold: "From First Sketch" }, " To Handover."],
  text: "Every project follows the same steps, so you always know what is happening, what it costs and when it will be done.",
  image: { src: STOCK_IMAGES.homeOffice, alt: "Design desk with a computer and drawings" },
  steps: [
    { title: "Consultation & Site Visit", text: "We visit your space, take measurements and understand how you want to use it, along with your budget." },
    { title: "Design & Planning", text: "Floor plans, 3D views and material choices, revised with you until every room feels right." },
    { title: "Production & Site Work", text: "Furniture is made to measure while our site team handles civil, electrical and finishing work." },
    { title: "Handover", text: "A final quality check, cleaning and walkthrough before we hand the space over to you." },
  ],
};

export const GALLERY = {
  eyebrow: "Our Gallery",
  title: "Inside Our Work",
  text: "Living rooms, kitchens, bedrooms and workspaces designed and built by our team.",
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
  text: "Design ideas, material guides and project updates from Suthar Brothers.",
};

export const FOOTER = {
  tagline: "Interior design and execution for homes, offices and commercial spaces, backed by 30+ years of experience.",
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
