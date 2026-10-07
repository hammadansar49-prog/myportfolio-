import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    group: "Admin", useAsTitle: "email" },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 7, // stay logged in for 7 days
    maxLoginAttempts: 5, // lock the account after 5 wrong passwords
    lockTime: 10 * 60 * 1000, // for 10 minutes
  },
  fields: [],
};
