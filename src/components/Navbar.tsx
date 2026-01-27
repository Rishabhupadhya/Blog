import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-cyan-400 hover:text-cyan-300 transition">
          Rishabh Upadhyay
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          <Link href="/#about" className="text-gray-300 hover:text-cyan-400 transition">
            About
          </Link>
          <Link href="/" className="text-gray-300 hover:text-cyan-400 transition">
            Blog
          </Link>
          <Link href="/#projects" className="text-gray-300 hover:text-cyan-400 transition">
            Projects
          </Link>
          <Link href="mailto:rishabh.292002@gmail.com" className="text-gray-300 hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
