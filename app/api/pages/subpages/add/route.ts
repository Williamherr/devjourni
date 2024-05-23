import { auth } from "@/auth";
import { createSubpagesTransaction } from "@/lib/schema/transactions/subpages";
import { isNullOrEmpty } from "@/lib/snippets";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await auth();
    const uid = session?.user?.id || "";
    if (isNullOrEmpty(uid)) throw new Error("There are no uid");

    const { id }: { id: number } = await request.json();

    let newId = await createSubpagesTransaction(uid, id);

    return NextResponse.json({ newId, status: 200 });
  } catch (error) {
    return NextResponse.json({ newId: 0, error }, { status: 500 });
  }
}
