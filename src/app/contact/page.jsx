import { getPageMetadata } from "../../lib/seo";
import ContactPage from "../../components/site/pages/ContactPage";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Contact Us",
    description: "Talk to Suthar Brothers about your home, office or commercial interior project. Call, WhatsApp or send us your project details.",
    path: "/contact",
  });
}

export default function ContactRoute() {
  return <ContactPage />;
}
