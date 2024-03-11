import { pgTable, serial, text, timestamp, numeric } from "drizzle-orm/pg-core";

export const spending = pgTable("spending", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull(),
  description: text("description")
    .notNull()
    .$default(() => ""),
  amount: numeric("amount", {
    scale: 2,
  }).notNull(),
});

export type SpendingType = typeof spending.$inferSelect;

export type InsertSpendingType = typeof spending.$inferInsert;
