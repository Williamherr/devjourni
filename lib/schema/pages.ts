import { defaultEditorContent } from "@/lib/content";
import { db, pages } from "./schema";
import { and, eq } from "drizzle-orm";
import { isNullOrEmpty } from "@/lib/snippets";

export const createPages = async (
  uid: string,
  pageName: string | null,
  doc: JSON | null
): Promise<number> => {
  if (isNullOrEmpty(uid)) return 0;
  const pageId: { insertedId: number }[] = await db
    .insert(pages)
    .values({
      uid: uid,
      name: pageName || "Untitled",
      doc: doc ?? JSON.stringify(defaultEditorContent),
      lastupdate: new Date(),
    })
    .returning({ insertedId: pages.id });
  return pageId[0].insertedId;
};

export const getAllPages = async (uid: string) => {
  if (isNullOrEmpty(uid)) return null;
  const allPage = await db
    .select({ id: pages.id, name: pages.name })
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
