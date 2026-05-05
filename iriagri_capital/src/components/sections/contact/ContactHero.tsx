import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage: "url('/images/contact.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            {/* LABEL */}
            <p className="uppercase tracking-widest text-sm mb-3 text-gray-300">
              Contact Us
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Let’s Talk About
              <br />
              Your Needs
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-lg text-gray-200">
              We are here to answer your questions, discuss partnerships,
              and provide the best cashew farming solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="https://wa.me/255XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary px-6 py-3 rounded-full text-white hover:bg-green-800 transition"
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