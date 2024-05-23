import { defaultEditorContent } from "@/lib/content";
import { db, pages } from "../schema";
import { and, eq, sql } from "drizzle-orm";
import { isNullOrEmpty } from "@/lib/snippets";
import { isArray } from "util";

// createSubpagesTransaction creates a new subpage and adds it to the parent page
export const createSubpagesTransaction = async (
  uid: string,
  parentId: number
): Promise<number> => {
  return db
    .transaction(async (tx) => {
      let subpageId: number = (
        await tx
          .insert(pages)
          .values({
            uid: uid,
            name: "Untitled",
            doc: JSON.stringify(defaultEditorContent),
            lastupdate: new Date(),
            parentId: parentId,
          })
          .returning({ insertedId: pages.id })
      )[0].insertedId;
      await tx
        .update(pages)
        .set({ subpages: sql`array_append(${pages.subpages}, ${subpageId})` })
        .where(and(eq(pages.uid, uid), eq(pages.id, parentId)));
      await tx
        .update(pages)
        .set({ parentId: parentId })
        .where(and(eq(pages.uid, uid), eq(pages.id, subpageId)));
      return subpageId;
    })
    .catch((error) => {
      console.error(error);
      return 0;
    });
};

export const deletePagesTransaction = async (
  uid: string,
  id: number
): Promise<boolean> => {
  return db
    .transaction(async (tx) => {
      let parentId = await getParentId(id);
      if (parentId !== null) {
        // remove subpage from the parent page
        await tx
          .update(pages)
          .set({ subpages: sql`array_remove(${pages.subpages}, ${id})` })
          .where(and(eq(pages.uid, uid), eq(pages.id, parentId)));

        // add the deleted page subpages to the parent subpages
        await tx
          .update(pages)
          .set({
            subpages: sql`array_cat(${pages.subpages}, 
                (${db
                  .select({ subpages: pages.subpages })
                  .from(pages)
                  .where(eq(pages.id, id))}))`,
          })
          .where(and(eq(pages.uid, uid), eq(pages.id, parentId)));

        // replace child parentId
        await tx
          .update(pages)
          .set({ parentId: parentId })
          .where(and(eq(pages.uid, uid), eq(pages.parentId, id)));
      }

      await tx.delete(pages).where(and(eq(pages.uid, uid), eq(pages.id, id)));
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};

const getParentId = async (id: number): Promise<number | null> => {
  const parentId = await db
    .select({ parentId: pages.parentId })
    .from(pages)
    .where(eq(pages.id, id));
  return parentId[0].parentId;
};

const getSubpages = async (id: number): Promise<number[] | null> => {
  const subpages = await db
    .select({ subpages: pages.subpages })
    .from(pages)
    .where(eq(pages.id, id));
  return subpages[0].subpages;
};
