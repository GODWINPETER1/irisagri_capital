import { motion } from "framer-motion";
import {
  FaSeedling,
  FaLeaf,
  FaBug,
  FaTractor,
  FaCut,
} from "react-icons/fa";

import { GiFruitTree } from "react-icons/gi";
import { Link } from "react-router-dom";

const services = [
  { title: "Farming", icon: <GiFruitTree /> },
  { title: "Seedlings", icon: <FaSeedling /> },
  { title: "Harvesting", icon: <FaLeaf /> },
  { title: "Pruning", icon: <FaCut /> },
  { title: "Pest Control", icon: <FaBug /> },
  { title: "Farm Maintenance", icon: <FaTractor /> },
];

export default function ServicesStats() {
  return (
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

          {/* RIGHT SIDE PREMIUM CARD */}
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

            {/* GLOW */}
            <div className="absolute top-[-100px] right-[-80px] w-[260px] h-[260px] bg-[#2DD4BF]/20 blur-3xl rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10">

              <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">

                <p className="text-[11px] uppercase tracking-[3px] text-slate-300">
                  Production Scale
                </p>

              </div>

              {/* NUMBER */}
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

              {/* IMAGE */}
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

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}