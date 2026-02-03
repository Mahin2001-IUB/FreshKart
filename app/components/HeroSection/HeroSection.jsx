'use client';

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Start your day with
            <span className="block text-teal-600 mt-2">
              Quality groceries you can rely on
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-base">
            Everything fresh, everything you need — every day
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition">
              Order Now
            </button>

            <span className="text-gray-800 font-semibold">
              Call: <span className="text-teal-600">09533 933955</span>
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Product"
            className="max-w-md w-full rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
