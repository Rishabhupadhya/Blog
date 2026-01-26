import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Rishabh Upadhyay
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          <Link href="/#about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/#projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
