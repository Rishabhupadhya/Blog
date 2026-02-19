import { getAllBlogs } from "@/lib/getBlogs";
import TechnologyList from "./TechnologyList";

export default function TechnologyPage() {
  const posts = getAllBlogs().map((post: any) => ({
    slug: post.slug,
    title: post.title || "Untitled",
    description: post.description || "No description available.",
    date: post.date || "Unknown date"
  }));
  return <TechnologyList posts={posts} />;
}

// Revalidate immediately in development to see new posts
export const revalidate = 0;
