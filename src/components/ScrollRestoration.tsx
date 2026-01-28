"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const positions = new Map<string, number>();

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      positions.set(pathname, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const y = positions.get(pathname);
    if (y !== undefined) {
      window.scrollTo(0, y);
    }
  }, [pathname]);

  return null;
}
