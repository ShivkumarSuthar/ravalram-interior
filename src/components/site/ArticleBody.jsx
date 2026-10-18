import { Fragment } from "react";

// Renders the light markdown used in blog and project text:
// "## " / "### " headings, "- " bullet lists, "> " quotes, **bold**, blank-line paragraphs
function inline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-surface-dark">{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

function toBlocks(source) {
  const blocks = [];
  let list = null;
  for (const raw of source.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("- ")) {
      if (!list) blocks.push((list = { type: "list", items: [] }));
      list.items.push(line.slice(2));
      continue;
    }
    list = null;
    if (!line) continue;
    if (line.startsWith("### ")) blocks.push({ type: "h3", text: line.slice(4) });
    else if (line.startsWith("## ")) blocks.push({ type: "h3", text: line.slice(3) });
    else if (line.startsWith("> ")) blocks.push({ type: "quote", text: line.slice(2) });
    else blocks.push({ type: "p", text: line });
  }
  return blocks;
}

export default function ArticleBody({ source }) {
  return (
    <div className="space-y-5">
      {toBlocks(source || "").map((block, i) => {
        if (block.type === "h3")
          return <h3 key={i} className="pt-4 font-heading text-card-lg text-surface-dark">{block.text}</h3>;
        if (block.type === "list")
          return (
            <ul key={i} className="space-y-2.5">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-text-muted">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{inline(item)}</span>
                </li>
              ))}
            </ul>
          );
        if (block.type === "quote")
          return (
            <blockquote key={i} className="rounded-3xl bg-bg-base p-8 text-center font-heading text-card text-surface-dark">
              “{block.text}”
            </blockquote>
          );
        return <p key={i} className="text-base leading-7 text-text-muted">{inline(block.text)}</p>;
      })}
    </div>
  );
}
