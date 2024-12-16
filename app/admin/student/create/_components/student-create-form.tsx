"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Full name must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  gender: z.enum(["Male", "Female"], {
    required_error: "Please select a gender.",
  }),
  profileImage: z.string().min(2, {
    message: "Profile image url required.",
  }),
  parentsTelegramId: z.string().min(3, {
    message: "Parent telegram ID required.",
  }),
  phone: z.string().regex(/^(\+998|998)?[0-9]{9}$/, {
    message: "Please enter a valid Uzbek phone number (e.g., +998901234567).",
  }),
});

export default function StudentCreateForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      profileImage: "/avatar.svg",
      gender: undefined,
      parentsTelegramId: "",
    },
  });
  const selectedGender: "Male" | "Female" = form.watch("gender");
  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post("/api/student", {
        ...values,
        profileImage:
          selectedGender === "Male" ? "/avatar.svg" : "/avatar2.svg",
      });
      toast.success("Created success.");
      router.push("/admin/student");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong.", error!);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Alexandro" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="any@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row  items-center justify-between gap-3 lg:gap-6">
          <FormField
            control={form.control}
            name="parentsTelegramId"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Parent Telegram ID</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="21312432" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full md:w-[49%]">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+998991234567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-6">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Profile image</FormLabel>
                <FormControl>
                  <Input
                    disabled
                    placeholder="/avatar.svg   (default image)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-6"></div>
        <div className="flex justify-end">
          <Button
            disabled={isSubmitting}
            className="bg-[#31A8FF] hover:bg-[#219bf1] rounded-md w-full md:w-auto"
          >
            {isSubmitting ? "Loading..." : "Create Student"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
