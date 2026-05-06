import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020617]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage: "url('/images/yel.png')",
        }}
      />

      {/* PREMIUM CINEMATIC OVERLAY */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#020617]/95
        via-[#020617]/55
        to-transparent
      " />

      {/* MAIN GLOW */}
      <div className="
        absolute
        bottom-[-220px]
        right-[-180px]
        w-[700px]
        h-[700px]
        bg-[#14B8A6]/20
        blur-3xl
        rounded-full
        z-0
      " />

      {/* SECONDARY GLOW */}
      <div className="
        absolute
        top-[-120px]
        left-[-100px]
        w-[300px]
        h-[300px]
        bg-[#0D9488]/15
        blur-3xl
        rounded-full
        z-0
      " />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl text-white"
          >

            {/* LABEL */}
            <div>

              {/* <div className="w-2 h-2 rounded-full bg-[#2DD4BF]" /> */}

              {/* <p className="
                uppercase
                tracking-[3px]
                text-[11px]
                text-gray-200
              ">
                Our Services
              </p> */}

            </div>

            {/* TITLE */}
            <h1 className="
              text-5xl
              md:text-7xl
              py-6
              font-bold
              leading-[1.05]
              tracking-tight
            ">

              Comprehensive
              <br />

              <span className="text-[#5EEAD4]">
                Cashew Farming
              </span>

              <br />

              Solutions

            </h1>

            {/* DESCRIPTION */}
            <p className="
              mt-2
              text-lg
              md:text-xl
              text-slate-300
              leading-relaxed
              max-w-xl
            ">
              From quality seedlings to careful harvesting,
              we provide end-to-end services for sustainable
              and productive cashew farming.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              {/* PRIMARY BUTTON */}
              <button
                className="
                  bg-[#0D9488]
                  hover:bg-[#0F766E]
                  text-white
                  px-7 py-4
                  rounded-full
                  transition-all
                  duration-300
                  shadow-[0_10px_40px_rgba(13,148,136,0.35)]
                  hover:shadow-[0_20px_60px_rgba(13,148,136,0.45)]
                  hover:scale-[1.03]
                  font-medium
                "
              >
                Explore Services →
              </button>

              {/* OUTLINE BUTTON */}
              <Link
                to="/request-quote"
                className="
                  border border-white/20
                  bg-white/5
                  backdrop-blur-md
                  px-7 py-4
                  rounded-full
                  text-white
                  hover:bg-white
                  hover:text-[#020617]
                  transition-all
                  duration-300
                  font-medium
                "
              >
                Request a Quote →
              </Link>

            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-[#5EEAD4]">
                  1000+
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Acres Farmed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#5EEAD4]">
                  Sustainable
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Farming Practices
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#5EEAD4]">
                  Premium
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Export Quality
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}