export default function MainProduct() {
  return (
    <section className="py-20 bg-[#f5f5f5]">

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 items-center">

        {/* IMAGE */}
        <img
          src="/images/raw.jpg"
          className="rounded-2xl"
        />

        {/* TEXT */}
        <div>
          <p className="text-sm uppercase text-gray-500">
            OUR MAIN PRODUCT
          </p>

          <h2 className="text-4xl font-bold text-primary mt-2">
            Raw Cashew Nuts
          </h2>

          <p className="mt-4 text-gray-600">
            Sourced from over 1000+ hectares of farms and processed
            with strict quality control for export-grade standards.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ High quality and freshly harvested</li>
            <li>✔ Proper grading for global standards</li>
            <li>✔ Export ready with bulk supply</li>
            <li>✔ Naturally dried and sourced</li>
          </ul>
        </div>

      </div>
    </section>
  );
}