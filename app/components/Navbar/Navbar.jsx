// 'use client';

// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-slate-50 border-b">
//       <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

//         {/* Brand */}
//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold text-teal-600">
//             FreshKart
//           </span>
//           <span className="text-sm text-gray-500 hidden sm:block">
//             Daily groceries, delivered fresh
//           </span>
//         </div>

//         {/* Search */}
//         <div className="hidden md:flex flex-1 mx-10">
//           <input
//             type="text"
//             placeholder="Search fruits, vegetables, groceries..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//           />
//           <button className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 text-sm font-medium">
//             Search
//           </button>
//         </div>

//         {/* Links */}
//         <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
//           <Link href="/categories" className="hover:text-teal-600">
//             Categories
//           </Link>
//           <Link href="/offers" className="hover:text-teal-600">
//             Offers
//           </Link>
//           <Link href="/orders" className="hover:text-teal-600">
//             My Orders
//           </Link>
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-3">
//           <button className="border border-teal-600 text-teal-600 px-4 py-1.5 rounded-md text-sm hover:bg-teal-50">
//             Login
//           </button>

//           <button className="relative bg-teal-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-teal-700">
//             Cart
//             <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs px-1.5 rounded-full">
//               2
//             </span>
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// }

'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/?search=${search}`);
    }
  };

  return (
    <nav className="w-full bg-slate-50 border-b">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-teal-600">
            FreshKart
          </span>
          <span className="text-sm text-gray-500 hidden sm:block">
            Daily groceries, delivered fresh
          </span>
        </div>

        {/* 🔍 Search */}
        <div className="hidden md:flex flex-1 mx-10">
          <input
            type="text"
            placeholder="Search fruits, vegetables, groceries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <button
            onClick={handleSearch}
            className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 text-sm font-medium"
          >
            Search
          </button>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/categories" className="hover:text-teal-600">
            Categories
          </Link>
          <Link href="/offers" className="hover:text-teal-600">
            Offers
          </Link>
          <Link href="/orders" className="hover:text-teal-600">
            My Orders
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <button className="border border-teal-600 text-teal-600 px-4 py-1.5 rounded-md text-sm hover:bg-teal-50">
              Login
            </button>
          </Link>

          <button className="relative bg-teal-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-teal-700">
            Cart
            <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs px-1.5 rounded-full">
              2
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}






