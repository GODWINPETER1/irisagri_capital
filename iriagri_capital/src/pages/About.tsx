import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutHero from "../components/sections/about/AboutHero";
import Journey from "../components/sections/about/Journey";
import MissionVision from "../components/sections/about/MissionVision";
import Practices from "../components/sections/about/Practices";
import StatsStrip from "../components/sections/about/StatsStrip";
import AboutCTA from "../components/sections/about/AboutCTA";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Journey />
      <MissionVision />
      <Practices />
      <StatsStrip />
      <AboutCTA />
      <Footer />
    </>
  );
}