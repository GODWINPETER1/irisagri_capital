import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../../utils/animations";

export default function Capability() {
  return (
    <section className="py-28 bg-[#F8FAFC]">

      <div className="
        grid
        md:grid-cols-2
        gap-16
        max-w-7xl
        mx-auto
        px-6
        items-center
      ">

        {/* TEXT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
        >

          {/* LABEL */}
          <p className="
            text-xs
            uppercase
            tracking-[4px]
            text-[#0F766E]
          ">
            OUR CAPABILITY
          </p>

          {/* TITLE */}
          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0F172A]
            mt-4
            leading-tight
          ">

            Built on Land,
            <br />

            <span className="text-[#0D9488]">
              Driven by Excellence
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="
            mt-6
            text-slate-600
            leading-relaxed
            text-lg
          ">
            With over 1000 Acres of farmland and skilled workers,
            we deliver consistent quality and sustainable production.
          </p>

          {/* FEATURES */}
          <div className="
            grid
            grid-cols-2
            gap-5
            mt-10
          ">

            {[
              "1000+ Acres",
              "Skilled workers",
              "Sustainable farming",
              "Export ready",
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
                "
              >

                <div className="
                  w-8 h-8
                  rounded-full
                  bg-[#0D9488]/10
                  flex
                  items-center
                  justify-center
                  text-[#0D9488]
                  text-sm
                  font-bold
                ">
                  ✓
                </div>

                <p className="
                  text-slate-700
                  text-sm
                  font-medium
                ">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
        >

          <div className="
            overflow-hidden
            rounded-[32px]
            shadow-[0_20px_60px_rgba(2,6,23,0.08)]
          ">

            <img
              src="/images/plant.jpg"
              className="
                w-full
                h-[520px]
                object-cover
                hover:scale-105
                transition-transform
                duration-700
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}