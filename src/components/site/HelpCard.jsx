import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT } from "../../lib/home-content";
import Image from "next/image";

// Dark sidebar card inviting a call, with an optional background photo
export default function HelpCard({ title = "Do You Need Help?", text, image, className = "" }) {
  return (
    <div className={`relative isolate overflow-hidden rounded-3xl bg-surface-dark px-8 py-12 text-center ${className}`}>
      {image && <Image src={image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="-z-20 object-cover" />}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/65" />
      <span className="mx-auto grid size-14 place-items-center rounded-full bg-primary text-white">
        <Phone className="size-6" />
      </span>
      <p className="mt-6 font-heading text-card text-white">{title}</p>
      {text && <p className="mt-3 text-base leading-7 text-white/80">{text}</p>}
      <a href={CONTACT.phoneHref} className="mt-5 block font-heading text-card-lg text-white transition-colors hover:text-primary">
        {CONTACT.phone}
      </a>
      <a href={`mailto:${CONTACT.email}`} className="mt-1 block text-base text-white/80 transition-colors hover:text-primary">
        {CONTACT.email}
      </a>
      <Link href="/contact" className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 font-heading text-base text-white transition-colors hover:bg-bg-base hover:text-ink">
        Get A Call Back
      </Link>
    </div>
  );
}
