import { and, eq } from "drizzle-orm";
import { isNullOrEmpty } from "../snippets";
import { db, pageAccess, users } from "./schema";

type User = typeof users.$inferInsert;

const getUser = async (id: string): Promise<User | null> => {
  if (isNullOrEmpty(id)) return null;
  const user = await db.select().from(users).where(eq(users.id, id));

  return user[0] ?? null;
};

const createUser = async (user: User) => {
  return db.insert(users).values(user);
};

export { getUser, createUser };
