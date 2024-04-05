import { defaultEditorContent } from "@/lib/content";
import { db, pages } from "./schema";
import { and, eq } from "drizzle-orm";
import { isNullOrEmpty } from "@/lib/snippets";

export const createPages = async (uid: string, docName: string | null) => {
  if (isNullOrEmpty(uid)) return null;
  const pageId = await db
    .insert(pages)
    .values({
      uid: uid,
      name: docName || "Untitled",
      doc: JSON.stringify(defaultEditorContent),
      lastupdate: new Date(),
    })
    .returning({ insertedId: pages.id });
  return pageId;
};

export const getAllPages = async (uid: string) => {
  if (isNullOrEmpty(uid)) return null;
  const allPage = await db
    .select({ path: pages.id, name: pages.name })
    .from(pages)
    .where(eq(pages.uid, uid));

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
