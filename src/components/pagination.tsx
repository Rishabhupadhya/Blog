import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (page: number) => (e: React.MouseEvent) => {
    if (onPageChange) {
      e.preventDefault();
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const PageLink = ({ page, children, className, ariaLabel }: any) => {
    if (onPageChange) {
      return (
        <button
          onClick={handleClick(page)}
          className={className}
          aria-label={ariaLabel}
        >
          {children}
        </button>
      );
    } else {
      return (
        <Link href={`/blog?page=${page}`} className={className} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }
  };

  return (
    <nav className="flex items-center gap-2">
      {/* First and Prev - only show if multiple pages */}
      {totalPages > 1 && (
        <>
          <PageLink
            page={1}
            className="px-4 py-2 border border-gray-700 rounded-md text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            ariaLabel="First page"
          >
            ««
          </PageLink>

          <PageLink
            page={Math.max(currentPage - 1, 1)}
            className="px-4 py-2 border border-gray-700 rounded-md text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            ariaLabel="Previous page"
          >
            «
          </PageLink>
        </>
      )}

      {/* Page Numbers - Always show */}
      {pages.map((page) => (
        <PageLink
          key={page}
          page={page}
          className={`px-4 py-2 border rounded-md transition ${
            page === currentPage
              ? "bg-cyan-400 text-black font-bold border-cyan-400"
              : "border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-400"
          }`}
          ariaLabel={`Page ${page}`}
        >
          {page}
        </PageLink>
      ))}

      {/* Next and Last - only show if multiple pages */}
      {totalPages > 1 && (
        <>
          <PageLink
            page={Math.min(currentPage + 1, totalPages)}
            className="px-4 py-2 border border-gray-700 rounded-md text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            ariaLabel="Next page"
          >
            »
          </PageLink>

          <PageLink
            page={totalPages}
            className="px-4 py-2 border border-gray-700 rounded-md text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
            ariaLabel="Last page"
          >
            »»
          </PageLink>
        </>
      )}
    </nav>
  );
}
