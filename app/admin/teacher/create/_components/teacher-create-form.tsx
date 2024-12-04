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
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender.",
  }),
  profession: z.string().min(2, {
    message: "Profession must be at least 2 characters.",
  }),
  phone: z.string().regex(/^(\+998|998)?[0-9]{9}$/, {
    message: "Please enter a valid Uzbek phone number (e.g., +998901234567).",
  }),
});

export default function TeacherCreateForm() {
  const [passwordShow, setPasswordShow] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: undefined,
      profession: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
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
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row  items-center justify-between gap-3 lg:gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2 relative">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type={passwordShow ? "text" : "password"}
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />

                {passwordShow ? (
                  <EyeOff
                    onClick={() => setPasswordShow(false)}
                    className="size-6 text-white absolute top-[45%] right-2 cursor-pointer hover:text-blue-500"
                  />
                ) : (
                  <Eye
                    onClick={() => setPasswordShow(true)}
                    className="size-6 text-white absolute top-[45%] right-2 cursor-pointer hover:text-blue-500"
                  />
                )}
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
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Profession</FormLabel>
                <FormControl>
                  <Input placeholder="Mathematics Teacher" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-6">
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
        <div className="flex justify-end">
          <Button className="bg-[#31A8FF] hover:bg-[#219bf1] rounded-md w-full md:w-auto">
            Create Teacher
          </Button>
        </div>
      </form>
    </Form>
  );
}
