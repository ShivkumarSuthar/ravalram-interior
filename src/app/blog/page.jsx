import { getPageMetadata } from "../../lib/seo";
import BlogPage from "../../components/site/pages/BlogPage";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Journal: Interior Ideas & Advice",
    description: "Practical advice on planning interiors, budgets, kitchens, wardrobes and furniture materials from the Suthar Brothers team.",
    path: "/blog",
  });
}

export default function BlogRoute() {
  return <BlogPage />;
}
