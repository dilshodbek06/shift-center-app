import { Button } from "@/components/ui/button";
import Blog from "./blog";
import Link from "next/link";
import prisma from "@/lib/db";

const BlogsData = async () => {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-end my-3">
          <Link href="/admin/blog/create">
            <Button className="bg-[#31A8FF]  hover:bg-[#219bf1]">
              + Add new
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {blogs.map((blog, ind) => (
            <Blog
              key={ind}
              author={blog.author}
              content={blog.content}
              tags={blog.tags}
              title={blog.title}
              createdAt={blog.createdAt}
              id={blog.id}
              url={`/admin/blog/${blog.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsData;
