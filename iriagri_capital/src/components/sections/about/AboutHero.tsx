import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/animations";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full overflow-hidden bg-[#020617]"
    >

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* PREMIUM OVERLAY */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#020617]/90
        via-[#020617]/60
        to-[#020617]/30
      " />

      {/* MAIN GLOW */}
      <div className="
        absolute
        bottom-[-180px]
        right-[-120px]
        md:bottom-[-220px]
        md:right-[-180px]
        w-[380px]
        h-[380px]
        md:w-[700px]
        md:h-[700px]
        bg-[#14B8A6]/20
        blur-3xl
        rounded-full
        z-0
      " />

      {/* SECONDARY GLOW */}
      <div className="
        absolute
        top-[-100px]
        left-[-80px]
        md:top-[-120px]
        md:left-[-100px]
        w-[220px]
        h-[220px]
        md:w-[300px]
        md:h-[300px]
        bg-[#0D9488]/15
        blur-3xl
        rounded-full
        z-0
      " />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-5 md:px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl text-white pt-28 pb-16 md:py-0"
          >

            {/* LABEL */}
            <div className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              bg-white/5
              border border-white/10
              backdrop-blur-md
              mb-6
            ">

              <div className="w-2 h-2 rounded-full bg-[#2DD4BF]" />

              <p className="
                uppercase
                tracking-[2px]
                md:tracking-[3px]
                text-[10px]
                md:text-[11px]
                text-gray-200
              ">
                Our Story
              </p>

            </div>

            {/* TITLE */}
            <h1 className="
              text-[42px]
              leading-[1.05]
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              font-bold
              tracking-tight
            ">

              About
              <br />

              <span className="text-[#5EEAD4]">
                Our Farm
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="
              mt-6
              text-[15px]
              sm:text-lg
              md:text-xl
              text-slate-300
              leading-relaxed
              max-w-2xl
            ">
              Rooted in tradition and driven by innovation,
              we cultivate premium cashew nuts through
              sustainable farming practices and a commitment
              to quality.
            </p>

            {/* BUTTONS */}
            <div className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              md:mt-10
              w-full
              sm:w-auto
            ">

              {/* PRIMARY */}
              <Link
                to="/contact"
                className="
                  bg-[#0D9488]
                  hover:bg-[#0F766E]
                  text-white
                  px-7
                  py-4
                  rounded-full
                  transition-all
                  duration-300
                  shadow-[0_10px_40px_rgba(13,148,136,0.35)]
                  hover:shadow-[0_20px_60px_rgba(13,148,136,0.45)]
                  hover:scale-[1.02]
                  font-medium
                  text-center
                "
              >
                Contact Us →
              </Link>

              {/* SECONDARY */}
              <Link
                to="/services"
                className="
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-md
                  px-7
                  py-4
                  rounded-full
                  text-white
                  hover:bg-white
                  hover:text-[#020617]
                  transition-all
                  duration-300
                  font-medium
                  text-center
                "
              >
                Our Services →
              </Link>

            </div>

            {/* STATS */}
            <div className="
              grid
              grid-cols-2
              md:flex
              gap-y-8
              gap-x-8
              md:gap-12
              mt-12
              md:mt-14
            ">

              <div>
                <h3 className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-[#5EEAD4]
                ">
                  1000+
                </h3>

                <p className="
                  text-slate-400
                  text-xs
                  md:text-sm
                  mt-1
                ">
                  Acres Farmed
                </p>
              </div>

              <div>
                <h3 className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-[#5EEAD4]
                ">
                  Premium
                </h3>

                <p className="
                  text-slate-400
                  text-xs
                  md:text-sm
                  mt-1
                ">
                  Export Quality
                </p>
              </div>

              <div>
                <h3 className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-[#5EEAD4]
                ">
                  Global
                </h3>

                <p className="
                  text-slate-400
                  text-xs
                  md:text-sm
                  mt-1
                ">
                  Supply Ready
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
}