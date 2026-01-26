export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rishabh Upadhyay · Built with Next.js
      </div>
    </footer>
  );
}
