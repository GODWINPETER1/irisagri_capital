import { motion } from "framer-motion";
import { FaSeedling, FaLeaf, FaBug, FaTractor, FaCut } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";

const services = [
  { title: "Farming", icon: <GiFruitTree /> },
  { title: "Seedlings", icon: <FaSeedling /> },
  { title: "Harvesting", icon: <FaLeaf /> },
  { title: "Pruning", icon: <FaCut /> },
  { title: "Pest Control", icon: <FaBug /> },
  { title: "Farm Maintenance", icon: <FaTractor /> },
];

export default function ServicesStats() {
  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">

        {/* LEFT */}
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            What We Do
          </p>

          <h2 className="text-4xl font-bold text-teal-600 mt-2">
            Our Core Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer group"
              >
                {/* ICON */}
                <div className="text-3xl text-teal-500 mb-3 flex justify-center group-hover:scale-110 transition">
                  {s.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-gray-800">
                  {s.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-8">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition">
              View All Services →
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-gradient-to-br from-teal-700 to-teal-500 text-white rounded-3xl p-10 flex flex-col justify-between shadow-lg">

          <div>
            <h3 className="text-6xl font-bold">1000+</h3>
            <p className="mt-2 text-lg">Hectares</p>
            <p className="text-sm text-gray-100">
              Of productive cashew farmland
            </p>
          </div>

          <img
            src="/images/image1.png"
            className="mt-8 rounded-2xl object-cover h-[200px]"
          />

        </div>

      </div>
    </section>
  );
}