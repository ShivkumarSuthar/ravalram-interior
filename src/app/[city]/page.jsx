import { getPageMetadata, generateSchema } from "../../lib/seo";
import CityClient from "./CityClient";

export async function generateStaticParams() {
  return [
    { city: "mumbai" },
    { city: "goa" },
    { city: "pune" },
    { city: "bangalore" },
    { city: "hyderabad" },
    { city: "hubli" },
    { city: "kumta" },
    { city: "honnavar" },
  ];
}

export async function generateMetadata(props) {
  const params = await props.params;
  const rawCity = params.city || "mumbai";
  const city = rawCity.charAt(0).toUpperCase() + rawCity.slice(1).toLowerCase();

  return getPageMetadata({
    title: `Best Interior Designer in ${city} | Suthar Interior Studio & Architecture`,
    description: `Looking for top-tier residential & commercial interior design in ${city}? Suthar Interior Studio offers architect-supervised, custom furniture manufacturing and turnkey solutions since 1989.`,
    path: `/${rawCity}`,
    keywords: [
      `Interior Designer ${city}`,
      `Best Interior Designer ${city}`,
      `Architect ${city}`,
      `Custom Furniture ${city}`,
      `Turnkey Interiors ${city}`,
      `Home Renovation ${city}`,
      `Office Interior ${city}`,
    ],
  });
}

export default async function CityPage(props) {
  const params = await props.params;
  const rawCity = params.city || "mumbai";
  const city = rawCity.charAt(0).toUpperCase() + rawCity.slice(1).toLowerCase();

  // Create JSON-LD schema
  const localBusinessSchema = generateSchema("LocalBusiness", {
    city: city,
    title: `Suthar Interior Studio & Architecture - ${city} Team`,
    description: `Architect-supervised high-end residential interiors, luxury commercial showrooms, and bespoke woodworking joinery in ${city}.`,
  });

  const breadcrumbSchema = generateSchema("Breadcrumb", {
    items: [
      { name: "Home", path: "/" },
      { name: "Locations", path: "/services" },
      { name: city, path: `/${rawCity}` },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CityClient city={rawCity} />
    </>
  );
}
