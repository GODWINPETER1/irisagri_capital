import { motion } from "framer-motion";
import { scaleIn, fadeUp } from "../../../utils/animations";

export default function MissionVision() {
  return (
    <section className="py-24 text-center">

      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-widest text-gray-500">
          OUR COMMITMENT
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
          Our Mission & Vision
        </h2>
      </motion.div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-6xl mx-auto px-6">

        {/* MISSION */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 text-left"
        >
          <h3 className="text-xl font-bold text-primary">
            Our Mission
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Deliver premium quality cashew products through sustainable farming,
            innovation, and responsible agricultural practices.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#f3e7db] p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 text-left"
        >
          <h3 className="text-xl font-bold text-secondary">
            Our Vision
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            To become a globally recognized supplier of high-quality cashew
            products, known for sustainability, consistency, and trust.
          </p>
        </motion.div>

      </div>
    </section>
  );
}