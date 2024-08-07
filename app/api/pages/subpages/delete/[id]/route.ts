import { auth } from "@/auth";
import { deletePagesTransaction } from "@/lib/schema/transactions/subpages";
import { isNullOrEmpty } from "@/lib/snippets";
import { hasAdminAccess } from "@/lib/utils/access";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const session = await auth();
    const uid = session?.user?.id || "";
    const { id } = params;
    if (isNullOrEmpty(uid)) throw new Error("There are no uid");
    let hasAccess = await hasAdminAccess(uid, id);
    if (!hasAccess)
      throw new Error("You are not authorized to delete this page");

    let newId = await deletePagesTransaction(uid, id);
    if (!newId) throw new Error("Failed to delete page");

    return NextResponse.json({ newId, status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { newId: 0, error: error.message, status: 500 },
      { status: 500 }
    );
  }
}
