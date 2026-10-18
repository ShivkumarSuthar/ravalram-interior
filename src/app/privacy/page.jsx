import LegalPage from "../../components/site/pages/LegalPage";
import { PRIVACY } from "../../lib/legal-content";

export default function PrivacyRoute() {
  return <LegalPage doc={PRIVACY} seoView="privacy" />;
}
