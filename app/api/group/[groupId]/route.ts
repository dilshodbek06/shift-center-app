import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { groupId: string } }
) {
  try {
    const { groupName } = await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedGroup = await prisma.group.update({
      where: {
        id: params.groupId,
      },
      data: {
        name: groupName,
      },
    });

    return NextResponse.json(updatedGroup);
  } catch (error) {
    console.log("[GROUP_NAME_UPDATE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
