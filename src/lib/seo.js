/**
 * Suthar Brothers - SEO helpers (Next.js Metadata API + schema.org JSON-LD)
 * Business details come from COMPANY_INFO in data.js so there is one source of truth.
 */

import { COMPANY_INFO, SITE_IMAGES } from "./data.js";

const office = COMPANY_INFO.address.indianShowroom;

export const siteConfig = {
  name: "Suthar Brothers",
  tagline: "Interior Design & Execution",
  // Set NEXT_PUBLIC_SITE_URL to the live domain; this fallback is the domain used so far in the project
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sutharinteriorstudio.in",
  logo: "/assets/images/logo.png",
  ogImage: SITE_IMAGES.heroBg,
  establishedYear: COMPANY_INFO.foundedYear,
  founder: COMPANY_INFO.founder,
  coFounder: COMPANY_INFO.coFounder,
  contact: {
    phone: office.phone,
    email: COMPANY_INFO.email,
    address: {
      streetAddress: office.street,
      addressLocality: office.city,
      addressRegion: office.state,
      postalCode: office.pincode,
      addressCountry: "IN",
    },
  },
  socials: COMPANY_INFO.socialLinks,
  primaryKeywords: [
    "Interior Designer",
    "Interior Design",
    "Interior Contractor",
    "Home Interior Design",
    "Office Interior Design",
    "Commercial Interior Design",
    "Modular Kitchen",
    "Wardrobes",
    "Custom Furniture",
    "Home Renovation",
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
  ogImage = siteConfig.ogImage,
  ogType = "website",
  noIndex = false,
  authors = [{ name: siteConfig.name }],
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
    category: "Interior Design",
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
        "logo": `${siteConfig.url}${siteConfig.logo}`,
        "foundingDate": siteConfig.establishedYear,
        "founder": {
          "@type": "Person",
          "name": siteConfig.founder,
        },
        "sameAs": Object.values(siteConfig.socials),
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "email": siteConfig.contact.email,
          "contactType": "sales",
          "areaServed": "IN",
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
        "description": "Interior design and execution for homes, offices and commercial spaces: modular kitchens, wardrobes, custom furniture, renovation and turnkey interiors.",
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
        "@type": ["ProfessionalService", "InteriorDesigner"],
        "@id": `${siteConfig.url}/#localbusiness-${data.city?.toLowerCase() || "mumbai"}`,
        "name": data.title || `${siteConfig.name} - ${data.city || "Mumbai"}`,
        "description": data.description || "Interior design and execution for homes, offices and commercial spaces, with furniture made to measure.",
        "url": `${siteConfig.url}/${data.city?.toLowerCase() || ""}`,
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "image": data.image || siteConfig.ogImage,
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
          "jobTitle": "Design Lead",
        },
        // No aggregateRating: only add one when it comes from real, published customer reviews
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
        "image": data.image || siteConfig.ogImage,
        "datePublished": data.datePublished || "2026-06-28",
        "dateModified": data.dateModified || "2026-06-30",
        "author": {
          "@type": "Organization",
          "name": data.author || siteConfig.name,
          "url": `${siteConfig.url}/about-us`,
        },
        "publisher": {
          "@type": "Organization",
          "name": siteConfig.name,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteConfig.url}${siteConfig.logo}`,
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
        "areaServed": ["Mumbai", "Pune", "Goa"],
      };

    default:
      return {};
  }
}
