
"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide on homepage
  if (pathname === "/") return null;

  return (
    <button
      onClick={() => router.back()}
      aria-label="Go back"
      className="
        fixed
        top-16 sm:top-6
        left-4 sm:left-6
        z-50
        flex items-center gap-2
        px-4 py-2
        rounded-full
        bg-teal-600
        text-white
        text-sm sm:text-base
        font-semibold
        shadow-lg
        hover:bg-teal-700
        hover:shadow-xl
        active:scale-95
        transition-all
        duration-200
        pointer-events-auto
      "
    >
      <span className="text-lg leading-none">←</span>
      <span className="hidden sm:inline">Back</span>
    </button>
  );
}




