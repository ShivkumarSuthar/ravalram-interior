import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// Forms pass these names; the EmailJS template in the dashboard uses the names on the right.
// Keep the template and this map in step if either side changes.
const TEMPLATE_FIELDS = {
  from_name: "user_name",
  from_email: "user_email",
  from_phone: "user_phone",
  service_needed: "project_type",
};

// No person fills in a form this fast
const MIN_FILL_MS = 3000;

// True when the form's Honeypot field was filled in, or the form was sent too soon after it appeared
function looksLikeBot(form) {
  const trap = form?.elements.namedItem("company_website");
  if (!trap) return false;
  return trap.value !== "" || Date.now() - Number(trap.dataset.shownAt || 0) < MIN_FILL_MS;
}

// Sends a form through the studio's EmailJS template. Throws when EmailJS isn't configured
// or the send fails, so forms can show their fallback message instead of a false success.
// Pass the <form> element so the Honeypot check runs; spam resolves as if sent, so bots get no signal.
export default async function sendEnquiry(params, form) {
  if (looksLikeBot(form)) return;
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured");
  }
  const templateParams = { site_name: "Suthar Brothers" };
  for (const [key, value] of Object.entries(params)) {
    templateParams[TEMPLATE_FIELDS[key] || key] = value;
  }
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
