import { getAllSystemDesignPosts } from "@/lib/getSystemDesign";
import SystemDesignList from "./SystemDesignList";

export default function SystemDesignPage() {
  const posts = getAllSystemDesignPosts().map((post: any) => ({
    slug: post.slug,
    title: post.title || "Untitled",
    description: post.description || "No description available.",
    date: post.date || "Unknown date"
  }));
  return <SystemDesignList posts={posts} />;
}

// ISR: Revalidate every hour
export const revalidate = 3600;
