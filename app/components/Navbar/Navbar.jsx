
"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useAuth } from "@/app/context/AuthContext";
import { useShopCart } from "@/app/store/ShopCartStore";

/* ===== HELPER ===== */
const getUserNameFromEmail = (email) => {
  if (!email) return "";
  const rawName = email.split("@")[0];
  const cleanName = rawName.replace(/[0-9._]/g, "");
  return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
};

/* ===== BACK BUTTON ===== */
function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <button
      onClick={() => router.back()}
      className="
        -ml-4 sm:-ml-6
        flex items-center gap-2
        px-3 py-1.5
        rounded-full
        bg-teal-600
        text-white
        text-sm font-semibold
        shadow-sm
        hover:bg-teal-700
        active:scale-95
        transition
        whitespace-nowrap
      "
    >
      <span className="text-base leading-none">←</span>
      <span className="hidden sm:inline">Back</span>
    </button>
  );
}

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { user, loading } = useAuth();
  const { cart } = useShopCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/?search=${encodeURIComponent(search)}`);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <nav className="w-full bg-slate-50 border-b">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center">

        {/* LEFT */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <BackButton />

          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-teal-600">
              FreshKart
            </span>
            <span className="text-sm text-gray-500 hidden lg:block">
              Daily groceries, delivered fresh
            </span>
          </Link>
        </div>

        {/* CENTER SEARCH (ONLY ON LARGE SCREENS) */}
        <div className="hidden lg:flex flex-1 justify-center px-6">
          <div className="w-full max-w-lg flex">
            <input
              type="text"
              placeholder="Search fruits, vegetables, groceries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <button
              onClick={handleSearch}
              className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 text-sm font-medium whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 ml-auto flex-shrink-0 text-sm font-medium text-gray-700">

          <div className="hidden md:flex items-center gap-6">
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

          {!loading && user ? (
            <>
              <span className="hidden sm:block">
                👋 Hi, <b>{getUserNameFromEmail(user.email)}</b>
              </span>

              <Link href="/cart">
                <button className="relative bg-teal-600 text-white px-4 py-1.5 rounded-md hover:bg-teal-700">
                  Cart
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs px-1.5 rounded-full">
                      {totalItems}
                    </span>
                  )}
                </button>
              </Link>

              <button
                onClick={handleLogout}
                className="border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="border border-teal-600 text-teal-600 px-4 py-1.5 rounded-md hover:bg-teal-50">
                Login
              </button>
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
}













