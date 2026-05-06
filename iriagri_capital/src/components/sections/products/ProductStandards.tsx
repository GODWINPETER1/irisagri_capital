export default function ProductStandards() {
  const items = [
    "Premium Grading",
    "Quality Control",
    "Sustainable Sourcing",
    "Export Standards",
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] text-center">

      {/* HEADER */}
      <p className="
        text-sm
        uppercase
        tracking-[3px]
        text-[#0F766E]
      ">
        QUALITY YOU CAN TRUST
      </p>

      <h2 className="
        text-4xl
        font-bold
        text-[#0F172A]
        mt-3
      ">
        Our Product{" "}

        <span className="text-[#0D9488]">
          Standards
        </span>

      </h2>

      {/* GRID */}
      <div className="
        grid
        md:grid-cols-4
        gap-8
        mt-12
        max-w-7xl
        mx-auto
        px-6
      ">

        {items.map((item, i) => (
          <div
            key={i}
            className="
              bg-white
              rounded-2xl
              border
              border-slate-100
              p-8
              shadow-[0_10px_40px_rgba(2,6,23,0.05)]
              hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
              hover:-translate-y-2
              transition-all
              duration-500
              group
            "
          >

            {/* ICON */}
            <div className="
              w-14
              h-14
              bg-[#0D9488]/10
              text-[#0D9488]
              rounded-full
              flex
              items-center
              justify-center
              mx-auto
              mb-5
              text-lg
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

    </section>
  );
}