import { eq } from "drizzle-orm";
import { isNullOrEmpty } from "../snippets";
import { db, users } from "./schema";

interface User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
}
[];

export const getUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  if (isNullOrEmpty(email) || isNullOrEmpty(password)) return null;
  const user = await db.select().from(users).where(eq(users.email, email));

  return user[0] ?? null;
};
