import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/255XXXXXXXXX"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}