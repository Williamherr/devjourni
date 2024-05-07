import { NextResponse } from "next/server";
import { deleteDoc, getAllNotes, updateDoc } from "@/lib/schema/notes";
import { getUidByRole } from "@/lib/utils/session";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id: pageId } = params;

  try {
    const notes = await getAllNotes();

    return NextResponse.json({ notes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const uid = await getUidByRole();
  const { id: pageId } = params;
  const { doc } = await request.json();
  try {
    if (doc === null) throw new Error("There are no uid");
    updateDoc(uid, pageId, doc);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: number } }
// ) {
//   const uid = await getUidByRole();

//   const { id: pageId } = params;
//   const { deltedPageId } = await request.json();

//   try {
//     if (isNullOrEmpty(uid)) throw new Error("There are no uid");
//     if (isNullOrEmpty(deltedPageId)) throw new Error("There are no pageId");

//     await deleteDoc(uid, deltedPageId);

//     if (pageId == deltedPageId) {
//       const recentId = await getRecentPage(uid);
//       return NextResponse.json({ recentId }, { status: 200 });
//     }
//     return NextResponse.json({ recentId: 0 }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
