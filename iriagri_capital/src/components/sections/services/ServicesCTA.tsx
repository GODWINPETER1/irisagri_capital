import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServicesCTA() {
  return (
    <motion.section
      className="py-24 bg-[#F8FAFC]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="
          relative
          overflow-hidden
          rounded-[36px]
          bg-gradient-to-r
          from-[#0F172A]
          via-[#111827]
          to-[#0D9488]
          px-10
          md:px-16
          py-14
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-10
          shadow-[0_25px_80px_rgba(2,6,23,0.18)]
        ">

          {/* GLOW */}
          <div className="
            absolute
            top-[-120px]
            right-[-120px]
            w-[320px]
            h-[320px]
            bg-[#2DD4BF]/20
            blur-3xl
            rounded-full
          " />

          {/* LEFT */}
          <div className="
            relative
            z-10
            flex
            items-center
            gap-8
          ">

            {/* IMAGE */}
            <div className="
              w-28
              h-28
              md:w-36
              md:h-36
              rounded-3xl
              bg-white/10
              backdrop-blur-md
              border border-white/10
              flex
              items-center
              justify-center
              p-5
              flex-shrink-0
            ">

              <img
                src="/images/services/nuts.png"
                className="
                  w-full
                  h-full
                  object-contain
                  hover:scale-110
                  transition-transform
                  duration-500
                "
              />

            </div>

            {/* TEXT */}
            <div>

              <p className="
                text-[11px]
                uppercase
                tracking-[3px]
                text-[#99F6E4]
                mb-3
              ">
                Premium Partnership
              </p>

              <h2 className="
                text-3xl
                md:text-4xl
                font-bold
                text-white
                leading-tight
              ">
                Need Reliable
                <br />

                Cashew Supply?
              </h2>

              <p className="
                text-slate-300
                mt-4
                leading-relaxed
                max-w-xl
              ">
                Partner with us for premium export-quality
                cashew products backed by sustainable farming
                and dependable supply.
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <div className="relative z-10">

            <Link
              to="/request-quote"
              className="
                inline-flex
                items-center
                justify-center
                bg-white
                text-[#0F172A]
                hover:bg-[#CCFBF1]
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
                shadow-[0_10px_40px_rgba(255,255,255,0.15)]
                hover:scale-[1.03]
                whitespace-nowrap
              "
            >
              Request a Quote →
            </Link>

          </div>

        </div>

      </div>

    </motion.section>
  );
}