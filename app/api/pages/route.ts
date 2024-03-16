import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { defaultEditorContent } from "@/lib/content";

// const createTable = `CREATE TABLE Pages ( id SERIAL PRIMARY KEY, ownerId UUID, name varchar(255), doc jsonb, lastupdate date);`;
// http://localhost:3000/api/pages?name=Testing&ownerId=a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11

// Create a new page
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const ownerId = searchParams.get("ownerId");
  let pageName = searchParams.get("name");

  try {
    if (ownerId === null) throw new Error("There are no ownerId");
    if (pageName === null) pageName = "Untitled";
    await sql`INSERT INTO Pages (name, ownerId, doc, lastupdate) 
    VALUES (${pageName}, ${ownerId}, ${JSON.stringify(
      defaultEditorContent
    )}, now());`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// Get all pages for a user
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ownerId = searchParams.get("ownerId");

  try {
    if (ownerId === null) throw new Error("There are no ownerId");
    const pages = await sql`SELECT * FROM Pages WHERE ownerId = ${ownerId};`;
    return NextResponse.json({ pages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
