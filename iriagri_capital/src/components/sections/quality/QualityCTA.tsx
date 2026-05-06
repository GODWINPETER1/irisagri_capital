import { Link } from "react-router-dom";

export default function QualityCTA() {
  return (
    <section className="py-20 bg-[#F8FAFC] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-r
          from-[#020617]
          via-[#0F172A]
          to-[#0D9488]
          px-8
          md:px-14
          py-14
          text-center
          shadow-[0_25px_80px_rgba(2,6,23,0.18)]
        ">

          {/* TOP GLOW */}
          <div className="
            absolute
            top-[-140px]
            right-[-120px]
            w-[320px]
            h-[320px]
            bg-[#2DD4BF]/20
            blur-3xl
            rounded-full
          " />

          {/* BOTTOM GLOW */}
          <div className="
            absolute
            bottom-[-160px]
            left-[-120px]
            w-[320px]
            h-[320px]
            bg-[#14B8A6]/10
            blur-3xl
            rounded-full
          " />

          {/* CONTENT */}
          <div className="relative z-10 max-w-3xl mx-auto">

            {/* LABEL */}
            <div className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              bg-white/10
              border
              border-white/10
              backdrop-blur-md
              mb-6
            ">

              <div className="w-2 h-2 rounded-full bg-[#5EEAD4]" />

              <p className="
                text-[11px]
                uppercase
                tracking-[3px]
                text-slate-200
                font-medium
              ">
                Premium Partnership
              </p>

            </div>

            {/* TITLE */}
            <h2 className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              leading-tight
              tracking-tight
            ">

              Partner With Us
              <br />

              for Premium
              <span className="text-[#5EEAD4]">
                {" "}Quality Cashew
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="
              mt-6
              text-lg
              text-slate-300
              leading-relaxed
              max-w-2xl
              mx-auto
            ">
              Work with a trusted supplier committed to
              sustainable farming, consistent quality,
              and reliable export-ready supply.
            </p>

            {/* BUTTON */}
            <div className="mt-10">

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-white
                  text-[#020617]
                  hover:bg-[#CCFBF1]
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                  shadow-[0_10px_40px_rgba(255,255,255,0.12)]
                  hover:scale-[1.03]
                "
              >
                Request a Quote →
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}