const FALLBACK = "http://localhost:3000";

/**
 * Returns a safe, absolute site URL (no trailing slash).
 * Forgiving on purpose so a typo in the hosting panel can never break the build:
 *  - "NEXT_PUBLIC_SITE_URL=https://x.com" (whole line pasted) -> "https://x.com"
 *  - "x.com" (no scheme)                  -> "https://x.com"
 *  - empty or unreadable                  -> http://localhost:3000
 */
export function getSiteUrl(raw: string | undefined = process.env.NEXT_PUBLIC_SITE_URL): string {
  let v = (raw ?? "").trim();
  if (!v) return FALLBACK;
  if (!/^https?:\/\//i.test(v) && v.includes("=")) v = v.slice(v.indexOf("=") + 1).trim();
  if (!/^https?:\/\//i.test(v)) v = `https://${v}`;
  try {
    return new URL(v).origin;
  } catch {
    return FALLBACK;
  }
}
