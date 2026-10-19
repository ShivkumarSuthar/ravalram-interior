import { getPageMetadata } from "../../lib/seo";
import ServicesPage from "../../components/site/pages/ServicesPage";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Interior Design Services",
    description: "Home interiors, office and commercial interiors, modular kitchens, wardrobes, custom furniture, renovation and turnkey interior solutions by Suthar Brothers.",
    path: "/services",
  });
}

export default function ServicesRoute() {
  return <ServicesPage />;
}
