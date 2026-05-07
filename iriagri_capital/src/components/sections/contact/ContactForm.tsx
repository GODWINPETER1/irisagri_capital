import { useState } from "react";

export default function ContactForm() {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // HANDLE INPUT
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully!");

        setForm({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
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
    <section className="py-28 bg-[#F8FAFC] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        left-[-120px]
        top-[20%]
        w-[320px]
        h-[320px]
        bg-[#14B8A6]/10
        blur-3xl
        rounded-full
        pointer-events-none
      " />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* CONTAINER */}
        <div className="
          grid
          md:grid-cols-2
          gap-12
          bg-white
          border
          border-[#CCFBF1]
          rounded-[36px]
          overflow-hidden
          shadow-[0_25px_80px_rgba(13,148,136,0.08)]
        ">

          {/* LEFT SIDE */}
          <div className="
            relative
            bg-gradient-to-br
            from-[#083344]
            via-[#0F766E]
            to-[#14B8A6]
            p-10
            md:p-14
            text-white
            overflow-hidden
          ">

            {/* GLOW */}
            <div className="
              absolute
              bottom-[-120px]
              right-[-120px]
              w-[280px]
              h-[280px]
              bg-[#5EEAD4]/20
              blur-3xl
              rounded-full
            " />

            <div className="relative z-10 flex flex-col justify-center h-full">

              {/* LABEL */}
              <div className="
                inline-flex
                items-center
                gap-2
                px-4 py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-md
                mb-6
                w-fit
              ">

                <div className="w-2 h-2 rounded-full bg-[#99F6E4]" />

                <p className="
                  text-[11px]
                  uppercase
                  tracking-[3px]
                  text-slate-100
                  font-medium
                ">
                  Send Us A Message
                </p>

              </div>

              {/* TITLE */}
              <h2 className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
                tracking-tight
              ">

                We’d Love to
                <br />

                <span className="text-[#99F6E4]">
                  Hear From You
                </span>

              </h2>

              {/* DESCRIPTION */}
              <p className="
                mt-6
                text-teal-50/80
                leading-relaxed
                max-w-md
              ">
                Fill out the form and our team will get
                back to you as soon as possible with
                the right support and information.
              </p>

              {/* CONTACT CARDS */}
              <div className="space-y-4 mt-10">

                <div className="
                  bg-white/10
                  border
                  border-white/10
                  backdrop-blur-md
                  rounded-2xl
                  px-5
                  py-4
                ">
                  <p className="text-sm text-teal-100/70">
                    Email Address
                  </p>

                  <p className="text-white font-medium mt-1">
                    info@irisagri.co.tz
                  </p>
                </div>

                <div className="
                  bg-white/10
                  border
                  border-white/10
                  backdrop-blur-md
                  rounded-2xl
                  px-5
                  py-4
                ">
                  <p className="text-sm text-teal-100/70">
                    Business Support
                  </p>

                  <p className="text-white font-medium mt-1">
                    Fast & Reliable Response
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* FORM SIDE */}
          <form
            onSubmit={handleSubmit}
            className="p-10 md:p-14 space-y-6"
          >

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="
                  text-sm
                  font-medium
                  text-[#134E4A]
                ">
                  Full Name *
                </label>

                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="
                    mt-2
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-[#CCFBF1]
                    bg-[#F0FDFA]
                    focus:border-[#14B8A6]
                    focus:ring-4
                    focus:ring-[#14B8A6]/15
                    outline-none
                    transition-all
                  "
                />
              </div>

              <div>
                <label className="
                  text-sm
                  font-medium
                  text-[#134E4A]
                ">
                  Email Address *
                </label>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    mt-2
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-[#CCFBF1]
                    bg-[#F0FDFA]
                    focus:border-[#14B8A6]
                    focus:ring-4
                    focus:ring-[#14B8A6]/15
                    outline-none
                    transition-all
                  "
                />
              </div>

            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="
                  text-sm
                  font-medium
                  text-[#134E4A]
                ">
                  Phone Number *
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="
                    mt-2
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-[#CCFBF1]
                    bg-[#F0FDFA]
                    focus:border-[#14B8A6]
                    focus:ring-4
                    focus:ring-[#14B8A6]/15
                    outline-none
                    transition-all
                  "
                />
              </div>

              <div>
                <label className="
                  text-sm
                  font-medium
                  text-[#134E4A]
                ">
                  Subject
                </label>

                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="
                    mt-2
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border
                    border-[#CCFBF1]
                    bg-[#F0FDFA]
                    focus:border-[#14B8A6]
                    focus:ring-4
                    focus:ring-[#14B8A6]/15
                    outline-none
                    transition-all
                  "
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div>

              <label className="
                text-sm
                font-medium
                text-[#134E4A]
              ">
                Message *
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="
                  mt-2
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-[#CCFBF1]
                  bg-[#F0FDFA]
                  focus:border-[#14B8A6]
                  focus:ring-4
                  focus:ring-[#14B8A6]/15
                  outline-none
                  transition-all
                  h-40
                  resize-none
                "
              />

            </div>

            {/* SUCCESS */}
            {success && (
              <div className="
                bg-emerald-50
                border
                border-emerald-200
                text-emerald-700
                px-5
                py-4
                rounded-2xl
                text-sm
              ">
                {success}
              </div>
            )}

            {/* ERROR */}
            {error && (
              <div className="
                bg-red-50
                border
                border-red-200
                text-red-700
                px-5
                py-4
                rounded-2xl
                text-sm
              ">
                {error}
              </div>
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
                font-semibold
                transition-all
                duration-300
                shadow-[0_10px_40px_rgba(20,184,166,0.25)]
                hover:shadow-[0_20px_60px_rgba(20,184,166,0.35)]
                hover:scale-[1.01]
                disabled:opacity-70
              "
            >
              {loading ? "Sending Message..." : "Send Message →"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}