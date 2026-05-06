import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SustainabilityHero from "../components/sections/sustainability/Hero";
import CommunityImpact from "../components/sections/sustainability/Impact";
import SustainabilityPillars from "../components/sections/sustainability/pillar";
import SustainabilityStats from "../components/sections/sustainability/Stats";

export default function Sustainability() {
  return (
    <>
      <Navbar />
      <SustainabilityHero />
      <CommunityImpact />
      <SustainabilityPillars />
      <SustainabilityStats/>
      <Footer />
    </>
  );
}