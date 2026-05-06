import {
  FaLeaf,
  FaAward,
  FaTruck,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Sustainable Farming",
    desc: "Eco-friendly agriculture practices",
  },
  {
    icon: <FaAward />,
    title: "Premium Quality",
    desc: "High-grade cashew nuts",
  },
  {
    icon: <FaTruck />,
    title: "Reliable Supply",
    desc: "Consistent delivery",
  },
  {
    icon: <FaChartLine />,
    title: "Future Ready",
    desc: "Expanding into processing",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-200 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, i) => (
            <div
              key={i}
              className="
                group
                relative
                bg-white/80
                backdrop-blur-md
                border border-white
                rounded-3xl
                p-8
                text-center
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
              "
            >

              {/* GLOW */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#14B8A6]/0
                to-[#14B8A6]/5
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
              " />

              {/* ICON */}
              <div
                className="
                  relative
                  z-10
                  w-16 h-16
                  mx-auto
                  rounded-2xl
                  bg-[#0D9488]/10
                  flex
                  items-center
                  justify-center
                  text-3xl
                  text-[#0D9488]
                  transition-all
                  duration-500
                  group-hover:bg-[#0D9488]
                  group-hover:text-white
                  group-hover:scale-110
                "
              >
                {feature.icon}
              </div>

              {/* TITLE */}
              <h4 className="
                relative
                z-10
                mt-6
                text-xl
                font-semibold
                text-[#0F172A]
              ">
                {feature.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="
                relative
                z-10
                mt-3
                text-slate-500
                leading-relaxed
                text-sm
              ">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}