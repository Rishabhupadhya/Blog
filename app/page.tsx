import { getAllBlogs } from "@/lib/getBlogs";
import BlogList from "./BlogList";

export default function Page() {
  const blogs = getAllBlogs().map((blog: any) => ({
    slug: blog.slug,
    title: blog.title || "Untitled",
    description: blog.description || "No description available.",
    date: blog.date || "Unknown date"
  }));
  return <BlogList blogs={blogs} />;
}
