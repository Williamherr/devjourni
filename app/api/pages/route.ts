import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { defaultEditorContent } from "@/lib/content";

// Create a new page
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");
  let pageName = searchParams.get("name");

  try {
    if (uid === null) throw new Error("There are no uid");
    if (pageName === null) pageName = "Untitled";
    await sql`INSERT INTO Pages (name, uid, doc, lastupdate) 
    VALUES (${pageName}, ${uid}, ${JSON.stringify(
      defaultEditorContent
    )}, now());`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");

  try {
    if (uid === null) throw new Error("There are no uid");
    const pages = await sql`SELECT * FROM get_pages(${uid}::UUID)`;
    return NextResponse.json({ pages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
