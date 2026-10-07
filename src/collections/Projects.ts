import type { CollectionConfig } from "payload";
import { hexColor, linkUrl } from "../lib/validators";

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: { singular: "Project", plural: "Projects" },
  admin: {
    group: "Content",
    useAsTitle: "name",
    defaultColumns: ["name", "type", "order", "published"],
    description: "Case studies shown in the Work section.",
    listSearchableFields: ["name", "type", "stack"],
  },
  versions: { maxPerDoc: 20 },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    { name: "name", type: "text", required: true, maxLength: 60 },
    { name: "type", type: "text", required: true, admin: { description: "Short label, e.g. Online store" } },
    { name: "stack", type: "text", admin: { description: "e.g. Next.js · Firebase · Cloudinary" } },
    {
      name: "order",
      type: "number",
      defaultValue: 10,
      admin: { position: "sidebar", description: "Lower numbers appear first on the site." },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      admin: { position: "sidebar", description: "Untick to hide this project without deleting it." },
    },
    {
      name: "visual",
      type: "select",
      defaultValue: "image",
      options: [
        { label: "Screenshot (upload below)", value: "image" },
        { label: "KAROBAR POS mockup", value: "karobar" },
        { label: "Notes app phone mockup", value: "notes" },
      ],
    },
    { name: "image", type: "upload", relationTo: "media", admin: { condition: (_, s) => s?.visual === "image" } },
    {
      name: "imageLabel",
      type: "text",
      admin: {
        description: "Text in the fake browser bar, e.g. theottdeals.com",
        condition: (_, s) => s?.visual === "image",
      },
    },
    { name: "bg", type: "text", defaultValue: "#121212", validate: hexColor as never, admin: { description: "Background colour behind the image (hex)." } },
    { name: "problem", type: "textarea", required: true, maxLength: 600 },
    { name: "role", type: "textarea", required: true, maxLength: 600 },
    {
      name: "result",
      type: "textarea",
      required: true,
      maxLength: 600,
      admin: { description: "Replace any [ADD: ...] text with a real result before you share the site." },
    },
    {
      type: "row",
      fields: [
        { name: "link", type: "text", required: true, validate: linkUrl as never },
        { name: "linkText", type: "text", required: true },
      ],
    },
  ],
};
