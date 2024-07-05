import { type Config } from "drizzle-kit";
import {config} from "dotenv"

export default {
  schema: "./schemas/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  tablesFilter: ["qurantor_*"],
} satisfies Config;
