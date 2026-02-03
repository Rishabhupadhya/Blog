import { getCloudDevOpsPostBySlug, getRelatedCloudDevOpsPosts, getAllCloudDevOpsPosts } from "@/lib/getCloudDevOps";
import { getHeadings } from "@/lib/getHeadings";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import CodeBlock from "@/components/CodeBlock";
import ReadingProgress from "@/components/ReadingProgress";

export async function generateStaticParams() {
  const posts = getAllCloudDevOpsPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function CloudDevOpsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getCloudDevOpsPostBySlug(slug);
  } catch {
    return notFound();
  }

  const content = post.content;
  const title = (post as any).title || '';
  const date = (post as any).date || '';

  if (!title) return notFound();

  const headings = getHeadings(content);
  const relatedPosts = getRelatedCloudDevOpsPosts(slug);

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-28 bg-gradient-to-b from-black via-black to-cyan-950">
      
      <ReadingProgress />
      
      <TableOfContents headings={headings} />

      
        <article className="max-w-4xl mx-auto w-full overflow-hidden">

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            {title}
          </h1>

          <p className="text-sm text-gray-400 mb-10">
            {date}
          </p>

          <div className="h-[2px] w-24 bg-cyan-400 mb-12" />

          <div
            className="
              prose prose-invert
              prose-sm sm:prose-base
              prose-headings:text-cyan-400
              prose-headings:scroll-mt-20
              prose-a:text-cyan-400
              prose-a:break-words
              prose-strong:text-white
              prose-code:text-cyan-300
              prose-code:break-words
              prose-pre:bg-black/40
              prose-pre:border
              prose-pre:border-white/10
              prose-pre:rounded-xl
              prose-pre:overflow-x-auto
              max-w-none
              break-words
              overflow-wrap-anywhere
            "
          >
            <MDXRemote 
              source={content}
              components={{
                h2: ({ children, ...props }) => {
                  const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                h3: ({ children, ...props }) => {
                  const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
                  return <h3 id={id} {...props}>{children}</h3>;
                },
                pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
              }}
            />
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-32">
              <h2 className="text-2xl font-bold text-cyan-400 mb-8">
                Related Posts
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <a
                    key={relatedPost.slug}
                    href={`/cloud-devops/${relatedPost.slug}`}
                    className="
                      group
                      block
                      p-6
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/40
                      transition-all
                      hover:-translate-y-1
                      hover:border-cyan-400
                      hover:shadow-[0_12px_50px_-15px_rgba(34,211,238,0.45)]
                    "
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                      {'title' in relatedPost ? (relatedPost as any).title : 'Untitled'}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {'date' in relatedPost ? (relatedPost as any).date : ''}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          )}

        </article>
      
    </main>
  );
}
