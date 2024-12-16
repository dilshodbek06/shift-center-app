import Blog from "@/app/admin/blog/_components/blog";
import prisma from "@/lib/db";

const Blogs = async () => {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="mt-2 md:mt-10 relative py-6 pb-[20px]">
      <div className="absolute w-[350px] h-[350px] left-div -bottom-1 left-[-400px] rounded-full "></div>
      <div className="container max-w-6xl mx-auto px-2 md:px-3">
        <h1 className="text-white font-bold text-2xl md:text-4xl">
          Yangiliklar va maqolalar
        </h1>
        <div className="mt-6 md:mt-12 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {blogs.map((blog, ind) => (
            <Blog
              key={ind}
              author={blog.author}
              content={blog.content}
              tags={blog.tags}
              title={blog.title}
              createdAt={blog.createdAt}
              id={blog.id}
              url={`/blog/${blog.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
