import { Link } from "react-router-dom";

export default function ProductsCTA() {
  return (
    <section className="py-20 bg-[#F8FAFC]">

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
          py-12
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
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
            gap-6
          ">

            {/* IMAGE */}
            <div className="
              w-24
              h-24
              md:w-32
              md:h-32
              rounded-3xl
              bg-white/10
              border
              border-white/10
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
              flex-shrink-0
            ">

              <img
                src="/images/products/nuts.png"
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
                Premium Supply
              </p>

              <h2 className="
                text-3xl
                md:text-4xl
                font-bold
                text-white
                leading-tight
              ">
                Looking to Buy Premium
                <br />

                Cashew Nuts in Bulk?
              </h2>

              <p className="
                text-slate-300
                mt-4
                leading-relaxed
                max-w-xl
              ">
                Partner with us for consistent quality,
                sustainable sourcing, and reliable export supply.
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
                whitespace-nowrap
              "
            >
              Request a Quote →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}