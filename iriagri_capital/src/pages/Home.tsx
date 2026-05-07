import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/home/Hero";
import ServicesStats from "../components/sections/home/ServicesStats";
import Vision from "../components/sections/home/Vision";
import Partner from "../components/sections/home/Partner";
import Features from "../components/sections/home/Features";
import Footer from "../components/layout/Footer";
import Whatsapp from "../components/ui/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesStats />
      {/* <AboutPreview /> */}
      <Vision />
      <Partner />
      <Features/>
      <Footer/>
      <Whatsapp/>
    </>
  );
}