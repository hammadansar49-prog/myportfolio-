import type { CollectionConfig } from "payload";

export const SkillGroups: CollectionConfig = {
  slug: "skill-groups",
  labels: { singular: "Skill group", plural: "Skill groups" },
  admin: {
    group: "Content", useAsTitle: "title", defaultColumns: ["title", "order"] },
  access: { read: () => true },
  versions: { maxPerDoc: 10 },
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "text" },
    {
      type: "row",
      fields: [
        {
          name: "icon",
          type: "select",
          defaultValue: "server",
          options: [
            { label: "Server", value: "server" },
            { label: "Window", value: "window" },
            { label: "Layers", value: "layers" },
            { label: "Shield", value: "shield" },
          ],
        },
        { name: "order", type: "number", defaultValue: 10 },
      ],
    },
    {
      name: "items",
      type: "array",
      labels: { singular: "Skill", plural: "Skills" },
      fields: [{ name: "name", type: "text", required: true }],
    },
  ],
};
