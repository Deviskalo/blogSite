import { prisma } from "@/lib/prisma";
import { PostCard } from "./post-card";

export async function PostGrid() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: true,
      _count: {
        select: {
          comments: true,
          likes: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}