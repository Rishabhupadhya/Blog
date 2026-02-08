"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show on homepage or category pages
  const isHomePage = pathname === "/";
  const isCategoryPage = [
    "/technology",
    "/system-design", 
    "/backend-engineering",
    "/cloud-devops",
    "/ai-ml",
    "/blog"
  ].includes(pathname);

  if (isHomePage || isCategoryPage) {
    return null;
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.button
      onClick={handleBack}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      className="
        fixed
        left-6
        lg:left-8
        top-24
        z-40
        flex
        items-center
        gap-2
        text-[#6B6B6B]
        hover:text-[#1C1C1C]
        transition-colors
        duration-200
      "
      aria-label="Go back"
    >
      <svg 
        className="w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      <span className="text-eyebrow hidden sm:inline">Back</span>
    </motion.button>
  );
}
