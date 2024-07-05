import { sql } from "drizzle-orm";
import {
  index,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { createTable } from "../utils/db";

export const posts = createTable(
    "post",
    {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 256 }),
      createdAt: timestamp("created_at", { withTimezone: true })
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
      updatedAt: timestamp("updatedAt", { withTimezone: true }),
    },
    (example) => ({
      nameIndex: index("name_idx").on(example.name),
    })
  );