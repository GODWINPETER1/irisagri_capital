import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const services = [
  "Cashew Farming (1000+ Hectares)",
  "Seedling Preparation (Naliendele)",
  "Harvesting",
  "Pruning",
  "Farm Maintenance",
  "Pest Control (Farmigation)"
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="h-[60vh] bg-secondary text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 shadow rounded-xl"
            >
              <h3 className="text-lg font-semibold text-primary">{s}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-primary">Our Process</h2>
        <p className="mt-4 text-gray-600">
          From planting to harvesting, we follow a structured workflow.
        </p>
      </section>

      {/* Capability */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-primary">
          Farm Capability
        </h2>
        <p className="mt-4 text-gray-600">
          Large-scale production with modern agricultural techniques.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold">Work With Us</h2>
      </section>

      {/* <Footer /> */}
    </>
  );
}