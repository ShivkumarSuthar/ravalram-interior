import { siteConfig } from "../lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/", // system assets
        "/api/", // backend endpoints
        "/thank-you", // thank you page (no need for organic ranking)
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
