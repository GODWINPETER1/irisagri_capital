export default function Process() {
  const steps = [
    { title: "Seedling Preparation", img: "/images/seedling.jpg" },
    { title: "Planting", img: "/images/planting.jpg" },
    { title: "Maintenance", img: "/images/maintain.jpg" },
    { title: "Harvesting", img: "/images/harvest.jpg" },
  ];

  return (
    <section className="py-28 bg-[#f3efe9] text-center">

      <p className="text-xs uppercase tracking-widest text-gray-500">
        OUR PROCESS
      </p>

      <h2 className="text-4xl font-bold text-primary mt-3">
        Our Farming Process
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16">

        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">

            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow">
              <img src={step.img} className="w-full h-full object-cover" />
            </div>

            <p className="mt-4 font-semibold">{step.title}</p>

          </div>
        ))}

      </div>
    </section>
  );
}