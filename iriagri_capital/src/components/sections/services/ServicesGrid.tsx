import { motion } from "framer-motion";
import { scaleIn, fadeUp } from "../../../utils/animations";

const services = [
  {
    title: "Cashew Farming",
    desc: "Over 1000+ Acres dedicated to high-quality cashew cultivation.",
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

            {/* VIDEO */}
            <video
              src="/images/farm.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="
                w-full
                h-[320px]
                md:h-[500px]
                object-cover
              "
            />

            {/* LIGHT OVERLAY */}
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
              "
            >

              {/* TOP ICON */}
              <div className="
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
                font-semibold
                text-2xl
                text-[#0F172A]
                leading-snug
              ">
                {s.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="
                text-slate-600
                mt-4
                text-[15px]
                leading-relaxed
              ">
                {s.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}