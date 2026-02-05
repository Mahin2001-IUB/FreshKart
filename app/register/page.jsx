"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      // 🔥 CREATE USER IN FIREBASE
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // 🔐 SAVE DISPLAY NAME
      await updateProfile(userCredential.user, {
        displayName: form.name,
      });

      alert("✅ Account created successfully!");
      router.push("/"); // redirect after signup
    } catch (error) {
      console.error("Firebase signup error:", error.code, error.message);

      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email address");
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
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
              placeholder="Password (min 6 chars)"
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
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>

          {/* Footer links */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-teal-600 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

