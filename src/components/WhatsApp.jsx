import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center fixed z-50 bottom-5 right-5 hover:transform hover:-translate-y-3 hover:scale-125 duration-500">
      <a href="#">
        <FaWhatsapp size={30} className="text-green-900" />
      </a>
    </div>
  );
};

export default WhatsApp;
