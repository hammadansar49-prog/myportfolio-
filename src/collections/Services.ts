import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  labels: { singular: "Service", plural: "Services" },
  admin: {
    group: "Content", useAsTitle: "title", defaultColumns: ["title", "order"] },
  access: { read: () => true },
  versions: { maxPerDoc: 10 },
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "best", type: "text", admin: { description: "Shown after 'Best for:'" } },
    {
      type: "row",
      fields: [
        {
          name: "icon",
          type: "select",
          defaultValue: "site",
          options: [
            { label: "Website", value: "site" },
            { label: "App / dashboard", value: "app" },
            { label: "Billing", value: "billing" },
            { label: "Fix / tools", value: "fix" },
            { label: "Integration", value: "plug" },
            { label: "Automation", value: "auto" },
          ],
        },
        { name: "order", type: "number", defaultValue: 10 },
      ],
    },
  ],
};
