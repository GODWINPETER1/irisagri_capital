import { motion } from "framer-motion";
import { scaleIn, fadeUp } from "../../../utils/animations";

const items = [
  { title: "Quality Seedlings", img: "/images/seed.jpg" },
  { title: "Regular Pruning", img: "/images/pruning.jpg" },
  { title: "Natural Pest Control", img: "/images/pest.jpg" },
  { title: "Careful Harvesting", img: "/images/harvesting.jpg" },
];

export default function Practices() {
  return (
    <section className="py-28 bg-[#F8FAFC] text-center">

      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-widest text-[#0F766E]">
          OUR PROCESS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3">
          Sustainable Farming{" "}
          <span className="text-[#0D9488]">
            Practices
          </span>
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
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              border border-slate-100
              shadow-[0_10px_40px_rgba(2,6,23,0.05)]
              hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
              hover:-translate-y-2
              transition-all
              duration-500
              group
              cursor-pointer
            "
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                className="
                  h-48
                  w-full
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h3 className="font-semibold text-lg text-[#0F172A]">
                {item.title}
              </h3>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}