import { getPageMetadata, generateSchema } from "../lib/seo";
import HomeClient from "./HomeClient";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Suthar Living | Interior Design, Furniture & Renovation",
    description: "Suthar Living offers interior design, custom furniture, home décor, renovation and complete interior solutions for residential and commercial spaces.",
    path: "/",
    keywords: [
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
  });
}

export default function HomePage() {
  const orgSchema = generateSchema("Organization");
  const websiteSchema = generateSchema("WebSite");
  const localBusinessSchema = generateSchema("LocalBusiness", {
    title: "Suthar Living | Interior Design, Furniture & Renovation",
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
