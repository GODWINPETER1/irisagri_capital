import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductsHero() {
  return (
    <section className="relative h-[85vh] w-full">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/images/nutss.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-white"
          >
            {/* LABEL */}
            <p className="text-xs uppercase tracking-widest text-gray-300">
              OUR PRODUCTS
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
              Premium
              <br />
              Cashew Products
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-200 leading-relaxed">
              We deliver high-quality raw and future-ready cashew products
              to local and international markets.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-800 transition">
                View Products ↓
              </button>

              <Link
                to="/request-quote"
                className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Request a Quote →
              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}