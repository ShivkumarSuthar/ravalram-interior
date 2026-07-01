import { getPageMetadata, generateSchema } from "../lib/seo";
import HomeClient from "./HomeClient";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Luxury Interior Designer & Architects Mumbai | Suthar Interior Studio",
    description: "Suthar Interior Studio & Architecture delivers high-end residential interiors, custom furniture manufacturing, and turnkey execution in Mumbai, Pune, Goa & Bengaluru since 1989.",
    path: "/",
    keywords: [
      "Suthar Interior Studio",
      "Interior Designer Mumbai",
      "Interior Designer Pune",
      "Interior Designer Goa",
      "Best Architect Mumbai",
      "Custom Furniture Manufacturer",
      "Turnkey Interior Contractor",
    ],
  });
}

export default function HomePage() {
  const orgSchema = generateSchema("Organization");
  const websiteSchema = generateSchema("WebSite");
  const localBusinessSchema = generateSchema("LocalBusiness", {
    city: "Mumbai",
    title: "Suthar Interior Studio & Architecture Headquarters",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HomeClient />
    </>
  );
}
