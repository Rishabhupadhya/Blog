"use client";

import { useRouter, usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show on homepage
  if (pathname === "/") {
    return null;
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="
        fixed
        left-4
        sm:left-6
        lg:left-8
        top-20
        sm:top-24
        z-40
        w-10
        h-10
        sm:w-12
        sm:h-12
        flex
        items-center
        justify-center
        bg-black/80
        backdrop-blur-sm
        border
        border-white/10
        rounded-full
        text-cyan-400
        hover:bg-cyan-400/10
        hover:border-cyan-400/50
        hover:scale-110
        transition-all
        duration-300
        shadow-lg
        hover:shadow-cyan-400/50
      "
      aria-label="Go back"
    >
      <FaArrowLeft className="text-sm sm:text-base" />
    </button>
  );
}
