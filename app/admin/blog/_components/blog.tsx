/* eslint-disable @next/next/no-img-element */
"use client";

import { formatDateShort } from "@/helpers/date-format";
import Link from "next/link";

interface BlogProps {
  title: string;
  content: string;
  author: string;
  tags: string[];
  createdAt: Date;
  id: string;
  url: string;
}

const Blog = ({ author, content, createdAt, tags, title, url }: BlogProps) => {
  return (
    <div className="group cursor-pointer w-full  border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-[#31A8FF]">
      <div className="flex items-center mb-6">
        <img
          src="https://pagedone.io/asset/uploads/1696244553.png"
          alt="Harsh image"
          className="rounded-lg w-full object-cover"
        />
      </div>
      <div className="block">
        <Link href={url} className="hover:underline hover:text-[#219bf1]">
          <h4 className="text-white hover:text-[#219bf1] font-medium leading-8 line-clamp-1 text-lg">
            {title}
          </h4>
        </Link>

        <div
          className="text-gray-200 line-clamp-2 mb-1"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className=" mb-5 flex items-center gap-x-1 ">
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="text-gray-100 text-[10px] font-mono  px-2 py-0.5 rounded border border-[#31A8FF] hover:opacity-55"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between font-medium">
          <h6 className="text-sm text-gray-300">By {author}</h6>
          <span className="text-sm text-[#31A8FF]">
            {" "}
            {formatDateShort(createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
