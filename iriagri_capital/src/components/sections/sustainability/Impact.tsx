export default function CommunityImpact() {
  return (
    <section className="py-24 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <img
          src="/images/sus2.jpg"
          className="
            rounded-[30px]
            shadow-[0_20px_60px_rgba(13,148,136,0.10)]
            border
            border-[#CCFBF1]
          "
        />

        {/* TEXT */}
        <div>

          <p className="text-sm uppercase tracking-[3px] text-[#0F766E]">
            Community Impact
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0F172A]
            mt-3
            leading-tight
          ">

            Supporting Farmers
            <span className="text-[#0D9488]">
              {" "}& Local Communities
            </span>

          </h2>

          <p className="
            mt-6
            text-lg
            text-slate-600
            leading-relaxed
          ">
            We work closely with farming communities
            by promoting sustainable agricultural practices,
            improving livelihoods, and creating long-term
            economic opportunities.
          </p>

        </div>

      </div>

    </section>
  );
}