// QualityControl.tsx
export default function QualityControl() {
  const items = [
    "Moisture control",
    "Sorting & grading",
    "Inspection",
    "Consistency checks",
  ];

  return (
    <section className="py-24 bg-white text-center">

      <h2 className="text-4xl font-bold text-primary">
        Quality Control System
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto px-6">

        {items.map((item, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl">
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}