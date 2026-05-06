import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import RequestQuote from "./pages/RequestQoute";
import Quality from "./pages/Quality";
import Sustainability from "./pages/Sustainability";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/quality" element={<Quality/>}/>
      <Route path="/sustainability" element={<Sustainability/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/request-quote" element={<RequestQuote/>}/>
    </Routes>
  );
}