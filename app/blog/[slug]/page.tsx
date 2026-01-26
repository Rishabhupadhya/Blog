import { getBlogBySlug } from "@/lib/getBlogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
    <main className="min-h-screen px-6 py-28">
      <article className="max-w-4xl mx-auto">

        {/* ===== TITLE ===== */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
          {data.title}
        </h1>

        {/* ===== META ===== */}
        <p className="text-sm text-gray-400 mb-10">
          {data.date}
        </p>

        {/* ===== DIVIDER ===== */}
        <div className="h-[2px] w-24 bg-cyan-400 mb-12" />

        {/* ===== CONTENT ===== */}
        <div
          className="
            prose prose-invert
            prose-headings:text-cyan-400
            prose-a:text-cyan-400
            prose-strong:text-white
            prose-code:text-cyan-300
            prose-pre:bg-black/40
            prose-pre:border prose-pre:border-white/10
            max-w-none
          "
        >
          <MDXRemote source={content} />
        </div>

      </article>
    </main>
  );
}
