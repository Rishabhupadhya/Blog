export default function Loading() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-28 bg-gradient-to-b from-black via-black to-cyan-950">
      <article className="max-w-4xl mx-auto w-full overflow-hidden">
        {/* Title Skeleton */}
        <div className="h-12 w-3/4 bg-white/10 rounded-lg animate-pulse mb-4" />
        
        {/* Date Skeleton */}
        <div className="h-4 w-32 bg-white/10 rounded animate-pulse mb-10" />
        
        {/* Divider */}
        <div className="h-[2px] w-24 bg-cyan-400/30 mb-12" />
        
        {/* Content Skeletons */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-4/6 bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
        </div>
      </article>
    </main>
  );
}
