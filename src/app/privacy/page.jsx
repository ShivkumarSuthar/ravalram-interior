import { getPageMetadata } from "../../lib/seo";
import LegalPage from "../../components/site/pages/LegalPage";
import { PRIVACY } from "../../lib/legal-content";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Privacy Policy",
    description: "How Suthar Brothers collects, uses and protects your personal information.",
    path: "/privacy",
  });
}

export default function PrivacyRoute() {
  return <LegalPage doc={PRIVACY} />;
}
