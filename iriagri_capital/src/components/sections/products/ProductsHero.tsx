import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductsHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage: "url('/images/nutss.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            {/* LABEL */}
            <p className="uppercase tracking-widest text-sm mb-3 text-gray-300">
              Our Products
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Premium
              <br />
              Cashew Products
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-lg text-gray-200">
              We deliver high-quality raw and future-ready cashew products
              to local and international markets.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-primary px-6 py-3 rounded-full text-white hover:bg-green-800 transition">
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