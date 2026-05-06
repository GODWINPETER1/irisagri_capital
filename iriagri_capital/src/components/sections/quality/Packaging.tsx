export default function Packaging() {
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
            -top-10
            -right-10
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
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
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
              Packaging & Export
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

            Safe Packaging
            <br />

            <span className="text-[#0D9488]">
              & Export Handling
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
            We ensure safe storage, hygienic packaging,
            and export-ready handling processes that meet
            international quality standards.
          </p>

          {/* FEATURES */}
          <div className="
            grid
            sm:grid-cols-2
            gap-5
            mt-10
          ">

            {[
              "Safe product storage",
              "Clean packaging process",
              "Export-ready handling",
              "Reliable global logistics",
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

      </div>

    </section>
  );
}