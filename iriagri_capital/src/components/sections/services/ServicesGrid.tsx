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

      {/* HEADER */}
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

      {/* 🎥 VIDEO SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        className="mt-14 max-w-5xl mx-auto px-6"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-xl">

          {/* VIDEO */}
          <video
            src="/images/farm.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[300px] md:h-[450px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            {/* <h3 className="text-white text-2xl md:text-3xl font-semibold">
              See Our Farming in Action
            </h3> */}
          </div>

        </div>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
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