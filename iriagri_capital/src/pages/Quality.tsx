// src/pages/quality/Quality.tsx
import QualityHero from "../components/sections/quality/QualityHero";
import FarmQuality from "../components/sections/quality/FarmQuality";
import Processing from "../components/sections/quality/Processing";
import QualityControl from "../components/sections/quality/QualityControl";
import Packaging from "../components/sections/quality/Packaging";
import Traceability from "../components/sections/quality/Tranceability";
import QualityCTA from "../components/sections/quality/QualityCTA";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Quality() {
  return (
    <>
      <Navbar/>
      <QualityHero />
      <FarmQuality />
      <Processing />
      <QualityControl />
      <Packaging />
      <Traceability />
      <QualityCTA />
      <Footer/>
    </>
  );
}