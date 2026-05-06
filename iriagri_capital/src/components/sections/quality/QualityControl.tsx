export default function QualityControl() {
  const items = [
    "Moisture control",
    "Sorting & grading",
    "Inspection",
    "Consistency checks",
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden text-center">

      <div className="max-w-7xl mx-auto px-6">

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
            Quality Assurance
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

          Quality Control
          <span className="text-[#0D9488]">
            {" "}System
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="
          mt-5
          text-lg
          text-slate-600
          leading-relaxed
          max-w-2xl
          mx-auto
        ">
          Our quality assurance process ensures every
          product meets strict international standards
          before reaching the market.
        </p>

        {/* GRID */}
        <div className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          mt-14
        ">

          {items.map((item, i) => (
            <div
              key={i}
              className="
                group
                bg-white
                rounded-[28px]
                border
                border-slate-100
                p-8
                shadow-[0_10px_40px_rgba(2,6,23,0.05)]
                hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >

              {/* ICON */}
              <div className="
                w-14
                h-14
                mx-auto
                rounded-2xl
                bg-[#0D9488]/10
                text-[#0D9488]
                flex
                items-center
                justify-center
                text-xl
                font-bold
                group-hover:bg-[#0D9488]
                group-hover:text-white
                transition-all
                duration-300
              ">
                ✓
              </div>

              {/* TITLE */}
              <h3 className="
                mt-6
                text-lg
                font-semibold
                text-[#0F172A]
                group-hover:text-[#0D9488]
                transition-colors
                duration-300
              ">
                {item}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}