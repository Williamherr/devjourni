import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { searchParams } = new URL(request.url);
  const ownerId = searchParams.get("ownerId");

  const { id: pageId } = params;

  try {
    if (ownerId === null) throw new Error("There are no ownerId");
    const pages =
      await sql`SELECT * FROM Pages WHERE id=${pageId} AND ownerId=${ownerId};`;
    return NextResponse.json({ pages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { searchParams } = new URL(request.url);
  const ownerId = searchParams.get("ownerId");
  const doc = searchParams.get("doc");
  const { id: pageId } = params;

  try {
    if (ownerId === null) throw new Error("There are no ownerId");
    let pages =
      await sql`UPDATE Pages SET doc=${doc}, lastupdate=now() WHERE id=${pageId} AND ownerId=${ownerId};`;
    return NextResponse.json({ pages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
