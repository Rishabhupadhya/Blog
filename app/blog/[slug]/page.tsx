import { getBlogBySlug } from "@/lib/getBlogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let blog;
  try {
    blog = getBlogBySlug(slug);
  } catch (e) {
    return notFound();
  }
  const { content, data } = blog;
  if (!data?.title) return notFound();
  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
      <p className="text-lg leading-relaxed text-gray-700">{data.date}</p>
      <MDXRemote source={content} />
    </article>
  );
}
