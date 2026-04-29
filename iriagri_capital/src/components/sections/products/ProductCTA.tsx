export default function ProductsCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0f3d1c] to-[#166534] text-white">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <img src="/images/products/nuts.png" className="w-32" />

        <div>
          <h2 className="text-3xl font-bold">
            Looking to buy premium cashew nuts in bulk?
          </h2>
          <p className="text-gray-200 mt-2">
            Partner with us for consistent quality and supply.
          </p>
        </div>

        <button className="bg-white text-primary px-6 py-3 rounded-full">
          Request a Quote →
        </button>

      </div>

    </section>
  );
}