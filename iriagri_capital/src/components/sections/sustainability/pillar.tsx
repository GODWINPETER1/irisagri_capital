const pillars = [
  "Sustainable Farming",
  "Farmer Empowerment",
  "Environmental Protection",
  "Export Quality Standards",
];

export default function SustainabilityPillars() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[3px] text-[#0F766E]">
            Our Commitment
          </p>

          <h2 className="
            text-4xl
            font-bold
            text-[#0F172A]
            mt-3
          ">

            Sustainability
            <span className="text-[#0D9488]">
              {" "}Pillars
            </span>

          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-14">

          {pillars.map((item, i) => (
            <div
              key={i}
              className="
                bg-[#F8FAFC]
                border
                border-[#CCFBF1]
                p-8
                rounded-3xl
                text-center
                shadow-[0_10px_40px_rgba(13,148,136,0.06)]
                hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <h3 className="
                text-lg
                font-semibold
                text-[#0F172A]
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