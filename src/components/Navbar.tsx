"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 150);
  };

  const navLinks = [
    { name: "About", href: "https://rishabhupadhyay.vercel.app/" },
    { name: "Contact", href: "mailto:rishabh.292002@gmail.com" },
  ];

  const categories = [
    { name: "Technology", href: "/technology" },
    { name: "System Design", href: "/system-design" },
    { name: "Backend Engineering", href: "/backend-engineering" },
    { name: "Cloud & DevOps", href: "/cloud-devops" },
    { name: "AI & ML", href: "/ai-ml" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAFAF9]/95 backdrop-blur-sm border-b border-[#E8E8E6]">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          prefetch={true} 
          className="text-base font-bold tracking-tight text-[#1C1C1C] hover:text-[#6B6B6B] transition-colors duration-200"
        >
          Techies Journal
        </Link>

        <div className="flex gap-8 items-center">
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="text-sm font-medium text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors duration-200 flex items-center gap-1.5 py-2"
            >
              Categories
              <motion.svg 
                animate={{ rotate: showDropdown ? 180 : 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-3.5 h-3.5 opacity-50" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            
            <AnimatePresence>
              {showDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 2 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full right-0 mt-2 w-52 bg-white border border-[#E8E8E6] rounded-sm shadow-sm overflow-hidden z-50 py-2"
                >
                  {categories.map((cat) => (
                    <Link 
                      key={cat.href}
                      href={cat.href}
                      prefetch={true}
                      className="block px-4 py-2.5 text-sm text-[#6B6B6B] hover:bg-[#FAFAF9] hover:text-[#1C1C1C] transition-colors duration-150"
                      onClick={() => setShowDropdown(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors duration-200 hidden sm:inline"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
