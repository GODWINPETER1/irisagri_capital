import { Link } from "react-router-dom";

export default function Partner() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0D9488]" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#2DD4BF]/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-150px] left-[-100px] w-[300px] h-[300px] bg-[#14B8A6]/10 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* LABEL */}
        <div className="
          inline-flex
          items-center
          gap-2
          px-4 py-2
          rounded-full
          bg-white/10
          border border-white/10
          backdrop-blur-md
          mb-6
        ">

          <div className="w-2 h-2 rounded-full bg-[#5EEAD4]" />

          <p className="
            text-[11px]
            uppercase
            tracking-[3px]
            text-slate-200
          ">
            Partnership Opportunities
          </p>

        </div>

        {/* TITLE */}
        <h2 className="
          text-4xl
          md:text-6xl
          font-bold
          leading-tight
          text-white
        ">

          Let’s Grow
          <br />

          <span className="text-[#5EEAD4]">
            Together
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="
          mt-6
          text-lg
          md:text-xl
          text-slate-300
          leading-relaxed
          max-w-2xl
          mx-auto
        ">
          We welcome partnerships, wholesale buyers,
          and global supply inquiries for premium
          export-quality cashew products.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {/* PRIMARY BUTTON */}
          <Link
            to="/request-quote"
            className="
              bg-[#0D9488]
              hover:bg-[#0F766E]
              text-white
              px-8 py-4
              rounded-full
              transition-all
              duration-300
              shadow-[0_10px_40px_rgba(13,148,136,0.35)]
              hover:shadow-[0_20px_60px_rgba(13,148,136,0.45)]
              hover:scale-[1.03]
              font-medium
            "
          >
            Request a Quote →
          </Link>

          {/* SECONDARY BUTTON */}
          <Link
            to="/contact"
            className="
              border
              border-white/20
              bg-white/5
              backdrop-blur-md
              px-8 py-4
              rounded-full
              text-white
              hover:bg-white
              hover:text-[#020617]
              transition-all
              duration-300
              font-medium
            "
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}