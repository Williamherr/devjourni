import { NextResponse } from "next/server";
import { createPages, getAllPages } from "@/lib/schema/pages";
import { auth } from "@/auth";
import { isNullOrEmpty } from "@/lib/snippets";
import { PageMap } from "@/lib/utils/pageMaps";

// Create a new page
export async function POST(request: Request) {
  try {
    const session = await auth();
    const uid = session?.user?.id || "";
    if (isNullOrEmpty(uid)) throw new Error("There are no uid");

    const {
      doc,
      pageName,
      parentId,
    }: { doc: JSON; pageName: string; parentId: number | null } =
      await request.json();

    const id = await createPages(
      uid,
      !isNullOrEmpty(pageName) ? pageName : "Untitled",
      doc,
      parentId
    );

    return NextResponse.json({ id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

interface Page {
  id: number;
  name: string;
  subpages: any;
  parentId?: number | null;
}

export async function GET(request: Request) {
  const session = await auth();
  const uid = session?.user?.id ?? "";
  try {
    const pages = await getAllPages(uid || "");
    if (!pages) throw new Error("No pages found");
    const filteredPages = new PageMap(pages).getFilteredNoteBook();
    return NextResponse.json({ pages: filteredPages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
