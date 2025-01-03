import * as z from "zod";

export const PostSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  content: z.string(),
  published: z.boolean().default(false),
});

export type PostInput = z.infer<typeof PostSchema>;