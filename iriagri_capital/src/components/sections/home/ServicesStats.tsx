import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  FaSeedling,
  FaLeaf,
  FaBug,
  FaTractor,
  FaCut,
  FaTimes,
} from "react-icons/fa";

import { GiFruitTree } from "react-icons/gi";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Farming",
    icon: <GiFruitTree />,
    description:
      "Cashew farming in Tanzania performs best in regions like Mtwara, Manyoni, Lindi, and Coastal areas with warm temperatures and moderate rainfall.",

    bestPeriod: "Planting season: November → January",

    climate:
      "Best grown in tropical climates with well-drained sandy soils and long dry seasons.",

    tips: [
      "Use certified seedlings",
      "Avoid waterlogged soil",
      "Maintain proper spacing",
      "Monitor rainfall patterns",
    ],
  },

  {
    title: "Seedlings",
    icon: <FaSeedling />,
    description:
      "Healthy seedlings are essential for high-yield cashew production and long-term farm sustainability.",

    bestPeriod: "Best preparation period: October → December",

    climate:
      "Seedlings require moist soil during early growth and partial sunlight.",

    tips: [
      "Use Naliendele certified seeds",
      "Water consistently",
      "Protect from pests",
      "Use fertile nursery soil",
    ],
  },

  {
    title: "Harvesting",
    icon: <FaLeaf />,
    description:
      "Cashew harvesting in Tanzania usually begins after the dry season when nuts naturally fall from the trees.",

    bestPeriod: "Harvest season: August → December",

    climate:
      "Dry weather improves nut quality and reduces moisture issues.",

    tips: [
      "Collect nuts daily",
      "Dry before storage",
      "Avoid moisture contamination",
      "Grade properly for export",
    ],
  },

  {
    title: "Pruning",
    icon: <FaCut />,
    description:
      "Pruning improves airflow, sunlight penetration, and overall tree productivity.",

    bestPeriod: "Best period: After harvesting season",

    climate:
      "Should be done during dry conditions to reduce disease spread.",

    tips: [
      "Remove dead branches",
      "Improve canopy structure",
      "Encourage healthy growth",
      "Use clean tools",
    ],
  },

  {
    title: "Pest Control",
    icon: <FaBug />,
    description:
      "Farmigation and eco-friendly pest control methods protect cashew trees from damaging insects and diseases.",

    bestPeriod: "Monitoring required year-round",

    climate:
      "High humidity increases risk of fungal diseases and pests.",

    tips: [
      "Use eco-friendly chemicals",
      "Inspect trees regularly",
      "Control weeds",
      "Monitor leaf condition",
    ],
  },

  {
    title: "Farm Maintenance",
    icon: <FaTractor />,
    description:
      "Consistent maintenance ensures healthy tree growth and maximum production capacity.",

    bestPeriod: "Continuous throughout the year",

    climate:
      "Proper irrigation and soil management improve resilience during dry seasons.",

    tips: [
      "Remove weeds frequently",
      "Maintain irrigation",
      "Monitor soil fertility",
      "Inspect farm infrastructure",
    ],
  },
];

