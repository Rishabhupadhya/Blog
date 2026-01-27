import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

// Export blog utility functions only
export function getAllBlogs() {
  // Only run on the server
  if (typeof window !== "undefined") {
    throw new Error("getAllBlogs can only be run on the server");
  }
  const blogsDir = path.join(process.cwd(), "src/content/blogs");
  const files = fs.readdirSync(blogsDir).filter((file) => file.endsWith(".mdx"));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(blogsDir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    return {
      slug,
      ...data,
      content,
    };
  });
}

export function getBlogBySlug(slug: string) {
  // Only run on the server
  if (typeof window !== "undefined") {
    throw new Error("getBlogBySlug can only be run on the server");
  }
  const filePath = path.join(process.cwd(), "src/content/blogs", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) throw new Error("Blog not found");
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    ...data,
    content,
  };
}

/* ================================
   Related Blogs Helper
================================ */
function getRelatedBlogs(currentSlug: string, limit = 3) {
  return getAllBlogs()
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, limit);
}
