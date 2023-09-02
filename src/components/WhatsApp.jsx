import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhatsApp = () => {
  const whatsApp = "https://api.whatsapp.com/send?phone=0545366884";

  return (
    <Link to={whatsApp} target="_blank">
      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center fixed z-50 bottom-5 right-5 hover:transform hover:-translate-y-3 hover:scale-125 duration-500">
        <FaWhatsapp size={30} className="text-green-900" />
      </div>
    </Link>
  );
};

export default WhatsApp;
