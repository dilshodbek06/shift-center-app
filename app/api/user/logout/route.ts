import { logout } from "@/app/actions/auth-actions";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);
    if (!session?.userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    await logout();
    return NextResponse.json({});
  } catch (err) {
    console.error("Error fetching user:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
