import { motion } from "framer-motion";

export default function FarmQuality() {
  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">

      <div className="
        grid
        md:grid-cols-2
        gap-12
        max-w-7xl
        mx-auto
        px-6
        items-center
      ">

        {/* IMAGE SIDE */}
        <div className="relative">

          {/* GLOW */}
          <div className="
            absolute
            -bottom-10
            -left-10
            w-52
            h-52
            bg-[#14B8A6]/10
            blur-3xl
            rounded-full
          " />

          {/* IMAGE */}
          <div className="
            relative
            overflow-hidden
            rounded-[30px]
            shadow-[0_20px_60px_rgba(2,6,23,0.08)]
            group
          ">

            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200"
              className="
                w-full
                h-[500px]
                object-cover
                group-hover:scale-105
                transition-transform
                duration-700
              "
            />

            {/* OVERLAY */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#020617]/25
              via-transparent
              to-transparent
            " />

          </div>

        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
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
              Farm Quality
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

            Quality Starts
            <br />

            <span className="text-[#0D9488]">
              at the Farm
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="
            mt-6
            text-lg
            text-slate-600
            leading-relaxed
            max-w-xl
          ">
            We maintain strict agricultural standards from
            cultivation to harvesting to ensure premium
            export-quality cashew production.
          </p>

          {/* FEATURES */}
          <div className="
            grid
            sm:grid-cols-2
            gap-5
            mt-10
          ">

            {[
              "Certified seedlings (Naliendele)",
              "Proper land preparation",
              "Pruning & maintenance",
              "Pest control (Farmigation)",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex
                  items-center
                  gap-3
                  bg-white
                  border
                  border-slate-100
                  rounded-2xl
                  px-5
                  py-4
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >

                {/* ICON */}
                <div className="
                  w-8
                  h-8
                  rounded-full
                  bg-[#0D9488]/10
                  text-[#0D9488]
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-bold
                  flex-shrink-0
                ">
                  ✓
                </div>

                {/* TEXT */}
                <p className="
                  text-sm
                  font-medium
                  text-slate-700
                ">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}