export default function ProductStandards() {
  const items = [
    "Premium Grading",
    "Quality Control",
    "Sustainable Sourcing",
    "Export Standards",
  ];

  return (
    <section className="py-20 bg-[#f3efe9] text-center">

      <p className="text-sm uppercase text-gray-500">
        QUALITY YOU CAN TRUST
      </p>

      <h2 className="text-4xl font-bold text-primary mt-2">
        Our Product Standards
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto px-6">
        {items.map((item, i) => (
          <div key={i}>
            <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h3 className="font-semibold">{item}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}