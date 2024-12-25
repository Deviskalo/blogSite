import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Heart } from "lucide-react";

type PostCardProps = {
  post: {
    slug: string;
    title: string;
    content: string;
    createdAt: Date;
    author: {
      name?: string | null;
      image?: string | null;
    };
    _count: {
      comments: number;
      likes: number;
    };
  };
};

export function PostCard({ post }: PostCardProps) {
  const excerpt = post.content.slice(0, 150) + "...";

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.author.image ?? ""} />
            <AvatarFallback>{post.author.name?.[0] ?? "U"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {format(post.createdAt, "MMM d, yyyy")}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <Link href={`/posts/${post.slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-4 text-muted-foreground">
          <span className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            {post._count.comments}
          </span>
          <span className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            {post._count.likes}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}