// "use client";

// import { useRouter, usePathname } from "next/navigation";

// export default function BackButton() {
//   const router = useRouter();
//   const pathname = usePathname();

//   // Hide on homepage
//   if (pathname === "/") return null;

//   return (
//     <button
//       onClick={() => router.back()}
//       className="fixed top-4 left-4 z-50 flex items-center gap-2
//                  px-4 py-2 rounded-xl
//                  bg-black text-white
//                  shadow-lg hover:opacity-90 active:scale-95
//                  transition"
//     >
//       ← Back
//     </button>
//   );
// }
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
      className="
        fixed
        top-16 sm:top-6
        left-3 sm:left-6
        z-50
        flex items-center justify-center
        text-xs sm:text-sm md:text-base
        px-3 py-2 sm:px-4 sm:py-2
        rounded-lg
        bg-black text-white
        shadow-lg
        hover:bg-gray-800
        active:scale-95
        transition
        pointer-events-auto
      "
    >
      ← Back
    </button>
  );
}

