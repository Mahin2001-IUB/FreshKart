export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">FreshKart</h3>
          <p className="mt-3 text-sm text-gray-400">
            Fresh, trusted groceries delivered to your home every day.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Dairy</li>
            <li>Daily Essentials</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">📞 09335 977933</p>
          <p className="text-sm mt-2">📧 support@freshkart.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FreshKart. All rights reserved.
      </div>
    </footer>
  );
}
