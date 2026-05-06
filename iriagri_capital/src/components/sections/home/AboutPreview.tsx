export default function AboutPreview() {
  return (
    <section className="grid md:grid-cols-2 bg-[#F8FAFC]">

      {/* LEFT */}
      <div className="flex items-center px-10 md:px-16 py-20">

        <div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#0F172A]">
            Rooted in Passion.
            <br />

            <span className="text-[#0D9488]">
              Focused on Quality.
            </span>
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-lg">
            We deliver world-class raw cashew nuts through sustainable farming.
          </p>

          <button
            className="
              mt-8
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
            Learn More →
          </button>

        </div>

      </div>

      {/* RIGHT */}
      <div className="relative overflow-hidden">

        <img
          src="/images/hero4.png"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/30 to-transparent" />

      </div>

    </section>
  );
}