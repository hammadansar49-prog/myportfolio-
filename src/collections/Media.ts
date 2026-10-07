import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "Library", useAsTitle: "alt" },
  access: { read: () => true },
  upload: {
    mimeTypes: ["image/*"],
    focalPoint: true,
    adminThumbnail: "thumbnail",
    imageSizes: [{ name: "thumbnail", width: 400, height: 300, position: "centre" }],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: { description: "Short description of the image (used for accessibility and SEO)." },
    },
  ],
};
