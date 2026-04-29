import { motion } from "framer-motion";

export default function ProductsHero() {
  return (
    <section className="grid md:grid-cols-2 min-h-[80vh]">

      {/* LEFT */}
      <div className="flex items-center bg-[#f3f4f2] px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500">
            OUR PRODUCTS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-4 leading-tight">
            Premium
            <br />
            Cashew Products
          </h1>

          <p className="mt-6 text-gray-600">
            We deliver high-quality raw and future-ready cashew products
            to local and international markets.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-primary text-white px-6 py-3 rounded-full">
              View Products ↓
            </button>

            <button className="border border-secondary text-secondary px-6 py-3 rounded-full">
              Request a Quote →
            </button>
          </div>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/products/hero.jpg')" }}
      />
    </section>
  );
}