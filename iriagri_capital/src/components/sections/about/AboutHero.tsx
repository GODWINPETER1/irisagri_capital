import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/animations";

export default function AboutHero() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl text-white">

            {/* LABEL */}
            <p className="uppercase tracking-widest text-sm mb-3 text-gray-300">
              Our Story
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              About Our Farm
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-lg text-gray-200 leading-relaxed">
              Rooted in tradition and driven by innovation, we cultivate premium
              cashew nuts through sustainable farming practices and a commitment
              to quality.
            </p>

          </div>

        </div>
      </div>

    </motion.section>
  );
}