const products = [
  {
    title: "Processed Cashew Kernels",
    img: "/images/kernel.jpg",
  },
  {
    title: "Packaged Cashew Nuts",
    img: "/images/package.jpg",
  },
  {
    title: "Value-Added Products",
    img: "/images/value.jpg",
  },
];

export default function FutureProducts() {
  return (
    <section className="py-24 bg-white text-center">

      <p className="text-sm uppercase text-gray-500">
        FUTURE PRODUCTS
      </p>

      <h2 className="text-4xl font-bold text-primary mt-2">
        More Goodness, Coming Soon
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto px-6">
        {products.map((p, i) => (
          <div key={i} className="bg-[#f5f5f5] rounded-2xl shadow">

            <div className="relative">
              <img src={p.img} className="rounded-t-2xl h-48 w-full object-cover" />

              <span className="absolute top-3 right-3 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                High quality products prepared for premium markets.
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}