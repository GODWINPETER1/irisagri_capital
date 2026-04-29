import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0f3d1c] to-[#166534] text-white">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* IMAGE (UPGRADED) */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg">
          <img
            src="/images/nuts.png"
            className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-xl"
          />
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Work With Us?
          </h2>

          <p className="text-gray-200 mt-3 max-w-md">
            Partner with us for premium cashew products and reliable supply.
          </p>
        </div>

        {/* BUTTON */}
        <Link
          to="/request-quote"
          className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md"
        >
          Request a Quote →
        </Link>

      </div>

    </section>
  );
}