import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage: "url('/images/harv.png')",
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
            <p className="uppercase tracking-widest text-sm mb-3 text-gray-300">
              Sustainable Cashew Farming
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Growing Quality,
              <br />
              Nourishing the Future
            </h1>

            <p className="mt-5 text-lg text-gray-200">
              Over 1000 hectares of premium cashew farming with sustainable
              practices and reliable global supply.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/services"
                className="bg-primary px-6 py-3 rounded-full text-white"
              >
                Our Services →
              </Link>

              <Link
                to="/about"
                className="border border-white px-6 py-3 rounded-full text-white"
              >
                Learn More →
              </Link>
            </div>

          </motion.div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <FaChevronDown className="text-white text-2xl animate-bounce" />
      </div>

    </section>
  );
}