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

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <Navbar />

      <section className="py-24 bg-[#f8f8f8]">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              GET A QUOTE
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-primary mt-3">
              Request a Quote
            </h1>

            <p className="text-gray-600 mt-4">
              Tell us your needs and we’ll provide the best offer.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-2 bg-white p-10 rounded-3xl shadow space-y-6"
            >
              {/* PERSONAL */}
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <input name="name" placeholder="Full Name" className="input" onChange={handleChange} />
                  <input name="email" placeholder="Email" className="input" onChange={handleChange} />
                  <input name="phone" placeholder="Phone" className="input" onChange={handleChange} />
                  <input name="company" placeholder="Company (optional)" className="input" onChange={handleChange} />
                </div>
              </div>

              {/* BUSINESS */}
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Request Details
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <input name="country" placeholder="Country" className="input" onChange={handleChange} />

                  <select name="product" className="input" onChange={handleChange}>
                    <option>Select Product</option>
                    <option>Raw Cashew Nuts</option>
                    <option>Processed Cashew (Future)</option>
                  </select>

                  <input name="quantity" placeholder="Quantity (tons/kg)" className="input" onChange={handleChange} />

                  <select name="timeline" className="input" onChange={handleChange}>
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
                  placeholder="Additional details..."
                  className="input h-32"
                  onChange={handleChange}
                />
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-full text-lg hover:bg-green-800 transition">
                Submit Request →
              </button>
            </form>

            {/* SIDE PANEL */}
            <div className="bg-primary text-white p-8 rounded-3xl flex flex-col justify-between">

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
                <p className="text-sm text-gray-200">
                  Need urgent help?
                </p>

                <button className="mt-3 w-full bg-white text-primary py-3 rounded-full">
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