import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative h-[85vh] w-full">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/images/contact.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-white"
          >
            {/* LABEL */}
            <p className="text-xs uppercase tracking-widest text-gray-300">
              CONTACT US
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
              Let’s Talk About
              <br />
              Your Needs
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-200 leading-relaxed">
              We are here to answer your questions, discuss partnerships,
              and provide the best cashew farming solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="https://wa.me/255XXXXXXXXX"
                target="_blank"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:+255XXXXXXXXX"
                className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Call Us Now
              </a>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}