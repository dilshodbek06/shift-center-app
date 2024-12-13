/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tag, TagInput } from "emblor";
import toast from "react-hot-toast";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";

const BlogCreateForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState<Tag[]>([
    { id: "234234234", text: "Javascript" },
  ]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const handleCreate = async () => {
    if (title === "" || author === "" || value === "" || tags.length === 0) {
      toast.error("Please fill all the fields.");
      return;
    }
    const obj = {
      title,
      content: value,
      author,
      tags,
    };
    try {
      setIsLoading(true);
      await axios.post("/api/blog", obj);
      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Card className=" w-full max-w-3xl mx-auto bg-gray-800 text-white border-gray-700">
        <CardHeader className="md:p-6 p-3">
          <CardTitle className="text-lg">Create New Blog Post</CardTitle>
          <CardDescription className="text-gray-50">
            Fill in the details for your new blog post.
          </CardDescription>
        </CardHeader>
        <div>
          <CardContent className="space-y-4 md:px-6 md:py-3 p-3">
            <div className="space-y-2">
              <Label htmlFor="title">Upload image (Soon)</Label>
              <div className=" pt-2 pb-1">
                <label
                  htmlFor="upload"
                  className=" bg-gray-800 hover:bg-gray-700 text-white text-base px-5 py-3 outline-none rounded w-max  mx-auto font-[sans-serif] border pointer-events-none opacity-50 cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 mr-2 fill-white inline"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                      data-original="#000000"
                    />
                  </svg>
                  Upload
                  <input disabled type="file" id="upload" className="hidden" />
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter the blog post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content *</Label>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author *</Label>
              <Input
                id="author"
                name="author"
                placeholder="Enter the author's name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Tags *</Label>
              <TagInput
                placeholder="Enter a tag"
                tags={tags}
                className="sm:min-w-[450px] bg-transparent"
                setTags={(newTags) => {
                  setTags(newTags);
                }}
                activeTagIndex={activeTagIndex}
                setActiveTagIndex={setActiveTagIndex}
                styleClasses={{
                  inlineTagsContainer: "bg-transparent",
                }}
              />
              <p className="text-gray-400 text-sm">
                Type the tag name end click enter!
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end md:p-6 p-3">
            <Button
              onClick={handleCreate}
              disabled={isLoading}
              className="bg-[#31A8FF] hover:bg-[#219bf1] rounded-md w-full md:w-auto"
            >
              {isLoading ? "Loading..." : "Create Blog"}
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default BlogCreateForm;
