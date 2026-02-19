import { getAllBackendEngineeringPosts } from "@/lib/getBackendEngineering";
import BackendEngineeringList from "./BackendEngineeringList";

export default function BackendEngineeringPage() {
  const posts = getAllBackendEngineeringPosts().map((post: any) => ({
    slug: post.slug,
    title: post.title || "Untitled",
    description: post.description || "No description available.",
    date: post.date || "Unknown date"
  }));
  return <BackendEngineeringList posts={posts} />;
}

// ISR: Revalidate every hour
export const revalidate = 3600;
