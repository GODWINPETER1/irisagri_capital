import { motion } from "framer-motion";
import { scaleIn, fadeUp } from "../../../utils/animations";

const items = [
  { title: "Quality Seedlings", img: "/images/about/seedling.jpg" },
  { title: "Regular Pruning", img: "/images/about/pruning.jpg" },
  { title: "Natural Pest Control", img: "/images/about/pest.jpg" },
  { title: "Careful Harvesting", img: "/images/about/harvest.jpg" },
];

export default function Practices() {
  return (
    <section className="py-28 bg-[#f8f8f8] text-center">

      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-widest text-gray-500">
          OUR PROCESS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
          Sustainable Farming Practices
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-8 mt-14 max-w-7xl mx-auto px-6">

        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group cursor-pointer"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}