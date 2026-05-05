import { motion } from "framer-motion";
import {
  FaSeedling,
  FaLeaf,
  FaSort,
  FaBoxOpen,
  FaTruck,
} from "react-icons/fa";

const steps = [
  {
    title: "Farm",
    desc: "Quality begins with carefully cultivated cashew farms.",
    icon: <FaSeedling />,
  },
  {
    title: "Harvest",
    desc: "Cashews are harvested at the right maturity stage.",
    icon: <FaLeaf />,
  },
  {
    title: "Sorting",
    desc: "Nuts are sorted and graded for consistent quality.",
    icon: <FaSort />,
  },
  {
    title: "Packaging",
    desc: "Handled and packed under clean conditions.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Delivery",
    desc: "Delivered safely to local and global markets.",
    icon: <FaTruck />,
  },
];

export default function Traceability() {
  return (
    <section className="py-28 bg-white text-center">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-xs uppercase tracking-widest text-gray-500">
          TRACEABILITY
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3">
          Traceability & Transparency
        </h2>

        <p className="mt-4 text-gray-600">
          Every cashew nut can be traced from farm to final delivery,
          ensuring accountability and consistent quality.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative mt-16 max-w-7xl mx-auto px-6">

        {/* LINE */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2"></div>

        <div className="grid md:grid-cols-5 gap-10 relative">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* ICON */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-xl shadow-lg group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-4 font-semibold text-lg text-gray-800">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mt-2 max-w-[180px]">
                {step.desc}
              </p>

              {/* DOT CONNECTOR */}
              <div className="hidden md:block absolute top-8 w-3 h-3 bg-primary rounded-full"></div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}