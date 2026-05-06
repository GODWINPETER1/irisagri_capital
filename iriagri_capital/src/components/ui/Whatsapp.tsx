import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
        href="https://wa.me/255749331388?text=Hello%20IrisAgri%2C%20I%20would%20like%20to%20inquire%20about%20your%20cashew%20products."
         rel="noopener noreferrer"
         target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
