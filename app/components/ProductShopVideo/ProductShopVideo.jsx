
"use client";

import { useRouter } from "next/navigation";

export default function ProductShopVideo() {
  const router = useRouter();

  return (
    <section className="py-24 bg-gradient-to- from-white to-gray-400">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            How FreshKart Works 🛒
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Ordering groceries online is simple, fast, and reliable.
            See how FreshKart delivers freshness to your doorstep.
          </p>
        </div>

        {/* STEPS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
              1
            </div>
            <p className="font-medium text-gray-800">
              Browse fresh groceries
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
              2
            </div>
            <p className="font-medium text-gray-800">
              Add items to your cart
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
              3
            </div>
            <p className="font-medium text-gray-800">
              Get fast home delivery
            </p>
          </div>
        </div>

        {/* VIDEO */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200 bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/nZ9CCZ0LsJc"
              title="FreshKart Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => router.push("/login")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-semibold text-lg shadow-xl hover:bg-orange-600 transition"
          >
            Start Shopping Now
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}







