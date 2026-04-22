import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="h-[60vh] bg-primary text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>

      {/* Info */}
      <section className="py-20 text-center">
        <p>Email | Phone | Location</p>
      </section>

      {/* Form */}
      <section className="py-20 bg-gray-50 px-6">
        <form className="max-w-xl mx-auto space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <textarea className="w-full p-3 border rounded" placeholder="Message" />
          <button className="bg-primary text-white px-6 py-3 rounded">
            Send
          </button>
        </form>
      </section>

      {/* Map */}
      <section className="py-20 text-center">
        Map goes here
      </section>

      {/* <Footer /> */}
    </>
  );
}