import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_PATH = path.join(process.cwd(), "src/content/blogs");

export function getAllBlogs() {
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
  const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf8");
  return matter(content);
}
