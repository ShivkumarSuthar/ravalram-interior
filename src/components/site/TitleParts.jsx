import { Fragment } from "react";

// Renders a title array: plain strings stay as-is, { gold } parts use the primary color
export default function TitleParts({ parts }) {
  if (typeof parts === "string") return parts;
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <span key={i} className="text-primary">
        {part.gold}
      </span>
    )
  );
}
