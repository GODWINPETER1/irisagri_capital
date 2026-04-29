import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ServicesHero from "../components/sections/services/ServicesHero";
import ServicesGrid from "../components/sections/services/ServicesGrid";
import Process from "../components/sections/services/Process";
import Capability from "../components/sections/services/Capability";
import StatsStrip from "../components/sections/about/StatsStrip";
import ServicesCTA from "../components/sections/services/ServicesCTA";

export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <Process />
      <Capability />
      <StatsStrip />
      <ServicesCTA />
      <Footer />
    </>
  );
}