import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, content, tags, author } = await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newBlog = await prisma.blog.create({
      data: {
        author,
        content,
        title,
        tags: tags.map((tag: { id: string; text: string }) => tag.text),
      },
    });

    return NextResponse.json(newBlog);
  } catch (error) {
    console.log("[CREATE_BLOG]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
