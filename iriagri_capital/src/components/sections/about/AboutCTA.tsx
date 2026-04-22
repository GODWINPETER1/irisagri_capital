import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gradient-to-r  text-#166534"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Let’s Grow Together
          </h2>

          <p className="mt-3 text-gray-500 max-w-md">
            Partner with us for premium cashew products and sustainable
            agricultural solutions tailored for global markets.
          </p>
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        >
          Request a Quote →
        </motion.button>

      </div>
    </motion.section>
  );
}