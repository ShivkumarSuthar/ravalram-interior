import PageShell from "../components/site/PageShell";
import NotFoundContent from "../components/site/pages/NotFoundContent";
import { BANNERS } from "../lib/pages-content";

export default function NotFound() {
  return (
    <PageShell title="Page Not Found" crumbs={[{ label: "404" }]} image={BANNERS.utility} newsletter={false}>
      <NotFoundContent />
    </PageShell>
  );
}
