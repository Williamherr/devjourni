import { eq } from "drizzle-orm";
import { isNullOrEmpty } from "../snippets";
import { db, users } from "./schema";

type User = typeof users.$inferInsert;

const getUser = async (email: string): Promise<User | null> => {
  if (isNullOrEmpty(email)) return null;
  const user = await db.select().from(users).where(eq(users.email, email));

  return user[0] ?? null;
};

const createUser = async (user: User) => {
  return db.insert(users).values(user);
};

export { getUser, createUser };
