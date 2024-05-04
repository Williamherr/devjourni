import { defaultEditorContent } from "@/lib/content";
import { db, notes } from "./schema";
import { desc } from "drizzle-orm";
import { isNullOrEmpty } from "@/lib/snippets";

export const createNotes = async (
  uid: string,
  pageName: string | null,
  doc: JSON | null
): Promise<number> => {
  const pageId: { insertedId: number }[] = await db
    .insert(notes)
    .values({
      lastUpdatedBy: uid,
      name: pageName || "Notes",
      doc: doc ?? JSON.stringify(defaultEditorContent),
      lastUpdated: new Date(),
    })
    .returning({ insertedId: notes.id });
  return pageId[0].insertedId;
};

export const getAllNotes = async () => {
  const allPage = await db
    .select({ id: notes.id, name: notes.name })
    .from(notes)
    .orderBy(desc(notes.lastUpdatedBy));

  return allPage;
};

export const updateDoc = async (uid: string, id: number, doc: JSON) => {
  if (isNullOrEmpty(id)) return null;

  const updatedPage = await db.update(notes).set({
    doc: JSON.stringify(doc),
    lastUpdated: new Date(),
    lastUpdatedBy: uid,
  });

  return updatedPage;
};

export const updateNoteName = async (id: number, name: string) => {
  if (isNullOrEmpty(id)) return null;

  const updatedPage = await db.update(notes).set({ name: name });

  return updatedPage;
};

export const deleteDoc = async (id: number) => {
  if (isNullOrEmpty(id)) return null;

  const deletedPage = await db.delete(notes);

  return deletedPage;
};
