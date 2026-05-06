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
    <section className="py-28 bg-[#F8FAFC] text-center overflow-hidden">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto px-6"
      >

        {/* LABEL */}
        <div className="
          inline-flex
          items-center
          gap-2
          px-4 py-2
          rounded-full
          bg-[#0D9488]/10
          border border-[#0D9488]/10
          mb-6
        ">

          <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

          <p className="
            text-[11px]
            uppercase
            tracking-[3px]
            text-[#0F766E]
            font-medium
          ">
            Traceability
          </p>

        </div>

        {/* TITLE */}
        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#0F172A]
          leading-tight
          tracking-tight
        ">

          Traceability
          <span className="text-[#0D9488]">
            {" "}& Transparency
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="
          mt-5
          text-lg
          text-slate-600
          leading-relaxed
        ">
          Every cashew nut can be traced from farm
          to final delivery, ensuring accountability
          and consistent quality.
        </p>

      </motion.div>

      {/* TIMELINE */}
      <div className="relative mt-20 max-w-7xl mx-auto px-6">

        {/* LINE */}
        <div className="
          hidden
          md:block
          absolute
          top-8
          left-0
          w-full
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#0D9488]/20
          to-transparent
        " />

        {/* GRID */}
        <div className="
          grid
          md:grid-cols-5
          gap-8
          relative
        ">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >

              {/* CARD */}
              <div className="
                bg-white
                rounded-[28px]
                border
                border-slate-100
                p-8
                shadow-[0_10px_40px_rgba(2,6,23,0.05)]
                hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
                hover:-translate-y-2
                transition-all
                duration-500
                h-full
              ">

                {/* ICON */}
                <div className="
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  bg-[#0D9488]/10
                  text-[#0D9488]
                  flex
                  items-center
                  justify-center
                  text-2xl
                  group-hover:bg-[#0D9488]
                  group-hover:text-white
                  transition-all
                  duration-300
                ">
                  {step.icon}
                </div>

                {/* TITLE */}
                <h3 className="
                  mt-6
                  text-xl
                  font-semibold
                  text-[#0F172A]
                  group-hover:text-[#0D9488]
                  transition-colors
                  duration-300
                ">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="
                  text-sm
                  text-slate-600
                  mt-4
                  leading-relaxed
                ">
                  {step.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}