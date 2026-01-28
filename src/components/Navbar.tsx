"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-cyan-400 hover:text-cyan-300 transition">
          Techies Journal
        </Link>

        <div className="flex gap-8 text-sm font-medium items-center">
          <a
            href="https://rishabhupadhyay.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            About Me
          </a>
          
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
                className="absolute top-full right-0 mt-2 w-56 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href="/technology"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  Technology
                </Link>
                <Link 
                  href="/system-design"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  System Design
                </Link>
                <Link 
                  href="/backend-engineering"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  Backend Engineering
                </Link>
                <Link 
                  href="/cloud-devops"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  Cloud & DevOps
                </Link>
                <Link 
                  href="/ai-ml"
                  className="block px-4 py-3 text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400 transition"
                >
                  AI & ML
                </Link>
              </div>
            )}
          </div>

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
