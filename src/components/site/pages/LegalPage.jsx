import { Check } from "lucide-react";
import PageShell from "../PageShell";
import Reveal from "../Reveal";
import { CONTACT } from "../../../lib/home-content";
import { BANNERS, CONTACT_PAGE } from "../../../lib/pages-content";

const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function SectionList({ list }) {
  const detailed = typeof list[0] === "object";
  if (detailed) {
    return (
      <ul className="grid gap-4 sm:grid-cols-2">
        {list.map((item) => (
          <li key={item.title} className="rounded-3xl bg-bg-soft p-6">
            <h4 className="font-heading text-lead text-ink">{item.title}</h4>
            <p className="mt-2 text-base leading-7 text-text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="space-y-3">
      {list.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-text-muted">
          <Check className="mt-1.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
          {item}
        </li>
      ))}
    </ul>
  );
}

// Privacy Policy / Terms: sticky contents list beside numbered sections
export default function LegalPage({ doc }) {
  return (
    <PageShell title={doc.title} crumbs={[{ label: doc.title }]} image={BANNERS.legal}>
      <section className="py-24 lg:py-32.5">
        <div className="mx-auto grid max-w-site items-start gap-12 px-5 lg:grid-cols-[1fr_2.2fr] lg:gap-16">
          <Reveal as="aside" direction="left" className="lg:sticky lg:top-32">
            <p className="text-sm uppercase text-text-muted">Last updated: <span className="text-primary">{doc.updated}</span></p>
            <p className="mt-5 text-lead text-ink">{doc.intro}</p>
            <nav aria-label="On this page" className="mt-8 hidden rounded-3xl bg-bg-base p-6 lg:block">
              <ol className="space-y-1">
                {doc.sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#${slug(s.title)}`} className="flex gap-3 rounded-xl px-3 py-2 font-heading text-base text-ink transition-colors hover:bg-bg-soft hover:text-primary">
                      <span className="w-6 text-primary">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>

          <div className="space-y-6">
            {doc.sections.map((s, i) => (
              <Reveal as="article" key={s.title} id={slug(s.title)} delay={0} duration={0.9} className="scroll-mt-32 rounded-3xl bg-bg-base p-8 lg:p-12">
                <p className="font-heading text-eyebrow uppercase text-primary">Section {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-heading text-card-lg text-ink">{s.title}</h2>
                <div className="mt-6 space-y-5">
                  {s.quote && (
                    <blockquote className="border-l-2 border-primary pl-5 font-heading text-lead-lg text-ink">{s.quote}</blockquote>
                  )}
                  {s.paragraphs?.map((p) => (
                    <p key={p} className="text-base leading-7 text-text-muted">{p}</p>
                  ))}
                  {s.list && <SectionList list={s.list} />}
                  {s.note && <p className="text-sm leading-6 text-text-muted">{s.note}</p>}
                  {s.contact && (
                    <SectionList
                      list={[
                        { title: "Phone", text: CONTACT.phone },
                        { title: "Email", text: CONTACT.email },
                        { title: "Address", text: CONTACT.address },
                        { title: "Working Hours", text: CONTACT_PAGE.hours },
                      ]}
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
