'use client';

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Register Data:", form);
    alert("Registration successful (demo)");
  };

  return (

    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account ✨
        </h2>
        <p className="text-center text-sm text-gray-500 mt-1">
          Join FreshKart to start shopping
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-red-500 text-white py-2 rounded-lg text-sm">
            Google
          </button>
          <button className="bg-blue-600 text-white py-2 rounded-lg text-sm">
            Facebook
          </button>
          <button className="bg-gray-700 text-white py-2 rounded-lg text-sm">
            Email
          </button>
        </div>

        {/* Footer links */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-teal-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    <Footer></Footer>

    </>
  );
}
