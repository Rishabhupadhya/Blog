"use client";

import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface BlogHeaderProps {
  onSearch: (query: string) => void;
}

export default function BlogHeader({ onSearch }: BlogHeaderProps) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // 300ms delay before hiding
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <a href="/" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition cursor-pointer">
            Techies Journal
          </a>
        </div>

        {/* CENTER: NAV WITH DROPDOWN */}
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

          {/* Categories Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-300 hover:text-cyan-400 transition flex items-center gap-1">
              Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showDropdown && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href="/technology"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  Technology
                </a>
                <a 
                  href="/system-design"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  System Design
                </a>
                <a 
                  href="/backend-engineering"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  Backend Engineering
                </a>
                <a 
                  href="/cloud-devops"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  Cloud & DevOps
                </a>
                <a 
                  href="/ai-ml"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  AI & ML
                </a>
              </div>
            )}
          </div>
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