export default function ServicesStats() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <>
      <section className="relative py-28 bg-[#F8FAFC] overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-[-150px] right-[-120px] w-[450px] h-[450px] bg-[#14B8A6]/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}
            <div>

              {/* LABEL */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/10 mb-5">

                <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

                <p className="text-[11px] uppercase tracking-[3px] text-[#0F766E] font-medium">
                  What We Do
                </p>

              </div>

              {/* TITLE */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#0F172A]">

                Our Core
                <br />

                <span className="text-[#0D9488]">
                  Services
                </span>

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
                From sustainable cultivation to harvesting and maintenance,
                we provide complete cashew farming solutions with premium
                quality standards.
              </p>

              {/* SERVICE CARDS */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">

                {services.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedService(s)}
                    className="
                      group
                      relative
                      bg-white/80
                      backdrop-blur-md
                      rounded-3xl
                      border border-white
                      p-6
                      shadow-[0_10px_40px_rgba(2,6,23,0.05)]
                      hover:shadow-[0_20px_60px_rgba(13,148,136,0.15)]
                      hover:-translate-y-2
                      transition-all
                      duration-500
                      overflow-hidden
                      cursor-pointer
                    "
                  >

                    {/* CARD GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 via-[#14B8A6]/0 to-[#14B8A6]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* ICON */}
                    <div className="
                      relative
                      z-10
                      w-14 h-14
                      rounded-2xl
                      bg-[#0D9488]/10
                      flex items-center justify-center
                      text-2xl
                      text-[#0D9488]
                      mx-auto
                      group-hover:scale-110
                      group-hover:bg-[#0D9488]
                      group-hover:text-white
                      transition-all
                      duration-500
                    ">
                      {s.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className="relative z-10 mt-5 text-sm font-semibold text-center text-[#0F172A]">
                      {s.title}
                    </h3>

                  </motion.div>
                ))}

              </div>

              {/* BUTTON */}
              <div className="mt-10">

                <Link
                  to="/services"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-[#0D9488]
                    hover:bg-[#0F766E]
                    text-white
                    px-7 py-4
                    rounded-full
                    transition-all
                    duration-300
                    shadow-[0_10px_40px_rgba(13,148,136,0.25)]
                    hover:shadow-[0_20px_60px_rgba(13,148,136,0.35)]
                    hover:scale-[1.02]
                    font-medium
                  "
                >
                  View All Services →
                </Link>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-gradient-to-br
                from-[#0F172A]
                via-[#111827]
                to-[#0D9488]
                text-white
                p-10
                shadow-[0_20px_80px_rgba(2,6,23,0.25)]
              "
            >

              <div className="absolute top-[-100px] right-[-80px] w-[260px] h-[260px] bg-[#2DD4BF]/20 blur-3xl rounded-full" />

              <div className="relative z-10">

                <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">

                  <p className="text-[11px] uppercase tracking-[3px] text-slate-300">
                    Production Scale
                  </p>

                </div>

                <div className="mt-8">

                  <h3 className="text-6xl md:text-7xl font-bold text-[#5EEAD4] leading-none">
                    1000+
                  </h3>

                  <p className="mt-3 text-2xl font-medium">
                    Acres
                  </p>

                  <p className="mt-3 text-slate-300 leading-relaxed max-w-sm">
                    Of productive cashew farmland managed with sustainable
                    farming methods and export-quality standards.
                  </p>

                </div>

                <div className="mt-10 relative overflow-hidden rounded-3xl">

                  <img
                    src="/images/image1.png"
                    className="
                      h-[260px]
                      w-full
                      object-cover
                      rounded-3xl
                      hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* MODAL */}
      <AnimatePresence>

        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[999]
              bg-black/60
              backdrop-blur-sm
              flex
              items-center
              justify-center
              px-6
            "
          >

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              className="
                relative
                w-full
                max-w-2xl
                bg-white
                rounded-[32px]
                p-10
                shadow-[0_20px_80px_rgba(2,6,23,0.25)]
              "
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedService(null)}
                className="
                  absolute
                  top-5
                  right-5
                  w-10
                  h-10
                  rounded-full
                  bg-[#F0FDFA]
                  text-[#0D9488]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#0D9488]
                  hover:text-white
                  transition-all
                "
              >
                <FaTimes />
              </button>

              {/* ICON */}
              <div className="
                w-16
                h-16
                rounded-2xl
                bg-[#0D9488]/10
                text-[#0D9488]
                flex
                items-center
                justify-center
                text-3xl
              ">
                {selectedService.icon}
              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-4xl font-bold text-[#0F172A]">
                {selectedService.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-5 text-slate-600 leading-relaxed">
                {selectedService.description}
              </p>

              {/* BEST PERIOD */}
              <div className="
                mt-8
                bg-[#F0FDFA]
                border
                border-[#CCFBF1]
                rounded-2xl
                p-5
              ">

                <h3 className="font-semibold text-[#0F172A]">
                  Best Period
                </h3>

                <p className="mt-2 text-[#0F766E]">
                  {selectedService.bestPeriod}
                </p>

              </div>

              {/* CLIMATE */}
              <div className="
                mt-5
                bg-[#F8FAFC]
                border
                border-[#E2E8F0]
                rounded-2xl
                p-5
              ">

                <h3 className="font-semibold text-[#0F172A]">
                  Climate & Conditions
                </h3>

                <p className="mt-2 text-slate-600">
                  {selectedService.climate}
                </p>

              </div>

              {/* TIPS */}
              <div className="mt-8">

                <h3 className="font-semibold text-[#0F172A]">
                  Important Tips
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mt-4">

                  {selectedService.tips.map((tip: string, i: number) => (
                    <div
                      key={i}
                      className="
                        bg-[#F8FAFC]
                        border
                        border-[#CCFBF1]
                        rounded-2xl
                        px-5
                        py-4
                        text-slate-700
                      "
                    >
                      ✔ {tip}
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}