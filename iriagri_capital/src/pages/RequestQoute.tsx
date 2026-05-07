import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function RequestQuote() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    product: "",
    quantity: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError(""); 

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Quote request sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          product: "",
          quantity: "",
          timeline: "",
          message: "",
        });

      } else {
        setError(data.message || "Something went wrong");
      }

    } catch (err) {
      setError("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">

            <p className="text-xs uppercase tracking-widest text-[#0F766E]">
              GET A QUOTE
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3">
              Request a Quote
            </h1>

            <p className="text-slate-600 mt-4">
              Tell us your needs and we’ll provide the best offer.
            </p>

          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="
                md:col-span-2
                bg-white
                p-10
                rounded-3xl
                border
                border-[#CCFBF1]
                shadow-[0_20px_60px_rgba(13,148,136,0.08)]
                space-y-6
              "
            >

              {/* PERSONAL */}
              <div>

                <h3 className="font-semibold text-lg text-[#0F172A] mb-4">
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">

                  <input
                    name="name"
                    value={form.name}
                    placeholder="Full Name"
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-[#CCFBF1]
                      bg-[#F0FDFA]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#14B8A6]
                      focus:ring-4
                      focus:ring-[#14B8A6]/15
                      text-slate-700
                    "
                    onChange={handleChange}
                  />

                  <input
                    name="email"
                    value={form.email}
                    placeholder="Email"
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-[#CCFBF1]
                      bg-[#F0FDFA]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#14B8A6]
                      focus:ring-4
                      focus:ring-[#14B8A6]/15
                      text-slate-700
                    "
                    onChange={handleChange}
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    placeholder="Phone"
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-[#CCFBF1]
                      bg-[#F0FDFA]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#14B8A6]
                      focus:ring-4
                      focus:ring-[#14B8A6]/15
                      text-slate-700
                    "
                    onChange={handleChange}
                  />

                  <input
                    name="company"
                    value={form.company}
                    placeholder="Company (optional)"
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-[#CCFBF1]
                      bg-[#F0FDFA]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#14B8A6]
                      focus:ring-4
                      focus:ring-[#14B8A6]/15
                      text-slate-700
                    "
                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* BUSINESS */}
              <div>

                <h3 className="font-semibold text-lg text-[#0F172A] mb-4">
                  Request Details
                </h3>

                <div className="grid md:grid-cols-2 gap-4">

                  <input
                    name="country"
                    value={form.country}
                    placeholder="Country"
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-[#CCFBF1]
                      bg-[#F0FDFA]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#14B8A6]
                      focus:ring-4
                      focus:ring-[#14B8A6]/15
                      text-slate-700
                    "
                    onChange={handleChange}
                  />

                  <select
                    name="product"
                    value={form.product}
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-[#CCFBF1]
                      bg-[#F0FDFA]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#14B8A6]
                      focus:ring-4
                      focus:ring-[#14B8A6]/15
                      text-slate-700
                    "
                    onChange={handleChange}
                  >
                    <option>Select Product</option>
                    <option>Raw Cashew Nuts</option>
                    <option>Processed Cashew (Future)</option>
                  </select>

                  <input
                    name="quantity"
                    value={form.quantity}
                    placeholder="Quantity (tons/kg)"
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-[#CCFBF1]
                      bg-[#F0FDFA]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#14B8A6]
                      focus:ring-4
                      focus:ring-[#14B8A6]/15
                      text-slate-700
                    "
                    onChange={handleChange}
                  />

                  <select
                    name="timeline"
                    value={form.timeline}
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      border
                      border-[#CCFBF1]
                      bg-[#F0FDFA]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#14B8A6]
                      focus:ring-4
                      focus:ring-[#14B8A6]/15
                      text-slate-700
                    "
                    onChange={handleChange}
                  >
                    <option>Delivery Timeline</option>
                    <option>Immediately</option>
                    <option>1 Month</option>
                    <option>3 Months</option>
                  </select>

                </div>

              </div>

              {/* MESSAGE */}
              <div>

                <textarea
                  name="message"
                  value={form.message}
                  placeholder="Additional details..."
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-[#CCFBF1]
                    bg-[#F0FDFA]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#14B8A6]
                    focus:ring-4
                    focus:ring-[#14B8A6]/15
                    text-slate-700
                    h-32
                  "
                  onChange={handleChange}
                />

              </div>

              {/* SUCCESS */}
              {success && (
                <p className="text-[#0F766E] text-sm">
                  {success}
                </p>
              )}

              {/* ERROR */}
              {error && (
                <p className="text-red-600 text-sm">
                  {error}
                </p>
              )}

              {/* BUTTON */}
              <button
                disabled={loading}
                className="
                  w-full
                  bg-[#14B8A6]
                  hover:bg-[#0F766E]
                  text-white
                  py-4
                  rounded-full
                  text-lg
                  transition-all
                  duration-300
                  disabled:opacity-60
                  shadow-[0_10px_40px_rgba(20,184,166,0.20)]
                  hover:shadow-[0_20px_60px_rgba(20,184,166,0.30)]
                "
              >
                {loading ? "Sending..." : "Submit Request →"}
              </button>

            </form>

            {/* SIDE PANEL */}
            <div className="
              bg-gradient-to-br
              from-[#083344]
              via-[#0F766E]
              to-[#14B8A6]
              text-white
              p-8
              rounded-3xl
              flex
              flex-col
              justify-between
            ">

              <div>

                <h3 className="text-2xl font-bold">
                  Why Choose Us?
                </h3>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>✔ 1000+ hectares of farmland</li>
                  <li>✔ High-quality export products</li>
                  <li>✔ Reliable global supply</li>
                  <li>✔ Sustainable farming methods</li>
                </ul>

              </div>

              <div className="mt-10">

                <p className="text-sm text-teal-50/80">
                  Need urgent help?
                </p>

                <button className="
                  mt-3
                  w-full
                  bg-white
                  text-[#0F766E]
                  py-3
                  rounded-full
                  hover:bg-[#CCFBF1]
                  transition-all
                  duration-300
                  font-semibold
                ">
                  Chat on WhatsApp
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}