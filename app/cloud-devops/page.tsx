import { getAllCloudDevOpsPosts } from "@/lib/getCloudDevOps";
import CloudDevOpsList from "./CloudDevOpsList";

export default function CloudDevOpsPage() {
  const posts = getAllCloudDevOpsPosts().map((post: any) => ({
    slug: post.slug,
    title: post.title || "Untitled",
    description: post.description || "No description available.",
    date: post.date || "Unknown date"
  }));
  return <CloudDevOpsList posts={posts} />;
}

// Revalidate immediately in development to see new posts
export const revalidate = 0;
