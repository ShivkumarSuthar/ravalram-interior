/**
 * Suthar Living - Enterprise SEO Specification & Helpers
 * Complies with Next.js App Router Metadata API & Google Structured Data Guidelines
 */

export const siteConfig = {
  name: "Suthar Living",
  tagline: "Designed with purpose. Crafted with care. Made for living.",
  coreMessage: "Spaces Designed to Feel Like Home",
  url: "https://www.sutharinteriorstudio.in",
  fallbackUrl: "https://www.sutharinteriorstudio.in",
  logo: "https://www.sutharinteriorstudio.in/logo.png",
  contact: {
    phone: "[PHONE NUMBER]",
    email: "contact@sutharinteriorstudio.in",
    address: {
      streetAddress: "[ADDRESS]",
      addressLocality: "[LOCATION]",
      addressCountry: "IN",
    },
  },
  socials: {
    whatsapp: "https://wa.me/[PHONE NUMBER]",
    facebook: "https://facebook.com/sutharliving",
    instagram: "https://instagram.com/sutharliving",
    linkedin: "https://linkedin.com/company/sutharliving",
  },
  primaryKeywords: [
    "Interior Designer",
    "Interior Design",
    "Interior Contractor",
    "Home Interior Design",
    "Residential Interior Design",
    "Commercial Interior Design",
    "Custom Furniture",
    "Modular Furniture",
    "Home Renovation",
    "Interior Renovation",
    "Home Décor",
    "Turnkey Interior Solutions",
    "Interior Design & Execution",
  ],
};

/**
 * Gets the base URL dynamically or falls back to production
 */
export function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
}

/**
 * Generates custom, enterprise-level metadata for any page in Next.js App Router
 * @param {Object} options 
 * @returns {import('next').Metadata}
 */
export function getPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = "/assets/images/AI_images/antra_about_side_1782744266546.jpg",
  ogType = "website",
  noIndex = false,
  authors = [{ name: "Suthar Interior Studio" }],
} = {}) {
  const finalUrl = `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
  const fullTitle = title.includes("|") ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description: description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: finalUrl,
    },
    keywords: [...new Set([...keywords, ...siteConfig.primaryKeywords])],
    authors: authors,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: finalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [ogImage],
    },
    // Device & layout preferences
    category: "Interior Design & Architecture",
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "default",
    },
  };
}

export const viewport = {
  themeColor: "#0c0a09",
  width: "device-width",
  initialScale: 1,
};

/**
 * Builds enterprise JSON-LD structured data schemas
 * @param {string} type - Schema type
 * @param {Object} data - Schema-specific data values
 */
export function generateSchema(type, data = {}) {
  const baseSchema = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case "Organization":
      return {
        ...baseSchema,
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": siteConfig.logo,
        "foundingDate": siteConfig.establishedYear,
        "founder": {
          "@type": "Person",
          "name": siteConfig.founder,
        },
        "sameAs": [
          siteConfig.socials.facebook,
          siteConfig.socials.instagram,
          siteConfig.socials.linkedin,
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "sales",
          "areaServed": ["IN", "US"],
          "availableLanguage": ["en", "hi", "mr"],
        },
      };

    case "WebSite":
      return {
        ...baseSchema,
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": "Exquisite spatial layouts and master timber joinery. Elevating luxury residential and commercial spaces with generational woodworking heritage.",
        "publisher": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteConfig.url}/gallery?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      };

    case "LocalBusiness":
    case "ProfessionalService":
    case "Architect":
    case "InteriorDesigner":
    case "FurnitureManufacturer":
      const specificType = type === "LocalBusiness" ? "InteriorDesigner" : type;
      return {
        ...baseSchema,
        "@type": ["ProfessionalService", "Architect", "InteriorDesigner", "FurnitureManufacturer"],
        "@id": `${siteConfig.url}/#localbusiness-${data.city?.toLowerCase() || "mumbai"}`,
        "name": data.title || `${siteConfig.name} - ${data.city || "Mumbai"}`,
        "description": data.description || "Architect-supervised high-end residential interiors, luxury commercial showrooms, and bespoke woodworking joinery.",
        "url": `${siteConfig.url}/${data.city?.toLowerCase() || ""}`,
        "telephone": siteConfig.contact.phone,
        "priceRange": "$$$$",
        "image": data.image || "/assets/images/AI_images/antra_about_side_1782744266546.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": data.street || siteConfig.contact.address.streetAddress,
          "addressLocality": data.city || siteConfig.contact.address.addressLocality,
          "addressRegion": data.region || siteConfig.contact.address.addressRegion,
          "postalCode": data.postalCode || siteConfig.contact.address.postalCode,
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": data.latitude || siteConfig.contact.geo?.latitude || "19.0760",
          "longitude": data.longitude || siteConfig.contact.geo?.longitude || "72.8777",
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00",
        },
        "founder": [
          {
            "@type": "Person",
            "name": siteConfig.founder,
          },
          {
            "@type": "Person",
            "name": siteConfig.coFounder,
          },
        ],
        "employee": {
          "@type": "Person",
          "name": "Padam P. Sutar",
          "jobTitle": "Lead Architect",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "148",
        },
      };

    case "Breadcrumb":
      const itemListElement = (data.items || []).map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${siteConfig.url}${item.path}`,
      }));
      return {
        ...baseSchema,
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement,
      };

    case "FAQ":
      const mainEntity = (data.questions || []).map((q) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer,
        },
      }));
      return {
        ...baseSchema,
        "@type": "FAQPage",
        "mainEntity": mainEntity,
      };

    case "Article":
      return {
        ...baseSchema,
        "@type": "BlogPosting",
        "headline": data.title,
        "description": data.description,
        "image": data.image || "/assets/images/AI_images/antra_about_side_1782744266546.jpg",
        "datePublished": data.datePublished || "2026-06-28",
        "dateModified": data.dateModified || "2026-06-30",
        "author": {
          "@type": "Person",
          "name": data.author || "Elena Suthar",
          "url": `${siteConfig.url}/about-us`,
        },
        "publisher": {
          "@type": "Organization",
          "name": siteConfig.name,
          "logo": {
            "@type": "ImageObject",
            "url": siteConfig.logo,
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/blog/${data.slug}`,
        },
      };

    case "Service":
      return {
        ...baseSchema,
        "@type": "Service",
        "serviceType": data.name,
        "provider": {
          "@type": "ProfessionalService",
          "name": siteConfig.name,
        },
        "description": data.description,
        "areaServed": ["Mumbai", "Goa", "Pune", "Bengaluru", "Hyderabad"],
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
        },
      };

    default:
      return {};
  }
}
