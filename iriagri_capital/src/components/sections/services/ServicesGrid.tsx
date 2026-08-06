import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { scaleIn, fadeUp } from "../../../utils/animations";
import { FaPlay, FaTimes } from "react-icons/fa";

const services = [
  {
    title: "Cashew Farming",
    desc: "Over 1000+ Acres dedicated to high-quality cashew cultivation.",

    fullDesc:
      "Cashew farming in Tanzania is highly concentrated in regions like Mtwara, Lindi, and Coast Region where tropical climate and sandy soils create ideal growing conditions. The best planting period is between November and January during the rainy season.",

    tips: [
      "Best planting season: November → January",
      "Requires warm tropical climate",
      "Well-drained sandy soil is ideal",
      "Dry season improves nut quality",
    ],

    video: "/images/farming.mp4",
  },

  {
    title: "Seedling Preparation",
    desc: "We prepare Naliendele seeds for strong and healthy growth.",

    fullDesc:
      "Healthy seedlings are critical for strong cashew productivity in Tanzania. Farmers commonly use improved Naliendele varieties because they mature faster and produce better quality nuts.",

    tips: [
      "Use certified Naliendele seeds",
      "Nursery preparation starts before rains",
      "Protect seedlings from excess moisture",
      "Maintain regular watering",
    ],

    video: "/videos/seedlings.mp4",
  },

  {
    title: "Harvesting",
    desc: "Careful and timely harvesting to ensure premium quality nuts.",

    fullDesc:
      "Harvesting usually starts from August to December in Tanzania. Nuts are collected after naturally falling from the tree to maintain premium export quality.",

    tips: [
      "Dry nuts immediately after harvesting",
      "Avoid moisture contamination",
      "Store in ventilated conditions",
      "Sort before export packaging",
    ],

    video: "/videos/harvest.mp4",
  },

  {
    title: "Pruning",
    desc: "Regular pruning for healthy trees and maximum yield.",

    fullDesc:
      "Pruning improves airflow and sunlight penetration which helps reduce diseases and improve cashew yield.",

    tips: [
      "Remove dead branches",
      "Improve canopy shape",
      "Best after harvesting season",
      "Use sanitized pruning tools",
    ],

    video: "/videos/pruning.mp4",
  },

  {
    title: "Farm Maintenance",
    desc: "Weeding, irrigation, and soil management services.",

    fullDesc:
      "Continuous farm maintenance helps maintain healthy trees, strong soil fertility, and sustainable long-term productivity.",

    tips: [
      "Monitor weeds frequently",
      "Improve irrigation systems",
      "Check soil nutrients regularly",
      "Maintain farm cleanliness",
    ],

    video: "/videos/maintenance.mp4",
  },

  {
    title: "Pest Control (Farmigation)",
    desc: "Eco-friendly pest control solutions to protect crops.",

    fullDesc:
      "Pest management is important for protecting cashew trees from fungal infections and insects common in humid tropical regions.",

    tips: [
      "Inspect trees regularly",
      "Use eco-friendly pesticides",
      "Prevent fungal spread",
      "Monitor leaf conditions",
    ],

    video: "/videos/pest.mp4",
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <>
      <section className="relative py-28 bg-[#F8FAFC] overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#14B8A6]/10 blur-3xl rounded-full" />

        <div className="relative z-10">

          {/* HEADER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
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
                What We Offer
              </p>

            </div>

            {/* TITLE */}
            <h2 className="
              text-4xl
              md:text-6xl
              font-bold
              text-[#0F172A]
              leading-tight
              tracking-tight
            ">

              Our Core
              <span className="text-[#0D9488]">
                {" "}Services
              </span>

            </h2>

          </motion.div>

          {/* VIDEO SECTION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.2 }}
            className="mt-16 max-w-6xl mx-auto px-6"
          >

            <div className="
              relative
              rounded-[32px]
              overflow-hidden
              shadow-[0_25px_80px_rgba(2,6,23,0.15)]
            ">

              <video
                src="/images/farms.mp4"
                autoPlay
                loop
                playsInline
                className="
                  w-full
                  h-[320px]
                  md:h-[500px]
                  object-cover
                "
              />

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#020617]/45
                via-transparent
                to-transparent
              " />

            </div>

          </motion.div>

          {/* SERVICES GRID */}
          <div className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-20
            max-w-7xl
            mx-auto
            px-6
          ">

            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelectedService(s)}
                className="
                  group
                  bg-white/80
                  backdrop-blur-md
                  border border-white
                  p-8
                  rounded-[30px]
                  shadow-[0_10px_40px_rgba(2,6,23,0.05)]
                  hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                  text-left
                  cursor-pointer
                  relative
                  overflow-hidden
                "
              >

                {/* GLOW */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#14B8A6]/0
                  to-[#14B8A6]/5
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                " />

                {/* TOP ICON */}
                <div className="
                  relative
                  z-10
                  w-14 h-14
                  rounded-2xl
                  bg-[#0D9488]/10
                  flex
                  items-center
                  justify-center
                  text-[#0D9488]
                  font-bold
                  text-lg
                  mb-6
                  group-hover:bg-[#0D9488]
                  group-hover:text-white
                  transition-all
                  duration-500
                ">
                  0{i + 1}
                </div>

                {/* TITLE */}
                <h3 className="
                  relative
                  z-10
                  font-semibold
                  text-2xl
                  text-[#0F172A]
                  leading-snug
                ">
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="
                  relative
                  z-10
                  text-slate-600
                  mt-4
                  text-[15px]
                  leading-relaxed
                ">
                  {s.desc}
                </p>

                {/* BUTTON */}
                <div className="
                  relative
                  z-10
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-[#0D9488]
                  font-medium
                ">
                  <FaPlay />
                  Learn More
                </div>

              </motion.div>
            ))}

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
              bg-black/70
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
            "
          >

            {/* MODAL CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="
                relative
                w-full
                max-w-5xl
                max-h-[95vh]
                overflow-y-auto
                rounded-[36px]
                bg-white
                shadow-[0_25px_100px_rgba(2,6,23,0.35)]
              "
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedService(null)}
                className="
                  absolute
                  top-5
                  right-5
                  z-20
                  w-12
                  h-12
                  rounded-full
                  bg-white/90
                  text-[#0D9488]
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  hover:bg-[#0D9488]
                  hover:text-white
                  transition-all
                "
              >
                <FaTimes />
              </button>

              {/* VIDEO */}
              <div className="relative">

                <video
                  src={selectedService.video}
                  controls
                  autoPlay
                  className="
                    w-full
                    h-[250px]
                    md:h-[420px]
                    object-cover
                  "
                />

                {/* OVERLAY */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-transparent
                  pointer-events-none
                " />

              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-10">

                {/* LABEL */}
                <div className="
                  inline-flex
                  items-center
                  gap-2
                  px-4 py-2
                  rounded-full
                  bg-[#0D9488]/10
                  border border-[#0D9488]/10
                ">

                  <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />

                  <p className="
                    text-[11px]
                    uppercase
                    tracking-[3px]
                    text-[#0F766E]
                    font-medium
                  ">
                    Tanzania Cashew Industry
                  </p>

                </div>

                {/* TITLE */}
                <h2 className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-[#0F172A]
                  mt-6
                  leading-tight
                ">

                  {selectedService.title}

                </h2>

                {/* DESCRIPTION */}
                <p className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-slate-600
                ">
                  {selectedService.fullDesc}
                </p>

                {/* TIPS */}
                <div className="
                  grid
                  md:grid-cols-2
                  gap-5
                  mt-10
                ">

                  {selectedService.tips.map((tip: string, i: number) => (
                    <div
                      key={i}
                      className="
                        bg-[#F8FAFC]
                        border
                        border-[#CCFBF1]
                        rounded-2xl
                        p-5
                        text-slate-700
                        shadow-[0_10px_40px_rgba(13,148,136,0.04)]
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