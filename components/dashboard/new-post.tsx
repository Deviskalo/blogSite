"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Editor } from "@/components/editor/editor";
import { createPost } from "@/lib/actions/post";
import { PostSchema, type PostInput } from "@/lib/validations/post";

export function NewPost() {
  const router = useRouter();
  const [content, setContent] = useState("");

  const form = useForm<PostInput>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      content: "",
      published: false,
    },
  });

  const onSubmit = async (data: PostInput) => {
    try {
      await createPost({ ...data, content });
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Post title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="space-y-2">
          <FormLabel>Content</FormLabel>
          <Editor content={content} onChange={setContent} />
        </div>

        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Publish immediately</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Post</Button>
      </form>
    </Form>
  );
}