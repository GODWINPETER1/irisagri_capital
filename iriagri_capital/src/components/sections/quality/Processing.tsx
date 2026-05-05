// Processing.tsx
import { motion } from "framer-motion";

export default function Processing() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-center">

        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-4xl font-bold text-primary">
            Careful Handling & Processing
          </h2>

          <p className="mt-4 text-gray-600">
            We ensure proper harvesting, sorting, and handling to maintain high-quality standards.
          </p>
        </motion.div>

        <img
          src="/images/proc.png"
          className="rounded-2xl shadow"
        />

      </div>
    </section>
  );
}