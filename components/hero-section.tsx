import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="py-20 text-center space-y-6">
      <h1 className="text-4xl font-bold sm:text-6xl">
        Welcome to ModernBlog
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Discover insightful articles, share your thoughts, and join our community of writers and readers.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/posts">
          <Button size="lg">
            Start Reading
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}