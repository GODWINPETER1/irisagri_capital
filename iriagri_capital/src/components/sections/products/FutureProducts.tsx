const products = [
  {
    title: "Processed Cashew Kernels",
    img: "/images/kernel.jpg",
  },
  {
    title: "Packaged Cashew Nuts",
    img: "/images/package.jpg",
  },
  {
    title: "Value-Added Products",
    img: "/images/value.jpg",
  },
];

export default function FutureProducts() {
  return (
    <section className="py-24 bg-[#F8FAFC] text-center">

      {/* HEADER */}
      <p className="
        text-sm
        uppercase
        tracking-[3px]
        text-[#0F766E]
      ">
        FUTURE PRODUCTS
      </p>

      <h2 className="
        text-4xl
        font-bold
        text-[#0F172A]
        mt-3
      ">
        More Goodness,
        <span className="text-[#0D9488]">
          {" "}Coming Soon
        </span>
      </h2>

      {/* GRID */}
      <div className="
        grid
        md:grid-cols-3
        gap-8
        mt-12
        max-w-7xl
        mx-auto
        px-6
      ">

        {products.map((p, i) => (
          <div
            key={i}
            className="
              bg-white
              rounded-2xl
              overflow-hidden
              border
              border-slate-100
              shadow-[0_10px_40px_rgba(2,6,23,0.05)]
              hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
              hover:-translate-y-2
              transition-all
              duration-500
              group
            "
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={p.img}
                className="
                  rounded-t-2xl
                  h-48
                  w-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

              {/* BADGE */}
              <span className="
                absolute
                top-3
                right-3
                bg-[#0D9488]
                text-white
                text-xs
                px-3
                py-1
                rounded-full
                shadow-md
              ">
                Coming Soon
              </span>

            </div>

            {/* CONTENT */}
            <div className="p-5 text-left">

              <h3 className="
                font-semibold
                text-[#0F172A]
                group-hover:text-[#0D9488]
                transition-colors
                duration-300
              ">
                {p.title}
              </h3>

              <p className="
                text-sm
                text-slate-600
                mt-2
                leading-relaxed
              ">
                High quality products prepared for premium markets.
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}