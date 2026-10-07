import type { CollectionConfig } from "payload";

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQs" },
  admin: {
    group: "Content", useAsTitle: "question", defaultColumns: ["question", "order"] },
  access: { read: () => true },
  versions: { maxPerDoc: 10 },
  defaultSort: "order",
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true },
    { name: "order", type: "number", defaultValue: 10 },
  ],
};
