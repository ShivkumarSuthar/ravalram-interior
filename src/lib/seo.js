/**
 * Suthar Interior Studio & Architecture - Enterprise SEO Specification & Helpers
 * Complies with Next.js App Router Metadata API & Google Structured Data Guidelines
 */

export const siteConfig = {
  name: "Suthar Interior Studio & Architecture",
  url: "https://www.sutharinterior.com",
  fallbackUrl: "https://ais-pre-va7jl2suqjecrzuzdna26a-536272334133.asia-east1.run.app", // Dev preview fallback
  logo: "https://www.sutharinterior.com/logo.png",
  founder: "Ravalram H. Suthar",
  coFounder: "Shivkumar Suthar",
  leadArchitect: "Padam P. Sutar & Team",
  establishedYear: "1989",
  contact: {
    phone: "+91 98200 12345",
    phoneUSA: "+1 (480) 456-0789",
    email: "studio@sutharinterior.com",
    address: {
      streetAddress: "Linking Road, Santacruz West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400054",
      addressCountry: "IN",
    },
    geo: {
      latitude: "19.0818",
      longitude: "72.8398",
    },
  },
  socials: {
    whatsapp: "https://wa.me/919820012345",
    facebook: "https://facebook.com/sutharinterior",
    instagram: "https://instagram.com/sutharinterior",
    linkedin: "https://linkedin.com/company/sutharinterior",
  },
  primaryKeywords: [
    "Suthar Interior Studio",
    "Interior Designer",
    "Interior Designer Mumbai",
    "Interior Designer Pune",
    "Interior Designer Goa",
    "Interior Designer Bangalore",
    "Interior Designer Hyderabad",
    "Architect",
    "Architect Near Me",
    "Architect Mumbai",
    "Architect Pune",
    "Architect Goa",
    "Architect Bangalore",
    "Architect Hyderabad",
    "Furniture Manufacturer",
    "Furniture Maker",
    "Custom Furniture",
    "Furniture Contractor",
    "Carpenter",
    "Professional Carpenter",
    "Home Renovation",
    "House Renovation",
    "Commercial Interior",
    "Residential Interior",
    "Turnkey Interior",
    "Office Interior",
    "Villa Interior",
    "Apartment Interior",
    "Kitchen Designer",
    "Wardrobe Designer",
    "Luxury Interior",
    "Budget Interior",
    "Space Planning",
    "Furniture Design",
    "Painting Contractor",
    "Electrical Contractor",
    "Civil Contractor",
    "False Ceiling",
    "Interior Execution",
    "Architecture Studio",
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
  ogImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
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
    themeColor: "#0c0a09", // Warm Charcoal
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "default",
    },
  };
}

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
        "image": data.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
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
          "latitude": data.latitude || siteConfig.contact.geo.latitude,
          "longitude": data.longitude || siteConfig.contact.geo.longitude,
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
        "image": data.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
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
