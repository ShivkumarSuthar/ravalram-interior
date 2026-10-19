import { getPageMetadata } from "../../lib/seo";
import AboutPage from "../../components/site/pages/AboutPage";

export async function generateMetadata() {
  return getPageMetadata({
    title: "About Us",
    description: "Suthar Brothers: a family business with 30+ years of interior experience, designing and building homes, offices and commercial spaces.",
    path: "/about-us",
  });
}

export default function AboutRoute() {
  return <AboutPage />;
}
