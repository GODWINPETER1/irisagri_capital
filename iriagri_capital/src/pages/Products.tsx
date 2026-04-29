import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ProductsHero from "../components/sections/products/ProductsHero";
import MainProduct from "../components/sections/products/MainProducts";
import FutureProducts from "../components/sections/products/FutureProducts";
import ProductStandards from "../components/sections/products/ProductStandards";
import ExportSection from "../components/sections/products/ExportSection";
import ProductsCTA from "../components/sections/products/ProductCTA";

export default function Products() {
  return (
    <>
      <Navbar />
      <ProductsHero />
      <MainProduct />
      <FutureProducts />
      <ProductStandards />
      <ExportSection />
      <ProductsCTA />
      <Footer />
    </>
  );
}