import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#083344] via-[#0F766E] to-[#14B8A6] text-white">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* IMAGE */}
        <div className="
          bg-white/10
          border
          border-white/10
          backdrop-blur-md
          p-4
          rounded-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        ">
          <img
            src="/images/nuts.png"
            className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-xl"
          />
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">

          <p className="text-[#CCFBF1] uppercase tracking-[3px] text-sm">
            Premium Partnership
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Ready to Work With Us?
          </h2>

          <p className="text-teal-50/80 mt-3 max-w-md">
            Partner with us for premium cashew products and reliable supply.
          </p>

        </div>

        {/* BUTTON */}
        <Link
          to="/request-quote"
          className="
            bg-white
            text-[#0F766E]
            px-8
            py-3
            rounded-full
            font-semibold
            hover:bg-[#CCFBF1]
            hover:scale-105
            transition-all
            duration-300
            shadow-[0_10px_40px_rgba(255,255,255,0.12)]
          "
        >
          Request a Quote →
        </Link>

      </div>

    </section>
  );
}