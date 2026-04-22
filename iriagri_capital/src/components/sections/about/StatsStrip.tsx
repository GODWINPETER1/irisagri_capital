import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeUp } from "../../../utils/animations";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return <span>{count}+</span>;
}

export default function StatsStrip() {
  const stats = [
    { value: 1000, label: "Hectares of Farmland" },
    { value: 200, label: "Skilled Workers" },
    { value: 500, label: "Tons Produced Yearly" },
    { value: 15, label: "Countries Exported" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0f3d1c] to-[#166534] text-white py-20">

      <div className="grid md:grid-cols-4 gap-10 text-center max-w-7xl mx-auto px-6">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-4xl md:text-5xl font-bold">
              <Counter value={item.value} />
            </h3>

            <p className="text-gray-200 text-sm md:text-base">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}