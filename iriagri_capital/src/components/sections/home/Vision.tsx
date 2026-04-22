export default function Vision() {
  return (
    <section className="grid md:grid-cols-2">

      <div className="p-10">
        <h2 className="text-3xl font-bold text-primary">
          Building the Future of Cashew
        </h2>

        <p className="mt-4 text-gray-600">
          We are expanding into processing and packaging.
        </p>

        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full">
          Our Future Plans →
        </button>
      </div>

      <img src="/images/factory.jpg" className="w-full h-full object-cover" />

    </section>
  );
}