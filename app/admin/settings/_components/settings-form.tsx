"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import { Gender } from "@prisma/client";
import axios from "axios";

const adminFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type AdminFormValues = z.infer<typeof adminFormSchema>;

type SettingsFormProps = {
  user:
    | {
        name: string;
        email: string;
        password: string;
        id: string;
        profileImage: string | null;
        createdAt: Date;
        updatedAt: Date;
      }
    | {
        email: string;
        password: string;
        id: string;
        profileImage: string | null;
        createdAt: Date;
        updatedAt: Date;
        firstname: string;
        lastname: string;
        gender: Gender;
        profession: string;
        phone: string;
      };
};

const SettingsForm = ({ user }: SettingsFormProps) => {
  const userName =
    "firstname" in user && "lastname" in user
      ? `${user.firstname} ${user.lastname}`
      : user.name;

  const form = useForm<AdminFormValues>({
    resolver: zodResolver(adminFormSchema),
    defaultValues: {
      name: userName,
      email: user.email,
      password: user.password,
    },
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(values: AdminFormValues) {
    try {
      await axios.put(`/api/admin`, {
        ...values,
        adminId: user.id,
      });
      toast.success("Updated success.");
    } catch (error) {
      toast.error("Something went wrong.", error!);
    }
  }

  return (
    <Form {...form}>
      <div className="max-w-3xl">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name that will be displayed on your profile.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This email will be used for login and communications.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormDescription>
                  Use a strong password with at least 8 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              className="bg-[#31A8FF] hover:bg-[#269cf0]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              )}
              Update
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default SettingsForm;
