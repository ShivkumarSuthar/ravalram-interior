import { getPageMetadata, generateSchema } from "../../lib/seo";
import { FAQ_PAGE } from "../../lib/pages-content";
import FaqPage from "../../components/site/pages/FaqPage";

export async function generateMetadata() {
  return getPageMetadata({
    title: "FAQs",
    description: "Answers about timelines, materials, pricing options, payments and warranties for interior projects with Suthar Brothers.",
    path: "/faqs",
  });
}

export default function FaqsRoute() {
  const faqSchema = generateSchema("FAQ", { questions: FAQ_PAGE.items });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FaqPage />
    </>
  );
}
