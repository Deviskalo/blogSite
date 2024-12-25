"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostsList } from "./posts-list";
import { NewPost } from "./new-post";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="posts" className="space-y-6">
      <TabsList>
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="new">New Post</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="space-y-4">
        <PostsList />
      </TabsContent>
      <TabsContent value="new">
        <NewPost />
      </TabsContent>
    </Tabs>
  );
}