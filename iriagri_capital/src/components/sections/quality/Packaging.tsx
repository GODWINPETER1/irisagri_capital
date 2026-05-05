// Packaging.tsx
export default function Packaging() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-center">

        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
          className="rounded-2xl shadow"
        />

        <div>
          <h2 className="text-4xl font-bold text-primary">
            Packaging & Export
          </h2>

          <p className="mt-4 text-gray-600">
            We ensure safe storage, clean packaging, and export-ready handling.
          </p>
        </div>

      </div>
    </section>
  );
}