export default function Process() {
  const steps = [
    { title: "Seedling Preparation", img: "/images/seedling.jpg" },
    { title: "Planting", img: "/images/planting.jpg" },
    { title: "Maintenance", img: "/images/maintain.jpg" },
    { title: "Harvesting", img: "/images/harvest.jpg" },
  ];

  return (
    <section className="py-28 bg-[#F8FAFC] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center">

          <p className="
            text-xs
            uppercase
            tracking-[4px]
            text-[#0F766E]
          ">
            OUR PROCESS
          </p>

          <h2 className="
            text-4xl
            md:text-6xl
            font-bold
            text-[#0F172A]
            mt-4
            leading-tight
          ">
            Our Farming{" "}

            <span className="text-[#0D9488]">
              Process
            </span>

          </h2>

        </div>

        {/* PROCESS GRID */}
        <div className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
          mt-20
        ">

          {steps.map((step, i) => (
            <div
              key={i}
              className="
                group
                bg-white
                rounded-[30px]
                overflow-hidden
                border
                border-slate-100
                shadow-[0_10px_40px_rgba(2,6,23,0.05)]
                hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}
              <div className="
                relative
                overflow-hidden
                h-72
              ">

                <img
                  src={step.img}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

                {/* LIGHT OVERLAY */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#020617]/25
                  via-transparent
                  to-transparent
                " />

              </div>

              {/* CONTENT */}
              <div className="p-7 text-center">

                <h3 className="
                  text-2xl
                  font-semibold
                  text-[#0F172A]
                  group-hover:text-[#0D9488]
                  transition-colors
                  duration-300
                ">
                  {step.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}