import { NextResponse } from "next/server";
import { createPages, getAllPages } from "@/lib/schema/pages";
import { auth } from "@/auth";

// Create a new page
export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session = await auth();
    const uid = session?.user?.id || "";
    let pageName = searchParams.get("name");
    if (uid === null) throw new Error("There are no uid");
    if (pageName === null) pageName = "Untitled";
    const pages = createPages(uid, pageName);

    //return NextResponse.json({ pages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await auth();
    const uid = session?.user?.id;
    if (uid === null) throw new Error("There are no uid");
    const pages = await getAllPages(uid || "");

    return NextResponse.json({ pages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
