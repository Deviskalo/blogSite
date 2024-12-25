"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";
import { Post } from "@/lib/types";
import { fetchUserPosts, deletePost } from "@/lib/actions/post";

export function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchUserPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  const handleDelete = async (id: string) => {
    await deletePost(id);
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>
                {post.published ? (
                  <span className="text-green-600">Published</span>
                ) : (
                  <span className="text-yellow-600">Draft</span>
                )}
              </TableCell>
              <TableCell>{format(post.createdAt, "MMM d, yyyy")}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(post.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}