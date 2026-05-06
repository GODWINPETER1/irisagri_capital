export default function MainProduct() {
  return (
    <section className="py-28 bg-[#F8FAFC] overflow-hidden">

      <div className="
        grid
        md:grid-cols-2
        gap-16
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
            w-56
            h-56
            bg-[#14B8A6]/15
            blur-3xl
            rounded-full
          " />

          {/* IMAGE CARD */}
          <div className="
            relative
            overflow-hidden
            rounded-[32px]
            shadow-[0_25px_80px_rgba(2,6,23,0.12)]
            group
          ">

            <img
              src="/images/raw.jpg"
              className="
                w-full
                h-[520px]
                object-cover
                group-hover:scale-105
                transition-transform
                duration-700
              "
            />

            {/* IMAGE OVERLAY */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#020617]/35
              via-transparent
              to-transparent
            " />

          </div>

        </div>

        {/* TEXT SIDE */}
        <div>

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
              Our Main Product
            </p>

          </div>

          {/* TITLE */}
          <h2 className="
            text-4xl
            md:text-6xl
            font-bold
            text-[#0F172A]
            leading-tight
            tracking-tight
          ">

            Raw
            <br />

            <span className="text-[#0D9488]">
              Cashew Nuts
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
            Sourced from over 1000+ Acres of farmland and
            handled with strict quality control to meet
            premium export-grade standards.
          </p>

          {/* FEATURES */}
          <div className="
            grid
            sm:grid-cols-2
            gap-5
            mt-10
          ">

            {[
              "High quality and freshly harvested",
              "Proper grading for global standards",
              "Export ready with bulk supply",
              "Naturally dried and sourced",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex
                  items-start
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
                  w-8 h-8
                  rounded-full
                  bg-[#0D9488]/10
                  flex
                  items-center
                  justify-center
                  text-[#0D9488]
                  text-sm
                  font-bold
                  flex-shrink-0
                ">
                  ✓
                </div>

                {/* TEXT */}
                <p className="
                  text-slate-700
                  text-sm
                  leading-relaxed
                  font-medium
                ">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}