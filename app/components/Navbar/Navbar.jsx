

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useAuth } from "@/app/context/AuthContext";
import { useShopCart } from "@/app/store/ShopCartStore"; // ✅ CART STORE

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { user, loading } = useAuth();
  const { cart } = useShopCart(); // ✅ GET CART

  // ✅ TOTAL CART ITEMS
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/?search=${encodeURIComponent(search)}`);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <nav className="w-full bg-slate-50 border-b">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-teal-600">FreshKart</span>
          <span className="text-sm text-gray-500 hidden sm:block">
            Daily groceries, delivered fresh
          </span>
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-10">
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
            className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700 text-sm font-medium"
          >
            Search
          </button>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/categories" className="hover:text-teal-600">Categories</Link>
          <Link href="/offers" className="hover:text-teal-600">Offers</Link>
          <Link href="/orders" className="hover:text-teal-600">My Orders</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {!loading && user ? (
            <>
              <span className="hidden sm:block text-sm text-gray-700">
                👋 Hi, <b>{user.email.split("@")[0]}</b>
              </span>

              <button
                onClick={handleLogout}
                className="border border-gray-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="border border-teal-600 text-teal-600 px-4 py-1.5 rounded-md text-sm hover:bg-teal-50">
                Login
              </button>
            </Link>
          )}

          {/* 🛒 CART BUTTON */}
          <Link href="/cart">
            <button className="relative bg-teal-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-teal-700">
              Cart

              {/* ✅ REAL CART COUNT */}
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs px-1.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}









