export default function ExportSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">

      <div className="
        grid
        md:grid-cols-2
        gap-10
        max-w-7xl
        mx-auto
        px-6
        items-center
      ">

        {/* TEXT */}
        <div>

          {/* LABEL */}
          <p className="
            text-sm
            uppercase
            tracking-[3px]
            text-[#0F766E]
          ">
            EXPORT & SUPPLY
          </p>

          {/* TITLE */}
          <h2 className="
            text-4xl
            font-bold
            text-[#0F172A]
            mt-3
            leading-tight
          ">

            Built for{" "}

            <span className="text-[#0D9488]">
              Global Markets
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="
            mt-5
            text-slate-600
            leading-relaxed
          ">
            We ensure reliable supply and logistics
            solutions to meet growing international demand.
          </p>

          {/* FEATURES */}
          <div className="
            grid
            sm:grid-cols-2
            gap-4
            mt-8
          ">

            {[
              "Bulk supply",
              "Safe packaging",
              "Timely delivery",
              "Strong logistics",
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

        </div>

        {/* IMAGE */}
        <div className="
          overflow-hidden
          rounded-2xl
          shadow-[0_20px_60px_rgba(2,6,23,0.08)]
          group
        ">

          <img
            src="/images/export.jpg"
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition-transform
              duration-700
            "
          />

        </div>

      </div>

    </section>
  );
}