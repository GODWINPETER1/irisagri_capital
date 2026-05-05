// QualityHero.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function QualityHero() {
  return (
    <section className="relative h-[85vh] w-full">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/images/qua.png')",
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
              Quality Assurance
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Our Commitment
              <br />
              to Quality
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-lg text-gray-200">
              From cultivation to delivery, we ensure every step meets the highest
              standards for premium cashew production.
            </p>

            {/* OPTIONAL BUTTONS (to match other pages) */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/contact"
                className="bg-primary hover:bg-green-800 px-6 py-3 rounded-full text-white font-medium transition"
              >
                Request a Quote →
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

    </section>
  );
}