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

// ISR: Revalidate every hour
export const revalidate = 3600;
