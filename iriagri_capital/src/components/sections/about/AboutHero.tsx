import { motion } from "framer-motion"
import { fadeUp } from "../../../utils/animations";
export default function AboutHero() {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.8}}>
         <section
      className="h-[75vh] bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: "url('/images/about/hero.jpg')" }}
    >
      {/* Gradient Overlay (better than flat black) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        <p className="text-xs uppercase tracking-[3px] text-gray-300">
          OUR STORY
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-3 leading-tight">
          About Us
        </h1>

        <p className="mt-5 max-w-lg text-gray-200 text-lg leading-relaxed">
          Rooted in tradition. Growing for the future. We produce premium cashew
          nuts through sustainable and modern farming practices.
        </p>

      </div>
    </section>
    </motion.div>
    
  );
}