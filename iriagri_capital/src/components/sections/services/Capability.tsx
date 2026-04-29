import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../../utils/animations";

export default function Capability() {
  return (
    <section className="py-28 bg-white">

      <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto px-6 items-center">

        {/* TEXT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500">
            OUR CAPABILITY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
            Built on Land,
            <br />
            Driven by Excellence
          </h2>

          <p className="mt-6 text-gray-600">
            With over 1000 hectares of farmland and skilled workers,
            we deliver consistent quality and sustainable production.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8 text-sm">
            <p>✔ 1000+ hectares</p>
            <p>✔ Skilled workers</p>
            <p>✔ Sustainable farming</p>
            <p>✔ Export ready</p>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
        >
          <img
            src="/images/plant.jpg"
            className="rounded-3xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}