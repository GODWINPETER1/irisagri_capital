export default function AboutPreview() {
  return (
    <section className="py-20 grid md:grid-cols-2">

      <div className="p-10">
        <h2 className="text-3xl font-bold text-primary">
          Rooted in Passion.<br />Focused on Quality.
        </h2>

        <p className="mt-4 text-gray-600">
          We deliver world-class raw cashew nuts through sustainable farming.
        </p>

        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full">
          Learn More →
        </button>
      </div>

      <img src="/images/hero4.png" className="w-full h-full object-cover" />

    </section>
  );
}