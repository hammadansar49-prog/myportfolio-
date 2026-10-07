import type { GlobalConfig } from "payload";
import { emailAddress, httpsUrl, phoneDigits } from "../lib/validators";

const text = (name: string, label?: string, extra: Record<string, unknown> = {}) =>
  ({ name, type: "text", label, ...extra }) as never;
const area = (name: string, label?: string) => ({ name, type: "textarea", label }) as never;

export const Site: GlobalConfig = {
  slug: "site",
  label: "Site settings",
  access: { read: () => true },
  versions: { max: 20 },
  admin: { group: "Settings", description: "Everything on the home page that is not a project, service, skill or FAQ." },
  fields: [
    { name: "seeded", type: "checkbox", defaultValue: false, admin: { hidden: true } },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero & profile",
          fields: [
            text("brandName", "Your name"),
            text("role", "Role under your name"),
            text("available", "Availability chip text"),
            text("headlinePre", "Headline (first part)"),
            text("headlineAccent", "Headline (highlighted part)"),
            area("subline", "Sub-line under the headline"),
            text("founderLine", "Small line under the buttons"),
            { type: "row", fields: [text("primaryCta", "Main button"), text("secondaryCta", "Second button")] },
            { name: "photo", type: "upload", relationTo: "media", label: "Your photo" },
            {
              name: "facts",
              type: "array",
              label: "Profile facts",
              fields: [text("label", "Label", { required: true }), text("value", "Value", { required: true })],
            },
            text("profileCta", "Profile button text"),
            {
              name: "stats",
              type: "array",
              label: "Stat cards",
              maxRows: 4,
              fields: [text("value", "Number", { required: true }), text("label", "Label", { required: true })],
            },
          ],
        },
        {
          label: "Trust & marquee",
          fields: [
            {
              name: "trust",
              type: "array",
              label: "Trust points (under hero)",
              fields: [text("point", "Point", { required: true })],
            },
            {
              name: "marquee",
              type: "array",
              label: "Scrolling skills strip",
              fields: [text("name", "Skill", { required: true })],
            },
          ],
        },
        {
          label: "About",
          fields: [
            text("aboutHeadline", "Headline"),
            {
              name: "aboutParagraphs",
              type: "array",
              label: "Paragraphs",
              fields: [area("text", "Paragraph")],
            },
            {
              name: "aboutTags",
              type: "array",
              label: "Tags",
              fields: [text("tag", "Tag", { required: true })],
            },
          ],
        },
        {
          label: "Process & CTA",
          fields: [
            text("processHeading", "Process heading"),
            {
              name: "processSteps",
              type: "array",
              label: "Process steps",
              fields: [text("title", "Title", { required: true }), area("description", "Description")],
            },
            text("processNote", "Line under the steps"),
            text("ctaHeading", "Final call-to-action heading"),
            text("bookHeading", "Contact section heading"),
            area("bookSubtext", "Contact section text"),
            text("footerTagline", "Footer tagline"),
          ],
        },
        {
          label: "Contact",
          fields: [
            text("phone", "WhatsApp number (digits only, with country code)", {
              admin: { description: "Example: 923137666309" },
              validate: phoneDigits,
              required: true,
            }),
            text("phoneLabel", "Number as shown on the page", { admin: { description: "Example: +92 313 7666309" } }),
            text("email", "Email address", { validate: emailAddress }),
            text("github", "GitHub URL", { validate: httpsUrl }),
            text("floatMessage", "Message pre-filled by the floating WhatsApp button"),
            text("ctaMessage", "Message pre-filled by the profile button"),
          ],
        },
        {
          label: "SEO",
          fields: [text("seoTitle", "Page title"), area("seoDescription", "Meta description")],
        },
      ],
    },
  ],
};
