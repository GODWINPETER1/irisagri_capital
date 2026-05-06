import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../../utils/animations";
import { Link } from "react-router-dom";

export default function Journey() {
  return (
    <section className="relative py-28 bg-[#F8FAFC] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#14B8A6]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
                Our Journey
              </p>

            </div>

            {/* TITLE */}
            <h2 className="
              text-4xl
              md:text-6xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-[#0F172A]
            ">

              From Passion
              <br />

              to

              <span className="text-[#0D9488]">
                {" "}Purposeful Farming
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="
              mt-7
              text-lg
              text-slate-600
              leading-relaxed
              max-w-xl
            ">
              What started as a small farm has grown into
              over 1000 Acres of productive cashew farmland
              focused on quality, sustainability, and global supply.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">

              {[
                "Over 1000+ Acres of farmland",
                "Sustainable & eco-friendly methods",
                "High-quality export products",
                "Empowering local communities",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4"
                >

                  <div className="
                    w-7 h-7
                    rounded-full
                    bg-[#0D9488]/10
                    flex
                    items-center
                    justify-center
                    text-[#0D9488]
                    text-sm
                    mt-[2px]
                    flex-shrink-0
                  ">
                    ✓
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            {/* BUTTON */}
            <div className="mt-10">

              <Link
                to="/about"
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
                  hover:scale-[1.03]
                  font-medium
                "
              >
                Learn More →
              </Link>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* IMAGE GLOW */}
            <div className="
              absolute
              -bottom-10
              -right-10
              w-72 h-72
              bg-[#14B8A6]/15
              blur-3xl
              rounded-full
            " />

            {/* IMAGE CARD */}
            <div className="
              relative
              overflow-hidden
              rounded-[32px]
              shadow-[0_30px_80px_rgba(2,6,23,0.15)]
            ">

              <img
                src="/images/journey.png"
                className="
                  w-full
                  h-[620px]
                  object-cover
                  hover:scale-105
                  transition-transform
                  duration-700
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#020617]/40
                via-transparent
                to-transparent
              " />

            </div>

            {/* FLOATING CARD */}
            <div className="
              absolute
              -bottom-6
              left-6
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              text-white
              px-8 py-6
              rounded-3xl
              shadow-[0_20px_60px_rgba(2,6,23,0.25)]
            ">

              <h3 className="text-5xl font-bold text-[#5EEAD4]">
                1000+
              </h3>

              <p className="mt-2 text-slate-200">
                Acres of Farmland
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}