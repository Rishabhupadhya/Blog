import path from "path";
import matter from "gray-matter";

// Only import fs on the server
let fs: typeof import('fs');
if (typeof window === "undefined") {
  fs = require("fs");
}

const BLOGS_PATH = path.join(process.cwd(), "src/content/blogs");

export function getAllBlogs() {
  if (typeof window !== "undefined") {
    throw new Error("getAllBlogs can only be used on the server.");
  }
  const files = fs.readdirSync(BLOGS_PATH);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(BLOGS_PATH, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);

    return {
      slug,
      ...data,
    };
  });
}

export function getBlogBySlug(slug: string) {
  if (typeof window !== "undefined") {
    throw new Error("getBlogBySlug can only be used on the server.");
  }
  const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf8");
  return matter(content);
}
