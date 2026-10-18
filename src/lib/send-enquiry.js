import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// Sends a form through the studio's EmailJS template. Throws when EmailJS isn't configured
// or the send fails, so forms can show their fallback message instead of a false success.
export default async function sendEnquiry(params) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured");
  }
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, { site_name: "Suthar Living", ...params }, PUBLIC_KEY);
}
