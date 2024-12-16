import { formatDateShort } from "@/helpers/date-format";
import prisma from "@/lib/db";
import Image from "next/image";
import { redirect } from "next/navigation";

const BlogIdPage = async ({ params }: { params: { blogId: string } }) => {
  const currentBlog = await prisma.blog.findUnique({
    where: {
      id: params.blogId,
    },
  });
  if (!currentBlog) {
    return redirect("/");
  }

  return (
    <div className="py-5 px-3">
      <main>
        <article>
          <header className="mx-auto max-w-screen-xl text-center">
            <p className="text-gray-200">
              Published {formatDateShort(currentBlog.createdAt)}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
              {currentBlog.title}
            </h1>

            <div
              className="mt-6 flex flex-wrap justify-center gap-2"
              aria-label="Tags"
            >
              {currentBlog.tags.map((tag, ind) => (
                <div
                  key={ind}
                  className="text-gray-100 font-mono  px-2 py-0.5 rounded border border-[#31A8FF] hover:opacity-55"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="min-h-[300px] max-w-[600px] mx-auto relative ">
              <Image
                className=" w-full object-contain"
                src={"/brand.svg"}
                alt="Featured Image"
                fill
              />
            </div>
          </header>

          <div className="text-gray-200 mx-auto max-w-screen-md space-y-12 px-2 py-4 font-serif text-lg tracking-wide">
            <div
              className="text-xl font-medium break-words"
              dangerouslySetInnerHTML={{ __html: currentBlog.content }}
            ></div>
          </div>
        </article>
      </main>

      <div className="w-fit mx-auto my-5 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600"></div>
        <div className="h-0.5 w-32 bg-gray-600"></div>
        <div className="h-0.5 w-2 bg-gray-600"></div>
      </div>
    </div>
  );
};

export default BlogIdPage;
