import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { updatePageName } from "@/lib/schema/pages";
import { isNullOrEmpty } from "@/lib/snippets";

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const session = await auth();
  const uid = session?.user?.id ?? "";
  const { id: pageId } = params;
  const { rename } = await request.json();
  try {
    if (isNullOrEmpty(uid) || rename === null)
      throw new Error("There are no uid");
    updatePageName(uid, pageId, rename);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
