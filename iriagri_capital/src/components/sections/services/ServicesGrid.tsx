import { motion } from "framer-motion";
import { scaleIn, fadeUp } from "../../../utils/animations";

const services = [
  {
    title: "Cashew Farming",
    desc: "Over 1000+ hectares dedicated to high-quality cashew cultivation.",
  },
  {
    title: "Seedling Preparation",
    desc: "We prepare Naliendele seeds for strong and healthy growth.",
  },
  {
    title: "Harvesting",
    desc: "Careful and timely harvesting to ensure premium quality nuts.",
  },
  {
    title: "Pruning",
    desc: "Regular pruning for healthy trees and maximum yield.",
  },
  {
    title: "Farm Maintenance",
    desc: "Weeding, irrigation, and soil management services.",
  },
  {
    title: "Pest Control (Farmigation)",
    desc: "Eco-friendly pest control solutions to protect crops.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-28 bg-[#f8f8f8] text-center">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="text-xs uppercase tracking-widest text-gray-500">
          WHAT WE OFFER
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
          Our Core Services
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg text-primary">
              {s.title}
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}