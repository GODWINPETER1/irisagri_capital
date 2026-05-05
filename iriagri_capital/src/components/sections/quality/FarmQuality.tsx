// FarmQuality.tsx
import { motion } from "framer-motion";

export default function FarmQuality() {
  return (
    <section className="py-24 bg-white">

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-center">

        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200"
          className="rounded-2xl shadow"
        />

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-4xl font-bold text-primary">
            Quality Starts at the Farm
          </h2>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ Certified seedlings (Naliendele)</li>
            <li>✔ Proper land preparation</li>
            <li>✔ Pruning & maintenance</li>
            <li>✔ Pest control (Farmigation)</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}