export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">Cashew Farm</h2>
          <p className="mt-3 text-sm text-gray-200">
            Premium cashew farming with sustainable practices.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: info@cashewfarm.com</p>
          <p className="text-sm">Phone: +255 xxx xxx</p>
        </div>

      </div>

      <div className="text-center mt-10 text-sm text-gray-300">
        © {new Date().getFullYear()} Cashew Farm. All rights reserved.
      </div>
    </footer>
  );
}