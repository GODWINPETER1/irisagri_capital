import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020617]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage: "url('/images/contact.png')",
        }}
      />

      {/* PREMIUM OVERLAY */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#020617]/95
        via-[#020617]/55
        to-transparent
      " />

      {/* GLOW EFFECT */}
      <div className="
        absolute
        bottom-[-220px]
        right-[-180px]
        w-[700px]
        h-[700px]
        bg-[#14B8A6]/20
        blur-3xl
        rounded-full
        z-0
      " />

      {/* SECONDARY GLOW */}
      <div className="
        absolute
        top-[-100px]
        left-[-100px]
        w-[320px]
        h-[320px]
        bg-[#0D9488]/10
        blur-3xl
        rounded-full
        z-0
      " />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl text-white"
          >

            {/* LABEL */}
            {/* <div className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              bg-white/5
              border
              border-white/10
              backdrop-blur-md
              mb-6
            ">

              <div className="w-2 h-2 rounded-full bg-[#5EEAD4]" />

              <p className="
                uppercase
                tracking-[3px]
                text-[11px]
                text-slate-200
              ">
                Contact Us
              </p>

            </div> */}

            {/* TITLE */}
            <h1 className="
              text-5xl
              md:text-7xl
              py-6
              font-bold
              leading-[1.05]
              tracking-tight
            ">

              Let’s Talk About
              <br />

              <span className="text-[#5EEAD4]">
                Your Needs
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="
              mt-2
              text-lg
              md:text-xl
              text-slate-300
              leading-relaxed
              max-w-xl
            ">
              We are here to answer your questions,
              discuss partnerships, and provide
              premium cashew farming solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              {/* WHATSAPP */}
             <a
                href="https://wa.me/255749331388?text=Hello%20IrisAgri%2C%20I%20would%20like%20to%20inquire%20about%20your%20cashew%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-[#0D9488]
                  hover:bg-[#0F766E]
                  text-white
                  px-7 py-4
                  rounded-full
                  transition-all
                  duration-300
                  shadow-[0_10px_40px_rgba(13,148,136,0.35)]
                  hover:shadow-[0_20px_60px_rgba(13,148,136,0.45)]
                  hover:scale-[1.03]
                  font-medium
                "
              >
                Chat on WhatsApp
              </a>

              {/* CALL BUTTON */}
              <a
                href="tel:+255749331388"
                className="
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-md
                  px-7 py-4
                  rounded-full
                  text-white
                  hover:bg-white
                  hover:text-[#020617]
                  transition-all
                  duration-300
                  font-medium
                "
              >
                Call Us Now
              </a>

            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-[#5EEAD4]">
                  Fast
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Response Time
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#5EEAD4]">
                  Global
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Supply Support
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#5EEAD4]">
                  Trusted
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Business Partner
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}