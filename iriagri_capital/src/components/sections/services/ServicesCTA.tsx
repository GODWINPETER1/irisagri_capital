import { motion } from "framer-motion";

export default function ServicesCTA() {
  return (
    <motion.section
      className="py-20 bg-[#f5f5f5]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* IMAGE */}
        <img
          src="/images/services/nuts.png"
          className="w-40"
        />

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">
            Need Reliable Cashew Supply?
          </h2>
          <p className="text-gray-600 mt-2">
            Partner with us for premium cashew products.
          </p>
        </div>

        {/* BUTTON */}
        <button className="bg-primary text-white px-8 py-3 rounded-full">
          Request a Quote →
        </button>

      </div>
    </motion.section>
  );
}