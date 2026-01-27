"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface BlogHeaderProps {
  onSearch: (query: string) => void;
}

export default function BlogHeader({ onSearch }: BlogHeaderProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <a href="/" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition cursor-pointer">
            Rishabh Blogs
          </a>
        </div>

        {/* CENTER: NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="https://rishabhupadhyay.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            About Me
          </a>

          <span className="text-gray-500">|</span>

          <span className="text-gray-400">
            Tech • System Design • Backend
          </span>
        </nav>

        {/* RIGHT: SEARCH */}
        <div className="relative w-64">
          <FaSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={14}
          />
          <input
            type="text"
            placeholder="Search blogs..."
            value={query}
            onChange={handleChange}
            className="
              w-full
              bg-transparent
              border-b border-gray-600
              pl-9 pr-3 py-1.5
              text-sm text-gray-200
              placeholder-gray-500
              focus:outline-none
              focus:border-cyan-400
              transition
            "
          />
        </div>
      </div>
    </header>
  );
}
