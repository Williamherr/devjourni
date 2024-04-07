import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { updateDoc } from "@/lib/schema/pages";
import { isNullOrEmpty } from "@/lib/snippets";

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
