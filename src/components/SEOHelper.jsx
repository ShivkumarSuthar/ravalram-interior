import { useEffect, useState } from "react";

export default function SEOHelper({ currentView }) {
  const [dynamicUpdate, setDynamicUpdate] = useState(null);

  // Listen to custom SEO events from detail modals (blog articles or project lightboxes)
  useEffect(() => {
    const handleSeoUpdate = (e) => {
      if (e.detail) {
        setDynamicUpdate(e.detail);
      }
    };
    window.addEventListener("seo-update", handleSeoUpdate);
    return () => window.removeEventListener("seo-update", handleSeoUpdate);
  }, []);

  // Reset dynamic updates when the main view changes
  useEffect(() => {
    setDynamicUpdate(null);
  }, [currentView]);

  useEffect(() => {
    const siteUrl = "https://sutharinteriors.com";
    
    // Core SEO details map
    const seoData = {
      "home": {
        title: "Premium Interior Designer Mumbai, Goa, Pune | Suthar Interior Studio",
        description: "Award-winning luxury interior design & architecture studio in Mumbai, Goa, and Pune. We manufacture custom furniture & specialize in turnkey residential, commercial, and modular kitchen designs.",
        canonical: `${siteUrl}/`,
        schema: [
          // 1. Organization Schema
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            "name": "Suthar Interior Studio & Architecture",
            "url": siteUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/favicon.svg`,
              "width": "100",
              "height": "100"
            },
            "sameAs": [
              "https://www.instagram.com/suthar_interior_studio",
              "https://www.facebook.com/sutharinteriorstudio",
              "https://www.linkedin.com/company/suthar-interior-studio"
            ]
          },
          // 2. Local Business Schema (Mumbai HQ)
          {
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "@id": `${siteUrl}/#localbusiness`,
            "name": "Suthar Interior Studio",
            "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
            "telephone": "+919820012345",
            "url": siteUrl,
            "priceRange": "$$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Linking Road, Santacruz West",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400054",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.0825",
              "longitude": "72.8360"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "19:30"
            },
            "areaServed": ["Mumbai", "Goa", "Pune", "Bengaluru"]
          },
          // 3. WebSite & SearchAction Schema
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            "url": siteUrl,
            "name": "Suthar Interior Studio",
            "description": "Premium Interior Architecture & Turnkey Solutions",
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${siteUrl}/gallery?search={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          },
          // 4. Service Schema
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Turnkey Interior Solutions",
            "provider": {
              "@id": `${siteUrl}/#localbusiness`
            },
            "areaServed": ["Mumbai", "Goa", "Pune"],
            "description": "End-to-end luxury interior planning, material procurement, 3D visualizations, custom joinery, and on-site build delivery."
          }
        ]
      },
      "about-us": {
        title: "About Our Architecture & Luxury Design Studio | Suthar Interior Studio",
        description: "Meet the visionaries at Suthar Interior Studio. Learn about our decades of architectural mastery, sustainable woodworking, and turnkey luxury interiors in Mumbai, Goa, and Pune.",
        canonical: `${siteUrl}/about-us`,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": `${siteUrl}/about-us`
              }
            ]
          }
        ]
      },
      "services": {
        title: "Turnkey Interior Solutions & Architecture Services | Suthar Interior Studio",
        description: "Discover our luxury design-build services, including residential architecture, commercial office designs, custom furniture manufacturing, modular kitchens, and premium home renovations.",
        canonical: `${siteUrl}/services`,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": `${siteUrl}/services`
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Residential Interior Design",
            "serviceType": "Residential Architecture & Interior Planning",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Suthar Interior Studio"
            },
            "description": "High-end bedroom suites, luxury living rooms, and fully customized modern duplex designs with material schedules."
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Office Interiors",
            "serviceType": "Corporate Workplace Design",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Suthar Interior Studio"
            },
            "description": "Ergonomic workspace designs, fluted acoustic barriers, corporate reception desks, and glass executive cabins."
          }
        ]
      },
      "gallery": {
        title: "Luxury Portfolio: Residential & Commercial Projects | Suthar Interior Studio",
        description: "Explore 28 curated design masterpieces by Suthar Interior Studio. From sea-facing Goa villas to double-height Mumbai penthouses and high-tech Pune office designs.",
        canonical: `${siteUrl}/gallery`,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": `${siteUrl}/gallery`
              }
            ]
          }
        ]
      },
      "faqs": {
        title: "Frequently Asked Questions | Interior Design Services & Timelines",
        description: "Got questions about architectural surveys, turnkey site pricing, woodworking warranties, or project timelines? Read FAQs from Suthar Interior Studio.",
        canonical: `${siteUrl}/faqs`,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What regions do Suthar Interior Studio serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Suthar Interior Studio provides architectural and premium interior design-build services across Mumbai, Goa, and Pune, with specialized customized furniture deliveries globally."
                }
              },
              {
                "@type": "Question",
                "name": "How does the turnkey interior solution work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our turnkey interior solutions cover the complete project lifecycle: structural measurements, detailed 3D layouts, material schedule approvals, modular woodworking, and final on-site installation."
                }
              }
            ]
          }
        ]
      },
      "blog": {
        title: "Interior Design Insights, Trends & Woodworking Guides | Suthar Studio",
        description: "Read expert interior design advice, architecture trends, custom woodwork care tips, and premium home renovation guides from Suthar's lead architects.",
        canonical: `${siteUrl}/blog`,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Design Blog",
                "item": `${siteUrl}/blog`
              }
            ]
          }
        ]
      },
      "contact": {
        title: "Schedule a Showroom Consultation in Mumbai | Suthar Interior Studio",
        description: "Plan your space with Suthar. Book a customized design walkthrough or visit our flagship showroom on Linking Road, Santacruz West, Mumbai. Pune & Goa services available.",
        canonical: `${siteUrl}/contact`,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Studio",
                "item": `${siteUrl}/contact`
              }
            ]
          }
        ]
      },
      "privacy": {
        title: "Privacy Policy & Data Security Standards | Suthar Interior Studio",
        description: "Review Suthar Interior Studio's privacy policy, detailing how we protect your personal design consultation requests and cookie data in compliance with standard regulations.",
        canonical: `${siteUrl}/privacy`,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Privacy Policy",
                "item": `${siteUrl}/privacy`
              }
            ]
          }
        ]
      },
      "terms": {
        title: "Terms of Service & Custom Project Engagement | Suthar Interior Studio",
        description: "Read the terms of engagement for custom woodwork, architecture consultations, site survey requirements, and turnkey design-build agreements with Suthar Studio.",
        canonical: `${siteUrl}/terms`,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Terms of Service",
                "item": `${siteUrl}/terms`
              }
            ]
          }
        ]
      },
      "thank-you": {
        title: "Inquiry Received - Thank You | Suthar Interior Studio",
        description: "Thank you for reaching out to Suthar Interior Studio. We have successfully logged your design inquiry and will contact you within 24 hours.",
        canonical: `${siteUrl}/thank-you`,
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Thank You",
                "item": `${siteUrl}/thank-you`
              }
            ]
          }
        ]
      }
    };

    // 1. Determine active metadata based on main view or dynamic updates (lightboxes/details)
    let activeMeta = seoData[currentView] || {
      title: "Page Not Found | Suthar Interior Studio",
      description: "The requested page could not be found. Let Suthar's architects guide you back to our luxury design projects and premium interior solutions.",
      canonical: `${siteUrl}/404`,
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "Page Not Found", "item": `${siteUrl}/404` }
          ]
        }
      ]
    };

    // If there is an active lightbox project or opened article, override standard page metadata
    if (dynamicUpdate) {
      if (dynamicUpdate.type === "project-detail") {
        activeMeta = {
          title: `${dynamicUpdate.title} | Luxury Project Showcase | Suthar Interior Studio`,
          description: `${dynamicUpdate.desc} Built using high-precision craftsmanship and materials: ${dynamicUpdate.materials || "Premium Hardwood"} in ${dynamicUpdate.location || "Mumbai"}.`,
          canonical: `${siteUrl}/gallery/${dynamicUpdate.id || "project"}`,
          schema: [
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
                { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${siteUrl}/gallery` },
                { "@type": "ListItem", "position": 3, "name": dynamicUpdate.title, "item": `${siteUrl}/gallery/${dynamicUpdate.id}` }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "contentUrl": dynamicUpdate.image,
              "name": dynamicUpdate.title,
              "caption": dynamicUpdate.desc,
              "author": {
                "@type": "Organization",
                "name": "Suthar Interior Studio"
              }
            }
          ]
        };
      } else if (dynamicUpdate.type === "blog-detail") {
        activeMeta = {
          title: `${dynamicUpdate.title} | Design Magazine | Suthar Interior Studio`,
          description: `${dynamicUpdate.desc} written by lead architect ${dynamicUpdate.author || "Suthar Architects"} under Category: ${dynamicUpdate.category || "Interiors"}.`,
          canonical: `${siteUrl}/blog/${dynamicUpdate.id || "article"}`,
          schema: [
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
                { "@type": "ListItem", "position": 2, "name": "Design Blog", "item": `${siteUrl}/blog` },
                { "@type": "ListItem", "position": 3, "name": dynamicUpdate.title, "item": `${siteUrl}/blog/${dynamicUpdate.id}` }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": dynamicUpdate.title,
              "image": [dynamicUpdate.image],
              "datePublished": dynamicUpdate.date || "2026-06-30",
              "author": {
                "@type": "Person",
                "name": dynamicUpdate.author || "Suthar Architects",
                "jobTitle": "Lead Design Architect"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Suthar Interior Studio",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteUrl}/favicon.svg`
                }
              },
              "description": dynamicUpdate.desc
            }
          ]
        };
      }
    }

    // 2. Apply Page Title
    document.title = activeMeta.title;

    // 3. Helper to update/create standard meta elements
    const setMetaTag = (name, value) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // Helper to update/create Open Graph (property) meta elements
    const setPropertyTag = (property, value) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // 4. Update Meta elements
    setMetaTag("description", activeMeta.description);
    setMetaTag("keywords", "Interior Designer Mumbai, Interior Designer Goa, Interior Designer Pune, Custom Furniture, Residential Interior Design, Commercial Interior Design, Turnkey Interior Solutions, Architecture Studio, Furniture Manufacturer, Home Renovation, Office Interior Design, luxury architects");

    // Open Graph / Facebook Meta
    setPropertyTag("og:title", activeMeta.title);
    setPropertyTag("og:description", activeMeta.description);
    setPropertyTag("og:type", dynamicUpdate ? "article" : "website");
    setPropertyTag("og:url", activeMeta.canonical);
    setPropertyTag("og:image", dynamicUpdate?.image || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200");
    setPropertyTag("og:site_name", "Suthar Interior Studio");

    // Twitter Cards
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", activeMeta.title);
    setMetaTag("twitter:description", activeMeta.description);
    setMetaTag("twitter:image", dynamicUpdate?.image || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200");

    // Browser Theme Color
    setMetaTag("theme-color", "#0c0a09");

    // 5. Update Canonical Link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", activeMeta.canonical);

    // 6. Dynamic JSON-LD Schema Injection
    // Clean up any previously injected Suthar schemas
    const existingScripts = document.querySelectorAll("script[data-suthar-schema]");
    existingScripts.forEach(script => script.remove());

    if (activeMeta.schema && Array.isArray(activeMeta.schema)) {
      activeMeta.schema.forEach((schemaObj, index) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-suthar-schema", `schema-${index}`);
        script.text = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }

  }, [currentView, dynamicUpdate]);

  return null; // Side-effect helper component, renders no markup itself
}
