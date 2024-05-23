import { defaultEditorContent } from "@/lib/content";
import { db, pages } from "../schema";
import { and, eq, inArray, sql } from "drizzle-orm";
import { isNullOrEmpty } from "@/lib/snippets";
import { isArray } from "util";
import { PageMap } from "@/lib/utils/pageMaps";
import { getAllPages } from "../pages";

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
      let allPages = await getAllPages(uid);
      if (allPages === null || allPages.length === 0) return false;

      let pageMap = new PageMap(allPages);
      let page = pageMap.getPage(+id);

      if (page === null) return false;

      if (page.parentId !== null && page.parentId !== undefined) {
        // remove page from the parent's subpage list
        await tx
          .update(pages)
          .set({ subpages: sql`array_remove(${pages.subpages}, ${id})` })
          .where(and(eq(pages.uid, uid), eq(pages.id, page.parentId)));

        // add the deleted page's subpages to the parent subpages
        // await tx
        //   .update(pages)
        //   .set({
        //     subpages: sql`array_cat(${pages.subpages},
        //         (${db
        //           .select({ subpages: pages.subpages })
        //           .from(pages)
        //           .where(eq(pages.id, id))}))`,
        //   })
        //   .where(and(eq(pages.uid, uid), eq(pages.id, parentId)));

        // replace child parentId
        // await tx
        //   .update(pages)
        //   .set({ parentId: parentId })
        //   .where(and(eq(pages.uid, uid), eq(pages.parentId, id)));
      }
      let allIds = pageMap.getAllIds(page);
      await tx
        .delete(pages)
        .where(and(eq(pages.uid, uid), inArray(pages.id, allIds)));
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};
