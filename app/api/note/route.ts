import { NextResponse } from "next/server";
import { isNullOrEmpty } from "@/lib/snippets";
import { createNotes, getAllNotes } from "@/lib/schema/notes";
import { getUidByRole } from "@/lib/utils/session";

// Create a new page
export async function POST(request: Request) {
  try {
    const uid = await getUidByRole();

    const { doc, pageName }: { doc: JSON | null; pageName: string } =
      await request.json();

    const id = await createNotes(
      uid,
      !isNullOrEmpty(pageName) ? pageName : "Notes",
      doc
    );
    return NextResponse.json({ id: id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET() {
  try {
    await getUidByRole();
    const notes = await getAllNotes();

    return NextResponse.json({ notes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
