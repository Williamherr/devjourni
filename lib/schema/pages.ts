import { defaultEditorContent } from "@/lib/content";
import { db, pages } from "./schema";
import { and, desc, eq } from "drizzle-orm";
import { isNullOrEmpty } from "@/lib/snippets";
import { addAdminAccess, removeAccess } from "../utils/access";

export const createPages = async (
  uid: string,
  pageName: string | null,
  doc: JSON | null,
  parentId?: number | null | undefined
): Promise<number> => {
  if (isNullOrEmpty(uid)) return 0;
  const pageIds: { insertedId: number }[] = await db
    .insert(pages)
    .values({
      uid: uid,
      name: pageName || "Untitled",
      doc: doc ?? JSON.stringify(defaultEditorContent),
      lastupdate: new Date(),
      parentId: parentId,
    })
    .returning({ insertedId: pages.id });
  const pageId = pageIds[0].insertedId;
  if (pageId && pageId !== 0) {
    await addAdminAccess(pageId.toString(), uid);
  }
  return pageId;
};

export const getAllPages = async (uid: string) => {
  if (isNullOrEmpty(uid)) return null;
  const allPage = await db
    .select({
      id: pages.id,
      name: pages.name,
      subpages: pages.subpages,
      parentId: pages.parentId,
    })
    .from(pages)
    .orderBy(desc(pages.lastupdate))
    .where(and(eq(pages.uid, uid)));

  return allPage;
};

export const updateDoc = async (uid: string, id: number, doc: JSON) => {
  if (isNullOrEmpty(uid) || isNullOrEmpty(id)) return null;

  const updatedPage = await db
    .update(pages)
    .set({ doc: JSON.stringify(doc), lastupdate: new Date() })
    .where(and(eq(pages.uid, uid), eq(pages.id, id)));

  return updatedPage;
};

export const updatePageName = async (uid: string, id: number, name: string) => {
  if (isNullOrEmpty(uid) || isNullOrEmpty(id)) return null;

  const updatedPage = await db
    .update(pages)
    .set({ name: name })
    .where(and(eq(pages.uid, uid), eq(pages.id, id)));

  return updatedPage;
};

export const deleteDoc = async (uid: string, id: number) => {
  if (isNullOrEmpty(uid) || isNullOrEmpty(id)) return null;

  const deletedPage = await db
    .delete(pages)
    .where(and(eq(pages.uid, uid), eq(pages.id, id)));

  if (id && id !== 0) {
    await removeAccess(id.toString(), uid);
  }

  return deletedPage;
};

export const getRecentPage = async (uid: string) => {
  if (isNullOrEmpty(uid)) return null;
  const page = await db
    .select({ id: pages.id })
    .from(pages)
    .orderBy(desc(pages.lastupdate))
    .where(eq(pages.uid, uid))
    .limit(1);
  return page[0].id;
};
