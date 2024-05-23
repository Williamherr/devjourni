import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getRecentPage } from "@/lib/schema/pages";

export async function GET(request: Request) {
  const session = await auth();
  const uid = session?.user?.id ?? "";
  try {
    const recentId = await getRecentPage(uid);
    return NextResponse.json({ recentId }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
