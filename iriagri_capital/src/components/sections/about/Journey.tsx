import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../../utils/animations";

export default function Journey() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto px-6 items-center">

        {/* TEXT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-500">
            OUR JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 leading-tight">
            From Passion to
            <br />
            Purposeful Farming
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            What started as a small farm has grown into over 1000 hectares
            of productive cashew farmland.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li>✔ Over 1000+ hectares of farmland</li>
            <li>✔ Sustainable & eco-friendly methods</li>
            <li>✔ High-quality export products</li>
            <li>✔ Empowering local communities</li>
          </ul>

          <button className="mt-8 bg-primary text-white px-6 py-3 rounded-full hover:bg-green-800 transition">
            Learn More →
          </button>
        </motion.div>

        {/* IMAGE + CARD */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="/images/about/farm.jpg"
            className="rounded-3xl shadow-lg"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-primary text-white px-8 py-6 rounded-2xl shadow-xl">
            <h3 className="text-4xl font-bold">1000+</h3>
            <p className="text-sm">Hectares of Farmland</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}