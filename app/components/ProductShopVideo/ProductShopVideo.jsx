export default function ProductShopVideo() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How FreshKart Works
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Watch a short video to see how easy it is to order groceries online
        </p>

        {/* YouTube Video */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/nZ9CCZ0LsJc"
              title="Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
