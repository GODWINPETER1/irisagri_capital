import { FaLeaf, FaAward, FaTruck, FaChartLine } from "react-icons/fa";

export default function Features() {
  return (
    <section className="py-12 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

        <div>
          <FaLeaf className="text-primary text-3xl mx-auto" />
          <h4 className="mt-3 font-semibold">Sustainable Farming</h4>
          <p className="text-sm text-gray-500">
            Eco-friendly agriculture practices
          </p>
        </div>

        <div>
          <FaAward className="text-primary text-3xl mx-auto" />
          <h4 className="mt-3 font-semibold">Premium Quality</h4>
          <p className="text-sm text-gray-500">
            High-grade cashew nuts
          </p>
        </div>

        <div>
          <FaTruck className="text-primary text-3xl mx-auto" />
          <h4 className="mt-3 font-semibold">Reliable Supply</h4>
          <p className="text-sm text-gray-500">
            Consistent delivery
          </p>
        </div>

        <div>
          <FaChartLine className="text-primary text-3xl mx-auto" />
          <h4 className="mt-3 font-semibold">Future Ready</h4>
          <p className="text-sm text-gray-500">
            Expanding into processing
          </p>
        </div>

      </div>
    </section>
  );
}