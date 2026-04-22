import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

export default function Products() {
  return (
    <>
      <Navbar />

      <section className="h-[60vh] bg-primary text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Our Products</h1>
      </section>

      {/* Products */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-primary">
          Raw Cashew Nuts
        </h2>
      </section>

      {/* Quality */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-primary">
          Quality Standards
        </h2>
      </section>

      {/* Future */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-primary">
          Processing & Packaging
        </h2>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <h2 className="text-3xl font-bold">Request Bulk Supply</h2>
      </section>

      {/* <Footer /> */}
    </>
  );
}