import { FaCalendarAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

const Card_3 = ({ id, title, image, date, message }) => {
  return (
    <div className="group card_2 w-full rounded-xl shadow-lg md:w-1/3 pb-3 bg-white">
      <div className="w-full h-[300px] relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full rounded-t-lg group-hover:transform group-hover:rotate-6 group-hover:scale-125 duration-500"
        />
      </div>
      <div className="p-4">
        <h2 className="font-medium text-2xl max-w-sm py-3">{title}</h2>
        <h2 className="my-3 border-b-2 border-gray-200 pb-5 text-gray-500 text-lg">
          {message}
        </h2>
        <div className="flex items-center justify-between py-2">
          <div className="w-1/2 mt-4 flex items-center justify-start gap-5">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shadow-none">
              <FaCalendarAlt size={18} />
            </div>
            <div className="">
              <h2 className="font-medium">Date:</h2>
              <h2 className="text-gray-600">{date}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_3;
