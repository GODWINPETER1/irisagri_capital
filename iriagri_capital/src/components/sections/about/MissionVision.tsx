import { motion } from "framer-motion";
import { scaleIn, fadeUp } from "../../../utils/animations";

export default function MissionVision() {
  return (
    <section className="relative py-28 bg-[#F8FAFC] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#14B8A6]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
              Our Commitment
            </p>

          </div>

          {/* TITLE */}
          <h2 className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
            tracking-tight
            text-[#0F172A]
          ">

            Our Mission
            <span className="text-[#0D9488]">
              {" "}& Vision
            </span>

          </h2>

        </motion.div>

        {/* CARDS */}
        <div className="
          grid
          lg:grid-cols-2
          gap-8
          mt-16
        ">

          {/* MISSION CARD */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              group
              relative
              overflow-hidden
              bg-white/80
              backdrop-blur-md
              border border-white
              rounded-[32px]
              p-10 md:p-12
              shadow-[0_10px_40px_rgba(2,6,23,0.06)]
              hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >

            {/* CARD GLOW */}
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

            {/* TOP */}
            <div className="relative z-10">

              <div className="
                w-16 h-16
                rounded-3xl
                bg-[#0D9488]/10
                flex
                items-center
                justify-center
                mb-8
                text-[#0D9488]
                text-2xl
                font-bold
                group-hover:bg-[#0D9488]
                group-hover:text-white
                transition-all
                duration-500
              ">
                M
              </div>

              <h3 className="
                text-3xl
                font-bold
                text-[#0F172A]
              ">
                Our Mission
              </h3>

              <p className="
                mt-6
                text-slate-600
                leading-relaxed
                text-lg
              ">
                Deliver premium quality cashew products through
                sustainable farming, innovation, and responsible
                agricultural practices.
              </p>

            </div>

          </motion.div>

          {/* VISION CARD */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              group
              relative
              overflow-hidden
              bg-gradient-to-br
              from-[#0F172A]
              via-[#111827]
              to-[#0D9488]
              rounded-[32px]
              p-10 md:p-12
              shadow-[0_20px_80px_rgba(2,6,23,0.18)]
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >

            {/* GLOW */}
            <div className="
              absolute
              top-[-100px]
              right-[-100px]
              w-[260px]
              h-[260px]
              bg-[#2DD4BF]/20
              blur-3xl
              rounded-full
            " />

            {/* CONTENT */}
            <div className="relative z-10">

              <div className="
                w-16 h-16
                rounded-3xl
                bg-white/10
                backdrop-blur-md
                border border-white/10
                flex
                items-center
                justify-center
                mb-8
                text-[#5EEAD4]
                text-2xl
                font-bold
              ">
                V
              </div>

              <h3 className="
                text-3xl
                font-bold
                text-white
              ">
                Our Vision
              </h3>

              <p className="
                mt-6
                text-slate-300
                leading-relaxed
                text-lg
              ">
                To become a globally recognized supplier of
                high-quality cashew products, known for
                sustainability, consistency, and trust.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}