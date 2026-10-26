import { notFound } from "next/navigation";
import { getPageMetadata, generateSchema } from "../../lib/seo";
import CityLanding from "../../components/site/pages/CityPage";
import { CITY_PAGES } from "../../lib/pages-content";

// Only the cities in CITY_PAGES get a page; any other single-segment URL falls through to the 404
export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(CITY_PAGES).map((city) => ({ city }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const rawCity = params.city || "mumbai";
  const city = CITY_PAGES[rawCity];
  if (!city) return {};

  return getPageMetadata({
    title: `Interior Designer in ${city} | Suthar Brothers`,
    description: `Home, office and commercial interiors in ${city} by Suthar Brothers: modular kitchens, wardrobes, custom furniture, renovation and turnkey projects, with 30+ years of experience.`,
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
  const city = CITY_PAGES[rawCity];
  if (!city) notFound();

  // Create JSON-LD schema
  const localBusinessSchema = generateSchema("LocalBusiness", {
    city: city,
    slug: rawCity,
    title: `Suthar Brothers - ${city} Team`,
    description: `Interior design and execution for homes, offices and commercial spaces in ${city}.`,
  });

  const breadcrumbSchema = generateSchema("Breadcrumb", {
    items: [
      { name: "Home", path: "/" },
      { name: "Locations", path: "/about-us" },
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
      <CityLanding slug={rawCity} />
    </>
  );
}
