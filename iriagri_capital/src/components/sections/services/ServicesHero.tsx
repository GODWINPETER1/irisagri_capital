import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="grid md:grid-cols-2 min-h-[80vh]">

      {/* LEFT SIDE */}
      <div className="flex items-center bg-[#f3f4f2] px-8 md:px-16 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          {/* LABEL */}
          <p className="text-xs uppercase tracking-widest text-gray-500">
            OUR SERVICES
          </p>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-4 leading-tight">
            Comprehensive
            <br />
            Cashew Farming
            <br />
            Solutions
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            From quality seedlings to careful harvesting, we provide end-to-end
            services for sustainable and productive cashew farming.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* PRIMARY */}
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-800 transition">
              Explore Services ↓
            </button>

            {/* OUTLINE */}
            <button className="border border-secondary text-secondary px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition">
              Request a Quote →
            </button>

          </div>
        </motion.div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div
        className="min-h-[400px] md:min-h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/services/hero.jpg')",
        }}
      />

    </section>
  );
}