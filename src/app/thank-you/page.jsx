import { getPageMetadata } from "../../lib/seo";
import ThankYouPage from "../../components/site/pages/ThankYouPage";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Thank You",
    description: "Thank you for contacting Suthar Brothers. Our team will get in touch with you soon.",
    path: "/thank-you",
    noIndex: true,
  });
}

export default function ThankYouRoute() {
  return <ThankYouPage />;
}
