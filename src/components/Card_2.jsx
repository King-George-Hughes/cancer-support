import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const Card_2 = ({ title, image, date, time, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.5)}
      className="card_2 w-full rounded-xl shadow-lg md:w-1/3 pb-5 group"
    >
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
    </motion.div>
  );
};

Card_2.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  index: PropTypes.number,
};

export default Card_2;
