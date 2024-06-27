import { type Config } from "drizzle-kit";

import { env } from "~/env.mjs";


export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["qurantor_*"],
} satisfies Config;
