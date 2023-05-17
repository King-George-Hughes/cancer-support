import { FaCalendarAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

const Card_4 = ({ id, title, image, date, time }) => {
  return (
    <div className="card_2 w-full rounded-xl shadow-lg basis-1/3 flex-1 pb-5 group md:max-w-[420px]">
      <div className="w-full h-[300px] relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute left-0 right-0 bottom-0 w-full h-full rounded-t-lg group-hover:transform group-hover:rotate-6 group-hover:scale-125 duration-500"
        />
      </div>
      <div className="p-4">
        <h2 className="font-medium text-2xl max-w-sm border-b-2 border-gray-200 py-3">
          {title}
        </h2>
        <div className="flex items-center justify-between py-2">
          <div className="w-1/2 mt-4 flex items-center justify-center gap-5">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shadow-none">
              <FaCalendarAlt size={18} />
            </div>
            <div className="">
              <h2 className="font-medium">Date:</h2>
              <h2 className="text-gray-600">{date}</h2>
            </div>
          </div>
          <div className="w-[1px] h-[50px] bg-gray-200"></div>
          <div className="w-1/2 mt-4 flex items-center justify-center gap-5">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
              <AiFillClockCircle size={18} />
            </div>
            <div className="">
              <h2 className="font-medium">Time:</h2>
              <h2 className="text-gray-600">{time}</h2>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="w-[100% -20px] h-[50px] bg-pink-500 rounded-md text-center text-white text-2xl flex items-center justify-center mx-3"
      >
        Event Details
      </a>
    </div>
  );
};

export default Card_4;
