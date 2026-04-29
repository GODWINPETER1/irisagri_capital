export default function ExportSection() {
  return (
    <section className="py-20 bg-white">

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 items-center">

        {/* TEXT */}
        <div>
          <p className="text-sm uppercase text-gray-500">
            EXPORT & SUPPLY
          </p>

          <h2 className="text-4xl font-bold text-primary mt-2">
            Built for Global Markets
          </h2>

          <p className="mt-4 text-gray-600">
            We ensure reliable supply and logistics for global demand.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Bulk supply</li>
            <li>✔ Safe packaging</li>
            <li>✔ Timely delivery</li>
            <li>✔ Strong logistics</li>
          </ul>
        </div>

        {/* IMAGE */}
        <img
          src="/images/export.jpg"
          className="rounded-2xl"
        />

      </div>
    </section>
  );
}