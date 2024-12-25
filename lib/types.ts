export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  slug: string;
};