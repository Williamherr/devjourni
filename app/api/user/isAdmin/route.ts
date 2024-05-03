import { getUidByRoleClient } from "@/lib/utils/session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const isAdmin = await getUidByRoleClient();

    return NextResponse.json({ isAdmin }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
