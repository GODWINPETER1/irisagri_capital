import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#14B8A6]/10 blur-3xl rounded-full" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="
          max-w-7xl
          mx-auto
          px-6
          py-20
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-14
          border-b
          border-white/10
        ">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div className="
                w-12 h-12
                rounded-2xl
                bg-[#0D9488]
                flex
                items-center
                justify-center
                shadow-[0_10px_40px_rgba(13,148,136,0.35)]
              ">

                <span className="text-xl font-bold">
                  I
                </span>

              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Irisagri 
                </h2>

                <p className="text-sm text-slate-400">
                  Premium Cashew Export
                </p>
              </div>

            </div>

            <p className="
              mt-6
              text-slate-400
              leading-relaxed
              text-sm
              max-w-sm
            ">
              Premium cashew farming powered by sustainable
              agriculture, modern production, and reliable
              global supply solutions.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="
                      w-11 h-11
                      rounded-2xl
                      bg-white/5
                      border border-white/10
                      flex
                      items-center
                      justify-center
                      text-slate-300
                      hover:bg-[#0D9488]
                      hover:text-white
                      hover:border-[#0D9488]
                      transition-all
                      duration-300
                    "
                  >
                    <Icon />
                  </a>
                )
              )}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Products", path: "/products" },
                { name: "Quality", path: "/quality" },
              ].map((link, i) => (
                <li key={i}>

                  <Link
                    to={link.path}
                    className="
                      text-slate-400
                      hover:text-[#5EEAD4]
                      transition-colors
                      duration-300
                    "
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-lg font-semibold mb-6 text-white">
              Our Services
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>Cashew Farming</li>
              <li>Seedling Preparation</li>
              <li>Harvesting</li>
              <li>Farm Maintenance</li>
              <li>Export Supply</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact
            </h3>

            <div className="space-y-5 text-sm">

              <div>
                <p className="text-slate-500 mb-1">
                  Email
                </p>

                <p className="text-slate-300">
                  info@irisagri.co.tz
                </p>
              </div>

              <div>
                <p className="text-slate-500 mb-1">
                  Phone
                </p>

                <p className="text-slate-300">
                  +255 757 861 117
                </p>
              </div>

              <div>
                <p className="text-slate-500 mb-1">
                  Location
                </p>

                <p className="text-slate-300">
                  Manyoni Singida, Tanzania
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="
          max-w-7xl
          mx-auto
          px-6
          py-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        ">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Irisagri. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">

            <a href="#" className="hover:text-[#5EEAD4] transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#5EEAD4] transition">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}