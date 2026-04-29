export default function ContactInfo() {
  const items = [
    { title: "Phone", text: "+255 xxx xxx" },
    { title: "Email", text: "info@cashew.com" },
    { title: "Location", text: "Mtwara, Tanzania" },
    { title: "WhatsApp", text: "+255 xxx xxx" },
  ];

  return (
    <section className="py-20 bg-white text-center">

      <p className="text-sm uppercase text-gray-500">
        GET IN TOUCH
      </p>

      <h2 className="text-4xl font-bold text-primary mt-2">
        Contact Information
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mt-10 max-w-7xl mx-auto px-6">
        {items.map((item, i) => (
          <div key={i} className="bg-[#f5f5f5] p-6 rounded-2xl shadow">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
}