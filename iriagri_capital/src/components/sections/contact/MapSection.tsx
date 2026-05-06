export default function MapSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div>

          <p className="text-sm uppercase tracking-[3px] text-[#0F766E]">
            OUR LOCATION
          </p>

          <h2 className="text-3xl font-bold text-[#0F172A] mt-2">
            Visit
            <span className="text-[#0D9488]">
              {" "}Our Farm
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            We are located in Mtwara Region, where our farms thrive.
          </p>

          <button className="
            mt-6
            bg-[#14B8A6]
            hover:bg-[#0F766E]
            text-white
            px-6
            py-3
            rounded-full
            transition-all
            duration-300
            shadow-[0_10px_40px_rgba(20,184,166,0.20)]
            hover:shadow-[0_20px_60px_rgba(20,184,166,0.30)]
          ">
            Get Directions →
          </button>

        </div>
        <iframe className="rounded-2xl border border-[#CCFBF1] shadow-[0_20px_60px_rgba(13,148,136,0.08)]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7939.550557075083!2d34.83023285865783!3d-5.745460751480708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184cddb8df3e276b%3A0xa0d4729ee2b16958!2sManyoni!5e0!3m2!1sen!2stz!4v1778067735278!5m2!1sen!2stz" width="600" height="450"  loading="lazy" ></iframe>
        

      </div>

    </section>
  );
}
