export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-white">FreshKart</h3>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Fresh, trusted groceries delivered to your doorstep.
            Quality products, fair prices, and fast delivery.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Shop
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Vegetables</li>
            <li className="hover:text-white cursor-pointer">Fruits</li>
            <li className="hover:text-white cursor-pointer">Dairy</li>
            <li className="hover:text-white cursor-pointer">Groceries</li>
            <li className="hover:text-white cursor-pointer">Snacks</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* CONTACT + GOOGLE MAP */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Contact & Location
          </h4>

          <p className="text-sm text-gray-400">📞 09335 977933</p>
          <p className="text-sm text-gray-400 mt-2">📧 support@freshkart.com</p>

          <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
            <iframe
              title="FreshKart Location"
              src="https://www.google.com/maps?q=Dhanmondi%20Dhaka&output=embed"
              width="100%"
              height="150"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            📍 Dhanmondi, Dhaka, Bangladesh
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white">FreshKart</span>. All rights reserved.
      </div>
    </footer>
  );
}


