import { getPageMetadata } from "../../lib/seo";
import LegalPage from "../../components/site/pages/LegalPage";
import { TERMS } from "../../lib/legal-content";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Terms & Conditions",
    description: "The terms that apply to the Suthar Brothers website and our interior design and execution services.",
    path: "/terms",
  });
}

export default function TermsRoute() {
  return <LegalPage doc={TERMS} />;
}
