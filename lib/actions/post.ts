"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { PostInput } from "@/lib/validations/post";

export async function fetchUserPosts() {
  const session = await getServerSession();
  if (!session?.user?.email) return [];

  const posts = await prisma.post.findMany({
    where: {
      author: {
        email: session.user.email
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return posts;
}

export async function createPost(input: PostInput) {
  const session = await getServerSession();
  if (!session?.user?.email) throw new Error("Unauthorized");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  });
  if (!user) throw new Error("User not found");

  const slug = input.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const post = await prisma.post.create({
    data: {
      title: input.title,
      content: input.content,
      published: input.published,
      slug,
      authorId: user.id
    }
  });

  revalidatePath("/dashboard");
  revalidatePath("/");
  return post;
}

export async function deletePost(id: string) {
  const session = await getServerSession();
  if (!session?.user?.email) throw new Error("Unauthorized");

  const post = await prisma.post.delete({
    where: { id }
  });

  revalidatePath("/dashboard");
  revalidatePath("/");
  return post;
}