import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optional: prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            className={`font-bold text-lg transition ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Irisagri 
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden md:flex gap-8 text-sm font-medium transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/quality"> Quality </Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* DESKTOP CTA */}
          <Link
            to="/request-quote"
            className={`hidden md:block px-5 py-2 rounded-full transition ${
              scrolled
                ? "bg-primary text-white"
                : "bg-white text-black"
            }`}
          >
            Request Quote →
          </Link>

          {/* HAMBURGER */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <FaBars className={scrolled ? "text-black" : "text-white"} />
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">

          {/* CLOSE */}
          <div className="flex justify-end">
            <FaTimes
              size={22}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* LINKS */}
          <nav className="mt-10 flex flex-col gap-6 text-lg font-medium">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link to="/quality" onClick={() => setOpen(false)}>Quality</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>

          {/* MOBILE CTA */}
          <Link
            to="/request-quote"
            onClick={() => setOpen(false)}
            className="mt-10 block text-center bg-primary text-white py-3 rounded-full"
          >
            Request Quote →
          </Link>

        </div>
      </div>
    </>
  );
}