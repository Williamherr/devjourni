import { auth } from "@/auth";
import { deletePagesTransaction } from "@/lib/schema/transactions/subpages";
import { isNullOrEmpty } from "@/lib/snippets";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const session = await auth();
    const uid = session?.user?.id || "";
    if (isNullOrEmpty(uid)) throw new Error("There are no uid");
    const { id } = params;
    let newId = await deletePagesTransaction(uid, id);

    if (!newId) throw new Error("Failed to delete page");

    return NextResponse.json({ newId, status: 200 });
  } catch (error) {
    return NextResponse.json({ newId: 0, error, status: 500 }, { status: 500 });
  }
}
