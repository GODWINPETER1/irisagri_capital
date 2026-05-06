import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SustainabilityHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage: "url('/images/sus1.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#020617]/90
        via-[#020617]/55
        to-transparent
      " />

      {/* GLOW */}
      <div className="
        absolute
        right-[-180px]
        bottom-[-180px]
        w-[650px]
        h-[650px]
        bg-[#14B8A6]/20
        blur-3xl
        rounded-full
      " />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >

            {/* LABEL */}
            <div className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              bg-white/10
              border border-white/10
              backdrop-blur-md
              mb-6
            ">

              <div className="w-2 h-2 rounded-full bg-[#5EEAD4]" />

              <p className="
                uppercase
                tracking-[3px]
                text-[11px]
                text-slate-200
              ">
                Sustainability
              </p>

            </div>

            {/* TITLE */}
            <h1 className="
              text-5xl
              md:text-7xl
              font-bold
              leading-[1.05]
              tracking-tight
            ">

              Farming with
              <br />

              <span className="text-[#5EEAD4]">
                Purpose & Impact
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="
              mt-7
              text-lg
              md:text-xl
              text-slate-300
              leading-relaxed
              max-w-xl
            ">
              We believe sustainable farming creates
              stronger communities, protects the environment,
              and delivers premium-quality cashew products
              for global markets.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/contact"
                className="
                  bg-[#14B8A6]
                  hover:bg-[#0F766E]
                  px-7 py-4
                  rounded-full
                  text-white
                  transition-all
                  duration-300
                  shadow-[0_10px_40px_rgba(20,184,166,0.25)]
                "
              >
                Partner With Us →
              </Link>

              <Link
                to="/about"
                className="
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-md
                  px-7 py-4
                  rounded-full
                  text-white
                  hover:bg-white
                  hover:text-[#020617]
                  transition-all
                  duration-300
                "
              >
                Learn More
              </Link>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}