export default function ContactInfo() {
  const items = [
    { title: "Phone", text: "+255 757 861 117" },
    { title: "Email", text: "info@irisagri.co.tz" },
    { title: "Location", text: "Manyoni Singida, Tanzania" },
    { title: "WhatsApp", text: "+255 xxx xxx" },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] text-center">

      <p className="text-sm uppercase tracking-[3px] text-[#0F766E]">
        GET IN TOUCH
      </p>

      <h2 className="text-4xl font-bold text-[#0F172A] mt-2">
        Contact
        <span className="text-[#0D9488]">
          {" "}Information
        </span>
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mt-10 max-w-7xl mx-auto px-6">

        {items.map((item, i) => (
          <div
            key={i}
            className="
              bg-white
              p-6
              rounded-2xl
              border
              border-[#CCFBF1]
              shadow-[0_10px_40px_rgba(13,148,136,0.06)]
              hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            <h3 className="
              font-semibold
              text-[#0F172A]
            ">
              {item.title}
            </h3>

            <p className="
              text-slate-600
              mt-2
              text-sm
            ">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}