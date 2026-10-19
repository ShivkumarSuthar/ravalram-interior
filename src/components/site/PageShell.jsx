import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import PageBanner from "./PageBanner";
import NewsletterSection from "./home/NewsletterSection";

// Server-rendered inner-page frame: light header over a photo banner, page content, newsletter, footer.
// Page titles and descriptions come from each route's generateMetadata (server side).
export default function PageShell({ title, crumbs, image, newsletter = true, children }) {
  return (
    <>
      <SiteHeader tone="light" />
      <main id="main-content" className="bg-bg-soft">
        <PageBanner title={title} crumbs={crumbs} image={image} />
        {children}
        {newsletter && <NewsletterSection />}
      </main>
      <SiteFooter />
    </>
  );
}
