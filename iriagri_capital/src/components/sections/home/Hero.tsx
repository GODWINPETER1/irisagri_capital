import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/images/harv.png')",
        }}
      />

      {/* CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            {/* LABEL */}
            <p className="uppercase tracking-widest text-sm mb-3 text-gray-300">
              Sustainable Cashew Farming
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Growing Quality,
              <br />
              Nourishing the Future
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-lg text-gray-200">
              Over 1000 hectares of premium cashew farming with sustainable
              practices and reliable global supply.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/services"
                className="bg-primary hover:bg-green-800 px-6 py-3 rounded-full text-white font-medium transition"
              >
                Our Services →
              </Link>

              <Link
                to="/about"
                className="border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
              >
                Learn More →
              </Link>

            </div>
          </motion.div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white text-2xl cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <FaChevronDown />
        </motion.div>
      </div>

    </section>
  );
}