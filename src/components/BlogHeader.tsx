"use client";

import { useState } from "react";

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
    <div className="relative w-full max-w-md mb-12">
      <div className="relative group">
        <svg
          className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9A9A9A] group-focus-within:text-[#1C1C1C] transition-colors duration-150"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={handleChange}
          className="
            w-full
            bg-transparent
            border-b border-[#E8E8E6]
            pl-6 pr-3 py-2.5
            text-sm text-[#1C1C1C]
            placeholder-[#9A9A9A]
            focus:outline-none
            focus:border-[#1C1C1C]
            transition-colors
            duration-150
          "
        />
      </div>
    </div>
  );
}
