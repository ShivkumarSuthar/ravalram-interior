import { Clock, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "../WhatsAppIcon";
import PageShell from "../PageShell";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";
import { CONTACT } from "../../../lib/home-content";
import { CONTACT_PAGE, BANNERS } from "../../../lib/pages-content";
import Image from "next/image";

export default function ContactPage() {
  const details = [
    { icon: MapPin, label: "Address", value: CONTACT.address },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}` },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Clock, label: "Working Hours", value: CONTACT_PAGE.hours },
  ];

  return (
    <PageShell title="Contact Us" crumbs={[{ label: "Contact Us" }]} image={BANNERS.contact}>
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto max-w-site px-5">
          <SectionHeading eyebrow={CONTACT_PAGE.eyebrow} title={CONTACT_PAGE.title} />

          <ul className="mx-auto grid max-w-heading gap-8 border-y border-line/30 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-white">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-text-muted">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-1 block break-words font-heading text-base text-ink transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="mt-1 block font-heading text-base text-ink">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left" className="relative h-80 overflow-hidden rounded-3xl lg:h-auto">
              <Image src={CONTACT_PAGE.image.src} alt={CONTACT_PAGE.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </Reveal>

            <Reveal direction="right">
              <h3 className="font-heading text-card-lg text-ink">{CONTACT_PAGE.formTitle}</h3>
              <p className="mt-3 text-base leading-7 text-text-muted">{CONTACT_PAGE.formText}</p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal delay={0} className="mx-auto max-w-site px-5 pb-24 lg:pb-32.5">
        <iframe
          title="Suthar Brothers office location on Google Maps"
          src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-100 w-full rounded-3xl border-0 grayscale dark:invert-[0.9] lg:h-130"
        />
      </Reveal>
    </PageShell>
  );
}
