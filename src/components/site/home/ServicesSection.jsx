import SectionHeading from "../SectionHeading";
import ServiceSwitcher from "./ServiceSwitcher";
import { SERVICES } from "../../../lib/home-content";

// Server-rendered section; only the hover-to-switch list is a client component
export default function ServicesSection() {
  return (
    <section className="bg-bg-soft pb-24 pt-25 lg:pb-32.5">
      <div className="mx-auto max-w-site px-5">
        <SectionHeading eyebrow={SERVICES.eyebrow} title={SERVICES.title} text={SERVICES.text} />
        <ServiceSwitcher items={SERVICES.items} />
      </div>
    </section>
  );
}
