/** Field validators for the CMS. Each returns true when valid, or a message to show the editor. */

type V = (value: unknown) => true | string;

const empty = (v: unknown) => v === undefined || v === null || String(v).trim() === "";

export const phoneDigits: V = (v) =>
  empty(v) || /^\d{8,15}$/.test(String(v).replace(/\s/g, "")) || "Digits only with country code, e.g. 923137666309 (no + or spaces).";

export const emailAddress: V = (v) =>
  empty(v) ||
  String(v).includes("[") || // placeholder text is allowed until you add the real one
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v)) ||
  "Enter a valid email address.";

export const hexColor: V = (v) =>
  empty(v) || /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(String(v)) || "Use a hex colour like #121212.";

export const linkUrl: V = (v) =>
  empty(v) || /^(https?:\/\/|#|\/|mailto:)/i.test(String(v)) || "Start with https://, / or #.";

export const httpsUrl: V = (v) =>
  empty(v) || /^https:\/\/\S+$/i.test(String(v)) || "Use a full link starting with https://";
