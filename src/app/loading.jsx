import LogoLoader from "../components/site/LogoLoader";

// Shown while a page is loading during navigation; the first-visit intro is SiteLoader (see layout.jsx)
export default function Loading() {
  return (
    <div role="status" className="fixed inset-0 z-40 grid place-items-center bg-bg-base">
      <LogoLoader className="size-32" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
