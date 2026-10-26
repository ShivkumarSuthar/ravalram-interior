"use client";

import { useEffect, useId, useRef } from "react";

// Spam trap for the enquiry forms: a field people never see (bots fill every field), stamped with the time the
// form appeared (bots submit within a second). sendEnquiry reads both and quietly drops the message if either trips.
export default function Honeypot() {
  const id = useId();
  const ref = useRef(null);
  useEffect(() => {
    ref.current.dataset.shownAt = String(Date.now());
  }, []);

  return (
    <div aria-hidden className="sr-only">
      <label htmlFor={id}>Leave this field empty</label>
      <input ref={ref} id={id} name="company_website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
}
