import { getPageMetadata } from "../../lib/seo";
import PricingPage from "../../components/site/pages/PricingPage";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Interior Design Pricing | Suthar Brothers",
    description: "Indicative starting rates per sq ft for apartment, home, villa, kitchen and office interiors by Suthar Brothers, with an area-based cost estimate.",
    path: "/pricing",
    keywords: ["Interior Design Cost", "Interior Design Price Per Sq Ft", "Home Interior Cost Mumbai", "Modular Kitchen Cost", "Turnkey Interior Pricing"],
  });
}

export default function PricingRoute() {
  return <PricingPage />;
}
