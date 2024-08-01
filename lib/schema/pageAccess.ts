import { and, eq } from "drizzle-orm";
import { db, pageAccess } from "./schema";

export const addAccess = async (
  pageId: string,
  userId: string,
  accessLevel: string = "read"
) => {
  await db.insert(pageAccess).values({
    pageId: pageId,
    userId: userId,
    accessLevel: accessLevel,
    lastupdate: new Date(),
  });
};

export const hasAccessToPage = async (
  userId: string,
  pageId: number,
  operation: string = "read"
): Promise<boolean> => {
  if (!userId || !pageId) return false;

  let access = await isUserAuthorized(userId, pageId, operation);
  return access;
};

const isUserAuthorized = async (
  userId: string,
  pageId: number,
  operation: string
) => {
  let accessLevels = ["admin", "owner", "write", "read"];
  switch (operation) {
    case "write":
      accessLevels.pop();
      break;
    case "admin":
      accessLevels = accessLevels.slice(0, -2);
      break;
    default:
      break;
  }

  const access = await db
    .select()
    .from(pageAccess)
    .where(
      and(
        eq(pageAccess.userId, userId),
        eq(pageAccess.pageId, pageId.toString())
      )
    )
    .limit(1);

  console.log(access[0]?.accessLevel);
  console.log(accessLevels.includes(access[0]?.accessLevel));

  return accessLevels.includes(access[0]?.accessLevel);
};

export const deleteAccess = async (pageId: string, userId: string) => {
  await db
    .delete(pageAccess)
    .where(and(eq(pageAccess.userId, userId), eq(pageAccess.pageId, pageId)));
};
