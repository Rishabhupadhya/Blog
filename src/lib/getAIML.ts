import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";

export function getAllAIMLPosts(): Post[] {
  if (typeof window !== "undefined") {
    throw new Error("getAllAIMLPosts can only be run on the server");
  }
  const postsDir = path.join(process.cwd(), "src/content/ai-ml");
  if (!fs.existsSync(postsDir)) {
    return [];
  }
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(postsDir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    return {
      slug,
      ...data,
      content,
    };
  });
  // Sort by date (newest first)
  return posts.sort((a: any, b: any) => {
    const dateA = new Date(a.date || '1970-01-01');
    const dateB = new Date(b.date || '1970-01-01');
    return dateB.getTime() - dateA.getTime();
  });
}

export function getAIMLPostBySlug(slug: string): Post {
  if (typeof window !== "undefined") {
    throw new Error("getAIMLPostBySlug can only be run on the server");
  }
  const filePath = path.join(process.cwd(), "src/content/ai-ml", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) throw new Error("Post not found");
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    ...data,
    content,
  };
}

export function getRelatedAIMLPosts(currentSlug: string, limit = 3) {
  return getAllAIMLPosts()
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}
