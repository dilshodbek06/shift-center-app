"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Tag, TagInput } from "emblor";

const FormSchema = z.object({
  topics: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
});

const TagsInput = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [tags, setTags] = React.useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(
    null
  );

  const { setValue } = form;

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="topics"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="text-left">Topics</FormLabel>
                <FormControl className="w-full">
                  <TagInput
                    {...field}
                    placeholder="Enter a topic"
                    tags={tags}
                    className="sm:min-w-[450px]"
                    setTags={(newTags) => {
                      setTags(newTags);
                      setValue("topics", newTags as [Tag, ...Tag[]]);
                    }}
                    activeTagIndex={activeTagIndex}
                    setActiveTagIndex={setActiveTagIndex}
                  />
                </FormControl>
                <FormDescription className="text-left">
                  These are the topics that you&apos;re interested in.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default TagsInput;
