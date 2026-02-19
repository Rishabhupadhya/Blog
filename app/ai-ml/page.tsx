import { getAllAIMLPosts } from "@/lib/getAIML";
import AIMLList from "./AIMLList";

export default function AIMLPage() {
  const posts = getAllAIMLPosts().map((post: any) => ({
    slug: post.slug,
    title: post.title || "Untitled",
    description: post.description || "No description available.",
    date: post.date || "Unknown date"
  }));
  return <AIMLList posts={posts} />;
}

// Revalidate immediately in development to see new posts
export const revalidate = 0;
