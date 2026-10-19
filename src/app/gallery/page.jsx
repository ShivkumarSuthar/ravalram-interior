import { getPageMetadata } from "../../lib/seo";
import GalleryPage from "../../components/site/pages/GalleryPage";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Our Projects",
    description: "See homes, kitchens, bedrooms and workspaces designed and built by Suthar Brothers.",
    path: "/gallery",
  });
}

export default function GalleryRoute() {
  return <GalleryPage />;
}
