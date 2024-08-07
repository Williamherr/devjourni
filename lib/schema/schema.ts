import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  serial,
  json,
  pgEnum,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "next-auth/adapters";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const db = drizzle(sql);

export const users = pgTable("user", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: text("role").notNull().default("user"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  uid: text("uid").references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  doc: json("doc").notNull(),
  parentId: integer("parentId"),
  subpages: integer("subpages").array(),
  lastupdate: timestamp("lastupdate", { mode: "date" }).notNull(),
});

// export const pages = pgTable("new_pages", {
//   id: serial("id").primaryKey(),
//   uid: text("uid").references(() => users.id, { onDelete: "cascade" }),
//   name: text("name").notNull(),
//   doc: json("doc").notNull(),
//   parentId: integer("parentId").references((): AnyPgColumn => pages.id),
//   lastupdate: timestamp("lastupdate", { mode: "date" }).notNull(),
// });

// export const pageRelationships = pgTable(
//   "pageRelationships",
//   {
//     parentId: integer("parentId").references(() => pages.id),
//     childId: integer("childId").references(() => pages.id),
//   },
//   (pr) => ({
//     primaryKey: primaryKey({ columns: [pr.parentId, pr.childId] }),
//   })
// );

export const accessLevelEnum = pgEnum("accessLevel", [
  "read",
  "write",
  "admin",
  "owner",
]);

export const pageAccess = pgTable("pageAccess", {
  id: serial("id").primaryKey(),
  pageId: text("pageId").notNull(),
  userId: text("userId").notNull(),
  accessLevel: text("accessLevel").notNull().default("read"),
  lastupdate: timestamp("lastupdate", { mode: "date" }).notNull(),
});

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  doc: json("doc").notNull(),
  lastUpdated: timestamp("lastupdate", { mode: "date" }).notNull(),
  lastUpdatedBy: text("uid").references(() => users.id),
});
