import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");

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
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");
  const doc = searchParams.get("doc");
  const { id: pageId } = params;

  try {
    if (uid === null) throw new Error("There are no uid");
    let pages =
      await sql`UPDATE Pages SET doc=${doc}, lastupdate=now() WHERE id=${pageId} AND uid=${uid};`;
    return NextResponse.json({ pages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
