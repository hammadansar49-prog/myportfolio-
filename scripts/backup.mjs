// Copies the CMS database and uploaded images into backups/<timestamp>/
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
const dest = join("backups", stamp);
mkdirSync(dest, { recursive: true });

for (const item of ["data.db", "data.db-shm", "data.db-wal", "media"]) {
  if (existsSync(item)) cpSync(item, join(dest, item), { recursive: true });
}
console.log("Backup saved to " + dest);
