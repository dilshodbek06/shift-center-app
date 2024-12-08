"use server";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db";

export async function loginAdmin(formData: {
  email: string;
  password: string;
}) {
  const { email, password } = formData;

  const admin = await prisma.admin.findUnique({
    where: {
      email,
    },
  });

  if (!admin) {
    // throw new Error("Invalid email or password.");
    return {
      error: true,
      status: 404,
    };
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    // throw new Error("Invalid password.");
    return {
      error: true,
      status: 403,
    };
  }

  await createSession(admin.id, "ADMIN");

  redirect("/admin");
}

export async function loginTeacher(formData: {
  email: string;
  password: string;
}) {
  const { email, password } = formData;

  const teacher = await prisma.teacher.findUnique({
    where: {
      email,
    },
  });

  if (!teacher) {
    // throw new Error("Invalid email or password.");
    return {
      error: true,
      status: 404,
    };
  }

  const isPasswordValid = await bcrypt.compare(password, teacher.password);
  if (!isPasswordValid) {
    // throw new Error("Invalid password.");
    return {
      error: true,
      status: 403,
    };
  }

  await createSession(teacher.id, "TEACHER");

  redirect("/admin");
}

export async function generateAdmin() {
  const hashedPassword = await bcrypt.hash("adminroot123", 10);
  await prisma.admin.create({
    data: {
      name: "Adminbek",
      email: "admin123@gmail.com",
      password: hashedPassword,
    },
  });
}

export async function logout() {
  await deleteSession();
  redirect("/sign-in");
}
