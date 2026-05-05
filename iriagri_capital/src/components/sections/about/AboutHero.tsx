import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/animations";

export default function AboutHero() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.8 }}
    >
      <section className="relative h-[85vh] flex items-center">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')",
          }}
        />

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-xl text-white">

            {/* LABEL */}
            <p className="text-xs uppercase tracking-[3px] text-gray-300">
              OUR STORY
            </p>

            {/* TITLE */}
            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              About Our Farm
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-200 text-lg leading-relaxed">
              Rooted in tradition and driven by innovation, we cultivate premium
              cashew nuts through sustainable farming practices and a commitment
              to quality.
            </p>

          </div>

        </div>

      </section>
    </motion.div>
  );
}