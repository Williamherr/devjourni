import { NextResponse } from "next/server";
import { createPages, getAllPages } from "@/lib/schema/pages";
import { auth } from "@/auth";
import { isNullOrEmpty } from "@/lib/snippets";

// Create a new page
export async function POST(request: Request) {
  try {
    const session = await auth();
    const uid = session?.user?.id || "";
    if (isNullOrEmpty(uid)) throw new Error("There are no uid");

    const { doc, pageName }: { doc: JSON; pageName: string } =
      await request.json();

    const id = await createPages(
      uid,
      !isNullOrEmpty(pageName) ? pageName : "Untitled",
      doc
    );

    return NextResponse.json({ id }, { status: 200 });
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
