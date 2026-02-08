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
    <nav className="flex items-center gap-1" aria-label="Pagination">
      {/* Prev */}
      {totalPages > 1 && (
        <PageLink
          page={Math.max(currentPage - 1, 1)}
          className="px-3 py-2 text-eyebrow text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors duration-150"
          ariaLabel="Previous page"
        >
          Prev
        </PageLink>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1 mx-4">
        {pages.map((page) => (
          <PageLink
            key={page}
            page={page}
            className={`w-9 h-9 flex items-center justify-center text-sm font-mono transition-all duration-150 rounded-sm ${page === currentPage
                ? "bg-[#1C1C1C] text-white"
                : "text-[#6B6B6B] hover:bg-[#E8E8E6] hover:text-[#1C1C1C]"
              }`}
            ariaLabel={`Page ${page}`}
          >
            {page}
          </PageLink>
        ))}
      </div>

      {/* Next */}
      {totalPages > 1 && (
        <PageLink
          page={Math.min(currentPage + 1, totalPages)}
          className="px-3 py-2 text-eyebrow text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors duration-150"
          ariaLabel="Next page"
        >
          Next
        </PageLink>
      )}
    </nav>
  );
}
