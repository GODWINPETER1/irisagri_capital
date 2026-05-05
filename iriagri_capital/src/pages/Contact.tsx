import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactHero from "../components/sections/contact/ContactHero";
import ContactForm from "../components/sections/contact/ContactForm";
import ContactInfo from "../components/sections/contact/ContactInfo";
import MapSection from "../components/sections/contact/MapSection";
import ContactCTA from "../components/sections/contact/ContactCTA";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <MapSection />
      <ContactCTA />
      <Footer />
    </>
  );
}