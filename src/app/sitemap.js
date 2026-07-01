import { siteConfig } from "../lib/seo";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  // Static site routes
  const staticRoutes = [
    "",
    "/about-us",
    "/services",
    "/gallery",
    "/faqs",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
    "/coming-soon",
    "/thank-you",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/contact" || route === "/services" ? 0.9 : 0.8,
  }));

  // Dynamic Geo-located City pages
  const cities = ["mumbai", "goa", "pune", "bangalore", "hyderabad", "hubli", "kumta", "honnavar"];
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Standard blog articles
  const blogSlugs = [
    "complete-guide-planning-home-interior",
    "how-to-choose-right-interior-designer",
    "maximizing-space-micro-apartments",
    "bespoke-joinery-art-of-timber",
  ];
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...cityRoutes, ...blogRoutes];
}
