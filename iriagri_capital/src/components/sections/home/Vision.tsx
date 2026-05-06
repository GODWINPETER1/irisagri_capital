import { Link } from "react-router-dom";

export default function Vision() {
  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#14B8A6]/10 blur-3xl rounded-full" />

      <div className="grid lg:grid-cols-2 min-h-[650px] relative z-10">

        {/* LEFT CONTENT */}
        <div className="
          flex
          items-center
          px-8
          md:px-16
          py-20
        ">

          <div className="max-w-xl">

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
                Our Vision
              </p>

            </div>

            {/* TITLE */}
            <h2 className="
              text-4xl
              md:text-6xl
              font-bold
              leading-[1.1]
              tracking-tight
              text-[#0F172A]
            ">

              Building the
              <br />

              <span className="text-[#0D9488]">
                Future
              </span>

              {" "}of Cashew

            </h2>

            {/* DESCRIPTION */}
            <p className="
              mt-7
              text-lg
              text-slate-600
              leading-relaxed
              max-w-lg
            ">
              We are expanding into modern processing,
              packaging, and value-added production to
              meet growing international demand.
            </p>

            {/* BUTTON */}
            <div className="mt-10">

              <Link
                to="/quality"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-[#0D9488]
                  hover:bg-[#0F766E]
                  text-white
                  px-7 py-4
                  rounded-full
                  transition-all
                  duration-300
                  shadow-[0_10px_40px_rgba(13,148,136,0.25)]
                  hover:shadow-[0_20px_60px_rgba(13,148,136,0.35)]
                  hover:scale-[1.03]
                  font-medium
                "
              >
                Our Future Plans →
              </Link>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative overflow-hidden">

          <img
            src="/images/home.png"
            className="
              w-full
              h-full
              object-cover
              hover:scale-105
              transition-transform
              duration-700
            "
          />

          {/* IMAGE OVERLAY */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#020617]/40
            via-transparent
            to-transparent
          " />

          {/* FLOATING CARD */}
          <div className="
            absolute
            bottom-6
            left-6
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            rounded-3xl
            px-6 py-5
            text-white
            shadow-xl
            max-w-xs
          ">

            <p className="text-sm text-slate-200">
              Future Expansion
            </p>

            <h3 className="text-2xl font-bold mt-2 leading-snug">
              Processing & Packaging Facilities
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}