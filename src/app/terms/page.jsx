import LegalPage from "../../components/site/pages/LegalPage";
import { TERMS } from "../../lib/legal-content";

export default function TermsRoute() {
  return <LegalPage doc={TERMS} seoView="terms" />;
}
