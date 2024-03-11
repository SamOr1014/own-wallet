import "./config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { spending } from "./schema";

const queryClient = postgres(process.env.DB_ADDR!);
export const db = drizzle(queryClient);

export const getUsers = async () => {
  return await db.select().from(spending);
};
