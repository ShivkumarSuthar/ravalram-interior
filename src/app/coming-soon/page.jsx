import { getPageMetadata } from "../../lib/seo";
import ComingSoonPage from "../../components/site/pages/ComingSoonPage";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Coming Soon",
    description: "Something new from Suthar Brothers is on the way.",
    path: "/coming-soon",
    noIndex: true,
  });
}

export default function ComingSoonRoute() {
  return <ComingSoonPage />;
}
