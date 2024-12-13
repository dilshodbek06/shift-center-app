import Image from "next/image";

const BlogDetailPage = () => {
  return (
    <div className="py-5">
      <main>
        <article>
          <header className="mx-auto max-w-screen-xl text-center">
            <p className="text-gray-200">Published April 4, 2022</p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
              7 rules of effective marketing
            </h1>

            <div
              className="mt-6 flex flex-wrap justify-center gap-2"
              aria-label="Tags"
            >
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Marketing
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Branding
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Digital
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Identity
              </button>
            </div>
            <div className="min-h-[400px] mt-8 max-w-[600px] mx-auto relative ">
              <Image
                className=" w-full object-contain"
                src={"/brand.svg"}
                alt="Featured Image"
                fill
              />
            </div>
          </header>

          <div className="text-gray-200 mx-auto max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide">
            <strong className="text-2xl font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              impedit ex consequatur nostrum cupiditate at sequi? Ipsam commodi
              modi officia mollitia doloribus tenetur consectetur quae?
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              enim maxime sit laudantium! Dolore atque, maxime iusto ut quas
              distinctio reiciendis animi voluptatibus soluta molestias,
              mollitia officiis laboriosam illum earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              similique reiciendis et recusandae provident repellendus rem
              doloremque eaque error assumenda?
            </p>
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

export default BlogDetailPage;
