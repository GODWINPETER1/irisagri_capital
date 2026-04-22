import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/hero1.png",
    title: "Growing Quality, Nourishing the Future",
    desc: "Over 1000 hectares of premium cashew farming with sustainable practices.",
  },
  {
    image: "/images/hero2.png",
    title: "Premium Cashew Farming for Global Markets",
    desc: "We deliver high-quality cashew nuts for export and supply.",
  },
  {
    image: "/images/hero3.png",
    title: "Sustainable Agriculture You Can Trust",
    desc: "Advanced farming techniques ensuring consistent quality yield.",
  },
];

export default function Hero() {
  return (
    <section className="h-screen relative">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-screen bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-7xl mx-auto px-6">

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <p className="uppercase tracking-widest text-sm mb-3 text-gray-200">
                    Sustainable Cashew Farming
                  </p>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title}
                    <br />
                  </h1>

                  <p className="mt-5 text-lg text-gray-200">
                    {slide.desc}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-4 mt-8">

                    <button className="bg-primary hover:bg-green-800 px-6 py-3 rounded-full text-white font-medium transition">
                      Our Services →
                    </button>

                    <button className="border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition">
                      Learn More →
                    </button>

                  </div>
                </motion.div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SCROLL INDICATOR */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white text-2xl cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
              <FaChevronDown />
            </motion.div>

          </div>

    </section>
  );
}