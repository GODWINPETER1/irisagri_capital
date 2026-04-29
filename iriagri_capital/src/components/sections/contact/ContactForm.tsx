export default function ContactForm() {
  return (
    <section className="py-24 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto px-6">

        {/* CARD CONTAINER */}
        <div className="grid md:grid-cols-2 gap-12 bg-[#f3f4f2] p-10 md:p-14 rounded-3xl">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">

            <p className="text-xs uppercase tracking-widest text-gray-500">
              SEND US A MESSAGE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 leading-tight">
              We’d Love to Hear
              <br />
              From You
            </h2>

            <div className="w-12 h-[2px] bg-secondary mt-4 mb-4"></div>

            <p className="text-gray-600 max-w-sm">
              Fill out the form and our team will get back to you as soon as possible.
            </p>

          </div>

          {/* FORM */}
          <form className="space-y-5">

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  placeholder="Enter your full name"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none bg-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none bg-white"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  placeholder="Enter your phone number"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none bg-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  placeholder="How can we help you?"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none bg-white"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                placeholder="Write your message here..."
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none bg-white h-36"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full bg-primary text-white py-4 rounded-full font-semibold hover:bg-green-800 transition flex items-center justify-center gap-2">
               Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}