import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { deleteDoc, getRecentPage, updateDoc } from "@/lib/schema/pages";
import { isNullOrEmpty } from "@/lib/snippets";
import { hasAdminAccess } from "@/lib/utils/access";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const session = await auth();
  const uid = session?.user?.id;

  const { id: pageId } = params;

  try {
    if (uid === null) throw new Error("There are no uid");
    const pages =
      await sql`SELECT * FROM Pages WHERE id=${pageId} AND uid=${uid};`;
    return NextResponse.json({ pages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const session = await auth();
  const uid = session?.user?.id ?? "";
  const { id: pageId } = params;
  const { doc } = await request.json();
  try {
    if (isNullOrEmpty(uid) || doc === null) throw new Error("There are no uid");
    updateDoc(uid, pageId, doc);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const session = await auth();
  const uid = session?.user?.id ?? "";

  const { id: pageId } = params;
  const { deltedPageId } = await request.json();

  try {
    if (isNullOrEmpty(uid)) throw new Error("There are no uid");
    if (isNullOrEmpty(deltedPageId)) throw new Error("There are no pageId");
    let hasAccess = await hasAdminAccess(uid, deltedPageId);
    if (!hasAccess)
      throw new Error("You are not authorized to delete this page");

    await deleteDoc(uid, deltedPageId);

    if (pageId == deltedPageId) {
      const recentId = await getRecentPage(uid);
      return NextResponse.json({ recentId }, { status: 200 });
    }
    return NextResponse.json({ recentId: 0 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
