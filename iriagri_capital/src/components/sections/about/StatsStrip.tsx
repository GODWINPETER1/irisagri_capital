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
    { value: 1000, label: "Acres of Farmland" },
    { value: 200, label: "Skilled Workers" },
    { value: 500, label: "Tons Produced Yearly" },
    { value: 15, label: "Countries Exported" },
  ];

  return (
    <section className="
      bg-gradient-to-r
      from-[#0F172A]
      via-[#111827]
      to-[#0D9488]
      text-white
      py-24
    ">

      <div className="
        grid
        md:grid-cols-4
        gap-10
        text-center
        max-w-7xl
        mx-auto
        px-6
      ">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-3xl
              py-10
              px-6
              hover:bg-white/10
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >

            <h3 className="
              text-5xl
              md:text-6xl
              font-bold
              text-[#5EEAD4]
            ">
              <Counter value={item.value} />
            </h3>

            <p className="
              mt-4
              text-slate-300
              text-sm
              md:text-base
              leading-relaxed
            ">
              {item.label}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}