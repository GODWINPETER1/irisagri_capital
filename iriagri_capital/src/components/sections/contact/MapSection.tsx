export default function MapSection() {
  return (
    <section className="py-20 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div>
          <p className="text-sm uppercase text-gray-500">
            OUR LOCATION
          </p>

          <h2 className="text-3xl font-bold text-primary mt-2">
            Visit Our Farm
          </h2>

          <p className="mt-4 text-gray-600">
            We are located in Mtwara Region, where our farms thrive.
          </p>

          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full">
            Get Directions →
          </button>
        </div>

        {/* MAP IMAGE */}
        <img
          src="/images/contact/map.jpg"
          className="rounded-2xl"
        />

      </div>
    </section>
  );
}