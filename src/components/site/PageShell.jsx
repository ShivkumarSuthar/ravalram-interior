"use client";

import SEOHelper from "../SEOHelper";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import PageBanner from "./PageBanner";
import NewsletterSection from "./home/NewsletterSection";

// Inner-page frame: light header over a photo banner, page content, newsletter, footer
export default function PageShell({ seoView, title, crumbs, image, newsletter = true, children }) {
  return (
    <>
      {seoView && <SEOHelper currentView={seoView} />}
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
