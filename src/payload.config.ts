import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { Services } from "./collections/Services";
import { SkillGroups } from "./collections/SkillGroups";
import { Faqs } from "./collections/Faqs";
import { Site } from "./globals/Site";
import { getSiteUrl } from "./lib/siteUrl";
import { migrations } from "./migrations";

const SITE_URL = getSiteUrl();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: "dark",
    meta: { titleSuffix: " | Portfolio CMS" },
    importMap: { baseDir: path.resolve(dirname) },
    livePreview: {
      url: SITE_URL,
      collections: ["projects", "services", "faqs", "skill-groups"],
      globals: ["site"],
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 390, height: 844 },
        { label: "Tablet", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
    components: {
      graphics: {
        Logo: "/components/admin/Logo#Logo",
        Icon: "/components/admin/Icon#Icon",
      },
      beforeLogin: ["/components/admin/BeforeLogin#BeforeLogin"],
      beforeDashboard: ["/components/admin/BeforeDashboard#BeforeDashboard"],
    },
  },
  collections: [Users, Media, Projects, Services, SkillGroups, Faqs],
  globals: [Site],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  // Only your own site may call the API with cookies.
  cors: [SITE_URL],
  csrf: [SITE_URL, "http://localhost:3000"],
  upload: { limits: { fileSize: 5_000_000 } }, // 5 MB per image
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    // In production the tables are created by the migrations in src/migrations (dev uses automatic push).
    prodMigrations: migrations,
    client: {
      url: process.env.DATABASE_URL || "file:./data.db",
      // Needed for hosted libSQL databases such as Turso. Leave empty for a local file.
      authToken: process.env.DATABASE_AUTH_TOKEN || undefined,
    },
  }),
  sharp,
  // Make sure the database tables exist before anything is read, also on a fresh production server.
  onInit: async (payload) => {
    if (process.env.NODE_ENV !== "production") return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (payload.db as any).migrate({ migrations });
    } catch (err) {
      payload.logger.error({ err, msg: "Running database migrations failed" });
    }
  },
});
