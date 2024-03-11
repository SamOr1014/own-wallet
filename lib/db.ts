import "./config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { InsertSpendingType, spending } from "./schema";

const queryClient = postgres(process.env.DB_ADDR!);
export const db = drizzle(queryClient);
