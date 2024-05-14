import { type Config } from "drizzle-kit";

export default {
  schema: "./lib/schema/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
} satisfies Config;
