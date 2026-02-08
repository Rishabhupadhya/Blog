import { getAIMLPostBySlug, getRelatedAIMLPosts, getAllAIMLPosts } from "@/lib/getAIML";
import { getHeadings } from "@/lib/getHeadings";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import CodeBlock from "@/components/CodeBlock";
import ReadingProgress from "@/components/ReadingProgress";
import AIAssistant from "@/components/AIAssistant";
import SelectionAssistant from "@/components/SelectionAssistant";
import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SharePerspective from "@/components/SharePerspective";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getAIMLPostBySlug(slug);

    if (!post) {
      return { title: 'Post Not Found' };
    }

    return {
      title: `${post.title || 'AI/ML Post'} | AI & ML`,
      description: post.description || '',
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

export async function generateStaticParams() {
  try {
    const posts = getAllAIMLPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

export default async function AIMLDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getAIMLPostBySlug(slug);
  } catch {
    return notFound();
  }

  const content = post?.content || '';
  const title = post?.title || '';
  const date = post?.date || '';

  if (!title || !content) {
    return notFound();
  }

  const headings = getHeadings(content);
  const relatedPosts = getRelatedAIMLPosts(slug);

  return (
    <main className="min-h-screen bg-[#FAFAF9] relative">
      <ReadingProgress />

      {/* Ambient background for depth */}
      <div className="absolute top-0 left-0 w-full h-[1000px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F1F1EF] blur-[120px] rounded-full opacity-60" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-[#F5F5F3] blur-[100px] rounded-full opacity-40" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6">
        <div className="pt-48 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">

          <article className="max-w-[720px] w-full">
            <FadeIn y={24}>
              <header className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-eyebrow text-[#1C1C1C] border border-[#E8E8E6] px-2 py-1 rounded-sm">
                    Intelligence
                  </span>
                  <div className="h-px w-8 bg-[#E8E8E6]" />
                  <time className="text-meta text-[#9A9A9A]">{date}</time>
                </div>

                <h1 className="text-EDITORIAL-TITLE font-bold text-[#1C1C1C] mb-10 leading-[1.05] tracking-tight text-5xl md:text-6xl lg:text-7xl">
                  {title}
                </h1>

                <div className="flex items-center gap-4 text-meta text-[#6B6B6B]">
                  <div className="w-10 h-10 rounded-full bg-[#E8E8E6] flex items-center justify-center text-xs font-bold text-[#1C1C1C]">RU</div>
                  <div>
                    <span className="block font-bold text-[#1C1C1C]">Rishabh Upadhyay</span>
                    <span className="opacity-60">Software Engineer & Designer</span>
                  </div>
                </div>
              </header>

              <div className="h-px w-full bg-gradient-to-r from-[#E8E8E6] via-[#E8E8E6] to-transparent mb-20" />

              <div
                className="
                  prose
                  prose-neutral
                  max-w-none
                  text-[#1C1C1C]
                  prose-headings:text-[#1C1C1C]
                  prose-headings:font-bold
                  prose-headings:tracking-tight
                  prose-p:text-[17px]
                  prose-p:leading-[1.8]
                  prose-p:mb-8
                  prose-a:text-[#1C1C1C]
                  prose-a:underline
                  prose-a:underline-offset-4
                  prose-strong:text-[#1C1C1C]
                  prose-code:text-[#1C1C1C]
                  prose-code:bg-[#F1F1EF]
                  prose-code:px-1.5
                  prose-code:py-0.5
                  prose-code:rounded
                  prose-code:font-mono
                  prose-code:text-[14px]
                  prose-ul:list-disc
                  prose-ol:list-decimal
                  prose-li:text-[17px]
                  prose-li:leading-[1.8]
                  prose-blockquote:border-l-[3px]
                  prose-blockquote:border-[#1C1C1C]
                  prose-blockquote:pl-6
                  prose-blockquote:italic
                  prose-blockquote:text-[20px]
                  prose-blockquote:text-[#404040]
                  prose-img:rounded-sm
                  prose-hr:border-[#E8E8E6]
                "
              >
                <MDXRemote
                  source={content}
                  components={{
                    h2: ({ children, ...props }) => {
                      const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
                      return <h2 id={id} className="text-3xl mt-24 mb-10 pb-4 border-b border-[#F1F1EF]" {...props}>{children}</h2>;
                    },
                    h3: ({ children, ...props }) => {
                      const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
                      return <h3 id={id} className="text-2xl mt-16 mb-6" {...props}>{children}</h3>;
                    },
                    pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
                  }}
                />
              </div>
            </FadeIn>

            {relatedPosts.length > 0 && (
              <section className="mt-48 border-t border-[#E8E8E6] pt-24">
                <span className="text-eyebrow text-[#9A9A9A] mb-12 block">Continue Reading</span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {relatedPosts.map((post, index) => (
                    <FadeIn key={post.slug} delay={index * 0.1}>
                      <Link
                        href={`/ai-ml/${post.slug}`}
                        className="group block"
                      >
                        <time className="text-meta text-[#9A9A9A] mb-3 block">{(post as any).date}</time>
                        <h3 className="text-2xl font-bold text-[#1C1C1C] group-hover:text-[#404040] transition-colors duration-200 leading-tight">
                          {(post as any).title}
                        </h3>
                        <p className="mt-4 text-[#6B6B6B] line-clamp-2 text-sm leading-relaxed">
                          {(post as any).description}
                        </p>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="hidden lg:block relative">
            <div className="sticky top-28 h-[calc(100vh-140px)] flex flex-col justify-between py-4">
              <div className="overflow-y-auto scrollbar-subtle pr-2">
                <TableOfContents headings={headings} />
              </div>

              <SharePerspective title={title} />
            </div>
          </aside>
        </div>
      </div>

      <AIAssistant articleContent={content} />
      <SelectionAssistant articleContent={content} />
    </main>
  );
}
