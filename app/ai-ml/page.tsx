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

// ISR: Revalidate every hour
export const revalidate = 3600;
