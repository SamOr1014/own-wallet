CREATE TABLE IF NOT EXISTS "spending" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" timestamp,
	"description" text NOT NULL,
	"amount" numeric
);
