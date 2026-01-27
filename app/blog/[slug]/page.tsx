import { getBlogBySlug } from "@/lib/getBlogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

/* ===============================
   Reading Progress Bar (Client)
================================ */
function ReadingProgress() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            const bar = document.getElementById("reading-progress");
            if (!bar) return;

            function update() {
              const scrollTop = window.scrollY;
              const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
              const progress = (scrollTop / docHeight) * 100;
              bar.style.width = progress + "%";
            }

            window.addEventListener("scroll", update);
            update();
          })();
        `,
      }}
    />
  );
}

/* ===============================
   Blog Detail Page
================================ */
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let blog;
  try {
    blog = getBlogBySlug(slug);
  } catch {
    return notFound();
  }

  const { content, data } = blog;
  if (!data?.title) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#020617] to-black">

      {/* ===== Reading Progress Bar ===== */}
      <div
        id="reading-progress"
        className="fixed top-0 left-0 h-[3px] bg-cyan-400 z-50 transition-all"
        style={{ width: "0%" }}
      />
      <ReadingProgress />

      {/* ===== Content Wrapper ===== */}
      <article className="max-w-4xl mx-auto px-6 py-28">

        {/* ===== Back Link ===== */}
        <a
          href="/blog"
          className="inline-block mb-8 text-sm text-gray-400 hover:text-cyan-400 transition"
        >
          ← Back to Blog
        </a>

        {/* ===== Title ===== */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 leading-tight">
          {data.title}
        </h1>

        {/* ===== Meta ===== */}
        <p className="text-sm text-gray-400 mb-10">
          {data.date}
          {data.readingTime && ` · ${data.readingTime}`}
        </p>

        {/* ===== Divider ===== */}
        <div className="h-[2px] w-24 bg-cyan-400 mb-14" />

        {/* ===== Blog Content ===== */}
        <div
          className="
            prose prose-invert
            prose-headings:text-cyan-400
            prose-h2:mt-14
            prose-h3:mt-10
            prose-p:text-gray-300
            prose-a:text-cyan-400
            prose-strong:text-white
            prose-code:text-cyan-300
            prose-code:bg-black/40
            prose-code:px-1.5
            prose-code:py-0.5
            prose-code:rounded
            prose-pre:bg-black/40
            prose-pre:border
            prose-pre:border-white/10
            prose-pre:rounded-lg
            prose-pre:p-4
            max-w-none
          "
        >
          <MDXRemote source={content} />
        </div>

        {/* ===== Footer CTA ===== */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-4">
            Thanks for reading ✨
          </p>
          <a
            href="/blog"
            className="text-cyan-400 hover:underline"
          >
            Read more articles →
          </a>
        </div>

      </article>
    </main>
  );
}
