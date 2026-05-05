// QualityCTA.tsx
import { Link } from "react-router-dom";

export default function QualityCTA() {
  return (
    <section className="py-16 bg-primary text-white text-center">

      <h2 className="text-3xl font-bold">
        Partner with Us for Quality Cashew
      </h2>

      <Link
        to="/contact"
        className="inline-block mt-6 bg-white text-primary px-6 py-3 rounded-full"
      >
        Request a Quote →
      </Link>

    </section>
  );
}